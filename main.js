


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
let article2 = new Article( 2, "Clavier" ,"Microhard", 49.5,"Materiel info","Tout matériel informatique physique en lien avec un ordinateur", "img/clavier.jpg")
let article3=new Article(3,"Système d'exploitation","Fenetres Vistouille",100, "Logiciel","Toutes les solutions pour vous sentir mieux devant un bureau.","img/office.jpg")
let article5=new Article(  5,"Clé USB 8 To","Syno",65,"Materiel info","Tout matériel informatique physique en lien avec un ordinateur", "img/cleUSB.jpg")
let article6= new Article (6, "Laptop", "PH", 1199,"PC","Ordinateur portable ou pas","img/portable.jpg")
let article7=new Article( 7, "CD x 500", "CETME", 250,"Materiel info","Tout matériel informatique physique en lien avec un ordinateur", "img/CD.jpg")
let article9= new Article( 9,"DVD+R x 100", "Logitech", 1500,"Materiel info", "Tout matériel informatique physique en lien avec un ordinateur","img/CD.jpg")
let article11= new Article( 11, "Casque Audio", "Syno", 105, "Materiel info", "Tout matériel informatique physique en lien avec un ordinateur","img/casque.jpg")
let article12=new Article(12, "Webcam", "Logitech", 985,"Materiel info","Tout matériel informatique physique en lien avec un ordinateur", "img/webcam.jpg")
let article13= new Article(13, "Enceintes",   "Logitech",   285,  "Materiel info",   "Tout matériel informatique physique en lien avec un ordinateur", "img/enceintesPC.jpg")
let article14= new Article(14,"Antivrus", "Norton", 34.99, "Logiciel","Toutes les solutions pour vous sentir mieux devant un bureau.", "img/antivirus.jpg")
 


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

// //Récupération des balises pour l'affichage
let id11=document.getElementById("id11")
let id12= document.getElementById("id12")
let id13= document.getElementById("id13")
let id14=document.getElementById("id14")
let id15=document.getElementById("id15")
let id16= document.getElementById("id16")
let id17=document.getElementById("id17").src=article2.imageUrl



// //Affichage des données 
id11.innerHTML=article2.idArticle
id12.innerHTML=article2.description
id13.innerHTML=article2.brand
id14.innerHTML=article2.unitaryPrice
id15.innerHTML=article2.catName
id16.innerHTML = article2.descriptionCat

//Initialisation du local storage (panier)
let caddy= window.localStorage

function addCaddy(params) {

    let vari=document.getElementById("id11").innerHTML
    caddy.setItem('test',vari)
}


