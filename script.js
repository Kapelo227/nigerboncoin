// Données des pays africains avec leurs principales villes
const paysAfricains = {
    // Afrique du Nord
    'algerie': {
        nom: '🇩🇿 Algérie',
        region: 'nord',
        villes: ['Alger', 'Oran', 'Constantine', 'Annaba', 'Blida', 'Batna', 'Djelfa', 'Sétif', 'Sidi Bel Abbès', 'Biskra']
    },
    'egypte': {
        nom: '🇪🇬 Égypte',
        region: 'nord',
        villes: ['Le Caire', 'Alexandrie', 'Gizeh', 'Shubra El-Kheima', 'Port-Saïd', 'Suez', 'Louxor', 'Assouan', 'Mansoura', 'Tanta']
    },
    'libye': {
        nom: '🇱🇾 Libye',
        region: 'nord',
        villes: ['Tripoli', 'Benghazi', 'Misrata', 'Tarhuna', 'Al Bayda', 'Zawiya', 'Zliten', 'Ajdabiya', 'Tobrouk', 'Sabha']
    },
    'maroc': {
        nom: '🇲🇦 Maroc',
        region: 'nord',
        villes: ['Casablanca', 'Rabat', 'Fès', 'Marrakech', 'Agadir', 'Tanger', 'Meknès', 'Oujda', 'Kénitra', 'Tétouan']
    },
    'soudan': {
        nom: '🇸🇩 Soudan',
        region: 'nord',
        villes: ['Khartoum', 'Omdurman', 'Khartoum Nord', 'Port-Soudan', 'Kassala', 'Obeid', 'Nyala', 'Gedaref', 'Kosti', 'Wad Madani']
    },
    'tunisie': {
        nom: '🇹🇳 Tunisie',
        region: 'nord',
        villes: ['Tunis', 'Sfax', 'Sousse', 'Kairouan', 'Bizerte', 'Gabès', 'Ariana', 'Gafsa', 'Monastir', 'Ben Arous']
    },

    // Afrique de l'Ouest
    'benin': {
        nom: '🇧🇯 Bénin',
        region: 'ouest',
        villes: ['Cotonou', 'Porto-Novo', 'Parakou', 'Djougou', 'Bohicon', 'Kandi', 'Lokossa', 'Ouidah', 'Abomey', 'Natitingou']
    },
    'burkina-faso': {
        nom: '🇧🇫 Burkina Faso',
        region: 'ouest',
        villes: ['Ouagadougou', 'Bobo-Dioulasso', 'Koudougou', 'Ouahigouya', 'Banfora', 'Kaya', 'Tenkodogo', 'Orodara', 'Réo', 'Dori']
    },
    'cap-vert': {
        nom: '🇨🇻 Cap-Vert',
        region: 'ouest',
        villes: ['Praia', 'Mindelo', 'Santa Maria', 'Assomada', 'Porto Novo', 'Espargos', 'Ribeira Grande', 'Cidade Velha', 'São Filipe', 'Tarrafal']
    },
    'cote-ivoire': {
        nom: '🇨🇮 Côte d\'Ivoire',
        region: 'ouest',
        villes: ['Abidjan', 'Yamoussoukro', 'Bouaké', 'Daloa', 'San-Pédro', 'Korhogo', 'Man', 'Divo', 'Gagnoa', 'Anyama']
    },
    'gambie': {
        nom: '🇬🇲 Gambie',
        region: 'ouest',
        villes: ['Banjul', 'Serekunda', 'Brikama', 'Bakau', 'Farafenni', 'Lamin', 'Sukuta', 'Gunjur', 'Soma', 'Basse Santa Su']
    },
    'ghana': {
        nom: '🇬🇭 Ghana',
        region: 'ouest',
        villes: ['Accra', 'Kumasi', 'Tamale', 'Takoradi', 'Ashaiman', 'Tema', 'Teshie', 'Cape Coast', 'Sekondi', 'Obuasi']
    },
    'guinee': {
        nom: '🇬🇳 Guinée',
        region: 'ouest',
        villes: ['Conakry', 'Nzérékoré', 'Kankan', 'Kindia', 'Labe', 'Mamou', 'Boke', 'Siguiri', 'Kouroussa', 'Faranah']
    },
    'guinee-bissau': {
        nom: '🇬🇼 Guinée-Bissau',
        region: 'ouest',
        villes: ['Bissau', 'Bafatá', 'Gabú', 'Bissorã', 'Bolama', 'Cacheu', 'Bubaque', 'Catió', 'Mansôa', 'Buba']
    },
    'liberia': {
        nom: '🇱🇷 Libéria',
        region: 'ouest',
        villes: ['Monrovia', 'Gbarnga', 'Kakata', 'Bensonville', 'Harper', 'Voinjama', 'Buchanan', 'Zwedru', 'New Kru Town', 'Pleebo']
    },
    'mali': {
        nom: '🇲🇱 Mali',
        region: 'ouest',
        villes: ['Bamako', 'Sikasso', 'Mopti', 'Koutiala', 'Ségou', 'Kayes', 'Gao', 'Tombouctou', 'Kati', 'Djenné']
    },
    'mauritanie': {
        nom: '🇲🇷 Mauritanie',
        region: 'ouest',
        villes: ['Nouakchott', 'Nouadhibou', 'Néma', 'Kaédi', 'Zouérat', 'Rosso', 'Atar', 'Adel Bagrou', 'Aleg', 'Boutilimit']
    },
    'niger': {
        nom: '🇳🇪 Niger',
        region: 'ouest',
        villes: ['Niamey', 'Zinder', 'Maradi', 'Agadez', 'Tahoua', 'Dosso', 'Tillabéri', 'Diffa', 'Arlit', 'Tessaoua']
    },
    'nigeria': {
        nom: '🇳🇬 Nigeria',
        region: 'ouest',
        villes: ['Lagos', 'Kano', 'Ibadan', 'Abuja', 'Port Harcourt', 'Benin City', 'Maiduguri', 'Zaria', 'Aba', 'Jos']
    },
    'senegal': {
        nom: '🇸🇳 Sénégal',
        region: 'ouest',
        villes: ['Dakar', 'Touba', 'Thiès', 'Kaolack', 'Saint-Louis', 'Mbour', 'Ziguinchor', 'Diourbel', 'Tambacounda', 'Rufisque']
    },
    'sierra-leone': {
        nom: '🇸🇱 Sierra Leone',
        region: 'ouest',
        villes: ['Freetown', 'Bo', 'Kenema', 'Koidu', 'Makeni', 'Waterloo', 'Port Loko', 'Bonthe', 'Moyamba', 'Kailahun']
    },
    'togo': {
        nom: '🇹🇬 Togo',
        region: 'ouest',
        villes: ['Lomé', 'Sokodé', 'Kara', 'Kpalimé', 'Atakpamé', 'Dapaong', 'Tsévié', 'Aného', 'Vogan', 'Bassar']
    },

    // Afrique Centrale
    'cameroun': {
        nom: '🇨🇲 Cameroun',
        region: 'centrale',
        villes: ['Douala', 'Yaoundé', 'Bamenda', 'Bafoussam', 'Garoua', 'Maroua', 'Nkongsamba', 'Bertoua', 'Edéa', 'Loum']
    },
    'centrafrique': {
        nom: '🇨🇫 Centrafrique',
        region: 'centrale',
        villes: ['Bangui', 'Bimbo', 'Berbérati', 'Carnot', 'Bambari', 'Bouar', 'Bossangoa', 'Bria', 'Bangassou', 'Nola']
    },
    'congo': {
        nom: '🇨🇬 Congo',
        region: 'centrale',
        villes: ['Brazzaville', 'Pointe-Noire', 'Dolisie', 'Nkayi', 'Impfondo', 'Ouesso', 'Madingou', 'Owando', 'Sibiti', 'Mossendjo']
    },
    'congo-rdc': {
        nom: '🇨🇩 Congo RDC',
        region: 'centrale',
        villes: ['Kinshasa', 'Lubumbashi', 'Mbuji-Mayi', 'Kisangani', 'Masina', 'Kananga', 'Likasi', 'Kolwezi', 'Tshikapa', 'Beni']
    },
    'gabon': {
        nom: '🇬🇦 Gabon',
        region: 'centrale',
        villes: ['Libreville', 'Port-Gentil', 'Franceville', 'Oyem', 'Moanda', 'Mouila', 'Lambaréné', 'Tchibanga', 'Koulamoutou', 'Makokou']
    },
    'guinee-equatoriale': {
        nom: '🇬🇶 Guinée équatoriale',
        region: 'centrale',
        villes: ['Malabo', 'Bata', 'Ebebiyin', 'Aconibe', 'Añisoc', 'Luba', 'Evinayong', 'Mongomo', 'Mengomeyén', 'Mikomeseng']
    },
    'sao-tome': {
        nom: '🇸🇹 São Tomé-et-Príncipe',
        region: 'centrale',
        villes: ['São Tomé', 'Santo António', 'Neves', 'Santana', 'Trindade', 'Santa Cruz', 'Pantufo', 'Guadalupe', 'Ribeira Afonso', 'Porto Alegre']
    },
    'tchad': {
        nom: '🇹🇩 Tchad',
        region: 'centrale',
        villes: ['N\'Djamena', 'Moundou', 'Sarh', 'Abéché', 'Kelo', 'Koumra', 'Pala', 'Am Timan', 'Bongor', 'Mongo']
    },

    // Afrique de l'Est
    'burundi': {
        nom: '🇧🇮 Burundi',
        region: 'est',
        villes: ['Gitega', 'Bujumbura', 'Muyinga', 'Ruyigi', 'Ngozi', 'Rutana', 'Bururi', 'Makamba', 'Muramvya', 'Kayanza']
    },
    'comores': {
        nom: '🇰🇲 Comores',
        region: 'est',
        villes: ['Moroni', 'Mutsamudu', 'Fomboni', 'Domoni', 'Sima', 'Mitsoudjé', 'Ouani', 'Adda-Douéni', 'Mirontsy', 'Foumbouni']
    },
    'djibouti': {
        nom: '🇩🇯 Djibouti',
        region: 'est',
        villes: ['Djibouti', 'Ali Sabieh', 'Dikhil', 'Tadjourah', 'Obock', 'Arta', 'Holhol', 'Yoboki', 'Randa', 'Galafi']
    },
    'erythree': {
        nom: '🇪🇷 Érythrée',
        region: 'est',
        villes: ['Asmara', 'Assab', 'Massawa', 'Keren', 'Mendefera', 'Barentu', 'Adi Keih', 'Adi Quala', 'Dekemhare', 'Akurdet']
    },
    'ethiopie': {
        nom: '🇪🇹 Éthiopie',
        region: 'est',
        villes: ['Addis-Abeba', 'Dire Dawa', 'Mekelle', 'Gondar', 'Adama', 'Awassa', 'Bahir Dar', 'Dessie', 'Jimma', 'Jijiga']
    },
    'kenya': {
        nom: '🇰🇪 Kenya',
        region: 'est',
        villes: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Kehancha', 'Kitale', 'Malindi', 'Garissa', 'Kakamega']
    },
    'madagascar': {
        nom: '🇲🇬 Madagascar',
        region: 'est',
        villes: ['Antananarivo', 'Toamasina', 'Antsirabe', 'Fianarantsoa', 'Mahajanga', 'Toliara', 'Antsiranana', 'Ambovombe', 'Ambatondrazaka', 'Morondava']
    },
    'malawi': {
        nom: '🇲🇼 Malawi',
        region: 'est',
        villes: ['Lilongwe', 'Blantyre', 'Mzuzu', 'Zomba', 'Kasungu', 'Mangochi', 'Karonga', 'Salima', 'Balaka', 'Dedza']
    },
    'maurice': {
        nom: '🇲🇺 Maurice',
        region: 'est',
        villes: ['Port-Louis', 'Beau Bassin-Rose Hill', 'Vacoas-Phoenix', 'Curepipe', 'Quatre Bornes', 'Triolet', 'Goodlands', 'Centre de Flacq', 'Mahebourg', 'Saint Pierre']
    },
    'mozambique': {
        nom: '🇲🇿 Mozambique',
        region: 'est',
        villes: ['Maputo', 'Matola', 'Beira', 'Nampula', 'Chimoio', 'Nacala', 'Quelimane', 'Tete', 'Xai-Xai', 'Lichinga']
    },
    'ouganda': {
        nom: '🇺🇬 Ouganda',
        region: 'est',
        villes: ['Kampala', 'Gulu', 'Lira', 'Mbarara', 'Jinja', 'Bwizibwera', 'Mbale', 'Mukono', 'Kasese', 'Masaka']
    },
    'rwanda': {
        nom: '🇷🇼 Rwanda',
        region: 'est',
        villes: ['Kigali', 'Butare', 'Gitarama', 'Musanze', 'Gisenyi', 'Byumba', 'Cyangugu', 'Kibungo', 'Rwamagana', 'Nyanza']
    },
    'seychelles': {
        nom: '🇸🇨 Seychelles',
        region: 'est',
        villes: ['Victoria', 'Anse Boileau', 'Beau Vallon', 'Cascade', 'Anse Royale', 'Takamaka', 'Bel Ombre', 'Glacis', 'Grand Anse Mahe', 'Pointe Larue']
    },
    'somalie': {
        nom: '🇸🇴 Somalie',
        region: 'est',
        villes: ['Mogadiscio', 'Hargeisa', 'Bosaso', 'Kismayo', 'Merca', 'Galcaio', 'Berbera', 'Baidoa', 'Garowe', 'Jowhar']
    },
    'soudan-sud': {
        nom: '🇸🇸 Soudan du Sud',
        region: 'est',
        villes: ['Juba', 'Wau', 'Malakal', 'Yei', 'Bentiu', 'Bor', 'Yambio', 'Torit', 'Aweil', 'Kuacjok']
    },
    'tanzanie': {
        nom: '🇹🇿 Tanzanie',
        region: 'est',
        villes: ['Dar es Salaam', 'Mwanza', 'Arusha', 'Dodoma', 'Mbeya', 'Morogoro', 'Tanga', 'Kahama', 'Tabora', 'Zanzibar']
    },
    'zambie': {
        nom: '🇿🇲 Zambie',
        region: 'est',
        villes: ['Lusaka', 'Kitwe', 'Ndola', 'Kabwe', 'Chingola', 'Mufulira', 'Livingstone', 'Luanshya', 'Kasama', 'Chipata']
    },
    'zimbabwe': {
        nom: '🇿🇼 Zimbabwe',
        region: 'est',
        villes: ['Harare', 'Bulawayo', 'Chitungwiza', 'Mutare', 'Epworth', 'Gweru', 'Kwekwe', 'Kadoma', 'Masvingo', 'Chinhoyi']
    },

    // Afrique Australe
    'afrique-sud': {
        nom: '🇿🇦 Afrique du Sud',
        region: 'australe',
        villes: ['Johannesburg', 'Le Cap', 'Durban', 'Pretoria', 'Port Elizabeth', 'Pietermaritzburg', 'Benoni', 'Tembisa', 'East London', 'Vereeniging']
    },
    'angola': {
        nom: '🇦🇴 Angola',
        region: 'australe',
        villes: ['Luanda', 'Huambo', 'Lobito', 'Benguela', 'Kuito', 'Lubango', 'Malanje', 'Namibe', 'Soyo', 'Cabinda']
    },
    'botswana': {
        nom: '🇧🇼 Botswana',
        region: 'australe',
        villes: ['Gaborone', 'Francistown', 'Molepolole', 'Maun', 'Serowe', 'Selibe Phikwe', 'Kanye', 'Mochudi', 'Mahalapye', 'Palapye']
    },
    'eswatini': {
        nom: '🇸🇿 Eswatini',
        region: 'australe',
        villes: ['Mbabane', 'Manzini', 'Big Bend', 'Malkerns', 'Nhlangano', 'Hluti', 'Siteki', 'Piggs Peak', 'Lobamba', 'Simunye']
    },
    'lesotho': {
        nom: '🇱🇸 Lesotho',
        region: 'australe',
        villes: ['Maseru', 'Teyateyaneng', 'Mafeteng', 'Hlotse', 'Mohales Hoek', 'Maputsoe', 'Qacha\'s Nek', 'Quthing', 'Butha-Buthe', 'Mokhotlong']
    },
    'namibie': {
        nom: '🇳🇦 Namibie',
        region: 'australe',
        villes: ['Windhoek', 'Rundu', 'Walvis Bay', 'Swakopmund', 'Oshakati', 'Rehoboth', 'Katima Mulilo', 'Otjiwarongo', 'Okahandja', 'Ondangwa']
    }
};

