//constructeur de l'objet Article
class Article {
    constructor(idArticle, description, brand, unitaryPrice, catName, descriptionCat, imageUrl) {
        this.idArticle = idArticle;
        this.description = description;
        this.brand = brand;
        this.unitaryPrice = unitaryPrice;
        this.catName = catName;
        this.descriptionCat = descriptionCat;
        this.imageUrl = imageUrl;
    }
}

//init checkbox catégories
let catMatInfo = document.getElementById('cat_mat-info')
let catLog = document.getElementById('cat_log')
let catPc = document.getElementById('cat_pc')
let catSmart = document.getElementById('cat_smart')

// //Construction des articles
let listArticles = []
let article1 = new Article(1, "Souris", "Logitech", 85, "mat-info", "Tout matériel informatique physique en lien avec un ordinateur", "img/souris.jpg")
let article2 = new Article(2, "Clavier", "Microhard", 49.5, "mat-info", "Tout matériel informatique physique en lien avec un ordinateur", "img/clavier.jpg")
let article3 = new Article(3, "Système d'exploitation", "Fenetres Vistouille", 100, "logiciel", "Toutes les solutions pour vous sentir mieux devant un bureau.", "img/office.jpg")
let article5 = new Article(5, "Clé USB 8 To", "Syno", 65, "mat-info", "Tout matériel informatique physique en lien avec un ordinateur", "img/cleUSB.jpg")
let article6 = new Article(6, "Laptop", "PH", 1199, "pc", "Ordinateur portable ou pas", "img/portable.jpg")
let article7 = new Article(7, "CD x 500", "CETME", 250, "mat-info", "Tout matériel informatique physique en lien avec un ordinateur", "img/CD.jpg")
let article9 = new Article(9, "DVD+R x 100", "Logitech", 1500, "mat-info", "Tout matériel informatique physique en lien avec un ordinateur", "img/CD.jpg")
let article11 = new Article(11, "Casque Audio", "Syno", 105, "mat-info", "Tout matériel informatique physique en lien avec un ordinateur", "img/casque.jpg")
let article12 = new Article(12, "Webcam", "Logitech", 985, "mat-info", "Tout matériel informatique physique en lien avec un ordinateur", "img/webcam.jpg")
let article13 = new Article(13, "Enceintes", "Logitech", 285, "mat-info", "Tout matériel informatique physique en lien avec un ordinateur", "img/enceintesPC.jpg")
let article14 = new Article(14, "Antivrus", "Norton", 34.99, "logiciel", "Toutes les solutions pour vous sentir mieux devant un bureau.", "img/antivirus.jpg")

//création des articles côté front
createCard(article1);
createCard(article2);
createCard(article3);
createCard(article5);
createCard(article6);
createCard(article7);
createCard(article9);
createCard(article11);
createCard(article12);
createCard(article13);
createCard(article14);


//Initialisation du local storage (panier)
let caddy = window.localStorage;
let caddySize = window.localStorage.length

// - affichage du panier sur la page d'accueil
let qty_cart = document.getElementById("qty-cart");
qty_cart.innerHTML = caddySize

let totalCart = document.getElementById("totalCart")
let hr = document.getElementsByClassName('hr')
let showCaddy = document.getElementById("idCart");

// affichage du panier au click (logo)
showCaddy.addEventListener('click', function (e) {
    e.preventDefault()
    console.log('click')
    for (let i = 0; i < caddySize; i++) {
        let obj = getArticleById(caddy.key(i))
        createLineCart(obj)
        totalCaddy()
    }
})

// calcul du total panier
function totalCaddy() {
    let total = 0
    for (let i = 0; i < caddySize; i++) {
       let obj = JSON.parse(caddy.getItem(caddy.key(i)))
        total +=obj.sum
    }
    totalCart.innerHTML = total + " €"
}
//totalCaddy()

//remet le panier à 0 au rechargement de la page
// if(caddySize > 0){
//   caddy.clear();
// }


function getArticleById(id) {
    for (let i = 0; i < listArticles.length; i++) {
        if (listArticles[i].idArticle == id) {
            //console.log(listArticles[i])
            return listArticles[i]
        }
    };
}

//Ajout d'un article dans le panier
function addCaddy(id) {
    let obj = getArticleById(id)
    if (caddy.getItem(id)) {
        let objLocal = JSON.parse(caddy.getItem(id))
        let qty = objLocal.qty
        qty++
        caddy.setItem(id, JSON.stringify({ qty: qty, sum: qty * obj.unitaryPrice }))
    } else {
        caddy.setItem(id, JSON.stringify({ qty: 1, sum: obj.unitaryPrice }))
    }

    alert("Votre article a bien été ajouté au panier")

    // - affichage du panier sur la page d'accueil
    qty_cart.innerHTML = caddySize

}

