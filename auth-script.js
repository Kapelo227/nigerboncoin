// Données des pays africains pour l'authentification
const paysAfricainsAuth = {
    'algerie': {
        nom: '🇩🇿 Algérie',
        villes: ['Alger', 'Oran', 'Constantine', 'Annaba', 'Blida', 'Batna', 'Djelfa', 'Sétif', 'Sidi Bel Abbès', 'Biskra']
    },
    'egypte': {
        nom: '🇪🇬 Égypte',
        villes: ['Le Caire', 'Alexandrie', 'Gizeh', 'Shubra El-Kheima', 'Port-Saïd', 'Suez', 'Louxor', 'Assouan', 'Mansoura', 'Tanta']
    },
    'maroc': {
        nom: '🇲🇦 Maroc',
        villes: ['Casablanca', 'Rabat', 'Fès', 'Marrakech', 'Agadir', 'Tanger', 'Meknès', 'Oujda', 'Kenitra', 'Tétouan']
    },
    'tunisie': {
        nom: '🇹🇳 Tunisie',
        villes: ['Tunis', 'Sfax', 'Sousse', 'Kairouan', 'Bizerte', 'Gabès', 'Ariana', 'Gafsa', 'Monastir', 'Ben Arous']
    },
    'senegal': {
        nom: '🇸🇳 Sénégal',
        villes: ['Dakar', 'Thiès', 'Kaolack', 'Saint-Louis', 'Ziguinchor', 'Diourbel', 'Touba', 'Mbour', 'Rufisque', 'Kolda']
    },
    'cote-ivoire': {
        nom: '🇨🇮 Côte d\'Ivoire',
        villes: ['Abidjan', 'Bouaké', 'Daloa', 'Yamoussoukro', 'San-Pédro', 'Divo', 'Korhogo', 'Anyama', 'Gagnoa', 'Man']
    },
    'mali': {
        nom: '🇲🇱 Mali',
        villes: ['Bamako', 'Sikasso', 'Mopti', 'Koutiala', 'Ségou', 'Kayes', 'Gao', 'Tombouctou', 'Kati', 'Djenné']
    },
    'nigeria': {
        nom: '🇳🇬 Nigeria',
        villes: ['Lagos', 'Kano', 'Ibadan', 'Abuja', 'Port Harcourt', 'Benin City', 'Maiduguri', 'Zaria', 'Aba', 'Jos']
    },
    'ghana': {
        nom: '🇬🇭 Ghana',
        villes: ['Accra', 'Kumasi', 'Tamale', 'Sekondi-Takoradi', 'Ashaiman', 'Sunyani', 'Cape Coast', 'Obuasi', 'Teshie', 'Madina']
    },
    'kenya': {
        nom: '🇰🇪 Kenya',
        villes: ['Nairobi', 'Mombasa', 'Nakuru', 'Eldoret', 'Kisumu', 'Thika', 'Malindi', 'Kitale', 'Garissa', 'Kakamega']
    },
    'afrique-sud': {
        nom: '🇿🇦 Afrique du Sud',
        villes: ['Johannesburg', 'Le Cap', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein', 'East London', 'Pietermaritzburg', 'Rustenburg', 'Polokwane']
    },
    'cameroun': {
        nom: '🇨🇲 Cameroun',
        villes: ['Douala', 'Yaoundé', 'Bamenda', 'Bafoussam', 'Garoua', 'Maroua', 'Ngaoundéré', 'Bertoua', 'Loum', 'Kumba']
    }
};

// Comptes de démonstration
const comptesDemo = {
    'particulier': {
        email: 'mamadou@email.com',
        nom: 'Mamadou Diallo',
        type: 'particulier',
        pays: 'senegal',
        ville: 'Dakar',
        dateInscription: '2024-01-15'
    },
    'professionnel': {
        email: 'aya.entreprise@email.com',
        nom: 'Aya Kouassi',
        type: 'professionnel',
        entreprise: 'Kouassi Electronics',
        pays: 'cote-ivoire',
        ville: 'Abidjan',
        dateInscription: '2023-11-20'
    }
};

// Initialisation de la page
document.addEventListener('DOMContentLoaded', function() {
    initialiserAuth();
    
    // Charger les pays dans le formulaire d'inscription
    if (document.getElementById('pays')) {
        chargerPays();
    }
    
    // Gestion de la force du mot de passe
    const motDePasseInput = document.getElementById('motDePasse');
    if (motDePasseInput) {
        motDePasseInput.addEventListener('input', verifierForceMotDePasse);
    }
    
    // Gestion du type de vendeur
    const typeVendeurInputs = document.querySelectorAll('input[name="typeVendeur"]');
    typeVendeurInputs.forEach(input => {
        input.addEventListener('change', toggleInfoPro);
    });
    
    console.log('🔐 Système d\'authentification AfricaBonCoin initialisé');
});

// Initialisation de l'authentification
function initialiserAuth() {
    // Vérifier si l'utilisateur est déjà connecté
    const utilisateurConnecte = localStorage.getItem('utilisateur_connecte');
    if (utilisateurConnecte && window.location.pathname.includes('connexion.html')) {
        // Rediriger vers le tableau de bord si déjà connecté
        console.log('Utilisateur déjà connecté');
    }
}

// Charger les pays dans le sélecteur
function chargerPays() {
    const selectPays = document.getElementById('pays');
    if (!selectPays) return;
    
    Object.entries(paysAfricainsAuth).forEach(([code, pays]) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = pays.nom;
        selectPays.appendChild(option);
    });
}