// Données d'exemple pour les annonces avec diversité africaine
const annoncesExemples = [
    {
        id: 1,
        titre: "Toyota Land Cruiser 2019",
        prix: 25000000,
        pays: "nigeria",
        ville: "Lagos",
        categorie: "vehicules",
        image: "🚗",
        date: "Il y a 2 heures",
        vendeur: "Adebayo O.",
        devise: "NGN"
    },
    {
        id: 2,
        titre: "Villa 4 chambres à louer",
        prix: 800000,
        pays: "maroc",
        ville: "Casablanca",
        categorie: "immobilier",
        image: "🏠",
        date: "Il y a 3 heures",
        vendeur: "Fatima B.",
        devise: "MAD"
    },
    {
        id: 3,
        titre: "iPhone 14 Pro Max",
        prix: 450000,
        pays: "kenya",
        ville: "Nairobi",
        categorie: "electronique",
        image: "📱",
        date: "Il y a 1 jour",
        vendeur: "James M.",
        devise: "KES"
    },
    {
        id: 4,
        titre: "Moto Bajaj Boxer 150cc",
        prix: 1200000,
        pays: "senegal",
        ville: "Dakar",
        categorie: "vehicules",
        image: "🏍️",
        date: "Il y a 4 heures",
        vendeur: "Moussa D.",
        devise: "XOF"
    },
    {
        id: 5,
        titre: "MacBook Air M2",
        prix: 85000,
        pays: "afrique-sud",
        ville: "Johannesburg",
        categorie: "electronique",
        image: "💻",
        date: "Il y a 6 heures",
        vendeur: "Sarah L.",
        devise: "ZAR"
    },
    {
        id: 6,
        titre: "Terrain 1000m² à vendre",
        prix: 15000000,
        pays: "cote-ivoire",
        ville: "Abidjan",
        categorie: "immobilier",
        image: "🏞️",
        date: "Il y a 2 jours",
        vendeur: "Kouassi A.",
        devise: "XOF"
    },
    {
        id: 7,
        titre: "Réfrigérateur LG 400L",
        prix: 180000,
        pays: "egypte",
        ville: "Le Caire",
        categorie: "maison",
        image: "❄️",
        date: "Il y a 5 heures",
        vendeur: "Ahmed H.",
        devise: "EGP"
    },
    {
        id: 8,
        titre: "Tissus Wax authentiques",
        prix: 25000,
        pays: "ghana",
        ville: "Accra",
        categorie: "artisanat",
        image: "🎨",
        date: "Il y a 1 jour",
        vendeur: "Akosua T.",
        devise: "GHS"
    },
    {
        id: 9,
        titre: "Appartement 2 pièces meublé",
        prix: 450000,
        pays: "tunisie",
        ville: "Tunis",
        categorie: "immobilier",
        image: "🏠",
        date: "Il y a 8 heures",
        vendeur: "Amina K.",
        devise: "TND"
    },
    {
        id: 10,
        titre: "Sculptures en bois d'ébène",
        prix: 75000,
        pays: "cameroun",
        ville: "Douala",
        categorie: "artisanat",
        image: "🗿",
        date: "Il y a 3 jours",
        vendeur: "Paul N.",
        devise: "XAF"
    }
];