//numéro de l'idArticle du dernier article.
let lastId = listArticles[listArticles.length - 1].idArticle

//Ajout d'un article dans le panier, au clic sur le bouton "Ajouter au panier"
for (let i = 0; i < lastId + 1; i++) {
    if (document.getElementById(i) != null) {
        document.getElementById(i).addEventListener('click', function () {
            addCaddy(i)
        })
    }
}

// function deleteCaddy(id) {
//     caddy.getItem(id, getArticleById(id)).

// }


function createCard(article) {
    let divArticles = document.getElementById("articles");

    // div card
    let divCard = document.createElement("div");
    divCard.className = "card " + article.catName;
    divCard.style = "width: 18rem;";
    divArticles.appendChild(divCard);

    //img article
    let imgCard = document.createElement("img");
    imgCard.className = "card-img-top art_img";
    //imgCard.src = article.imageUrl;
    imgCard.setAttribute("src", article.imageUrl);
    imgCard.alt = article.description;
    divCard.appendChild(imgCard);

    // div card-body
    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body d-flex flex-column";
    divCard.appendChild(divCardBody);

    //h5
    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = article.description;
    divCardBody.appendChild(cardTitle);

    //p card-text
    let pCardText = document.createElement("p");
    pCardText.className = "card-text bold-blue";
    pCardText.innerHTML = article.unitaryPrice + " €";
    divCardBody.appendChild(pCardText);

    //button
    let buttonCard = document.createElement("button");
    buttonCard.className = "btn art-btn";
    buttonCard.innerHTML = "Ajouter au panier";
    buttonCard.id = article.idArticle;
    divCardBody.appendChild(buttonCard);

    //Ajout de l'article créé en ligne dans un tableau
    listArticles.push(article)
}

function createLineCart(article) {
    let modalBody = document.getElementById("modalBody");
    let qtyObj = JSON.parse(window.localStorage.getItem(article.idArticle))
    let qty = qtyObj.qty
    //div
    let divBodyArt = document.createElement("div");
    divBodyArt.className = "modal-body-art";
    modalBody.appendChild(divBodyArt);

    //img art
    let imgCart = document.createElement("img")
    imgCart.setAttribute("src", article.imageUrl)
    imgCart.className = "modal-img-cart col-grid-1"
    imgCart.alt = article.description
    divBodyArt.appendChild(imgCart);

    //p name
    let pNameCart = document.createElement("p");
    pNameCart.className = "col-grid-2"
    pNameCart.innerHTML = article.description
    divBodyArt.appendChild(pNameCart);

    //p price
    let pPriceCart = document.createElement("p");
    pPriceCart.className = "col-grid-3 bold-blue"
    pPriceCart.innerHTML = article.unitaryPrice + " €"
    divBodyArt.appendChild(pPriceCart);

    //p qty
    let pQtyCart = document.createElement("p");
    pQtyCart.className = "col-grid-4 bold-blue"
    pQtyCart.id = "qty" + article.idArticle
    pQtyCart.innerHTML = qty
    // console.log("qty : " + qty)
    divBodyArt.appendChild(pQtyCart);

    //img garbage
    let imgGarbage = document.createElement("img")
    imgGarbage.setAttribute("src", "./img/delete.png")
    imgGarbage.className = "col-grid-5"
    imgGarbage.id = "000" + article.idArticle
    console.log("imgGarbage.id : " + imgGarbage.id)
    imgGarbage.alt = "Supprimer du panier"
    divBodyArt.appendChild(imgGarbage);

    //hr
    let hrCart = document.createElement("hr")
    hrCart.className = "hr"
    modalBody.appendChild(hrCart)


}


// function deleteLineCaddy(){
//   document.addEventListener('click', function(e){
//     let divArtCart = document.getElementsByClassName("modal-body-art")

//     if(e.target && e.target.className == "col-grid-5"){ 
//       //récupère l'id de l'article à supprimer
//       let idToRemove = e.target.id.substr(3);

//       ////////////////
//       //ATtenion, ne fonctionne pas si je supprime un article et qu'il y en a moins que prévu !
//       //à rectifier


//       divArtCart[idToRemove - 1].remove() //j'enlève 1 pour retomber sur l'index 
//       hr[idToRemove - 1].remove()
//       caddy.removeItem(idToRemove);

//       //create alert "article supprimé"
//       let divOk = document.createElement('div')
//       divOk.className = "alert alert-success"
//       divOk.role = "alert"
//       divOk.innerHTML = "L'article a bien été supprimé"
//       document.getElementById("modalBody").appendChild(divOk)
//       //l'alerte disparait au bout de 5 secondes
//       setInterval(function() {
//         divOk.remove()
//       }, 5000)
//        ////////////////
//       //insertBefore(document.getElementsByClassName('hr')[0])

