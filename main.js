//constructeur de l'objet Article
class Article {
    constructor(idArticle, description,brand,unitaryPrice, catName, descriptionCat, imageUrl) {
        this.idArticle=idArticle;
        this.description=description;
        this.brand=brand;
        this.unitaryPrice=unitaryPrice;
        this.catName=catName;
        this.descriptionCat=descriptionCat;
        this.imageUrl=imageUrl
    }
}

// //Construction des articles
let article1 = new Article (1, "Souris","Logitech",85,"Materiel info",
"Tout matériel informatique physique en lien avec un ordinateur","img/souris.jpg")
console.log(article1)
let article2 = new Article()

// //Récupération des balises pour l'affichage
// let id1=document.getElementById("id1")
// let id2= document.getElementById("id2")
// let id3= document.getElementById("id3")
// let id4=document.getElementById("id4")
// let id5=document.getElementById("id5")
// let id6= document.getElementById("id6")
// let id7=document.getElementById("id7").src=article1.imageUrl

// //Affichage des données 
// id1.innerHTML=article1.idArticle
// id2.innerHTML=article1.description
// id3.innerHTML=article1.brand
// id4.innerHTML=article1.unitaryPrice
// id5.innerHTML=article1.catName
// id6.innerHTML = article1.descriptionCat

//Initialisation du local storage (panier)
let caddy= window.localStorage

function addCaddy(params) {
    let vari=1
    caddy.setItem('test',vari)
}
//document.getElementById("addCard").innerHTML = "salut"

createCard(article1);

function createCard(article){
    let divArticles = document.getElementById("articles");

    // div card
    let divCard = document.createElement("div");
    divCard.className= "card";
    divCard.style="width: 18rem;"
    divCard.appendChild(divArticles)

    //img article
    let imgCard = document.createElement("img");
    imgCard.className = "card-img-top art_img";
    //imgCard.id = article.idArticle
    imgCard.alt = article.description;
    divCard.appendChild(imgCard);
    //document.getElementById(article.idArticle).src = article.imageUrl;

    // div card-body
    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body"
    divCard.appendChild(divCardBody);

    //h5
    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = article.description
    divCardBody.appendChild(cardTitle);
    //console.log(article.description)
    console.log(cardTitle.innerHTML)

    //p card-text
    let pCardText = document.createElement("p");
    pCardText.className = "card-text";
    pCardText.innerHTML = article.unitaryPrice
    divCardBody.appendChild(cardTitle);

    //button
    let buttonCard = document.createElement("button");
    buttonCard.className = "btn art-btn";
    buttonCard.innerHTML = "Ajouter au panier"
    buttonCard.id = article.idArticle
    divCardBody.appendChild(buttonCard);
    console.log(buttonCard.innerHTML)
}

{/* <div class="card" style="width: 18rem;">
        <img src="./img/casque.jpg" class="card-img-top art_img" alt="Casque Gamer">
        <div class="card-body">
            <h5 class="card-title">Casque Gamer</h5>
            <p class="card-text">210 €</p>
            <button type="button" id="id" class="btn art-btn">AJouter au panier</button>
        </div>
</div> */}