// Charger les villes selon le pays sélectionné
function chargerVilles() {
    const selectPays = document.getElementById('pays');
    const selectVille = document.getElementById('ville');
    
    if (!selectPays || !selectVille) return;
    
    const paysSelectionne = selectPays.value;
    
    // Vider le sélecteur de villes
    selectVille.innerHTML = '<option value="">Sélectionnez une ville</option>';
    
    if (paysSelectionne && paysAfricainsAuth[paysSelectionne]) {
        const villes = paysAfricainsAuth[paysSelectionne].villes;
        villes.forEach(ville => {
            const option = document.createElement('option');
            option.value = ville.toLowerCase().replace(/\s+/g, '-');
            option.textContent = ville;
            selectVille.appendChild(option);
        });
    }
}

// Vérifier la force du mot de passe
function verifierForceMotDePasse() {
    const motDePasse = document.getElementById('motDePasse').value;
    const strengthBar = document.querySelector('.strength-fill');
    const strengthText = document.querySelector('.strength-text');
    
    if (!strengthBar || !strengthText) return;
    
    let force = 0;
    let couleur = '#dc2626';
    let texte = 'Très faible';
    
    // Critères de force
    if (motDePasse.length >= 8) force += 20;
    if (motDePasse.length >= 12) force += 10;
    if (/[a-z]/.test(motDePasse)) force += 15;
    if (/[A-Z]/.test(motDePasse)) force += 15;
    if (/[0-9]/.test(motDePasse)) force += 15;
    if (/[^A-Za-z0-9]/.test(motDePasse)) force += 25;
    
    // Déterminer la couleur et le texte
    if (force >= 80) {
        couleur = '#059669';
        texte = 'Très fort';
    } else if (force >= 60) {
        couleur = '#10b981';
        texte = 'Fort';
    } else if (force >= 40) {
        couleur = '#f59e0b';
        texte = 'Moyen';
    } else if (force >= 20) {
        couleur = '#f97316';
        texte = 'Faible';
    }
    
    // Appliquer les styles
    strengthBar.style.width = `${force}%`;
    strengthBar.style.backgroundColor = couleur;
    strengthText.textContent = texte;
    strengthText.style.color = couleur;
}

