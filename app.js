const articles = [ // Création d'un tableau comme base de données
  { id: 1, titre: "Salle Réunion 1", contenu: "Description de la salle 1", button: "Réserver", image: "images/salle4pers.png" },
  { id: 2, titre: "Salle Réunion 2", contenu: "Description de la salle 2", button: "Réserver", image: "images/salle10pers.png"},
  { id: 3, titre: "Salle Réunion 3", contenu: "Description de la salle 3", button: "Réserver", image: "images/salle25pers.png"}
];


displayFeed(fetch);



function createCard(article) {

    let newDiv = document.createElement("div"); // créer une balise appelée "div". le résultat est un objet DOM, pas encore visible dans la page.

    let titre = document.createElement ("h2");
        titre.textContent = article.titre; // on se sert du tableau pour remplir l'objet, "appel au tableau)"
        newDiv.appendChild(titre); // lien parent-enfant dans la section je rattache titre à newDIv
        titre.classList.add("h2");

    let contenu = document.createElement ("p"); // créer un objet de contenu = paragraphe
        contenu.textContent = article.contenu;
        newDiv.appendChild(contenu);
        contenu.classList.add("p");

    let button = document.createElement ("button");
        button.textContent = article.button;
        newDiv.appendChild(button);
        button.classList.add("btn");

    let image = document.createElement("img");
        image.src = article.image;
        newDiv.appendChild(image);
        image.classList.add("img");

 return newDiv;
}

// créer une fonction pour la class!!


function displayFeed() { // on prend la main sur l'id feed-container
    const feedcontainer = document.getElementById('feed-container');
    console.log(feedcontainer);
    feedcontainer.innerHTML = ""; 
}

    articles.forEach(article=> {
        let feedcontainer = document.getElementById('feed-container');
        let encart = createCard(article);
        feedcontainer.appendChild(encart);
    console.log(feedcontainer);
    });



async function fetchArticles() {
    const reponse = await fetch ("https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10", {method: "GET"});
    const transformeReponse = await reponse.json();
    console.log(transformeReponse);
    return (transformeReponse);    

}

let fetch = async function fetchArticles()
