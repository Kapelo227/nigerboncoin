// Données simulées pour l'administration
let annoncesEnAttente = [
    {
        id: 101,
        titre: "iPhone 15 Pro Max neuf",
        prix: 850000,
        devise: "XOF",
        pays: "senegal",
        ville: "Dakar",
        vendeur: "Mamadou Diallo",
        email: "mamadou.diallo@email.com",
        telephone: "+221 77 123 45 67",
        categorie: "electronique",
        description: "iPhone 15 Pro Max 256GB, couleur titane naturel. Encore sous garantie Apple, jamais utilisé. Livraison possible dans tout Dakar.",
        date: "2024-10-07",
        statut: "pending",
        photos: ["📱", "📦", "🔋"],
        motifRejet: null
    },
    {
        id: 102,
        titre: "Appartement 3 pièces Cocody",
        prix: 45000000,
        devise: "XOF",
        pays: "cote-ivoire",
        ville: "Abidjan",
        vendeur: "Aya Kouassi",
        email: "aya.kouassi@email.com",
        telephone: "+225 07 89 12 34",
        categorie: "immobilier",
        description: "Bel appartement de 3 pièces dans le quartier résidentiel de Cocody. 2 chambres, salon, cuisine équipée, balcon avec vue. Proche des commodités.",
        date: "2024-10-07",
        statut: "pending",
        photos: ["🏠", "🛏️", "🍽️"],
        motifRejet: null
    },
    {
        id: 103,
        titre: "Masques Dogon authentiques",
        prix: 75000,
        devise: "XOF",
        pays: "mali",
        ville: "Bamako",
        vendeur: "Ibrahim Traoré",
        email: "ibrahim.traore@email.com",
        telephone: "+223 76 54 32 10",
        categorie: "artisanat",
        description: "Collection de masques traditionnels Dogon sculptés à la main. Pièces authentiques provenant directement des artisans du pays Dogon. Parfait pour décoration ou collection.",
        date: "2024-10-06",
        statut: "pending",
        photos: ["🎭", "🎨", "🗿"],
        motifRejet: null
    },
    {
        id: 104,
        titre: "Toyota Camry 2020",
        prix: 18500000,
        devise: "NGN",
        pays: "nigeria",
        ville: "Lagos",
        vendeur: "Chinedu Okafor",
        email: "chinedu.okafor@email.com",
        telephone: "+234 803 123 4567",
        categorie: "vehicules",
        description: "Toyota Camry 2020 en excellent état. Kilométrage: 45,000 km. Entretien régulier, toutes les révisions à jour. Véhicule non accidenté.",
        date: "2024-10-06",
        statut: "pending",
        photos: ["🚗", "🔧", "📋"],
        motifRejet: null
    },
    {
        id: 105,
        titre: "Tissus Wax premium",
        prix: 15000,
        devise: "GHS",
        pays: "ghana",
        ville: "Accra",
        vendeur: "Akosua Mensah",
        email: "akosua.mensah@email.com",
        telephone: "+233 24 567 8901",
        categorie: "mode",
        description: "Tissus Wax de haute qualité, motifs traditionnels ghanéens. 6 yards par pièce. Idéal pour confection de vêtements traditionnels ou modernes.",
        date: "2024-10-05",
        statut: "pending",
        photos: ["🎨", "👗", "✂️"],
        motifRejet: null
    }
];

let annoncesApprouvees = [];
let annoncesRejetees = [];
let annonceSelectionnee = null;
let annoncesSelectionnees = [];

// Données des pays africains (version simplifiée pour l'admin)
const paysAfricains = {
    'senegal': '🇸🇳 Sénégal',
    'cote-ivoire': '🇨🇮 Côte d\'Ivoire',
    'mali': '🇲🇱 Mali',
    'nigeria': '🇳🇬 Nigeria',
    'ghana': '🇬🇭 Ghana',
    'maroc': '🇲🇦 Maroc',
    'egypte': '🇪🇬 Égypte',
    'kenya': '🇰🇪 Kenya',
    'afrique-sud': '🇿🇦 Afrique du Sud'
};

// Initialisation de la page admin
document.addEventListener('DOMContentLoaded', function() {
    initialiserAdmin();
    remplirFiltres();
    afficherAnnonces();
    mettreAJourStats();
    
    console.log('🔐 Interface d\'administration chargée');
    console.log('📊 Gestion des annonces AfricaBonCoin');
});