// Basculer les informations professionnelles
function toggleInfoPro() {
    const typeVendeur = document.querySelector('input[name="typeVendeur"]:checked').value;
    const infoPro = document.getElementById('infoPro');
    
    if (infoPro) {
        if (typeVendeur === 'professionnel') {
            infoPro.style.display = 'block';
            // Rendre les champs requis
            document.getElementById('nomEntreprise').required = true;
            document.getElementById('secteurActivite').required = true;
        } else {
            infoPro.style.display = 'none';
            // Retirer l'obligation
            document.getElementById('nomEntreprise').required = false;
            document.getElementById('secteurActivite').required = false;
        }
    }
}

// Traiter l'inscription
function traiterInscription(event) {
    event.preventDefault();
    
    const form = document.getElementById('inscriptionForm');
    const formData = new FormData(form);
    const btnInscription = document.getElementById('btnInscription');
    
    // Validation des mots de passe
    const motDePasse = formData.get('motDePasse');
    const confirmerMotDePasse = formData.get('confirmerMotDePasse');
    
    if (motDePasse !== confirmerMotDePasse) {
        afficherErreur('Les mots de passe ne correspondent pas');
        return false;
    }
    
    if (motDePasse.length < 8) {
        afficherErreur('Le mot de passe doit contenir au moins 8 caractères');
        return false;
    }
    
    // Validation de l'âge (18 ans minimum)
    const dateNaissance = new Date(formData.get('dateNaissance'));
    const age = calculerAge(dateNaissance);
    if (age < 18) {
        afficherErreur('Vous devez avoir au moins 18 ans pour vous inscrire');
        return false;
    }
    
    // Simulation de l'inscription
    btnInscription.classList.add('loading');
    btnInscription.disabled = true;
    
    setTimeout(() => {
        // Créer l'objet utilisateur
        const utilisateur = {
            id: Date.now(),
            prenom: formData.get('prenom'),
            nom: formData.get('nom'),
            email: formData.get('email'),
            telephone: formData.get('telephone'),
            dateNaissance: formData.get('dateNaissance'),
            pays: formData.get('pays'),
            ville: formData.get('ville'),
            adresse: formData.get('adresse'),
            typeVendeur: formData.get('typeVendeur'),
            nomEntreprise: formData.get('nomEntreprise') || null,
            secteurActivite: formData.get('secteurActivite') || null,
            numeroRegistre: formData.get('numeroRegistre') || null,
            accepterNewsletter: formData.get('accepterNewsletter') === 'on',
            dateInscription: new Date().toISOString(),
            statut: 'actif'
        };
        
        // Sauvegarder l'utilisateur
        sauvegarderUtilisateur(utilisateur);
        
        // Réinitialiser le bouton
        btnInscription.classList.remove('loading');
        btnInscription.disabled = false;
        
        // Afficher la confirmation
        document.getElementById('confirmationModal').style.display = 'block';
        
        console.log('✅ Inscription réussie:', utilisateur);
        
    }, 2000);
    
    return false;
}

// Traiter la connexion
function traiterConnexion(event) {
    event.preventDefault();
    
    const form = document.getElementById('connexionForm');
    const formData = new FormData(form);
    const btnConnexion = document.getElementById('btnConnexion');
    
    const email = formData.get('email');
    const motDePasse = formData.get('motDePasse');
    const resterConnecte = formData.get('resterConnecte') === 'on';
    
    // Simulation de la connexion
    btnConnexion.classList.add('loading');
    btnConnexion.disabled = true;
    
    setTimeout(() => {
        // Vérifier les identifiants (simulation)
        const utilisateur = verifierIdentifiants(email, motDePasse);
        
        if (utilisateur) {
            // Connexion réussie
            connecterUtilisateur(utilisateur, resterConnecte);
            
            // Afficher les informations utilisateur
            afficherInfoUtilisateur(utilisateur);
            
            // Afficher le modal de succès
            document.getElementById('connexionSuccessModal').style.display = 'block';
            
            console.log('✅ Connexion réussie:', utilisateur);
        } else {
            // Connexion échouée
            afficherErreur('Email ou mot de passe incorrect');
        }
        
        // Réinitialiser le bouton
        btnConnexion.classList.remove('loading');
        btnConnexion.disabled = false;
        
    }, 1500);
    
    return false;
}

