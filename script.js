document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".menu-button");
    const contents = document.querySelectorAll(".content");
    const body = document.body;
    let isFrench = true; // Variable pour suivre la langue actuelle
    let currentButtonId = ""; // Variable pour suivre le dernier bouton cliqué

    buttons.forEach((button) => {
        // Gérer le survol des boutons
        button.addEventListener("mouseover", function () {
            button.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseout", function () {
            button.style.transform = "scale(1)";
        });

        // Gérer le clic sur les boutons
        button.onclick = function () {
            // Fermer toutes les sections de contenu
            contents.forEach((content) => {
                content.classList.add("hidden");
            });

            // Trouver le contenu correspondant au bouton cliqué
            const contentId = button.id.replace("-button", "-content");
            const contentToShow = document.getElementById(contentId);

            // Afficher le contenu correspondant
            contentToShow.classList.remove("hidden");

            // Mettre à jour la variable du dernier bouton cliqué
            currentButtonId = button.id;

            // Assigner le fond d'écran en fonction du bouton cliqué
            switch (button.id) {
                case "experiences-button":
                    body.style.backgroundImage = 'url("image/fond.gif")';
                    break;
                case "education-button":
                    body.style.backgroundImage = 'url("image/fond.2.gif")';
                    break;
                case "skills-button":
                    body.style.backgroundImage = 'url("image/fond.3.gif")';
                    break;
                case "profile-button":
                    body.style.backgroundImage = 'url("image/fond.4.gif")';
                    break;
                case "language-button":
                    body.style.backgroundImage = 'url("image/fond.5.gif")';
                    break;
                default:
                    // Fond par défaut si le bouton n'est pas reconnu
                    body.style.backgroundImage = 'url("image/fond.gif")';
            }
        };
    });

    // Ajouter un événement de clic au bouton de traduction en anglais
    const translateButton = document.getElementById("translate-button");
    translateButton.addEventListener("click", function () {
        // Inverser la langue actuelle
        isFrench = !isFrench;

        // Mettre à jour le texte des boutons et des sections
        updateButtonAndSectionText();

        // Changer le fond d'écran en fonction de la langue actuelle
        updateBackground();
    });

    // Mettre à jour le texte des boutons et des sections
    function updateButtonAndSectionText() {
        buttons.forEach((button) => {
            const originalText = button.id.replace("-button", "");
            button.innerText = isFrench ? originalText.charAt(0).toUpperCase() + originalText.slice(1) : "Unknown";
        });

        contents.forEach((content) => {
            const contentId = content.id.replace("-content", "");
            const originalText = originalContent[contentId];
            content.innerText = isFrench ? originalText : "Unknown Content";
        });
    }

    // Changer le fond d'écran en fonction de la langue actuelle
    function updateBackground() {
        if (isFrench) {
            const backgroundIndex = buttons.findIndex((button) => button.id === currentButtonId);
            const backgroundImage = `url("image/fond.${backgroundIndex + 1}.gif")`;
            body.style.backgroundImage = backgroundImage;
        } else {
            // Fond par défaut en anglais si le bouton n'est pas reconnu
            body.style.backgroundImage = 'url("image/english_background.gif")';
        }
    }

    // Ajouter le texte original des sections dans un objet
    const originalContent = {
        experiences: "Services techniques de la mairie de Villars 42390;\nGestionnaire de stock en entreprise d’import-export spécialisée dans la vente pour particuliers.",
        education: "Diplômes : Brevet des collèges;\nBac général Spécialisation informatique/Anglais;\nActuellement en BTS SIO",
        skills: "Très bon niveau d’anglais;\nÀ l’aise avec les technologies;\nAnciennement double champion de France de Kung-fu",
        profile: "Mezhoudi Moussa;\n18 ans, né le 18 février 2005;\nAdresse : 36 rue des Fontaines, Villars 42390;\nTéléphone : 07 49 21 67 29",
        language: "Je parle couramment français et j’ai un excellent niveau d’anglais me permettant de pouvoir me débrouiller sans soucis dans un pays anglophone.;\nMon niveau en Espagnol est aussi assez correct pour que je puisse aller dans un pays hispanique sans trop de problèmes."
    };

    // Initialiser le texte des boutons et des sections
    updateButtonAndSectionText();
    // Changer le fond d'écran initial en fonction de la langue actuelle
    updateBackground();
});