// Variables globales
let annoncesAffichees = [...annoncesExemples];
let categorieActive = '';
let regionActive = '';
let paysActif = '';

// Initialisation de la page
document.addEventListener('DOMContentLoaded', function() {
    afficherAnnonces();
    initialiserRecherche();
    initialiserModals();
    initialiserSelecteursPays();
    
    console.log('🌍 AfricaBonCoin chargé avec succès !');
    console.log('🚀 Plateforme pan-africaine de petites annonces');
    console.log('📍 54 pays africains connectés');
});

// Initialisation des sélecteurs de pays et villes
function initialiserSelecteursPays() {
    const countrySelect = document.getElementById('countrySelect');
    const modalCountrySelect = document.getElementById('modalCountrySelect');
    
    if (countrySelect) {
        countrySelect.addEventListener('change', function() {
            updateCities(this.value, 'citySelect');
            rechercherAnnonces();
        });
    }
    
    if (modalCountrySelect) {
        // Remplir le sélecteur de pays du modal
        Object.keys(paysAfricains).forEach(code => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = paysAfricains[code].nom;
            modalCountrySelect.appendChild(option);
        });
    }
}

// Mise à jour des villes selon le pays sélectionné
function updateCities(paysCode, selectId) {
    const citySelect = document.getElementById(selectId);
    if (!citySelect || !paysCode) {
        if (citySelect) {
            citySelect.innerHTML = '<option value="">Toutes les villes</option>';
        }
        return;
    }
    
    const pays = paysAfricains[paysCode];
    if (!pays) return;
    
    citySelect.innerHTML = '<option value="">Toutes les villes</option>';
    
    pays.villes.forEach(ville => {
        const option = document.createElement('option');
        option.value = ville.toLowerCase().replace(/\s+/g, '-');
        option.textContent = ville;
        citySelect.appendChild(option);
    });
}