// Connexion avec compte de démonstration
function connexionDemo(type) {
    const compte = comptesDemo[type];
    if (!compte) return;
    
    // Remplir les champs
    document.getElementById('emailConnexion').value = compte.email;
    document.getElementById('motDePasseConnexion').value = 'demo123456';
    
    // Simuler la connexion
    setTimeout(() => {
        connecterUtilisateur(compte, false);
        afficherInfoUtilisateur(compte);
        document.getElementById('connexionSuccessModal').style.display = 'block';
    }, 500);
}

// Vérifier les identifiants
function verifierIdentifiants(email, motDePasse) {
    // Vérifier les comptes de démonstration
    for (const [type, compte] of Object.entries(comptesDemo)) {
        if (compte.email === email && motDePasse === 'demo123456') {
            return compte;
        }
    }
    
    // Vérifier les utilisateurs enregistrés
    const utilisateurs = JSON.parse(localStorage.getItem('utilisateurs_africaboncoin') || '[]');
    return utilisateurs.find(u => u.email === email);
}

// Connecter l'utilisateur
function connecterUtilisateur(utilisateur, resterConnecte) {
    const sessionData = {
        utilisateur: utilisateur,
        dateConnexion: new Date().toISOString(),
        resterConnecte: resterConnecte
    };
    
    if (resterConnecte) {
        localStorage.setItem('utilisateur_connecte', JSON.stringify(sessionData));
    } else {
        sessionStorage.setItem('utilisateur_connecte', JSON.stringify(sessionData));
    }
}

// Afficher les informations utilisateur
function afficherInfoUtilisateur(utilisateur) {
    const userInfo = document.getElementById('userInfo');
    if (!userInfo) return;
    
    const nomPays = paysAfricainsAuth[utilisateur.pays]?.nom || utilisateur.pays;
    
    userInfo.innerHTML = `
        <div style="text-align: left;">
            <h5>👤 ${utilisateur.nom}</h5>
            <p><strong>Email:</strong> ${utilisateur.email}</p>
            <p><strong>Type:</strong> ${utilisateur.type === 'professionnel' ? '🏢 Professionnel' : '👤 Particulier'}</p>
            <p><strong>Localisation:</strong> ${utilisateur.ville}, ${nomPays}</p>
            ${utilisateur.entreprise ? `<p><strong>Entreprise:</strong> ${utilisateur.entreprise}</p>` : ''}
        </div>
    `;
}

// Sauvegarder un utilisateur
function sauvegarderUtilisateur(utilisateur) {
    const utilisateurs = JSON.parse(localStorage.getItem('utilisateurs_africaboncoin') || '[]');
    utilisateurs.push(utilisateur);
    localStorage.setItem('utilisateurs_africaboncoin', JSON.stringify(utilisateurs));
}

// Calculer l'âge
function calculerAge(dateNaissance) {
    const aujourd = new Date();
    const naissance = new Date(dateNaissance);
    let age = aujourd.getFullYear() - naissance.getFullYear();
    const moisDiff = aujourd.getMonth() - naissance.getMonth();
    
    if (moisDiff < 0 || (moisDiff === 0 && aujourd.getDate() < naissance.getDate())) {
        age--;
    }
    
    return age;
}

// Basculer la visibilité du mot de passe
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '🙈';
    } else {
        input.type = 'password';
        button.textContent = '👁️';
    }
}

// Afficher le modal mot de passe oublié
function afficherMotDePasseOublie() {
    document.getElementById('motDePasseOublieModal').style.display = 'block';
}

// Envoyer le lien de réinitialisation
function envoyerResetMotDePasse(event) {
    event.preventDefault();
    
    const email = document.getElementById('emailReset').value;
    
    // Simulation de l'envoi
    setTimeout(() => {
        afficherSucces('Un lien de réinitialisation a été envoyé à votre adresse email');
        fermerModal('motDePasseOublieModal');
        document.getElementById('emailReset').value = '';
    }, 1000);
    
    return false;
}

