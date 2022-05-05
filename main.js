

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
let article2 = new Article()


// //Récupération des balises pour l'affichage
let id1=document.getElementById("id1")
let id2= document.getElementById("id2")
let id3= document.getElementById("id3")
let id4=document.getElementById("id4")
let id5=document.getElementById("id5")
let id6= document.getElementById("id6")
let id7=document.getElementById("id7").src=article1.imageUrl



// //Affichage des données 
id1.innerHTML=article1.idArticle
id2.innerHTML=article1.description
id3.innerHTML=article1.brand
id4.innerHTML=article1.unitaryPrice
id5.innerHTML=article1.catName
id6.innerHTML = article1.descriptionCat


//Initialisation du local storage (panier)
let caddy= window.localStorage

function addCaddy(params) {
    let vari=1
    caddy.setItem('test',vari)
}