// Fonction pour le modal
function updateModalCities() {
    const modalCountrySelect = document.getElementById('modalCountrySelect');
    const modalCitySelect = document.getElementById('modalCitySelect');
    
    if (modalCountrySelect && modalCitySelect) {
        updateCities(modalCountrySelect.value, 'modalCitySelect');
    }
}

// Affichage des annonces
function afficherAnnonces(annonces = annoncesAffichees) {
    const grid = document.getElementById('listingsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (annonces.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <h3>🔍 Aucune annonce trouvée</h3>
                <p>Essayez de modifier vos critères de recherche ou explorez d'autres pays africains</p>
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
    
    const pays = paysAfricains[annonce.pays];
    const nomPays = pays ? pays.nom : annonce.pays;
    
    card.innerHTML = `
        <div class="listing-image">${annonce.image}</div>
        <div class="listing-content">
            <h4 class="listing-title">${annonce.titre}</h4>
            <div class="listing-price">${formaterPrix(annonce.prix)} ${annonce.devise || 'FCFA'}</div>
            <div class="listing-location">📍 ${annonce.ville}, ${nomPays}</div>
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
    const pays = document.getElementById('countrySelect').value;
    const ville = document.getElementById('citySelect').value;
    
    let resultats = annoncesExemples;
    
    // Filtrer par texte de recherche
    if (recherche) {
        resultats = resultats.filter(annonce => 
            annonce.titre.toLowerCase().includes(recherche) ||
            annonce.vendeur.toLowerCase().includes(recherche)
        );
    }
    
    // Filtrer par pays
    if (pays) {
        resultats = resultats.filter(annonce => 
            annonce.pays === pays
        );
    }
    
    // Filtrer par ville
    if (ville) {
        resultats = resultats.filter(annonce => 
            annonce.ville.toLowerCase().replace(/\s+/g, '-') === ville
        );
    }
    
    // Filtrer par catégorie active
    if (categorieActive) {
        resultats = resultats.filter(annonce => 
            annonce.categorie === categorieActive
        );
    }
    
    // Filtrer par région active
    if (regionActive) {
        resultats = resultats.filter(annonce => {
            const paysData = paysAfricains[annonce.pays];
            return paysData && paysData.region === regionActive;
        });
    }
    
    annoncesAffichees = resultats;
    afficherAnnonces();
    
    // Afficher un message de résultat
    afficherMessageRecherche(resultats.length, recherche, pays, ville);
}

// Message de résultat de recherche
function afficherMessageRecherche(nombre, recherche, pays, ville) {
    let message = `🔍 ${nombre} annonce(s) trouvée(s)`;
    
    const criteres = [];
    if (recherche) criteres.push(`"${recherche}"`);
    if (pays && paysAfricains[pays]) criteres.push(paysAfricains[pays].nom);
    if (ville) criteres.push(ville);
    if (categorieActive) criteres.push(`catégorie ${categorieActive}`);
    if (regionActive) criteres.push(`région ${regionActive}`);
    
    if (criteres.length > 0) {
        message += ` pour ${criteres.join(', ')}`;
    }
    
    // Créer ou mettre à jour le message
    let messageDiv = document.getElementById('searchMessage');
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.id = 'searchMessage';
        messageDiv.style.cssText = `
            background: linear-gradient(135deg, #fef7ed, #fed7aa);
            padding: 1rem 2rem;
            margin: 1rem 0;
            border-radius: 12px;
            text-align: center;
            color: #92400e;
            border: 2px solid #fdba74;
            font-weight: 600;
        `;
        
        const container = document.querySelector('.recent-listings .container');
        container.insertBefore(messageDiv, container.querySelector('.listings-grid'));
    }
    
    messageDiv.textContent = message;
    
    // Masquer le message après 5 secondes si c'est une recherche vide
    if (criteres.length === 0) {
        setTimeout(() => {
            if (messageDiv) messageDiv.remove();
        }, 5000);
    }
}

// Filtrage par région
function filtrerRegion(region) {
    regionActive = regionActive === region ? '' : region;
    categorieActive = ''; // Reset catégorie
    
    // Mettre à jour l'apparence des cartes de région
    document.querySelectorAll('.region-card').forEach(card => {
        card.style.backgroundColor = '';
        card.style.borderColor = '';
        card.style.transform = '';
    });
    
    if (regionActive) {
        const carteActive = Array.from(document.querySelectorAll('.region-card'))
            .find(card => card.onclick.toString().includes(region));
        if (carteActive) {
            carteActive.style.backgroundColor = '#fef7ed';
            carteActive.style.borderColor = '#d97706';
            carteActive.style.transform = 'translateY(-4px)';
        }
    }
    
    rechercherAnnonces();
}

// Filtrage par catégorie
function filtrerCategorie(categorie) {
    categorieActive = categorieActive === categorie ? '' : categorie;
    regionActive = ''; // Reset région
    
    // Mettre à jour l'apparence des cartes de catégorie
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.backgroundColor = '';
        card.style.borderColor = '';
        card.style.transform = '';
    });
    
    if (categorieActive) {
        const carteActive = Array.from(document.querySelectorAll('.category-card'))
            .find(card => card.onclick.toString().includes(categorie));
        if (carteActive) {
            carteActive.style.backgroundColor = '#fef7ed';
            carteActive.style.borderColor = '#d97706';
            carteActive.style.transform = 'translateY(-4px)';
        }
    }
    
    rechercherAnnonces();
}

// Initialisation de la recherche
function initialiserRecherche() {
    const searchInput = document.getElementById('searchInput');
    const countrySelect = document.getElementById('countrySelect');
    const citySelect = document.getElementById('citySelect');
    
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
    
    if (countrySelect) {
        countrySelect.addEventListener('change', rechercherAnnonces);
    }
    
    if (citySelect) {
        citySelect.addEventListener('change', rechercherAnnonces);
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
            alert('🔐 Fonctionnalité de connexion en cours de développement !\n\nBientôt disponible pour tous les pays africains.');
            fermerModal('loginModal');
        });
    }
    
    const adForm = document.querySelector('.ad-form');
    if (adForm) {
        adForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ Votre annonce a été soumise avec succès !\n\n🔍 Elle sera publiée après vérification.\n🌍 Merci de contribuer à AfricaBonCoin !');
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
    alert('📝 Fonctionnalité d\'inscription en cours de développement !\n\n🌍 Bientôt vous pourrez créer votre compte AfricaBonCoin.');
}

function fermerModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Affichage du détail d'une annonce
function afficherDetailAnnonce(id) {
    const annonce = annoncesExemples.find(a => a.id === id);
    if (!annonce) return;
    
    const pays = paysAfricains[annonce.pays];
    const nomPays = pays ? pays.nom : annonce.pays;
    
    const details = `
🏷️ ${annonce.titre}
💰 ${formaterPrix(annonce.prix)} ${annonce.devise || 'FCFA'}
📍 ${annonce.ville}, ${nomPays}
👤 Vendeur: ${annonce.vendeur}
📅 Publié: ${annonce.date}

💳 PAIEMENT À LA LIVRAISON
✅ Payez uniquement à la réception
✅ Sécurité garantie pour l'acheteur
✅ Pas de risque d'arnaque

📞 Pour contacter le vendeur:
• Appelez directement
• Envoyez un message WhatsApp
• Utilisez notre messagerie sécurisée

🚚 Livraison disponible dans toute l'Afrique
🌍 AfricaBonCoin - Connectons l'Afrique !

Cette fonctionnalité sera bientôt disponible avec plus de détails et options de contact.
    `;
    
    alert(details);
}

// Navigation vers toutes les annonces
function voirToutesAnnonces() {
    // Réinitialiser tous les filtres
    categorieActive = '';
    regionActive = '';
    paysActif = '';
    
    const searchInput = document.getElementById('searchInput');
    const countrySelect = document.getElementById('countrySelect');
    const citySelect = document.getElementById('citySelect');
    
    if (searchInput) searchInput.value = '';
    if (countrySelect) countrySelect.value = '';
    if (citySelect) citySelect.value = '';
    
    // Réinitialiser l'apparence des cartes
    document.querySelectorAll('.category-card, .region-card').forEach(card => {
        card.style.backgroundColor = '';
        card.style.borderColor = '';
        card.style.transform = '';
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
        const texte = compteur.textContent;
        const valeurFinale = parseInt(texte.replace(/[^0-9]/g, ''));
        let valeurActuelle = 0;
        const increment = valeurFinale / 100;
        const hasPlusSign = texte.includes('+');
        
        const timer = setInterval(() => {
            valeurActuelle += increment;
            if (valeurActuelle >= valeurFinale) {
                valeurActuelle = valeurFinale;
                clearInterval(timer);
            }
            
            let affichage = Math.floor(valeurActuelle).toLocaleString();
            if (hasPlusSign) affichage += '+';
            
            compteur.textContent = affichage;
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
    const sections = document.querySelectorAll('.regions, .categories, .recent-listings, .features');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Observer spécial pour les stats du hero
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        observer.observe(heroStats);
    }
});

// Fonctions de partage social
function partagerSurWhatsApp(annonceId) {
    const annonce = annoncesExemples.find(a => a.id === annonceId);
    if (!annonce) return;
    
    const pays = paysAfricains[annonce.pays];
    const nomPays = pays ? pays.nom : annonce.pays;
    
    const message = `🌍 Regardez cette annonce sur AfricaBonCoin:\n\n${annonce.titre}\n💰 ${formaterPrix(annonce.prix)} ${annonce.devise || 'FCFA'}\n📍 ${annonce.ville}, ${nomPays}\n\n🔗 La plateforme qui connecte toute l'Afrique !`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function partagerSurFacebook(annonceId) {
    const message = "Découvrez AfricaBonCoin - La plateforme qui connecte tous les pays africains pour acheter et vendre facilement !";
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Gestion des favoris (localStorage)
function toggleFavori(annonceId) {
    let favoris = JSON.parse(localStorage.getItem('africaboncoin_favoris') || '[]');
    
    if (favoris.includes(annonceId)) {
        favoris = favoris.filter(id => id !== annonceId);
        alert('💔 Annonce retirée des favoris');
    } else {
        favoris.push(annonceId);
        alert('❤️ Annonce ajoutée aux favoris');
    }
    
    localStorage.setItem('africaboncoin_favoris', JSON.stringify(favoris));
}

// Statistiques d'utilisation
function trackEvent(eventName, data = {}) {
    console.log(`📊 AfricaBonCoin Event: ${eventName}`, data);
    // Ici on pourrait envoyer les données à un service d'analytics
}

// Tracking des interactions
document.addEventListener('click', function(e) {
    if (e.target.closest('.category-card')) {
        const categoryText = e.target.closest('.category-card').querySelector('h4').textContent;
        trackEvent('category_click', { category: categoryText });
    }
    
    if (e.target.closest('.region-card')) {
        const regionText = e.target.closest('.region-card').querySelector('h4').textContent;
        trackEvent('region_click', { region: regionText });
    }
    
    if (e.target.closest('.listing-card')) {
        const listingTitle = e.target.closest('.listing-card').querySelector('.listing-title').textContent;
        trackEvent('listing_click', { listing: listingTitle });
    }
});

// Messages d'encouragement africains
const messagesAfricains = [
    "🌍 Bienvenue sur AfricaBonCoin - Unissons l'Afrique !",
    "🤝 Connectez-vous avec 54 pays africains !",
    "💎 Découvrez les trésors de l'Afrique !",
    "🚀 L'avenir du commerce africain commence ici !",
    "🌟 Ensemble, construisons l'Afrique de demain !",
    "🎨 Célébrons la diversité africaine !",
    "💪 L'union fait la force - Ubuntu !",
    "🌅 Un nouveau jour se lève sur l'Afrique !"
];

function afficherMessageAfricain() {
    const message = messagesAfricains[Math.floor(Math.random() * messagesAfricains.length)];
    console.log(`💬 ${message}`);
}

// Afficher un message d'encouragement au chargement
setTimeout(afficherMessageAfricain, 2000);

// Fonction pour obtenir des statistiques par région
function getStatistiquesRegion(region) {
    const paysRegion = Object.values(paysAfricains).filter(pays => pays.region === region);
    const annoncesRegion = annoncesExemples.filter(annonce => {
        const pays = paysAfricains[annonce.pays];
        return pays && pays.region === region;
    });
    
    return {
        nombrePays: paysRegion.length,
        nombreAnnonces: annoncesRegion.length,
        pays: paysRegion.map(p => p.nom)
    };
}

// Fonction pour recherche avancée
function rechercheAvancee(criteres) {
    let resultats = annoncesExemples;
    
    if (criteres.prixMin) {
        resultats = resultats.filter(a => a.prix >= criteres.prixMin);
    }
    
    if (criteres.prixMax) {
        resultats = resultats.filter(a => a.prix <= criteres.prixMax);
    }
    
    if (criteres.dateDebut) {
        // Logique de filtrage par date
    }
    
    return resultats;
}

// Sauvegarde des préférences utilisateur
function sauvegarderPreferences(preferences) {
    localStorage.setItem('africaboncoin_preferences', JSON.stringify(preferences));
}

function chargerPreferences() {
    const prefs = localStorage.getItem('africaboncoin_preferences');
    return prefs ? JSON.parse(prefs) : {
        langue: 'fr',
        devise: 'auto',
        region_preferee: '',
        notifications: true
    };
}

// Initialiser les préférences au chargement
document.addEventListener('DOMContentLoaded', function() {
    const preferences = chargerPreferences();
    console.log('⚙️ Préférences utilisateur chargées:', preferences);
});

// Message de bienvenue personnalisé
function afficherBienvenuePersonnalisee() {
    const preferences = chargerPreferences();
    const heureActuelle = new Date().getHours();
    
    let salutation;
    if (heureActuelle < 12) {
        salutation = "🌅 Bonjour";
    } else if (heureActuelle < 18) {
        salutation = "☀️ Bon après-midi";
    } else {
        salutation = "🌙 Bonsoir";
    }
    
    console.log(`${salutation} et bienvenue sur AfricaBonCoin ! 🌍`);
}

// Afficher le message de bienvenue
setTimeout(afficherBienvenuePersonnalisee, 1000);