// Initialisation de l'interface admin
function initialiserAdmin() {
    // Vérifier l'authentification (simulation)
    const isAdmin = localStorage.getItem('admin_logged_in');
    if (!isAdmin) {
        // En production, rediriger vers la page de connexion
        console.log('⚠️ Authentification admin requise');
    }
    
    // Charger les données depuis le localStorage si disponibles
    const savedPending = localStorage.getItem('annonces_pending');
    const savedApproved = localStorage.getItem('annonces_approved');
    const savedRejected = localStorage.getItem('annonces_rejected');
    
    if (savedPending) annoncesEnAttente = JSON.parse(savedPending);
    if (savedApproved) annoncesApprouvees = JSON.parse(savedApproved);
    if (savedRejected) annoncesRejetees = JSON.parse(savedRejected);
}

// Remplir les filtres
function remplirFiltres() {
    const countryFilter = document.getElementById('countryFilter');
    
    // Ajouter les pays
    Object.entries(paysAfricains).forEach(([code, nom]) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = nom;
        countryFilter.appendChild(option);
    });
}

// Mettre à jour les statistiques
function mettreAJourStats() {
    document.getElementById('pendingCount').textContent = annoncesEnAttente.length;
    document.getElementById('approvedCount').textContent = annoncesApprouvees.length;
    document.getElementById('rejectedCount').textContent = annoncesRejetees.length;
    document.getElementById('usersCount').textContent = '25,431'; // Valeur fixe pour la démo
}

