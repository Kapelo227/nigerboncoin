// Données d'exemple pour les annonces
const annoncesExemples = [
    {
        id: 1,
        titre: "Toyota Corolla 2018",
        prix: 8500000,
        region: "Niamey",
        categorie: "vehicules",
        image: "🚗",
        date: "Il y a 2 heures",
        vendeur: "Amadou S."
    },
    {
        id: 2,
        titre: "Appartement 3 pièces à louer",
        prix: 150000,
        region: "Niamey",
        categorie: "immobilier",
        image: "🏠",
        date: "Il y a 5 heures",
        vendeur: "Fatima M."
    },
    {
        id: 3,
        titre: "iPhone 13 Pro Max",
        prix: 650000,
        region: "Zinder",
        categorie: "electronique",
        image: "📱",
        date: "Il y a 1 jour",
        vendeur: "Ibrahim K."
    },
    {
        id: 4,
        titre: "Moto Yamaha 125cc",
        prix: 850000,
        region: "Maradi",
        categorie: "vehicules",
        image: "🏍️",
        date: "Il y a 3 heures",
        vendeur: "Moussa A."
    },
    {
        id: 5,
        titre: "Ordinateur portable HP",
        prix: 450000,
        region: "Tahoua",
        categorie: "electronique",
        image: "💻",
        date: "Il y a 6 heures",
        vendeur: "Aisha B."
    },
    {
        id: 6,
        titre: "Terrain à vendre 500m²",
        prix: 12000000,
        region: "Dosso",
        categorie: "immobilier",
        image: "🏞️",
        date: "Il y a 2 jours",
        vendeur: "Ousmane D."
    },
    {
        id: 7,
        titre: "Réfrigérateur Samsung",
        prix: 320000,
        region: "Agadez",
        categorie: "maison",
        image: "❄️",
        date: "Il y a 4 heures",
        vendeur: "Mariama T."
    },
    {
        id: 8,
        titre: "Vêtements traditionnels",
        prix: 45000,
        region: "Tillabéri",
        categorie: "mode",
        image: "👘",
        date: "Il y a 1 jour",
        vendeur: "Zeinab H."
    }
];

// Variables globales
let annoncesAffichees = [...annoncesExemples];
let categorieActive = '';
let regionActive = '';

// Initialisation de la page
document.addEventListener('DOMContentLoaded', function() {
    afficherAnnonces();
    initialiserRecherche();
    initialiserModals();
    
    console.log('🇳🇪 NigerBonCoin chargé avec succès !');
    console.log('📱 Plateforme de petites annonces pour le Niger');
});

