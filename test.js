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
let article1 = new Article(1, "Souris", "Logitech", 85, "mat-info", "Tout matériel informatique physique en lien avec un ordinateur", "img/souris.jpg")
let article2 = new Article(2, "Clavier", "Microhard", 49.5, "mat-info", "Tout matériel informatique physique en lien avec un ordinateur", "img/clavier.jpg")

// //Récupération des balises pour l'affichage
// let id1=document.getElementById("id1")
// let id2= document.getElementById("id2")
// let id3= document.getElementById("id3")
// let id4=document.getElementById("id4")
// let id5=document.getElementById("id5")
// let id6= document.getElementById("id6")
// let id7=document.getElementById("id7").src=article1.imageUrl

// //Récupération des balises pour l'affichage
let id11 = document.getElementById("id11")
let id12 = document.getElementById("id12")
let id13 = document.getElementById("id13")
let id14 = document.getElementById("id14")
let id15 = document.getElementById("id15")
let id16 = document.getElementById("id16")
//let id17=document.getElementById("id17").src=article2.imageUrl

// //Affichage des données
// id11.innerHTML=article2.idArticle
// id12.innerHTML=article2.description
// id13.innerHTML=article2.brand
// id14.innerHTML=article2.unitaryPrice
// id15.innerHTML=article2.catName
// id16.innerHTML = article2.descriptionCat