// Afficher les annonces selon les filtres
function afficherAnnonces() {
    const statusFilter = document.getElementById('statusFilter').value;
    const countryFilter = document.getElementById('countryFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    const searchFilter = document.getElementById('searchFilter').value.toLowerCase();
    
    let annonces = [];
    let titre = '';
    
    // Sélectionner les annonces selon le statut
    switch (statusFilter) {
        case 'pending':
            annonces = [...annoncesEnAttente];
            titre = '⏳ Annonces en attente de modération';
            break;
        case 'approved':
            annonces = [...annoncesApprouvees];
            titre = '✅ Annonces approuvées';
            break;
        case 'rejected':
            annonces = [...annoncesRejetees];
            titre = '❌ Annonces rejetées';
            break;
        default:
            annonces = [...annoncesEnAttente, ...annoncesApprouvees, ...annoncesRejetees];
            titre = '📋 Toutes les annonces';
    }
    
    // Appliquer les filtres
    if (countryFilter !== 'all') {
        annonces = annonces.filter(a => a.pays === countryFilter);
    }
    
    if (categoryFilter !== 'all') {
        annonces = annonces.filter(a => a.categorie === categoryFilter);
    }
    
    if (searchFilter) {
        annonces = annonces.filter(a => 
            a.titre.toLowerCase().includes(searchFilter) ||
            a.vendeur.toLowerCase().includes(searchFilter) ||
            a.description.toLowerCase().includes(searchFilter)
        );
    }
    
    // Mettre à jour le titre
    document.getElementById('listingsTitle').textContent = `${titre} (${annonces.length})`;
    
    // Afficher les annonces
    const container = document.getElementById('listingsContainer');
    container.innerHTML = '';
    
    if (annonces.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #6b7280;">
                <h3>🔍 Aucune annonce trouvée</h3>
                <p>Aucune annonce ne correspond aux critères sélectionnés.</p>
            </div>
        `;
        return;
    }
    
    annonces.forEach(annonce => {
        const row = creerLigneAnnonce(annonce);
        container.appendChild(row);
    });
}

// Créer une ligne d'annonce
function creerLigneAnnonce(annonce) {
    const row = document.createElement('div');
    row.className = 'listing-row';
    row.dataset.id = annonce.id;
    
    const nomPays = paysAfricains[annonce.pays] || annonce.pays;
    const statusClass = `status-${annonce.statut}`;
    const statusText = {
        'pending': '⏳ En attente',
        'approved': '✅ Approuvée',
        'rejected': '❌ Rejetée'
    }[annonce.statut];
    
    row.innerHTML = `
        <div class="col-select">
            <input type="checkbox" onchange="toggleSelection(${annonce.id})">
        </div>
        <div class="col-image">
            <div class="listing-image">${annonce.photos[0]}</div>
        </div>
        <div class="col-title">
            <div class="listing-title">${annonce.titre}</div>
        </div>
        <div class="col-price">
            <div class="listing-price">${formaterPrix(annonce.prix)} ${annonce.devise}</div>
        </div>
        <div class="col-location">
            <div class="listing-location">${annonce.ville}, ${nomPays}</div>
        </div>
        <div class="col-seller">
            <div class="listing-seller">${annonce.vendeur}</div>
        </div>
        <div class="col-date">
            <div class="listing-date">${formaterDate(annonce.date)}</div>
        </div>
        <div class="col-status">
            <span class="status-badge ${statusClass}">${statusText}</span>
        </div>
        <div class="col-actions">
            <div class="listing-actions">
                <button class="btn-action btn-view" onclick="afficherDetail(${annonce.id})">👁️ Voir</button>
                ${annonce.statut === 'pending' ? `
                    <button class="btn-action btn-approve" onclick="approuverAnnonce(${annonce.id})">✅</button>
                    <button class="btn-action btn-reject" onclick="ouvrirRejet(${annonce.id})">❌</button>
                ` : ''}
            </div>
        </div>
    `;
    
    return row;
}

// Formatage du prix
function formaterPrix(prix) {
    return prix.toLocaleString('fr-FR');
}

// Formatage de la date
function formaterDate(dateStr) {
    const date = new Date(dateStr);
    const maintenant = new Date();
    const diffJours = Math.floor((maintenant - date) / (1000 * 60 * 60 * 24));
    
    if (diffJours === 0) return 'Aujourd\'hui';
    if (diffJours === 1) return 'Hier';
    if (diffJours < 7) return `Il y a ${diffJours} jours`;
    
    return date.toLocaleDateString('fr-FR');
}

// Filtrer les annonces
function filtrerAnnonces() {
    afficherAnnonces();
    // Réinitialiser les sélections
    annoncesSelectionnees = [];
    document.getElementById('selectAll').checked = false;
}

// Gestion des sélections
function toggleSelectAll() {
    const selectAll = document.getElementById('selectAll').checked;
    const checkboxes = document.querySelectorAll('.listing-row input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAll;
        const id = parseInt(checkbox.closest('.listing-row').dataset.id);
        if (selectAll && !annoncesSelectionnees.includes(id)) {
            annoncesSelectionnees.push(id);
        }
    });
    
    if (!selectAll) {
        annoncesSelectionnees = [];
    }
}

function toggleSelection(id) {
    const index = annoncesSelectionnees.indexOf(id);
    if (index > -1) {
        annoncesSelectionnees.splice(index, 1);
    } else {
        annoncesSelectionnees.push(id);
    }
    
    // Mettre à jour le checkbox "Tout sélectionner"
    const totalCheckboxes = document.querySelectorAll('.listing-row input[type="checkbox"]').length;
    const selectAll = document.getElementById('selectAll');
    selectAll.checked = annoncesSelectionnees.length === totalCheckboxes;
}

// Afficher le détail d'une annonce
function afficherDetail(id) {
    const annonce = trouverAnnonce(id);
    if (!annonce) return;
    
    annonceSelectionnee = annonce;
    const nomPays = paysAfricains[annonce.pays] || annonce.pays;
    
    const detailContent = document.getElementById('detailContent');
    detailContent.innerHTML = `
        <div class="detail-grid">
            <div class="detail-section">
                <h4>📋 Informations générales</h4>
                <div class="detail-field">
                    <label>Titre :</label>
                    <div class="value">${annonce.titre}</div>
                </div>
                <div class="detail-field">
                    <label>Catégorie :</label>
                    <div class="value">${getCategorieNom(annonce.categorie)}</div>
                </div>
                <div class="detail-field">
                    <label>Prix :</label>
                    <div class="value">${formaterPrix(annonce.prix)} ${annonce.devise}</div>
                </div>
                <div class="detail-field">
                    <label>Localisation :</label>
                    <div class="value">${annonce.ville}, ${nomPays}</div>
                </div>
                <div class="detail-field">
                    <label>Date de publication :</label>
                    <div class="value">${formaterDate(annonce.date)}</div>
                </div>
            </div>
            
            <div class="detail-section">
                <h4>👤 Informations vendeur</h4>
                <div class="detail-field">
                    <label>Nom :</label>
                    <div class="value">${annonce.vendeur}</div>
                </div>
                <div class="detail-field">
                    <label>Email :</label>
                    <div class="value">${annonce.email}</div>
                </div>
                <div class="detail-field">
                    <label>Téléphone :</label>
                    <div class="value">${annonce.telephone}</div>
                </div>
                <div class="detail-field">
                    <label>Photos :</label>
                    <div class="value">${annonce.photos.join(' ')}</div>
                </div>
            </div>
            
            <div class="detail-description">
                <h4>📝 Description</h4>
                <p>${annonce.description}</p>
            </div>
            
            ${annonce.motifRejet ? `
                <div class="detail-section" style="grid-column: 1 / -1;">
                    <h4 style="color: #dc2626;">❌ Motif de rejet</h4>
                    <div style="background: #fee2e2; padding: 1rem; border-radius: 8px; color: #991b1b;">
                        ${annonce.motifRejet}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
    
    document.getElementById('detailModal').style.display = 'block';
}

// Trouver une annonce par ID
function trouverAnnonce(id) {
    return [...annoncesEnAttente, ...annoncesApprouvees, ...annoncesRejetees]
        .find(a => a.id === id);
}

// Obtenir le nom de la catégorie
function getCategorieNom(categorie) {
    const categories = {
        'vehicules': '🚗 Véhicules',
        'immobilier': '🏠 Immobilier',
        'electronique': '📱 Électronique',
        'mode': '👗 Mode & Beauté',
        'maison': '🛋️ Maison & Jardin',
        'emploi': '💼 Emploi & Services',
        'agriculture': '🌾 Agriculture',
        'artisanat': '🎨 Artisanat Africain'
    };
    return categories[categorie] || categorie;
}

// Approuver une annonce
function approuverAnnonce(id = null) {
    const annonceId = id || (annonceSelectionnee ? annonceSelectionnee.id : null);
    if (!annonceId) return;
    
    const index = annoncesEnAttente.findIndex(a => a.id === annonceId);
    if (index > -1) {
        const annonce = annoncesEnAttente.splice(index, 1)[0];
        annonce.statut = 'approved';
        annoncesApprouvees.push(annonce);
        
        sauvegarderDonnees();
        afficherNotification('✅ Annonce approuvée avec succès !', 'success');
        afficherAnnonces();
        mettreAJourStats();
        
        if (document.getElementById('detailModal').style.display === 'block') {
            fermerModal('detailModal');
        }
    }
}

// Ouvrir le modal de rejet
function ouvrirRejet(id) {
    annonceSelectionnee = trouverAnnonce(id);
    document.getElementById('rejectModal').style.display = 'block';
}

// Confirmer le rejet
function confirmerRejet() {
    const motif = document.getElementById('rejectReason').value;
    const commentaire = document.getElementById('rejectComment').value;
    
    if (!motif) {
        afficherNotification('⚠️ Veuillez sélectionner un motif de rejet', 'warning');
        return;
    }
    
    if (!annonceSelectionnee) return;
    
    const index = annoncesEnAttente.findIndex(a => a.id === annonceSelectionnee.id);
    if (index > -1) {
        const annonce = annoncesEnAttente.splice(index, 1)[0];
        annonce.statut = 'rejected';
        
        // Construire le motif de rejet
        const motifs = {
            'contenu_inapproprie': 'Contenu inapproprié',
            'prix_incorrect': 'Prix incorrect ou suspect',
            'photos_manquantes': 'Photos manquantes ou de mauvaise qualité',
            'description_incomplete': 'Description incomplète',
            'produit_interdit': 'Produit interdit',
            'doublon': 'Annonce en doublon',
            'informations_fausses': 'Informations fausses ou trompeuses',
            'autre': 'Autre motif'
        };
        
        annonce.motifRejet = motifs[motif];
        if (commentaire) {
            annonce.motifRejet += ` - ${commentaire}`;
        }
        
        annoncesRejetees.push(annonce);
        
        sauvegarderDonnees();
        afficherNotification('❌ Annonce rejetée', 'error');
        afficherAnnonces();
        mettreAJourStats();
        
        fermerModal('rejectModal');
        if (document.getElementById('detailModal').style.display === 'block') {
            fermerModal('detailModal');
        }
        
        // Réinitialiser le formulaire
        document.getElementById('rejectReason').value = '';
        document.getElementById('rejectComment').value = '';
    }
}

// Actions en lot
function approuverSelection() {
    if (annoncesSelectionnees.length === 0) {
        afficherNotification('⚠️ Aucune annonce sélectionnée', 'warning');
        return;
    }
    
    let compteur = 0;
    annoncesSelectionnees.forEach(id => {
        const index = annoncesEnAttente.findIndex(a => a.id === id);
        if (index > -1) {
            const annonce = annoncesEnAttente.splice(index, 1)[0];
            annonce.statut = 'approved';
            annoncesApprouvees.push(annonce);
            compteur++;
        }
    });
    
    if (compteur > 0) {
        sauvegarderDonnees();
        afficherNotification(`✅ ${compteur} annonce(s) approuvée(s)`, 'success');
        afficherAnnonces();
        mettreAJourStats();
        annoncesSelectionnees = [];
        document.getElementById('selectAll').checked = false;
    }
}

function rejeterSelection() {
    if (annoncesSelectionnees.length === 0) {
        afficherNotification('⚠️ Aucune annonce sélectionnée', 'warning');
        return;
    }
    
    // Pour la démo, on rejette avec un motif générique
    let compteur = 0;
    annoncesSelectionnees.forEach(id => {
        const index = annoncesEnAttente.findIndex(a => a.id === id);
        if (index > -1) {
            const annonce = annoncesEnAttente.splice(index, 1)[0];
            annonce.statut = 'rejected';
            annonce.motifRejet = 'Rejet en lot par l\'administrateur';
            annoncesRejetees.push(annonce);
            compteur++;
        }
    });
    
    if (compteur > 0) {
        sauvegarderDonnees();
        afficherNotification(`❌ ${compteur} annonce(s) rejetée(s)`, 'error');
        afficherAnnonces();
        mettreAJourStats();
        annoncesSelectionnees = [];
        document.getElementById('selectAll').checked = false;
    }
}

// Gestion des modals
function fermerModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    annonceSelectionnee = null;
}

// Fermer les modals en cliquant à l'extérieur
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        annonceSelectionnee = null;
    }
});

// Sauvegarder les données
function sauvegarderDonnees() {
    localStorage.setItem('annonces_pending', JSON.stringify(annoncesEnAttente));
    localStorage.setItem('annonces_approved', JSON.stringify(annoncesApprouvees));
    localStorage.setItem('annonces_rejected', JSON.stringify(annoncesRejetees));
}

// Afficher une notification
function afficherNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Afficher la notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Masquer et supprimer la notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Déconnexion admin
function deconnexionAdmin() {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        localStorage.removeItem('admin_logged_in');
        window.location.href = 'index.html';
    }
}

// Fonctions utilitaires
function exporterDonnees() {
    const donnees = {
        pending: annoncesEnAttente,
        approved: annoncesApprouvees,
        rejected: annoncesRejetees,
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(donnees, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `africaboncoin-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    afficherNotification('📊 Données exportées avec succès', 'success');
}

function afficherParametres() {
    afficherNotification('⚙️ Paramètres - Fonctionnalité en développement', 'warning');
}

// Simulation d'ajout de nouvelles annonces (pour la démo)
function simulerNouvelleAnnonce() {
    const nouvelleAnnonce = {
        id: Date.now(),
        titre: "Nouvelle annonce de test",
        prix: 50000,
        devise: "XOF",
        pays: "senegal",
        ville: "Dakar",
        vendeur: "Utilisateur Test",
        email: "test@email.com",
        telephone: "+221 77 000 00 00",
        categorie: "electronique",
        description: "Ceci est une annonce de test générée automatiquement.",
        date: new Date().toISOString().split('T')[0],
        statut: "pending",
        photos: ["📱", "📦"],
        motifRejet: null
    };
    
    annoncesEnAttente.push(nouvelleAnnonce);
    sauvegarderDonnees();
    afficherAnnonces();
    mettreAJourStats();
    afficherNotification('📝 Nouvelle annonce ajoutée pour test', 'success');
}

// Raccourcis clavier pour l'admin
document.addEventListener('keydown', function(e) {
    // Ctrl + A : Approuver la sélection
    if (e.ctrlKey && e.key === 'a' && annoncesSelectionnees.length > 0) {
        e.preventDefault();
        approuverSelection();
    }
    
    // Ctrl + R : Rejeter la sélection
    if (e.ctrlKey && e.key === 'r' && annoncesSelectionnees.length > 0) {
        e.preventDefault();
        rejeterSelection();
    }
    
    // Échap : Fermer les modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
        annonceSelectionnee = null;
    }
});

// Authentification simple pour la démo
if (!localStorage.getItem('admin_logged_in')) {
    localStorage.setItem('admin_logged_in', 'true');
}

console.log('🔐 Interface d\'administration AfricaBonCoin initialisée');
console.log('📋 Raccourcis: Ctrl+A (Approuver), Ctrl+R (Rejeter), Échap (Fermer)');

// Ajouter une annonce de test toutes les 30 secondes (pour la démo)
// setInterval(simulerNouvelleAnnonce, 30000);