// Affichage des annonces
function afficherAnnonces(annonces = annoncesAffichees) {
    const grid = document.getElementById('listingsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (annonces.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <h3>Aucune annonce trouvée</h3>
                <p>Essayez de modifier vos critères de recherche</p>
            </div>
        `;
        return;
    }
    
    annonces.forEach(annonce => {
        const card = creerCarteAnnonce(annonce);
        grid.appendChild(card);
    });
}

// Création d'une carte d'annonce
function creerCarteAnnonce(annonce) {
    const card = document.createElement('div');
    card.className = 'listing-card';
    card.onclick = () => afficherDetailAnnonce(annonce.id);
    
    card.innerHTML = `
        <div class="listing-image">${annonce.image}</div>
        <div class="listing-content">
            <h4 class="listing-title">${annonce.titre}</h4>
            <div class="listing-price">${formaterPrix(annonce.prix)} FCFA</div>
            <div class="listing-location">📍 ${annonce.region}</div>
            <div class="listing-meta">
                <span>${annonce.date}</span>
                <span>Par ${annonce.vendeur}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Formatage du prix
function formaterPrix(prix) {
    return prix.toLocaleString('fr-FR');
}

// Recherche d'annonces
function rechercherAnnonces() {
    const recherche = document.getElementById('searchInput').value.toLowerCase();
    const region = document.getElementById('locationSelect').value;
    
    let resultats = annoncesExemples;
    
    // Filtrer par texte de recherche
    if (recherche) {
        resultats = resultats.filter(annonce => 
            annonce.titre.toLowerCase().includes(recherche) ||
            annonce.vendeur.toLowerCase().includes(recherche)
        );
    }
    
    // Filtrer par région
    if (region) {
        resultats = resultats.filter(annonce => 
            annonce.region.toLowerCase() === region
        );
    }
    
    // Filtrer par catégorie active
    if (categorieActive) {
        resultats = resultats.filter(annonce => 
            annonce.categorie === categorieActive
        );
    }
    
    annoncesAffichees = resultats;
    afficherAnnonces();
    
    // Afficher un message de résultat
    afficherMessageRecherche(resultats.length, recherche, region);
}

// Message de résultat de recherche
function afficherMessageRecherche(nombre, recherche, region) {
    let message = `${nombre} annonce(s) trouvée(s)`;
    
    if (recherche || region || categorieActive) {
        message += ' pour';
        if (recherche) message += ` "${recherche}"`;
        if (region) message += ` à ${region}`;
        if (categorieActive) message += ` dans ${categorieActive}`;
    }
    
    // Créer ou mettre à jour le message
    let messageDiv = document.getElementById('searchMessage');
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.id = 'searchMessage';
        messageDiv.style.cssText = `
            background: #f1f5f9;
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 8px;
            text-align: center;
            color: #64748b;
        `;
        
        const container = document.querySelector('.recent-listings .container');
        container.insertBefore(messageDiv, container.querySelector('.listings-grid'));
    }
    
    messageDiv.textContent = message;
    
    // Masquer le message après 3 secondes si c'est une recherche vide
    if (!recherche && !region && !categorieActive) {
        setTimeout(() => {
            if (messageDiv) messageDiv.remove();
        }, 3000);
    }
}

// Filtrage par catégorie
function filtrerCategorie(categorie) {
    categorieActive = categorieActive === categorie ? '' : categorie;
    
    // Mettre à jour l'apparence des cartes de catégorie
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.backgroundColor = '';
        card.style.borderColor = '';
    });
    
    if (categorieActive) {
        const carteActive = Array.from(document.querySelectorAll('.category-card'))
            .find(card => card.onclick.toString().includes(categorie));
        if (carteActive) {
            carteActive.style.backgroundColor = '#eff6ff';
            carteActive.style.borderColor = '#2563eb';
        }
    }
    
    rechercherAnnonces();
}

// Initialisation de la recherche
function initialiserRecherche() {
    const searchInput = document.getElementById('searchInput');
    const locationSelect = document.getElementById('locationSelect');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                rechercherAnnonces();
            }
        });
        
        // Recherche en temps réel avec délai
        let timeoutId;
        searchInput.addEventListener('input', function() {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(rechercherAnnonces, 500);
        });
    }
    
    if (locationSelect) {
        locationSelect.addEventListener('change', rechercherAnnonces);
    }
}

// Gestion des modals
function initialiserModals() {
    // Fermer les modals en cliquant à l'extérieur
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Gestion des formulaires
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Fonctionnalité de connexion en cours de développement !');
            fermerModal('loginModal');
        });
    }
    
    const adForm = document.querySelector('.ad-form');
    if (adForm) {
        adForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Votre annonce a été soumise ! Elle sera publiée après vérification.');
            fermerModal('adModal');
        });
    }
}

// Affichage des modals
function afficherConnexion() {
    document.getElementById('loginModal').style.display = 'block';
}

function afficherDepotAnnonce() {
    document.getElementById('adModal').style.display = 'block';
}

function afficherInscription() {
    fermerModal('loginModal');
    alert('Fonctionnalité d\'inscription en cours de développement !');
}

function fermerModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Affichage du détail d'une annonce
function afficherDetailAnnonce(id) {
    const annonce = annoncesExemples.find(a => a.id === id);
    if (!annonce) return;
    
    const details = `
        🏷️ ${annonce.titre}
        💰 ${formaterPrix(annonce.prix)} FCFA
        📍 ${annonce.region}
        👤 Vendeur: ${annonce.vendeur}
        📅 Publié: ${annonce.date}
        
        Pour contacter le vendeur:
        📞 Appelez directement
        💬 Envoyez un message WhatsApp
        
        Cette fonctionnalité sera bientôt disponible avec plus de détails !
    `;
    
    alert(details);
}