// Navigation après connexion/inscription
function allerVersConnexion() {
    window.location.href = 'connexion.html';
}

function allerVersTableauDeBord() {
    // En production, rediriger vers le tableau de bord utilisateur
    window.location.href = 'index.html';
}

function allerVersAccueil() {
    window.location.href = 'index.html';
}

// Gestion des modals
function fermerModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Fermer les modals en cliquant à l'extérieur
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Afficher les conditions d'utilisation
function afficherConditions() {
    alert(`📋 CONDITIONS D'UTILISATION - AfricaBonCoin

1. ACCEPTATION DES CONDITIONS
En utilisant AfricaBonCoin, vous acceptez ces conditions.

2. UTILISATION DE LA PLATEFORME
- Vous devez avoir au moins 18 ans
- Les informations fournies doivent être exactes
- Respect des autres utilisateurs obligatoire

3. PAIEMENT À LA LIVRAISON
- Paiement uniquement à la réception
- Inspection du produit avant paiement
- Retour possible si non-conforme

4. RESPONSABILITÉS
- AfricaBonCoin facilite les échanges
- Transactions entre utilisateurs
- Modération des annonces

5. DONNÉES PERSONNELLES
- Protection selon les lois africaines
- Utilisation pour améliorer le service
- Pas de vente à des tiers

Pour plus de détails, consultez notre site web.`);
}

// Afficher la politique de confidentialité
function afficherPolitique() {
    alert(`🔒 POLITIQUE DE CONFIDENTIALITÉ - AfricaBonCoin

1. COLLECTE DES DONNÉES
Nous collectons uniquement les données nécessaires au fonctionnement du service.

2. UTILISATION DES DONNÉES
- Faciliter les transactions
- Améliorer l'expérience utilisateur
- Communication importante

3. PROTECTION DES DONNÉES
- Chiffrement des données sensibles
- Accès restreint aux employés
- Serveurs sécurisés

4. PARTAGE DES DONNÉES
- Jamais de vente à des tiers
- Partage limité aux partenaires de confiance
- Respect des lois locales

5. VOS DROITS
- Accès à vos données
- Modification et suppression
- Opposition au traitement

Contact: privacy@africaboncoin.com`);
}

// Messages d'erreur et de succès
function afficherErreur(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    // Insérer avant le premier form-group
    const firstGroup = document.querySelector('.form-group');
    if (firstGroup) {
        firstGroup.parentNode.insertBefore(errorDiv, firstGroup);
        
        // Supprimer après 5 secondes
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 5000);
        
        // Faire défiler vers l'erreur
        errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function afficherSucces(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message-inline';
    successDiv.textContent = message;
    
    // Insérer avant le premier form-group
    const firstGroup = document.querySelector('.form-group');
    if (firstGroup) {
        firstGroup.parentNode.insertBefore(successDiv, firstGroup);
        
        // Supprimer après 5 secondes
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.parentNode.removeChild(successDiv);
            }
        }, 5000);
    }
}

// Validation en temps réel
document.addEventListener('DOMContentLoaded', function() {
    // Validation de l'email
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value;
            if (email && !isValidEmail(email)) {
                this.style.borderColor = '#dc2626';
            } else {
                this.style.borderColor = '#e5e7eb';
            }
        });
    }
    
    // Validation du téléphone
    const telephoneInput = document.getElementById('telephone');
    if (telephoneInput) {
        telephoneInput.addEventListener('input', function() {
            let value = this.value.replace(/[^\d+\s-]/g, '');
            this.value = value;
        });
    }
});

// Validation de l'email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Déconnexion
function deconnecterUtilisateur() {
    localStorage.removeItem('utilisateur_connecte');
    sessionStorage.removeItem('utilisateur_connecte');
    window.location.href = 'index.html';
}

console.log('🔐 Système d\'authentification AfricaBonCoin chargé');
console.log('📝 Inscription et connexion disponibles');
console.log('🌍 Support pour tous les pays africains');