//       //Ajouter une popup putôt que alert
//       //alert("L'article a bien été supprimé de votre panier.")
//     } 
//   })
// }
//deleteLineCaddy()

//document.getElementById('mycheckbox').checked=true;
let mat_info = document.getElementsByClassName("mat-info")
let pc = document.getElementsByClassName("pc")
let logiciel = document.getElementsByClassName("logiciel")
let smartphone = document.getElementsByClassName("smartphone")

catMatInfo.addEventListener('click', function () {

    if (catMatInfo.checked) {

        for (i = 0; i < mat_info.length; i++) {
            mat_info[i].style.display = "flex"
        }

        if (!catPc.checked) {
            for (i = 0; i < pc.length; i++) {
                pc[i].style.display = "none"
            }
        }

        if (!catLog.checked) {
            for (i = 0; i < logiciel.length; i++) {
                logiciel[i].style.display = "none"
            }
        }

        if (!catSmart.checked) {
            for (i = 0; i < smartphone.length; i++) {
                smartphone[i].style.display = "none"
            }
        }

    }

    if (!catMatInfo.checked && !catLog.checked && !catPc.checked && !catSmart.checked) {
        for (let i = 0; i < listArticles.length; i++) {
            listArticles[i].style.display = "flex"
        }
    }

})

catPc.addEventListener('click', function () {

    if (catPc.checked) {

        for (i = 0; i < pc.length; i++) {
            pc[i].style.display = "flex"
        }
        if (!catMatInfo.checked) {
            for (i = 0; i < mat_info.length; i++) {
                mat_info[i].style.display = "none"
            }
        }

        if (!catLog.checked) {
            for (i = 0; i < logiciel.length; i++) {
                logiciel[i].style.display = "none"
            }
        }

        if (!catSmart.checked) {
            for (i = 0; i < smartphone.length; i++) {
                smartphone[i].style.display = "none"
            }
        }
    }

    if (!catMatInfo.checked && !catLog.checked && !catPc.checked && !catSmart.checked) {
        for (let i = 0; i < listArticles.length; i++) {
            listArticles[i].style.display = "flex"
        }
    }
})



catLog.addEventListener('click', function () {

    if (catLog.checked) {

        for (i = 0; i < logiciel.length; i++) {
            logiciel[i].style.display = "flex"
        }
        if (!catMatInfo.checked) {
            for (i = 0; i < mat_info.length; i++) {
                mat_info[i].style.display = "none"
            }
        }

        if (!catPc.checked) {
            for (i = 0; i < pc.length; i++) {
                pc[i].style.display = "none"
            }
        }

        if (!catSmart.checked) {
            for (i = 0; i < smartphone.length; i++) {
                smartphone[i].style.display = "none"
            }
        }
    }

    if (!catMatInfo.checked && !catLog.checked && !catPc.checked && !catSmart.checked) {
        for (let i = 0; i < listArticles.length; i++) {
            listArticles[i].style.display = "flex"
        }
    }


})

catSmart.addEventListener('click', function () {

    if (catSmart.checked) {
        for (i = 0; i < smartphone.length; i++) {
            smartphone[i].style.display = "flex"
        }

        if (!catMatInfo.checked) {
            for (i = 0; i < mat_info.length; i++) {
                mat_info[i].style.display = "none"
            }
        }
        if (!catLog.checked) {
            for (i = 0; i < logiciel.length; i++) {
                logiciel[i].style.display = "none"
            }
        }
        if (!catPc.checked) {
            for (i = 0; i < pc.length; i++) {
                pc[i].style.display = "none"
            }
        }
    }

    if (!catMatInfo.checked && !catLog.checked && !catPc.checked && !catSmart.checked) {
        for (let i = 0; i < listArticles.length; i++) {
            listArticles[i].style.display = "flex"
        }
    }


})


// // Bind function to onclick event for checkbox
// catMatInfo.onclick = function () {
//     // access properties using this keyword
//     if (this.checked) {
//         // Fonction qui garde que les articles de la catégorie et display none les autres
//         catMatInfo.style.display = "flex"
//     } else {
//         // Returns false if not checked
//         catMatInfo.style.display = "none"
//     }
// };

// document.addEventListener("click",function(){
//     if(!catMatInfo.checked && !catLog.checked && !catPc.checked && !catSmart.checked){
//     catMatInfo.style.display = "flex"
//     catLog.style.display = "flex"
//     catPc.style.display = "flex"
//     catSmart.style.display = "flex"
// }})





//ce qu'il reste à relier à la page :
// - supprimer du panier
// - afficher la qté dans le panier
// - afficher le total de la commande
// - passer commande -> alert
// - ajouter au panier -- ok
// - afficher la qté dans le panier -- ok

// - passer commande -> alert
// - modifier la quantité de l'affichage du panier sur la page d'accueil -- ok
// - gérer les checkbox des catégories et l'affichage qui leur correspond