// Navigation vers toutes les annonces
function voirToutesAnnonces() {
    // Réinitialiser les filtres
    categorieActive = '';
    regionActive = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('locationSelect').value = '';
    
    // Réinitialiser l'apparence des catégories
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.backgroundColor = '';
        card.style.borderColor = '';
    });
    
    // Afficher toutes les annonces
    annoncesAffichees = [...annoncesExemples];
    afficherAnnonces();
    
    // Supprimer le message de recherche s'il existe
    const messageDiv = document.getElementById('searchMessage');
    if (messageDiv) messageDiv.remove();
    
    // Faire défiler vers les annonces
    document.querySelector('.recent-listings').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Fonctions utilitaires pour les animations
function animerCompteurs() {
    const compteurs = document.querySelectorAll('.stat-number');
    
    compteurs.forEach(compteur => {
        const valeurFinale = parseInt(compteur.textContent.replace(/[^0-9]/g, ''));
        let valeurActuelle = 0;
        const increment = valeurFinale / 100;
        
        const timer = setInterval(() => {
            valeurActuelle += increment;
            if (valeurActuelle >= valeurFinale) {
                valeurActuelle = valeurFinale;
                clearInterval(timer);
            }
            
            if (valeurFinale >= 1000) {
                compteur.textContent = Math.floor(valeurActuelle).toLocaleString() + '+';
            } else {
                compteur.textContent = Math.floor(valeurActuelle);
            }
        }, 20);
    });
}

// Observer pour les animations au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('hero-stats')) {
                animerCompteurs();
            }
            
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les sections pour les animations
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.categories, .recent-listings, .features');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Observer spécial pour les stats du hero
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        observer.observe(heroStats);
    }
});

// Gestion du mode sombre (fonctionnalité future)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Chargement des préférences utilisateur
document.addEventListener('DOMContentLoaded', function() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
});

// Fonctions de partage social
function partagerSurWhatsApp(annonceId) {
    const annonce = annoncesExemples.find(a => a.id === annonceId);
    if (!annonce) return;
    
    const message = `Regardez cette annonce sur NigerBonCoin: ${annonce.titre} - ${formaterPrix(annonce.prix)} FCFA à ${annonce.region}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function partagerSurFacebook(annonceId) {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
}

// Gestion des favoris (localStorage)
function toggleFavori(annonceId) {
    let favoris = JSON.parse(localStorage.getItem('favoris') || '[]');
    
    if (favoris.includes(annonceId)) {
        favoris = favoris.filter(id => id !== annonceId);
        alert('Annonce retirée des favoris');
    } else {
        favoris.push(annonceId);
        alert('Annonce ajoutée aux favoris');
    }
    
    localStorage.setItem('favoris', JSON.stringify(favoris));
}

// Statistiques d'utilisation
function trackEvent(eventName, data = {}) {
    console.log(`📊 Event: ${eventName}`, data);
    // Ici on pourrait envoyer les données à un service d'analytics
}

// Tracking des interactions
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('category-card')) {
        trackEvent('category_click', { category: e.target.textContent });
    }
    
    if (e.target.classList.contains('listing-card')) {
        trackEvent('listing_click', { listing: e.target.querySelector('.listing-title').textContent });
    }
});

// Messages d'encouragement
const messagesEncouragement = [
    "Bienvenue sur NigerBonCoin ! 🇳🇪",
    "Trouvez les meilleures affaires près de chez vous !",
    "Vendez facilement vos objets en quelques clics !",
    "Rejoignez la communauté NigerBonCoin !",
    "Des milliers d'annonces vous attendent !"
];

function afficherMessageAleatoire() {
    const message = messagesEncouragement[Math.floor(Math.random() * messagesEncouragement.length)];
    console.log(`💬 ${message}`);
}

// Afficher un message d'encouragement au chargement
setTimeout(afficherMessageAleatoire, 2000);
