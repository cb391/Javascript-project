// Tableau "articles" regroupe  3 objets. Chaque objet est appelé ainsi par ex: articles[0].contenu
const articles = [
    {
        id: 1,
        titre: "Salle Réunion 1",
        contenu: "Description de la salle 1",
        button: "Réserver",
        image: "images/salle4pers.png"
    },
    {
        id: 2,
        titre: "Salle Réunion 2",
        contenu: "Description de la salle 2",
        button: "Réserver",
        image: "images/salle10pers.png"
    },
    {
        id: 3,
        titre: "Salle Réunion 3",
        contenu: "Description de la salle 3",
        button: "Réserver",
        image: "images/salle25pers.png"
    }
];


// iteration des salles de réunion, chacune a une Card
function createCard(article) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("card");                // Ajoute la classe "card" pour le style CSS

    let titre = document.createElement("h2");
    titre.textContent = article.titre;           // Injecte le titre de l'article
    newDiv.appendChild(titre);                   // Ajoute le titre dans la div

    let image = document.createElement("img");
    image.src = article.image;                   // chemin de l'image
    image.alt = article.titre;                   // alt sert de texte alternatif si l'img ne charge pas
    newDiv.appendChild(image);

    let contenu = document.createElement("p");
    contenu.textContent = article.contenu;
    newDiv.appendChild(contenu);

    let button = document.createElement("button");
    button.textContent = article.button;
    newDiv.appendChild(button);

    return newDiv; // Retourne la carte complète pour l'utiliser ailleurs, et la class est "Card"
}


// Fonction qui affiche toutes les cartes dans le feed
function displayFeed() {
    const feedcontainer = document.getElementById('feed-container'); // Cible le conteneur HTML

    if (!feedcontainer) { // Vérifie que l'élément existe bien
        console.error("L'élément feed-container n'a pas été trouvé !");
        return; // Stoppe la fonction si l'élément est introuvable
    }

    feedcontainer.innerHTML = ""; // Vide le conteneur avant de le reconstruire

    // Parcourt chaque article du tableau et crée sa carte
    articles.forEach(article => {// compétence 6 javascript = affiche les salle
        let encart = createCard(article);      // Crée la carte via la fonction createCard
        feedcontainer.appendChild(encart);     // Ajoute la carte dans le conteneur
    });

    console.log("Articles affichés avec succès !"); // Message de confirmation dans la console
}

displayFeed(); // Appelle la fonction au chargement de la page


// Fonction pour ouvrir/fermer le menu déroulant
function menuDeroulant() {
    document.getElementById("myDropdown").classList.toggle("show"); // Ajoute ou retire la classe "show"
}//toggle c'est une fonction qui permet de mettre ou enlever une fonctionalité à un element.


// Affiche ou cache le bloc "salle" selon le choix de l'utilisateur
function aff_salle(action) {
    const blockSalle = document.getElementById('block_salle'); // Cible le bloc salle
    if (action === 'oui') {
        blockSalle.style.display = 'block'; // block ici fait ref a la valeur CSS display
    } else {
        blockSalle.style.display = 'none';  // Cache le bloc
    }
}

// Affiche ou cache le bloc "autre" selon le choix de l'utilisateur
function aff_autre(action) {
    const blockAutre = document.getElementById('block_autre'); // Cible le bloc autre
    if (action === 'oui') {
        blockAutre.style.display = 'block';
    } else {
        blockAutre.style.display = 'none';
    }
}


// Récupère et affiche les données du formulaire dans la console
    const formulaire = document.getElementById("contactform");

    formulaire.addEventListener("submit", function (e) { // réagit lorsque le btn est actionné

        // Crée un objet FormData qui récupère  tous les champs
        const formData = new FormData(formulaire); // formData est une classe native du navigateur pour lire les formulaires

        console.log(formData.get("nom"));
        console.log(formData.get("prenom"));
        console.log(formData.get("mail"));
        console.log(formData.get("telephone"));
        console.log(formData.get("salle"));
        console.log(formData.get("autre"));
        console.log(formData.get("message"));

        alert("formulaire lisible dans le navigateur");
    });



// Galerie photos

    const photos = document.getElementById("galerie-container");

    const btnGrid = document.getElementById("btnGrid");
    const btnColumn = document.getElementById("btnColumn");
    const btnAdd = document.getElementById("btnAdd");
    const btnRemove = document.getElementById("btnRemove");

    let nombrePhotos = 6;

    function afficherPhotos() {
        photos.innerHTML = ""; // Vide la galerie avant de la reconstruire

        for (let i = 1; i <= nombrePhotos; i++) {

            let li = document.createElement("li"); // sera le container des images
            let img = document.createElement("img");

            img.src = "/images/pic" + i +'.jpg'; // on renseigne le chemin -->contenu de img
            img.alt = "Photo" + i;          // tour 3 → pic3.jpg ...

            li.appendChild(img); // imbrique img dans li
            photos.appendChild(li); // imbrique ensuite li complet dans photos.
        }
    }

    afficherPhotos(); // Premier affichage au chargement

    // Passe en mode grille
    btnGrid.addEventListener("click", () => {
        photos.classList.remove("column");      // Retire le mode colonne
        photos.classList.add("grid");           // Applique le mode grille
    });

    // Passe en mode colonne
    btnColumn.addEventListener("click", () => {
        photos.classList.remove("grid");
        photos.classList.add("column");


    });

    // Ajoute une photo à la galerie
    btnAdd.addEventListener("click", () => {
        alert("Vous souhaitez ajouter une photo ?");
        nombrePhotos = nombrePhotos + 1;
        afficherPhotos();

    });

    // Supprime une photo de la galerie
    btnRemove.addEventListener("click", () => {
        alert("Vous souhaitez supprimer une photo ?");
        nombrePhotos = nombrePhotos - 1;
        afficherPhotos();

    });