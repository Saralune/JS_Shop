
// recup des données

const data="./data/art.json"
let  articles= []

fetch(data)
.then(response => {
   return response.json();
})
.then(jsondata => {
    //console.log(jsondata.rows)

 
    jsondata.rows.forEach(el => {

         articles.push(el)

        console.log(el)
    });
    
});

    
    console.log(Object.entries(articles))

 console.log(articles)
// console.log (articles)


//constructeur de l'objet Article

// class Article {

//     constructor(idArticle, description,brand,unitaryPrice, catName, descriptionCat, imageUrl) {
//         this.idArticle=idArticle;
//         this.description=description;
//         this.brand=brand;
//         this.unitaryPrice=unitaryPrice;
//         this.catName=catName;
//         this.descriptionCat=descriptionCat;
//         this.imageUrl=imageUrl
//     }


// }
// //Construction des articles
// let article1 = new Article (1, "Souris","Logitech",85,"Materiel info",
// "Tout matériel informatique physique en lien avec un ordinateur","img/souris.jpg")

// //Récupération des balises pour l'affichage
let id1=document.getElementById("id1")
let id2= document.getElementById("id2")
let id3= document.getElementById("id3")
let id4=document.getElementById("id4")
let id5=document.getElementById("id5")
let id6= document.getElementById("id6")
//let id7=document.getElementById("id7").src=articles[0].ImageUrl



// //Affichage des données 
// id1.innerHTML=articles[0]
// id2.innerHTML=articles[0].Description
// id3.innerHTML=articles[0].Brand
// id4.innerHTML=articles[0].UnitaryPrice
// id5.innerHTML=articles[0].CatName
// id6.innerHTML=articles[0].Descriptions








//Initialisation du local storage (panier)
let caddy= window.localStorage

function addCaddy(params) {
    let vari=1
    caddy.setItem('test',vari)
}


