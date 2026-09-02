function explore() {

    document
        .getElementById("stateExplorer")
        .scrollIntoView({ behavior: "auto", block: "start" });

}
const heritageData = {
    "Andhra Pradesh": {
        dance: ["Kuchipudi"],
        arts: ["Kalamkari", "Kondapalli Toys"],
        food: ["Pulihora", "Gongura Pachadi"],
        dress: ["Langa Voni"],
        festival: ["Ugadi", "Sankranti"],
        culture: ["Telugu Culture"],
        places: ["Tirupati", "Araku Valley", "Amaravati"]
    },

    "Arunachal Pradesh": {
        dance: ["Bardo Chham", "Ponung"],
        arts: ["Traditional Weaving"],
        food: ["Thukpa"],
        dress: ["Traditional Tribal Dress"],
        festival: ["Losar", "Solung"],
        culture: ["Tribal Culture"],
        places: ["Tawang", "Ziro Valley"]
    },

    "Assam": {
        dance: ["Bihu"],
        arts: ["Muga Silk"],
        food: ["Khar", "Masor Tenga"],
        dress: ["Mekhela Chador"],
        festival: ["Bihu"],
        culture: ["Assamese Culture"],
        places: ["Kaziranga National Park", "Kamakhya Temple"]
    },

    "Bihar": {
        dance: ["Jat-Jatin"],
        arts: ["Madhubani Painting"],
        food: ["Litti Chokha"],
        dress: ["Dhoti Kurta", "Saree"],
        festival: ["Chhath Puja"],
        culture: ["Maithili Culture"],
        places: ["Mahabodhi Temple", "Nalanda"]
    },

    "Chhattisgarh": {
        dance: ["Panthi", "Raut Nacha"],
        arts: ["Dhokra Art"],
        food: ["Fara", "Chila"],
        dress: ["Kosa Silk"],
        festival: ["Bastar Dussehra"],
        culture: ["Tribal Culture"],
        places: ["Chitrakote Falls", "Bastar"]
    },

    "Goa": {
        dance: ["Fugdi", "Dhalo"],
        arts: ["Azulejo Art"],
        food: ["Goan Fish Curry", "Bebinca"],
        dress: ["Kunbi Saree"],
        festival: ["Goa Carnival"],
        culture: ["Goan Culture"],
        places: ["Basilica of Bom Jesus", "Fort Aguada"]
    },

    "Gujarat": {
        dance: ["Garba", "Dandiya"],
        arts: ["Bandhani"],
        food: ["Dhokla", "Thepla"],
        dress: ["Chaniya Choli"],
        festival: ["Navratri"],
        culture: ["Gujarati Culture"],
        places: ["Statue of Unity", "Rann of Kutch"]
    },

    "Haryana": {
        dance: ["Dhamal", "Phag"],
        arts: ["Phulkari"],
        food: ["Bajra Khichdi"],
        dress: ["Ghagra Choli"],
        festival: ["Teej"],
        culture: ["Haryanvi Culture"],
        places: ["Kurukshetra", "Sultanpur National Park"]
    },

    "Himachal Pradesh": {
        dance: ["Nati"],
        arts: ["Chamba Rumal"],
        food: ["Dham"],
        dress: ["Himachali Traditional Dress"],
        festival: ["Kullu Dussehra"],
        culture: ["Pahari Culture"],
        places: ["Shimla", "Manali", "Spiti Valley"]
    },

    "Jharkhand": {
        dance: ["Chhau", "Jhumair"],
        arts: ["Sohrai Painting"],
        food: ["Dhuska"],
        dress: ["Traditional Tribal Dress"],
        festival: ["Sarhul"],
        culture: ["Tribal Culture"],
        places: ["Hundru Falls", "Betla National Park"]
    },

    "Karnataka": {
        dance: ["Yakshagana"],
        arts: ["Mysore Painting"],
        food: ["Bisi Bele Bath", "Mysore Pak"],
        dress: ["Mysore Silk Saree"],
        festival: ["Mysore Dasara"],
        culture: ["Kannada Culture"],
        places: ["Hampi", "Mysore Palace", "Coorg"]
    },

    "Kerala": {
        dance: ["Kathakali", "Mohiniyattam"],
        arts: ["Mural Painting"],
        food: ["Appam", "Sadya"],
        dress: ["Kasavu Saree"],
        festival: ["Onam"],
        culture: ["Malayali Culture"],
        places: ["Alleppey", "Munnar", "Padmanabhaswamy Temple"]
    },

    "Madhya Pradesh": {
        dance: ["Matki", "Rai"],
        arts: ["Gond Painting"],
        food: ["Poha", "Bhutte Ka Kees"],
        dress: ["Chanderi Saree"],
        festival: ["Khajuraho Dance Festival"],
        culture: ["Malwa Culture"],
        places: ["Khajuraho", "Sanchi Stupa"]
    },

    "Maharashtra": {
        dance: ["Lavani", "Tamasha"],
        arts: ["Warli Painting"],
        food: ["Vada Pav", "Puran Poli"],
        dress: ["Nauvari Saree"],
        festival: ["Ganesh Chaturthi"],
        culture: ["Marathi Culture"],
        places: ["Gateway of India", "Ajanta Caves", "Ellora Caves"]
    },

    "Manipur": {
        dance: ["Manipuri Dance"],
        arts: ["Manipuri Handicrafts"],
        food: ["Eromba"],
        dress: ["Innaphi"],
        festival: ["Yaoshang"],
        culture: ["Meitei Culture"],
        places: ["Loktak Lake"]
    },

    "Meghalaya": {
        dance: ["Shad Suk Mynsiem"],
        arts: ["Bamboo Crafts"],
        food: ["Jadoh"],
        dress: ["Jainsem"],
        festival: ["Wangala"],
        culture: ["Khasi Culture"],
        places: ["Living Root Bridges", "Cherrapunji"]
    },

    "Mizoram": {
        dance: ["Cheraw"],
        arts: ["Bamboo Crafts"],
        food: ["Bai"],
        dress: ["Puan"],
        festival: ["Chapchar Kut"],
        culture: ["Mizo Culture"],
        places: ["Aizawl", "Phawngpui"]
    },

    "Nagaland": {
        dance: ["Chang Lo"],
        arts: ["Naga Handicrafts"],
        food: ["Smoked Pork"],
        dress: ["Traditional Naga Dress"],
        festival: ["Hornbill Festival"],
        culture: ["Naga Culture"],
        places: ["Kohima", "Dzukou Valley"]
    },

    "Odisha": {
        dance: ["Odissi"],
        arts: ["Pattachitra"],
        food: ["Dalma", "Pakhala Bhata"],
        dress: ["Sambalpuri Saree"],
        festival: ["Rath Yatra"],
        culture: ["Odia Culture"],
        places: ["Konark Sun Temple", "Jagannath Temple"]
    },

    "Punjab": {
        dance: ["Bhangra", "Giddha"],
        arts: ["Phulkari"],
        food: ["Sarson da Saag", "Makki di Roti"],
        dress: ["Punjabi Suit"],
        festival: ["Baisakhi"],
        culture: ["Punjabi Culture"],
        places: ["Golden Temple", "Jallianwala Bagh"]
    },

    "Rajasthan": {
        dance: ["Ghoomar", "Kalbelia"],
        arts: ["Phad Painting"],
        food: ["Dal Baati Churma"],
        dress: ["Ghagra Choli"],
        festival: ["Gangaur"],
        culture: ["Rajasthani Culture"],
        places: ["Hawa Mahal", "Amber Fort", "Jaisalmer Fort"]
    },

    "Sikkim": {
        dance: ["Singhi Chham"],
        arts: ["Thangka Painting"],
        food: ["Momos", "Thukpa"],
        dress: ["Bakhu"],
        festival: ["Losar"],
        culture: ["Sikkimese Culture"],
        places: ["Tsomgo Lake", "Rumtek Monastery"]
    },

    "Tamil Nadu": {
        dance: ["Bharatanatyam"],
        arts: ["Tanjore Painting"],
        food: ["Pongal", "Idli"],
        dress: ["Kanchipuram Saree"],
        festival: ["Pongal"],
        culture: ["Tamil Culture"],
        places: ["Meenakshi Temple", "Mahabalipuram"]
    },

    "Telangana": {
        dance: ["Perini Shivatandavam"],
        arts: ["Cheriyal Paintings"],
        food: ["Hyderabadi Biryani", "Sakinalu"],
        dress: ["Pochampally Saree"],
        festival: ["Bathukamma"],
        culture: ["Telangana Culture"],
        places: ["Charminar", "Golconda Fort"]
    },

    "Tripura": {
        dance: ["Hojagiri"],
        arts: ["Bamboo Crafts"],
        food: ["Mui Borok"],
        dress: ["Rignai"],
        festival: ["Kharchi Puja"],
        culture: ["Tripuri Culture"],
        places: ["Ujjayanta Palace", "Neermahal"]
    },

    "Uttar Pradesh": {
        dance: ["Kathak"],
        arts: ["Chikankari"],
        food: ["Awadhi Biryani", "Petha"],
        dress: ["Chikankari Kurta"],
        festival: ["Holi", "Diwali"],
        culture: ["Awadhi Culture"],
        places: ["Taj Mahal", "Varanasi", "Fatehpur Sikri"]
    },

    "Uttarakhand": {
        dance: ["Chholiya"],
        arts: ["Aipan Art"],
        food: ["Kafuli", "Aloo Ke Gutke"],
        dress: ["Ghagra Choli"],
        festival: ["Nanda Devi Raj Jat"],
        culture: ["Garhwali Culture"],
        places: ["Kedarnath", "Badrinath", "Rishikesh"]
    },

    "West Bengal": {
        dance: ["Chhau", "Gambhira"],
        arts: ["Kalighat Painting"],
        food: ["Rasgulla", "Macher Jhol"],
        dress: ["Tant Saree"],
        festival: ["Durga Puja"],
        culture: ["Bengali Culture"],
        places: ["Victoria Memorial", "Sundarbans"]
    }
};
// ============================
//  ============================
// IMAGE UPLOAD
// ============================




// ============================
// ANALYZE BUTTON
// ============================

/*
   Keyword/alias list used to identify which of the 12 demo
   monuments an uploaded photo belongs to. Since this is a
   static front-end with no image-recognition backend, the
   match is made against the uploaded file's name. Renaming a
   photo to include the monument's name (e.g. "charminar.jpg"
   or "golconda-fort-2.png") lets the analyzer find it.
*/
const monumentKeywords = {

    charminar: ["charminar", "char minar"],
    dholavira: ["dholavira"],
    ramappa: ["ramappa", "rudreswara", "rudreshwara"],
    golconda: ["golconda"],
    hampi: ["hampi", "vijayanagara", "vitthala", "virupaksha"],
    konark: ["konark", "sun temple"],
    nalanda: ["nalanda"],
    ajanta: ["ajanta"],
    raniKiVav: ["rani ki vav", "ranikivav", "rani-ki-vav", "stepwell"],
    lepakshi: ["lepakshi", "veerabhadra"],
    chausathYogini: ["chausath yogini", "chausathyogini", "64 yogini", "yogini temple"],
    gingeeFort: ["gingee", "senji"]

};

/*
   Looks through monumentKeywords for the first monument whose
   alias appears inside the given text (case-insensitive).
   Returns the monument id, or null if nothing matches.
*/
function matchMonumentFromText(text) {

    if (!text) {
        return null;
    }

    const normalized =
        text.toLowerCase().replace(/[_\-]+/g, " ");

    for (const monumentId in monumentKeywords) {

        const aliases = monumentKeywords[monumentId];

        for (let i = 0; i < aliases.length; i++) {

            if (normalized.indexOf(aliases[i]) !== -1) {
                return monumentId;
            }

        }

    }

    return null;

}

function analyzeImage() {

    const file =
        imageInput.files[0];


    if (!file) {

        alert(
            "Please upload a monument image first."
        );

        return;

    }


    const statusEl =
        document.getElementById("analysisStatus");

    if (statusEl) {
        statusEl.innerText = "🔍 Analyzing image...";
    }


    /*
       Simulate the AI "thinking" for a moment, then try to
       identify the monument from the uploaded file's name.
    */

    setTimeout(function () {

        const matchedId =
            matchMonumentFromText(file.name);

        if (!matchedId) {

            if (statusEl) {
                statusEl.innerText =
                    "🤔 Couldn't confidently identify this monument. " +
                    "Try a file named after the monument (e.g. \"charminar.jpg\"), " +
                    "or pick it from the Demo section below.";
            }

            return;

        }

        const monument =
            monuments[matchedId];

        if (statusEl) {
            statusEl.innerText =
                "✅ Identified: " + monument.name;
        }

        showMonument(matchedId);

    }, 800);

}
// ======================================
// KATHALENS MONUMENT DATABASE
// ======================================

const monuments = {

    charminar: {

        name: "Charminar",

        location: "Hyderabad, Telangana",

        period: "1591 CE",

        dynasty: "Qutb Shahi Dynasty",

        architecture: "Indo-Islamic Architecture",

        history:
            "Charminar is one of the most famous historical monuments of Hyderabad, Telangana, and was built in 1591 by Sultan Muhammad Quli Qutb Shah, the founder of Hyderabad. The monument was constructed at the heart of the historic city and became an important symbol of Hyderabad and the Qutb Shahi dynasty. Its name, Charminar, means “Four Minarets,” referring to its four tall minarets rising from the structure's corners. Built primarily using granite and limestone with decorative stucco work, the monument reflects a blend of Indo-Islamic architectural traditions. Over the centuries, Charminar has remained an important cultural and architectural landmark, surrounded by the historic markets of the Old City, and continues to represent the rich heritage and history of Hyderabad.",
        
        facts: [

            "The name Charminar means Four Minarets.",
            "It has four grand arches.",
            "It is located in the heart of Hyderabad."
        ]
                
    },

    dholavira: {

        name: "Dholavira",

        location: "Kutch, Gujarat",

        period: "c. 3000–1500 BCE",

        dynasty: "Indus Valley Civilization",

        architecture: "Harappan Architecture",

        history:
            "Dholavira is one of the most important archaeological sites of the Indus Valley Civilization. Located on Khadir Bet in the Rann of Kutch in Gujarat, the ancient city is famous for its advanced town planning, large reservoirs, drainage systems and sophisticated water management. The settlement shows the remarkable engineering and urban planning skills of the Harappan people.",

        facts: [
            "It is an important Indus Valley Civilization site.",
            "It is famous for advanced water management.",
            "It is located in the Rann of Kutch, Gujarat."
        ]
    },

    


    ramappa: {

        name: "Ramappa Temple",

        location: "Palampet, Telangana",

        period: "13th Century",

        dynasty: "Kakatiya Dynasty",

        architecture: "Kakatiya Architecture",

        history:
            "Ramappa Temple, also known as the Rudreswara Temple, is a remarkable 13th-century temple located in Palampet, Telangana. It was built during the reign of the Kakatiya dynasty under the patronage of General Recharla Rudra during the time of King Ganapati Deva. The temple is dedicated to Lord Shiva and is popularly known as Ramappa Temple after its chief sculptor, Ramappa. The temple is famous for its detailed stone carvings, elegant sculptures, decorated pillars, and distinctive architectural design that reflects the artistic excellence of the Kakatiya period. Its construction demonstrates the advanced craftsmanship and engineering skills of the time. In 2021, the Ramappa Temple was inscribed as a UNESCO World Heritage Site, recognizing its outstanding cultural and architectural significance.",


        facts: [
            "The temple is also known as Rudreshwara Temple.",
            "It is famous for its detailed sculptures.",
            "It is a UNESCO World Heritage Site."
        ]

    },


    golconda: {

        name: "Golconda Fort",

        location: "Hyderabad, Telangana",

        period: "16th Century",

        dynasty: "Qutb Shahi Dynasty",

        architecture: "Fort Architecture",

        history:
            "Golconda Fort is a magnificent historic fortress located in Hyderabad, Telangana, and is one of the most important landmarks of the Deccan region. The fort was originally built as a mud fort in the 12th century by the Kakatiya dynasty and was later expanded and strengthened by the Qutb Shahi rulers, who made Golconda their capital. The fort became famous for its impressive architecture, massive stone walls, grand gateways, palaces, mosques, and unique acoustic system. Golconda was also closely associated with the region’s historic diamond trade, and the area became renowned for diamonds such as the Koh-i-Noor. Today, the fort stands as an important symbol of Hyderabad’s rich history, architecture, and cultural heritage.",


        facts: [
            "The fort is famous for its acoustic system.",
            "It has massive defensive walls.",
            "The fort has a long history of several ruling dynasties."
        ]

    },


    hampi: {

        name: "Hampi",

        location: "Karnataka",

        period: "14th–16th Century",

        dynasty: "Vijayanagara Empire",

        architecture: "Dravidian Architecture",

        history:
            "Hampi is a magnificent historical and archaeological site located in Karnataka and was once the capital of the powerful Vijayanagara Empire. The city flourished particularly during the 14th to 16th centuries and became an important center of trade, culture, religion, art, and architecture. Hampi is famous for its impressive temples, royal complexes, stone chariots, massive gateways, and beautifully carved pillars. The Virupaksha Temple, Vittala Temple, and Stone Chariot are among its most famous attractions. The ruins spread across a dramatic landscape of rocky hills and the Tungabhadra River, reflecting the grandeur of the Vijayanagara period. Hampi was recognized as a UNESCO World Heritage Site in 1986 and today stands as an important symbol of India's rich historical and architectural heritage.",


        facts: [
            "Hampi was the capital of the Vijayanagara Empire.",
            "It contains numerous temples and monuments.",
            "It is a UNESCO World Heritage Site."
        ]

    },


    konark: {

        name: "Konark Sun Temple",

        location: "Odisha",

        period: "13th Century",

        dynasty: "Eastern Ganga Dynasty",

        architecture: "Kalinga Architecture",

        history:
            "Konark Sun Temple is a magnificent 13th-century temple located in Konark, Odisha, and is dedicated to Surya, the Sun God. It was built around 1250 CE during the reign of King Narasimhadeva I of the Eastern Ganga dynasty. The temple was designed in the form of a gigantic stone chariot with 24 elaborately carved wheels and seven horses, symbolizing the chariot of the Sun God. Its walls and pillars feature detailed carvings depicting deities, musicians, dancers, animals, and scenes from everyday life. Although much of the original temple is now in ruins, its surviving structures demonstrate the remarkable architectural and artistic skills of medieval India. Konark Sun Temple was declared a UNESCO World Heritage Site in 1984 and remains one of India's most celebrated monuments.",

        facts: [
            "The temple is designed like a giant chariot.",
            "It contains intricately carved stone wheels.",
            "It is a UNESCO World Heritage Site."
        ]

    },
    nalanda: {

        name: "Nalanda Mahavihara",

        location: "Nalanda, Bihar",

        period: "5th century CE onwards",

        dynasty: "Gupta and later dynasties",

        architecture: "Buddhist Monastic Architecture",

        history:
            "Nalanda Mahavihara was one of the ancient world's great centres of learning and an important centre of Buddhist education. Located in present-day Bihar, it attracted students and scholars from different parts of India and Asia. The remains include monasteries, temples and other structures that reflect the importance of Nalanda as a centre of knowledge.",

        facts: [
            "It was a major ancient centre of learning.",
            "It was an important centre of Buddhist studies.",
            "Students came from different parts of Asia."
        ]
    },
        ajanta: {

        name: "Ajanta Caves",

        location: "Maharashtra",

        period: "2nd century BCE – 6th century CE",

        dynasty: "Satavahana and Vakataka periods",

        architecture: "Rock-cut Buddhist Architecture",

        history:
            "The Ajanta Caves are a group of ancient Buddhist rock-cut caves in Maharashtra. They are famous for their beautiful paintings, sculptures and impressive rock-cut architecture. The paintings include scenes from the life of Buddha and stories from the Jataka tales, making Ajanta an important part of India's artistic and religious heritage.",

        facts: [
            "The caves contain ancient Buddhist paintings.",
            "They are carved into a horseshoe-shaped rock gorge.",
            "They are famous for Jataka paintings and sculptures."
        ]
    },
        raniKiVav: {

        name: "Rani ki Vav",

        location: "Patan, Gujarat",

        period: "11th century CE",

        dynasty: "Solanki Dynasty",

        architecture: "Maru-Gurjara Architecture",

        history:
            "Rani ki Vav is a magnificent stepwell located in Patan, Gujarat. It was built during the Solanki period and is famous for its elaborate underground structure decorated with hundreds of sculptures. The stepwell demonstrates the remarkable architectural and artistic skills of medieval India.",

        facts: [
            "It is a famous stepwell in Gujarat.",
            "It contains numerous detailed sculptures.",
            "It was built during the Solanki period."
        ]
    },
        lepakshi: {

        name: "Lepakshi",

        location: "Sri Sathya Sai District, Andhra Pradesh",

        period: "16th century CE",

        dynasty: "Vijayanagara Empire",

        architecture: "Vijayanagara Architecture",

        history:
            "Lepakshi is a historic temple site in Andhra Pradesh famous for the Veerabhadra Temple. The temple is known for its magnificent Vijayanagara architecture, detailed sculptures, paintings and the famous hanging pillar. Lepakshi represents the artistic and architectural achievements of the Vijayanagara period.",

        facts: [
            "It is famous for the Veerabhadra Temple.",
            "It has a famous hanging pillar.",
            "It is an important example of Vijayanagara architecture."
        ]
    },
        chausathYogini: {

        name: "Chausath Yogini Temple",

        location: "Morena, Madhya Pradesh",

        period: "9th century CE",

        dynasty: "Kalachuri period",

        architecture: "Circular Yogini Temple Architecture",

        history:
            "The Chausath Yogini Temple at Morena in Madhya Pradesh is an ancient circular temple dedicated to the sixty-four Yoginis. Its unusual circular design and elevated location make it a remarkable example of ancient Indian temple architecture.",

        facts: [
            "It is dedicated to the 64 Yoginis.",
            "The temple has a distinctive circular design.",
            "It is located near Morena in Madhya Pradesh."
        ]
    },
        gingeeFort: {

        name: "Gingee Fort",

        location: "Gingee, Tamil Nadu",

        period: "16th century CE",

        dynasty: "Nayakas of Gingee",

        architecture: "Fortification Architecture",

        history:
            "Gingee Fort is a historic hill fort complex in Tamil Nadu. It consists of fortifications spread across several hills and includes temples, granaries, gateways and other structures. Its strong defensive design and difficult terrain made it an important strategic fort in South Indian history.",

        facts: [
            "It is one of the important historic forts of Tamil Nadu.",
            "The fortifications extend across three hills.",
            "It is known for its strong defensive architecture."
        ]
    }

};
// ======================================
// SHOW MONUMENT
// ======================================

function showMonument(monumentId) {
    currentMonument = monumentId;

    const monument = monuments[monumentId];

    if (!monument) {

        return;

    }


    const facts = monument.facts
        .map(function(fact) {

            return `<li>⭐ ${fact}</li>`;

        })
        .join("");


    document.getElementById(
        "monumentContent"
    ).innerHTML = `

        <h1>🛕 ${monument.name}</h1>

        <p>
            📍 <strong>Location:</strong>
            ${monument.location}
        </p>

        <p>
            📅 <strong>Period:</strong>
            ${monument.period}
        </p>

        <p>
            👑 <strong>Dynasty:</strong>
            ${monument.dynasty}
        </p>

        <p>
            🏛️ <strong>Architecture:</strong>
            ${monument.architecture}
        </p>
        <div class="architecture-card">

    <h2>🏛️ Architectural Information</h2>

    <p>
        The monument showcases
        ${monument.architecture}.
    </p>

</div>


        <hr>


        <h2>📜 History</h2>

        <p>
            ${monument.history}
        </p>


        <h2>💡 Interesting Facts</h2>

        <ul>
            ${facts}
        </ul>


        <button
            onclick="openPast('${monumentId}')"
        >
            🔥 See the Past
        </button>


        <button
            onclick="openQuiz('${monumentId}')"
        >
            🎮 Take Quiz
        </button>

    `;


    document
        .getElementById("monumentResult")
        .scrollIntoView({
            behavior: "smooth"
        });

}
// ======================================
// LANGUAGE DATA
// ======================================

const languageData = {

    charminar: {

        english: {
            title: "History",
            text: "The Charminar was built in 1591 by Muhammad Quli Qutb Shah. It became one of Hyderabad's most famous historical landmarks."
        },

        telugu: {
            title: "చరిత్ర",
            text: "చార్మినార్ తెలంగాణలోని హైదరాబాద్ నగరానికి ప్రసిద్ధి చెందిన చారిత్రక కట్టడం. దీనిని 1591లో హైదరాబాద్ నగర స్థాపకుడైన సుల్తాన్ మహమ్మద్ కులీ కుతుబ్ షా నిర్మించారు. చారిత్రక హైదరాబాద్ నగరానికి కేంద్రంగా ఉన్న ఈ కట్టడం కుతుబ్‌షాహీ వంశానికి మరియు నగర చరిత్రకు ముఖ్యమైన ప్రతీకగా నిలిచింది. “చార్మినార్” అనే పేరు “నాలుగు మినార్లు” అనే అర్థాన్ని కలిగి ఉంది. ఈ నిర్మాణంలోని నాలుగు మూలలపై ఎత్తైన మినార్లు ఉండటం వల్ల దీనికి ఈ పేరు వచ్చింది. గ్రానైట్, సున్నపురాయి మరియు అలంకారమైన స్టక్కో పనితో నిర్మించబడిన చార్మినార్‌లో ఇండో-ఇస్లామిక్ వాస్తుశిల్ప శైలుల అందమైన సమ్మేళనం కనిపిస్తుంది. శతాబ్దాలుగా చార్మినార్ హైదరాబాద్ పాత నగరంలోని చారిత్రక మార్కెట్ల మధ్య ఒక ముఖ్యమైన సాంస్కృతిక మరియు వాస్తుశిల్ప గుర్తుగా కొనసాగుతూ, హైదరాబాద్ గొప్ప వారసత్వాన్ని ప్రతిబింబిస్తోంది."

        },

        hindi: {
            title: "इतिहास",
            text: "चारमीनार तेलंगाना के हैदराबाद शहर का एक प्रसिद्ध ऐतिहासिक स्मारक है। इसका निर्माण 1591 में हैदराबाद के संस्थापक सुल्तान मुहम्मद कुली कुतुब शाह ने करवाया था। ऐतिहासिक हैदराबाद के केंद्र में स्थित यह स्मारक कुतुब शाही वंश और शहर के इतिहास का एक महत्वपूर्ण प्रतीक बन गया। “चारमीनार” नाम का अर्थ “चार मीनारें” है, क्योंकि इसकी चारों दिशाओं में ऊँची मीनारें बनी हुई हैं। मुख्य रूप से ग्रेनाइट, चूना-पत्थर और सजावटी स्टुको कार्य से निर्मित चारमीनार में इंडो-इस्लामिक वास्तुकला की सुंदर विशेषताएँ दिखाई देती हैं। सदियों से चारमीनार पुराने शहर के ऐतिहासिक बाजारों के बीच हैदराबाद का एक महत्वपूर्ण सांस्कृतिक और वास्तुकला संबंधी प्रतीक बना हुआ है और आज भी शहर की समृद्ध विरासत और इतिहास को दर्शाता है।"
        }

    },

    dholavira: {

        english: {
            title: "History",
            text: "Dholavira is an ancient city of the Indus Valley Civilization located in Gujarat. It is famous for its advanced town planning, reservoirs, drainage systems and water management. The site shows the remarkable engineering and urban planning skills of the Harappan civilization."
        },

        telugu: {
            title: "చరిత్ర",
            text: "ధోలావీర గుజరాత్‌లోని కచ్ ప్రాంతంలో ఉన్న సింధు లోయ నాగరికతకు చెందిన ప్రాచీన నగరం. ఇది అధునాతన నగర నిర్మాణం, నీటి నిల్వలు, డ్రైనేజీ వ్యవస్థలు మరియు నీటి నిర్వహణకు ప్రసిద్ధి చెందింది. హరప్పా నాగరికతకు చెందిన ప్రజల అద్భుతమైన ఇంజినీరింగ్ మరియు నగర ప్రణాళిక నైపుణ్యాలను ఈ ప్రదేశం చూపిస్తుంది."
        },

        hindi: {
            title: "इतिहास",
            text: "धोलावीरा गुजरात के कच्छ क्षेत्र में स्थित सिंधु घाटी सभ्यता का एक प्राचीन नगर है। यह अपनी उन्नत नगर योजना, जलाशयों, जल निकासी और जल प्रबंधन प्रणालियों के लिए प्रसिद्ध है। यह स्थल हड़प्पा सभ्यता की उत्कृष्ट इंजीनियरिंग और नगर नियोजन कौशल को दर्शाता है।"
        }

    },


    ramappa: {

        english: {
            title: "History",
            text: "Ramappa Temple was built during the Kakatiya period in the 13th century. It is famous for its detailed sculptures and distinctive architecture."
        },

        telugu: {
            title: "చరిత్ర",
            text: "రామప్ప దేవాలయం, రుద్రేశ్వర దేవాలయం అని కూడా పిలువబడుతుంది. ఇది తెలంగాణలోని పాలంపేటలో ఉన్న 13వ శతాబ్దానికి చెందిన ప్రసిద్ధ చారిత్రక దేవాలయం. కాకతీయుల కాలంలో గణపతిదేవ మహారాజు పాలనలో, ఆయన సేనాధిపతి రేచర్ల రుద్రుడు ఆధ్వర్యంలో ఈ దేవాలయం నిర్మించబడింది. ఈ దేవాలయం శివునికి అంకితం చేయబడింది. దీనిని ప్రధాన శిల్పి రామప్ప పేరుతో రామప్ప దేవాలయం అని పిలుస్తారు. దేవాలయంలోని అద్భుతమైన రాతి శిల్పాలు, అలంకరించిన స్తంభాలు, సూక్ష్మమైన చెక్కిన ఆకృతులు మరియు ప్రత్యేకమైన వాస్తుశిల్పం కాకతీయుల కళా నైపుణ్యాన్ని ప్రతిబింబిస్తాయి. ఆ కాలంలోని అత్యున్నత నిర్మాణ మరియు ఇంజినీరింగ్ నైపుణ్యాలకు ఈ దేవాలయం ఒక గొప్ప ఉదాహరణ. 2021లో రామప్ప దేవాలయాన్ని UNESCO ప్రపంచ వారసత్వ ప్రదేశంగా గుర్తించింది, దీని చారిత్రక మరియు వాస్తుశిల్ప ప్రాముఖ్యతను ప్రపంచ స్థాయిలో గుర్తించింది.",
        },

        hindi: {
            title: "इतिहास",
            text: "रामप्पा मंदिर, जिसे रुद्रेश्वर मंदिर के नाम से भी जाना जाता है, तेलंगाना के पालमपेट में स्थित 13वीं शताब्दी का एक प्रसिद्ध ऐतिहासिक मंदिर है। इसका निर्माण काकतीय राजवंश के शासनकाल में राजा गणपतिदेव के समय उनके सेनापति रेचार्ला रुद्र के संरक्षण में किया गया था। यह मंदिर भगवान शिव को समर्पित है और इसके मुख्य शिल्पकार रामप्पा के नाम पर इसे रामप्पा मंदिर कहा जाता है। मंदिर अपनी सुंदर पत्थर की नक्काशी, उत्कृष्ट मूर्तियों, सजावटी स्तंभों और विशिष्ट वास्तुकला के लिए प्रसिद्ध है, जो काकतीय काल की कला और शिल्प कौशल को दर्शाती है। इसका निर्माण उस समय की उन्नत इंजीनियरिंग और वास्तुकला का प्रमाण है। 2021 में रामप्पा मंदिर को UNESCO विश्व धरोहर स्थल के रूप में मान्यता दी गई, जिससे इसके ऐतिहासिक और वास्तुशिल्प महत्व को वैश्विक पहचान मिली।"

        }

    },


    golconda: {

        english: {
            title: "History",
            text: "Golconda Fort is a historic fort complex near Hyderabad. It is famous for its massive walls and remarkable acoustic system."
        },

        telugu: {
            title: "చరిత్ర",
            text: "గోల్కొండ కోట తెలంగాణలోని హైదరాబాద్‌లో ఉన్న అద్భుతమైన చారిత్రక కోట. ఇది దక్కన్ ప్రాంతంలోని ముఖ్యమైన చారిత్రక కట్టడాల్లో ఒకటి. ఈ కోటను మొదట 12వ శతాబ్దంలో కాకతీయులు మట్టి కోటగా నిర్మించినట్లు భావిస్తారు. తరువాత కుతుబ్‌షాహీ పాలకులు దీనిని విస్తరించి, బలమైన రాతి గోడలు, భారీ ద్వారాలు, రాజభవనాలు, మసీదులు మరియు ఇతర నిర్మాణాలతో ఒక శక్తివంతమైన కోటగా అభివృద్ధి చేశారు. గోల్కొండ తన అద్భుతమైన వాస్తుశిల్పంతో పాటు ప్రత్యేకమైన ధ్వని ప్రసరణ వ్యవస్థకు కూడా ప్రసిద్ధి చెందింది. ఈ ప్రాంతం చారిత్రక వజ్రాల వ్యాపారానికి కూడా ప్రసిద్ధి చెందింది మరియు కోహినూర్ వంటి ప్రసిద్ధ వజ్రాలతో గోల్కొండ ప్రాంతానికి చారిత్రక సంబంధం ఉంది. నేడు గోల్కొండ కోట హైదరాబాద్ గొప్ప చరిత్ర, వాస్తుశిల్పం మరియు సాంస్కృతిక వారసత్వానికి ప్రతీకగా నిలుస్తోంది."

        },

        hindi: {
            title: "इतिहास",
            text: "गोलकोंडा किला तेलंगाना के हैदराबाद में स्थित एक शानदार ऐतिहासिक किला है और दक्कन क्षेत्र के प्रमुख ऐतिहासिक स्थलों में से एक है। माना जाता है कि इसे मूल रूप से 12वीं शताब्दी में काकतीयों ने मिट्टी के किले के रूप में बनाया था। बाद में कुतुब शाही शासकों ने इसका विस्तार और सुदृढ़ीकरण किया तथा गोलकोंडा को अपनी राजधानी बनाया। किला अपनी विशाल पत्थर की दीवारों, भव्य प्रवेश द्वारों, महलों, मस्जिदों और अद्भुत ध्वनि प्रणाली के लिए प्रसिद्ध है। गोलकोंडा क्षेत्र ऐतिहासिक रूप से हीरों के व्यापार के लिए भी प्रसिद्ध रहा है और कोहिनूर जैसे प्रसिद्ध हीरे का संबंध इस क्षेत्र के इतिहास से जोड़ा जाता है। आज गोलकोंडा किला हैदराबाद की समृद्ध इतिहास, वास्तुकला और सांस्कृतिक विरासत का एक महत्वपूर्ण प्रतीक है।"
        }

    },


    hampi: {

        english: {
            title: "History",
            text: "Hampi was the capital of the Vijayanagara Empire and became an important centre of culture, trade and architecture."
        },

        telugu: {
            title: "చరిత్ర",
            text: "హంపి కర్ణాటకలో ఉన్న అద్భుతమైన చారిత్రక మరియు పురావస్తు ప్రదేశం. ఇది ఒకప్పుడు శక్తివంతమైన విజయనగర సామ్రాజ్యానికి రాజధానిగా ఉండేది. 14వ నుండి 16వ శతాబ్దాల మధ్య హంపి విశేషంగా అభివృద్ధి చెంది, వాణిజ్యం, సంస్కృతి, మతం, కళలు మరియు వాస్తుశిల్పానికి ముఖ్యమైన కేంద్రంగా నిలిచింది. అద్భుతమైన దేవాలయాలు, రాజభవన సముదాయాలు, రాతి రథాలు, భారీ ద్వారాలు మరియు అందంగా చెక్కిన స్తంభాలకు హంపి ప్రసిద్ధి చెందింది. విరూపాక్ష దేవాలయం, విఠల దేవాలయం మరియు రాతి రథం హంపిలోని ప్రసిద్ధ ఆకర్షణల్లో కొన్ని. తుంగభద్ర నది మరియు రాతి కొండల మధ్య విస్తరించి ఉన్న హంపి శిథిలాలు విజయనగర సామ్రాజ్య వైభవాన్ని ప్రతిబింబిస్తాయి. 1986లో హంపిని UNESCO ప్రపంచ వారసత్వ ప్రదేశంగా గుర్తించింది. నేడు ఇది భారతదేశ గొప్ప చరిత్ర మరియు వాస్తుశిల్ప వారసత్వానికి ముఖ్యమైన ప్రతీకగా నిలుస్తోంది."
        },

        hindi: {
            title: "इतिहास",
            text: "हम्पी कर्नाटक में स्थित एक शानदार ऐतिहासिक और पुरातात्विक स्थल है। यह कभी शक्तिशाली विजयनगर साम्राज्य की राजधानी था। 14वीं से 16वीं शताब्दी के बीच हम्पी का विशेष रूप से विकास हुआ और यह व्यापार, संस्कृति, धर्म, कला और वास्तुकला का एक महत्वपूर्ण केंद्र बन गया। हम्पी अपने भव्य मंदिरों, राजकीय परिसरों, पत्थर के रथों, विशाल प्रवेश द्वारों और सुंदर नक्काशीदार स्तंभों के लिए प्रसिद्ध है। विरुपाक्ष मंदिर, विट्ठल मंदिर और पत्थर का रथ यहाँ के प्रमुख आकर्षणों में शामिल हैं। तुंगभद्रा नदी और चट्टानी पहाड़ियों के बीच फैले हम्पी के खंडहर विजयनगर साम्राज्य की भव्यता को दर्शाते हैं। 1986 में हम्पी को UNESCO विश्व धरोहर स्थल के रूप में मान्यता दी गई। आज यह भारत की समृद्ध ऐतिहासिक और वास्तुशिल्प विरासत का एक महत्वपूर्ण प्रतीक है।"
        }

    },


    konark: {

        english: {
            title: "History",
            text: "The Konark Sun Temple is a famous temple dedicated to the Sun God. It is known for its magnificent stone carvings and chariot-shaped design."
        },

        telugu: {
            title: "చరిత్ర",
            text: "కోణార్క్ సూర్య దేవాలయం సూర్య భగవానుడికి అంకితం చేయబడిన ప్రసిద్ధ దేవాలయం. ఇది అద్భుతమైన రాతి శిల్పాలు మరియు రథ ఆకారపు నిర్మాణానికి ప్రసిద్ధి చెందింది."
        },

        hindi: {
            title: "इतिहास",
            text: "कोणार्क सूर्य मंदिर सूर्य देव को समर्पित एक प्रसिद्ध मंदिर है। यह अपनी सुंदर पत्थर की नक्काशी और रथ के आकार की संरचना के लिए प्रसिद्ध है।"
        }

    },
        nalanda: {

        english: {
            title: "History",
            text: "Nalanda Mahavihara in Bihar was one of the ancient world's great centres of learning and Buddhist education. It attracted students and scholars from different parts of India and Asia. Its remains include monasteries, temples and other structures that reflect its importance as a centre of knowledge."
        },

        telugu: {
            title: "చరిత్ర",
            text: "బీహార్‌లోని నాలంద మహావిహారం ప్రాచీన ప్రపంచంలోని గొప్ప విద్యా మరియు బౌద్ధ అధ్యయన కేంద్రాలలో ఒకటి. భారతదేశం మరియు ఆసియాలోని వివిధ ప్రాంతాల నుండి విద్యార్థులు మరియు పండితులు ఇక్కడికి వచ్చేవారు. ఇక్కడి మఠాలు, ఆలయాలు మరియు ఇతర నిర్మాణాలు నాలందను ఒక ముఖ్యమైన జ్ఞాన కేంద్రంగా చూపిస్తాయి."
        },

        hindi: {
            title: "इतिहास",
            text: "बिहार का नालंदा महाविहार प्राचीन विश्व के महान शिक्षा और बौद्ध अध्ययन केंद्रों में से एक था। यहां भारत और एशिया के विभिन्न क्षेत्रों से विद्यार्थी और विद्वान आते थे। यहां के मठ, मंदिर और अन्य अवशेष नालंदा के महत्वपूर्ण ज्ञान केंद्र होने को दर्शाते हैं।"
        }

    },
        ajanta: {

        english: {
            title: "History",
            text: "The Ajanta Caves in Maharashtra are ancient Buddhist rock-cut caves famous for their paintings, sculptures and architecture. The paintings include stories from the life of Buddha and Jataka tales. They are an important example of India's ancient artistic and religious heritage."
        },

        telugu: {
            title: "చరిత్ర",
            text: "మహారాష్ట్రలోని అజంతా గుహలు ప్రాచీన బౌద్ధ శిలా గుహలు. ఇవి అందమైన చిత్రాలు, శిల్పాలు మరియు రాతితో చెక్కిన నిర్మాణాలకు ప్రసిద్ధి చెందాయి. ఇక్కడ బుద్ధుని జీవితానికి సంబంధించిన కథలు మరియు జాతక కథలను చూపించే చిత్రాలు ఉన్నాయి. ఇవి భారతదేశ ప్రాచీన కళా మరియు మతపరమైన వారసత్వానికి ముఖ్యమైన ఉదాహరణలు."
        },

        hindi: {
            title: "इतिहास",
            text: "महाराष्ट्र की अजंता गुफाएँ प्राचीन बौद्ध शैल गुफाएँ हैं जो अपनी सुंदर चित्रकारी, मूर्तियों और वास्तुकला के लिए प्रसिद्ध हैं। यहां बुद्ध के जीवन और जातक कथाओं से संबंधित चित्र देखने को मिलते हैं। ये भारत की प्राचीन कला और धार्मिक विरासत का महत्वपूर्ण उदाहरण हैं।"
        }

    },
        raniKiVav: {

        english: {
            title: "History",
            text: "Rani ki Vav is a magnificent stepwell in Patan, Gujarat. Built during the Solanki period, it is decorated with hundreds of detailed sculptures. The monument demonstrates the exceptional architectural and artistic skills of medieval India."
        },

        telugu: {
            title: "చరిత్ర",
            text: "గుజరాత్‌లోని పటాన్‌లో ఉన్న రాణి కి వావ్ ఒక అద్భుతమైన మెట్ల బావి. ఇది సోలంకి కాలంలో నిర్మించబడింది మరియు వందలాది అందమైన శిల్పాలతో అలంకరించబడింది. ఈ కట్టడం మధ్యయుగ భారతదేశంలోని అద్భుతమైన నిర్మాణ మరియు కళా నైపుణ్యాలను ప్రతిబింబిస్తుంది."
        },

        hindi: {
            title: "इतिहास",
            text: "गुजरात के पाटन में स्थित रानी की वाव एक शानदार बावड़ी है। इसका निर्माण सोलंकी काल में हुआ था और यह सैकड़ों सुंदर मूर्तियों से सजाई गई है। यह स्मारक मध्यकालीन भारत की उत्कृष्ट वास्तुकला और कलात्मक कौशल को दर्शाता है।"
        }

    },
        lepakshi: {

        english: {
            title: "History",
            text: "Lepakshi in Andhra Pradesh is famous for the Veerabhadra Temple and Vijayanagara architecture. The temple contains beautiful sculptures, paintings and the famous hanging pillar. Lepakshi represents the artistic and architectural achievements of the Vijayanagara Empire."
        },

        telugu: {
            title: "చరిత్ర",
            text: "ఆంధ్రప్రదేశ్‌లోని లేపాక్షి వీరభద్ర ఆలయం మరియు విజయనగర నిర్మాణ శైలికి ప్రసిద్ధి చెందింది. ఈ ఆలయంలో అందమైన శిల్పాలు, చిత్రాలు మరియు ప్రసిద్ధ వేలాడే స్తంభం ఉన్నాయి. లేపాక్షి విజయనగర సామ్రాజ్యంలోని కళా మరియు నిర్మాణ నైపుణ్యాలను ప్రతిబింబిస్తుంది."
        },

        hindi: {
            title: "इतिहास",
            text: "आंध्र प्रदेश का लेपाक्षी वीरभद्र मंदिर और विजयनगर वास्तुकला के लिए प्रसिद्ध है। मंदिर में सुंदर मूर्तियाँ, चित्र और प्रसिद्ध लटकता हुआ स्तंभ है। लेपाक्षी विजयनगर साम्राज्य की कला और वास्तुकला की उपलब्धियों को दर्शाता है।"
        }

    },
        chausathYogini: {

        english: {
            title: "History",
            text: "The Chausath Yogini Temple at Morena in Madhya Pradesh is an ancient circular temple dedicated to the sixty-four Yoginis. Its unique circular design and elevated location make it an important example of ancient Indian temple architecture."
        },

        telugu: {
            title: "చరిత్ర",
            text: "మధ్యప్రదేశ్‌లోని మొరెనా వద్ద ఉన్న చౌసత్ యోగిని ఆలయం 64 మంది యోగినులకు అంకితం చేయబడిన ప్రాచీన వృత్తాకార ఆలయం. దీని ప్రత్యేకమైన వృత్తాకార నిర్మాణం మరియు ఎత్తైన ప్రదేశం ప్రాచీన భారతీయ ఆలయ నిర్మాణ కళకు ముఖ్యమైన ఉదాహరణగా నిలుస్తాయి."
        },

        hindi: {
            title: "इतिहास",
            text: "मध्य प्रदेश के मुरैना में स्थित चौंसठ योगिनी मंदिर 64 योगिनियों को समर्पित एक प्राचीन गोलाकार मंदिर है। इसकी अनोखी गोलाकार संरचना और ऊंचा स्थान इसे प्राचीन भारतीय मंदिर वास्तुकला का महत्वपूर्ण उदाहरण बनाते हैं।"
        }

    },
        gingeeFort: {

        english: {
            title: "History",
            text: "Gingee Fort is a historic hill fort complex in Tamil Nadu. Its fortifications extend across three hills and include temples, gateways, granaries and other structures. Its strong defensive design made it an important strategic fort in South Indian history."
        },

        telugu: {
            title: "చరిత్ర",
            text: "తమిళనాడులోని జింజీ కోట ఒక ప్రసిద్ధ చారిత్రక కొండ కోట. దీని రక్షణ నిర్మాణాలు మూడు కొండలపై విస్తరించి ఉన్నాయి. ఇందులో ఆలయాలు, ప్రవేశ ద్వారాలు, ధాన్యాగారాలు మరియు ఇతర నిర్మాణాలు ఉన్నాయి. బలమైన రక్షణ వ్యవస్థ కారణంగా ఇది దక్షిణ భారతదేశ చరిత్రలో ముఖ్యమైన వ్యూహాత్మక కోటగా నిలిచింది."
        },

        hindi: {
            title: "इतिहास",
            text: "तमिलनाडु का जिंजी किला एक ऐतिहासिक पहाड़ी किला परिसर है। इसकी किलेबंदी तीन पहाड़ियों पर फैली हुई है और इसमें मंदिर, प्रवेश द्वार, अन्न भंडार और अन्य संरचनाएँ शामिल हैं। इसकी मजबूत सुरक्षा व्यवस्था ने इसे दक्षिण भारतीय इतिहास में एक महत्वपूर्ण रणनीतिक किला बनाया।"
        }

    }

};
// ======================================
// CHANGE LANGUAGE
// ======================================

let currentMonument = null;


function changeLanguage(language) {
    narrationLanguage = language;

    if (!currentMonument) {

        alert(
            "Please select a monument first."
        );

        return;

    }


    const data =
        languageData[currentMonument][language];


    if (!data) {

        return;

    }


    document.getElementById(
        "languageHistoryTitle"
    ).innerText = data.title;


    document.getElementById(
        "languageHistoryText"
    ).innerText = data.text;

}
// ======================================
// SEE THE PAST
// ======================================


   
    const pastImages = {

    charminar: {
        current: "images/charminar.webp",
        past: "images/charminar-old.webp"
    },

    dholavira: {
        current: "images/dholavira.webp",
        past: "images/dholavira-old.webp"
    },

   

    ramappa: {
        current: "images/ramappa.webp",
        past: "images/ramappa-old.webp"
    },

    golconda: {
        current: "images/golconda.webp",
        past: "images/golconda-old.webp"
    },

    hampi: {
        current: "images/hampi.webp",
        past: "images/hampi-old.webp"
    },

    konark: {
        current: "images/konark.webp",
        past: "images/konark-old.webp"
    },
    

    nalanda: {
        current: "images/nalanda.webp",
        past: "images/nalanda-old.webp"
    },

    ajanta: {
        current: "images/ajanta.webp",
        past: "images/ajanta-old.webp"
    },

    raniKiVav: {
        current: "images/ranikivav.webp",
        past: "images/ranikivav-old.webp"
    },

    lepakshi: {
        current: "images/lepakshi.webp",
        past: "images/lepakshi-old.webp"
    },

    chausathYogini: {
        current: "images/chausathyogini.webp",
        past: "images/chausathyogini-old.webp"
    },

    gingeeFort: {
        current: "images/gingeefort.webp",
        past: "images/gingeefort-old.webp"
    }

};


function openPast(monumentId) {

    const currentImage =
        document.getElementById("currentImage");

    const pastImage =
        document.getElementById("pastImage");

    const images = pastImages[monumentId];

    if (!images) {
        alert("Images not found for this monument.");
        return;
    }

    currentImage.src = images.current;
    pastImage.src = images.past;

    document
        .getElementById("pastSection")
        .scrollIntoView({
            behavior: "smooth"
        });
}
// ======================================
// HERITAGE QUIZ
// ======================================

const quizQuestions = [

    {
        question:
            "Which dynasty is associated with Ramappa Temple?",

        options: [
            "Chola",
            "Kakatiya",
            "Maurya",
            "Gupta"
        ],

        answer: "Kakatiya"
    },


    {
        question:
            "Where is the Charminar located?",

        options: [
            "Hyderabad",
            "Delhi",
            "Mumbai",
            "Chennai"
        ],

        answer: "Hyderabad"
    },


    {
        question:
            "Hampi was the capital of which empire?",

        options: [
            "Mughal Empire",
            "Vijayanagara Empire",
            "Maurya Empire",
            "Chola Empire"
        ],

        answer: "Vijayanagara Empire"
    },


    {
        question:
            "The Konark Sun Temple is dedicated to which deity?",

        options: [
            "Shiva",
            "Vishnu",
            "Sun God",
            "Brahma"
        ],

        answer: "Sun God"
    },


    {
        question:
            "Golconda Fort is located near which city?",

        options: [
            "Hyderabad",
            "Bengaluru",
            "Kolkata",
            "Jaipur"
        ],

        answer: "Hyderabad"
    },
    

   

    {
        question:
            "Dholavira is associated with which ancient civilization?",

        options: [
            "Indus Valley Civilization",
            "Roman Civilization",
            "Greek Civilization",
            "Egyptian Civilization"
        ],

        answer: "Indus Valley Civilization"
    },



    

    {
        question:
            "Nalanda Mahavihara was famous as an ancient centre of what?",

        options: [
            "Learning",
            "Trade",
            "Mining",
            "Shipbuilding"
        ],

        answer: "Learning"
    },



    
    {
        question:
            "The Ajanta Caves are famous for their ancient what?",

        options: [
            "Paintings",
            "Forts",
            "Stepwells",
            "Palaces"
        ],

        answer: "Paintings"
    },



    
    {
        question:
            "What type of monument is Rani ki Vav?",

        options: [
            "Stepwell",
            "Fort",
            "Cave",
            "Temple"
        ],

        answer: "Stepwell"
    },



    

    {
        question:
            "Lepakshi is famous for which temple?",

        options: [
            "Veerabhadra Temple",
            "Sun Temple",
            "Jagannath Temple",
            "Brihadeeswarar Temple"
        ],

        answer: "Veerabhadra Temple"
    },



   
    {
        question:
            "How many Yoginis is the temple dedicated to?",

        options: [
            "32",
            "48",
            "64",
            "108"
        ],

        answer: "64"
    },





    

    {
        question:
            "What type of monument is Gingee Fort?",

        options: [
            "Hill Fort",
            "Stepwell",
            "Cave",
            "University"
        ],

        answer: "Hill Fort"
    }

];
let currentQuestion = 0;

let quizScore = 0;

function startQuiz() {

    currentQuestion = 0;

    quizScore = 0;

    showQuestion();

   

}
function showQuestion() {

    const question =
        quizQuestions[currentQuestion];


    let optionsHTML = "";


    question.options.forEach(function(option) {

        optionsHTML += `

            <button
                class="quiz-option"
                onclick="checkAnswer('${option}')"
            >

                ${option}

            </button>

        `;

    });


    document.getElementById(
        "quizContent"
    ).innerHTML = `

        <p>
            Question
            ${currentQuestion + 1}
            of
            ${quizQuestions.length}
        </p>


        <div class="quiz-question">

            ${question.question}

        </div>


        <div class="quiz-options">

            ${optionsHTML}

        </div>

    `;

}

    // ======================================
// CHECK ANSWER
// ======================================

function checkAnswer(selectedAnswer) {

    const question =
        quizQuestions[currentQuestion];


    if (
        selectedAnswer ===
        question.answer
    ) {

        quizScore += 10;


        document.getElementById(
            "quizContent"
        ).innerHTML = `

            <div class="quiz-feedback">

                🎉 Correct!

            </div>


            <p>

                You earned
                <strong>+10 points</strong>.

            </p>


            <button
                onclick="nextQuestion()"
            >

                ➡️ Next Question

            </button>

        `;

    }

    else {

        document.getElementById(
            "quizContent"
        ).innerHTML = `

            <div class="quiz-feedback">

                ❌ Incorrect!

            </div>


            <p>

                Correct answer:

                <strong>
                    ${question.answer}
                </strong>

            </p>


            <button
                onclick="nextQuestion()"
            >

                ➡️ Next Question

            </button>

        `;

    }

}
// ======================================
// NEXT QUESTION
// ======================================

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        quizQuestions.length
    ) {

        showFinalScore();

    }

    else {

        showQuestion();

    }

}
function showFinalScore() {

    const totalQuestions =
        quizQuestions.length;


    document.getElementById(
        "quizContent"
    ).innerHTML = `

        <div class="quiz-score">

            🏆 Quiz Complete!

        </div>


        <p>

            Your Score:

        </p>


        <h1>

            ${quizScore}
            /
            ${totalQuestions * 10}

        </h1>


        <p>

            🎉 Great job exploring
            India's heritage!

        </p>


        <button
            onclick="startQuiz()"
        >

            🔄 Play Again

        </button>

    `;

}
// ======================================
// KATHALENS AI NARRATOR
// (English / Telugu / Hindi, all via live
//  text-to-speech — local device voice
//  first, with an online-voice fallback
//  when no local Telugu/Hindi voice is
//  installed. No pre-recorded audio files
//  are used, so there is nothing to go
//  missing or get out of sync.)
// ======================================

let narrationLanguage = "english";
let currentAudio = null;

// Keeps a live reference to the utterance so some browsers
// (Chrome in particular) don't garbage-collect it mid-speech.
let activeMonumentUtterance = null;

// Playback state for the online (no local voice) fallback.
let monumentOnlineNarrationActive = false;
let monumentOnlineNarrationQueue = [];
let monumentOnlineNarrationIndex = 0;
let monumentOnlineNarrationPlayer = null;
let monumentOnlineNarrationLangCode = "en";


function speechLangCodeForMonument() {

    if (narrationLanguage === "telugu") {
        return "te-IN";
    }

    if (narrationLanguage === "hindi") {
        return "hi-IN";
    }

    return "en-IN";
}


function playMonumentOnlineNarrationQueue() {

    const status =
        document.getElementById("narrationStatus");

    if (monumentOnlineNarrationIndex >= monumentOnlineNarrationQueue.length) {

        if (status) {
            status.innerText = "✅ Narration completed.";
        }

        monumentOnlineNarrationActive = false;
        monumentOnlineNarrationPlayer = null;
        currentAudio = null;
        return;
    }

    const chunkText =
        monumentOnlineNarrationQueue[monumentOnlineNarrationIndex];

    const url =
        buildOnlineTTSUrl(chunkText, monumentOnlineNarrationLangCode);

    const player = new Audio(url);
    monumentOnlineNarrationPlayer = player;
    currentAudio = player;

    player.onended = function () {
        monumentOnlineNarrationIndex++;
        playMonumentOnlineNarrationQueue();
    };

    player.onerror = function (event) {

        console.error(
            "Monument online narration chunk failed:",
            event
        );

        if (status) {
            status.innerText =
                "❌ Online narration is unavailable right now " +
                "(the free voice service may be busy). Please try " +
                "again shortly, or read the text above.";
        }

        monumentOnlineNarrationActive = false;
        monumentOnlineNarrationPlayer = null;
        currentAudio = null;
    };

    player.play().catch(function (error) {

        console.error(
            "Monument online narration playback error:",
            error
        );

        if (status) {
            status.innerText = "❌ Unable to play narration.";
        }

        monumentOnlineNarrationActive = false;
        monumentOnlineNarrationPlayer = null;
        currentAudio = null;
    });
}


function startMonumentOnlineNarration(text, langCode) {

    const status =
        document.getElementById("narrationStatus");

    monumentOnlineNarrationActive = true;
    monumentOnlineNarrationLangCode = langCode;
    monumentOnlineNarrationQueue = splitTextForOnlineTTS(text);
    monumentOnlineNarrationIndex = 0;

    if (status) {
        status.innerText = "🔊 Narrating (online voice)...";
    }

    playMonumentOnlineNarrationQueue();
}


// ======================================
// START NARRATION
// ======================================

function startNarration() {

    // Stop any item narrator that might be playing
    stopItemNarration();

    // Stop previous audio / speech
    stopNarration();

    // Check if monument is selected
    if (!currentMonument) {
        alert("Please select a monument first.");
        return;
    }

    const monumentData =
        languageData[currentMonument];

    if (!monumentData) {
        alert("Story data not found.");
        return;
    }

    const selectedLanguage =
        monumentData[narrationLanguage];

    if (!selectedLanguage || !selectedLanguage.text) {

        alert(
            narrationLanguage === "telugu" ?
                "Telugu story is not available for this monument." :
            narrationLanguage === "hindi" ?
                "Hindi story is not available for this monument." :
                "English story is not available."
        );

        return;
    }

    const story = selectedLanguage.text;

    const status =
        document.getElementById("narrationStatus");

    if (status) {
        status.innerText = "⏳ Loading voice...";
    }

    const langCode = speechLangCodeForMonument();

    loadSpeechVoices().then(function () {

        const voice = findVoiceForLangCode(langCode);
        const isIndianLanguage =
            narrationLanguage === "telugu" ||
            narrationLanguage === "hindi";

        if (isIndianLanguage && !voice) {

            console.warn(
                "No local voice found for", langCode,
                "- falling back to online narration for monument. " +
                "Installed voices:", cachedVoiceList
            );

            startMonumentOnlineNarration(story, langCode);
            return;
        }

        const speech =
            new SpeechSynthesisUtterance(story);

        speech.lang = langCode;

        if (voice) {
            speech.voice = voice;
        }

        speech.rate = 0.9;
        speech.pitch = 1;
        speech.volume = 1;

        activeMonumentUtterance = speech;

        speech.onerror = function (event) {

            console.error(
                "Monument speech error:",
                event
            );

            if (status) {
                status.innerText =
                    "❌ Voice generation failed on this device.";
            }
        };

        speech.onend = function () {

            if (status) {
                status.innerText =
                    "✅ Narration completed.";
            }

            activeMonumentUtterance = null;
        };

        if (status) {
            status.innerText = "🔊 Narrating...";
        }

        window.speechSynthesis.speak(speech);

    });

}


// ======================================
// PAUSE
// ======================================

function pauseNarration() {

    if (monumentOnlineNarrationActive && monumentOnlineNarrationPlayer) {

        monumentOnlineNarrationPlayer.pause();

        document.getElementById(
            "narrationStatus"
        ).innerText =
            "⏸️ Narration paused.";

        return;
    }

    window.speechSynthesis.pause();

    document.getElementById(
        "narrationStatus"
    ).innerText =
        "⏸️ Narration paused.";
}


// ======================================
// RESUME
// ======================================

function resumeNarration() {

    if (monumentOnlineNarrationActive && monumentOnlineNarrationPlayer) {

        monumentOnlineNarrationPlayer.play();

        document.getElementById(
            "narrationStatus"
        ).innerText =
            "▶️ Narration resumed.";

        return;
    }

    window.speechSynthesis.resume();

    document.getElementById(
        "narrationStatus"
    ).innerText =
        "▶️ Narration resumed.";
}


// ======================================
// STOP
// ======================================

function stopNarration() {

    window.speechSynthesis.cancel();
    activeMonumentUtterance = null;

    if (monumentOnlineNarrationPlayer) {
        monumentOnlineNarrationPlayer.pause();
        monumentOnlineNarrationPlayer.currentTime = 0;
    }

    monumentOnlineNarrationActive = false;
    monumentOnlineNarrationPlayer = null;
    monumentOnlineNarrationQueue = [];
    monumentOnlineNarrationIndex = 0;
    currentAudio = null;

    const status =
        document.getElementById("narrationStatus");

    if (status) {

        status.innerText =
            "⏹️ Narration stopped.";
    }
}
// ======================================
// STATE HERITAGE NARRATION
// (English / Telugu / Hindi via the
//  browser's own text-to-speech voice,
//  same local-voice-first, online-fallback
//  approach as the monument narrator above)
// ======================================

function speechLangCodeForState() {

    if (currentStateLanguage === "telugu") {
        return "te-IN";
    }

    if (currentStateLanguage === "hindi") {
        return "hi-IN";
    }

    return "en-IN";
}


/*
   The list of installed voices is often EMPTY the very
   first time getVoices() is called, because most browsers
   (Chrome especially) load voices asynchronously in the
   background. Calling speak() before they're loaded is a
   common reason narration silently does nothing. This
   waits for the real list, with a timeout as a safety net.
*/
let cachedVoiceList = [];

function loadSpeechVoices() {

    return new Promise(function (resolve) {

        const existing = window.speechSynthesis.getVoices();

        if (existing && existing.length > 0) {
            cachedVoiceList = existing;
            resolve(cachedVoiceList);
            return;
        }

        let resolved = false;

        window.speechSynthesis.onvoiceschanged = function () {

            if (resolved) {
                return;
            }

            resolved = true;

            cachedVoiceList =
                window.speechSynthesis.getVoices();

            resolve(cachedVoiceList);
        };

        // Safety net in case onvoiceschanged never fires.
        setTimeout(function () {

            if (resolved) {
                return;
            }

            resolved = true;

            cachedVoiceList =
                window.speechSynthesis.getVoices();

            resolve(cachedVoiceList);

        }, 1200);
    });
}


/*
   Finds the best installed voice for a language code like
   "te-IN" or "hi-IN": an exact match first, then any voice
   whose language starts with the same prefix ("te", "hi").
*/
function findVoiceForLangCode(langCode) {

    const prefix = langCode.split("-")[0].toLowerCase();

    let match = cachedVoiceList.find(function (v) {
        return v.lang && v.lang.toLowerCase() === langCode.toLowerCase();
    });

    if (!match) {

        match = cachedVoiceList.find(function (v) {
            return v.lang &&
                v.lang.toLowerCase().indexOf(prefix) === 0;
        });
    }

    return match || null;
}


/* =====================================================
   ONLINE NARRATION FALLBACK

   Used only when the visitor's own device/browser has no
   installed voice for the selected language (very common
   for Telugu/Hindi on desktop browsers). Splits the text
   into short chunks and plays them back-to-back as small
   audio clips from Google's public translate-TTS endpoint,
   so narration still works without any local voice pack.

   This is an unofficial endpoint (no API key, no backend
   server here), so treat it as a best-effort fallback, not
   a guaranteed production service.
===================================================== */

const ONLINE_TTS_CHUNK_LIMIT = 180;

function splitTextForOnlineTTS(text) {

    // Split on sentence-ending punctuation used by
    // English/Telugu/Hindi text (. ! ? and Hindi danda ।).
    const sentences =
        text.match(/[^.!?।]+[.!?।]*/g) || [text];

    const chunks = [];
    let current = "";

    sentences.forEach(function (rawSentence) {

        const sentence = rawSentence.trim();

        if (!sentence) {
            return;
        }

        const combined = (current + " " + sentence).trim();

        if (combined.length <= ONLINE_TTS_CHUNK_LIMIT) {
            current = combined;
            return;
        }

        if (current) {
            chunks.push(current);
        }

        if (sentence.length <= ONLINE_TTS_CHUNK_LIMIT) {
            current = sentence;
            return;
        }

        // A single sentence longer than the limit: split by words.
        let piece = "";

        sentence.split(" ").forEach(function (word) {

            const withWord = (piece + " " + word).trim();

            if (withWord.length <= ONLINE_TTS_CHUNK_LIMIT) {
                piece = withWord;
            } else {
                chunks.push(piece);
                piece = word;
            }
        });

        current = piece;
    });

    if (current) {
        chunks.push(current);
    }

    return chunks;
}


function buildOnlineTTSUrl(text, langCode) {

    const shortLang = langCode.split("-")[0];

    return "https://translate.google.com/translate_tts" +
        "?ie=UTF-8" +
        "&q=" + encodeURIComponent(text) +
        "&tl=" + shortLang +
        "&client=tw-ob";
}


// Playback state for the online fallback narration.
let onlineNarrationActive = false;
let onlineNarrationQueue = [];
let onlineNarrationIndex = 0;
let onlineNarrationPlayer = null;
let onlineNarrationLangCode = "en";


function playOnlineNarrationQueue() {

    const status =
        document.getElementById("stateNarrationStatus");

    if (onlineNarrationIndex >= onlineNarrationQueue.length) {

        if (status) {
            status.innerText = "✅ Narration completed.";
        }

        onlineNarrationActive = false;
        onlineNarrationPlayer = null;
        return;
    }

    const chunkText =
        onlineNarrationQueue[onlineNarrationIndex];

    const url =
        buildOnlineTTSUrl(chunkText, onlineNarrationLangCode);

    const player = new Audio(url);
    onlineNarrationPlayer = player;

    player.onended = function () {
        onlineNarrationIndex++;
        playOnlineNarrationQueue();
    };

    player.onerror = function (event) {

        console.error(
            "Online narration chunk failed:",
            event
        );

        if (status) {
            status.innerText =
                "❌ Online narration is unavailable right now " +
                "(the free voice service may be busy). Please try " +
                "again shortly, or read the text above.";
        }

        onlineNarrationActive = false;
        onlineNarrationPlayer = null;
    };

    player.play().catch(function (error) {

        console.error(
            "Online narration playback error:",
            error
        );

        if (status) {
            status.innerText = "❌ Unable to play narration.";
        }

        onlineNarrationActive = false;
        onlineNarrationPlayer = null;
    });
}


function startOnlineStateNarration(text, langCode) {

    const status =
        document.getElementById("stateNarrationStatus");

    onlineNarrationActive = true;
    onlineNarrationLangCode = langCode;
    onlineNarrationQueue = splitTextForOnlineTTS(text);
    onlineNarrationIndex = 0;

    if (status) {
        status.innerText = "🔊 Narrating (online voice)...";
    }

    playOnlineNarrationQueue();
}


// Keeps a live reference to the utterance so some browsers
// (Chrome in particular) don't garbage-collect it mid-speech.
let activeStateUtterance = null;


function startStateNarration() {

    // Stop any item narrator that might be playing
    stopItemNarration();

    window.speechSynthesis.cancel();
    activeStateUtterance = null;

    if (onlineNarrationPlayer) {
        onlineNarrationPlayer.pause();
    }

    onlineNarrationActive = false;
    onlineNarrationPlayer = null;

    if (!lastSelectedState) {

        alert(
            "Please select a state first."
        );

        return;
    }

    const overview =
        stateOverviewDescriptions[lastSelectedState] &&
        stateOverviewDescriptions[lastSelectedState][currentStateLanguage];

    if (!overview) {

        alert(
            "Narration is not available for this state yet."
        );

        return;
    }

    const status =
        document.getElementById("stateNarrationStatus");

    if (status) {
        status.innerText = "⏳ Loading voice...";
    }

    const langCode = speechLangCodeForState();

    loadSpeechVoices().then(function () {

        const voice = findVoiceForLangCode(langCode);
        const isIndianLanguage =
            currentStateLanguage === "telugu" ||
            currentStateLanguage === "hindi";

        if (isIndianLanguage && !voice) {

            console.warn(
                "No local voice found for", langCode,
                "- falling back to online narration. " +
                "Installed voices:", cachedVoiceList
            );

            startOnlineStateNarration(overview, langCode);
            return;
        }

        const speech =
            new SpeechSynthesisUtterance(overview);

        speech.lang = langCode;

        if (voice) {
            speech.voice = voice;
        }

        speech.rate = 0.9;
        speech.pitch = 1;
        speech.volume = 1;

        activeStateUtterance = speech;

        speech.onerror = function (event) {

            console.error(
                "State speech error:",
                event
            );

            if (status) {
                status.innerText =
                    "❌ Voice generation failed on this device.";
            }
        };

        speech.onend = function () {

            if (status) {
                status.innerText =
                    "✅ Narration completed.";
            }

            activeStateUtterance = null;
        };


        if (status) {
            status.innerText = "🔊 Narrating...";
        }

        window.speechSynthesis.speak(speech);

    });

}


function pauseStateNarration() {

    if (onlineNarrationActive && onlineNarrationPlayer) {

        onlineNarrationPlayer.pause();

        const status =
            document.getElementById("stateNarrationStatus");

        if (status) {
            status.innerText = "⏸️ Narration paused.";
        }

        return;
    }

    window.speechSynthesis.pause();

    const status =
        document.getElementById("stateNarrationStatus");

    if (status) {
        status.innerText =
            "⏸️ Narration paused.";
    }
}


function resumeStateNarration() {

    if (onlineNarrationActive && onlineNarrationPlayer) {

        onlineNarrationPlayer.play();

        const status =
            document.getElementById("stateNarrationStatus");

        if (status) {
            status.innerText = "▶️ Narration resumed.";
        }

        return;
    }

    window.speechSynthesis.resume();

    const status =
        document.getElementById("stateNarrationStatus");

    if (status) {
        status.innerText =
            "▶️ Narration resumed.";
    }
}


function stopStateNarration() {

    window.speechSynthesis.cancel();
    activeStateUtterance = null;

    if (onlineNarrationPlayer) {
        onlineNarrationPlayer.pause();
        onlineNarrationPlayer.currentTime = 0;
    }

    onlineNarrationActive = false;
    onlineNarrationPlayer = null;
    onlineNarrationQueue = [];
    onlineNarrationIndex = 0;

    const status =
        document.getElementById("stateNarrationStatus");

    if (status) {
        status.innerText =
            "⏹️ Narration stopped.";
    }
}


/* =========================================================
   THEME (CATEGORY) AI NARRATOR
   Narrates the description of whichever theme (Dress,
   Dance, Arts & Crafts, Food, Festivals, Famous Places,
   Culture) is currently on screen, in English, Telugu or
   Hindi — using the exact same local-voice-first, online-
   fallback approach as the state overview narrator above.
   The text comes from heritageDescriptions, which already
   has all three languages generated for every state and
   category, so no separate translation step is needed here.
========================================================= */

let activeThemeUtterance = null;

// Playback state for the online (no local voice) fallback.
let themeNarrationActive = false;
let themeNarrationPlayer = null;
let themeNarrationQueue = [];
let themeNarrationIndex = 0;
let themeNarrationLangCode = "en";


/*
   Builds the text to narrate: the theme's translated name
   followed by its description, both in the currently
   selected language.
*/
function getThemeNarrationText() {

    if (!lastSelectedState || !lastViewedCategory) {
        return null;
    }

    const categoryLabels =
        categoryNamesMulti[lastViewedCategory];

    const categoryLabel =
        categoryLabels &&
        categoryLabels[currentStateLanguage] &&
        categoryLabels[currentStateLanguage].replace(/^\S+\s/, "");

    const description =
        heritageDescriptions[lastSelectedState] &&
        heritageDescriptions[lastSelectedState][lastViewedCategory] &&
        heritageDescriptions[lastSelectedState][lastViewedCategory][currentStateLanguage];

    if (!description) {
        return null;
    }

    return categoryLabel ?
        `${categoryLabel}. ${description}` :
        description;
}


function playOnlineThemeNarrationQueue() {

    const status =
        document.getElementById("themeNarrationStatus");

    if (themeNarrationIndex >= themeNarrationQueue.length) {

        if (status) {
            status.innerText = "✅ Narration completed.";
        }

        themeNarrationActive = false;
        themeNarrationPlayer = null;
        return;
    }

    const chunkText =
        themeNarrationQueue[themeNarrationIndex];

    const url =
        buildOnlineTTSUrl(chunkText, themeNarrationLangCode);

    const player = new Audio(url);
    themeNarrationPlayer = player;

    player.onended = function () {
        themeNarrationIndex++;
        playOnlineThemeNarrationQueue();
    };

    player.onerror = function (event) {

        console.error(
            "Theme online narration chunk failed:",
            event
        );

        if (status) {
            status.innerText =
                "❌ Online narration is unavailable right now " +
                "(the free voice service may be busy). Please try " +
                "again shortly, or read the text above.";
        }

        themeNarrationActive = false;
        themeNarrationPlayer = null;
    };

    player.play().catch(function (error) {

        console.error(
            "Theme online narration playback error:",
            error
        );

        if (status) {
            status.innerText = "❌ Unable to play narration.";
        }

        themeNarrationActive = false;
        themeNarrationPlayer = null;
    });
}


function startOnlineThemeNarration(text, langCode) {

    const status =
        document.getElementById("themeNarrationStatus");

    themeNarrationActive = true;
    themeNarrationLangCode = langCode;
    themeNarrationQueue = splitTextForOnlineTTS(text);
    themeNarrationIndex = 0;

    if (status) {
        status.innerText = "🔊 Narrating (online voice)...";
    }

    playOnlineThemeNarrationQueue();
}


function startThemeNarration() {

    // Stop any item narrator that might be playing
    stopItemNarration();

    window.speechSynthesis.cancel();
    activeThemeUtterance = null;

    if (themeNarrationPlayer) {
        themeNarrationPlayer.pause();
    }

    themeNarrationActive = false;
    themeNarrationPlayer = null;

    const text = getThemeNarrationText();

    if (!text) {

        alert(
            "Please select a state and a theme first."
        );

        return;
    }

    const status =
        document.getElementById("themeNarrationStatus");

    if (status) {
        status.innerText = "⏳ Loading voice...";
    }

    const langCode = speechLangCodeForState();

    loadSpeechVoices().then(function () {

        const voice = findVoiceForLangCode(langCode);
        const isIndianLanguage =
            currentStateLanguage === "telugu" ||
            currentStateLanguage === "hindi";

        if (isIndianLanguage && !voice) {

            console.warn(
                "No local voice found for", langCode,
                "- falling back to online narration for theme. " +
                "Installed voices:", cachedVoiceList
            );

            startOnlineThemeNarration(text, langCode);
            return;
        }

        const speech =
            new SpeechSynthesisUtterance(text);

        speech.lang = langCode;

        if (voice) {
            speech.voice = voice;
        }

        speech.rate = 0.9;
        speech.pitch = 1;
        speech.volume = 1;

        activeThemeUtterance = speech;

        speech.onerror = function (event) {

            console.error(
                "Theme speech error:",
                event
            );

            if (status) {
                status.innerText =
                    "❌ Voice generation failed on this device.";
            }
        };

        speech.onend = function () {

            if (status) {
                status.innerText =
                    "✅ Narration completed.";
            }

            activeThemeUtterance = null;
        };

        if (status) {
            status.innerText = "🔊 Narrating...";
        }

        window.speechSynthesis.speak(speech);

    });

}


function pauseThemeNarration() {

    if (themeNarrationActive && themeNarrationPlayer) {

        themeNarrationPlayer.pause();

        const status =
            document.getElementById("themeNarrationStatus");

        if (status) {
            status.innerText = "⏸️ Narration paused.";
        }

        return;
    }

    window.speechSynthesis.pause();

    const status =
        document.getElementById("themeNarrationStatus");

    if (status) {
        status.innerText =
            "⏸️ Narration paused.";
    }
}


function resumeThemeNarration() {

    if (themeNarrationActive && themeNarrationPlayer) {

        themeNarrationPlayer.play();

        const status =
            document.getElementById("themeNarrationStatus");

        if (status) {
            status.innerText = "▶️ Narration resumed.";
        }

        return;
    }

    window.speechSynthesis.resume();

    const status =
        document.getElementById("themeNarrationStatus");

    if (status) {
        status.innerText =
            "▶️ Narration resumed.";
    }
}


function stopThemeNarration() {

    window.speechSynthesis.cancel();
    activeThemeUtterance = null;

    if (themeNarrationPlayer) {
        themeNarrationPlayer.pause();
        themeNarrationPlayer.currentTime = 0;
    }

    themeNarrationActive = false;
    themeNarrationPlayer = null;
    themeNarrationQueue = [];
    themeNarrationIndex = 0;

    const status =
        document.getElementById("themeNarrationStatus");

    if (status) {
        status.innerText =
            "⏹️ Narration stopped.";
    }
}
/* =========================================================
   🇮🇳 KATHALENS STATE-WISE HERITAGE EXPLORER
========================================================= */


/*
   These are the 28 Indian STATES.

   Note:
   Delhi, Jammu & Kashmir and Ladakh are Union Territories,
   so they are not counted among the 28 states.
*/

const indianStates = [

    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"

];


/* =========================================================
   CATEGORY INFORMATION
========================================================= */

const categoryNames = {

    dress: "👗 Traditional Dress",

    dance: "💃 Traditional Dance",

    arts: "🎨 Arts & Crafts",

    food: "🍛 Traditional Food",

    festival: "🎉 Festivals",

    places: "🏛️ Famous Places",

    culture: "🧑‍🤝‍🧑 Culture"

};


/* =========================================================
   MULTILINGUAL THEME (CATEGORY) LABELS
   Used to show the category name and build descriptions
   in English, Telugu and Hindi.
========================================================= */

const categoryNamesMulti = {

    dress: {
        english: "👗 Traditional Dress",
        telugu: "👗 సాంప్రదాయ దుస్తులు",
        hindi: "👗 पारंपरिक पहनावा"
    },

    dance: {
        english: "💃 Traditional Dance",
        telugu: "💃 సాంప్రదాయ నృత్యం",
        hindi: "💃 पारंपरिक नृत्य"
    },

    arts: {
        english: "🎨 Arts & Crafts",
        telugu: "🎨 కళలు & హస్తకళలు",
        hindi: "🎨 कला और शिल्प"
    },

    food: {
        english: "🍛 Traditional Food",
        telugu: "🍛 సాంప్రదాయ ఆహారం",
        hindi: "🍛 पारंपरिक भोजन"
    },

    festival: {
        english: "🎉 Festivals",
        telugu: "🎉 పండుగలు",
        hindi: "🎉 त्योहार"
    },

    places: {
        english: "🏛️ Famous Places",
        telugu: "🏛️ ప్రసిద్ధ ప్రదేశాలు",
        hindi: "🏛️ प्रसिद्ध स्थल"
    },

    culture: {
        english: "🧑‍🤝‍🧑 Culture",
        telugu: "🧑‍🤝‍🧑 సంస్కృతి",
        hindi: "🧑‍🤝‍🧑 संस्कृति"
    }

};


/* =========================================================
   ITEM NAME TRANSLATIONS
   Telugu / Hindi renderings of every dress, dance, art,
   food, festival, culture and place name used in
   heritageData, so descriptions show names in the
   selected language instead of always in English.
========================================================= */

const itemTranslations = {

    "Aipan Art": { telugu: "ఐపాన్ కళ", hindi: "ऐपण कला" },
    "Aizawl": { telugu: "ఐజ్వాల్", hindi: "आइज़ोल" },
    "Ajanta Caves": { telugu: "అజంతా గుహలు", hindi: "अजंता गुफाएं" },
    "Alleppey": { telugu: "అల్లెప్పి", hindi: "अलेप्पी" },
    "Aloo Ke Gutke": { telugu: "అలూ కే గుట్కే", hindi: "आलू के गुटके" },
    "Amaravati": { telugu: "అమరావతి", hindi: "अमरावती" },
    "Amber Fort": { telugu: "ఆంబర్ కోట", hindi: "आमेर किला" },
    "Appam": { telugu: "అప్పం", hindi: "अप्पम" },
    "Araku Valley": { telugu: "అరకు లోయ", hindi: "अराकू घाटी" },
    "Assamese Culture": { telugu: "అస్సామీ సంస్కృతి", hindi: "असमिया संस्कृति" },
    "Awadhi Biryani": { telugu: "అవధి బిర్యానీ", hindi: "अवधी बिरयानी" },
    "Awadhi Culture": { telugu: "అవధి సంస్కృతి", hindi: "अवधी संस्कृति" },
    "Azulejo Art": { telugu: "అజులేజో కళ", hindi: "अज़ुलेजो कला" },
    "Badrinath": { telugu: "బద్రీనాథ్", hindi: "बद्रीनाथ" },
    "Bai": { telugu: "బాయ్", hindi: "बाई" },
    "Baisakhi": { telugu: "బైసాఖి", hindi: "बैसाखी" },
    "Bajra Khichdi": { telugu: "బాజ్రా ఖిచిడీ", hindi: "बाजरा खिचड़ी" },
    "Bakhu": { telugu: "బఖు", hindi: "बाखू" },
    "Bamboo Crafts": { telugu: "వెదురు హస్తకళలు", hindi: "बांस शिल्प" },
    "Bandhani": { telugu: "బంధనీ", hindi: "बंधनी" },
    "Bardo Chham": { telugu: "బార్డో ఛామ్", hindi: "बार्डो छम" },
    "Basilica of Bom Jesus": { telugu: "బోమ్ జీసస్ బసిలికా", hindi: "बॉम जीसस बेसिलिका" },
    "Bastar": { telugu: "బస్తర్", hindi: "बस्तर" },
    "Bastar Dussehra": { telugu: "బస్తర్ దసరా", hindi: "बस्तर दशहरा" },
    "Bathukamma": { telugu: "బతుకమ్మ", hindi: "बतुकम्मा" },
    "Bebinca": { telugu: "బెబింకా", hindi: "बेबिन्का" },
    "Bengali Culture": { telugu: "బెంగాలీ సంస్కృతి", hindi: "बंगाली संस्कृति" },
    "Betla National Park": { telugu: "బెత్లా జాతీయ ఉద్యానవనం", hindi: "बेतला राष्ट्रीय उद्यान" },
    "Bhangra": { telugu: "భాంగ్రా", hindi: "भांगड़ा" },
    "Bharatanatyam": { telugu: "భరతనాట్యం", hindi: "भरतनाट्यम" },
    "Bhutte Ka Kees": { telugu: "భుట్టే కా కీస్", hindi: "भुट्टे का कीस" },
    "Bihu": { telugu: "బిహు", hindi: "बिहू" },
    "Bisi Bele Bath": { telugu: "బిసి బెలే బాత్", hindi: "बिसी बेले बाथ" },
    "Chamba Rumal": { telugu: "చంబా రుమాల్", hindi: "चंबा रुमाल" },
    "Chanderi Saree": { telugu: "చందేరి చీర", hindi: "चंदेरी साड़ी" },
    "Chang Lo": { telugu: "చాంగ్ లో", hindi: "चांग लो" },
    "Chaniya Choli": { telugu: "చనియా చోలీ", hindi: "चनिया चोली" },
    "Chapchar Kut": { telugu: "చాప్‌చార్ కుట్", hindi: "चापचार कुट" },
    "Charminar": { telugu: "చార్మినార్", hindi: "चारमीनार" },
    "Cheraw": { telugu: "చెరా", hindi: "चेराव" },
    "Cheriyal Paintings": { telugu: "చెరియాల్ పెయింటింగ్స్", hindi: "चेरियाल पेंटिंग" },
    "Cherrapunji": { telugu: "చిరపుంజి", hindi: "चेरापूंजी" },
    "Chhath Puja": { telugu: "ఛఠ్ పూజ", hindi: "छठ पूजा" },
    "Chhau": { telugu: "ఛౌ", hindi: "छऊ" },
    "Chholiya": { telugu: "ఛోలియా", hindi: "छोलिया" },
    "Chikankari": { telugu: "చికన్‌కారీ", hindi: "चिकनकारी" },
    "Chikankari Kurta": { telugu: "చికన్‌కారీ కుర్తా", hindi: "चिकनकारी कुर्ता" },
    "Chila": { telugu: "చిలా", hindi: "चीला" },
    "Chitrakote Falls": { telugu: "చిత్రకూట్ జలపాతం", hindi: "चित्रकोट जलप्रपात" },
    "Coorg": { telugu: "కూర్గ్", hindi: "कूर्ग" },
    "Dal Baati Churma": { telugu: "దాల్ బాటీ చుర్మా", hindi: "दाल बाटी चूरमा" },
    "Dalma": { telugu: "దల్మా", hindi: "दलमा" },
    "Dandiya": { telugu: "దాండియా", hindi: "डांडिया" },
    "Dhalo": { telugu: "ధాలో", hindi: "धालो" },
    "Dham": { telugu: "ధామ్", hindi: "धाम" },
    "Dhamal": { telugu: "ధమాల్", hindi: "धमाल" },
    "Dhokla": { telugu: "ధోక్లా", hindi: "ढोकला" },
    "Dhokra Art": { telugu: "ధోక్రా కళ", hindi: "ढोकरा कला" },
    "Dhoti Kurta": { telugu: "ధోతీ కుర్తా", hindi: "धोती कुर्ता" },
    "Dhuska": { telugu: "ధుస్కా", hindi: "धुस्का" },
    "Diwali": { telugu: "దీపావళి", hindi: "दीपावली" },
    "Durga Puja": { telugu: "దుర్గా పూజ", hindi: "दुर्गा पूजा" },
    "Dzukou Valley": { telugu: "జుకో లోయ", hindi: "जुको घाटी" },
    "Ellora Caves": { telugu: "ఎల్లోరా గుహలు", hindi: "एलोरा गुफाएं" },
    "Eromba": { telugu: "ఎరోంబా", hindi: "इरोम्बा" },
    "Fara": { telugu: "ఫారా", hindi: "फरा" },
    "Fatehpur Sikri": { telugu: "ఫతేపూర్ సిక్రీ", hindi: "फतेहपुर सीकरी" },
    "Fort Aguada": { telugu: "ఫోర్ట్ అగ్వాడా", hindi: "फोर्ट अगुआड़ा" },
    "Fugdi": { telugu: "ఫుగ్డి", hindi: "फुगड़ी" },
    "Gambhira": { telugu: "గంభీరా", hindi: "गंभीरा" },
    "Ganesh Chaturthi": { telugu: "గణేష్ చతుర్థి", hindi: "गणेश चतुर्थी" },
    "Gangaur": { telugu: "గంగౌర్", hindi: "गणगौर" },
    "Garba": { telugu: "గర్బా", hindi: "गरबा" },
    "Garhwali Culture": { telugu: "గర్హ్వాలీ సంస్కృతి", hindi: "गढ़वाली संस्कृति" },
    "Gateway of India": { telugu: "గేట్‌వే ఆఫ్ ఇండియా", hindi: "गेटवे ऑफ इंडिया" },
    "Ghagra Choli": { telugu: "ఘాగ్రా చోలీ", hindi: "घाघरा चोली" },
    "Ghoomar": { telugu: "ఘూమర్", hindi: "घूमर" },
    "Giddha": { telugu: "గిద్దా", hindi: "गिद्दा" },
    "Goa Carnival": { telugu: "గోవా కార్నివాల్", hindi: "गोवा कार्निवल" },
    "Goan Culture": { telugu: "గోవా సంస్కృతి", hindi: "गोवा संस्कृति" },
    "Goan Fish Curry": { telugu: "గోవా ఫిష్ కర్రీ", hindi: "गोवा फिश करी" },
    "Golconda Fort": { telugu: "గోల్కొండ కోట", hindi: "गोलकोंडा किला" },
    "Golden Temple": { telugu: "స్వర్ణ దేవాలయం", hindi: "स्वर्ण मंदिर" },
    "Gond Painting": { telugu: "గోండ్ పెయింటింగ్", hindi: "गोंड पेंटिंग" },
    "Gongura Pachadi": { telugu: "గోంగూర పచ్చడి", hindi: "गोंगुरा पचड़ी" },
    "Gujarati Culture": { telugu: "గుజరాతీ సంస్కృతి", hindi: "गुजराती संस्कृति" },
    "Hampi": { telugu: "హంపి", hindi: "हम्पी" },
    "Haryanvi Culture": { telugu: "హర్యాన్వీ సంస్కృతి", hindi: "हरियाणवी संस्कृति" },
    "Hawa Mahal": { telugu: "హవా మహల్", hindi: "हवा महल" },
    "Himachali Traditional Dress": { telugu: "హిమాచలీ సాంప్రదాయ దుస్తులు", hindi: "हिमाचली पारंपरिक पोशाक" },
    "Hojagiri": { telugu: "హోజాగిరి", hindi: "होजागिरी" },
    "Holi": { telugu: "హోలీ", hindi: "होली" },
    "Hornbill Festival": { telugu: "హార్న్‌బిల్ ఉత్సవం", hindi: "हॉर्नबिल उत्सव" },
    "Hundru Falls": { telugu: "హుండ్రూ జలపాతం", hindi: "हुंडरू जलप्रपात" },
    "Hyderabadi Biryani": { telugu: "హైదరాబాదీ బిర్యానీ", hindi: "हैदराबादी बिरयानी" },
    "Idli": { telugu: "ఇడ్లీ", hindi: "इडली" },
    "Innaphi": { telugu: "ఇన్నాఫి", hindi: "इन्नाफी" },
    "Jadoh": { telugu: "జడోహ్", hindi: "जडोह" },
    "Jagannath Temple": { telugu: "జగన్నాథ దేవాలయం", hindi: "जगन्नाथ मंदिर" },
    "Jainsem": { telugu: "జైన్సెమ్", hindi: "जैनसेम" },
    "Jaisalmer Fort": { telugu: "జైసల్మేర్ కోట", hindi: "जैसलमेर किला" },
    "Jallianwala Bagh": { telugu: "జలియన్‌వాలా బాగ్", hindi: "जलियांवाला बाग" },
    "Jat-Jatin": { telugu: "జాట్-జాటిన్", hindi: "जाट-जातिन" },
    "Jhumair": { telugu: "ఝుమైర్", hindi: "झूमर" },
    "Kafuli": { telugu: "కఫులి", hindi: "काफुली" },
    "Kalamkari": { telugu: "కలంకారి", hindi: "कलमकारी" },
    "Kalbelia": { telugu: "కల్బెలియా", hindi: "कालबेलिया" },
    "Kalighat Painting": { telugu: "కాళీఘాట్ పెయింటింగ్", hindi: "कालीघाट पेंटिंग" },
    "Kamakhya Temple": { telugu: "కామాఖ్య దేవాలయం", hindi: "कामाख्या मंदिर" },
    "Kanchipuram Saree": { telugu: "కంచిపురం చీర", hindi: "कांचीपुरम साड़ी" },
    "Kannada Culture": { telugu: "కన్నడ సంస్కృతి", hindi: "कन्नड़ संस्कृति" },
    "Kasavu Saree": { telugu: "కసవు చీర", hindi: "कासावु साड़ी" },
    "Kathak": { telugu: "కథక్", hindi: "कथक" },
    "Kathakali": { telugu: "కథాకళి", hindi: "कथकली" },
    "Kaziranga National Park": { telugu: "కజిరంగా జాతీయ ఉద్యానవనం", hindi: "काज़ीरंगा राष्ट्रीय उद्यान" },
    "Kedarnath": { telugu: "కేదార్‌నాథ్", hindi: "केदारनाथ" },
    "Khajuraho": { telugu: "ఖజురహో", hindi: "खजुराहो" },
    "Khajuraho Dance Festival": { telugu: "ఖజురహో నృత్య ఉత్సవం", hindi: "खजुराहो नृत्य महोत्सव" },
    "Khar": { telugu: "ఖార్", hindi: "खार" },
    "Kharchi Puja": { telugu: "ఖర్చీ పూజ", hindi: "खारची पूजा" },
    "Khasi Culture": { telugu: "ఖాసీ సంస్కృతి", hindi: "खासी संस्कृति" },
    "Kohima": { telugu: "కోహిమా", hindi: "कोहिमा" },
    "Konark Sun Temple": { telugu: "కోణార్క్ సూర్య దేవాలయం", hindi: "कोणार्क सूर्य मंदिर" },
    "Kondapalli Toys": { telugu: "కొండపల్లి బొమ్మలు", hindi: "कोंडापल्ली खिलौने" },
    "Kosa Silk": { telugu: "కోసా పట్టు", hindi: "कोसा रेशम" },
    "Kuchipudi": { telugu: "కూచిపూడి", hindi: "कुचिपुड़ी" },
    "Kullu Dussehra": { telugu: "కుల్లూ దసరా", hindi: "कुल्लू दशहरा" },
    "Kunbi Saree": { telugu: "కుంబీ చీర", hindi: "कुनबी साड़ी" },
    "Kurukshetra": { telugu: "కురుక్షేత్ర", hindi: "कुरुक्षेत्र" },
    "Langa Voni": { telugu: "లంగా వోణీ", hindi: "लंगा वोनी" },
    "Lavani": { telugu: "లావణి", hindi: "लावणी" },
    "Litti Chokha": { telugu: "లిట్టీ చోఖా", hindi: "लिट्टी चोखा" },
    "Living Root Bridges": { telugu: "సజీవ వేరు వంతెనలు", hindi: "जीवित जड़ पुल" },
    "Loktak Lake": { telugu: "లోక్తక్ సరస్సు", hindi: "लोकतक झील" },
    "Losar": { telugu: "లోసార్", hindi: "लोसार" },
    "Macher Jhol": { telugu: "మాచేర్ ఝోల్", hindi: "माछेर झोल" },
    "Madhubani Painting": { telugu: "మధుబని పెయింటింగ్", hindi: "मधुबनी पेंटिंग" },
    "Mahabalipuram": { telugu: "మహాబలిపురం", hindi: "महाबलीपुरम" },
    "Mahabodhi Temple": { telugu: "మహాబోధి దేవాలయం", hindi: "महाबोधि मंदिर" },
    "Maithili Culture": { telugu: "మైథిలీ సంస్కృతి", hindi: "मैथिली संस्कृति" },
    "Makki di Roti": { telugu: "మక్కీ ది రొట్టీ", hindi: "मक्की दी रोटी" },
    "Malayali Culture": { telugu: "మలయాళీ సంస్కృతి", hindi: "मलयाली संस्कृति" },
    "Malwa Culture": { telugu: "మాల్వా సంస్కృతి", hindi: "मालवा संस्कृति" },
    "Manali": { telugu: "మనాలి", hindi: "मनाली" },
    "Manipuri Dance": { telugu: "మణిపురి నృత్యం", hindi: "मणिपुरी नृत्य" },
    "Manipuri Handicrafts": { telugu: "మణిపురి హస్తకళలు", hindi: "मणिपुरी हस्तशिल्प" },
    "Marathi Culture": { telugu: "మరాఠీ సంస్కృతి", hindi: "मराठी संस्कृति" },
    "Masor Tenga": { telugu: "మసోర్ టెంగా", hindi: "मासोर तेंगा" },
    "Matki": { telugu: "మట్కీ", hindi: "मटकी" },
    "Meenakshi Temple": { telugu: "మీనాక్షి దేవాలయం", hindi: "मीनाक्षी मंदिर" },
    "Meitei Culture": { telugu: "మెయితీ సంస్కృతి", hindi: "मैतेई संस्कृति" },
    "Mekhela Chador": { telugu: "మేఖేలా చాదర్", hindi: "मेखला चादर" },
    "Mizo Culture": { telugu: "మిజో సంస్కృతి", hindi: "मिज़ो संस्कृति" },
    "Mohiniyattam": { telugu: "మోహినీయాట్టం", hindi: "मोहिनीअट्टम" },
    "Momos": { telugu: "మోమోలు", hindi: "मोमोज़" },
    "Muga Silk": { telugu: "ముగా పట్టు", hindi: "मूगा रेशम" },
    "Mui Borok": { telugu: "ముయి బోరోక్", hindi: "मुई बोरोक" },
    "Munnar": { telugu: "మున్నార్", hindi: "मुन्नार" },
    "Mural Painting": { telugu: "మ్యూరల్ పెయింటింగ్", hindi: "भित्ति चित्रकला" },
    "Mysore Dasara": { telugu: "మైసూర్ దసరా", hindi: "मैसूर दशहरा" },
    "Mysore Painting": { telugu: "మైసూర్ పెయింటింగ్", hindi: "मैसूर पेंटिंग" },
    "Mysore Pak": { telugu: "మైసూర్ పాక్", hindi: "मैसूर पाक" },
    "Mysore Palace": { telugu: "మైసూర్ ప్యాలెస్", hindi: "मैसूर पैलेस" },
    "Mysore Silk Saree": { telugu: "మైసూర్ పట్టు చీర", hindi: "मैसूर सिल्क साड़ी" },
    "Naga Culture": { telugu: "నాగా సంస్కృతి", hindi: "नागा संस्कृति" },
    "Naga Handicrafts": { telugu: "నాగా హస్తకళలు", hindi: "नागा हस्तशिल्प" },
    "Nalanda": { telugu: "నలంద", hindi: "नालंदा" },
    "Nanda Devi Raj Jat": { telugu: "నందా దేవి రాజ్ జాట్", hindi: "नंदा देवी राज जात" },
    "Nati": { telugu: "నాటి", hindi: "नाटी" },
    "Nauvari Saree": { telugu: "నౌవారీ చీర", hindi: "नौवारी साड़ी" },
    "Navratri": { telugu: "నవరాత్రి", hindi: "नवरात्रि" },
    "Neermahal": { telugu: "నీర్‌మహల్", hindi: "नीरमहल" },
    "Odia Culture": { telugu: "ఒడియా సంస్కృతి", hindi: "ओड़िया संस्कृति" },
    "Odissi": { telugu: "ఒడిస్సీ", hindi: "ओडिसी" },
    "Onam": { telugu: "ఓణం", hindi: "ओणम" },
    "Padmanabhaswamy Temple": { telugu: "పద్మనాభస్వామి దేవాలయం", hindi: "पद्मनाभस्वामी मंदिर" },
    "Pahari Culture": { telugu: "పహాడీ సంస్కృతి", hindi: "पहाड़ी संस्कृति" },
    "Pakhala Bhata": { telugu: "పఖాలా భాత", hindi: "पखाल भात" },
    "Panthi": { telugu: "పంతి", hindi: "पंथी" },
    "Pattachitra": { telugu: "పట్టచిత్ర", hindi: "पट्टचित्र" },
    "Perini Shivatandavam": { telugu: "పేరిణి శివతాండవం", hindi: "पेरिणी शिवतांडवम" },
    "Petha": { telugu: "పేథా", hindi: "पेठा" },
    "Phad Painting": { telugu: "ఫడ్ పెయింటింగ్", hindi: "फड़ पेंटिंग" },
    "Phag": { telugu: "ఫాగ్", hindi: "फाग" },
    "Phawngpui": { telugu: "ఫావ్న్‌గ్‌పుయ్", hindi: "फॉंगपुई" },
    "Phulkari": { telugu: "ఫుల్కారీ", hindi: "फुलकारी" },
    "Pochampally Saree": { telugu: "పోచంపల్లి చీర", hindi: "पोचमपल्ली साड़ी" },
    "Poha": { telugu: "పోహా", hindi: "पोहा" },
    "Pongal": { telugu: "పొంగల్", hindi: "पोंगल" },
    "Ponung": { telugu: "పోనుంగ్", hindi: "पोनुंग" },
    "Puan": { telugu: "పువాన్", hindi: "पुआन" },
    "Pulihora": { telugu: "పులిహోర", hindi: "पुलिहोरा" },
    "Punjabi Culture": { telugu: "పంజాబీ సంస్కృతి", hindi: "पंजाबी संस्कृति" },
    "Punjabi Suit": { telugu: "పంజాబీ సూట్", hindi: "पंजाबी सूट" },
    "Puran Poli": { telugu: "పూరన్ పోళి", hindi: "पूरन पोली" },
    "Rai": { telugu: "రాయ్", hindi: "राई" },
    "Rajasthani Culture": { telugu: "రాజస్థానీ సంస్కృతి", hindi: "राजस्थानी संस्कृति" },
    "Rann of Kutch": { telugu: "రాన్ ఆఫ్ కచ్", hindi: "कच्छ का रण" },
    "Rasgulla": { telugu: "రసగుల్లా", hindi: "रसगुल्ला" },
    "Rath Yatra": { telugu: "రథ యాత్ర", hindi: "रथ यात्रा" },
    "Raut Nacha": { telugu: "రౌత్ నాచా", hindi: "राउत नाचा" },
    "Rignai": { telugu: "రిగ్నై", hindi: "रिग्नई" },
    "Rishikesh": { telugu: "ఋషికేశ్", hindi: "ऋषिकेश" },
    "Rumtek Monastery": { telugu: "రుమ్టెక్ మఠం", hindi: "रुमटेक मठ" },
    "Sadya": { telugu: "సద్య", hindi: "सद्या" },
    "Sakinalu": { telugu: "సకినాలు", hindi: "सकीनालु" },
    "Sambalpuri Saree": { telugu: "సంబల్పురి చీర", hindi: "संबलपुरी साड़ी" },
    "Sanchi Stupa": { telugu: "సాంచీ స్తూపం", hindi: "सांची स्तूप" },
    "Sankranti": { telugu: "సంక్రాంతి", hindi: "संक्रांति" },
    "Saree": { telugu: "చీర", hindi: "साड़ी" },
    "Sarhul": { telugu: "సర్హుల్", hindi: "सरहुल" },
    "Sarson da Saag": { telugu: "సర్సన్ దా సాగ్", hindi: "सरसों दा साग" },
    "Shad Suk Mynsiem": { telugu: "షాద్ సుక్ మిన్‌సియెమ్", hindi: "शाद सुक मिनसिएम" },
    "Shimla": { telugu: "సిమ్లా", hindi: "शिमला" },
    "Sikkimese Culture": { telugu: "సిక్కిమీస్ సంస్కృతి", hindi: "सिक्किमी संस्कृति" },
    "Singhi Chham": { telugu: "సింఘీ ఛామ్", hindi: "सिंघी छम" },
    "Smoked Pork": { telugu: "పొగబెట్టిన పంది మాంసం", hindi: "स्मोक्ड पोर्क" },
    "Sohrai Painting": { telugu: "సోహ్రాయ్ పెయింటింగ్", hindi: "सोहराय पेंटिंग" },
    "Solung": { telugu: "సోలుంగ్", hindi: "सोलुंग" },
    "Spiti Valley": { telugu: "స్పితి లోయ", hindi: "स्पीति घाटी" },
    "Statue of Unity": { telugu: "స్టాచ్యూ ఆఫ్ యూనిటీ", hindi: "स्टैच्यू ऑफ यूनिटी" },
    "Sultanpur National Park": { telugu: "సుల్తాన్‌పూర్ జాతీయ ఉద్యానవనం", hindi: "सुल्तानपुर राष्ट्रीय उद्यान" },
    "Sundarbans": { telugu: "సుందర్‌బన్స్", hindi: "सुंदरबन" },
    "Taj Mahal": { telugu: "తాజ్ మహల్", hindi: "ताज महल" },
    "Tamasha": { telugu: "తమాషా", hindi: "तमाशा" },
    "Tamil Culture": { telugu: "తమిళ సంస్కృతి", hindi: "तमिल संस्कृति" },
    "Tanjore Painting": { telugu: "తంజావూరు పెయింటింగ్", hindi: "तंजौर पेंटिंग" },
    "Tant Saree": { telugu: "తాంత్ చీర", hindi: "तांत साड़ी" },
    "Tawang": { telugu: "తవాంగ్", hindi: "तवांग" },
    "Teej": { telugu: "తీజ్", hindi: "तीज" },
    "Telangana Culture": { telugu: "తెలంగాణ సంస్కృతి", hindi: "तेलंगाना संस्कृति" },
    "Telugu Culture": { telugu: "తెలుగు సంస్కృతి", hindi: "तेलुगु संस्कृति" },
    "Thangka Painting": { telugu: "థాంగ్కా పెయింటింగ్", hindi: "थांगका पेंटिंग" },
    "Thepla": { telugu: "థెప్లా", hindi: "थेपला" },
    "Thukpa": { telugu: "థుక్పా", hindi: "थुक्पा" },
    "Tirupati": { telugu: "తిరుపతి", hindi: "तिरुपति" },
    "Traditional Naga Dress": { telugu: "సాంప్రదాయ నాగా దుస్తులు", hindi: "पारंपरिक नागा पोशाक" },
    "Traditional Tribal Dress": { telugu: "సాంప్రదాయ గిరిజన దుస్తులు", hindi: "पारंपरिक जनजातीय पोशाक" },
    "Traditional Weaving": { telugu: "సాంప్రదాయ నేత పని", hindi: "पारंपरिक बुनाई" },
    "Tribal Culture": { telugu: "గిరిజన సంస్కృతి", hindi: "जनजातीय संस्कृति" },
    "Tripuri Culture": { telugu: "త్రిపురి సంస్కృతి", hindi: "त्रिपुरी संस्कृति" },
    "Tsomgo Lake": { telugu: "సోంగో సరస్సు", hindi: "त्सोंगमो झील" },
    "Ugadi": { telugu: "ఉగాది", hindi: "उगादी" },
    "Ujjayanta Palace": { telugu: "ఉజ్జయంత ప్యాలెస్", hindi: "उज्जयंता महल" },
    "Vada Pav": { telugu: "వడా పావ్", hindi: "वड़ा पाव" },
    "Varanasi": { telugu: "వారాణసి", hindi: "वाराणसी" },
    "Victoria Memorial": { telugu: "విక్టోరియా స్మారకం", hindi: "विक्टोरिया मेमोरियल" },
    "Wangala": { telugu: "వాంగాలా", hindi: "वांगला" },
    "Warli Painting": { telugu: "వార్లీ పెయింటింగ్", hindi: "वारली पेंटिंग" },
    "Yakshagana": { telugu: "యక్షగానం", hindi: "यक्षगान" },
    "Yaoshang": { telugu: "యావోషాంగ్", hindi: "यावोशांग" },
    "Ziro Valley": { telugu: "జిరో లోయ", hindi: "ज़ीरो घाटी" }

};


/*
   Returns an item's name in the given language, falling
   back to the original English name if no translation
   is on file for it.
*/
function translateItem(item, lang) {

    if (lang === "english") {
        return item;
    }

    const t = itemTranslations[item];

    return (t && t[lang]) ? t[lang] : item;
}


/* =========================================================
   STATE NAME TRANSLATIONS
========================================================= */

const stateNameTranslations = {

    "Andhra Pradesh": { telugu: "ఆంధ్ర ప్రదేశ్", hindi: "आंध्र प्रदेश" },
    "Arunachal Pradesh": { telugu: "అరుణాచల్ ప్రదేశ్", hindi: "अरुणाचल प्रदेश" },
    "Assam": { telugu: "అస్సాం", hindi: "असम" },
    "Bihar": { telugu: "బీహార్", hindi: "बिहार" },
    "Chhattisgarh": { telugu: "ఛత్తీస్‌గఢ్", hindi: "छत्तीसगढ़" },
    "Goa": { telugu: "గోవా", hindi: "गोवा" },
    "Gujarat": { telugu: "గుజరాత్", hindi: "गुजरात" },
    "Haryana": { telugu: "హర్యానా", hindi: "हरियाणा" },
    "Himachal Pradesh": { telugu: "హిమాచల్ ప్రదేశ్", hindi: "हिमाचल प्रदेश" },
    "Jharkhand": { telugu: "జార్ఖండ్", hindi: "झारखंड" },
    "Karnataka": { telugu: "కర్ణాటక", hindi: "कर्नाटक" },
    "Kerala": { telugu: "కేరళ", hindi: "केरल" },
    "Madhya Pradesh": { telugu: "మధ్యప్రదేశ్", hindi: "मध्य प्रदेश" },
    "Maharashtra": { telugu: "మహారాష్ట్ర", hindi: "महाराष्ट्र" },
    "Manipur": { telugu: "మణిపూర్", hindi: "मणिपुर" },
    "Meghalaya": { telugu: "మేఘాలయ", hindi: "मेघालय" },
    "Mizoram": { telugu: "మిజోరాం", hindi: "मिज़ोरम" },
    "Nagaland": { telugu: "నాగాలాండ్", hindi: "नागालैंड" },
    "Odisha": { telugu: "ఒడిశా", hindi: "ओडिशा" },
    "Punjab": { telugu: "పంజాబ్", hindi: "पंजाब" },
    "Rajasthan": { telugu: "రాజస్థాన్", hindi: "राजस्थान" },
    "Sikkim": { telugu: "సిక్కిం", hindi: "सिक्किम" },
    "Tamil Nadu": { telugu: "తమిళనాడు", hindi: "तमिलनाडु" },
    "Telangana": { telugu: "తెలంగాణ", hindi: "तेलंगाना" },
    "Tripura": { telugu: "త్రిపుర", hindi: "त्रिपुरा" },
    "Uttar Pradesh": { telugu: "ఉత్తర ప్రదేశ్", hindi: "उत्तर प्रदेश" },
    "Uttarakhand": { telugu: "ఉత్తరాఖండ్", hindi: "उत्तराखंड" },
    "West Bengal": { telugu: "పశ్చిమ బెంగాల్", hindi: "पश्चिम बंगाल" }

};


/*
   Returns a state's name in the given language, falling
   back to the original English name if not on file.
*/
function translateState(state, lang) {

    if (lang === "english") {
        return state;
    }

    const t = stateNameTranslations[state];

    return (t && t[lang]) ? t[lang] : state;
}


/*
   Joins a list of item names into a natural sentence for
   the given language, translating each name into Telugu
   or Hindi first (falls back to English if a name isn't
   in the dictionary yet).
*/
function joinItemsForLanguage(items, lang) {

    const translated =
        items.map(function (item) {
            return translateItem(item, lang);
        });

    if (translated.length === 1) {
        return translated[0];
    }

    const last = translated[translated.length - 1];
    const rest = translated.slice(0, -1).join(", ");

    const and =
        lang === "telugu" ? "మరియు" :
        lang === "hindi" ? "और" :
        "and";

    return `${rest} ${and} ${last}`;
}


/* =========================================================
   AUTO-GENERATED THEME DESCRIPTIONS
   Builds an English / Telugu / Hindi description for every
   state + theme (category) combination straight from
   heritageData, so every state and every theme is covered.
========================================================= */

const heritageDescriptions = {};

Object.keys(heritageData).forEach(function (state) {

    heritageDescriptions[state] = {};

    Object.keys(categoryNamesMulti).forEach(function (category) {

        const items = (heritageData[state] && heritageData[state][category]) || [];

        const labelEn = categoryNamesMulti[category].english.replace(/^\S+\s/, "");
        const labelTe = categoryNamesMulti[category].telugu.replace(/^\S+\s/, "");
        const labelHi = categoryNamesMulti[category].hindi.replace(/^\S+\s/, "");

        if (items.length === 0) {

            heritageDescriptions[state][category] = {
                english: `Heritage information about the ${labelEn.toLowerCase()} of ${state} is being added soon.`,
                telugu: `${state} యొక్క ${labelTe} గురించి సమాచారం త్వరలో జోడించబడుతుంది.`,
                hindi: `${state} के ${labelHi} के बारे में जानकारी जल्द ही जोड़ी जाएगी।`
            };

            return;
        }

        const itemsEn = joinItemsForLanguage(items, "english");
        const itemsTe = joinItemsForLanguage(items, "telugu");
        const itemsHi = joinItemsForLanguage(items, "hindi");

        heritageDescriptions[state][category] = {

            english: `The ${labelEn.toLowerCase()} of ${state} is beautifully represented by ${itemsEn}, showcasing the state's rich cultural identity.`,

            telugu: `${state} యొక్క ${labelTe}ను ${itemsTe} చక్కగా ప్రతిబింబిస్తాయి, ఇవి రాష్ట్ర గొప్ప సాంస్కృతిక వారసత్వాన్ని చూపిస్తాయి.`,

            hindi: `${state} की ${labelHi} को ${itemsHi} बखूबी दर्शाते हैं, जो राज्य की समृद्ध सांस्कृतिक पहचान को दर्शाते हैं।`
        };
    });
});


/* =========================================================
   ITEM-LEVEL HERITAGE DETAILS
   Deeper, item-specific information layered on top of the
   generic theme description above:
     - food     -> how it's made (recipe) + what it nutritionally offers
     - dance    -> how the dance form came to be
     - festival -> why it's celebrated
     - arts     -> the history behind the craft
     - dress    -> the history behind the garment
     - places   -> the history of the place

   Keyed as "State|category|Item" so the same item name
   (e.g. "Ghagra Choli", "Pongal") never bleeds between
   different states or between a food item and a festival
   that happen to share a name.

   This is being filled in state by state. Any item not yet
   listed here simply falls back to a "coming soon" note in
   getItemDetailHTML() below, so the site keeps working while
   more states are added.
========================================================= */

const itemDetails = {

    // ---------------- ANDHRA PRADESH ----------------
    "Andhra Pradesh|dance|Kuchipudi":
        "Kuchipudi takes its name from the village of Kuchipudi in Krishna district, where it began centuries ago as a dance-drama performed by Brahmin men enacting stories from Hindu mythology. It grew under the patronage of local rulers and temples, and was later codified into the classical solo form widely taught today.",

    "Andhra Pradesh|arts|Kalamkari":
        "Kalamkari is a hand-painted or block-printed textile art going back over 3,000 years; the name comes from the Persian words for 'pen' (kalam) and 'craftsmanship' (kari). Traditionally coloured with natural, vegetable-based dyes, it was used to illustrate scenes from epics like the Ramayana and Mahabharata, flourishing in temple towns such as Srikalahasti and in the trading town of Machilipatnam.",

    "Andhra Pradesh|arts|Kondapalli Toys":
        "These wooden toys are carved from the soft 'Tella Poniki' wood found near Kondapalli village and have been made for generations by the Aryakshatriya artisan community. Traditionally hand-painted with vegetable dyes, they depict village life, animals and mythological figures and were historically sold at temple fairs.",

    "Andhra Pradesh|food|Pulihora":
        {
            recipe: "Cooked rice is tempered with mustard seeds, curry leaves, turmeric, dried red chillies and peanuts, then mixed through with tangy tamarind pulp once the rice has cooled.",
            nutrients: "The rice supplies energy-giving carbohydrates, the tamarind adds vitamin C and antioxidants, the peanuts bring protein and healthy fats, and the turmeric-mustard tempering contributes anti-inflammatory compounds."
        },

    "Andhra Pradesh|food|Gongura Pachadi":
        {
            recipe: "Gongura (sorrel) leaves are sautéed with tempered mustard seeds, garlic and dried red chillies, then ground into a tangy, chutney-like relish.",
            nutrients: "Gongura leaves are a good source of vitamin C, iron and folate — the same sourness that defines the dish also comes with real benefits for immunity and digestion."
        },

    "Andhra Pradesh|dress|Langa Voni":
        "Langa Voni is a traditional half-saree worn by young, unmarried Telugu women — a long skirt (langa) paired with a fitted blouse and a stole (voni) draped across the shoulder. It historically served as a transitional style between children's clothing and the full saree, worn especially at festivals and coming-of-age celebrations.",

    "Andhra Pradesh|festival|Ugadi":
        "Ugadi marks the Telugu New Year and is traditionally believed to be the day Brahma began creation. It's marked by preparing 'ugadi pachadi', a dish that deliberately mixes sweet, sour, bitter, salty and spicy flavours to symbolise the mixed experiences life brings in the year ahead.",

    "Andhra Pradesh|festival|Sankranti":
        "Sankranti is a harvest festival marking the sun's movement into Capricorn (Makar Sankranti), traditionally celebrated to give thanks for a good harvest and for the cattle that helped bring it in. It's marked with kite flying, bonfires and rangoli patterns drawn at doorways.",

    "Andhra Pradesh|places|Tirupati":
        "Tirupati is home to the Venkateswara Temple atop the Tirumala hills, among the most-visited pilgrimage sites in the world. Temple inscriptions show it was expanded over more than a thousand years by successive dynasties, including the Pallavas, Cholas and Vijayanagara rulers.",

    "Andhra Pradesh|places|Araku Valley":
        "This hill valley in the Eastern Ghats has long been home to tribal communities who still practise traditional agriculture and coffee cultivation. Its tribal museum documents the history and everyday life of the local Adivasi groups who have shaped the region.",

    "Andhra Pradesh|places|Amaravati":
        "Amaravati was once a major Buddhist centre on the banks of the Krishna river, home to the Amaravati Stupa first built around the 3rd century BCE under Mauryan patronage and later expanded by the Satavahana dynasty. Today it also serves as the site of Andhra Pradesh's planned new capital.",

    // ---------------- TELANGANA ----------------
    "Telangana|dance|Perini Shivatandavam":
        "Perini Shivatandavam is an ancient warrior dance dedicated to Lord Shiva, historically performed by soldiers of the Kakatiya dynasty before heading into battle. It had nearly disappeared by the 20th century until scholars reconstructed it by studying dance postures carved into the Ramappa and Warangal temples.",

    "Telangana|arts|Cheriyal Paintings":
        "Cheriyal scroll paintings come from Cheriyal village, where they were traditionally used by travelling storytellers to narrate folk tales and epics panel by panel. The style is known for its bold colours and 'Nakashi' craftsmanship, passed down within artisan families for generations.",

    "Telangana|food|Hyderabadi Biryani":
        {
            recipe: "Basmati rice is layered with marinated meat and cooked 'dum' style in a sealed pot with saffron and fried onions, letting the rice and meat slow-steam together so the flavours combine without direct stirring.",
            nutrients: "It provides protein from the meat and carbohydrates from the rice, and spices like saffron and cinnamon add antioxidant compounds — though the ghee and oil used make it fairly calorie-dense."
        },

    "Telangana|food|Sakinalu":
        {
            recipe: "Rice flour dough is mixed with sesame seeds, shaped into spirals, and deep-fried until crisp — traditionally prepared for the Sankranti festival.",
            nutrients: "Sesame seeds contribute calcium and healthy fats, though deep-frying makes this a calorie-rich treat best enjoyed occasionally rather than as an everyday snack."
        },

    "Telangana|dress|Pochampally Saree":
        "These handwoven silk sarees from Pochampally village use the ikat technique, where yarns are tie-dyed in patterns before being woven, producing the fabric's distinctive geometric designs. The craft carries a Geographical Indication tag recognising its origin and technique.",

    "Telangana|festival|Bathukamma":
        "Bathukamma is a floral festival celebrated mainly by the women of Telangana in honour of the goddess Gauri. Flowers are stacked into a conical arrangement and later floated on water, symbolising the renewal of nature and reverence for the goddess.",

    "Telangana|places|Charminar":
        "Charminar was built in 1591 by Sultan Muhammad Quli Qutb Shah to mark both the founding of Hyderabad and the end of a plague in the region. Its four grand arches and minarets have since become the enduring symbol of the city.",

    "Telangana|places|Golconda Fort":
        "Golconda Fort began under the Kakatiya dynasty and was later greatly expanded by the Qutb Shahi rulers. It was historically a centre of the diamond trade — famous stones including the Koh-i-Noor are said to have passed through here — before falling to the Mughals in 1687.",

    // ---------------- TAMIL NADU ----------------
    "Tamil Nadu|dance|Bharatanatyam":
        "One of India's oldest classical dance forms, Bharatanatyam grew out of 'sadir', performed by devadasis in Tamil Nadu's temples and rooted in the principles of the ancient Natya Shastra. It was reshaped and given its modern name in the early 20th century by artists such as Rukmini Devi Arundale.",

    "Tamil Nadu|arts|Tanjore Painting":
        "Tanjore painting is a classical South Indian style from Thanjavur that flourished under Maratha court patronage in the 16th-17th centuries. It's known for rich colours, gold-foil relief work, and depictions of Hindu deities set with gem-like inlays.",

    "Tamil Nadu|food|Pongal":
        {
            recipe: "Rice and lentils are cooked together with ghee, cumin, pepper and cashews for the savoury 'ven pongal', or with jaggery and milk for the sweet version — traditionally cooked in a clay pot until it overflows, a symbol of abundance.",
            nutrients: "The rice-lentil combination gives balanced carbohydrates and protein, the ghee adds healthy fats, and the pepper and cumin are traditionally valued for aiding digestion."
        },

    "Tamil Nadu|food|Idli":
        {
            recipe: "A batter of rice and urad dal is left to ferment, then steamed in moulds into soft, spongy cakes.",
            nutrients: "Fermentation increases the batter's B-vitamin content and makes it easier to digest, while the rice-lentil pairing provides balanced protein and carbohydrates; steaming (rather than frying) keeps the dish low in fat."
        },

    "Tamil Nadu|dress|Kanchipuram Saree":
        "Kanchipuram silk sarees have been woven in the temple town of Kanchipuram since around the 4th century CE, with the craft historically patronised by Chola kings. They're recognised by their thick silk, wide contrasting borders, and motifs drawn from temple architecture and mythology.",

    "Tamil Nadu|festival|Pongal":
        "Pongal is a harvest festival giving thanks to the Sun God and to cattle for a bountiful harvest. Celebrated over four days — including 'Mattu Pongal', which honours cattle — it marks the start of the Tamil month of Thai.",

    "Tamil Nadu|places|Meenakshi Temple":
        "The Meenakshi Temple in Madurai, dedicated to Goddess Meenakshi, has origins going back over a thousand years and was largely rebuilt into its present form during the 16th-17th century Nayak dynasty, renowned for its towering, sculpture-covered gopurams.",

    "Tamil Nadu|places|Mahabalipuram":
        "A UNESCO World Heritage port town developed under the Pallava dynasty in the 7th-8th centuries, Mahabalipuram is known for rock-cut monuments such as the Shore Temple and the monolithic Pancha Rathas carved directly from single boulders.",

    // ---------------- KARNATAKA ----------------
    "Karnataka|dance|Yakshagana":
        "Yakshagana is a traditional dance-drama from coastal Karnataka blending dance, music, dialogue and elaborate costumes. It's believed to have grown out of temple ritual theatre centuries ago, and traditional performances run through the night, narrating episodes from the Hindu epics.",

    "Karnataka|arts|Mysore Painting":
        "Mysore painting is a classical South Indian style that flourished under the patronage of the Mysore Wodeyar kings, distinguished by intricate detailing, graceful depictions of Hindu deities, and delicate gold-leaf work.",

    "Karnataka|food|Bisi Bele Bath":
        {
            recipe: "Rice, lentils and mixed vegetables are cooked together with a spiced 'bisi bele bath' masala of tamarind, dried chillies and coriander seeds, then finished with a ghee-and-cashew tempering.",
            nutrients: "It combines carbohydrates from the rice, protein from the lentils, and fibre and vitamins from the vegetables, making it a fairly balanced one-pot meal."
        },

    "Karnataka|food|Mysore Pak":
        {
            recipe: "Gram flour (besan), ghee and sugar are cooked together until they set into a rich, crumbly fudge-like sweet — said to have first been made in the kitchens of the Mysore palace.",
            nutrients: "Gram flour contributes some protein, though the generous ghee and sugar make this a calorie-dense sweet best treated as an occasional indulgence."
        },

    "Karnataka|dress|Mysore Silk Saree":
        "Mysore silk sarees are woven from pure silk, an industry that grew under the patronage of the Wodeyar kings and later the state-run Karnataka Silk Industries Corporation, prized for their lightweight texture and rich, solid colours.",

    "Karnataka|festival|Mysore Dasara":
        "Mysore Dasara is Karnataka's state festival, celebrating the goddess Chamundeshwari's victory over the demon Mahishasura. Historically patronised by the Wodeyar dynasty, it's marked today by the illumination of Mysore Palace and a grand closing procession.",

    "Karnataka|places|Hampi":
        "Hampi was the capital of the Vijayanagara Empire from the 14th to 16th centuries, once among the richest cities in the world. It's now a UNESCO World Heritage Site with ruins of temples, royal complexes and old market streets.",

    "Karnataka|places|Mysore Palace":
        "The royal residence of the Wodeyar dynasty, the current Mysore Palace was built in the early 1900s after fire destroyed the earlier wooden palace, blending Hindu, Islamic, Rajput and Gothic architectural elements.",

    "Karnataka|places|Coorg":
        "Coorg was historically ruled by the Kodava dynasty before being annexed by the British in the 19th century, who introduced the coffee plantations the region is now known for, alongside its distinct Kodava martial traditions.",

    // ---------------- RAJASTHAN ----------------
    "Rajasthan|dance|Ghoomar":
        "Ghoomar began as a folk dance of the Bhil tribe and was later adopted by Rajput women, performed in swirling ghagra skirts. It was traditionally danced to welcome a new bride into the family and to honour local deities.",

    "Rajasthan|dance|Kalbelia":
        "Kalbelia is danced by the Kalbelia (snake-charmer) community of Rajasthan, its swaying, serpentine movements drawn from their traditional occupation. UNESCO has recognised it as an Intangible Cultural Heritage of Humanity.",

    "Rajasthan|arts|Phad Painting":
        "Phad is a scroll-painting tradition used by Bhopa priest-singers to narrate the folk legends of local deities such as Pabuji and Devnarayan. Painted on long cloth scrolls, they were historically carried from village to village and unrolled during night-long recitations.",

    "Rajasthan|food|Dal Baati Churma":
        {
            recipe: "Baati (baked balls of wheat dough) are served with spiced dal (lentils) and churma (crushed wheat sweetened with ghee and sugar); the baati were traditionally baked over hot coals or desert sand.",
            nutrients: "Wheat and lentils provide carbohydrates and plant protein, while the ghee adds fat-soluble vitamins — making it energy-dense food well suited to the region's hot, arid climate."
        },

    "Rajasthan|dress|Ghagra Choli":
        "This ensemble of a long flared skirt (ghagra), fitted blouse (choli) and veil (odhni) is historically associated with Rajasthan's Rajput royal courts, traditionally adorned with mirror work and embroidery that reflect the desert region's craft traditions.",

    "Rajasthan|festival|Gangaur":
        "Gangaur is celebrated by Rajasthani women in honour of Gauri (Parvati), symbolising marital devotion and prosperity — married women pray for their husbands' wellbeing and unmarried women for a good match — marked by processions carrying idols of Gauri and Isar (Shiva).",

    "Rajasthan|places|Hawa Mahal":
        "Built in 1799 by Maharaja Sawai Pratap Singh in Jaipur, Hawa Mahal's honeycomb facade of 953 small windows (jharokhas) let royal women watch street life below while remaining unseen themselves, in keeping with purdah customs of the time.",

    "Rajasthan|places|Amber Fort":
        "Construction began in the late 16th century under Raja Man Singh I, a Rajput ruler allied with the Mughals, blending Hindu and Mughal architectural styles. It served as the seat of the Kachwaha rulers before the capital later moved to Jaipur.",

    "Rajasthan|places|Jaisalmer Fort":
        "One of the few 'living forts' in the world, Jaisalmer Fort was built in 1156 by the Rajput ruler Rawal Jaisal. Its yellow sandstone walls still enclose an inhabited town, and it historically sat on trade routes linking India with Central Asia.",

    // ---------------- MAHARASHTRA ----------------
    "Maharashtra|dance|Lavani":
        "Lavani is a folk dance and song tradition performed by women in a distinctive nine-yard saree, historically popular as entertainment for soldiers during the Peshwa era, known for its powerful footwork and expressive storytelling.",

    "Maharashtra|dance|Tamasha":
        "Tamasha is a traditional Marathi folk theatre form blending dance, music and comic storytelling. It developed around the 16th century as entertainment for soldiers and villagers and later grew into a structured theatrical art carrying social and satirical themes.",

    "Maharashtra|arts|Warli Painting":
        "Warli painting is a tribal art form of the Warli people, traditionally painted on mud walls with a simple white rice-paste pigment against a red-ochre background. Rather than depicting deities, it has for centuries shown scenes of daily life, harvest and ritual.",

    "Maharashtra|food|Vada Pav":
        {
            recipe: "A spiced, mashed-potato fritter (vada) is deep-fried in a gram flour batter and served inside a soft bread bun (pav) with garlic and tamarind chutneys — it began as an inexpensive street food for mill workers in 1960s Mumbai.",
            nutrients: "The potato filling supplies carbohydrates and the gram flour batter adds some protein, though deep-frying makes it fairly calorie-rich — the chutneys add some balance with their lighter ingredients."
        },

    "Maharashtra|food|Puran Poli":
        {
            recipe: "A sweet flatbread is stuffed with a filling of cooked chana dal and jaggery flavoured with cardamom, then rolled thin and cooked on a griddle with ghee — traditionally made for festival occasions.",
            nutrients: "Chana dal contributes protein and fibre, jaggery offers more iron than refined sugar, and the ghee adds richness — best enjoyed in moderation given its calorie density."
        },

    "Maharashtra|dress|Nauvari Saree":
        "The nine-yard Nauvari saree is traditionally draped in a dhoti-like style that allows freedom of movement, historically worn by Maharashtrian women — including during the Maratha era — for its practicality during work and even on horseback.",

    "Maharashtra|festival|Ganesh Chaturthi":
        "Ganesh Chaturthi marks the birth of Lord Ganesha. It was turned into a large public festival in the late 19th century by freedom fighter Bal Gangadhar Tilak, who used the religious occasion to unite people against British rule — it's now marked by elaborate public pandals and idol-immersion processions.",

    "Maharashtra|places|Gateway of India":
        "Built to commemorate King George V and Queen Mary's 1911 visit to India and completed in 1924 in Indo-Saracenic style, the Gateway of India later became the ceremonial entry point for viceroys — and the spot where the last British troops departed India in 1948.",

    "Maharashtra|places|Ajanta Caves":
        "The Ajanta Caves are Buddhist rock-cut monuments dating from around the 2nd century BCE to about 480 CE, celebrated for paintings and sculptures depicting the Jataka tales. They lay abandoned for centuries until a British officer rediscovered them in 1819.",

    "Maharashtra|places|Ellora Caves":
        "A UNESCO World Heritage complex of Buddhist, Hindu and Jain rock-cut temples carved between the 6th and 10th centuries CE, Ellora is most famous for the Kailasa temple — carved from a single rock — commissioned by the Rashtrakuta dynasty.",

    // ---------------- KERALA ----------------
    "Kerala|dance|Kathakali":
        "Kathakali developed in Kerala around the 17th century, blending temple dance-drama traditions like Krishnanattam with martial movements from Kalaripayattu. Performers use elaborate makeup and costumes to portray characters from the Ramayana and Mahabharata, communicating through codified hand gestures (mudras) and facial expressions rather than spoken dialogue.",

    "Kerala|dance|Mohiniyattam":
        "Mohiniyattam, meaning 'dance of the enchantress', takes its name from the story of Vishnu's Mohini avatar. It developed in Kerala's temple courts alongside Kathakali, and after falling out of favour in the 19th century, it was revived in the early 20th century with support from the Travancore royal family and the poet Vallathol Narayana Menon.",

    "Kerala|arts|Mural Painting":
        "Kerala's mural tradition goes back over a thousand years, decorating temple and palace walls with scenes from Hindu mythology using natural pigments drawn from minerals, plants and charcoal. The style is known for its dense compositions and dominant reds, yellows and greens.",

    "Kerala|food|Appam":
        {
            recipe: "A fermented batter of rice and coconut is poured into a small curved pan and swirled by hand, cooking into a bowl-shaped pancake with a soft, spongy centre and thin, lacy crisp edges.",
            nutrients: "Rice provides carbohydrates, fermentation adds beneficial probiotics and boosts B-vitamin content, and the coconut contributes healthy fats."
        },

    "Kerala|food|Sadya":
        {
            recipe: "A vegetarian feast served on a banana leaf, featuring rice alongside an array of curries, sambar, rasam, pickles and payasam (a sweet dessert) — traditionally prepared for Onam and other celebrations.",
            nutrients: "The wide variety of vegetables and lentils together provide fibre, protein and a broad range of vitamins, making it a well-rounded meal despite its size."
        },

    "Kerala|dress|Kasavu Saree":
        "The Kasavu saree is woven from off-white cotton with a gold zari-thread border, rooted in Kerala's historic handloom traditions. The gold ('kasavu') border traditionally signified purity and was worn for temple visits and festivals such as Onam.",

    "Kerala|festival|Onam":
        "Onam celebrates the mythical homecoming of King Mahabali, a benevolent ruler believed to visit his people once a year, and also marks the rice harvest season. It's celebrated with flower carpets (pookalam), snake-boat races, and the elaborate Onasadya feast.",

    "Kerala|places|Alleppey":
        "Known as the 'Venice of the East,' Alleppey grew into a major port and spice-trading hub in the 18th century under Diwan Raja Kesavadas, and its network of backwaters and canals remains central to its identity and houseboat tourism today.",

    "Kerala|places|Munnar":
        "Munnar rose to prominence as a hill station and tea-growing region developed by British planters in the late 19th century, drawn in by its cool climate — its rolling tea estates remain a defining part of the landscape.",

    "Kerala|places|Padmanabhaswamy Temple":
        "This Thiruvananthapuram temple dedicated to Vishnu has been referenced in texts for over a thousand years and was rebuilt in its current Dravidian style by the Travancore royal family in the 18th century, later drawing global attention when hidden vaults revealed vast historic treasure.",

    // ---------------- PUNJAB ----------------
    "Punjab|dance|Bhangra":
        "Bhangra began as a harvest-time folk dance performed by Punjabi farmers to celebrate Baisakhi, its energetic, drum-driven movements rooted in agricultural life. It later spread worldwide through the Punjabi diaspora and fused with global music genres.",

    "Punjab|dance|Giddha":
        "Giddha is a traditional dance performed by Punjabi women, evolved from an older circular 'ring dance,' featuring rhythmic clapping and witty verses called 'bolis' that comment on everyday life, relationships and social issues.",

    "Punjab|arts|Phulkari":
        "Phulkari, meaning 'flower work,' is an embroidery tradition where geometric floral patterns are darned onto coarse cotton cloth using silk thread. Historically made by mothers and grandmothers as part of a bride's trousseau, it has been practiced in rural Punjab for centuries.",

    "Punjab|food|Sarson da Saag":
        {
            recipe: "Mustard greens are slow-cooked with spinach, ginger and garlic, then mashed and simmered until thick, traditionally finished with a dollop of ghee or butter.",
            nutrients: "Mustard greens and spinach are rich in iron, vitamin A, vitamin C and fibre, though the added ghee or butter increases the dish's fat content."
        },

    "Punjab|food|Makki di Roti":
        {
            recipe: "Cornmeal (maize flour) dough is kneaded and hand-patted into flatbreads, then cooked on a griddle — traditionally paired with Sarson da Saag.",
            nutrients: "Corn flour is a good source of fibre and provides complex carbohydrates along with some B vitamins."
        },

    "Punjab|dress|Punjabi Suit":
        "The Punjabi suit (salwar kameez with a dupatta) evolved from clothing traditions carried into Punjab by Central Asian and Persian influences centuries ago, gradually becoming the region's everyday and festive attire for women, valued for its comfort and ease of movement.",

    "Punjab|festival|Baisakhi":
        "Baisakhi marks the Punjabi solar new year and the wheat harvest, and holds deep significance for Sikhs as the day in 1699 when Guru Gobind Singh founded the Khalsa Panth. It's celebrated with Bhangra, Giddha and community processions.",

    "Punjab|places|Golden Temple":
        "The Golden Temple (Harmandir Sahib) in Amritsar was founded by the fourth Sikh Guru, Guru Ram Das, in the late 16th century, with its foundation stone said to have been laid by a Muslim Sufi saint. It was gilded with gold under Maharaja Ranjit Singh in the early 19th century and remains Sikhism's holiest shrine.",

    "Punjab|places|Jallianwala Bagh":
        "This walled public garden in Amritsar was the site of the 1919 massacre where British troops under General Dyer fired on a peaceful gathering, killing hundreds. It stands today as a memorial and a turning point that galvanised India's independence movement.",

    // ---------------- GUJARAT ----------------
    "Gujarat|dance|Garba":
        "Garba originated as a devotional dance performed around a lit lamp or image of the goddess Amba during Navratri, its circular formation symbolising the cycle of life. Over time it evolved from a purely religious ritual into a widely popular social dance form.",

    "Gujarat|dance|Dandiya":
        "Dandiya Raas is danced with decorated sticks and is traditionally linked to depictions of Krishna and Radha's playful mock battles, performed alongside Garba during Navratri nights as a livelier, more energetic counterpart.",

    "Gujarat|arts|Bandhani":
        "Bandhani is a tie-dye textile art where cloth is tightly tied at numerous points before dyeing to create intricate dot patterns. The technique in Gujarat and Rajasthan dates back centuries and was historically practiced by the Khatri community, often forming part of bridal trousseaus.",

    "Gujarat|food|Dhokla":
        {
            recipe: "A fermented batter of gram flour (besan) is steamed into soft, spongy cakes, then tempered with mustard seeds, curry leaves and a touch of sugar-lemon syrup.",
            nutrients: "Gram flour is high in protein and fibre, and fermentation improves digestibility and boosts B-vitamin content, while steaming keeps the dish low in fat."
        },

    "Gujarat|food|Thepla":
        {
            recipe: "Whole wheat flour is kneaded with fenugreek leaves, yogurt and spices into a soft dough, rolled thin and pan-fried with a little oil — a favourite for travel since it keeps well for days.",
            nutrients: "Fenugreek leaves add iron and fibre, whole wheat provides complex carbohydrates, and yogurt contributes protein and probiotics."
        },

    "Gujarat|dress|Chaniya Choli":
        "The Chaniya Choli, a flared skirt paired with a fitted blouse, is closely associated with Gujarat's Navratri celebrations, its embroidered, mirror-worked designs drawing on the state's traditional Kutch and Kathiawar craft techniques.",

    "Gujarat|festival|Navratri":
        "Navratri honours the goddess Durga over nine nights, commemorating her victory over the demon Mahishasura. In Gujarat, it's celebrated with nightly Garba and Dandiya dancing that draws whole communities together in open grounds.",

    "Gujarat|places|Statue of Unity":
        "Inaugurated in 2018, this statue depicts Sardar Vallabhbhai Patel, the independence-era leader who unified India's princely states after 1947. At 182 metres, it's among the tallest statues in the world, built to honour his role in the country's political integration.",

    "Gujarat|places|Rann of Kutch":
        "This vast salt marsh has long sat along ancient trade routes and was historically part of a shallow sea before geological shifts left it as the seasonal wetland it is today. It's also home to the annual Rann Utsav festival celebrating local Kutchi culture.",

    // ---------------- WEST BENGAL ----------------
    "West Bengal|dance|Chhau":
        "Chhau is a semi-classical dance form combining martial arts, acrobatics and elements of tribal and folk tradition from the eastern region spanning West Bengal, Odisha and Jharkhand. Performers historically wore masks representing gods, animals and mythological characters, with regional styles shaped by local royal patronage.",

    "West Bengal|dance|Gambhira":
        "Gambhira began as a ritual dance-drama linked to Shiva worship in the Malda region, later evolving into a folk theatre form where performers use dialogue and satire to comment on the social and political issues of the day.",

    "West Bengal|arts|Kalighat Painting":
        "Kalighat painting emerged in 19th-century Kolkata near the Kalighat temple, initially depicting religious themes for pilgrims before evolving into bold, satirical works commenting on colonial-era society, known for their fluid brushwork and flat colour fields.",

    "West Bengal|food|Rasgulla":
        {
            recipe: "Fresh chhena (curdled milk cheese) is kneaded smooth, shaped into balls, and boiled in sugar syrup until they turn soft and spongy, soaking up the syrup.",
            nutrients: "Chhena provides protein and calcium from the milk, though the sugar syrup adds significant carbohydrates, making it more of an occasional sweet than an everyday food."
        },

    "West Bengal|food|Macher Jhol":
        {
            recipe: "Fish is lightly fried, then simmered in a light, turmeric-spiced broth with potatoes and vegetables — a staple of everyday Bengali cooking.",
            nutrients: "Fish provides high-quality protein and omega-3 fatty acids, while turmeric contributes anti-inflammatory compounds, making this a comparatively light, nutrient-dense dish."
        },

    "West Bengal|dress|Tant Saree":
        "Tant sarees are woven from fine cotton on traditional handlooms in Bengal, valued for their lightweight, breathable weave suited to the region's humid climate. The craft has been passed down through generations of weaver communities for centuries.",

    "West Bengal|festival|Durga Puja":
        "Durga Puja celebrates the goddess Durga's victory over the buffalo demon Mahishasura, symbolising the triumph of good over evil. Elaborate pandals and artistically crafted idols are installed across Bengal before being ceremonially immersed in water.",

    "West Bengal|places|Victoria Memorial":
        "Built between 1906 and 1921 in memory of Queen Victoria, this white marble monument in Kolkata was commissioned by Lord Curzon and blends British and Mughal architectural styles, now housing a museum on the city's colonial history.",

    "West Bengal|places|Sundarbans":
        "The Sundarbans is the world's largest mangrove forest, formed by sediment carried by the Ganges, Brahmaputra and Meghna rivers. It has long supported fishing and honey-gathering communities and is home to the Bengal tiger, earning it UNESCO World Heritage status.",

    // ---------------- ODISHA ----------------
    "Odisha|dance|Odissi":
        "Odissi is one of India's oldest classical dance forms, with origins traced to temple carvings and texts over a thousand years old depicting dance postures in Odisha's temples. After a decline during colonial rule, it was revived and reconstructed in the mid-20th century by scholars and gurus studying ancient sculptures.",

    "Odisha|arts|Pattachitra":
        "Pattachitra is a cloth-based scroll painting tradition from Odisha going back centuries, historically created by artists (chitrakars) to depict stories of Jagannath and Hindu mythology, painted with natural pigments on cloth stiffened with tamarind paste and chalk.",

    "Odisha|food|Dalma":
        {
            recipe: "Lentils are cooked together with mixed vegetables like pumpkin, raw banana and brinjal, tempered with panch phoron (a five-spice blend) and a touch of ghee.",
            nutrients: "The lentils provide protein and the mixed vegetables add fibre and vitamins, making it a wholesome, well-balanced dish."
        },

    "Odisha|food|Pakhala Bhata":
        {
            recipe: "Cooked rice is soaked in water (or left to ferment overnight) and served with curd, typically accompanied by fried vegetables or fish.",
            nutrients: "The fermentation introduces beneficial probiotics and makes the rice easier to digest, and it's traditionally valued for its cooling effect in hot weather."
        },

    "Odisha|dress|Sambalpuri Saree":
        "Sambalpuri sarees are handwoven using the ikat technique, where threads are tie-dyed before weaving to create traditional motifs like the shankha (conch) and chakra (wheel). The craft has been practiced in the Sambalpur region for generations and carries a Geographical Indication tag.",

    "Odisha|festival|Rath Yatra":
        "Rath Yatra is the annual chariot festival of Lord Jagannath in Puri, in which the deity and his siblings are taken out in massive wooden chariots pulled by devotees — believed to give even those unable to enter the temple a chance to receive the god's blessing.",

    "Odisha|places|Konark Sun Temple":
        "Built in the 13th century under King Narasimhadeva I of the Eastern Ganga dynasty, the Konark temple is designed as a colossal stone chariot for the sun god Surya, with 24 carved wheels, and stands as one of India's finest examples of temple architecture.",

    "Odisha|places|Jagannath Temple":
        "The Jagannath Temple in Puri, dedicated to Lord Jagannath (a form of Vishnu), was built in its current form in the 12th century by King Anantavarman Chodaganga Deva and remains one of the four principal 'Char Dham' pilgrimage sites in Hinduism.",

    // ---------------- UTTAR PRADESH ----------------
    "Uttar Pradesh|dance|Kathak":
        "Kathak developed from the tradition of 'kathakars,' storytellers in northern Indian temples who used gesture and expression to narrate mythological tales. It was later refined in Mughal and Nawabi courts, particularly in Lucknow, blending temple roots with Persian court influences into the intricate footwork and spins seen today.",

    "Uttar Pradesh|arts|Chikankari":
        "Chikankari is a delicate white-thread embroidery tradition centred in Lucknow, said to have been introduced or popularised during the Mughal era, historically worked onto fine muslin and cotton using techniques passed down through generations of artisan families.",

    "Uttar Pradesh|food|Awadhi Biryani":
        {
            recipe: "Basmati rice and marinated meat are layered and cooked in the 'dum pukht' style — sealed and slow-cooked over low heat — a technique refined in the kitchens of Lucknow's Nawabs, relying on subtle spicing rather than heavy heat.",
            nutrients: "It provides protein from the meat and carbohydrates from the rice, with fragrant spices like saffron and mace, though the ghee used adds to its calorie content."
        },

    "Uttar Pradesh|food|Petha":
        {
            recipe: "Ash gourd (white pumpkin) is boiled, soaked in lime water for firmness, then cooked in sugar syrup until translucent — a specialty long associated with the city of Agra.",
            nutrients: "Ash gourd itself is low in calories and provides some fibre, though the sugar syrup used in preparation makes the finished sweet fairly high in sugar."
        },

    "Uttar Pradesh|dress|Chikankari Kurta":
        "The Chikankari kurta features Lucknow's traditional white-thread embroidery on cotton or muslin fabric, a craft associated with Mughal-era patronage that has remained a hallmark of the city's textile heritage for centuries.",

    "Uttar Pradesh|festival|Holi":
        "Holi celebrates the arrival of spring and the triumph of good over evil, drawing on the legend of Prahlad and Holika. It's marked by the joyous throwing of coloured powders and water, and Mathura-Vrindavan (in UP) hold some of the most elaborate celebrations tied to the legends of Krishna.",

    "Uttar Pradesh|festival|Diwali":
        "Diwali, the festival of lights, commemorates Lord Rama's return to Ayodhya (in Uttar Pradesh) after 14 years of exile and his victory over Ravana. Homes are lit with diyas and lamps to symbolise the triumph of light over darkness.",

    "Uttar Pradesh|places|Taj Mahal":
        "Commissioned in 1632 by Mughal emperor Shah Jahan as a mausoleum for his wife Mumtaz Mahal, the Taj Mahal took around two decades to complete and is regarded as one of the finest examples of Mughal architecture — now a UNESCO World Heritage Site and one of the New7Wonders of the World.",

    "Uttar Pradesh|places|Varanasi":
        "Varanasi is among the oldest continuously inhabited cities in the world, with a religious and cultural history along the Ganges stretching back thousands of years. Its ghats have long been a centre for Hindu ritual bathing, cremation rites and spiritual learning.",

    "Uttar Pradesh|places|Fatehpur Sikri":
        "Built by Mughal emperor Akbar in the late 16th century as his capital, Fatehpur Sikri was abandoned within about 15 years, likely due to water shortages, leaving behind a remarkably well-preserved complex of red sandstone palaces, courtyards and the grand Buland Darwaza gateway.",

    // ---------------- MADHYA PRADESH ----------------
    "Madhya Pradesh|dance|Matki":
        "Matki is a folk dance from the Malwa region in which women balance an earthen pot (matki) on their heads while dancing, traditionally performed during festivals and celebratory occasions to display grace and balance.",

    "Madhya Pradesh|dance|Rai":
        "Rai is a folk dance from the Bundelkhand region traditionally performed by women of the Bedni community, known for its swift twirls and expressive gestures, historically danced at village fairs and festive gatherings.",

    "Madhya Pradesh|arts|Gond Painting":
        "Gond painting is a tribal art form created by the Gond community of central India, traditionally painted on mud walls with natural colours from charcoal, cow dung and plant extracts to depict nature, animals and folklore. Contemporary Gond art gained wider recognition in the late 20th century through the artist Jangarh Singh Shyam.",

    "Madhya Pradesh|food|Poha":
        {
            recipe: "Flattened rice is lightly rinsed, then sautéed with mustard seeds, curry leaves, turmeric, onions and peanuts, and finished with a squeeze of lemon and fresh coriander.",
            nutrients: "Flattened rice is a light source of carbohydrates, peanuts add protein and healthy fats, and the lemon contributes vitamin C."
        },

    "Madhya Pradesh|food|Bhutte Ka Kees":
        {
            recipe: "Grated corn is cooked with milk, mustard seeds and spices into a soft, slightly sweet-savoury dish — a Madhya Pradesh specialty.",
            nutrients: "Corn provides fibre and complex carbohydrates along with some B vitamins, while the milk adds calcium and protein."
        },

    "Madhya Pradesh|dress|Chanderi Saree":
        "Chanderi sarees are woven in Chanderi town from a blend of silk and cotton, a weaving tradition going back several centuries and historically patronised by Malwa and Bundela rulers, known for their sheer texture and delicate motifs.",

    "Madhya Pradesh|festival|Khajuraho Dance Festival":
        "This week-long festival was established in the 1970s to showcase India's classical dance forms against the backdrop of the Khajuraho temples, reviving public appreciation for classical dance and drawing performers from across the country.",

    "Madhya Pradesh|places|Khajuraho":
        "The Khajuraho temples were built between the 9th and 11th centuries by the Chandela dynasty, renowned for their intricate sculptural work depicting scenes of daily life, spirituality and eroticism, and are now a UNESCO World Heritage Site.",

    "Madhya Pradesh|places|Sanchi Stupa":
        "The Sanchi Stupa was commissioned by Emperor Ashoka in the 3rd century BCE to house relics of the Buddha, later expanded with elaborately carved gateways (toranas) under the Sunga dynasty, making it one of the oldest stone structures in India.",

    // ---------------- ASSAM ----------------
    "Assam|dance|Bihu":
        "Bihu dance is performed during Assam's Bihu festivals, its energetic movements traditionally linked to agricultural cycles and courtship rituals between young men and women, accompanied by traditional drums (dhol) and pipes (pepa).",

    "Assam|arts|Muga Silk":
        "Muga silk is a golden-hued silk unique to Assam, produced from silkworms fed on local Som and Sualu leaves. The craft has been practiced in the region for centuries and was historically reserved for royal families and nobility due to its rarity and durability.",

    "Assam|food|Khar":
        {
            recipe: "Raw papaya, pulses and vegetables are cooked with an alkaline filtrate made from sun-dried banana peel ash, which gives the dish its distinctive taste — traditionally eaten as the first course of an Assamese meal.",
            nutrients: "The alkaline khar is traditionally believed to aid digestion, while the vegetables and pulses provide fibre and plant protein."
        },

    "Assam|food|Masor Tenga":
        {
            recipe: "Fish is simmered in a light, tangy broth flavoured with tomatoes or elephant apple/lemon, with minimal spice so the fish's own flavour comes through.",
            nutrients: "Fish provides protein and omega-3 fatty acids, the sour ingredients add vitamin C, and the light broth keeps the dish low in fat."
        },

    "Assam|dress|Mekhela Chador":
        "The Mekhela Chador is a traditional two-piece garment of Assamese women, made up of a wraparound skirt (mekhela) and a draped upper cloth (chador), traditionally woven from Muga or Pat silk and worn for centuries during festivals like Bihu.",

    "Assam|festival|Bihu":
        "Bihu is celebrated three times a year, marking different points in the agricultural calendar — Rongali Bihu welcomes the Assamese New Year and spring sowing, Kongali Bihu reflects a leaner harvest period, and Bhogali Bihu celebrates the harvest — each marked with feasting, dance and community bonfires.",

    "Assam|places|Kaziranga National Park":
        "Established as a forest reserve in 1905 at the initiative of Mary Curzon after she failed to spot a rhinoceros on a visit, Kaziranga became a National Park in 1974 and is now renowned as a stronghold for the conservation of the one-horned rhinoceros.",

    "Assam|places|Kamakhya Temple":
        "The Kamakhya Temple in Guwahati is one of the oldest Shakti temples in India, its present structure dating to the 16th century after being rebuilt following earlier destruction, and it remains a major centre of Tantric worship and pilgrimage.",

    // ---------------- BIHAR ----------------
    "Bihar|dance|Jat-Jatin":
        "Jat-Jatin is a traditional folk dance-duet from Bihar performed by a pair of dancers portraying a married couple, using song and dialogue to reflect on themes of rural life, love and social commentary.",

    "Bihar|arts|Madhubani Painting":
        "Madhubani painting originated in the Mithila region of Bihar, traditionally created by women on the walls and floors of homes for festivals and weddings using natural dyes and pigments. It gained wider recognition after a 1934 earthquake exposed these wall paintings to a visiting British officer.",

    "Bihar|food|Litti Chokha":
        {
            recipe: "Balls of wheat dough stuffed with roasted gram flour (sattu) are baked over coals, then served with chokha — a mash of roasted eggplant, tomato and potato seasoned with mustard oil and spices.",
            nutrients: "Sattu is high in protein and fibre, and the roasted vegetable chokha adds vitamins with minimal added fat."
        },

    "Bihar|dress|Dhoti Kurta":
        "The dhoti kurta is a traditional men's garment worn across Bihar, consisting of an unstitched draped lower cloth (dhoti) and a loose upper tunic (kurta) — practical for the region's climate and rooted in centuries-old Indian draped-clothing traditions.",

    "Bihar|dress|Saree":
        "The saree, worn across Bihar in regional weaving styles, is one of the subcontinent's oldest garments, its draped, unstitched form referenced in texts and sculpture going back over two thousand years.",

    "Bihar|festival|Chhath Puja":
        "Chhath Puja is dedicated to the Sun God (Surya) and his sister Chhathi Maiya, giving thanks for sustaining life on Earth. Devotees fast and offer prayers standing in water at sunrise and sunset over four days, a tradition rooted in ancient Vedic sun worship.",

    "Bihar|places|Mahabodhi Temple":
        "The Mahabodhi Temple in Bodh Gaya marks the site where Siddhartha Gautama is believed to have attained enlightenment under the Bodhi tree. The temple traces its origins to around the 3rd century BCE under Emperor Ashoka and was rebuilt in its current form in the 5th-6th century CE.",

    "Bihar|places|Nalanda":
        "Nalanda was one of the world's earliest residential universities, founded around the 5th century CE and flourishing under Gupta patronage, drawing scholars from across Asia to study Buddhist philosophy, logic and science before being destroyed in the 12th century.",

    // ---------------- GOA ----------------
    "Goa|dance|Fugdi":
        "Fugdi is a traditional Goan folk dance performed by women in a circular formation, often without musical instruments, relying instead on rhythmic clapping and folk songs, traditionally performed during festivals and religious occasions.",

    "Goa|dance|Dhalo":
        "Dhalo is a Goan folk dance performed by women during winter nights, historically linked to agricultural and harvest-related rituals, accompanied by folk songs sung in a call-and-response style.",

    "Goa|arts|Azulejo Art":
        "Azulejo tilework was introduced to Goa during Portuguese colonial rule, drawing on the Portuguese and Moorish tradition of hand-painted ceramic tiles, and became a decorative feature of Goan churches, homes and street signs.",

    "Goa|food|Goan Fish Curry":
        {
            recipe: "Fish is simmered in a coconut-based gravy flavoured with tamarind, red chillies and local spices — a dish shaped by Goa's coastal geography and its Portuguese-era spice trade.",
            nutrients: "Fish provides protein and omega-3 fatty acids, coconut milk adds healthy fats, and tamarind contributes vitamin C."
        },

    "Goa|food|Bebinca":
        {
            recipe: "A layered dessert made by alternating thin layers of coconut-milk batter, baking each layer individually before adding the next — a technique introduced during Portuguese colonial rule.",
            nutrients: "Coconut milk provides fats and some minerals, though the multiple layers of sugar and egg yolk make this a rich, calorie-dense dessert."
        },

    "Goa|dress|Kunbi Saree":
        "The Kunbi saree is a simple cotton saree traditionally worn by the Kunbi tribal community, Goa's earliest agricultural settlers, historically checkered in red and cream and tied without a blouse or petticoat for ease during farm work.",

    "Goa|festival|Goa Carnival":
        "The Goa Carnival traces its roots to Portuguese colonial celebrations held before the Christian fasting season of Lent, marked today by parades, floats, music and dance across Goa's cities as a colourful, four-day street festival.",

    "Goa|places|Basilica of Bom Jesus":
        "Completed in 1605, this UNESCO World Heritage church in Old Goa holds the mortal remains of St. Francis Xavier and is one of the finest examples of Baroque architecture in Goa, built during Portuguese colonial rule.",

    "Goa|places|Fort Aguada":
        "Built by the Portuguese in 1612, Fort Aguada was constructed to defend against Dutch and Maratha naval attacks and to guard the entrance to the Mandovi river, and included a fresh-water source that gave the fort its name ('agua' meaning water).",

    // ---------------- HARYANA ----------------
    "Haryana|dance|Dhamal":
        "Dhamal is an energetic folk dance from Haryana traditionally performed by men during harvest celebrations and festivals, characterised by vigorous group formations and drumbeats symbolising agricultural abundance.",

    "Haryana|dance|Phag":
        "Phag is a folk dance and song tradition performed around the Holi festival in Haryana, its playful, colourful performances celebrating the arrival of spring and communal festivity.",

    "Haryana|arts|Phulkari":
        "In Haryana, as in neighbouring Punjab, Phulkari embroidery involves darning colourful floral patterns onto cloth with silk thread — historically made by women as part of a bride's trousseau and passed down through generations of rural households.",

    "Haryana|food|Bajra Khichdi":
        {
            recipe: "Pearl millet (bajra) is cooked together with lentils, moong dal and spices into a hearty, porridge-like dish, traditionally eaten in winter for its warming quality.",
            nutrients: "Bajra is rich in fibre, iron and magnesium, and the lentils add plant protein, making it a nutritious, filling staple."
        },

    "Haryana|dress|Ghagra Choli":
        "In Haryana, the Ghagra Choli ensemble of a flared skirt and fitted blouse has traditionally been worn by rural women, often paired with heavy silver jewellery, reflecting the region's agrarian Haryanvi culture.",

    "Haryana|festival|Teej":
        "Teej celebrates the arrival of the monsoon and honours the goddess Parvati's devotion to Shiva. Women observe fasts, sing traditional songs, and swing on decorated swings as part of the celebration, praying for marital happiness.",

    "Haryana|places|Kurukshetra":
        "Kurukshetra is renowned as the site of the great battle described in the Mahabharata, and where, according to tradition, Lord Krishna delivered the teachings of the Bhagavad Gita to Arjuna — making it one of Hinduism's most significant pilgrimage sites.",

    "Haryana|places|Sultanpur National Park":
        "Originally a hunting ground for the erstwhile princely rulers, Sultanpur was declared a bird sanctuary in 1972 and later a National Park in 1989, now a key wetland stopover for migratory birds arriving from Siberia and Central Asia each winter.",

    // ---------------- HIMACHAL PRADESH ----------------
    "Himachal Pradesh|dance|Nati":
        "Nati is a folk dance performed across Himachal Pradesh's hill communities, traditionally danced during harvest festivals and weddings in colourful group formations — recognised by Guinness World Records for the largest folk-dance gathering, staged in Himachal in 2015.",

    "Himachal Pradesh|arts|Chamba Rumal":
        "Chamba Rumal is an embroidery tradition from the Chamba region using fine, double-satin stitch to create scenes from Hindu mythology and courtly life, historically patronised by the Chamba royal court from around the 17th century onward.",

    "Himachal Pradesh|food|Dham":
        {
            recipe: "A traditional feast featuring rice, rajma (kidney beans), madra (a yogurt-based curry) and other dishes cooked by specialist cooks called 'botis' over slow wood fires, typically served at weddings and festivals.",
            nutrients: "The beans and lentils provide plant protein and fibre, while the yogurt-based curries add calcium and probiotics."
        },

    "Himachal Pradesh|dress|Himachali Traditional Dress":
        "Himachali traditional dress includes the distinctive Himachali cap (topi) worn by men, and women's ghagra-choli ensembles paired with heavy silver jewellery — styles shaped by the region's cold mountain climate and Pahari cultural traditions.",

    "Himachal Pradesh|festival|Kullu Dussehra":
        "Kullu Dussehra begins after the rest of India's Dussehra celebrations end, marking the victory of Lord Rama over Ravana. It features a week-long gathering of local deities (devtas) carried in palanquins to the valley, a tradition believed to date back to the 17th century under local royal patronage.",

    "Himachal Pradesh|places|Shimla":
        "Shimla developed as a hill station under British colonial rule in the early 19th century and became the summer capital of British India, its colonial-era architecture — including the Viceregal Lodge and Mall Road — still central to the town today.",

    "Himachal Pradesh|places|Manali":
        "Named after the sage Manu, believed in legend to have recreated human life here after a great flood, Manali grew from a small mountain village into a major hill destination, historically valued as a gateway to trade routes through the Himalayas.",

    "Himachal Pradesh|places|Spiti Valley":
        "A high-altitude cold desert historically part of the Guge kingdom of western Tibet before being incorporated into India, Spiti Valley is home to centuries-old Buddhist monasteries such as Key Monastery, and has long served as a corridor for trade and Buddhist learning between India and Tibet.",

    // ---------------- ARUNACHAL PRADESH ----------------
    "Arunachal Pradesh|dance|Bardo Chham":
        "Bardo Chham is a masked ritual dance of the Sherdukpen community depicting a battle between good and evil spirits, traditionally performed during the Sherdukpen New Year to drive away misfortune for the year ahead.",

    "Arunachal Pradesh|dance|Ponung":
        "Ponung is performed by women of the Adi tribe dancing in unison to the chanting of a male reciter known as a 'miri', who narrates origin myths and folk tales through the accompanying 'Abang' verses.",

    "Arunachal Pradesh|arts|Traditional Weaving":
        "Each tribal community in Arunachal Pradesh maintains its own backstrap-loom weaving tradition, producing shawls and wraps with distinct geometric motifs that historically signalled clan identity and social standing.",

    "Arunachal Pradesh|food|Thukpa":
        {
            recipe: "Noodles are simmered in a broth with vegetables and meat, flavoured with garlic, ginger and local herbs — a dish that reached Arunachal Pradesh along Himalayan trade routes from Tibet.",
            nutrients: "The broth and noodles provide warming carbohydrates, the meat adds protein, and the vegetables contribute fibre and vitamins."
        },

    "Arunachal Pradesh|dress|Traditional Tribal Dress":
        "With over twenty major tribes, Arunachal Pradesh has no single traditional dress; each community wears its own handwoven textiles paired with cane and bead jewellery, historically used to distinguish one tribe's identity from another's.",

    "Arunachal Pradesh|festival|Losar":
        "Losar marks the Tibetan Buddhist New Year, celebrated by the Monpa and Sherdukpen communities with prayers, mask dances and offerings at monasteries to welcome the year ahead.",

    "Arunachal Pradesh|festival|Solung":
        "Solung is a harvest festival of the Adi tribe honouring Kine Nane, the goddess of wealth and prosperity, marked with feasting and Ponung dances offering thanks for the season's harvest.",

    "Arunachal Pradesh|places|Tawang":
        "Tawang is home to Tawang Monastery, founded in 1680-81 by Merak Lama Lodre Gyatso and among the largest Buddhist monasteries in India, historically an important seat of Tibetan Buddhist learning.",

    "Arunachal Pradesh|places|Ziro Valley":
        "Home to the Apatani tribe, Ziro Valley is known for a distinctive sustainable farming system combining wet-rice cultivation with fish rearing in the same paddies, and has been on UNESCO's tentative World Heritage list for its unique landscape and Apatani traditions.",

    // ---------------- CHHATTISGARH ----------------
    "Chhattisgarh|dance|Panthi":
        "Panthi is a devotional dance of the Satnami community performed in honour of Guru Ghasidas, the 19th-century social reformer whose teachings against caste discrimination shaped the Satnami sect.",

    "Chhattisgarh|dance|Raut Nacha":
        "Raut Nacha is performed by the Yadav cowherd community during Diwali, with dancers wielding sticks and mirrors while singing verses in devotion to Lord Krishna.",

    "Chhattisgarh|arts|Dhokra Art":
        "Dhokra is an ancient lost-wax metal-casting technique practised by tribal artisans of the Bastar region for thousands of years, producing bronze figurines of deities, animals and scenes of everyday tribal life.",

    "Chhattisgarh|food|Fara":
        {
            recipe: "Rice-flour dough is shaped into dumplings, steamed, and then tempered with mustard seeds and garlic — a dish traditionally prepared during festivals such as Teej.",
            nutrients: "The rice flour provides easily digestible carbohydrates, and the light mustard tempering keeps the dish low in fat."
        },

    "Chhattisgarh|food|Chila":
        {
            recipe: "A fermented batter of rice and lentils is spread thin on a griddle into a savoury pancake, similar in technique to a dosa.",
            nutrients: "Fermentation boosts the batter's B-vitamin content, and the lentils add plant protein alongside the rice's carbohydrates."
        },

    "Chhattisgarh|dress|Kosa Silk":
        "Kosa is a wild silk woven from cocoons gathered in Chhattisgarh's sal forests, traditionally reared and woven by tribal communities and prized for its textured, earthy sheen distinct from mulberry silk.",

    "Chhattisgarh|festival|Bastar Dussehra":
        "Unlike the Ramayana-based Dussehra celebrated elsewhere in India, Bastar's 75-day festival honours the goddess Danteshwari and is believed to have been established by the region's Bastar kings around the 15th century.",

    "Chhattisgarh|places|Chitrakote Falls":
        "Often called the 'Niagara of India' for its horseshoe shape, Chitrakote Falls on the Indravati River has long been a natural landmark for the Gond and other tribal communities of the region.",

    "Chhattisgarh|places|Bastar":
        "A densely forested region historically ruled by the Bastar dynasty from the 14th century, Bastar is home to numerous indigenous tribal groups who continue to maintain distinct customs, art forms and festival traditions.",

    // ---------------- JHARKHAND ----------------
    "Jharkhand|dance|Chhau":
        "Chhau is a masked dance-drama rooted in the region's martial and courtly traditions, combining acrobatic movement with mythological storytelling; it was recognised by UNESCO as an Intangible Cultural Heritage in 2010.",

    "Jharkhand|dance|Jhumair":
        "Jhumair is a traditional harvest dance of communities across the Chota Nagpur plateau, performed in circles to folk songs that mark seasonal change and strengthen community bonds.",

    "Jharkhand|arts|Sohrai Painting":
        "Sohrai murals are created by tribal women of the Hazaribagh region during the Sohrai harvest festival, painted directly onto mud walls using natural pigments drawn from local soil and plant sources.",

    "Jharkhand|food|Dhuska":
        {
            recipe: "A batter of rice and lentils is deep-fried into a savoury, pancake-like snack, usually served alongside a curried chickpea or potato dish.",
            nutrients: "The rice-lentil batter provides carbohydrates and plant protein, though deep-frying adds a fair amount of fat."
        },

    "Jharkhand|dress|Traditional Tribal Dress":
        "Communities such as the Santhal and Munda traditionally wear handwoven cotton garments, often in white with red borders, reflecting Jharkhand's long-standing forest-based textile traditions.",

    "Jharkhand|festival|Sarhul":
        "Sarhul is a nature-worship festival marking the blossoming of the sal tree, celebrated by Jharkhand's tribal communities to welcome the new year and pray for a bountiful harvest.",

    "Jharkhand|places|Hundru Falls":
        "One of Jharkhand's tallest waterfalls, formed on the Subarnarekha River, Hundru Falls has long been regarded by local communities as a striking natural landmark.",

    "Jharkhand|places|Betla National Park":
        "Part of the historic Palamau forests once used as hunting grounds by regional rulers, Betla became one of India's earliest Project Tiger reserves when it was established in 1974.",

    // ---------------- MANIPUR ----------------
    "Manipur|dance|Manipuri Dance":
        "Manipuri dance is a classical form rooted in Vaishnavite devotional traditions introduced in the 18th century, its graceful, fluid movements traditionally portraying the Radha-Krishna Raas Leela legends.",

    "Manipur|arts|Manipuri Handicrafts":
        "Manipuri handicrafts span handloom weaving and bamboo work practised across the state's valley and hill communities, traditionally passed down within families as both livelihood and cultural expression.",

    "Manipur|food|Eromba":
        {
            recipe: "Boiled and mashed vegetables are mixed with fermented fish (ngari) and chillies into a pungent, hearty dish — a Manipuri staple.",
            nutrients: "The vegetables provide fibre and vitamins, while the fermented fish adds protein and beneficial probiotics."
        },

    "Manipur|dress|Innaphi":
        "The Innaphi is a traditional wraparound shawl worn by Meitei women, woven with intricate borders whose designs have historically indicated the wearer's social status and the occasion.",

    "Manipur|festival|Yaoshang":
        "Yaoshang is Manipur's version of Holi, a five-day festival that combines traditional Thabal Chongba folk dances with the colour-throwing celebrations marking the arrival of spring.",

    "Manipur|places|Loktak Lake":
        "The largest freshwater lake in Northeast India, Loktak is known for its floating 'phumdis' of vegetation, one of which forms Keibul Lamjao, the world's only floating national park.",

    // ---------------- MEGHALAYA ----------------
    "Meghalaya|dance|Shad Suk Mynsiem":
        "This thanksgiving dance of the Khasi community is performed after the harvest, with young women dancing gracefully at the centre while men circle around them, symbolising peace and gratitude.",

    "Meghalaya|arts|Bamboo Crafts":
        "Meghalaya's Khasi, Jaintia and Garo communities have long used the region's abundant bamboo to weave baskets, mats and tools, a skill traditionally passed down through generations.",

    "Meghalaya|food|Jadoh":
        {
            recipe: "Rice is cooked together with pork or chicken and blood, seasoned with local spices, into a hearty one-pot Khasi dish.",
            nutrients: "The meat provides protein while the rice supplies carbohydrates, making it a filling, energy-dense meal."
        },

    "Meghalaya|dress|Jainsem":
        "The Jainsem is traditional Khasi women's dress made of two pieces of cloth draped over an inner blouse, a style historically designed for ease of movement across the region's hilly terrain.",

    "Meghalaya|festival|Wangala":
        "Also called the 'festival of a hundred drums', Wangala is a harvest festival of the Garo tribe giving thanks to the sun god Misi Saljong for a bountiful season.",

    "Meghalaya|places|Living Root Bridges":
        "Grown over generations by the Khasi and Jaintia communities by training the roots of rubber fig trees across rivers, some of these bridges are over a century old and remain in daily use.",

    "Meghalaya|places|Cherrapunji":
        "Among the wettest places on Earth, Cherrapunji has long been home to the Khasi people, whose living root bridge technique developed partly as a practical response to the region's heavy monsoon rains.",

    // ---------------- MIZORAM ----------------
    "Mizoram|dance|Cheraw":
        "Known as the bamboo dance, Cheraw is one of Mizoram's oldest folk dances, in which dancers step between clapping bamboo poles; it is believed to have originated as a ritual to guide the souls of infants who died at birth.",

    "Mizoram|arts|Bamboo Crafts":
        "Mizoram's extensive bamboo forests have long supported a tradition of weaving baskets, mats and household items, an integral part of everyday Mizo craftsmanship.",

    "Mizoram|food|Bai":
        {
            recipe: "A simple stew of vegetables such as mustard leaves and beans is boiled together with a little pork fat and minimal seasoning.",
            nutrients: "The vegetables provide fibre and vitamins, and the light cooking style keeps the dish low in added fat."
        },

    "Mizoram|dress|Puan":
        "The Puan is a traditional handwoven wraparound worn by Mizo women, distinguished by colourful stripes and patterns that vary by clan and occasion.",

    "Mizoram|festival|Chapchar Kut":
        "Chapchar Kut is a spring festival celebrating the completion of the jungle-clearing phase of jhum (shifting) cultivation, marked with community feasting and the Cheraw bamboo dance.",

    "Mizoram|places|Aizawl":
        "Built along a ridge in the Mizo hills, Aizawl developed into Mizoram's capital during the late 19th century as an administrative centre under British colonial rule.",

    "Mizoram|places|Phawngpui":
        "Also called the 'Blue Mountain', Phawngpui is Mizoram's highest peak and is regarded by the Mizo people as a sacred site tied to local legend and folklore.",

    // ---------------- NAGALAND ----------------
    "Nagaland|dance|Chang Lo":
        "Chang Lo is a war dance of the Chang Naga tribe performed with spears and shields, traditionally danced to commemorate victories in battle and display martial skill.",

    "Nagaland|arts|Naga Handicrafts":
        "Naga tribes are known for wood carving, cane and bamboo work, and weaving distinctive tribal shawls, with patterns that traditionally signified a wearer's achievements and clan.",

    "Nagaland|food|Smoked Pork":
        {
            recipe: "Pork is smoked over a wood fire for preservation and flavour, then often cooked with bamboo shoot and the fiery Naga king chilli.",
            nutrients: "Pork provides protein, though its fat content and the smoking process make it a dish best enjoyed in moderation."
        },

    "Nagaland|dress|Traditional Naga Dress":
        "Each Naga tribe maintains its own distinct attire, generally featuring warrior shawls, feathered headgear and beaded ornaments that historically denoted a wearer's achievements and standing within the community.",

    "Nagaland|festival|Hornbill Festival":
        "Established in 2000 by the Nagaland state government, the Hornbill Festival showcases the traditions of Nagaland's many tribes and takes its name from the hornbill bird revered in Naga folklore.",

    "Nagaland|places|Kohima":
        "Nagaland's capital, Kohima, was the site of the pivotal Battle of Kohima in 1944 during World War II, and is now home to the Kohima War Cemetery honouring the soldiers who fought there.",

    "Nagaland|places|Dzukou Valley":
        "Straddling the Nagaland-Manipur border, Dzukou Valley is known for its seasonal wildflower blooms and has long been treasured by the Angami and other Naga communities as a scenic natural retreat.",

    // ---------------- SIKKIM ----------------
    "Sikkim|dance|Singhi Chham":
        "The Singhi Chham, or snow lion dance, is performed by Buddhist monks during monastery festivals to represent the mythical snow lion believed to guard the Himalayas and Buddhist teachings.",

    "Sikkim|arts|Thangka Painting":
        "Thangkas are Buddhist scroll paintings on cotton or silk depicting deities and mandalas, traditionally created by monks and trained artists in Sikkim's monasteries following iconographic rules passed down for centuries.",

    "Sikkim|food|Momos":
        {
            recipe: "Dough parcels are filled with vegetables or meat and steamed, typically served with a spicy tomato-based chutney.",
            nutrients: "Steaming keeps momos relatively low in fat, while the filling contributes protein and the vegetables add fibre."
        },

    "Sikkim|food|Thukpa":
        {
            recipe: "Noodles are simmered in a broth with vegetables and meat, a dish that reached Sikkim through Himalayan trade and migration from Tibet.",
            nutrients: "The broth and noodles provide warming carbohydrates, while the meat and vegetables add protein and vitamins."
        },

    "Sikkim|dress|Bakhu":
        "The Bakhu is a loose-fitting robe worn by Sikkimese men and women, tied at the waist with a silk or cotton belt, a style adapted over generations to the region's cold Himalayan climate.",

    "Sikkim|festival|Losar":
        "Losar marks the Tibetan Buddhist New Year, celebrated across Sikkim's monasteries with prayers, mask dances and family gatherings to welcome the year ahead.",

    "Sikkim|places|Tsomgo Lake":
        "A glacial lake held sacred by local Sikkimese Buddhist communities, Tsomgo takes its name from Bhutia words meaning 'source' and 'lake'.",

    "Sikkim|places|Rumtek Monastery":
        "Built in the 1960s as the seat-in-exile of the Karmapa lineage of Tibetan Buddhism, Rumtek Monastery was modelled after the original Tsurphu Monastery in Tibet.",

    // ---------------- TRIPURA ----------------
    "Tripura|dance|Hojagiri":
        "Hojagiri is performed by young Reang tribal women who balance pitchers and lamps on their heads while moving only their hips and feet, traditionally danced during the Hojagiri festival honouring the goddess Lakshmi.",

    "Tripura|arts|Bamboo Crafts":
        "Tripura's bamboo forests have long supported a tradition of crafting furniture, baskets and household items, practised widely among the state's tribal and rural communities.",

    "Tripura|food|Mui Borok":
        {
            recipe: "Fermented fish (berma) is cooked together with local vegetables and bamboo shoot, a traditional dish of Tripura's indigenous Borok communities.",
            nutrients: "The fermented fish adds protein and beneficial probiotics, while the vegetables contribute fibre and vitamins."
        },

    "Tripura|dress|Rignai":
        "The Rignai is a traditional wraparound skirt woven by Tripuri women on handlooms, with patterns and colours that have historically distinguished the state's different tribal communities.",

    "Tripura|festival|Kharchi Puja":
        "A week-long festival worshipping fourteen deities collectively known as the Chaturdasha Devata, Kharchi Puja is believed to have been established generations ago under the patronage of the Tripuri royal family.",

    "Tripura|places|Ujjayanta Palace":
        "Built in 1901 by Maharaja Radha Kishore Manikya as the royal palace of the Tripura kingdom, Ujjayanta Palace was later converted into the Tripura State Museum.",

    "Tripura|places|Neermahal":
        "A lake palace built in the 1930s by Maharaja Bir Bikram Kishore Manikya on Rudrasagar Lake, Neermahal blends Hindu and Islamic architectural styles.",

    // ---------------- UTTARAKHAND ----------------
    "Uttarakhand|dance|Chholiya":
        "Chholiya is a sword dance historically performed by Kumaoni warriors before going into battle, later adapted into a ceremonial dance performed at weddings to ward off evil spirits.",

    "Uttarakhand|arts|Aipan Art":
        "Aipan is a ritual folk art of the Kumaon region made using rice-paste designs drawn on mud floors and walls, traditionally created by women during festivals and auspicious occasions.",

    "Uttarakhand|food|Kafuli":
        {
            recipe: "Spinach and other leafy greens are cooked down into a thick, spiced puree, often finished with buttermilk or curd.",
            nutrients: "The leafy greens are a strong source of iron, calcium and vitamins A and C."
        },

    "Uttarakhand|food|Aloo Ke Gutke":
        {
            recipe: "Boiled potatoes are pan-fried with mustard seeds, cumin and Himalayan spices such as jakhya.",
            nutrients: "The potatoes provide carbohydrates and potassium, and the light tempering keeps the dish simple and low in added fat."
        },

    "Uttarakhand|dress|Ghagra Choli":
        "In Uttarakhand, the Ghagra Choli is traditionally worn by Garhwali and Kumaoni women, often paired with heavy silver jewellery that reflects the region's mountain culture.",

    "Uttarakhand|festival|Nanda Devi Raj Jat":
        "Held once every twelve years in honour of the goddess Nanda Devi, this pilgrimage covers over 280 km through the Himalayas and is considered one of the world's longest and most arduous religious treks.",

    "Uttarakhand|places|Kedarnath":
        "One of the twelve Jyotirlinga shrines dedicated to Lord Shiva, parts of the Kedarnath temple are believed to date back over a thousand years, set high in the Garhwal Himalayas.",

    "Uttarakhand|places|Badrinath":
        "Dedicated to Lord Vishnu and one of the four Char Dham pilgrimage sites, Badrinath is traditionally believed to have been established by the philosopher-saint Adi Shankaracharya in the 8th century.",

    "Uttarakhand|places|Rishikesh":
        "Known as the 'Yoga Capital of the World', Rishikesh sits where the Ganges river exits the Himalayan foothills and has long served as a centre for yoga, meditation and pilgrimage."
};


/* =========================================================
   ITEM HISTORY TRANSLATIONS (Telugu / Hindi)

   Telugu and Hindi renderings of the item-level history /
   craft / recipe text in itemDetails above, keyed exactly
   the same way: "State|category|Item".

   Being filled in state by state, just like itemDetails
   itself. Any item not yet listed here simply falls back to
   showing the English text (with a small "translation coming
   soon" note) when Telugu or Hindi is selected, so nothing
   breaks while more states are translated.
========================================================= */

const itemDetailTranslations = {

    // ---------------- ANDHRA PRADESH ----------------
    "Andhra Pradesh|dance|Kuchipudi": {
        telugu:
            "కూచిపూడి అనే పేరు కృష్ణా జిల్లాలోని కూచిపూడి గ్రామం నుండి వచ్చింది, ఇక్కడ శతాబ్దాల క్రితం బ్రాహ్మణ పురుషులు హిందూ పురాణ కథలను ప్రదర్శిస్తూ నృత్య-నాటకంగా దీన్ని ప్రారంభించారు. స్థానిక రాజుల మరియు దేవాలయాల ఆదరణతో ఇది వృద్ధి చెందింది, తరువాత నేడు విస్తృతంగా బోధించే శాస్త్రీయ ఏకపాత్ర నృత్య రూపంగా క్రమబద్ధీకరించబడింది.",
        hindi:
            "कूचिपुड़ी नाम कृष्णा जिले के कूचिपुड़ी गाँव से आया है, जहाँ सदियों पहले ब्राह्मण पुरुषों द्वारा हिंदू पौराणिक कथाओं को नृत्य-नाटक के रूप में प्रस्तुत किया जाता था। स्थानीय शासकों और मंदिरों के संरक्षण में यह फला-फूला, और बाद में इसे आज व्यापक रूप से सिखाए जाने वाले शास्त्रीय एकल नृत्य रूप में व्यवस्थित किया गया।"
    },

    "Andhra Pradesh|arts|Kalamkari": {
        telugu:
            "కలంకారి అనేది 3,000 సంవత్సరాలకు పైగా చరిత్ర కలిగిన చేతితో చిత్రించిన లేదా బ్లాక్-ప్రింటెడ్ వస్త్రకళ; ఈ పేరు పర్షియన్ పదాలైన 'కలం' (పెన్ను) మరియు 'కారి' (హస్తకళా నైపుణ్యం) నుండి వచ్చింది. సాంప్రదాయకంగా సహజ, కూరగాయల ఆధారిత రంగులతో రంగులు వేయబడి, రామాయణం మరియు మహాభారతం వంటి ఇతిహాసాల దృశ్యాలను చిత్రించడానికి ఉపయోగించబడింది, శ్రీకాళహస్తి వంటి దేవాలయ పట్టణాలలో మరియు మచిలీపట్నం వాణిజ్య పట్టణంలో వర్ధిల్లింది.",
        hindi:
            "कलमकारी 3,000 वर्षों से भी पुरानी हाथ से चित्रित या ब्लॉक-प्रिंटेड वस्त्र कला है; इसका नाम फ़ारसी शब्दों 'कलम' (पेन) और 'कारी' (शिल्पकारी) से आया है। पारंपरिक रूप से प्राकृतिक, वनस्पति-आधारित रंगों से रंगी जाने वाली यह कला रामायण और महाभारत जैसे महाकाव्यों के दृश्यों को दर्शाने के लिए उपयोग होती थी, और श्रीकालहस्ती जैसे मंदिर नगरों तथा व्यापारिक नगर मछलीपट्टनम में फली-फूली।"
    },

    "Andhra Pradesh|arts|Kondapalli Toys": {
        telugu:
            "ఈ చెక్క బొమ్మలు కొండపల్లి గ్రామం సమీపంలో లభించే మృదువైన 'తెల్ల పొనికి' చెక్కతో చెక్కబడతాయి మరియు తరతరాలుగా ఆర్యక్షత్రియ కళాకారుల సమాజం ద్వారా తయారు చేయబడుతున్నాయి. సాంప్రదాయకంగా కూరగాయల రంగులతో చేతితో చిత్రించబడి, గ్రామ జీవితం, జంతువులు మరియు పౌరాణిక వ్యక్తులను చిత్రీకరిస్తాయి మరియు చారిత్రకంగా దేవాలయ సంతలలో అమ్మబడేవి.",
        hindi:
            "ये लकड़ी के खिलौने कोंडापल्ली गाँव के पास मिलने वाली नरम 'तेल्ल पोनिकी' लकड़ी से तराशे जाते हैं और पीढ़ियों से आर्यक्षत्रिय शिल्पकार समुदाय द्वारा बनाए जाते रहे हैं। परंपरागत रूप से वनस्पति रंगों से हाथ से रंगे जाने वाले ये खिलौने गाँव के जीवन, जानवरों और पौराणिक आकृतियों को दर्शाते हैं और ऐतिहासिक रूप से मंदिर मेलों में बेचे जाते थे।"
    },

    "Andhra Pradesh|food|Pulihora": {
        telugu: {
            recipe:
                "వండిన అన్నానికి ఆవాలు, కరివేపాకు, పసుపు, ఎండు మిరపకాయలు మరియు వేరుశెనగలతో తాలింపు వేసి, అన్నం చల్లారిన తర్వాత పులుపు చింతపండు గుజ్జుతో కలుపుతారు.",
            nutrients:
                "అన్నం శక్తినిచ్చే పిండి పదార్థాలను అందిస్తుంది, చింతపండు విటమిన్ సి మరియు యాంటీఆక్సిడెంట్లను జోడిస్తుంది, వేరుశెనగలు ప్రోటీన్ మరియు ఆరోగ్యకరమైన కొవ్వులను అందిస్తాయి, పసుపు-ఆవాల తాలింపు శోథ నిరోధక సమ్మేళనాలను అందిస్తుంది."
        },
        hindi: {
            recipe:
                "पके हुए चावल को सरसों के बीज, करी पत्ते, हल्दी, सूखी लाल मिर्च और मूंगफली के साथ तड़का लगाया जाता है, फिर चावल ठंडा होने के बाद खट्टे इमली के गूदे के साथ मिलाया जाता है।",
            nutrients:
                "चावल ऊर्जा देने वाले कार्बोहाइड्रेट प्रदान करता है, इमली विटामिन सी और एंटीऑक्सीडेंट जोड़ती है, मूंगफली प्रोटीन और स्वस्थ वसा लाती है, और हल्दी-सरसों का तड़का सूजनरोधी यौगिकों का योगदान देता है।"
        }
    },

    "Andhra Pradesh|food|Gongura Pachadi": {
        telugu: {
            recipe:
                "గోంగూర ఆకులను ఆవాల తాలింపు, వెల్లుల్లి మరియు ఎండు మిరపకాయలతో వేయించి, పులుపైన, పచ్చడి వంటి రుచికరమైన పదార్థంగా రుబ్బుతారు.",
            nutrients:
                "గోంగూర ఆకులు విటమిన్ సి, ఇనుము మరియు ఫోలేట్‌కు మంచి మూలం — ఈ వంటకానికి ప్రత్యేకతనిచ్చే పులుపు రోగనిరోధక శక్తికి మరియు జీర్ణక్రియకు నిజమైన ప్రయోజనాలను కూడా అందిస్తుంది."
        },
        hindi: {
            recipe:
                "गोंगुरा (अंबाडी) की पत्तियों को तड़के हुए सरसों के बीज, लहसुन और सूखी लाल मिर्च के साथ भूनकर, एक खट्टी, चटनी जैसी डिश में पीसा जाता है।",
            nutrients:
                "गोंगुरा की पत्तियाँ विटामिन सी, आयरन और फोलेट का अच्छा स्रोत हैं — इस व्यंजन की पहचान बनने वाली वही खटास प्रतिरक्षा और पाचन के लिए वास्तविक लाभ भी लाती है।"
        }
    },

    "Andhra Pradesh|dress|Langa Voni": {
        telugu:
            "లంగా వోణీ అనేది యువ, అవివాహిత తెలుగు మహిళలు ధరించే సాంప్రదాయ హాఫ్-చీర — పొడవైన లంగా, సరిపోయే జాకెట్టు మరియు భుజం మీద కప్పే వోణీతో కూడినది. ఇది చారిత్రకంగా పిల్లల దుస్తులు మరియు పూర్తి చీర మధ్య పరివర్తన శైలిగా ఉపయోగపడింది, ముఖ్యంగా పండుగలలో మరియు యుక్తవయస్సు వేడుకలలో ధరించేవారు.",
        hindi:
            "लंगा वोणी एक पारंपरिक हाफ-साड़ी है जिसे युवा, अविवाहित तेलुगु महिलाएँ पहनती हैं — एक लंबी स्कर्ट (लंगा) के साथ फिटेड ब्लाउज़ और कंधे पर लपेटा गया स्टोल (वोणी)। यह ऐतिहासिक रूप से बच्चों के कपड़ों और पूरी साड़ी के बीच एक संक्रमणकालीन शैली के रूप में काम करती थी, जिसे विशेष रूप से त्योहारों और वयस्कता समारोहों में पहना जाता था।"
    },

    "Andhra Pradesh|festival|Ugadi": {
        telugu:
            "ఉగాది తెలుగు నూతన సంవత్సరాన్ని సూచిస్తుంది మరియు సాంప్రదాయకంగా బ్రహ్మ సృష్టిని ప్రారంభించిన రోజుగా నమ్ముతారు. దీన్ని 'ఉగాది పచ్చడి' తయారు చేయడం ద్వారా జరుపుకుంటారు, ఇది తీపి, పులుపు, చేదు, ఉప్పు మరియు కారం రుచులను ఉద్దేశపూర్వకంగా కలిపే వంటకం, రాబోయే సంవత్సరంలో జీవితం తెచ్చే మిశ్రమ అనుభవాలను సూచిస్తుంది.",
        hindi:
            "उगादी तेलुगु नववर्ष का प्रतीक है और परंपरागत रूप से इसे वह दिन माना जाता है जब ब्रह्मा ने सृष्टि की शुरुआत की थी। इसे 'उगादी पचड़ी' बनाकर मनाया जाता है, जो जानबूझकर मीठे, खट्टे, कड़वे, नमकीन और तीखे स्वादों को मिलाने वाला व्यंजन है, जो आने वाले वर्ष में जीवन द्वारा लाए जाने वाले मिश्रित अनुभवों का प्रतीक है।"
    },

    "Andhra Pradesh|festival|Sankranti": {
        telugu:
            "సంక్రాంతి అనేది సూర్యుడు మకర రాశిలోకి ప్రవేశించడాన్ని (మకర సంక్రాంతి) సూచించే పంట పండుగ, సాంప్రదాయకంగా మంచి పంట కోసం మరియు దానిని అందించడంలో సహాయపడిన పశువులకు కృతజ్ఞతలు తెలియజేయడానికి జరుపుకుంటారు. దీన్ని గాలిపటాలు ఎగురవేయడం, మంటలు వేయడం మరియు గుమ్మాల వద్ద ముగ్గులు వేయడంతో జరుపుకుంటారు.",
        hindi:
            "संक्रांति एक फसल उत्सव है जो सूर्य के मकर राशि में प्रवेश (मकर संक्रांति) का प्रतीक है, जिसे परंपरागत रूप से अच्छी फसल और उसे लाने में मदद करने वाले पशुओं के प्रति आभार व्यक्त करने के लिए मनाया जाता है। इसे पतंग उड़ाने, अलाव जलाने और दरवाज़ों पर रंगोली बनाने के साथ मनाया जाता है।"
    },

    "Andhra Pradesh|places|Tirupati": {
        telugu:
            "తిరుపతి తిరుమల కొండలపై ఉన్న వేంకటేశ్వర దేవాలయానికి నిలయం, ఇది ప్రపంచంలో అత్యధికంగా సందర్శించే యాత్రా స్థలాలలో ఒకటి. దేవాలయ శాసనాలు ఇది వెయ్యి సంవత్సరాలకు పైగా పల్లవులు, చోళులు మరియు విజయనగర పాలకులతో సహా వరుస రాజవంశాలచే విస్తరించబడిందని చూపిస్తాయి.",
        hindi:
            "तिरुपति तिरुमला पहाड़ियों पर स्थित वेंकटेश्वर मंदिर का घर है, जो दुनिया के सबसे अधिक देखे जाने वाले तीर्थ स्थलों में से एक है। मंदिर के शिलालेख दिखाते हैं कि इसे पल्लव, चोल और विजयनगर शासकों सहित लगातार राजवंशों द्वारा एक हज़ार से अधिक वर्षों में विस्तारित किया गया।"
    },

    "Andhra Pradesh|places|Araku Valley": {
        telugu:
            "తూర్పు కనుమలలోని ఈ కొండ లోయ చాలాకాలంగా సాంప్రదాయ వ్యవసాయం మరియు కాఫీ సాగును ఇప్పటికీ పాటించే గిరిజన సమాజాలకు నిలయంగా ఉంది. దీని గిరిజన మ్యూజియం ఈ ప్రాంతాన్ని రూపొందించిన స్థానిక ఆదివాసీ సమూహాల చరిత్ర మరియు రోజువారీ జీవితాన్ని నమోదు చేస్తుంది.",
        hindi:
            "पूर्वी घाट की यह पहाड़ी घाटी लंबे समय से आदिवासी समुदायों का घर रही है जो आज भी पारंपरिक खेती और कॉफी की खेती करते हैं। इसका आदिवासी संग्रहालय इस क्षेत्र को आकार देने वाले स्थानीय आदिवासी समूहों के इतिहास और रोज़मर्रा के जीवन का दस्तावेज़ीकरण करता है।"
    },

    "Andhra Pradesh|places|Amaravati": {
        telugu:
            "అమరావతి ఒకప్పుడు కృష్ణా నది ఒడ్డున ఉన్న ప్రధాన బౌద్ధ కేంద్రంగా ఉండేది, ఇది క్రీ.పూ. 3వ శతాబ్దంలో మౌర్య ఆదరణలో మొదట నిర్మించబడి, తరువాత శాతవాహన రాజవంశంచే విస్తరించబడిన అమరావతి స్తూపానికి నిలయం. నేడు ఇది ఆంధ్రప్రదేశ్ ప్రణాళికాబద్ధమైన కొత్త రాజధాని స్థలంగా కూడా ఉపయోగపడుతోంది.",
        hindi:
            "अमरावती कभी कृष्णा नदी के तट पर एक प्रमुख बौद्ध केंद्र था, जो लगभग तीसरी शताब्दी ईसा पूर्व में मौर्य संरक्षण में पहली बार बनाए गए और बाद में सातवाहन राजवंश द्वारा विस्तारित अमरावती स्तूप का घर है। आज यह आंध्र प्रदेश की नियोजित नई राजधानी के स्थल के रूप में भी काम करता है।"
    },

    // ---------------- TELANGANA ----------------
    "Telangana|dance|Perini Shivatandavam": {
        telugu:
            "పేరిణి శివతాండవం అనేది శివునికి అంకితం చేయబడిన పురాతన యోధుల నృత్యం, చారిత్రకంగా కాకతీయ రాజవంశ సైనికులు యుద్ధానికి వెళ్లే ముందు ప్రదర్శించేవారు. 20వ శతాబ్దం నాటికి ఇది దాదాపు అంతరించిపోయింది, రామప్ప మరియు వరంగల్ దేవాలయాలలో చెక్కబడిన నృత్య భంగిమలను అధ్యయనం చేసి పండితులు దీన్ని పునర్నిర్మించే వరకు.",
        hindi:
            "पेरिणी शिवतांडवम भगवान शिव को समर्पित एक प्राचीन योद्धा नृत्य है, जिसे ऐतिहासिक रूप से काकतीय राजवंश के सैनिक युद्ध में जाने से पहले करते थे। 20वीं सदी तक यह लगभग लुप्त हो चुका था, जब तक विद्वानों ने रामप्पा और वारंगल मंदिरों में उकेरी गई नृत्य मुद्राओं का अध्ययन करके इसे फिर से खड़ा नहीं किया।"
    },

    "Telangana|arts|Cheriyal Paintings": {
        telugu:
            "చెరియాల్ చిత్రపటాలు చెరియాల్ గ్రామం నుండి వచ్చాయి, అక్కడ వాటిని సాంప్రదాయకంగా సంచార కథకులు జానపద కథలు మరియు ఇతిహాసాలను ప్యానెల్ వారీగా వివరించడానికి ఉపయోగించేవారు. ఈ శైలి దాని ధైర్యమైన రంగులు మరియు 'నకాషి' హస్తకళా నైపుణ్యానికి ప్రసిద్ధి చెందింది, ఇది తరతరాలుగా కళాకారుల కుటుంబాలలో అందించబడింది.",
        hindi:
            "चेरियाल स्क्रॉल चित्रकला चेरियाल गाँव से आती है, जहाँ पारंपरिक रूप से घुमंतू कथावाचक इनका उपयोग लोककथाओं और महाकाव्यों को पैनल दर पैनल सुनाने के लिए करते थे। यह शैली अपने गहरे रंगों और 'नकाशी' शिल्पकारी के लिए जानी जाती है, जो पीढ़ियों से शिल्पकार परिवारों में चली आ रही है।"
    },

    "Telangana|food|Hyderabadi Biryani": {
        telugu: {
            recipe:
                "బాస్మతి బియ్యాన్ని మెరినేట్ చేసిన మాంసంతో పొరలుగా వేసి, కుంకుమపువ్వు మరియు వేయించిన ఉల్లిపాయలతో మూసిన పాత్రలో 'దమ్' పద్ధతిలో వండుతారు, బియ్యం మరియు మాంసం నెమ్మదిగా ఆవిరిలో కలిసిపోయేలా, నేరుగా కలపకుండా రుచులు కలిసేలా చేస్తారు.",
            nutrients:
                "ఇది మాంసం నుండి ప్రోటీన్ మరియు బియ్యం నుండి పిండి పదార్థాలను అందిస్తుంది, కుంకుమపువ్వు మరియు దాల్చినచెక్క వంటి మసాలాలు యాంటీఆక్సిడెంట్ సమ్మేళనాలను జోడిస్తాయి — అయితే ఉపయోగించే నెయ్యి మరియు నూనె దీన్ని కేలరీలు ఎక్కువగా ఉండేలా చేస్తాయి."
        },
        hindi: {
            recipe:
                "बासमती चावल को मैरिनेट किए गए मांस के साथ परतों में रखा जाता है और केसर व तले हुए प्याज़ के साथ बंद बर्तन में 'दम' विधि से पकाया जाता है, जिससे चावल और मांस धीरे-धीरे भाप में साथ पकते हैं और बिना सीधे हिलाए स्वाद आपस में मिल जाते हैं।",
            nutrients:
                "यह मांस से प्रोटीन और चावल से कार्बोहाइड्रेट प्रदान करता है, और केसर व दालचीनी जैसे मसाले एंटीऑक्सीडेंट यौगिक जोड़ते हैं — हालाँकि उपयोग किए गए घी और तेल इसे काफी कैलोरी-सघन बना देते हैं।"
        }
    },
        // ==================== CHHATTISGARH FOOD ====================

    "Chhattisgarh|food|Fara": {
        telugu: {
            recipe: "బియ్యం పిండితో ముద్దలను తయారు చేసి ఆవిరిపై ఉడికించి, ఆవాలు మరియు వెల్లుల్లి తాలింపుతో కలుపుతారు. దీనిని సాధారణంగా తీజ్ వంటి పండుగల సమయంలో తయారు చేస్తారు.",
            nutrients: "బియ్యం పిండి శరీరానికి సులభంగా జీర్ణమయ్యే కార్బోహైడ్రేట్లను అందిస్తుంది. తేలికపాటి తాలింపు కారణంగా ఇందులో కొవ్వు తక్కువగా ఉంటుంది."
        },
        hindi: {
            recipe: "चावल के आटे से छोटी-छोटी लोइयाँ बनाकर उन्हें भाप में पकाया जाता है और फिर सरसों तथा लहसुन के तड़के के साथ मिलाया जाता है। इसे तीज जैसे त्योहारों पर पारंपरिक रूप से बनाया जाता है।",
            nutrients: "चावल का आटा आसानी से पचने वाले कार्बोहाइड्रेट प्रदान करता है और हल्का तड़का होने के कारण इसमें वसा की मात्रा कम रहती है।"
        }
    },

    "Chhattisgarh|food|Chila": {
        telugu: {
            recipe: "బియ్యం మరియు పప్పులతో పులియబెట్టిన పిండిని తయారు చేసి, దానిని పలుచగా పెనం మీద పోసి దోసె లాంటి రుచికరమైన అట్టలా వండుతారు.",
            nutrients: "పులియబెట్టడం వల్ల బి-విటమిన్లు పెరుగుతాయి. పప్పులు మొక్కల ఆధారిత ప్రోటీన్‌ను అందిస్తాయి, బియ్యం కార్బోహైడ్రేట్లను అందిస్తుంది."
        },
        hindi: {
            recipe: "चावल और दाल को भिगोकर तथा किण्वित करके घोल तैयार किया जाता है। इस घोल को तवे पर पतला फैलाकर स्वादिष्ट चिला बनाया जाता है, जो बनाने की विधि में डोसे जैसा होता है।",
            nutrients: "किण्वन से बी-विटामिन की मात्रा बढ़ती है। दाल पौध-आधारित प्रोटीन देती है और चावल कार्बोहाइड्रेट प्रदान करता है।"
        }
    },


    // ==================== JHARKHAND FOOD ====================

    "Jharkhand|food|Dhuska": {
        telugu: {
            recipe: "బియ్యం మరియు పప్పులతో పిండిని తయారు చేసి, దానిని నూనెలో వేయించి రుచికరమైన పాన్‌కేక్‌లాంటి అల్పాహారంగా తయారు చేస్తారు. దీనిని సాధారణంగా శనగ లేదా బంగాళాదుంప కూరతో వడ్డిస్తారు.",
            nutrients: "బియ్యం మరియు పప్పుల మిశ్రమం కార్బోహైడ్రేట్లు మరియు మొక్కల ఆధారిత ప్రోటీన్‌ను అందిస్తుంది. అయితే వేయించడం వల్ల కొంత కొవ్వు పెరుగుతుంది."
        },
        hindi: {
            recipe: "चावल और दाल से घोल तैयार करके उसे तेल में तलकर स्वादिष्ट, पैनकेक जैसे स्नैक के रूप में बनाया जाता है। इसे आमतौर पर चने या आलू की करी के साथ परोसा जाता है।",
            nutrients: "चावल और दाल कार्बोहाइड्रेट तथा पौध-आधारित प्रोटीन प्रदान करते हैं, लेकिन तलने से इसमें वसा की मात्रा बढ़ जाती है।"
        }
    },


    // ==================== HARYANA FOOD ====================

    "Haryana|food|Bajra Khichdi": {
        telugu: {
            recipe: "సజ్జలు, పప్పులు మరియు మసాలాలను కలిపి ఉడికించి వేడి, పోషకమైన ఖిచ్డీని తయారు చేస్తారు. శీతాకాలంలో శరీరానికి వేడి అందించేందుకు దీనిని సంప్రదాయంగా తింటారు.",
            nutrients: "సజ్జల్లో ఫైబర్, ఇనుము మరియు మెగ్నీషియం సమృద్ధిగా ఉంటాయి. పప్పులు మొక్కల ఆధారిత ప్రోటీన్‌ను అందిస్తాయి."
        },
        hindi: {
            recipe: "बाजरा, दाल और मसालों को एक साथ पकाकर पौष्टिक और गाढ़ी खिचड़ी बनाई जाती है। इसे विशेष रूप से सर्दियों में गर्माहट देने वाले पारंपरिक भोजन के रूप में खाया जाता है।",
            nutrients: "बाजरा फाइबर, आयरन और मैग्नीशियम से भरपूर होता है। दालें पौध-आधारित प्रोटीन प्रदान करती हैं।"
        }
    },


    // ==================== HIMACHAL PRADESH FOOD ====================

    "Himachal Pradesh|food|Dham": {
        telugu: {
            recipe: "అన్నం, రాజ్మా, పెరుగు ఆధారిత మద్రా కూర మరియు ఇతర వంటకాలతో కూడిన సంప్రదాయ విందును ప్రత్యేకంగా 'బోటీలు' అని పిలిచే వంటవారు నెమ్మదిగా వండుతారు. దీనిని వివాహాలు మరియు పండుగల సమయంలో వడ్డిస్తారు.",
            nutrients: "రాజ్మా మరియు పప్పులు మొక్కల ఆధారిత ప్రోటీన్, ఫైబర్‌ను అందిస్తాయి. పెరుగు ఆధారిత కూరలు కాల్షియం మరియు ప్రయోజనకరమైన ప్రోబయోటిక్స్‌ను అందిస్తాయి."
        },
        hindi: {
            recipe: "चावल, राजमा, दही से बनी मद्रा करी और अन्य व्यंजनों से मिलकर बना यह पारंपरिक भोज विशेष रसोइयों जिन्हें 'बोटी' कहा जाता है, द्वारा धीमी आँच पर तैयार किया जाता है। इसे विवाह और त्योहारों में परोसा जाता है।",
            nutrients: "राजमा और दालें पौध-आधारित प्रोटीन तथा फाइबर प्रदान करती हैं। दही आधारित करी कैल्शियम और लाभकारी प्रोबायोटिक्स देती हैं।"
        }
    },


    // ==================== KARNATAKA FOOD ====================

    "Karnataka|food|Bisi Bele Bath": {
        telugu: {
            recipe: "బియ్యం, పప్పులు మరియు మిశ్రమ కూరగాయలను చింతపండు, ఎండుమిరపకాయలు మరియు ధనియాలతో తయారు చేసిన ప్రత్యేక మసాలాతో కలిపి ఉడికిస్తారు. చివరగా నెయ్యి మరియు జీడిపప్పుతో తాలింపు ఇస్తారు.",
            nutrients: "బియ్యం కార్బోహైడ్రేట్లను, పప్పులు ప్రోటీన్‌ను, కూరగాయలు ఫైబర్ మరియు విటమిన్లను అందిస్తాయి. ఇది సమతుల్యమైన ఒకే పాత్రలో తయారయ్యే భోజనం."
        },
        hindi: {
            recipe: "चावल, दाल और मिश्रित सब्जियों को इमली, सूखी मिर्च और धनिया से बने विशेष मसाले के साथ पकाया जाता है। अंत में घी और काजू का तड़का लगाया जाता है।",
            nutrients: "चावल कार्बोहाइड्रेट, दाल प्रोटीन और सब्जियाँ फाइबर तथा विटामिन प्रदान करती हैं। यह एक संतुलित एक-पॉट भोजन माना जाता है।"
        }
    },
        // ==================== KERALA FOOD ====================

    "Kerala|food|Appam": {
        telugu: {
            recipe:
                "బియ్యం మరియు కొబ్బరితో తయారు చేసిన పిండిని పులియబెట్టి, చిన్న వంపు ఉన్న పెనంపై పోసి చేతితో తిప్పుతూ వండుతారు. మధ్యలో మెత్తగా, అంచుల్లో పలుచగా మరియు క్రిస్పీగా ఉండే అప్పం తయారవుతుంది.",
            nutrients:
                "బియ్యం కార్బోహైడ్రేట్లను అందిస్తుంది. పులియబెట్టడం వల్ల ప్రయోజనకరమైన ప్రోబయోటిక్స్ మరియు బి-విటమిన్లు పెరుగుతాయి. కొబ్బరి ఆరోగ్యకరమైన కొవ్వులను అందిస్తుంది."
        },
        hindi: {
            recipe:
                "चावल और नारियल से बने घोल को किण्वित करके छोटे घुमावदार तवे पर डाला जाता है। इससे बीच में नरम और किनारों पर पतला तथा कुरकुरा अप्पम बनता है।",
            nutrients:
                "चावल कार्बोहाइड्रेट प्रदान करता है। किण्वन से लाभकारी प्रोबायोटिक्स और बी-विटामिन बढ़ते हैं, जबकि नारियल स्वस्थ वसा प्रदान करता है।"
        }
    },

    "Kerala|food|Sadya": {
        telugu: {
            recipe:
                "అరటి ఆకుపై వడ్డించే సంప్రదాయ శాకాహార విందులో అన్నంతో పాటు వివిధ కూరలు, సాంబార్, రసం, పచ్చళ్లు మరియు పాయసం వంటి తీపి పదార్థాలు ఉంటాయి. దీనిని ఓణం మరియు ఇతర పండుగల సమయంలో తయారు చేస్తారు.",
            nutrients:
                "వివిధ కూరగాయలు మరియు పప్పులు ఫైబర్, ప్రోటీన్ మరియు అనేక రకాల విటమిన్లను అందిస్తాయి. అందువల్ల ఇది విస్తృతమైన పోషకాలను కలిగిన సంపూర్ణ భోజనం."
        },
        hindi: {
            recipe:
                "केले के पत्ते पर परोसा जाने वाला यह पारंपरिक शाकाहारी भोज है, जिसमें चावल के साथ कई प्रकार की सब्जियाँ, सांभर, रसम, अचार और पायसम जैसी मिठाई शामिल होती है। इसे ओणम और अन्य उत्सवों में तैयार किया जाता है।",
            nutrients:
                "विभिन्न सब्जियाँ और दालें फाइबर, प्रोटीन और कई प्रकार के विटामिन प्रदान करती हैं। इसलिए यह एक संतुलित और पौष्टिक भोजन है।"
        }
    },


    // ==================== RAJASTHAN FOOD ====================

    "Rajasthan|food|Dal Baati Churma": {
        telugu: {
            recipe:
                "గోధుమ పిండితో తయారు చేసిన బాటీని కాల్చి, మసాలా పప్పు మరియు నెయ్యి, చక్కెరతో తీపి చేసిన చూర్మాతో వడ్డిస్తారు. సంప్రదాయంగా బాటీలను వేడి బొగ్గులపై లేదా ఎడారి ఇసుకలో కాల్చేవారు.",
            nutrients:
                "గోధుమలు మరియు పప్పులు కార్బోహైడ్రేట్లు మరియు మొక్కల ఆధారిత ప్రోటీన్‌ను అందిస్తాయి. నెయ్యి కొవ్వులో కరిగే విటమిన్లను అందిస్తుంది. ఇది అధిక శక్తిని అందించే ఆహారం."
        },
        hindi: {
            recipe:
                "गेहूँ के आटे से बनी बाटी को सेंककर मसालेदार दाल और घी तथा चीनी से मीठे किए गए चूरमा के साथ परोसा जाता है। पारंपरिक रूप से बाटी को गर्म कोयलों या रेगिस्तानी रेत में पकाया जाता था।",
            nutrients:
                "गेहूँ और दालें कार्बोहाइड्रेट तथा पौध-आधारित प्रोटीन प्रदान करती हैं। घी वसा में घुलने वाले विटामिन देता है। यह ऊर्जा से भरपूर भोजन है।"
        }
    },


    // ==================== MAHARASHTRA FOOD ====================

    "Maharashtra|food|Vada Pav": {
        telugu: {
            recipe:
                "మసాలా కలిపిన బంగాళదుంప ముద్దను శనగపిండి పిండిలో ముంచి నూనెలో వేయించి వడా తయారు చేస్తారు. దీనిని మెత్తని పావ్‌లో వెల్లుల్లి మరియు చింతపండు పచ్చళ్లతో వడ్డిస్తారు.",
            nutrients:
                "బంగాళదుంప కార్బోహైడ్రేట్లను అందిస్తుంది, శనగపిండి కొంత ప్రోటీన్‌ను అందిస్తుంది. అయితే డీప్ ఫ్రై చేయడం వల్ల కేలరీలు మరియు కొవ్వు ఎక్కువగా ఉంటాయి."
        },
        hindi: {
            recipe:
                "मसालेदार आलू के मिश्रण को बेसन के घोल में डुबोकर तेल में तला जाता है और वड़ा बनाया जाता है। इसे नरम पाव में लहसुन और इमली की चटनी के साथ परोसा जाता है।",
            nutrients:
                "आलू कार्बोहाइड्रेट प्रदान करता है और बेसन कुछ प्रोटीन देता है। लेकिन डीप फ्राई करने के कारण इसमें कैलोरी और वसा अधिक होती है।"
        }
    },

    "Maharashtra|food|Puran Poli": {
        telugu: {
            recipe:
                "ఉడికించిన శనగపప్పు మరియు బెల్లంతో తయారు చేసిన తీపి పూర్ణాన్ని ఏలకుల సువాసనతో గోధుమ పిండిలో నింపి పలుచగా ఒత్తి, నెయ్యితో పెనం మీద కాలుస్తారు. దీనిని సాధారణంగా పండుగల సమయంలో తయారు చేస్తారు.",
            nutrients:
                "శనగపప్పు ప్రోటీన్ మరియు ఫైబర్‌ను అందిస్తుంది. బెల్లంలో శుద్ధి చేసిన చక్కెర కంటే ఎక్కువ ఇనుము ఉంటుంది. నెయ్యి రుచిని పెంచుతుంది, కానీ అధిక కేలరీలు ఉండటం వల్ల పరిమితంగా తినాలి."
        },
        hindi: {
            recipe:
                "पके हुए चने की दाल और गुड़ से बनी मीठी भरावन में इलायची मिलाकर उसे गेहूँ के आटे में भरकर पतला बेलते हैं और घी के साथ तवे पर पकाते हैं। इसे आमतौर पर त्योहारों में बनाया जाता है।",
            nutrients:
                "चना दाल प्रोटीन और फाइबर देती है। गुड़ में परिष्कृत चीनी की तुलना में अधिक आयरन होता है। घी स्वाद बढ़ाता है, लेकिन अधिक कैलोरी के कारण इसे सीमित मात्रा में खाना चाहिए।"
        }
    },


    // ==================== PUNJAB FOOD ====================

    "Punjab|food|Sarson da Saag": {
        telugu: {
            recipe:
                "ఆవాల ఆకులను పాలకూర, అల్లం మరియు వెల్లుల్లితో నెమ్మదిగా ఉడికించి మెత్తగా చేసి చిక్కగా మరిగిస్తారు. చివరగా కొద్దిగా నెయ్యి లేదా వెన్నతో వడ్డిస్తారు.",
            nutrients:
                "ఆవాల ఆకులు మరియు పాలకూరలో ఇనుము, విటమిన్ ఎ, విటమిన్ సి మరియు ఫైబర్ సమృద్ధిగా ఉంటాయి. నెయ్యి లేదా వెన్న కలపడం వల్ల కొవ్వు పెరుగుతుంది."
        },
        hindi: {
            recipe:
                "सरसों के पत्तों को पालक, अदरक और लहसुन के साथ धीमी आँच पर पकाकर मैश किया जाता है और गाढ़ा होने तक पकाया जाता है। अंत में थोड़ा घी या मक्खन डाला जाता है।",
            nutrients:
                "सरसों के पत्ते और पालक आयरन, विटामिन ए, विटामिन सी और फाइबर से भरपूर होते हैं। घी या मक्खन मिलाने से वसा की मात्रा बढ़ती है।"
        }
    },
    // ==================== GOA FOOD ====================

"Goa|food|Goan Fish Curry": {
    telugu: {
        recipe: "గోవా ఫిష్ కర్రీ కొబ్బరి, చింతపండు మరియు సుగంధ ద్రవ్యాలతో తయారు చేసే ప్రసిద్ధ గోవా వంటకం. చేప ముక్కలను మసాలా కొబ్బరి గ్రేవీలో ఉడికిస్తారు.",
        nutrients: "చేపలో ప్రోటీన్ మరియు ఒమేగా-3 కొవ్వు ఆమ్లాలు ఉంటాయి. కొబ్బరి శక్తిని అందిస్తుంది."
    },
    hindi: {
        recipe: "गोवा फिश करी नारियल, इमली और मसालों से बनाई जाने वाली प्रसिद्ध गोवा की डिश है। मछली के टुकड़ों को मसालेदार नारियल की ग्रेवी में पकाया जाता है।",
        nutrients: "मछली में प्रोटीन और ओमेगा-3 फैटी एसिड पाए जाते हैं। नारियल ऊर्जा प्रदान करता है।"
    }
},

"Goa|food|Bebinca": {
    telugu: {
        recipe: "బెబింకా గుడ్లు, కొబ్బరి పాలు, చక్కెర మరియు పిండితో తయారు చేసే ప్రసిద్ధ గోవా పొరల మిఠాయి. దీనిని అనేక పొరలుగా కాల్చుతారు.",
        nutrients: "కొబ్బరి పాలు శక్తిని అందిస్తాయి. గుడ్లు ప్రోటీన్‌ను అందిస్తాయి."
    },
    hindi: {
        recipe: "बेबींका अंडे, नारियल के दूध, चीनी और आटे से बनाई जाने वाली प्रसिद्ध गोवा की परतदार मिठाई है। इसे कई परतों में बेक किया जाता है।",
        nutrients: "नारियल का दूध ऊर्जा प्रदान करता है। अंडे प्रोटीन का अच्छा स्रोत हैं।"
    }
},

    "Punjab|food|Makki di Roti": {
        telugu: {
            recipe:
                "మొక్కజొన్న పిండితో ముద్దను తయారు చేసి చేతితో ఒత్తి రొట్టెలుగా చేసి పెనం మీద కాలుస్తారు. దీనిని సాంప్రదాయకంగా సర్సోం దా సాగ్‌తో వడ్డిస్తారు.",
            nutrients:
                "మొక్కజొన్న పిండి ఫైబర్‌కు మంచి మూలం. ఇది సంక్లిష్ట కార్బోహైడ్రేట్లు మరియు కొన్ని బి-విటమిన్లను అందిస్తుంది."
        },
        hindi: {
            recipe:
                "मक्के के आटे से आटा गूँथकर हाथ से थपथपाकर मोटी रोटी बनाई जाती है और तवे पर पकाई जाती है। इसे पारंपरिक रूप से सरसों के साग के साथ परोसा जाता है।",
            nutrients:
                "मक्के का आटा फाइबर का अच्छा स्रोत है और जटिल कार्बोहाइड्रेट के साथ कुछ बी-विटामिन भी प्रदान करता है।"
        }
    },


    // ==================== GUJARAT FOOD ====================

    "Gujarat|food|Dhokla": {
        telugu: {
            recipe:
                "శనగపిండితో తయారు చేసిన పిండిని పులియబెట్టి ఆవిరిపై మెత్తగా ఉడికిస్తారు. తరువాత ఆవాలు, కరివేపాకు మరియు కొద్దిగా చక్కెర-నిమ్మరసం తాలింపుతో వడ్డిస్తారు.",
            nutrients:
                "శనగపిండిలో ప్రోటీన్ మరియు ఫైబర్ అధికంగా ఉంటాయి. పులియబెట్టడం జీర్ణక్రియను మెరుగుపరుస్తుంది మరియు బి-విటమిన్లను పెంచుతుంది. ఆవిరిపై వండటం వల్ల కొవ్వు తక్కువగా ఉంటుంది."
        },
        hindi: {
            recipe:
                "बेसन से बने घोल को किण्वित करके भाप में नरम और स्पंजी बनाया जाता है। इसके बाद सरसों, करी पत्ते और हल्के चीनी-नींबू के तड़के के साथ परोसा जाता है।",
            nutrients:
                "बेसन प्रोटीन और फाइबर से भरपूर होता है। किण्वन पाचन को बेहतर करता है और बी-विटामिन बढ़ाता है। भाप में पकाने से वसा की मात्रा कम रहती है।"
        }
    },

    "Gujarat|food|Thepla": {
        telugu: {
            recipe:
                "గోధుమ పిండిని మెంతి ఆకులు, పెరుగు మరియు మసాలాలతో కలిపి మెత్తని ముద్దగా చేసి పలుచగా ఒత్తి కొద్దిగా నూనెతో పెనం మీద కాలుస్తారు. ఎక్కువ రోజులు నిల్వ ఉండటం వల్ల ప్రయాణాల్లో కూడా తీసుకెళ్తారు.",
            nutrients:
                "మెంతి ఆకులు ఇనుము మరియు ఫైబర్‌ను అందిస్తాయి. సంపూర్ణ గోధుమ సంక్లిష్ట కార్బోహైడ్రేట్లను అందిస్తుంది. పెరుగు ప్రోటీన్ మరియు ప్రోబయోటిక్స్‌ను అందిస్తుంది."
        },
        hindi: {
            recipe:
                "गेहूँ के आटे में मेथी के पत्ते, दही और मसाले मिलाकर नरम आटा तैयार किया जाता है। इसे पतला बेलकर थोड़े तेल में तवे पर पकाया जाता है। लंबे समय तक टिकने के कारण इसे यात्रा के लिए भी पसंद किया जाता है।",
            nutrients:
                "मेथी के पत्ते आयरन और फाइबर देते हैं। साबुत गेहूँ जटिल कार्बोहाइड्रेट प्रदान करता है और दही प्रोटीन तथा प्रोबायोटिक्स देता है।"
        }
    },


    // ==================== WEST BENGAL FOOD ====================

    "West Bengal|food|Rasgulla": {
        telugu: {
            recipe:
                "పాలు మరిగించి తయారుచేసిన ఛెనా అనే పాల చీజ్‌ను మెత్తగా పిసికి ఉండలుగా చేసి చక్కెర పాకంలో ఉడికిస్తారు. పాకాన్ని పీల్చుకున్న తర్వాత అవి మెత్తగా మరియు స్పాంజిలా మారతాయి.",
            nutrients:
                "ఛెనా పాల నుండి ప్రోటీన్ మరియు కాల్షియంను అందిస్తుంది. అయితే చక్కెర పాకంలో కార్బోహైడ్రేట్లు ఎక్కువగా ఉండటం వల్ల ఇది అప్పుడప్పుడు తినే తీపి పదార్థంగా మంచిది."
        },
        hindi: {
            recipe:
                "दूध से बने छेना को अच्छी तरह मसलकर गोल आकार दिया जाता है और चीनी की चाशनी में उबाला जाता है। चाशनी सोखने के बाद रसगुल्ले नरम और स्पंजी हो जाते हैं।",
            nutrients:
                "छेना दूध से प्रोटीन और कैल्शियम प्रदान करता है। लेकिन चीनी की चाशनी में कार्बोहाइड्रेट अधिक होने के कारण इसे कभी-कभी खाने वाली मिठाई के रूप में लेना बेहतर है।"
        }
    },

    "West Bengal|food|Macher Jhol": {
        telugu: {
            recipe:
                "చేపను తేలికగా వేయించి, పసుపు మరియు మసాలాలతో తయారు చేసిన పలుచని రసంలో బంగాళదుంపలు మరియు కూరగాయలతో కలిపి ఉడికిస్తారు. ఇది బెంగాలీ కుటుంబాల్లో సాధారణంగా తినే వంటకం.",
            nutrients:
                "చేప అధిక నాణ్యత కలిగిన ప్రోటీన్ మరియు ఒమేగా-3 కొవ్వు ఆమ్లాలను అందిస్తుంది. పసుపు శోథ నిరోధక సమ్మేళనాలను అందిస్తుంది మరియు తేలికపాటి రసం కొవ్వు తక్కువగా ఉండేలా చేస్తుంది."
        },
        hindi: {
            recipe:
                "मछली को हल्का तलकर हल्दी और मसालों वाले पतले शोरबे में आलू तथा सब्जियों के साथ पकाया जाता है। यह बंगाली घरों में रोज़मर्रा के भोजन का एक लोकप्रिय हिस्सा है।",
            nutrients:
                "मछली उच्च गुणवत्ता वाला प्रोटीन और ओमेगा-3 फैटी एसिड प्रदान करती है। हल्दी सूजनरोधी यौगिक देती है और हल्का शोरबा इसे कम वसा वाला भोजन बनाए रखता है।"
        }
    },


    // ==================== ODISHA FOOD ====================

    "Odisha|food|Dalma": {
        telugu: {
            recipe:
                "గుమ్మడికాయ, పచ్చి అరటిపండు మరియు వంకాయ వంటి మిశ్రమ కూరగాయలను పప్పుతో కలిపి ఉడికిస్తారు. తరువాత పంచ్ ఫోరన్ అనే ఐదు మసాలాల మిశ్రమం మరియు కొద్దిగా నెయ్యితో తాలింపు ఇస్తారు.",
            nutrients:
                "పప్పులు ప్రోటీన్‌ను అందిస్తాయి. మిశ్రమ కూరగాయలు ఫైబర్ మరియు విటమిన్లను అందిస్తాయి. అందువల్ల ఇది పోషకమైన మరియు సమతుల్యమైన వంటకం."
        },
        hindi: {
            recipe:
                "कद्दू, कच्चे केले और बैंगन जैसी मिश्रित सब्जियों को दाल के साथ पकाया जाता है। फिर पंचफोरन नामक पाँच मसालों के मिश्रण और थोड़े घी का तड़का लगाया जाता है।",
            nutrients:
                "दाल प्रोटीन प्रदान करती है और मिश्रित सब्जियाँ फाइबर तथा विटामिन देती हैं। इसलिए यह एक पौष्टिक और संतुलित व्यंजन है।"
        }
    },

    "Odisha|food|Pakhala Bhata": {
        telugu: {
            recipe:
                "వండిన అన్నాన్ని నీటిలో నానబెట్టి లేదా రాత్రంతా పులియబెట్టి, పెరుగుతో వడ్డిస్తారు. దీనితో పాటు సాధారణంగా వేయించిన కూరగాయలు లేదా చేపను వడ్డిస్తారు.",
            nutrients:
                "పులియబెట్టడం వల్ల ప్రయోజనకరమైన ప్రోబయోటిక్స్ ఏర్పడి అన్నం సులభంగా జీర్ణమవుతుంది. వేడి వాతావరణంలో శరీరాన్ని చల్లబరుస్తుందని సంప్రదాయంగా భావిస్తారు."
        },
        hindi: {
            recipe:
                "पके हुए चावल को पानी में भिगोया जाता है या रातभर किण्वित किया जाता है और दही के साथ परोसा जाता है। इसके साथ आमतौर पर तली हुई सब्जियाँ या मछली परोसी जाती हैं।",
            nutrients:
                "किण्वन से लाभकारी प्रोबायोटिक्स मिलते हैं और चावल पचने में आसान होता है। इसे गर्म मौसम में शरीर को ठंडक देने वाला भोजन माना जाता है।"
        }
    },


    // ==================== UTTAR PRADESH FOOD ====================

    "Uttar Pradesh|food|Awadhi Biryani": {
        telugu: {
            recipe:
                "బాస్మతి బియ్యం మరియు మెరినేట్ చేసిన మాంసాన్ని పొరలుగా వేసి 'దమ్ పుఖ్త్' పద్ధతిలో మూసిన పాత్రలో తక్కువ మంటపై నెమ్మదిగా వండుతారు. లక్నో నవాబుల వంటశాలల్లో ఈ వంట పద్ధతి అభివృద్ధి చెందింది.",
            nutrients:
                "మాంసం ప్రోటీన్‌ను, బియ్యం కార్బోహైడ్రేట్లను అందిస్తాయి. కుంకుమపువ్వు మరియు జాపత్రి వంటి సువాసన మసాలాలు అదనపు సమ్మేళనాలను అందిస్తాయి. నెయ్యి వల్ల కేలరీలు పెరుగుతాయి."
        },
        hindi: {
            recipe:
                "बासमती चावल और मसालेदार मांस को परतों में रखकर 'दम पुख्त' विधि से बंद बर्तन में धीमी आँच पर पकाया जाता है। यह तकनीक लखनऊ के नवाबों की रसोई में विकसित हुई थी।",
            nutrients:
                "मांस प्रोटीन और चावल कार्बोहाइड्रेट प्रदान करते हैं। केसर और जावित्री जैसे सुगंधित मसाले अतिरिक्त लाभकारी यौगिक देते हैं। घी के कारण कैलोरी की मात्रा बढ़ जाती है।"
        }
    },

    "Uttar Pradesh|food|Petha": {
        telugu: {
            recipe:
                "బూడిద గుమ్మడికాయను ఉడికించి, గట్టిగా ఉండేందుకు సున్నం నీటిలో నానబెట్టి, పారదర్శకంగా మారే వరకు చక్కెర పాకంలో ఉడికిస్తారు. ఇది ఆగ్రా నగరంతో ప్రత్యేకంగా అనుబంధం కలిగిన తీపి పదార్థం.",
            nutrients:
                "బూడిద గుమ్మడికాయలో కేలరీలు తక్కువగా ఉండి కొంత ఫైబర్ ఉంటుంది. అయితే చక్కెర పాకం కారణంగా తయారైన పేఠాలో చక్కెర అధికంగా ఉంటుంది."
        },
        hindi: {
            recipe:
                "सफेद कद्दू को उबालकर मजबूती के लिए चूने के पानी में भिगोया जाता है और फिर पारदर्शी होने तक चीनी की चाशनी में पकाया जाता है। यह मिठाई विशेष रूप से आगरा से जुड़ी हुई है।",
            nutrients:
                "सफेद कद्दू में कैलोरी कम और कुछ फाइबर होता है, लेकिन चीनी की चाशनी के कारण तैयार पेठे में चीनी की मात्रा अधिक होती है।"
        }
    },


    // ==================== MADHYA PRADESH FOOD ====================

    "Madhya Pradesh|food|Poha": {
        telugu: {
            recipe:
                "అటుకులను తేలికగా కడిగి, ఆవాలు, కరివేపాకు, పసుపు, ఉల్లిపాయలు మరియు వేరుశెనగలతో వేయించి, చివరగా నిమ్మరసం మరియు కొత్తిమీర కలుపుతారు.",
            nutrients:
                "అటుకులు తేలికైన కార్బోహైడ్రేట్లను అందిస్తాయి. వేరుశెనగలు ప్రోటీన్ మరియు ఆరోగ్యకరమైన కొవ్వులను అందిస్తాయి. నిమ్మరసం విటమిన్ సిని అందిస్తుంది."
        },
        hindi: {
            recipe:
                "पोहा को हल्का धोकर सरसों, करी पत्ते, हल्दी, प्याज और मूंगफली के साथ भूनते हैं। अंत में नींबू का रस और ताजा धनिया मिलाया जाता है।",
            nutrients:
                "पोहा हल्के कार्बोहाइड्रेट प्रदान करता है। मूंगफली प्रोटीन और स्वस्थ वसा देती है, जबकि नींबू विटामिन सी प्रदान करता है।"
        }
    },

    "Madhya Pradesh|food|Bhutte Ka Kees": {
        telugu: {
            recipe:
                "తురిమిన మొక్కజొన్నను పాలు, ఆవాలు మరియు మసాలాలతో కలిపి మెత్తగా మరియు కొద్దిగా తీపి-కారంగా ఉండే వంటకంగా ఉడికిస్తారు.",
            nutrients:
                "మొక్కజొన్నలో ఫైబర్, సంక్లిష్ట కార్బోహైడ్రేట్లు మరియు కొన్ని బి-విటమిన్లు ఉంటాయి. పాలు కాల్షియం మరియు ప్రోటీన్‌ను అందిస్తాయి."
        },
        hindi: {
            recipe:
                "कद्दूकस किए हुए भुट्टे को दूध, सरसों और मसालों के साथ पकाकर नरम तथा हल्का मीठा-नमकीन व्यंजन बनाया जाता है।",
            nutrients:
                "मक्का फाइबर, जटिल कार्बोहाइड्रेट और कुछ बी-विटामिन प्रदान करता है। दूध कैल्शियम और प्रोटीन देता है।"
        }
    },


    // ==================== MANIPUR FOOD ====================

    "Manipur|food|Eromba": {
        telugu: {
            recipe:
                "ఉడికించిన కూరగాయలను మెత్తగా చేసి, పులియబెట్టిన చేప (న్గారి) మరియు మిరపకాయలతో కలిపి ఘాటైన మరియు పోషకమైన వంటకంగా తయారు చేస్తారు.",
            nutrients:
                "కూరగాయలు ఫైబర్ మరియు విటమిన్లను అందిస్తాయి. పులియబెట్టిన చేప ప్రోటీన్ మరియు ప్రయోజనకరమైన ప్రోబయోటిక్స్‌ను అందిస్తుంది."
        },
        hindi: {
            recipe:
                "उबली हुई सब्जियों को मैश करके किण्वित मछली (नगारी) और मिर्च के साथ मिलाया जाता है। इससे एक तीखा और पौष्टिक मणिपुरी व्यंजन तैयार होता है।",
            nutrients:
                "सब्जियाँ फाइबर और विटामिन प्रदान करती हैं, जबकि किण्वित मछली प्रोटीन और लाभकारी प्रोबायोटिक्स देती है।"
        }
    },


    // ==================== MEGHALAYA FOOD ====================

    "Meghalaya|food|Jadoh": {
        telugu: {
            recipe:
                "బియ్యాన్ని పంది మాంసం లేదా చికెన్ మరియు రక్తంతో కలిపి స్థానిక మసాలాలతో ఉడికిస్తారు. ఇది ఖాసీ సమాజానికి చెందిన సంప్రదాయ వన్-పాట్ వంటకం.",
            nutrients:
                "మాంసం ప్రోటీన్‌ను అందిస్తుంది మరియు బియ్యం కార్బోహైడ్రేట్లను అందిస్తుంది. అందువల్ల ఇది పొట్ట నింపే మరియు శక్తిని అందించే భోజనం."
        },
        hindi: {
            recipe:
                "चावल को सूअर के मांस या चिकन और रक्त के साथ स्थानीय मसालों में पकाया जाता है। यह खासी समुदाय का पारंपरिक एक-पॉट व्यंजन है।",
            nutrients:
                "मांस प्रोटीन प्रदान करता है और चावल कार्बोहाइड्रेट देता है। इसलिए यह पेट भरने वाला और ऊर्जा प्रदान करने वाला भोजन है।"
        }
    },


    // ==================== MIZORAM FOOD ====================

    "Mizoram|food|Bai": {
        telugu: {
            recipe:
                "ఆవాల ఆకులు మరియు బీన్స్ వంటి కూరగాయలను కొద్దిగా పంది కొవ్వు మరియు తక్కువ మసాలాలతో కలిపి నీటిలో ఉడికించి సాధారణమైన స్ట్యూ తయారు చేస్తారు.",
            nutrients:
                "కూరగాయలు ఫైబర్ మరియు విటమిన్లను అందిస్తాయి. తేలికగా వండే పద్ధతి కారణంగా అదనపు కొవ్వు తక్కువగా ఉంటుంది."
        },
        hindi: {
            recipe:
                "सरसों के पत्तों और बीन्स जैसी सब्जियों को थोड़ी मात्रा में सूअर की चर्बी और कम मसालों के साथ उबालकर सरल स्टू बनाया जाता है।",
            nutrients:
                "सब्जियाँ फाइबर और विटामिन प्रदान करती हैं। हल्की पकाने की विधि के कारण इसमें अतिरिक्त वसा कम रहती है।"
        }
    },


    // ==================== NAGALAND FOOD ====================

    "Nagaland|food|Smoked Pork": {
        telugu: {
            recipe:
                "పంది మాంసాన్ని చెక్క మంటపై పొగబెట్టి ఎక్కువకాలం నిల్వ ఉండేలా మరియు ప్రత్యేక రుచిని వచ్చేలా చేస్తారు. తరువాత దీనిని బాంబూ షూట్ మరియు ఘాటైన నాగ మిరపకాయతో వండుతారు.",
            nutrients:
                "పంది మాంసం ప్రోటీన్‌ను అందిస్తుంది. అయితే ఇందులో కొవ్వు ఎక్కువగా ఉండవచ్చు మరియు పొగబెట్టే ప్రక్రియ కారణంగా పరిమితంగా తినడం మంచిది."
        },
        hindi: {
            recipe:
                "सूअर के मांस को लकड़ी की आग के ऊपर धुएँ में पकाकर सुरक्षित रखा जाता है और विशेष स्वाद दिया जाता है। बाद में इसे बाँस की कोपलों और तीखी नागा मिर्च के साथ पकाया जाता है।",
            nutrients:
                "सूअर का मांस प्रोटीन प्रदान करता है, लेकिन इसमें वसा की मात्रा अधिक हो सकती है और धूम्रपान की प्रक्रिया के कारण इसे सीमित मात्रा में खाना बेहतर है।"
        }
    },


    // ==================== SIKKIM FOOD ====================

    "Sikkim|food|Momos": {
        telugu: {
            recipe:
                "పిండితో చిన్న పొట్లాలను తయారు చేసి వాటిలో కూరగాయలు లేదా మాంసాన్ని నింపి ఆవిరిపై ఉడికిస్తారు. వీటిని సాధారణంగా కారంగా ఉండే టమాటా పచ్చడితో వడ్డిస్తారు.",
            nutrients:
                "ఆవిరిపై వండటం వల్ల మోమోల్లో కొవ్వు తక్కువగా ఉంటుంది. లోపలి పదార్థాలు ప్రోటీన్‌ను అందిస్తాయి మరియు కూరగాయలు ఫైబర్‌ను అందిస్తాయి."
        },
        hindi: {
            recipe:
                "आटे की छोटी पोटलियाँ बनाकर उनमें सब्जियाँ या मांस भरा जाता है और भाप में पकाया जाता है। इन्हें आमतौर पर तीखी टमाटर की चटनी के साथ परोसा जाता है।",
            nutrients:
                "भाप में पकाने के कारण मोमोज में वसा अपेक्षाकृत कम रहती है। भरावन प्रोटीन देता है और सब्जियाँ फाइबर प्रदान करती हैं।"
        }
    },

    "Sikkim|food|Thukpa": {
        telugu: {
            recipe:
                "నూడుల్స్‌ను కూరగాయలు మరియు మాంసంతో కూడిన రసంలో ఉడికిస్తారు. ఇది టిబెట్ నుండి హిమాలయ వాణిజ్య మార్గాలు మరియు వలసల ద్వారా సిక్కింకు చేరిన వంటకం.",
            nutrients:
                "రసం మరియు నూడుల్స్ శరీరానికి వేడి మరియు కార్బోహైడ్రేట్లను అందిస్తాయి. మాంసం ప్రోటీన్‌ను, కూరగాయలు విటమిన్లు మరియు ఫైబర్‌ను అందిస్తాయి."
        },
        hindi: {
            recipe:
                "नूडल्स को सब्जियों और मांस वाले शोरबे में पकाया जाता है। यह व्यंजन तिब्बत से हिमालयी व्यापार और प्रवास के माध्यम से सिक्किम पहुँचा।",
            nutrients:
                "शोरबा और नूडल्स गर्माहट तथा कार्बोहाइड्रेट प्रदान करते हैं। मांस प्रोटीन देता है और सब्जियाँ विटामिन तथा फाइबर प्रदान करती हैं।"
        }
    },


    // ==================== TRIPURA FOOD ====================

    "Tripura|food|Mui Borok": {
        telugu: {
            recipe:
                "పులియబెట్టిన చేప (బెర్మా)ను స్థానిక కూరగాయలు మరియు బాంబూ షూట్‌తో కలిపి వండుతారు. ఇది త్రిపురలోని బోరోక్ ఆదివాసీ సమాజాల సంప్రదాయ వంటకం.",
            nutrients:
                "పులియబెట్టిన చేప ప్రోటీన్ మరియు ప్రయోజనకరమైన ప్రోబయోటిక్స్‌ను అందిస్తుంది. కూరగాయలు ఫైబర్ మరియు విటమిన్లను అందిస్తాయి."
        },
        hindi: {
            recipe:
                "किण्वित मछली (बर्मा) को स्थानीय सब्जियों और बाँस की कोपलों के साथ पकाया जाता है। यह त्रिपुरा के स्वदेशी बोरोक समुदायों का पारंपरिक व्यंजन है।",
            nutrients:
                "किण्वित मछली प्रोटीन और लाभकारी प्रोबायोटिक्स प्रदान करती है, जबकि सब्जियाँ फाइबर और विटामिन देती हैं।"
        }
    },


    // ==================== UTTARAKHAND FOOD ====================

    "Uttarakhand|food|Kafuli": {
        telugu: {
            recipe:
                "పాలకూర మరియు ఇతర ఆకుకూరలను మసాలాలతో కలిపి చిక్కటి పేస్ట్‌లా ఉడికిస్తారు. చివరగా మజ్జిగ లేదా పెరుగు కలుపుతారు.",
            nutrients:
                "ఆకుకూరలు ఇనుము, కాల్షియం మరియు విటమిన్లు ఎ మరియు సి యొక్క మంచి మూలాలు."
        },
        hindi: {
            recipe:
                "पालक और अन्य हरी पत्तेदार सब्जियों को मसालों के साथ पकाकर गाढ़ी प्यूरी बनाई जाती है। अंत में छाछ या दही मिलाया जाता है।",
            nutrients:
                "हरी पत्तेदार सब्जियाँ आयरन, कैल्शियम और विटामिन ए तथा सी का अच्छा स्रोत हैं।"
        }
    },

    "Uttarakhand|food|Aloo Ke Gutke": {
        telugu: {
            recipe:
                "ఉడికించిన బంగాళదుంపలను ఆవాలు, జీలకర్ర మరియు జఖ్యా వంటి హిమాలయ మసాలాలతో పెనం మీద వేయిస్తారు.",
            nutrients:
                "బంగాళదుంపలు కార్బోహైడ్రేట్లు మరియు పొటాషియంను అందిస్తాయి. తేలికపాటి తాలింపు కారణంగా అదనపు కొవ్వు తక్కువగా ఉంటుంది."
        },
        hindi: {
            recipe:
                "उबले हुए आलू को सरसों, जीरा और जख्या जैसे हिमालयी मसालों के साथ तवे पर भुना जाता है।",
            nutrients:
                "आलू कार्बोहाइड्रेट और पोटैशियम प्रदान करते हैं। हल्के तड़के के कारण इसमें अतिरिक्त वसा कम रहती है।"
        }
    }

    "Karnataka|food|Mysore Pak": {
        telugu: {
            recipe: "శనగపిండి, నెయ్యి మరియు చక్కెరను కలిపి ఉడికించి, మృదువైన మరియు రుచికరమైన తీపి పదార్థంగా తయారు చేస్తారు. ఇది మొదట మైసూర్ రాజభవనం వంటగదిలో తయారైనట్లు ప్రసిద్ధి చెందింది.",
            nutrients: "శనగపిండి కొంత ప్రోటీన్‌ను అందిస్తుంది. అయితే నెయ్యి మరియు చక్కెర ఎక్కువగా ఉండటం వల్ల ఇది అధిక క్యాలరీల తీపి పదార్థం."
        },
        hindi: {
            recipe: "बेसन, घी और चीनी को एक साथ पकाकर मुलायम और स्वादिष्ट मिठाई बनाई जाती है। माना जाता है कि इसे सबसे पहले मैसूर महल की रसोई में तैयार किया गया था।",
            nutrients: "बेसन कुछ मात्रा में प्रोटीन प्रदान करता है, लेकिन अधिक घी और चीनी होने के कारण यह अधिक कैलोरी वाली मिठाई है।"
        }
    },

    "Telangana|food|Sakinalu": {
        telugu: {
            recipe:
                "బియ్యప్పిండి ముద్దను నువ్వులతో కలిపి, మురిపెంగా ఆకారంలో చుట్టి, గరిగరిలాడేలా వేయిస్తారు — సాంప్రదాయకంగా సంక్రాంతి పండుగ కోసం తయారు చేస్తారు.",
            nutrients:
                "నువ్వులు కాల్షియం మరియు ఆరోగ్యకరమైన కొవ్వులను అందిస్తాయి, అయితే డీప్ ఫ్రై చేయడం వల్ల ఇది కేలరీలు ఎక్కువగా ఉండే వంటకంగా మారుతుంది, రోజువారీ చిరుతిండిగా కాకుండా అప్పుడప్పుడు ఆస్వాదించడం మంచిది."
        },
        hindi: {
            recipe:
                "चावल के आटे को तिल के साथ मिलाकर, सर्पिल आकार में बनाया जाता है, और कुरकुरा होने तक डीप-फ्राई किया जाता है — यह परंपरागत रूप से संक्रांति त्योहार के लिए बनाया जाता है।",
            nutrients:
                "तिल कैल्शियम और स्वस्थ वसा प्रदान करते हैं, हालाँकि डीप-फ्राई करने से यह कैलोरी में भारी बन जाता है, इसलिए इसे रोज़ के नाश्ते के बजाय कभी-कभी ही खाना बेहतर है।"
        }
    },

    "Telangana|dress|Pochampally Saree": {
        telugu:
            "పోచంపల్లి గ్రామం నుండి వచ్చే ఈ చేనేత పట్టు చీరలు ఇకత్ పద్ధతిని ఉపయోగిస్తాయి, ఇందులో నూలును నేయడానికి ముందు నమూనాలలో కట్టి-రంగులు వేస్తారు, ఇది వస్త్రానికి ప్రత్యేకమైన జ్యామితీయ డిజైన్లను ఇస్తుంది. ఈ హస్తకళకు దాని మూలం మరియు సాంకేతికతను గుర్తించే భౌగోళిక సూచిక (GI) ట్యాగ్ ఉంది.",
        hindi:
            "पोचमपल्ली गाँव की ये हाथ से बुनी रेशमी साड़ियाँ इकत तकनीक का उपयोग करती हैं, जिसमें बुनाई से पहले धागों को पैटर्न में बाँधकर रंगा जाता है, जिससे कपड़े को विशिष्ट ज्यामितीय डिज़ाइन मिलते हैं। इस शिल्प को इसकी उत्पत्ति और तकनीक को मान्यता देने वाला भौगोलिक संकेत (GI) टैग प्राप्त है।"
    },

    "Telangana|festival|Bathukamma": {
        telugu:
            "బతుకమ్మ అనేది గౌరీ దేవి గౌరవార్థం ప్రధానంగా తెలంగాణ మహిళలు జరుపుకునే పూల పండుగ. పువ్వులను శంకు ఆకారంలో పేర్చి, తరువాత నీటిలో తేలియాడేలా వదులుతారు, ఇది ప్రకృతి పునరుద్ధరణను మరియు దేవి పట్ల భక్తిని సూచిస్తుంది.",
        hindi:
            "बतुकम्मा एक पुष्प उत्सव है जिसे मुख्य रूप से तेलंगाना की महिलाएँ देवी गौरी के सम्मान में मनाती हैं। फूलों को शंकु आकार में सजाया जाता है और बाद में पानी पर तैराया जाता है, जो प्रकृति के नवीनीकरण और देवी के प्रति श्रद्धा का प्रतीक है।"
    },

    "Telangana|places|Charminar": {
        telugu:
            "చార్మినార్‌ను 1591లో సుల్తాన్ మహమ్మద్ కులీ కుతుబ్ షా హైదరాబాద్ స్థాపనను మరియు ఆ ప్రాంతంలో ప్లేగు వ్యాధి ముగింపును గుర్తు చేసుకుంటూ నిర్మించారు. దీని నాలుగు గొప్ప తోరణాలు మరియు మీనార్లు అప్పటి నుండి నగరానికి శాశ్వత చిహ్నంగా మారాయి.",
        hindi:
            "चारमीनार का निर्माण 1591 में सुल्तान मुहम्मद कुली कुतुब शाह ने हैदराबाद की स्थापना और क्षेत्र में प्लेग की समाप्ति दोनों को चिह्नित करने के लिए करवाया था। इसके चार भव्य मेहराब और मीनारें तब से शहर का स्थायी प्रतीक बन गई हैं।"
    },

    "Telangana|places|Golconda Fort": {
        telugu:
            "గోల్కొండ కోట కాకతీయ రాజవంశం కాలంలో ప్రారంభమైంది మరియు తరువాత కుతుబ్ షాహీ పాలకులచే బాగా విస్తరించబడింది. ఇది చారిత్రకంగా వజ్రాల వ్యాపార కేంద్రంగా ఉండేది — కోహినూర్‌తో సహా ప్రసిద్ధ రత్నాలు ఇక్కడ నుండి వెళ్లాయని చెబుతారు — 1687లో మొఘలుల వశమయ్యే వరకు.",
        hindi:
            "गोलकुंडा किला काकतीय राजवंश के अधीन शुरू हुआ और बाद में कुतुब शाही शासकों द्वारा बड़े पैमाने पर विस्तारित किया गया। यह ऐतिहासिक रूप से हीरे के व्यापार का केंद्र था — कहा जाता है कि कोहिनूर सहित प्रसिद्ध रत्न यहीं से होकर गुज़रे — 1687 में मुगलों के अधीन आने से पहले।"
    },

    // ---------------- ARUNACHAL PRADESH ----------------
    "Arunachal Pradesh|dance|Bardo Chham": {
        telugu:
            "బర్డో ఛామ్ అనేది షెర్‌దుక్పెన్ సమాజానికి చెందిన ముసుగు ఆచార నృత్యం, ఇది మంచి మరియు చెడు ఆత్మల మధ్య పోరాటాన్ని చిత్రీకరిస్తుంది, సాంప్రదాయకంగా షెర్‌దుక్పెన్ నూతన సంవత్సరం సందర్భంగా రాబోయే సంవత్సరానికి దురదృష్టాన్ని తరిమివేయడానికి ప్రదర్శిస్తారు.",
        hindi:
            "बर्डो छम शेरदुक्पेन समुदाय का एक मुखौटा अनुष्ठान नृत्य है, जो अच्छी और बुरी आत्माओं के बीच के संघर्ष को दर्शाता है, परंपरागत रूप से शेरदुक्पेन नववर्ष के अवसर पर आने वाले वर्ष के लिए दुर्भाग्य को दूर भगाने के लिए प्रस्तुत किया जाता है।"
    },

    "Arunachal Pradesh|dance|Ponung": {
        telugu:
            "పోనుంగ్‌ను ఆది తెగకు చెందిన మహిళలు 'మిరి' అని పిలువబడే పురుష పఠించేవారి మంత్రోచ్చారణకు అనుగుణంగా ఏకకాలంలో నృత్యం చేస్తారు, అతను తోడుగా ఉండే 'అబాంగ్' పద్యాల ద్వారా మూలపురాణాలను మరియు జానపద కథలను వివరిస్తాడు.",
        hindi:
            "पोनुंग को आदि जनजाति की महिलाएँ 'मिरी' नामक एक पुरुष पाठक के मंत्रोच्चार के साथ एक लय में नृत्य करते हुए प्रस्तुत करती हैं, जो साथ में गाई जाने वाली 'अबांग' कविताओं के माध्यम से उत्पत्ति मिथकों और लोककथाओं का वर्णन करता है।"
    },

    "Arunachal Pradesh|arts|Traditional Weaving": {
        telugu:
            "అరుణాచల్ ప్రదేశ్‌లోని ప్రతి గిరిజన సమాజం తనదైన బ్యాక్‌స్ట్రాప్-మగ్గం నేత సంప్రదాయాన్ని కొనసాగిస్తోంది, చారిత్రకంగా వంశ గుర్తింపు మరియు సామాజిక హోదాను సూచించే విభిన్న జ్యామితీయ నమూనాలతో శాలువాలు మరియు వస్త్రాలను తయారు చేస్తుంది.",
        hindi:
            "अरुणाचल प्रदेश का हर जनजातीय समुदाय अपनी स्वयं की बैकस्ट्रैप-करघा बुनाई परंपरा को बनाए रखता है, जो ऐतिहासिक रूप से कुल पहचान और सामाजिक दर्जे को दर्शाने वाले विशिष्ट ज्यामितीय प्रतीकों के साथ शॉल और वस्त्र तैयार करता है।"
    },

    "Arunachal Pradesh|food|Thukpa": {
        telugu: {
            recipe:
                "నూడుల్స్‌ను కూరగాయలు మరియు మాంసంతో కూడిన రసంలో ఉడికిస్తారు, వెల్లుల్లి, అల్లం మరియు స్థానిక మూలికలతో రుచి కలుపుతారు — ఇది టిబెట్ నుండి హిమాలయ వాణిజ్య మార్గాల ద్వారా అరుణాచల్ ప్రదేశ్‌కు చేరిన వంటకం.",
            nutrients:
                "రసం మరియు నూడుల్స్ వేడినిచ్చే పిండి పదార్థాలను అందిస్తాయి, మాంసం ప్రోటీన్‌ను జోడిస్తుంది, మరియు కూరగాయలు ఫైబర్ మరియు విటమిన్లను అందిస్తాయి."
        },
        hindi: {
            recipe:
                "नूडल्स को सब्जियों और मांस के साथ शोरबे में उबाला जाता है, लहसुन, अदरक और स्थानीय जड़ी-बूटियों से स्वाद दिया जाता है — यह व्यंजन तिब्बत से हिमालयी व्यापार मार्गों के ज़रिए अरुणाचल प्रदेश पहुँचा।",
            nutrients:
                "शोरबा और नूडल्स गर्माहट देने वाले कार्बोहाइड्रेट प्रदान करते हैं, मांस प्रोटीन जोड़ता है, और सब्जियाँ फाइबर व विटामिन प्रदान करती हैं।"
        }
    },

    "Arunachal Pradesh|dress|Traditional Tribal Dress": {
        telugu:
            "ఇరవైకి పైగా ప్రధాన తెగలతో, అరుణాచల్ ప్రదేశ్‌కు ఒకే ఒక సాంప్రదాయ దుస్తులు లేవు; ప్రతి సమాజం తనదైన చేతితో నేసిన వస్త్రాలను వెదురు మరియు పూసల ఆభరణాలతో జతచేసి ధరిస్తుంది, చారిత్రకంగా ఒక తెగ గుర్తింపును మరొకటి నుండి వేరు చేయడానికి ఉపయోగించేవారు.",
        hindi:
            "बीस से अधिक प्रमुख जनजातियों के साथ, अरुणाचल प्रदेश की कोई एक पारंपरिक पोशाक नहीं है; हर समुदाय बांस और मनके के आभूषणों के साथ अपने स्वयं के हाथ से बुने वस्त्र पहनता है, जिनका ऐतिहासिक रूप से एक जनजाति की पहचान को दूसरी से अलग दर्शाने के लिए उपयोग किया जाता रहा है।"
    },

    "Arunachal Pradesh|festival|Losar": {
        telugu:
            "లోసార్ టిబెటన్ బౌద్ధ నూతన సంవత్సరాన్ని సూచిస్తుంది, దీన్ని మోన్పా మరియు షెర్‌దుక్పెన్ సమాజాలు రాబోయే సంవత్సరాన్ని స్వాగతించడానికి మఠాలలో ప్రార్థనలు, ముసుగు నృత్యాలు మరియు నైవేద్యాలతో జరుపుకుంటాయి.",
        hindi:
            "लोसार तिब्बती बौद्ध नववर्ष का प्रतीक है, जिसे मोनपा और शेरदुक्पेन समुदाय आने वाले वर्ष का स्वागत करने के लिए मठों में प्रार्थनाओं, मुखौटा नृत्यों और भेंट अर्पण के साथ मनाते हैं।"
    },

    "Arunachal Pradesh|festival|Solung": {
        telugu:
            "సోలుంగ్ ఆది తెగ యొక్క పంట పండుగ, ఇది సంపద మరియు సౌభాగ్య దేవత అయిన కైనే నానేను గౌరవిస్తుంది, ఇది సీజన్ పంటకు కృతజ్ఞతలు తెలియజేస్తూ విందు మరియు పోనుంగ్ నృత్యాలతో జరుపుకుంటారు.",
        hindi:
            "सोलुंग आदि जनजाति का फसल उत्सव है, जो धन और समृद्धि की देवी काइने नाने के सम्मान में मनाया जाता है, और मौसम की फसल के लिए आभार व्यक्त करते हुए भोज व पोनुंग नृत्यों के साथ मनाया जाता है।"
    },

    "Arunachal Pradesh|places|Tawang": {
        telugu:
            "తవాంగ్ 1680-81లో మెరక్ లామా లోద్రే గ్యాత్సో స్థాపించిన తవాంగ్ మఠానికి నిలయం, ఇది భారతదేశంలోని అతిపెద్ద బౌద్ధ మఠాలలో ఒకటిగా మరియు చారిత్రకంగా టిబెటన్ బౌద్ధ విద్యకు ముఖ్యమైన కేంద్రంగా ఉంది.",
        hindi:
            "तवांग, तवांग मठ का घर है, जिसकी स्थापना 1680-81 में मेरक लामा लोद्रे ग्यात्सो ने की थी, और यह भारत के सबसे बड़े बौद्ध मठों में से एक है, जो ऐतिहासिक रूप से तिब्बती बौद्ध शिक्षा का एक महत्वपूर्ण केंद्र रहा है।"
    },

    "Arunachal Pradesh|places|Ziro Valley": {
        telugu:
            "అపతానీ తెగకు నిలయమైన జిరో లోయ, ఒకే వరి పొలాల్లో తడి-వరి సాగును చేపల పెంపకంతో మిళితం చేసే విలక్షణమైన స్థిరమైన వ్యవసాయ విధానానికి ప్రసిద్ధి చెందింది, మరియు దీని ప్రత్యేకమైన ప్రకృతి దృశ్యం మరియు అపతానీ సంప్రదాయాల కోసం యునెస్కో తాత్కాలిక ప్రపంచ వారసత్వ జాబితాలో ఉంది.",
        hindi:
            "अपातानी जनजाति का घर, ज़ीरो घाटी उसी धान के खेतों में गीली-धान खेती को मछली पालन के साथ मिलाने वाली विशिष्ट टिकाऊ खेती प्रणाली के लिए जानी जाती है, और अपने अनूठे परिदृश्य व अपातानी परंपराओं के लिए यूनेस्को की अस्थायी विश्व धरोहर सूची में शामिल है।"
    },

    // ---------------- ASSAM ----------------
    "Assam|dance|Bihu": {
        telugu:
            "బిహు నృత్యాన్ని అస్సాం బిహు పండుగల సందర్భంగా ప్రదర్శిస్తారు, దీని ఉత్సాహభరిత కదలికలు సాంప్రదాయకంగా వ్యవసాయ చక్రాలు మరియు యువకులు మరియు యువతుల మధ్య ప్రణయ ఆచారాలతో ముడిపడి ఉంటాయి, సాంప్రదాయ డప్పులు (ధోల్) మరియు పిల్లనగ్రోవులు (పేపా)తో కలిసి ప్రదర్శిస్తారు.",
        hindi:
            "बिहू नृत्य असम के बिहू उत्सवों के दौरान किया जाता है, इसकी ऊर्जावान गतियाँ परंपरागत रूप से कृषि चक्रों और युवा पुरुषों व महिलाओं के बीच प्रणय अनुष्ठानों से जुड़ी होती हैं, जिन्हें पारंपरिक ढोल और पेपा (बांसुरी) के साथ प्रस्तुत किया जाता है।"
    },

    "Assam|arts|Muga Silk": {
        telugu:
            "ముగా పట్టు అస్సాంకు ప్రత్యేకమైన బంగారు రంగు పట్టు, స్థానిక సోమ్ మరియు సువాలు ఆకులను తినిపించే పట్టుపురుగుల నుండి తయారవుతుంది. ఈ హస్తకళను శతాబ్దాలుగా ఈ ప్రాంతంలో ఆచరిస్తున్నారు మరియు దీని అరుదైన లక్షణం మరియు మన్నిక కారణంగా చారిత్రకంగా రాజకుటుంబాలు మరియు ప్రభువులకు మాత్రమే పరిమితం చేయబడింది.",
        hindi:
            "मूगा रेशम असम के लिए विशिष्ट सुनहरे रंग का रेशम है, जो स्थानीय सोम और सुआलू की पत्तियाँ खाने वाले रेशम कीड़ों से तैयार किया जाता है। यह शिल्प सदियों से इस क्षेत्र में प्रचलित रहा है और अपनी दुर्लभता व टिकाऊपन के कारण ऐतिहासिक रूप से राजपरिवारों और कुलीन वर्ग तक ही सीमित था।"
    },

    "Assam|food|Khar": {
        telugu: {
            recipe:
                "పచ్చి బొప్పాయి, పప్పులు మరియు కూరగాయలను ఎండబెట్టిన అరటి తొక్క బూడిద నుండి తయారుచేసిన క్షార ద్రావణంతో వండుతారు, ఇది వంటకానికి దాని విలక్షణమైన రుచిని ఇస్తుంది — దీన్ని సాంప్రదాయకంగా అస్సామీ భోజనంలో మొదటి వంటకంగా తింటారు.",
            nutrients:
                "క్షార ఖార్ సాంప్రదాయకంగా జీర్ణక్రియకు సహాయపడుతుందని నమ్ముతారు, కూరగాయలు మరియు పప్పులు ఫైబర్ మరియు మొక్కల ప్రోటీన్‌ను అందిస్తాయి."
        },
        hindi: {
            recipe:
                "कच्चे पपीते, दालों और सब्जियों को धूप में सुखाए गए केले के छिलके की राख से बनाए गए क्षारीय घोल के साथ पकाया जाता है, जो व्यंजन को इसका विशिष्ट स्वाद देता है — इसे परंपरागत रूप से असमिया भोजन के पहले व्यंजन के रूप में खाया जाता है।",
            nutrients:
                "क्षारीय खार को परंपरागत रूप से पाचन में सहायक माना जाता है, जबकि सब्जियाँ और दालें फाइबर व वानस्पतिक प्रोटीन प्रदान करती हैं।"
        }
    },

    "Assam|food|Masor Tenga": {
        telugu: {
            recipe:
                "చేపను టమాటాలు లేదా ఎలిఫెంట్ ఆపిల్/నిమ్మకాయతో రుచి కలిపిన తేలికపాటి, పులుపు రసంలో ఉడికిస్తారు, చేప స్వంత రుచి బయటకు వచ్చేలా తక్కువ మసాలాతో తయారు చేస్తారు.",
            nutrients:
                "చేప ప్రోటీన్ మరియు ఒమేగా-3 కొవ్వు ఆమ్లాలను అందిస్తుంది, పులుపు పదార్థాలు విటమిన్ సిని జోడిస్తాయి, మరియు తేలికపాటి రసం వంటకాన్ని తక్కువ కొవ్వుతో ఉంచుతుంది."
        },
        hindi: {
            recipe:
                "मछली को टमाटर या एलिफेंट एप्पल/नींबू से स्वादित हल्के, खट्टे शोरबे में उबाला जाता है, न्यूनतम मसाले के साथ ताकि मछली का अपना स्वाद उभर सके।",
            nutrients:
                "मछली प्रोटीन और ओमेगा-3 फैटी एसिड प्रदान करती है, खट्टे तत्व विटामिन सी जोड़ते हैं, और हल्का शोरबा व्यंजन को कम वसा वाला बनाए रखता है।"
        }
    },

    "Assam|dress|Mekhela Chador": {
        telugu:
            "మేఖేలా చాదర్ అస్సామీ మహిళల సాంప్రదాయ రెండు-ముక్కల దుస్తులు, ఇది చుట్టుకునే లంగా (మేఖేలా) మరియు కప్పే పైవస్త్రం (చాదర్)తో కూడి ఉంటుంది, సాంప్రదాయకంగా ముగా లేదా పాట్ పట్టుతో నేయబడి బిహు వంటి పండుగలలో శతాబ్దాలుగా ధరిస్తున్నారు.",
        hindi:
            "मेखला चादर असमिया महिलाओं का पारंपरिक दो-टुकड़ों वाला परिधान है, जिसमें लपेटी जाने वाली स्कर्ट (मेखला) और ऊपर लपेटा जाने वाला वस्त्र (चादर) शामिल है, जिसे परंपरागत रूप से मूगा या पाट रेशम से बुना जाता है और सदियों से बिहू जैसे त्योहारों में पहना जाता रहा है।"
    },

    "Assam|festival|Bihu": {
        telugu:
            "బిహును సంవత్సరానికి మూడుసార్లు జరుపుకుంటారు, వ్యవసాయ క్యాలెండర్‌లోని వేర్వేరు దశలను సూచిస్తూ — రొంగాలి బిహు అస్సామీ నూతన సంవత్సరం మరియు వసంత విత్తనాలను స్వాగతిస్తుంది, కొంగాలి బిహు తక్కువ పంట కాలాన్ని ప్రతిబింబిస్తుంది, మరియు భోగాలి బిహు పంటను జరుపుకుంటుంది — వీటిని విందు, నృత్యం మరియు సామూహిక మంటలతో జరుపుకుంటారు.",
        hindi:
            "बिहू साल में तीन बार मनाया जाता है, जो कृषि कैलेंडर के अलग-अलग पड़ावों को दर्शाता है — रोंगाली बिहू असमिया नववर्ष और वसंत बुवाई का स्वागत करता है, कोंगाली बिहू एक कमज़ोर फसल अवधि को दर्शाता है, और भोगाली बिहू फसल का उत्सव मनाता है — हर एक को भोज, नृत्य और सामुदायिक अलाव के साथ मनाया जाता है।"
    },

    "Assam|places|Kaziranga National Park": {
        telugu:
            "మేరీ కర్జన్ చొరవతో 1905లో అటవీ నిల్వ ప్రాంతంగా స్థాపించబడిన కజిరంగా, ఆమె ఒక సందర్శన సందర్భంగా ఖడ్గమృగాన్ని చూడలేకపోయిన తర్వాత, 1974లో జాతీయ ఉద్యానవనంగా మారింది మరియు ఇప్పుడు ఏకశృంగి ఖడ్గమృగాల సంరక్షణకు ఒక కీలక కేంద్రంగా ప్రసిద్ధి చెందింది.",
        hindi:
            "मैरी कर्ज़न की पहल पर 1905 में एक वन आरक्षित क्षेत्र के रूप में स्थापित काज़ीरंगा, जब वे एक यात्रा के दौरान गैंडा नहीं देख पाईं, 1974 में राष्ट्रीय उद्यान बना और अब यह एक सींग वाले गैंडे के संरक्षण के गढ़ के रूप में प्रसिद्ध है।"
    },

    "Assam|places|Kamakhya Temple": {
        telugu:
            "గౌహతిలోని కామాఖ్య దేవాలయం భారతదేశంలోని పురాతన శక్తి దేవాలయాలలో ఒకటి, దీని ప్రస్తుత నిర్మాణం మునుపటి ధ్వంసం తర్వాత పునర్నిర్మించబడి 16వ శతాబ్దానికి చెందినది, మరియు ఇది తాంత్రిక ఆరాధన మరియు తీర్థయాత్రకు ప్రధాన కేంద్రంగా కొనసాగుతోంది.",
        hindi:
            "गुवाहाटी में कामाख्या मंदिर भारत के सबसे प्राचीन शक्ति मंदिरों में से एक है, इसकी वर्तमान संरचना पहले हुए विध्वंस के बाद पुनर्निर्मित होकर 16वीं शताब्दी की है, और यह तांत्रिक पूजा व तीर्थयात्रा का एक प्रमुख केंद्र बना हुआ है।"
    },

    // ---------------- BIHAR ----------------
    "Bihar|dance|Jat-Jatin": {
        telugu:
            "జాట్-జాటిన్ బీహార్‌కు చెందిన సాంప్రదాయ జానపద నృత్య-జంట ప్రదర్శన, వివాహిత జంటను చిత్రీకరించే ఇద్దరు నృత్యకారులు దీన్ని ప్రదర్శిస్తారు, గ్రామీణ జీవితం, ప్రేమ మరియు సామాజిక వ్యాఖ్యానం వంటి అంశాలను ప్రతిబింబించడానికి పాట మరియు సంభాషణను ఉపయోగిస్తారు.",
        hindi:
            "जाट-जतिन बिहार का एक पारंपरिक लोक नृत्य-युगल है, जिसे एक विवाहित जोड़े को दर्शाने वाले दो नर्तक प्रस्तुत करते हैं, जो ग्रामीण जीवन, प्रेम और सामाजिक टिप्पणी जैसे विषयों पर विचार व्यक्त करने के लिए गीत और संवाद का उपयोग करते हैं।"
    },

    "Bihar|arts|Madhubani Painting": {
        telugu:
            "మధుబని పెయింటింగ్ బీహార్‌లోని మిథిలా ప్రాంతంలో ఉద్భవించింది, సాంప్రదాయకంగా మహిళలు పండుగలు మరియు వివాహాల కోసం సహజ రంగులు మరియు వర్ణద్రవ్యాలను ఉపయోగించి ఇళ్ల గోడలు మరియు నేలలపై చిత్రించేవారు. 1934లో వచ్చిన భూకంపం ఈ గోడ చిత్రాలను సందర్శనలో ఉన్న బ్రిటిష్ అధికారికి కనిపించేలా చేసిన తర్వాత ఇది విస్తృత గుర్తింపు పొందింది.",
        hindi:
            "मधुबनी पेंटिंग बिहार के मिथिला क्षेत्र से उत्पन्न हुई, जिसे परंपरागत रूप से महिलाएँ त्योहारों और विवाहों के लिए प्राकृतिक रंगों और रंजकों का उपयोग करके घरों की दीवारों और फर्शों पर बनाती थीं। 1934 के भूकंप के बाद जब ये भित्ति चित्र एक आगंतुक ब्रिटिश अधिकारी के सामने आए, तब इसे व्यापक पहचान मिली।"
    },

    "Bihar|food|Litti Chokha": {
        telugu: {
            recipe:
                "వేయించిన శనగపిండి (సత్తు)తో నింపిన గోధుమ పిండి ముద్దలను నిప్పుల మీద కాల్చి, తరువాత చోఖాతో వడ్డిస్తారు — ఇది ఆవాల నూనె మరియు మసాలాలతో రుచికరంగా చేసిన వేయించిన వంకాయ, టమాటా మరియు బంగాళదుంపల మిశ్రమం.",
            nutrients:
                "సత్తు ప్రోటీన్ మరియు ఫైబర్‌లో అధికంగా ఉంటుంది, మరియు వేయించిన కూరగాయల చోఖా తక్కువ కొవ్వుతో విటమిన్లను జోడిస్తుంది."
        },
        hindi: {
            recipe:
                "भुने हुए चने के आटे (सत्तू) से भरी गेहूं के आटे की लोइयों को कोयलों पर सेंका जाता है, फिर चोखे के साथ परोसा जाता है — जो सरसों के तेल और मसालों से स्वादिष्ट बनाया गया भुना हुआ बैंगन, टमाटर और आलू का मिश्रण है।",
            nutrients:
                "सत्तू प्रोटीन और फाइबर से भरपूर होता है, और भुनी सब्जियों वाला चोखा न्यूनतम वसा के साथ विटामिन जोड़ता है।"
        }
    },

    "Bihar|dress|Dhoti Kurta": {
        telugu:
            "ధోతీ కుర్తా బీహార్ అంతటా పురుషులు ధరించే సాంప్రదాయ దుస్తులు, ఇందులో కుట్టని చుట్టే దిగువ వస్త్రం (ధోతీ) మరియు వదులైన పైవస్త్రం (కుర్తా) ఉంటాయి — ఇది ప్రాంతపు వాతావరణానికి ఆచరణాత్మకమైనది మరియు శతాబ్దాల నాటి భారతీయ చుట్టే దుస్తుల సంప్రదాయాలలో పాతుకుపోయింది.",
        hindi:
            "धोती कुर्ता बिहार भर में पुरुषों द्वारा पहना जाने वाला पारंपरिक परिधान है, जिसमें बिना सिला हुआ लपेटा जाने वाला निचला वस्त्र (धोती) और एक ढीला ऊपरी वस्त्र (कुर्ता) शामिल है — यह क्षेत्र की जलवायु के लिए व्यावहारिक है और सदियों पुरानी भारतीय लपेटे हुए वस्त्र परंपराओं में निहित है।"
    },

    "Bihar|dress|Saree": {
        telugu:
            "బీహార్ అంతటా ప్రాంతీయ నేత శైలులలో ధరించే చీర, ఉపఖండంలోని పురాతన దుస్తులలో ఒకటి, దీని చుట్టే, కుట్టని రూపం రెండు వేల సంవత్సరాలకు పైగా వెనుకకు వెళ్లే గ్రంథాలు మరియు శిల్పకళలలో ప్రస్తావించబడింది.",
        hindi:
            "बिहार भर में क्षेत्रीय बुनाई शैलियों में पहनी जाने वाली साड़ी उपमहाद्वीप के सबसे पुराने परिधानों में से एक है, इसका लपेटा हुआ, बिना सिला रूप दो हज़ार से अधिक वर्ष पुराने ग्रंथों और मूर्तिकला में उल्लेखित मिलता है।"
    },

    "Bihar|festival|Chhath Puja": {
        telugu:
            "ఛఠ్ పూజ సూర్య దేవుడు (సూర్య) మరియు అతని సోదరి ఛఠీ మైయాకు అంకితం చేయబడింది, భూమిపై జీవాన్ని కాపాడినందుకు కృతజ్ఞతలు తెలియజేస్తుంది. భక్తులు నాలుగు రోజుల పాటు సూర్యోదయం మరియు సూర్యాస్తమయం సమయంలో నీటిలో నిలబడి ఉపవాసం ఉండి ప్రార్థనలు అర్పిస్తారు, ఇది పురాతన వేద సూర్య ఆరాధనలో పాతుకుపోయిన సంప్రదాయం.",
        hindi:
            "छठ पूजा सूर्य देव (सूर्य) और उनकी बहन छठी मैया को समर्पित है, जो पृथ्वी पर जीवन को बनाए रखने के लिए आभार व्यक्त करती है। भक्त चार दिनों तक सूर्योदय और सूर्यास्त के समय जल में खड़े होकर उपवास रखते हैं और प्रार्थना अर्पित करते हैं, यह परंपरा प्राचीन वैदिक सूर्य पूजा में निहित है।"
    },

    "Bihar|places|Mahabodhi Temple": {
        telugu:
            "బోధ్ గయలోని మహాబోధి దేవాలయం సిద్ధార్థ గౌతముడు బోధి వృక్షం క్రింద జ్ఞానోదయం పొందాడని నమ్ముతున్న స్థలాన్ని సూచిస్తుంది. ఈ దేవాలయం తన మూలాలను చక్రవర్తి అశోకుడి కాలంలో సుమారు క్రీ.పూ. 3వ శతాబ్దానికి గుర్తుంచుకుంటుంది మరియు దీని ప్రస్తుత రూపంలో 5-6వ శతాబ్దం CEలో పునర్నిర్మించబడింది.",
        hindi:
            "बोधगया में महाबोधि मंदिर उस स्थान का प्रतीक है जहाँ माना जाता है कि सिद्धार्थ गौतम को बोधि वृक्ष के नीचे ज्ञान प्राप्त हुआ था। इस मंदिर की उत्पत्ति सम्राट अशोक के शासनकाल में लगभग तीसरी शताब्दी ईसा पूर्व से मानी जाती है और इसे इसके वर्तमान स्वरूप में 5वीं-6वीं शताब्दी ईस्वी में पुनर्निर्मित किया गया था।"
    },

    "Bihar|places|Nalanda": {
        telugu:
            "నలంద ప్రపంచంలోని తొలి నివాస విశ్వవిద్యాలయాలలో ఒకటి, సుమారు 5వ శతాబ్దం CEలో స్థాపించబడి గుప్త రాజవంశ ఆదరణలో వర్ధిల్లింది, 12వ శతాబ్దంలో ధ్వంసమయ్యే ముందు బౌద్ధ తత్వశాస్త్రం, తర్కశాస్త్రం మరియు విజ్ఞాన శాస్త్రాన్ని అభ్యసించడానికి ఆసియా అంతటి నుండి పండితులను ఆకర్షించింది.",
        hindi:
            "नालंदा दुनिया के सबसे शुरुआती आवासीय विश्वविद्यालयों में से एक था, जिसकी स्थापना लगभग 5वीं शताब्दी ईस्वी में हुई और जो गुप्त राजवंश के संरक्षण में फला-फूला, 12वीं शताब्दी में नष्ट होने से पहले यह बौद्ध दर्शन, तर्कशास्त्र और विज्ञान का अध्ययन करने के लिए पूरे एशिया से विद्वानों को आकर्षित करता रहा।"
    },
/* =========================================================
   🇮🇳 ADDITIONAL TELUGU + HINDI ITEM DESCRIPTIONS
   For states after the existing AP, Telangana, Arunachal
   Pradesh, Assam and Bihar translations.
========================================================= */


/* ==================== CHHATTISGARH ==================== */

"Chhattisgarh|dance|Panthi": {
    telugu: "పంథీ అనేది సత్నామీ సమాజానికి చెందిన భక్తి నృత్యం. 19వ శతాబ్దపు సామాజిక సంస్కర్త గురు ఘాసీదాస్ గౌరవార్థం దీనిని ప్రదర్శిస్తారు. కుల వివక్షకు వ్యతిరేకంగా ఆయన చేసిన బోధనలు సత్నామీ సమాజాన్ని ప్రభావితం చేశాయి.",
    hindi: "पंथी सतनामी समुदाय का एक भक्तिपूर्ण नृत्य है। इसे 19वीं शताब्दी के सामाजिक सुधारक गुरु घासीदास के सम्मान में प्रस्तुत किया जाता है। जातिगत भेदभाव के खिलाफ उनकी शिक्षाओं ने सतनामी समुदाय को प्रभावित किया।"
},

"Chhattisgarh|dance|Raut Nacha": {
    telugu: "రౌత్ నాచా అనేది యాదవ పశుపాలక సమాజం దీపావళి సందర్భంగా ప్రదర్శించే జానపద నృత్యం. నర్తకులు కర్రలు మరియు అద్దాలతో నృత్యం చేస్తూ శ్రీకృష్ణుని భక్తి గీతాలను ఆలపిస్తారు.",
    hindi: "राउत नाचा यादव पशुपालक समुदाय द्वारा दीपावली के अवसर पर किया जाने वाला लोक नृत्य है। नर्तक हाथों में डंडे और दर्पण लेकर नृत्य करते हैं तथा भगवान कृष्ण की भक्ति में गीत गाते हैं।"
},

"Chhattisgarh|arts|Bastar Dhokra": {
    telugu: "బస్తర్ ధోక్రా అనేది లోహపు శిల్పకళ. ఇది సంప్రదాయ 'లాస్ట్-వాక్స్' పద్ధతిని ఉపయోగించి తయారు చేయబడుతుంది. స్థానిక కళాకారులు జంతువులు, దేవతలు మరియు గ్రామీణ జీవితానికి సంబంధించిన ఆకృతులను తయారు చేస్తారు.",
    hindi: "बस्तर ढोकरा एक पारंपरिक धातु शिल्प है, जिसे 'लॉस्ट-वैक्स' तकनीक से बनाया जाता है। स्थानीय कारीगर जानवरों, देवी-देवताओं और ग्रामीण जीवन से जुड़ी आकृतियाँ बनाते हैं।"
},

"Chhattisgarh|arts|Kosa Silk": {
    telugu: "కోసా సిల్క్ ఛత్తీస్‌గఢ్‌లో ప్రసిద్ధి చెందిన పట్టు వస్త్రం. దీనిని అడవి ప్రాంతాల్లో లభించే టసర్ పట్టు పురుగుల కోకూన్ల నుంచి తయారు చేస్తారు. ఇది దాని సహజ రంగు, మెరుపు మరియు బలానికి ప్రసిద్ధి చెందింది.",
    hindi: "कोसा सिल्क छत्तीसगढ़ का प्रसिद्ध रेशमी वस्त्र है। इसे वन क्षेत्रों में पाए जाने वाले टसर रेशम के कोकून से बनाया जाता है। यह अपने प्राकृतिक रंग, चमक और मजबूती के लिए प्रसिद्ध है।"
},

"Chhattisgarh|food|Fara": {
    telugu: "ఫరా అనేది బియ్యపు పిండితో తయారు చేసే సంప్రదాయ ఛత్తీస్‌గఢీ వంటకం. పిండిని ఆవిరితో ఉడికించి, తరువాత మసాలాలతో కలిపి వడ్డిస్తారు.",
    hindi: "फरा छत्तीसगढ़ का पारंपरिक व्यंजन है, जिसे चावल के आटे से बनाया जाता है। आटे से बने टుకड़ों को भाप में पकाया जाता है और फिर मसालों के साथ परोसा जाता है."
},

"Chhattisgarh|food|Chila": {
    telugu: "చీలా బియ్యం లేదా పప్పు పిండితో తయారు చేసే పలుచని సంప్రదాయ పాన్‌కేక్. దీనిని సాధారణంగా మసాలాలతో కలిపి పెనం మీద కాల్చి వడ్డిస్తారు.",
    hindi: "चीला चावल या दाल के घोल से बनाया जाने वाला पारंपरिक पतला पैनकेक है। इसे मसालों के साथ मिलाकर तवे पर पकाया और परोसा जाता है।"
},

"Chhattisgarh|dress|Kosa Saree": {
    telugu: "కోసా చీర ఛత్తీస్‌గఢ్‌లో ప్రసిద్ధి చెందిన సంప్రదాయ పట్టు చీర. కోసా సిల్క్‌తో తయారయ్యే ఈ చీరలు సహజ రంగులు మరియు అందమైన నేయ్పుతో ప్రసిద్ధి చెందాయి.",
    hindi: "कोसा साड़ी छत्तीसगढ़ की प्रसिद्ध पारंपरिक रेशमी साड़ी है। कोसा सिल्क से बनी ये साड़ियाँ प्राकृतिक रंगों और सुंदर बुनाई के लिए प्रसिद्ध हैं।"
},

"Chhattisgarh|festival|Bastar Dussehra": {
    telugu: "బస్తర్ దసరా ఛత్తీస్‌గఢ్‌లోని ప్రసిద్ధ సాంస్కృతిక ఉత్సవం. ఇది స్థానిక గిరిజన సంప్రదాయాలతో ముడిపడి ఉంటుంది మరియు అనేక రోజుల పాటు వివిధ ఆచారాలు, ఊరేగింపులతో జరుగుతుంది.",
    hindi: "बस्तर दशहरा छत्तीसगढ़ का प्रसिद्ध सांस्कृतिक उत्सव है। यह स्थानीय जनजातीय परंपराओं से जुड़ा हुआ है और कई दिनों तक विभिन्न अनुष्ठानों तथा जुलूसों के साथ मनाया जाता है।"
},

"Chhattisgarh|festival|Hareli": {
    telugu: "హరేలీ ఛత్తీస్‌గఢ్‌లో జరుపుకునే వ్యవసాయ పండుగ. రైతులు వ్యవసాయ పనిముట్లను పూజించి మంచి పంట మరియు ప్రకృతి శ్రేయస్సు కోసం ప్రార్థిస్తారు.",
    hindi: "हरेली छत्तीसगढ़ का कृषि पर्व है। किसान कृषि उपकरणों की पूजा करते हैं और अच्छी फसल तथा प्रकृति की समृद्धि के लिए प्रार्थना करते हैं।"
},

"Chhattisgarh|places|Chitrakote Falls": {
    telugu: "చిత్రకూట్ జలపాతం ఇంద్రావతి నదిపై ఉన్న ప్రసిద్ధ ప్రకృతి ప్రదేశం. గుర్రపు నాడి ఆకారంలో విస్తరించే ఈ జలపాతం బస్తర్ ప్రాంతంలోని ముఖ్యమైన పర్యాటక ఆకర్షణ.",
    hindi: "चित्रकोट जलप्रपात इंद्रावती नदी पर स्थित प्रसिद्ध प्राकृतिक स्थल है। घोड़े की नाल के आकार में फैला यह जलप्रपात बस्तर क्षेत्र का प्रमुख पर्यटन आकर्षण है।"
},

"Chhattisgarh|places|Bhoramdeo Temple": {
    telugu: "భోరమ్‌దేవ్ ఆలయం ఛత్తీస్‌గఢ్‌లోని పురాతన దేవాలయ సముదాయం. దీని శిల్పకళ మరియు నిర్మాణం మధ్య భారతదేశంలోని దేవాలయ సంప్రదాయాలను ప్రతిబింబిస్తాయి.",
    hindi: "भोरमदेव मंदिर छत्तीसगढ़ का प्राचीन मंदिर परिसर है। इसकी मूर्तिकला और वास्तुकला मध्य भारत की मंदिर परंपराओं को दर्शाती है।"
},


/* ==================== GOA ==================== */

"Goa|dance|Fugdi": {
    telugu: "ఫుగ్డీ గోవాకు చెందిన సంప్రదాయ జానపద నృత్యం. మహిళలు సాధారణంగా వలయాకారంలో నిలబడి చప్పట్లు కొడుతూ, జానపద గీతాలతో ఈ నృత్యాన్ని ప్రదర్శిస్తారు.",
    hindi: "फुगड़ी गोवा का पारंपरिक लोक नृत्य है। महिलाएँ आमतौर पर गोलाकार रूप में खड़ी होकर तालियाँ बजाते हुए और लोकगीत गाते हुए यह नृत्य करती हैं।"
},

"Goa|dance|Dhalo": {
    telugu: "ధాలో గోవాలో మహిళలు శీతాకాలపు రాత్రుల్లో ప్రదర్శించే జానపద నృత్యం. ఇది వ్యవసాయం మరియు పంటలకు సంబంధించిన సంప్రదాయ ఆచారాలతో ముడిపడి ఉంటుంది.",
    hindi: "ढालो गोवा में महिलाओं द्वारा सर्दियों की रातों में किया जाने वाला लोक नृत्य है। यह कृषि और फसल से जुड़े पारंपरिक अनुष्ठानों से संबंधित है।"
},

"Goa|arts|Azulejos": {
    telugu: "అజులేజోస్ అనేది గోవాలో కనిపించే అలంకార టైల్స్ కళ. పోర్చుగీస్ ప్రభావంతో ఈ కళ గోవా భవనాలు, చర్చిలు మరియు ఇళ్ల అలంకరణలో ప్రాచుర్యం పొందింది.",
    hindi: "अज़ुलेजोस गोवा में दिखाई देने वाली सजावटी टाइल कला है। पुर्तगाली प्रभाव के कारण यह कला गोवा की इमारतों, चर्चों और घरों की सजावट में लोकप्रिय हुई।"
},

"Goa|arts|Coconut Craft": {
    telugu: "కొబ్బరి చెట్టు భాగాలను ఉపయోగించి గోవాలో వివిధ అలంకార మరియు ఉపయోగకరమైన వస్తువులు తయారు చేస్తారు. ఈ హస్తకళ స్థానిక ప్రకృతి వనరులను సృజనాత్మకంగా ఉపయోగించడాన్ని చూపిస్తుంది.",
    hindi: "गोवा में नारियल के पेड़ के विभिन्न हिस्सों से सजावटी और उपयोगी वस्तुएँ बनाई जाती हैं। यह हस्तकला स्थानीय प्राकृतिक संसाधनों के रचनात्मक उपयोग को दर्शाती है।"
},

"Goa|food|Goan Fish Curry": {
    telugu: "గోవా ఫిష్ కర్రీలో చేపలను కొబ్బరి, చింతపండు మరియు సుగంధ ద్రవ్యాలతో తయారు చేసిన పుల్లటి మరియు మసాలా గ్రేవీలో ఉడికిస్తారు. ఇది గోవా తీరప్రాంత ఆహార సంస్కృతిలో ముఖ్యమైన వంటకం.",
    hindi: "गोवा फिश करी में मछली को नारियल, इमली और मसालों से बनी खट्टी तथा मसालेदार ग्रेवी में पकाया जाता है। यह गोवा की तटीय खाद्य संस्कृति का महत्वपूर्ण व्यंजन है।"
},

"Goa|food|Bebinca": {
    telugu: "బెబింకా గోవాకు చెందిన ప్రసిద్ధ పొరల మిఠాయి. గుడ్లు, కొబ్బరి పాలు, పంచదార మరియు పిండితో పొరలుగా తయారు చేసి నెమ్మదిగా కాల్చుతారు.",
    hindi: "बेबींका गोवा की प्रसिद्ध परतदार मिठाई है। इसे अंडे, नारियल के दूध, चीनी और आटे से परतों में तैयार करके धीरे-धीरे बेक किया जाता है।"
},

"Goa|dress|Kunbi Saree": {
    telugu: "కున్బీ చీర గోవాలోని కున్బీ సమాజంతో అనుబంధం ఉన్న సంప్రదాయ వస్త్రం. దీని ప్రత్యేకమైన చెక్ డిజైన్ మరియు సరళమైన నేయ్పు దీనికి ప్రత్యేక గుర్తింపును ఇస్తాయి.",
    hindi: "कुनबी साड़ी गोवा के कुनबी समुदाय से जुड़ा पारंपरिक वस्त्र है। इसका विशिष्ट चेक डिज़ाइन और सरल बुनाई इसे अलग पहचान देती है।"
},

"Goa|festival|Carnival": {
    telugu: "గోవా కార్నివల్ సంగీతం, నృత్యం, రంగురంగుల ఊరేగింపులు మరియు ఆనందోత్సవాలకు ప్రసిద్ధి చెందింది. ఇది గోవా యొక్క పోర్చుగీస్ సాంస్కృతిక వారసత్వ ప్రభావాన్ని కూడా చూపిస్తుంది.",
    hindi: "गोवा कार्निवल संगीत, नृत्य, रंगीन जुलूस और उत्सव के लिए प्रसिद्ध है। यह गोवा की पुर्तगाली सांस्कृतिक विरासत के प्रभाव को भी दर्शाता है।"
},

"Goa|festival|Shigmo": {
    telugu: "షిగ్మో గోవాలో జరుపుకునే ముఖ్యమైన వసంతోత్సవం. రంగులు, జానపద నృత్యాలు, సంగీతం మరియు ఊరేగింపులతో దీనిని ఘనంగా నిర్వహిస్తారు.",
    hindi: "शिगमो गोवा का प्रमुख वसंत उत्सव है। इसे रंगों, लोक नृत्यों, संगीत और जुलूसों के साथ बड़े उत्साह से मनाया जाता है।"
},

"Goa|places|Basilica of Bom Jesus": {
    telugu: "బసిలికా ఆఫ్ బామ్ జీసస్ ఓల్డ్ గోవాలోని ప్రసిద్ధ చారిత్రక చర్చి. 1605లో పూర్తైన ఈ యునెస్కో ప్రపంచ వారసత్వ ప్రదేశం సెయింట్ ఫ్రాన్సిస్ జేవియర్ అవశేషాలను కలిగి ఉంది.",
    hindi: "बेसिलिका ऑफ बॉम जीसस ओल्ड गोवा का प्रसिद्ध ऐतिहासिक चर्च है। 1605 में पूरा हुआ यह यूनेस्को विश्व धरोहर स्थल सेंट फ्रांसिस जेवियर के अवशेषों को सुरक्षित रखता है।"
},

"Goa|places|Fort Aguada": {
    telugu: "ఫోర్ట్ అగ్వాడాను పోర్చుగీసులు 1612లో నిర్మించారు. డచ్ మరియు మరాఠా నౌకాదళ దాడుల నుంచి రక్షించడానికి, అలాగే మాండోవి నది ప్రవేశాన్ని కాపాడడానికి దీనిని ఉపయోగించారు.",
    hindi: "फोर्ट अगुआडा का निर्माण पुर्तगालियों ने 1612 में किया था। इसे डच और मराठा नौसैनिक हमलों से रक्षा तथा मांडोवी नदी के प्रवेश की सुरक्षा के लिए बनाया गया था।"
},


/* ==================== GUJARAT ==================== */

"Gujarat|dance|Garba": {
    telugu: "గర్బా గుజరాత్‌కు చెందిన ప్రసిద్ధ భక్తి జానపద నృత్యం. నవరాత్రి సమయంలో దేవత అంబా ప్రతీక చుట్టూ దీపం లేదా ప్రతిమను ఉంచి వలయాకారంలో నృత్యం చేస్తారు.",
    hindi: "गरबा गुजरात का प्रसिद्ध भक्तिपूर्ण लोक नृत्य है। नवरात्रि के दौरान देवी अंबा के प्रतीक दीप या प्रतिमा के चारों ओर गोलाकार रूप में नृत्य किया जाता है।"
},

"Gujarat|dance|Dandiya": {
    telugu: "దాండియా రాస్ రంగురంగుల కర్రలతో చేసే గుజరాతీ జానపద నృత్యం. ఇది నవరాత్రి వేడుకల్లో గర్బాతో పాటు ప్రదర్శించబడుతుంది.",
    hindi: "डांडिया रास रंगीन डंडियों के साथ किया जाने वाला गुजराती लोक नृत्य है। इसे नवरात्रि उत्सव के दौरान गरबा के साथ प्रस्तुत किया जाता है।"
},

"Gujarat|arts|Patola": {
    telugu: "పటోలా గుజరాత్‌లోని ప్రసిద్ధ డబుల్ ఇకట్ నేయ్పు కళ. అత్యంత క్లిష్టమైన రంగుల నేయ్పు పద్ధతితో తయారయ్యే ఈ వస్త్రాలు శతాబ్దాలుగా విలువైన సంప్రదాయంగా కొనసాగుతున్నాయి.",
    hindi: "पटोला गुजरात की प्रसिद्ध डबल-इकत बुनाई कला है। जटिल रंगाई और बुनाई तकनीक से बनाए जाने वाले ये वस्त्र सदियों से एक मूल्यवान परंपरा के रूप में चले आ रहे हैं।"
},

"Gujarat|arts|Bandhani": {
    telugu: "బంధనీ గుజరాత్‌లో ప్రసిద్ధి చెందిన టై-అండ్-డై వస్త్రకళ. వస్త్రాన్ని చిన్న భాగాలుగా కట్టి రంగులు వేయడం ద్వారా ప్రత్యేకమైన చుక్కల ఆకృతులు సృష్టిస్తారు.",
    hindi: "बंधनी गुजरात की प्रसिद्ध टाई-एंड-डाई वस्त्र कला है। कपड़े के छोटे हिस्सों को बाँधकर रंगने से इसमें विशिष्ट बिंदुदार डिज़ाइन बनाए जाते हैं।"
},

"Gujarat|food|Dhokla": {
    telugu: "ఢోక్లా పులియబెట్టిన శనగపిండి లేదా పప్పు పిండితో తయారు చేసే ఆవిరి వంటకం. ఇది మృదువుగా ఉండి సాధారణంగా పచ్చి చట్నీతో వడ్డిస్తారు.",
    hindi: "ढोकला चने या दाल के किण्वित घोल से बनाया जाने वाला भाप में पकाया गया व्यंजन है। यह नरम होता है और आमतौर पर हरी चटनी के साथ परोसा जाता है।"
},

"Gujarat|food|Undhiyu": {
    telugu: "ఉంధియూ గుజరాత్‌లో ప్రసిద్ధి చెందిన మిశ్రమ కూరగాయల వంటకం. వివిధ కూరగాయలు, మసాలాలు మరియు మెంతి ఆకులతో దీనిని సంప్రదాయ పద్ధతిలో తయారు చేస్తారు.",
    hindi: "उंधियू गुजरात का प्रसिद्ध मिश्रित सब्ज़ियों का व्यंजन है। इसे विभिन्न सब्ज़ियों, मसालों और मेथी के पत्तों से पारंपरिक तरीके से तैयार किया जाता है।"
},

"Gujarat|dress|Chaniya Choli": {
    telugu: "చనియా చోలీ గుజరాత్‌లో ప్రసిద్ధి చెందిన సంప్రదాయ వస్త్రధారణ. రంగురంగుల ఘాఘ్రా, చోళీ మరియు దుపట్టాతో కూడిన ఈ దుస్తులను ముఖ్యంగా నవరాత్రి సమయంలో ధరిస్తారు.",
    hindi: "चनिया चोली गुजरात की प्रसिद्ध पारंपरिक पोशाक है। रंगीन घाघरा, चोली और दुपट्टे से बनी यह पोशाक विशेष रूप से नवरात्रि के दौरान पहनी जाती है।"
},

"Gujarat|festival|Navratri": {
    telugu: "నవరాత్రి గుజరాత్‌లో అత్యంత ఉత్సాహంగా జరుపుకునే పండుగలలో ఒకటి. తొమ్మిది రాత్రుల పాటు గర్బా మరియు దాండియా నృత్యాలతో వేడుకలు జరుగుతాయి.",
    hindi: "नवरात्रि गुजरात के सबसे उत्साहपूर्ण त्योहारों में से एक है। नौ रातों तक गरबा और डांडिया नृत्य के साथ उत्सव मनाया जाता है।"
},

"Gujarat|festival|Rann Utsav": {
    telugu: "రన్ ఉత్సవ్ కచ్ ప్రాంతంలోని తెల్లని ఉప్పు ఎడారిలో జరిగే సాంస్కృతిక ఉత్సవం. జానపద సంగీతం, నృత్యం, హస్తకళలు మరియు స్థానిక సంప్రదాయాలను ఇది ప్రదర్శిస్తుంది.",
    hindi: "रण उत्सव कच्छ के सफेद नमक के रेगिस्तान में आयोजित होने वाला सांस्कृतिक उत्सव है। इसमें लोक संगीत, नृत्य, हस्तशिल्प और स्थानीय परंपराओं को प्रदर्शित किया जाता है।"
},

"Gujarat|places|Statue of Unity": {
    telugu: "స్టాచ్యూ ఆఫ్ యూనిటీ గుజరాత్‌లోని నర్మదా జిల్లాలో ఉన్న సర్దార్ వల్లభభాయ్ పటేల్‌కు అంకితమైన భారీ విగ్రహం. ఇది భారతదేశంలోని ప్రముఖ పర్యాటక ఆకర్షణలలో ఒకటి.",
    hindi: "स्टैच्यू ऑफ यूनिटी गुजरात के नर्मदा जिले में सरदार वल्लभभाई पटेल को समर्पित विशाल प्रतिमा है। यह भारत के प्रमुख पर्यटन आकर्षणों में से एक है।"
},

"Gujarat|places|Rani ki Vav": {
    telugu: "రాణి కి వావ్ పటాన్‌లోని అద్భుతమైన మెట్ల బావి. 11వ శతాబ్దంలో నిర్మించబడిన ఈ ప్రదేశం సున్నితమైన శిల్పకళకు ప్రసిద్ధి చెందింది మరియు యునెస్కో ప్రపంచ వారసత్వ ప్రదేశంగా గుర్తించబడింది.",
    hindi: "रानी की वाव पाटन में स्थित एक शानदार सीढ़ीदार बावड़ी है। 11वीं शताब्दी में निर्मित यह स्थल उत्कृष्ट मूर्तिकला के लिए प्रसिद्ध है और यूनेस्को विश्व धरोहर स्थल है।"
},


/* ==================== HARYANA ==================== */

"Haryana|dance|Dhamal": {
    telugu: "ధమాల్ హర్యానాకు చెందిన ఉత్సాహభరితమైన జానపద నృత్యం. పంట పండుగలు మరియు ఇతర వేడుకల్లో పురుషులు బృందాలుగా డప్పుల తాళానికి అనుగుణంగా దీనిని ప్రదర్శిస్తారు.",
    hindi: "धमाल हरियाणा का ऊर्जावान लोक नृत्य है। इसे फसल उत्सवों और अन्य समारोहों में पुरुष समूहों द्वारा ढोल की ताल पर प्रस्तुत किया जाता है।"
},

"Haryana|dance|Phag": {
    telugu: "ఫాగ్ హర్యానాలో హోలీ పండుగతో అనుబంధం ఉన్న జానపద నృత్యం మరియు గాన సంప్రదాయం. వసంత రాకను మరియు సామూహిక ఆనందాన్ని ఇది ప్రతిబింబిస్తుంది.",
    hindi: "फाग हरियाणा में होली से जुड़ी लोक नृत्य और गीत परंपरा है। यह वसंत के आगमन और सामुदायिक उत्सव की खुशी को दर्शाती है।"
},

"Haryana|arts|Phulkari": {
    telugu: "ఫుల్కారీ అనేది ఉత్తర భారతదేశంలోని ప్రసిద్ధ పుష్పాల ఎంబ్రాయిడరీ సంప్రదాయం. రంగురంగుల దారాలతో వస్త్రాలపై పూలు మరియు ఇతర ఆకృతులను కుట్టుతారు.",
    hindi: "फुलकारी उत्तर भारत की प्रसिद्ध पुष्प कढ़ाई परंपरा है। रंगीन धागों से कपड़ों पर फूलों और अन्य आकृतियों की कढ़ाई की जाती है।"
},

"Haryana|food|Bajra Khichdi": {
    telugu: "బజ్రా ఖిచ్డీ ముత్యాల సజ్జలు మరియు పప్పులతో తయారు చేసే పోషకమైన సంప్రదాయ వంటకం. చల్లని కాలంలో హర్యానాలో ఇది విస్తృతంగా తింటారు.",
    hindi: "बाजरा खिचड़ी बाजरे और दाल से बनाया जाने वाला पौष्टिक पारंपरिक व्यंजन है। ठंड के मौसम में हरियाणा में इसे विशेष रूप से खाया जाता है।"
},

"Haryana|food|Singri ki Sabzi": {
    telugu: "సింగ్రీ కి సబ్జీ ఎండబెట్టిన సంగ్రీ కాయలతో తయారు చేసే సంప్రదాయ రాజస్థానీ-హర్యానా ప్రాంతీయ వంటకం. మసాలాలతో వండిన దీనిని రొట్టెలతో వడ్డిస్తారు.",
    hindi: "सिंगरी की सब्जी सूखी सांगरी फलियों से बनाया जाने वाला पारंपरिक क्षेत्रीय व्यंजन है। इसे मसालों के साथ पकाकर रोटी के साथ परोसा जाता है।"
},

"Haryana|dress|Dhaman": {
    telugu: "ధామన్ హర్యానాలో మహిళలు ధరించే సంప్రదాయ దుస్తులలో ఒకటి. ఇది ప్రాంతీయ గ్రామీణ జీవనశైలి మరియు సంప్రదాయ వస్త్ర సంస్కృతిని ప్రతిబింబిస్తుంది.",
    hindi: "धामन हरियाणा में महिलाओं द्वारा पहने जाने वाले पारंपरिक परिधानों में से एक है। यह क्षेत्र की ग्रामीण जीवनशैली और पारंपरिक वस्त्र संस्कृति को दर्शाता है।"
},

"Haryana|festival|Teej": {
    telugu: "తీజ్ హర్యానాలో మహిళలు ఉత్సాహంగా జరుపుకునే పండుగ. ఊయలలు, జానపద గీతాలు మరియు సంప్రదాయ కార్యక్రమాలతో వర్షాకాలాన్ని స్వాగతిస్తారు.",
    hindi: "तीज हरियाणा में महिलाओं द्वारा उत्साह से मनाया जाने वाला त्योहार है। झूलों, लोकगीतों और पारंपरिक कार्यक्रमों के साथ वर्षा ऋतु का स्वागत किया जाता है।"
},

"Haryana|festival|Surajkund Mela": {
    telugu: "సూరజ్‌కుండ్ మేళా భారతదేశంలోని ప్రముఖ హస్తకళలు మరియు సాంస్కృతిక ఉత్సవాలలో ఒకటి. దేశంలోని వివిధ ప్రాంతాల కళాకారులు తమ హస్తకళలు, వస్త్రాలు మరియు సంప్రదాయాలను ప్రదర్శిస్తారు.",
    hindi: "सूरजकुंड मेला भारत के प्रमुख हस्तशिल्प और सांस्कृतिक उत्सवों में से एक है। देश के विभिन्न क्षेत्रों के कारीगर अपने हस्तशिल्प, वस्त्र और परंपराएँ प्रदर्शित करते हैं।"
},

"Haryana|places|Kurukshetra": {
    telugu: "కురుక్షేత్రం మహాభారతంలోని గొప్ప యుద్ధంతో అనుబంధం ఉన్న పవిత్ర ప్రదేశం. సంప్రదాయం ప్రకారం శ్రీకృష్ణుడు అర్జునుడికి భగవద్గీత బోధించిన ప్రదేశంగా కూడా దీనిని భావిస్తారు.",
    hindi: "कुरुक्षेत्र महाभारत के महान युद्ध से जुड़ा पवित्र स्थल है। परंपरा के अनुसार, यही वह स्थान है जहाँ भगवान कृष्ण ने अर्जुन को भगवद्गीता का उपदेश दिया था।"
},

"Haryana|places|Sultanpur National Park": {
    telugu: "సుల్తాన్‌పూర్ నేషనల్ పార్క్ ఒక ముఖ్యమైన పక్షుల అభయారణ్యం. ప్రతి సంవత్సరం శీతాకాలంలో అనేక వలస పక్షులు ఇక్కడికి వస్తాయి.",
    hindi: "सुल्तानपुर राष्ट्रीय उद्यान एक महत्वपूर्ण पक्षी क्षेत्र है। हर वर्ष सर्दियों में अनेक प्रवासी पक्षी यहाँ आते हैं।"
},


/* ==================== HIMACHAL PRADESH ==================== */

"Himachal Pradesh|dance|Nati": {
    telugu: "నాటి హిమాచల్ ప్రదేశ్ పర్వత ప్రాంతాల్లో ప్రసిద్ధి చెందిన జానపద నృత్యం. పంట పండుగలు మరియు వివాహాల సమయంలో రంగురంగుల బృందాలుగా దీనిని ప్రదర్శిస్తారు.",
    hindi: "नाटी हिमाचल प्रदेश के पर्वतीय क्षेत्रों का प्रसिद्ध लोक नृत्य है। इसे फसल उत्सवों और विवाहों के दौरान रंगीन समूहों में प्रस्तुत किया जाता है।"
},

"Himachal Pradesh|arts|Chamba Rumal": {
    telugu: "చంబా రుమాల్ చంబా ప్రాంతానికి చెందిన సున్నితమైన ఎంబ్రాయిడరీ కళ. డబుల్-సాటిన్ స్టిచ్‌తో హిందూ పురాణాలు మరియు రాజదర్బార్ జీవితానికి సంబంధించిన దృశ్యాలను వస్త్రంపై కుట్టుతారు.",
    hindi: "चंबा रुमाल चंबा क्षेत्र की सुंदर कढ़ाई कला है। डबल-सैटिन स्टिच से हिंदू पौराणिक कथाओं और राजदरबार के जीवन के दृश्य कपड़े पर बनाए जाते हैं।"
},

"Himachal Pradesh|food|Dham": {
    telugu: "ధామ్ హిమాచల్ ప్రదేశ్‌లోని సంప్రదాయ పండుగ విందు. వివిధ పప్పులు, కూరగాయలు, పెరుగు ఆధారిత వంటకాలు మరియు అన్నంతో పెద్ద విందుగా వడ్డిస్తారు.",
    hindi: "धाम हिमाचल प्रदेश का पारंपरिक उत्सवी भोज है। इसमें विभिन्न दालों, सब्ज़ियों, दही आधारित व्यंजनों और चावल को सामूहिक भोज के रूप में परोसा जाता है।"
},

"Himachal Pradesh|food|Siddu": {
    telugu: "సిద్ధు హిమాచల్ ప్రదేశ్‌లో ప్రసిద్ధి చెందిన ఆవిరి పిండివంటకం. గోధుమ పిండితో తయారు చేసి లోపల పప్పులు లేదా ఇతర పదార్థాల పూరణతో ఆవిరిలో ఉడికిస్తారు.",
    hindi: "सिड्डू हिमाचल प्रदेश का प्रसिद्ध भाप में पकाया जाने वाला व्यंजन है। इसे गेहूँ के आटे से बनाकर अंदर दाल या अन्य सामग्री की भरावन डालकर भाप में पकाया जाता है।"
},

"Himachal Pradesh|dress|Chola Dora": {
    telugu: "చోలా దోరా హిమాచల్ ప్రదేశ్‌లోని సంప్రదాయ పురుషుల దుస్తులతో అనుబంధం ఉన్న వస్త్రధారణ. పర్వత ప్రాంతాల చల్లని వాతావరణానికి అనుగుణంగా దీనిని ఉపయోగిస్తారు.",
    hindi: "चोला दोरा हिमाचल प्रदेश के पारंपरिक पुरुष परिधान से जुड़ा वस्त्र है। इसका उपयोग पर्वतीय क्षेत्रों की ठंडी जलवायु के अनुरूप किया जाता है।"
},

"Himachal Pradesh|festival|Kullu Dussehra": {
    telugu: "కులు దసరా హిమాచల్ ప్రదేశ్‌లోని ప్రసిద్ధ పండుగ. స్థానిక దేవతల విగ్రహాలను అలంకరించి ఊరేగింపులు మరియు సాంస్కృతిక కార్యక్రమాలతో వేడుకలు నిర్వహిస్తారు.",
    hindi: "कुल्लू दशहरा हिमाचल प्रदेश का प्रसिद्ध त्योहार है। स्थानीय देवी-देवताओं की प्रतिमाओं को सजाकर जुलूस और सांस्कृतिक कार्यक्रम आयोजित किए जाते हैं।"
},

"Himachal Pradesh|festival|Minjar Fair": {
    telugu: "మింజర్ మేళా చంబాలో జరుపుకునే ప్రసిద్ధ పండుగ. వ్యవసాయ సమృద్ధి మరియు స్థానిక సంస్కృతిని ప్రతిబింబిస్తూ ఊరేగింపులు, సంగీతం మరియు ఉత్సవాలతో దీనిని నిర్వహిస్తారు.",
    hindi: "मिंजर मेला चंबा में आयोजित होने वाला प्रसिद्ध उत्सव है। कृषि समृद्धि और स्थानीय संस्कृति को दर्शाते हुए जुलूस, संगीत और उत्सव आयोजित किए जाते हैं।"
},

"Himachal Pradesh|places|Shimla": {
    telugu: "షిమ్లా హిమాచల్ ప్రదేశ్ రాజధాని మరియు ప్రసిద్ధ పర్వత పర్యాటక కేంద్రం. బ్రిటిష్ కాలం నాటి భవనాలు, పర్వత దృశ్యాలు మరియు మాల్ రోడ్‌కు ఇది ప్రసిద్ధి చెందింది.",
    hindi: "शिमला हिमाचल प्रदेश की राजधानी और प्रसिद्ध पर्वतीय पर्यटन स्थल है। यह ब्रिटिश काल की इमारतों, पर्वतीय दृश्यों और मॉल रोड के लिए प्रसिद्ध है।"
},

"Himachal Pradesh|places|Kedarnath": {
    telugu: "కేదార్‌నాథ్ హిమాలయాల్లో ఉన్న పవిత్ర శివాలయం. ఇది పన్నెండు జ్యోతిర్లింగాలలో ఒకటిగా మరియు ముఖ్యమైన తీర్థయాత్రా కేంద్రంగా భావించబడుతుంది.",
    hindi: "केदारनाथ हिमालय में स्थित भगवान शिव का पवित्र मंदिर है। इसे बारह ज्योतिर्लिंगों में से एक और प्रमुख तीर्थ स्थल माना जाता है।"
},

"Himachal Pradesh|places|Rohtang Pass": {
    telugu: "రోహ్‌తాంగ్ పాస్ హిమాచల్ ప్రదేశ్‌లోని ప్రసిద్ధ పర్వత మార్గం. మంచుతో కప్పబడిన పర్వత దృశ్యాలు మరియు సాహస పర్యాటక కార్యకలాపాలకు ఇది ప్రసిద్ధి చెందింది.",
    hindi: "रोहतांग दर्रा हिमाचल प्रदेश का प्रसिद्ध पर्वतीय मार्ग है। यह बर्फ से ढके पहाड़ों के दृश्यों और साहसिक पर्यटन गतिविधियों के लिए प्रसिद्ध है."
},
/* =========================================================
   PART 2
   TELUGU + HINDI TRANSLATIONS
   Madhya Pradesh → West Bengal
========================================================= */


/* ==================== MADHYA PRADESH ==================== */

"Madhya Pradesh|dance|Matki": {
    telugu: "మట్కీ మధ్యప్రదేశ్‌లోని మాల్వా ప్రాంతానికి చెందిన జానపద నృత్యం. మహిళలు తలపై మట్టి కుండను ఉంచుకుని నృత్యం చేస్తారు. పండుగలు మరియు వేడుకల సమయంలో ఈ నృత్యాన్ని ప్రదర్శిస్తారు.",
    hindi: "मटकी मध्य प्रदेश के मालवा क्षेत्र का लोक नृत्य है। महिलाएँ सिर पर मिट्टी का घड़ा रखकर नृत्य करती हैं। इसे त्योहारों और उत्सवों के अवसर पर प्रस्तुत किया जाता है।"
},

"Madhya Pradesh|dance|Rai": {
    telugu: "రాయ్ బుందేల్‌ఖండ్ ప్రాంతానికి చెందిన జానపద నృత్యం. బెడ్నీ సమాజానికి చెందిన మహిళలు వేగవంతమైన తిరుగుళ్లు మరియు భావప్రకటనలతో దీనిని ప్రదర్శిస్తారు.",
    hindi: "राई बुंदेलखंड क्षेत्र का लोक नृत्य है। बेड़नी समुदाय की महिलाएँ तेज घूमने और भावपूर्ण मुद्राओं के साथ इसे प्रस्तुत करती हैं।"
},

"Madhya Pradesh|arts|Gond Painting": {
    telugu: "గోండ్ పెయింటింగ్ మధ్య భారతదేశంలోని గోండ్ సమాజానికి చెందిన గిరిజన కళ. ప్రకృతి, జంతువులు మరియు జానపద కథలను సహజ రంగులతో చిత్రించడం దీని ప్రత్యేకత.",
    hindi: "गोंड पेंटिंग मध्य भारत के गोंड समुदाय की जनजातीय कला है। इसमें प्राकृतिक रंगों से प्रकृति, जानवरों और लोककथाओं को चित्रित किया जाता है।"
},

"Madhya Pradesh|food|Poha": {
    telugu: "పోహా అటుకులతో తయారు చేసే ప్రసిద్ధ మధ్యప్రదేశ్ అల్పాహారం. ఆవాలు, కరివేపాకు, పసుపు, ఉల్లిపాయలు మరియు వేరుశెనగలతో దీనిని వేపుతారు.",
    hindi: "पोहा मध्य प्रदेश का प्रसिद्ध नाश्ता है। इसे चिवड़े को सरसों, करी पत्ता, हल्दी, प्याज और मूंगफली के साथ पकाकर बनाया जाता है।"
},

"Madhya Pradesh|food|Bhutte Ka Kees": {
    telugu: "భుట్టే కా కీస్ తురిమిన మొక్కజొన్నతో తయారు చేసే మధ్యప్రదేశ్ ప్రత్యేక వంటకం. పాలు, ఆవాలు మరియు మసాలాలతో దీనిని మృదువుగా ఉడికిస్తారు.",
    hindi: "भुट्टे का कीस मध्य प्रदेश का विशेष व्यंजन है। कद्दूकस किए हुए मकई को दूध, सरसों और मसालों के साथ पकाकर इसे तैयार किया जाता है।"
},

"Madhya Pradesh|dress|Chanderi Saree": {
    telugu: "చందేరీ చీర మధ్యప్రదేశ్‌లోని చందేరీ పట్టణానికి చెందిన ప్రసిద్ధ చేతినేయు వస్త్రం. ఇది తేలికైన వస్త్రం, అందమైన డిజైన్లు మరియు సున్నితమైన నేయ్పుకు ప్రసిద్ధి చెందింది.",
    hindi: "चंदेरी साड़ी मध्य प्रदेश के चंदेरी नगर की प्रसिद्ध हथकरघा परंपरा है। यह हल्के कपड़े, सुंदर डिज़ाइन और महीन बुनाई के लिए प्रसिद्ध है।"
},

"Madhya Pradesh|festival|Khajuraho Dance Festival": {
    telugu: "ఖజురాహో డాన్స్ ఫెస్టివల్ మధ్యప్రదేశ్‌లోని ఖజురాహో దేవాలయాల నేపథ్యంలో నిర్వహించే ప్రముఖ సాంస్కృతిక ఉత్సవం. ఇందులో భారతీయ శాస్త్రీయ నృత్య రూపాలను ప్రదర్శిస్తారు.",
    hindi: "खजुराहो नृत्य महोत्सव मध्य प्रदेश के खजुराहो मंदिरों की पृष्ठभूमि में आयोजित प्रसिद्ध सांस्कृतिक उत्सव है। इसमें भारतीय शास्त्रीय नृत्य प्रस्तुत किए जाते हैं।"
},

"Madhya Pradesh|culture|Malwa Culture": {
    telugu: "మాల్వా సంస్కృతి మధ్యప్రదేశ్‌లోని మాల్వా ప్రాంతపు సంప్రదాయాలను ప్రతిబింబిస్తుంది. జానపద సంగీతం, నృత్యం, ఆహారం, కళలు మరియు పండుగలు ఇందులో ముఖ్యమైన భాగాలు.",
    hindi: "मालवा संस्कृति मध्य प्रदेश के मालवा क्षेत्र की परंपराओं को दर्शाती है। लोक संगीत, नृत्य, भोजन, कला और त्योहार इसके महत्वपूर्ण भाग हैं।"
},

"Madhya Pradesh|places|Khajuraho": {
    telugu: "ఖజురాహో దేవాలయాలు మధ్యప్రదేశ్‌లోని ప్రసిద్ధ చారిత్రక దేవాలయ సముదాయం. వీటి అద్భుతమైన శిల్పకళ మరియు నిర్మాణం కారణంగా ఖజురాహో యునెస్కో ప్రపంచ వారసత్వ ప్రదేశంగా గుర్తించబడింది.",
    hindi: "खजुराहो मंदिर मध्य प्रदेश का प्रसिद्ध ऐतिहासिक मंदिर समूह है। इसकी उत्कृष्ट मूर्तिकला और वास्तुकला के कारण खजुराहो को यूनेस्को विश्व धरोहर स्थल का दर्जा मिला है।"
},

"Madhya Pradesh|places|Sanchi Stupa": {
    telugu: "సాంచి స్తూపం మధ్యప్రదేశ్‌లోని ముఖ్యమైన బౌద్ధ వారసత్వ ప్రదేశం. ఇది ప్రాచీన భారతీయ బౌద్ధ నిర్మాణకళకు ప్రసిద్ధ ఉదాహరణ.",
    hindi: "सांची स्तूप मध्य प्रदेश का महत्वपूर्ण बौद्ध विरासत स्थल है। यह प्राचीन भारतीय बौद्ध वास्तुकला का प्रसिद्ध उदाहरण है।"
},


/* ==================== MAHARASHTRA ==================== */

"Maharashtra|dance|Lavani": {
    telugu: "లావణి మహారాష్ట్రకు చెందిన ప్రసిద్ధ జానపద నృత్యం. వేగవంతమైన లయ, భావప్రకటన మరియు ఢోల్కీ వాద్యంతో కూడిన పాటలు దీని ప్రత్యేకత.",
    hindi: "लावणी महाराष्ट्र का प्रसिद्ध लोक नृत्य है। तेज़ लय, भावपूर्ण अभिव्यक्ति और ढोलकी की ताल के साथ गाए जाने वाले गीत इसकी विशेषता हैं।"
},

"Maharashtra|dance|Tamasha": {
    telugu: "తమాషా మహారాష్ట్రకు చెందిన సంప్రదాయ జానపద రంగస్థల కళ. పాటలు, నృత్యం, హాస్యం మరియు నాటకాన్ని కలిపి ప్రజలకు వినోదాన్ని అందిస్తుంది.",
    hindi: "तमाशा महाराष्ट्र की पारंपरिक लोक रंगमंच कला है। इसमें गीत, नृत्य, हास्य और नाटक का संयोजन होता है।"
},

"Maharashtra|arts|Warli Painting": {
    telugu: "వార్లీ పెయింటింగ్ మహారాష్ట్రలోని వార్లీ గిరిజన సమాజానికి చెందిన కళ. తెల్లని రంగుతో మట్టి లేదా గోధుమ నేపథ్యంపై మనుషులు, జంతువులు మరియు గ్రామీణ జీవితాన్ని చిత్రిస్తారు.",
    hindi: "वारली चित्रकला महाराष्ट्र के वारली जनजातीय समुदाय की कला है। इसमें मिट्टी या भूरे रंग की पृष्ठभूमि पर सफेद रंग से मनुष्यों, जानवरों और ग्रामीण जीवन को चित्रित किया जाता है।"
},

"Maharashtra|food|Vada Pav": {
    telugu: "వడా పావ్ మహారాష్ట్రకు చెందిన ప్రసిద్ధ వీధి ఆహారం. మసాలా బంగాళాదుంప వడను పావ్‌లో ఉంచి చట్నీలతో వడ్డిస్తారు.",
    hindi: "वड़ा पाव महाराष्ट्र का प्रसिद्ध स्ट्रीट फूड है। मसालेदार आलू वड़े को पाव के बीच रखकर चटनी के साथ परोसा जाता है।"
},

"Maharashtra|food|Puran Poli": {
    telugu: "పూరణ్ పోళీ పప్పు మరియు బెల్లంతో చేసిన తీపి పూరణను గోధుమ లేదా మైదా పిండిలో నింపి తయారు చేసే సంప్రదాయ రొట్టె.",
    hindi: "पुरण पोली एक पारंपरिक मीठी रोटी है, जिसमें दाल और गुड़ से बनी मीठी भरावन को आटे में भरकर पकाया जाता है।"
},

"Maharashtra|dress|Nauvari Saree": {
    telugu: "నౌవారీ చీర మహారాష్ట్ర మహిళల సంప్రదాయ వస్త్రం. తొమ్మిది గజాల పొడవు ఉండే ఈ చీరను ప్రత్యేకమైన విధానంలో కట్టుకుంటారు.",
    hindi: "नौवारी साड़ी महाराष्ट्र की महिलाओं का पारंपरिक परिधान है। लगभग नौ गज लंबी इस साड़ी को विशेष शैली में पहना जाता है।"
},

"Maharashtra|festival|Ganesh Chaturthi": {
    telugu: "గణేష్ చతుర్థి మహారాష్ట్రలో అత్యంత వైభవంగా జరుపుకునే పండుగ. గణపతి విగ్రహాలను ప్రతిష్ఠించి పూజలు, సంగీతం మరియు ఊరేగింపులు నిర్వహిస్తారు.",
    hindi: "गणेश चतुर्थी महाराष्ट्र में बड़े उत्साह से मनाया जाने वाला त्योहार है। गणपति की प्रतिमाएँ स्थापित करके पूजा, संगीत और जुलूस आयोजित किए जाते हैं।"
},

"Maharashtra|culture|Marathi Culture": {
    telugu: "మరాఠీ సంస్కృతి మహారాష్ట్ర భాష, సంగీతం, నృత్యం, ఆహారం, వస్త్రాలు మరియు పండుగలతో సమృద్ధిగా ఉంటుంది.",
    hindi: "मराठी संस्कृति महाराष्ट्र की भाषा, संगीत, नृत्य, भोजन, परिधान और त्योहारों से समृद्ध है।"
},

"Maharashtra|places|Gateway of India": {
    telugu: "గేట్‌వే ఆఫ్ ఇండియా ముంబైలోని ప్రసిద్ధ చారిత్రక స్మారకం. ఇది అరేబియా సముద్ర తీరంలో ఉన్న ప్రముఖ నిర్మాణం మరియు ముంబై నగరానికి గుర్తింపుగా నిలుస్తుంది.",
    hindi: "गेटवे ऑफ इंडिया मुंबई का प्रसिद्ध ऐतिहासिक स्मारक है। अरब सागर के किनारे स्थित यह संरचना मुंबई शहर की प्रमुख पहचान है।"
},

"Maharashtra|places|Ajanta Caves": {
    telugu: "అజంతా గుహలు ప్రాచీన బౌద్ధ గుహా నిర్మాణాలు మరియు చిత్రాలకు ప్రసిద్ధి చెందాయి. ఇవి భారతదేశంలోని ముఖ్యమైన యునెస్కో ప్రపంచ వారసత్వ ప్రదేశాలలో ఒకటి.",
    hindi: "अजंता की गुफाएँ प्राचीन बौद्ध गुफाओं और चित्रों के लिए प्रसिद्ध हैं। यह भारत के महत्वपूर्ण यूनेस्को विश्व धरोहर स्थलों में से एक है।"
},

"Maharashtra|places|Ellora Caves": {
    telugu: "ఎల్లోరా గుహలు బౌద్ధ, హిందూ మరియు జైన సంప్రదాయాలకు చెందిన గుహా దేవాలయాలను కలిగి ఉన్నాయి. కైలాస ఆలయ శిల్పకళ దీనిలో ప్రత్యేక ఆకర్షణ.",
    hindi: "एलोरा की गुफाओं में बौद्ध, हिंदू और जैन परंपराओं से जुड़े गुफा मंदिर हैं। कैलास मंदिर की शिल्पकला इसका विशेष आकर्षण है।"
},


/* ==================== MANIPUR ==================== */

"Manipur|dance|Manipuri Dance": {
    telugu: "మణిపురి నృత్యం భారతదేశంలోని ప్రధాన శాస్త్రీయ నృత్య రూపాలలో ఒకటి. రాధా-కృష్ణ భక్తి, ముఖ్యంగా రాస్ లీలా సంప్రదాయం, దీనిలో ముఖ్యమైన స్థానం కలిగి ఉంది.",
    hindi: "मणिपुरी नृत्य भारत की प्रमुख शास्त्रीय नृत्य शैलियों में से एक है। राधा-कृष्ण भक्ति और विशेष रूप से रास लीला परंपरा इसमें महत्वपूर्ण स्थान रखती है।"
},

"Manipur|arts|Manipuri Handicrafts": {
    telugu: "మణిపూర్ హస్తకళల్లో వెదురు, చెరకు మరియు చేతినేయు వస్త్రాలు ముఖ్యమైనవి. స్థానిక కళాకారులు ఉపయోగకరమైన మరియు అలంకార వస్తువులను తయారు చేస్తారు.",
    hindi: "मणिपुर की हस्तकलाओं में बाँस, बेंत और हथकरघा वस्त्र प्रमुख हैं। स्थानीय कारीगर उपयोगी और सजावटी वस्तुएँ बनाते हैं।"
},

"Manipur|food|Eromba": {
    telugu: "ఎరోంబా మణిపూర్‌కు చెందిన సంప్రదాయ వంటకం. ఉడికించిన కూరగాయలు, మిరపకాయలు మరియు స్థానిక పదార్థాలను కలిపి దీనిని తయారు చేస్తారు.",
    hindi: "एरोम्बा मणिपुर का पारंपरिक व्यंजन है। इसे उबली हुई सब्ज़ियों, मिर्च और स्थानीय सामग्री को मिलाकर तैयार किया जाता है।"
},

"Manipur|dress|Innaphi": {
    telugu: "ఇన్నాఫీ మణిపూర్ మహిళలు ధరించే సంప్రదాయ వస్త్రం. ఇది చీరలాంటి పై వస్త్రంగా ఉపయోగించబడుతూ స్థానిక నేయ్పు సంప్రదాయాన్ని ప్రతిబింబిస్తుంది.",
    hindi: "इन्नाफी मणिपुर की महिलाओं द्वारा पहना जाने वाला पारंपरिक वस्त्र है। इसे ऊपरी आवरण के रूप में पहना जाता है और यह स्थानीय बुनाई परंपरा को दर्शाता है।"
},

"Manipur|festival|Yaoshang": {
    telugu: "యావ్‌షాంగ్ మణిపూర్‌లో ఐదు రోజుల పాటు జరుపుకునే ప్రముఖ పండుగ. రంగులు, క్రీడలు, సంగీతం మరియు సాంస్కృతిక కార్యక్రమాలతో దీనిని నిర్వహిస్తారు.",
    hindi: "याओशांग मणिपुर में पाँच दिनों तक मनाया जाने वाला प्रमुख त्योहार है। इसे रंगों, खेलों, संगीत और सांस्कृतिक कार्यक्रमों के साथ मनाया जाता है।"
},

"Manipur|culture|Meitei Culture": {
    telugu: "మీతై సంస్కృతి మణిపూర్‌లోని మీతై సమాజపు భాష, సంగీతం, నృత్యం, ఆహారం మరియు సంప్రదాయాలతో సమృద్ధిగా ఉంటుంది.",
    hindi: "मैतेई संस्कृति मणिपुर के मैतेई समुदाय की भाषा, संगीत, नृत्य, भोजन और परंपराओं से समृद्ध है।"
},

"Manipur|places|Loktak Lake": {
    telugu: "లోక్తక్ సరస్సు మణిపూర్‌లోని ప్రసిద్ధ మంచినీటి సరస్సు. తేలియాడే 'ఫుమ్డి'ల కారణంగా ఇది ప్రత్యేకంగా గుర్తింపు పొందింది.",
    hindi: "लोकटक झील मणिपुर की प्रसिद्ध मीठे पानी की झील है। यह तैरते हुए 'फुमदी' द्वीपों के लिए विशेष रूप से प्रसिद्ध है।"
},


/* ==================== MEGHALAYA ==================== */

"Meghalaya|dance|Shad Suk Mynsiem": {
    telugu: "షాద్ సుక్ మిన్సీయం మేఘాలయలోని ఖాసీ సమాజానికి చెందిన సంప్రదాయ నృత్యం. వసంతకాలంలో కృతజ్ఞత మరియు ఆనందాన్ని వ్యక్తం చేస్తూ దీనిని ప్రదర్శిస్తారు.",
    hindi: "शाद सुक मिंसिएम मेघालय के खासी समुदाय का पारंपरिक नृत्य है। इसे वसंत ऋतु में कृतज्ञता और खुशी व्यक्त करने के लिए प्रस्तुत किया जाता है।"
},

"Meghalaya|arts|Bamboo Crafts": {
    telugu: "మేఘాలయలో వెదురు మరియు చెరకుతో బుట్టలు, చాపలు, ఫర్నిచర్ మరియు గృహోపకరణాలు తయారు చేసే సంప్రదాయం ఉంది.",
    hindi: "मेघालय में बाँस और बेंत से टोकरियाँ, चटाइयाँ, फर्नीचर और घरेलू वस्तुएँ बनाने की समृद्ध परंपरा है।"
},

"Meghalaya|food|Jadoh": {
    telugu: "జాదోహ్ మేఘాలయలోని ఖాసీ సమాజానికి చెందిన ప్రసిద్ధ అన్నం మరియు మాంసం వంటకం. అన్నాన్ని మాంసం మరియు సుగంధ ద్రవ్యాలతో కలిపి తయారు చేస్తారు.",
    hindi: "जादोह मेघालय के खासी समुदाय का प्रसिद्ध चावल और मांस का व्यंजन है। इसे चावल को मांस और मसालों के साथ पकाकर बनाया जाता है।"
},

"Meghalaya|dress|Jainsem": {
    telugu: "జైన్సెమ్ మేఘాలయ ఖాసీ మహిళల సంప్రదాయ వస్త్రం. ఇది శరీరాన్ని చుట్టుకునే విధంగా ధరించబడుతుంది మరియు స్థానిక సంస్కృతిని ప్రతిబింబిస్తుంది.",
    hindi: "जैनसेम मेघालय की खासी महिलाओं का पारंपरिक परिधान है। इसे शरीर के चारों ओर लपेटकर पहना जाता है और यह स्थानीय संस्कृति को दर्शाता है।"
},

"Meghalaya|festival|Wangala": {
    telugu: "వంగాలా మేఘాలయలోని గారో సమాజపు పంట పండుగ. పంట కోత పూర్తయిన సందర్భంగా సంగీతం, నృత్యం మరియు సంప్రదాయ కార్యక్రమాలతో దీనిని జరుపుకుంటారు.",
    hindi: "वांगला मेघालय के गारो समुदाय का फसल उत्सव है। फसल कटाई के बाद संगीत, नृत्य और पारंपरिक कार्यक्रमों के साथ इसे मनाया जाता है।"
},

"Meghalaya|culture|Khasi Culture": {
    telugu: "ఖాసీ సంస్కృతి మేఘాలయలోని ఖాసీ ప్రజల సంప్రదాయాలు, సంగీతం, నృత్యం, హస్తకళలు మరియు సామాజిక జీవనంతో రూపొందింది.",
    hindi: "खासी संस्कृति मेघालय के खासी लोगों की परंपराओं, संगीत, नृत्य, हस्तशिल्प और सामाजिक जीवन से बनी है।"
},

"Meghalaya|places|Living Root Bridges": {
    telugu: "లివింగ్ రూట్ బ్రిడ్జ్‌లు మేఘాలయలోని ఖాసీ మరియు జైంటియా ప్రజలు జీవించి ఉన్న చెట్ల వేర్లను పెంచి రూపొందించిన సహజ వంతెనలు. ఇవి స్థానిక పర్యావరణ జ్ఞానానికి అద్భుత ఉదాహరణలు.",
    hindi: "लिविंग रूट ब्रिज मेघालय के खासी और जयंतिया लोगों द्वारा पेड़ों की जीवित जड़ों को प्रशिक्षित करके बनाए गए प्राकृतिक पुल हैं। ये स्थानीय पर्यावरणीय ज्ञान का अद्भुत उदाहरण हैं।"
},

"Meghalaya|places|Cherrapunji": {
    telugu: "చెర్రాపుంజీ మేఘాలయలోని ప్రసిద్ధ పర్వత ప్రాంతం. అధిక వర్షపాతం, జలపాతాలు, గుహలు మరియు పచ్చని ప్రకృతి దృశ్యాలకు ఇది ప్రసిద్ధి చెందింది.",
    hindi: "चेरापूंजी मेघालय का प्रसिद्ध पर्वतीय क्षेत्र है। यह भारी वर्षा, झरनों, गुफाओं और हरे-भरे प्राकृतिक दृश्यों के लिए प्रसिद्ध है।"
},


/* ==================== MIZORAM ==================== */

"Mizoram|dance|Cheraw": {
    telugu: "చెరావ్ మిజోరాం యొక్క ప్రసిద్ధ వెదురు నృత్యం. నర్తకులు నేలపై ఉంచిన వెదురు కర్రల మధ్య లయబద్ధంగా అడుగులు వేస్తారు.",
    hindi: "चेराव मिजोरम का प्रसिद्ध बाँस नृत्य है। नर्तक जमीन पर रखी बाँस की छड़ियों के बीच तालबद्ध कदम रखते हैं।"
},

"Mizoram|arts|Bamboo Crafts": {
    telugu: "మిజోరాంలో విస్తారమైన వెదురు అడవుల కారణంగా బుట్టలు, చాపలు మరియు గృహోపకరణాలను వెదురుతో తయారు చేసే సంప్రదాయం ఉంది.",
    hindi: "मिजोरम में बाँस के व्यापक उपयोग के कारण टोकरियाँ, चटाइयाँ और घरेलू वस्तुएँ बनाने की समृद्ध बाँस शिल्प परंपरा है।"
},

"Mizoram|food|Bai": {
    telugu: "బాయి మిజోరాం సంప్రదాయ కూరగాయల వంటకం. ఆకుకూరలు, బీన్స్ వంటి కూరగాయలను తక్కువ మసాలాలతో ఉడికించి తయారు చేస్తారు.",
    hindi: "बाई मिजोरम का पारंपरिक सब्ज़ी व्यंजन है। इसमें सरसों के पत्ते, बीन्स जैसी सब्ज़ियों को हल्के मसालों के साथ पकाया जाता है।"
},

"Mizoram|dress|Puan": {
    telugu: "పువాన్ మిజో మహిళలు ధరించే సంప్రదాయ చేతినేయు వస్త్రం. రంగురంగుల గీతలు మరియు ప్రత్యేక ఆకృతులు దీనికి అందాన్ని ఇస్తాయి.",
    hindi: "पुआन मिजो महिलाओं द्वारा पहना जाने वाला पारंपरिक हाथ से बुना वस्त्र है। रंगीन धारियाँ और विशेष डिज़ाइन इसकी पहचान हैं।"
},

"Mizoram|festival|Chapchar Kut": {
    telugu: "చాప్‌చార్ కుట్ మిజోరాంలో వసంతకాలంలో జరుపుకునే పండుగ. జూమ్ వ్యవసాయంలోని అడవి తొలగింపు దశ పూర్తైన సందర్భంగా దీనిని నిర్వహిస్తారు.",
    hindi: "चापचार कुट मिजोरम का वसंत उत्सव है। यह झूम खेती में जंगल साफ करने के चरण के पूरा होने के अवसर पर मनाया जाता है।"
},

"Mizoram|culture|Mizo Culture": {
    telugu: "మిజో సంస్కృతిలో సామూహిక జీవనం, సంగీతం, నృత్యం, వెదురు హస్తకళలు మరియు సంప్రదాయ పండుగలకు ముఖ్యమైన స్థానం ఉంది.",
    hindi: "मिजो संस्कृति में सामुदायिक जीवन, संगीत, नृत्य, बाँस की हस्तकलाएँ और पारंपरिक त्योहारों का महत्वपूर्ण स्थान है।"
},

"Mizoram|places|Aizawl": {
    telugu: "ఐజ్వాల్ మిజోరాం రాజధాని మరియు మిజో కొండల మధ్య ఉన్న అందమైన నగరం. ఇది రాష్ట్రంలోని ముఖ్యమైన సాంస్కృతిక మరియు పరిపాలనా కేంద్రం.",
    hindi: "आइजोल मिजोरम की राजधानी और मिजो पहाड़ियों के बीच स्थित सुंदर शहर है। यह राज्य का महत्वपूर्ण सांस्कृतिक और प्रशासनिक केंद्र है।"
},

"Mizoram|places|Phawngpui": {
    telugu: "ఫావంగ్‌పుయి, బ్లూ మౌంటెన్ అని కూడా పిలుస్తారు, మిజోరాంలోని అత్యంత ఎత్తైన పర్వత శిఖరం. ఇది సహజ సౌందర్యం మరియు స్థానిక సంప్రదాయాలతో అనుబంధం కలిగి ఉంది.",
    hindi: "फावंगपुई, जिसे ब्लू माउंटेन भी कहा जाता है, मिजोरम की सबसे ऊँची पर्वत चोटी है। यह प्राकृतिक सुंदरता और स्थानीय परंपराओं से जुड़ी हुई है।"
},


/* ==================== NAGALAND ==================== */

"Nagaland|dance|Chang Lo": {
    telugu: "చాంగ్ లో నాగాలాండ్‌లోని చాంగ్ నాగా తెగకు చెందిన యుద్ధ నృత్యం. సంప్రదాయంగా విజయాలను గుర్తుచేసుకోవడానికి మరియు యోధుల నైపుణ్యాన్ని ప్రదర్శించడానికి దీనిని నృత్యం చేస్తారు.",
    hindi: "चांग लो नागालैंड की चांग नगा जनजाति का युद्ध नृत्य है। इसे पारंपरिक रूप से युद्ध में विजय और योद्धाओं की वीरता को प्रदर्शित करने के लिए किया जाता है।"
},

"Nagaland|arts|Naga Handicrafts": {
    telugu: "నాగా హస్తకళల్లో చెక్క శిల్పం, వెదురు మరియు చెరకు పనులు, అలాగే ప్రత్యేకమైన గిరిజన శాలువాల నేయ్పు ఉన్నాయి. ఆకృతులు తెగ మరియు సామాజిక స్థితిని ప్రతిబింబించేవి.",
    hindi: "नागा हस्तकलाओं में लकड़ी की नक्काशी, बाँस और बेंत का काम तथा विशिष्ट जनजातीय शॉल की बुनाई शामिल है। इनके डिज़ाइन जनजाति और सामाजिक पहचान को दर्शाते हैं।"
},

"Nagaland|food|Smoked Pork": {
    telugu: "స్మోక్డ్ పోర్క్ నాగాలాండ్‌లో ప్రసిద్ధి చెందిన సంప్రదాయ మాంసాహార వంటకం. పంది మాంసాన్ని పొగలో ఎండబెట్టి, వెదురు మొలకలు మరియు స్థానిక మిరపకాయలతో వండుతారు.",
    hindi: "स्मोक्ड पोर्क नागालैंड का प्रसिद्ध पारंपरिक मांसाहारी व्यंजन है। सूअर के मांस को धुएँ में सुखाकर बाँस की कोपलों और स्थानीय मिर्च के साथ पकाया जाता है।"
},

"Nagaland|dress|Traditional Naga Dress": {
    telugu: "నాగాలాండ్‌లోని ప్రతి తెగకు ప్రత్యేకమైన సంప్రదాయ వస్త్రధారణ ఉంటుంది. యోధుల శాలువాలు, ఈకల తల అలంకరణలు మరియు పూసల ఆభరణాలు ముఖ్యమైనవి.",
    hindi: "नागालैंड की प्रत्येक जनजाति की अपनी विशिष्ट पारंपरिक पोशाक होती है। योद्धा शॉल, पंखों वाले सिर के आभूषण और मनके इसकी प्रमुख विशेषताएँ हैं।"
},

"Nagaland|festival|Hornbill Festival": {
    telugu: "హార్న్‌బిల్ ఫెస్టివల్ నాగాలాండ్‌లోని వివిధ తెగల సంస్కృతిని ఒకే వేదికపై ప్రదర్శించే ప్రముఖ ఉత్సవం. సంగీతం, నృత్యం, హస్తకళలు మరియు సంప్రదాయాలు ఇందులో ప్రదర్శించబడతాయి.",
    hindi: "हॉर्नबिल महोत्सव नागालैंड की विभिन्न जनजातियों की संस्कृति को एक मंच पर प्रस्तुत करने वाला प्रसिद्ध उत्सव है। इसमें संगीत, नृत्य, हस्तशिल्प और परंपराएँ प्रदर्शित की जाती हैं।"
},

"Nagaland|culture|Naga Culture": {
    telugu: "నాగా సంస్కృతి అనేక తెగల ప్రత్యేక సంప్రదాయాలు, భాషలు, వస్త్రాలు, సంగీతం, నృత్యం మరియు సామాజిక ఆచారాలతో కూడి ఉంటుంది.",
    hindi: "नागा संस्कृति अनेक जनजातियों की विशिष्ट परंपराओं, भाषाओं, परिधानों, संगीत, नृत्य और सामाजिक रीति-रिवाजों से बनी है।"
},

"Nagaland|places|Kohima": {
    telugu: "కోహిమా నాగాలాండ్ రాజధాని. రెండో ప్రపంచ యుద్ధ సమయంలో జరిగిన కోహిమా యుద్ధంతో ఇది చారిత్రకంగా ప్రసిద్ధి చెందింది.",
    hindi: "कोहिमा नागालैंड की राजधानी है। यह द्वितीय विश्व युद्ध के दौरान हुए कोहिमा युद्ध के कारण ऐतिहासिक रूप से प्रसिद्ध है।"
},

"Nagaland|places|Dzukou Valley": {
    telugu: "ద్జుకోూ లోయ నాగాలాండ్-మణిపూర్ సరిహద్దులో ఉన్న అందమైన ప్రకృతి ప్రాంతం. కాలానుగుణంగా వికసించే అడవి పూలు మరియు పచ్చని కొండలకు ఇది ప్రసిద్ధి.",
    hindi: "दज़ुकोऊ घाटी नागालैंड-मणिपुर सीमा पर स्थित सुंदर प्राकृतिक क्षेत्र है। यह मौसमी जंगली फूलों और हरी-भरी पहाड़ियों के लिए प्रसिद्ध है।"
},


/* ==================== ODISHA ==================== */

"Odisha|dance|Odissi": {
    telugu: "ఒడిస్సీ భారతదేశంలోని పురాతన శాస్త్రీయ నృత్య రూపాలలో ఒకటి. ఒడిశా దేవాలయ శిల్పాలు మరియు ప్రాచీన గ్రంథాలలో కనిపించే నృత్య భంగిమలతో దీనికి చారిత్రక సంబంధం ఉంది.",
    hindi: "ओडिसी भारत की प्राचीन शास्त्रीय नृत्य शैलियों में से एक है। इसका ऐतिहासिक संबंध ओडिशा के मंदिरों की मूर्तियों और प्राचीन ग्रंथों में वर्णित नृत्य मुद्राओं से है।"
},

"Odisha|arts|Pattachitra": {
    telugu: "పటాచిత్ర ఒడిశాకు చెందిన ప్రాచీన వస్త్ర చిత్రకళ. జగన్నాథుడు మరియు హిందూ పురాణ కథలను సహజ రంగులతో వస్త్రంపై చిత్రించడం దీని ప్రత్యేకత.",
    hindi: "पट्टचित्र ओडिशा की प्राचीन कपड़ा चित्रकला है। इसमें प्राकृतिक रंगों से कपड़े पर भगवान जगन्नाथ और हिंदू पौराणिक कथाओं को चित्रित किया जाता है।"
},

"Odisha|food|Dalma": {
    telugu: "దాల్మా పప్పు మరియు వివిధ కూరగాయలతో తయారు చేసే ఒడియా వంటకం. గుమ్మడికాయ, అరటిపండు మరియు వంకాయ వంటి కూరగాయలను పప్పుతో కలిపి వండుతారు.",
    hindi: "दालमा ओडिशा का पारंपरिक व्यंजन है जिसमें दाल और विभिन्न सब्ज़ियाँ मिलाकर पकाई जाती हैं। इसमें कद्दू, कच्चा केला और बैंगन जैसी सब्ज़ियाँ उपयोग होती हैं।"
},

"Odisha|food|Pakhala Bhata": {
    telugu: "పఖాళా భాత్ ఉడికించిన అన్నాన్ని నీటిలో లేదా పెరుగుతో నానబెట్టి తయారు చేసే ఒడియా వంటకం. వేసవిలో చల్లదనాన్ని అందించే ఆహారంగా దీనిని భావిస్తారు.",
    hindi: "पखाला भात ओडिशा का पारंपरिक व्यंजन है जिसमें पके हुए चावल को पानी या दही में भिगोया जाता है। गर्मियों में इसे ठंडक देने वाले भोजन के रूप में खाया जाता है।"
},

"Odisha|dress|Sambalpuri Saree": {
    telugu: "సంబల్పురి చీరలు ఒడిశాలోని సంప్రదాయ ఇకట్ నేయ్పు పద్ధతితో తయారవుతాయి. శంఖం మరియు చక్రం వంటి సంప్రదాయ ఆకృతులు వీటిలో కనిపిస్తాయి.",
    hindi: "संबलपुरी साड़ियाँ ओडिशा की पारंपरिक इकत बुनाई तकनीक से बनाई जाती हैं। इनमें शंख और चक्र जैसे पारंपरिक डिज़ाइन दिखाई देते हैं।"
},

"Odisha|festival|Rath Yatra": {
    telugu: "రథయాత్ర పూరీలో జరిగే ప్రసిద్ధ జగన్నాథ రథోత్సవం. జగన్నాథుడు మరియు ఆయన సహోదరుల విగ్రహాలను భారీ రథాల్లో ఊరేగిస్తారు.",
    hindi: "रथ यात्रा पुरी में आयोजित होने वाला प्रसिद्ध भगवान जगन्नाथ का रथ उत्सव है। भगवान जगन्नाथ और उनके भाई-बहन की प्रतिमाओं को विशाल रथों में नगर भ्रमण कराया जाता है।"
},

"Odisha|culture|Odia Culture": {
    telugu: "ఒడియా సంస్కృతిలో జగన్నాథ సంప్రదాయం, శాస్త్రీయ నృత్యం, జానపద కళలు, హస్తకళలు, సంగీతం మరియు ప్రత్యేక ఆహార సంప్రదాయాలు ఉన్నాయి.",
    hindi: "ओड़िया संस्कृति में जगन्नाथ परंपरा, शास्त्रीय नृत्य, लोक कला, हस्तशिल्प, संगीत और विशिष्ट खाद्य परंपराएँ शामिल हैं।"
},

"Odisha|places|Konark Sun Temple": {
    telugu: "కోణార్క్ సూర్య దేవాలయం 13వ శతాబ్దంలో నిర్మించబడిన అద్భుతమైన దేవాలయం. సూర్య దేవుని రథాన్ని పోలిన నిర్మాణం మరియు 24 శిల్పాలతో కూడిన చక్రాలకు ఇది ప్రసిద్ధి.",
    hindi: "कोणार्क सूर्य मंदिर 13वीं शताब्दी में निर्मित शानदार मंदिर है। यह सूर्य देव के रथ के समान वास्तुकला और 24 नक्काशीदार पहियों के लिए प्रसिद्ध है।"
},

"Odisha|places|Jagannath Temple": {
    telugu: "పూరీలోని జగన్నాథ ఆలయం భారతదేశంలోని ముఖ్యమైన తీర్థయాత్రా కేంద్రాలలో ఒకటి. ప్రస్తుత ఆలయ నిర్మాణం 12వ శతాబ్దానికి చెందినదిగా భావిస్తారు.",
    hindi: "पुरी का जगन्नाथ मंदिर भारत के प्रमुख तीर्थ स्थलों में से एक है। वर्तमान मंदिर का निर्माण 12वीं शताब्दी में జరిగినట్లు माना जाता है।"
},


/* ==================== PUNJAB ==================== */

"Punjab|dance|Bhangra": {
    telugu: "భాంగ్రా పంజాబ్‌కు చెందిన ఉత్సాహభరితమైన జానపద నృత్యం. పంట పండుగల సమయంలో పురుషులు డప్పుల తాళానికి అనుగుణంగా దీనిని ప్రదర్శించే సంప్రదాయం ఉంది.",
    hindi: "भांगड़ा पंजाब का ऊर्जावान लोक नृत्य है। इसे पारंपरिक रूप से फसल उत्सवों के दौरान पुरुष ढोल की ताल पर प्रस्तुत करते हैं।"
},

"Punjab|dance|Giddha": {
    telugu: "గిద్దా పంజాబ్ మహిళల ప్రసిద్ధ జానపద నృత్యం. చప్పట్లు, జానపద గీతాలు మరియు భావప్రకటనలతో దీనిని ప్రదర్శిస్తారు.",
    hindi: "गिद्धा पंजाब की महिलाओं का प्रसिद्ध लोक नृत्य है। इसे तालियाँ, लोकगीतों और भावपूर्ण अभिव्यक्तियों के साथ प्रस्तुत किया जाता है।"
},

"Punjab|arts|Phulkari": {
    telugu: "ఫుల్కారీ పంజాబ్‌లో ప్రసిద్ధి చెందిన ఎంబ్రాయిడరీ కళ. రంగురంగుల దారాలతో వస్త్రాలపై పుష్పాలు మరియు జ్యామితీయ ఆకృతులను కుట్టుతారు.",
    hindi: "फुलकारी पंजाब की प्रसिद्ध कढ़ाई कला है। रंगीन धागों से कपड़ों पर फूलों और ज्यामितीय आकृतियों की कढ़ाई की जाती है।"
},

"Punjab|food|Sarson da Saag": {
    telugu: "సర్సో దా సాగ్ ఆవ ఆకులతో తయారు చేసే సంప్రదాయ పంజాబీ వంటకం. సాధారణంగా దీనిని మక్కీ ది రోటీతో వడ్డిస్తారు.",
    hindi: "सरसों दा साग सरसों के पत्तों से बनाया जाने वाला पारंपरिक पंजाबी व्यंजन है। इसे आमतौर पर मक्की दी रोटी के साथ परोसा जाता है।"
},

"Punjab|food|Makki di Roti": {
    telugu: "మక్కీ ది రోటీ మొక్కజొన్న పిండితో తయారు చేసే సంప్రదాయ పంజాబీ రొట్టె. దీనిని సర్సో దా సాగ్‌తో కలిపి తింటారు.",
    hindi: "मक्की दी रोटी मकई के आटे से बनाई जाने वाली पारंपरिक पंजाबी रोटी है। इसे सरसों दा साग के साथ खाया जाता है।"
},

"Punjab|dress|Punjabi Suit": {
    telugu: "పంజాబీ సూట్ పంజాబ్ మహిళల ప్రసిద్ధ సంప్రదాయ వస్త్రధారణ. ఇందులో సల్వార్, కమీజ్ మరియు దుపట్టా ఉంటాయి.",
    hindi: "पंजाबी सूट पंजाब की महिलाओं की प्रसिद्ध पारंपरिक पोशाक है। इसमें सलवार, कमीज़ और दुपट्टा शामिल होते हैं।"
},

"Punjab|festival|Baisakhi": {
    telugu: "వైశాఖి పంజాబ్‌లో ముఖ్యమైన పంట పండుగ. రైతులు కొత్త పంటకు కృతజ్ఞతలు తెలుపుతూ సంగీతం, నృత్యం మరియు సామూహిక వేడుకలతో దీనిని జరుపుకుంటారు.",
    hindi: "बैसाखी पंजाब का प्रमुख फसल उत्सव है। किसान नई फसल के लिए आभार व्यक्त करते हुए संगीत, नृत्य और सामुदायिक समारोहों के साथ इसे मनाते हैं।"
},

"Punjab|culture|Punjabi Culture": {
    telugu: "పంజాబీ సంస్కృతిలో భాంగ్రా, గిద్దా, ఫుల్కారీ, పంజాబీ ఆహారం, గురుద్వారా సంప్రదాయాలు మరియు ఉత్సాహభరితమైన సామాజిక జీవనం ముఖ్యమైనవి.",
    hindi: "पंजाबी संस्कृति में भांगड़ा, गिद्धा, फुलकारी, पंजाबी भोजन, गुरुद्वारा परंपराएँ और जीवंत सामाजिक जीवन का महत्वपूर्ण स्थान है।"
},

"Punjab|places|Golden Temple": {
    telugu: "గోల్డెన్ టెంపుల్ అమృత్‌సర్‌లోని సిక్కు మతానికి అత్యంత పవిత్రమైన గురుద్వారాలలో ఒకటి. బంగారు అలంకరణ మరియు పవిత్ర సరస్సు కారణంగా ఇది ప్రసిద్ధి చెందింది.",
    hindi: "गोल्डन टेंपल अमृतसर में स्थित सिख धर्म के सबसे पवित्र गुरुद्वारों में से एक है। यह अपने स्वर्णिम स्वरूप और पवित्र सरोवर के लिए प्रसिद्ध है।"
},

"Punjab|places|Jallianwala Bagh": {
    telugu: "జలియన్‌వాలా బాగ్ అమృత్‌సర్‌లోని చారిత్రక స్మారక ప్రదేశం. 1919లో జరిగిన విషాదకర కాల్పుల ఘటన భారత స్వాతంత్ర్య ఉద్యమ చరిత్రలో ముఖ్యమైన సంఘటనగా నిలిచింది.",
    hindi: "जलियांवाला बाग अमृतसर का ऐतिहासिक स्मारक स्थल है। 1919 में हुई दुखद गोलीबारी की घटना भारतीय स्वतंत्रता आंदोलन के इतिहास में महत्वपूर्ण स्थान रखती है।"
},


/* ==================== RAJASTHAN ==================== */

"Rajasthan|dance|Ghoomar": {
    telugu: "ఘూమర్ రాజస్థాన్‌కు చెందిన ప్రసిద్ధ మహిళల జానపద నృత్యం. రంగురంగుల ఘాఘ్రాలు ధరించి వలయాకారంలో తిరుగుతూ నృత్యం చేస్తారు.",
    hindi: "घूमर राजस्थान का प्रसिद्ध महिलाओं का लोक नृत्य है। महिलाएँ रंगीन घाघरा पहनकर गोलाकार घूमते हुए नृत्य करती हैं।"
},

"Rajasthan|dance|Kalbelia": {
    telugu: "కల్బేలియా రాజస్థాన్‌లోని కల్బేలియా సమాజానికి చెందిన జానపద నృత్యం. వేగవంతమైన కదలికలు మరియు పాము ఆకారపు భంగిమలు దీని ప్రత్యేకత.",
    hindi: "कालबेलिया राजस्थान के कालबेलिया समुदाय का लोक नृत्य है। तेज़ गति की मुद्राएँ और साँप जैसी लचकदार गतिविधियाँ इसकी विशेषता हैं।"
},

"Rajasthan|arts|Phad Painting": {
    telugu: "ఫడ్ పెయింటింగ్ రాజస్థాన్‌కు చెందిన సంప్రదాయ స్క్రోల్ చిత్రకళ. జానపద వీరులు మరియు దేవతల కథలను పొడవైన వస్త్రాలపై చిత్రిస్తారు.",
    hindi: "फड़ चित्रकला राजस्थान की पारंपरिक स्क्रॉल चित्रकला है। इसमें लोक नायकों और देवताओं की कथाओं को लंबे कपड़े पर चित्रित किया जाता है।"
},

"Rajasthan|food|Dal Baati Churma": {
    telugu: "దాల్ బాటీ చూర్మా రాజస్థాన్‌లో ప్రసిద్ధి చెందిన సంప్రదాయ వంటకం. పప్పు, గోధుమ బాటీ మరియు తీపి చూర్మా కలిపి వడ్డిస్తారు.",
    hindi: "दाल बाटी चूरमा राजस्थान का प्रसिद्ध पारंपरिक व्यंजन है। इसमें दाल, गेहूँ की बाटी और मीठा चूरमा शामिल होता है।"
},

"Rajasthan|dress|Ghagra Choli": {
    telugu: "ఘాఘ్రా చోళీ రాజస్థాన్ మహిళల సంప్రదాయ వస్త్రధారణ. రంగురంగుల వస్త్రాలు, అద్దాల పని మరియు ఎంబ్రాయిడరీ దీనికి ప్రత్యేక అందాన్ని ఇస్తాయి.",
    hindi: "घाघरा चोली राजस्थान की महिलाओं की पारंपरिक पोशाक है। रंगीन कपड़े, शीशे का काम और कढ़ाई इसे विशेष सुंदरता प्रदान करते हैं।"
},

"Rajasthan|festival|Gangaur": {
    telugu: "గంగౌర్ రాజస్థాన్‌లో మహిళలు ముఖ్యంగా జరుపుకునే పండుగ. గౌరీ దేవిని పూజిస్తూ సంప్రదాయ పాటలు, ఊరేగింపులు మరియు వేడుకలు నిర్వహిస్తారు.",
    hindi: "गणगौर राजस्थान में विशेष रूप से महिलाओं द्वारा मनाया जाने वाला त्योहार है। गौरी देवी की पूजा के साथ पारंपरिक गीत, जुलूस और उत्सव आयोजित किए जाते हैं।"
},

"Rajasthan|culture|Rajasthani Culture": {
    telugu: "రాజస్థానీ సంస్కృతిలో జానపద సంగీతం, నృత్యం, రంగురంగుల వస్త్రాలు, హస్తకళలు, రాజపుత్ర సంప్రదాయాలు మరియు ఎడారి జీవనశైలి ముఖ్యమైనవి.",
    hindi: "राजस्थानी संस्कृति में लोक संगीत, नृत्य, रंगीन परिधान, हस्तशिल्प, राजपूत परंपराएँ और रेगिस्तानी जीवनशैली का महत्वपूर्ण स्थान है।"
},

"Rajasthan|places|Hawa Mahal": {
    telugu: "హవా మహల్ జైపూర్‌లోని ప్రసిద్ధ చారిత్రక భవనం. అనేక చిన్న కిటికీలు మరియు జాలి పనితో కూడిన ముఖభాగం దీనికి ప్రత్యేక గుర్తింపు.",
    hindi: "हवा महल जयपुर की प्रसिद्ध ऐतिहासिक इमारत है। इसकी अनेक छोटी खिड़कियाँ और जालीदार मुखौटा इसकी विशेष पहचान हैं।"
},

"Rajasthan|places|Amber Fort": {
    telugu: "అంబర్ కోట జైపూర్ సమీపంలోని ప్రసిద్ధ కోట. రాజపుత్ర మరియు మొఘల్ నిర్మాణ శైలుల కలయికతో కూడిన అద్భుతమైన భవనాలు ఇందులో ఉన్నాయి.",
    hindi: "आमेर किला जयपुर के पास स्थित प्रसिद्ध दुर्ग है। इसमें राजपूत और मुगल वास्तुकला का सुंदर मिश्रण दिखाई देता है।"
},

"Rajasthan|places|Jaisalmer Fort": {
    telugu: "జైసల్మేర్ కోట రాజస్థాన్‌లోని థార్ ఎడారి మధ్య ఉన్న చారిత్రక కోట. పసుపు ఇసుకరాయి నిర్మాణాల కారణంగా దీనిని గోల్డెన్ ఫోర్ట్ అని కూడా పిలుస్తారు.",
    hindi: "जैसलमेर किला राजस्थान के थार मरुस्थल में स्थित ऐतिहासिक दुर्ग है। पीले बलुआ पत्थर से बने होने के कारण इसे गोल्डन फोर्ट भी कहा जाता है।"
},


/* ==================== SIKKIM ==================== */

"Sikkim|dance|Singhi Chham": {
    telugu: "సింఘీ ఛామ్ సిక్కింలోని బౌద్ధ సంప్రదాయానికి చెందిన ముఖవేష నృత్యం. సింహం ఆకారపు దుస్తులు ధరించిన నర్తకులు పవిత్ర నృత్యాన్ని ప్రదర్శిస్తారు.",
    hindi: "सिंघी छाम सिक्किम की बौद्ध परंपरा से जुड़ा मुखौटा नृत्य है। नर्तक सिंह के आकार की पोशाक पहनकर पवित्र नृत्य प्रस्तुत करते हैं।"
},

"Sikkim|arts|Thangka Painting": {
    telugu: "థాంకా పెయింటింగ్ సిక్కింలోని బౌద్ధ సంప్రదాయానికి చెందిన స్క్రోల్ చిత్రకళ. పత్తి లేదా పట్టుపై దేవతలు మరియు మండలాలను చిత్రిస్తారు.",
    hindi: "थांका चित्रकला सिक्किम की बौद्ध परंपरा की स्क्रॉल चित्रकला है। इसमें कपास या रेशम पर देवी-देवताओं और मंडलों को चित्रित किया जाता है।"
},

"Sikkim|food|Momos": {
    telugu: "మోమోస్ పిండిలో కూరగాయలు లేదా మాంసం పూరణను పెట్టి ఆవిరితో ఉడికించే వంటకం. సాధారణంగా మసాలా టమాటా చట్నీతో వడ్డిస్తారు.",
    hindi: "मोमोज़ आटे में सब्ज़ियों या मांस की भरावन डालकर भाप में पकाया जाने वाला व्यंजन है। इन्हें आमतौर पर मसालेदार टमाटर की चटनी के साथ परोसा जाता है।"
},

"Sikkim|food|Thukpa": {
    telugu: "థుక్పా నూడుల్స్, కూరగాయలు మరియు మాంసంతో తయారు చేసే వేడి సూప్ వంటకం. హిమాలయ ప్రాంత ఆహార సంస్కృతిలో దీనికి ముఖ్యమైన స్థానం ఉంది.",
    hindi: "थुकपा नूडल्स, सब्ज़ियों और मांस से बना गर्म सूप जैसा व्यंजन है। हिमालयी खाद्य संस्कृति में इसका महत्वपूर्ण स्थान है।"
},

"Sikkim|dress|Bakhu": {
    telugu: "బఖు సిక్కిం పురుషులు మరియు మహిళలు ధరించే సడలిన సంప్రదాయ వస్త్రం. చల్లని హిమాలయ వాతావరణానికి అనుగుణంగా ఇది తరతరాలుగా ఉపయోగించబడుతోంది.",
    hindi: "बखू सिक्किम के पुरुषों और महिलाओं द्वारा पहना जाने वाला ढीला पारंपरिक परिधान है। इसे ठंडी हिमालयी जलवायु के अनुकूल पीढ़ियों से पहना जाता है।"
},

"Sikkim|festival|Losar": {
    telugu: "లోసార్ టిబెటన్ బౌద్ధ నూతన సంవత్సర పండుగ. సిక్కింలోని మఠాల్లో ప్రార్థనలు, ముఖవేష నృత్యాలు మరియు కుటుంబ వేడుకలతో దీనిని జరుపుకుంటారు.",
    hindi: "लोसर तिब्बती बौद्ध नववर्ष का त्योहार है। सिक्किम के मठों में प्रार्थनाओं, मुखौटा नृत्यों और पारिवारिक समारोहों के साथ इसे मनाया जाता है।"
},

"Sikkim|culture|Sikkimese Culture": {
    telugu: "సిక్కింలో బౌద్ధ, నేపాలీ, భూటియా మరియు లెప్చా సంప్రదాయాల ప్రభావం కనిపిస్తుంది. సంగీతం, నృత్యం, పండుగలు మరియు హస్తకళలు ఈ సంస్కృతిలో ముఖ్యమైనవి.",
    hindi: "सिक्किम की संस्कृति पर बौद्ध, नेपाली, भूटिया और लेपचा परंपराओं का प्रभाव दिखाई देता है। संगीत, नृत्य, त्योहार और हस्तशिल्प इसके महत्वपूर्ण भाग हैं।"
},

"Sikkim|places|Tsomgo Lake": {
    telugu: "త్సోంగో సరస్సు సిక్కింలోని పవిత్ర హిమ సరస్సు. స్థానిక బౌద్ధ సమాజాలు దీనిని పవిత్రంగా భావిస్తాయి మరియు ఇది అద్భుతమైన పర్వత దృశ్యాలకు ప్రసిద్ధి.",
    hindi: "त्सोमगो झील सिक्किम की पवित्र हिमानी झील है। स्थानीय बौद्ध समुदाय इसे पवित्र मानते हैं और यह पर्वतीय दृश्यों के लिए प्रसिद्ध है।"
},

"Sikkim|places|Rumtek Monastery": {
    telugu: "రుమ్టెక్ మఠం సిక్కింలోని ప్రముఖ టిబెటన్ బౌద్ధ మఠం. ఇది కర్మపా సంప్రదాయానికి ముఖ్యమైన కేంద్రంగా ప్రసిద్ధి చెందింది.",
    hindi: "रुमटेक मठ सिक्किम का प्रमुख तिब्बती बौद्ध मठ है। यह कर्मापा परंपरा के महत्वपूर्ण केंद्र के रूप में प्रसिद्ध है।"
},


/* ==================== TAMIL NADU ==================== */

"Tamil Nadu|dance|Bharatanatyam": {
    telugu: "భరతనాట్యం తమిళనాడుకు చెందిన ప్రసిద్ధ శాస్త్రీయ నృత్యం. దేవాలయ సంప్రదాయాలతో దీనికి చారిత్రక సంబంధం ఉంది మరియు హస్తముద్రలు, అడుగులు మరియు భావప్రకటనలకు ప్రాధాన్యం ఉంటుంది.",
    hindi: "भरतनाट्यम तमिलनाडु की प्रसिद्ध शास्त्रीय नृत्य शैली है। इसका ऐतिहासिक संबंध मंदिर परंपराओं से है और इसमें हस्तमुद्राओं, पदचालन तथा भावाभिव्यक्ति को महत्व दिया जाता है।"
},

"Tamil Nadu|arts|Tanjore Painting": {
    telugu: "తంజావూర్ పెయింటింగ్ తమిళనాడుకు చెందిన అలంకార చిత్రకళ. బంగారు పలకలు, రత్నాల అలంకరణ మరియు దేవతల చిత్రాలు దీని ప్రత్యేకత.",
    hindi: "तंजावुर चित्रकला तमिलनाडु की सजावटी चित्रकला परंपरा है। इसमें सोने की परत, रत्नों जैसी सजावट और देवी-देवताओं के चित्र प्रमुख होते हैं।"
},

"Tamil Nadu|food|Pongal": {
    telugu: "పొంగల్ బియ్యం మరియు పప్పుతో తయారు చేసే సంప్రదాయ తమిళ వంటకం. తీపి మరియు ఉప్పు రకాలుగా దీనిని తయారు చేస్తారు.",
    hindi: "पोंगल चावल और दाल से बनाया जाने वाला पारंपरिक तमिल व्यंजन है। इसे मीठे और नमकीन दोनों रूपों में तैयार किया जाता है।"
},

"Tamil Nadu|food|Idli": {
    telugu: "ఇడ్లీ బియ్యం మరియు మినప్పప్పు పిండిని పులియబెట్టి ఆవిరితో ఉడికించే ప్రసిద్ధ దక్షిణ భారత వంటకం. సాధారణంగా సాంబార్ మరియు చట్నీతో వడ్డిస్తారు.",
    hindi: "इडली चावल और उड़द दाल के किण्वित घोल से भाप में पकाया जाने वाला प्रसिद्ध दक्षिण भारतीय व्यंजन है। इसे आमतौर पर सांभर और चटनी के साथ परोसा जाता है।"
},

"Tamil Nadu|dress|Kanchipuram Saree": {
    telugu: "కాంచీపురం చీర తమిళనాడులోని కాంచీపురం ప్రాంతానికి చెందిన ప్రసిద్ధ పట్టు చీర. బంగారు జరీ, క్లిష్టమైన డిజైన్లు మరియు నాణ్యమైన పట్టుకు ఇది ప్రసిద్ధి.",
    hindi: "कांचीपुरम साड़ी तमिलनाडु के कांचीपुरम क्षेत्र की प्रसिद्ध रेशमी साड़ी है। यह सुनहरी ज़री, जटिल डिज़ाइन और उच्च गुणवत्ता वाले रेशम के लिए प्रसिद्ध है।"
},

"Tamil Nadu|festival|Pongal": {
    telugu: "పొంగల్ తమిళనాడులో జరుపుకునే ముఖ్యమైన పంట పండుగ. కొత్త పంటకు కృతజ్ఞతలు తెలుపుతూ సూర్యుడు మరియు ప్రకృతిని గౌరవిస్తారు.",
    hindi: "पोंगल तमिलनाडु का प्रमुख फसल उत्सव है। नई फसल के लिए आभार व्यक्त करते हुए सूर्य और प्रकृति का सम्मान किया जाता है।"
},

"Tamil Nadu|culture|Tamil Culture": {
    telugu: "తమిళ సంస్కృతి ప్రాచీన తమిళ భాష, సాహిత్యం, దేవాలయాలు, సంగీతం, నృత్యం, ఆహారం మరియు పండుగలతో సమృద్ధిగా ఉంది.",
    hindi: "तमिल संस्कृति प्राचीन तमिल भाषा, साहित्य, मंदिरों, संगीत, नृत्य, भोजन और त्योहारों से समृद्ध है।"
},

"Tamil Nadu|places|Meenakshi Temple": {
    telugu: "మీనాక్షి అమ్మన్ ఆలయం మదురైలోని ప్రసిద్ధ చారిత్రక దేవాలయం. దాని ఎత్తైన గోపురాలు మరియు అనేక శిల్పాలు ద్రావిడ దేవాలయ నిర్మాణకళకు అద్భుత ఉదాహరణ.",
    hindi: "मीनाक्षी अम्मन मंदिर मदुरै का प्रसिद्ध ऐतिहासिक मंदिर है। इसके ऊँचे गोपुरम और अनेक मूर्तियाँ द्रविड़ मंदिर वास्तुकला का शानदार उदाहरण हैं।"
},

"Tamil Nadu|places|Mahabalipuram": {
    telugu: "మహాబలిపురం పల్లవుల కాలానికి చెందిన రాతి దేవాలయాలు మరియు శిల్పాలకు ప్రసిద్ధి. ఇక్కడి స్మారకాలు యునెస్కో ప్రపంచ వారసత్వ ప్రదేశంగా గుర్తించబడ్డాయి.",
    hindi: "महाबलीपुरम पल्लव काल के पत्थर के मंदिरों और मूर्तियों के लिए प्रसिद्ध है। यहाँ के स्मारक यूनेस्को विश्व धरोहर स्थल हैं।"
},


/* ==================== TRIPURA ==================== */

"Tripura|dance|Hojagiri": {
    telugu: "హోజాగిరి త్రిపురలోని రియాంగ్ గిరిజన మహిళలు ప్రదర్శించే ప్రసిద్ధ నృత్యం. తలపై కుండలు మరియు దీపాలను సమతుల్యం చేస్తూ నృత్యం చేస్తారు.",
    hindi: "होजागिरी त्रिपुरा की रियांग जनजातीय महिलाओं द्वारा किया जाने वाला प्रसिद्ध नृत्य है। वे सिर पर घड़े और दीपक संतुलित करते हुए नृत्य करती हैं।"
},

"Tripura|arts|Bamboo Crafts": {
    telugu: "త్రిపురలో వెదురు అడవుల కారణంగా ఫర్నిచర్, బుట్టలు మరియు గృహోపకరణాలను తయారు చేసే వెదురు హస్తకళా సంప్రదాయం అభివృద్ధి చెందింది.",
    hindi: "त्रिपुरा में बाँस के जंगलों के कारण फर्नीचर, टोकरियाँ और घरेलू वस्तुएँ बनाने की समृद्ध बाँस शिल्प परंपरा विकसित हुई है।"
},

"Tripura|food|Mui Borok": {
    telugu: "ముయి బోరోక్ త్రిపురలోని స్థానిక బోరోక్ సమాజపు సంప్రదాయ ఆహార సంస్కృతికి సంబంధించిన వంటకం. పులియబెట్టిన చేప, కూరగాయలు మరియు వెదురు మొలకలను ఉపయోగిస్తారు.",
    hindi: "मुई बोरोक त्रिपुरा के स्थानीय बोरोक समुदाय की पारंपरिक खाद्य संस्कृति से जुड़ा व्यंजन है। इसमें किण्वित मछली, सब्ज़ियाँ और बाँस की कोपलें उपयोग की जाती हैं।"
},

"Tripura|dress|Rignai": {
    telugu: "రిగ్నై త్రిపుర మహిళలు చేతివృత్తి మగ్గాలపై నేసే సంప్రదాయ చుట్టు వస్త్రం. రంగులు మరియు ఆకృతులు వివిధ గిరిజన సమాజాలను ప్రతిబింబిస్తాయి.",
    hindi: "रिगनाई त्रिपुरा की महिलाओं द्वारा हथकरघे पर बुना जाने वाला पारंपरिक लपेटने वाला वस्त्र है। इसके रंग और डिज़ाइन विभिन्न जनजातीय समुदायों की पहचान दर्शाते हैं।"
},

"Tripura|festival|Kharchi Puja": {
    telugu: "ఖార్చి పూజ త్రిపురలో జరుపుకునే వారం రోజుల పండుగ. చతుర్దశ దేవతలను పూజిస్తూ సంప్రదాయ ఆచారాలు నిర్వహిస్తారు.",
    hindi: "खारची पूजा त्रिपुरा में मनाया जाने वाला एक सप्ताह का त्योहार है। इसमें चतुर्दश देवताओं की पूजा और पारंपरिक अनुष्ठान किए जाते हैं।"
},

"Tripura|culture|Tripuri Culture": {
    telugu: "త్రిపురి సంస్కృతిలో గిరిజన సంప్రదాయాలు, వెదురు హస్తకళలు, జానపద నృత్యాలు, సంగీతం, వస్త్రాలు మరియు స్థానిక ఆహార పద్ధతులు ఉన్నాయి.",
    hindi: "त्रिपुरी संस्कृति में जनजातीय परंपराएँ, बाँस की हस्तकलाएँ, लोक नृत्य, संगीत, परिधान और स्थानीय खाद्य परंपराएँ शामिल हैं।"
},

"Tripura|places|Ujjayanta Palace": {
    telugu: "ఉజ్జయంత ప్యాలెస్ త్రిపుర రాజవంశానికి చెందిన చారిత్రక రాజభవనం. ప్రస్తుతం ఇది త్రిపుర స్టేట్ మ్యూజియంగా ఉపయోగించబడుతోంది.",
    hindi: "उज्जयंत महल त्रिपुरा राजवंश का ऐतिहासिक राजमहल है। वर्तमान में इसे त्रिपुरा राज्य संग्रहालय के रूप में उपयोग किया जाता है।"
},

"Tripura|places|Neermahal": {
    telugu: "నీర్మహల్ రుద్రసాగర్ సరస్సులో ఉన్న అందమైన సరస్సు రాజభవనం. హిందూ మరియు ఇస్లామిక్ నిర్మాణ శైలుల కలయిక దీనిలో కనిపిస్తుంది.",
    hindi: "नीरमहल रुद्रसागर झील में स्थित सुंदर जल महल है। इसमें हिंदू और इस्लामी वास्तुकला का सुंदर मिश्रण दिखाई देता है।"
},


/* ==================== UTTAR PRADESH ==================== */

"Uttar Pradesh|dance|Kathak": {
    telugu: "కథక్ ఉత్తర భారతదేశంలోని పురాతన కథ చెప్పే సంప్రదాయాల నుంచి అభివృద్ధి చెందిన శాస్త్రీయ నృత్యం. తరువాత మొఘల్ మరియు నవాబీ రాజదర్బార్లలో ఇది మరింత అభివృద్ధి చెందింది.",
    hindi: "कथक उत्तर भारत की प्राचीन कथा-वाचन परंपरा से विकसित शास्त्रीय नृत्य है। बाद में यह मुगल और नवाबी दरबारों में और अधिक विकसित हुआ।"
},

"Uttar Pradesh|arts|Chikankari": {
    telugu: "చికన్‌కారీ లక్నోకు చెందిన సున్నితమైన తెల్ల దారపు ఎంబ్రాయిడరీ కళ. ముస్లిన్ మరియు పత్తి వస్త్రాలపై ఈ కళను తరతరాలుగా కొనసాగిస్తున్నారు.",
    hindi: "चिकनकारी लखनऊ की नाजुक सफेद धागे वाली कढ़ाई कला है। इसे मलमल और सूती कपड़ों पर पीढ़ियों से किया जाता रहा है।"
},

"Uttar Pradesh|food|Awadhi Biryani": {
    telugu: "అవధీ బిర్యానీ బాస్మతి అన్నం మరియు మసాలాలతో మెరినేట్ చేసిన మాంసాన్ని పొరలుగా అమర్చి నెమ్మదిగా ఉడికించే వంటకం. లక్నో నవాబుల వంటశాలలతో దీనికి అనుబంధం ఉంది.",
    hindi: "अवधी बिरयानी बासमती चावल और मसालेदार मांस को परतों में रखकर धीमी आँच पर पकाया जाने वाला व्यंजन है। इसका संबंध लखनऊ के नवाबी रसोईघर से है।"
},

"Uttar Pradesh|food|Petha": {
    telugu: "పేఠా ఆగ్రాకు ప్రసిద్ధి చెందిన తీపి వంటకం. బూడిద గుమ్మడికాయను చక్కెర పాకంలో ఉడికించి పారదర్శకంగా మారే వరకు తయారు చేస్తారు.",
    hindi: "पेठा आगरा की प्रसिद्ध मिठाई है। इसे सफेद कद्दू को चीनी की चाशनी में पकाकर पारदर्शी होने तक तैयार किया जाता है।"
},

"Uttar Pradesh|dress|Chikankari Kurta": {
    telugu: "చికన్‌కారీ కుర్తా లక్నో సంప్రదాయ తెల్లదారపు ఎంబ్రాయిడరీతో అలంకరించబడిన వస్త్రం. ఇది ఉత్తరప్రదేశ్ వస్త్ర వారసత్వానికి ముఖ్యమైన ప్రతీక.",
    hindi: "चिकनकारी कुर्ता लखनऊ की पारंपरिक सफेद धागे वाली कढ़ाई से सजाया गया परिधान है। यह उत्तर प्रदेश की वस्त्र विरासत का महत्वपूर्ण प्रतीक है।"
},

"Uttar Pradesh|festival|Holi": {
    telugu: "హోలీ రంగుల పండుగగా ప్రసిద్ధి చెందింది. రంగులు మరియు నీటితో ఆనందంగా జరుపుకుంటారు. మథుర మరియు వృందావన ప్రాంతాల్లో కృష్ణుడితో సంబంధం ఉన్న ప్రత్యేక వేడుకలు జరుగుతాయి.",
    hindi: "होली रंगों के त्योहार के रूप में प्रसिद्ध है। इसे रंगों और पानी के साथ खुशी से मनाया जाता है। मथुरा और वृंदावन में कृष्ण से जुड़ी विशेष होली मनाई जाती है।"
},

"Uttar Pradesh|festival|Diwali": {
    telugu: "దీపావళి వెలుగుల పండుగ. సంప్రదాయం ప్రకారం శ్రీరాముడు అయోధ్యకు తిరిగి వచ్చిన సందర్భంగా దీనిని జరుపుకుంటారు. ఇళ్లలో దీపాలు వెలిగించి చీకటిపై వెలుగు విజయాన్ని సూచిస్తారు.",
    hindi: "दीवाली प्रकाश का त्योहार है। परंपरा के अनुसार इसे भगवान राम के अयोध्या लौटने की स्मृति में मनाया जाता है। घरों में दीप जलाकर अंधकार पर प्रकाश की विजय का प्रतीक बनाया जाता है।"
},

"Uttar Pradesh|culture|Awadhi Culture": {
    telugu: "అవధీ సంస్కృతి లక్నో మరియు అవధ్ ప్రాంతపు సంగీతం, కవిత్వం, వంటకాలు, వస్త్రాలు మరియు సున్నితమైన సామాజిక సంప్రదాయాలతో ప్రసిద్ధి చెందింది.",
    hindi: "अवधी संस्कृति लखनऊ और अवध क्षेत्र के संगीत, कविता, भोजन, परिधान और परिष्कृत सामाजिक परंपराओं के लिए प्रसिद्ध है।"
},

"Uttar Pradesh|places|Taj Mahal": {
    telugu: "తాజ్ మహల్ ఆగ్రాలోని ప్రసిద్ధ తెల్లని పాలరాతి సమాధి. మొఘల్ చక్రవర్తి షాజహాన్ తన భార్య ముమ్తాజ్ మహల్ జ్ఞాపకార్థం దీనిని నిర్మించాడు. ఇది యునెస్కో ప్రపంచ వారసత్వ ప్రదేశం.",
    hindi: "ताजमहल आगरा का प्रसिद्ध सफेद संगमरमर का मकबरा है। मुगल सम्राट शाहजहाँ ने इसे अपनी पत्नी मुमताज़ महल की स्मृति में बनवाया था। यह यूनेस्को विश्व धरोहर स्थल है।"
},

"Uttar Pradesh|places|Varanasi": {
    telugu: "వారణాసి గంగా నది తీరంలో ఉన్న ప్రపంచంలోని అత్యంత ప్రాచీన నివాస నగరాలలో ఒకటి. ఘాట్‌లు, దేవాలయాలు మరియు ఆధ్యాత్మిక సంప్రదాయాలకు ఇది ప్రసిద్ధి.",
    hindi: "वाराणसी गंगा नदी के किनारे स्थित दुनिया के सबसे प्राचीन बसे हुए शहरों में से एक है। यह अपने घाटों, मंदिरों और आध्यात्मिक परंपराओं के लिए प्रसिद्ध है।"
},

"Uttar Pradesh|places|Fatehpur Sikri": {
    telugu: "ఫతేపూర్ సిక్రీని మొఘల్ చక్రవర్తి అక్బర్ 16వ శతాబ్దంలో తన రాజధానిగా నిర్మించాడు. ఎర్ర ఇసుకరాయి నిర్మాణాలు మరియు బులంద్ దర్వాజా దీనికి ప్రసిద్ధి.",
    hindi: "फतेहपुर सीकरी को मुगल सम्राट अकबर ने 16वीं शताब्दी में अपनी राजधानी के रूप में बनवाया था। यह लाल बलुआ पत्थर की इमारतों और बुलंद दरवाज़े के लिए प्रसिद्ध है।"
},


/* ==================== UTTARAKHAND ==================== */

"Uttarakhand|dance|Chholiya": {
    telugu: "ఛోలియా ఉత్తరాఖండ్‌లోని కుమావోన్ ప్రాంతానికి చెందిన సంప్రదాయ కత్తి నృత్యం. ఇది యోధుల సంప్రదాయాలతో అనుబంధం కలిగి ఉండి, తరువాత వివాహ వేడుకల్లో కూడా ప్రదర్శించబడింది.",
    hindi: "छोलिया उत्तराखंड के कुमाऊँ क्षेत्र का पारंपरिक तलवार नृत्य है। इसका संबंध योद्धा परंपराओं से है और बाद में इसे विवाह समारोहों में भी प्रस्तुत किया जाने लगा।"
},

"Uttarakhand|arts|Aipan Art": {
    telugu: "ఐపన్ ఉత్తరాఖండ్‌లోని కుమావోన్ ప్రాంతానికి చెందిన సంప్రదాయ ఆచార కళ. బియ్యపు పిండితో నేలలు మరియు గోడలపై ప్రత్యేక ఆకృతులను గీస్తారు.",
    hindi: "ऐपण उत्तराखंड के कुमाऊँ क्षेत्र की पारंपरिक अनुष्ठानिक कला है। चावल के घोल से फर्श और दीवारों पर विशेष डिज़ाइन बनाए जाते हैं।"
},

"Uttarakhand|food|Kafuli": {
    telugu: "కఫులీ ఆకుకూరలతో తయారు చేసే ఉత్తరాఖండ్ సంప్రదాయ వంటకం. పాలకూర మరియు ఇతర ఆకుకూరలను మసాలాలతో ఉడికించి తయారు చేస్తారు.",
    hindi: "काफुली उत्तराखंड का पारंपरिक व्यंजन है। इसमें पालक और अन्य हरी पत्तेदार सब्ज़ियों को मसालों के साथ पकाया जाता है।"
},

"Uttarakhand|food|Aloo Ke Gutke": {
    telugu: "ఆలూ కే గుట్కే ఉడికించిన బంగాళాదుంపలను ఆవాలు, జీలకర్ర మరియు హిమాలయ మసాలాలతో వేయించి తయారు చేసే వంటకం.",
    hindi: "आलू के गुटके उबले हुए आलू को सरसों, जीरा और हिमालयी मसालों के साथ भूनकर बनाया जाने वाला पारंपरिक व्यंजन है।"
},

"Uttarakhand|dress|Ghagra Choli": {
    telugu: "ఉత్తరాఖండ్‌లో గఢ్వాలీ మరియు కుమావోన్ మహిళలు ఘాఘ్రా చోళీని సంప్రదాయంగా ధరిస్తారు. దీనితో పాటు వెండి ఆభరణాలను కూడా ధరిస్తారు.",
    hindi: "उत्तराखंड में गढ़वाली और कुमाऊँनी महिलाएँ पारंपरिक रूप से घाघरा चोली पहनती हैं। इसके साथ भारी चाँदी के आभूषण भी पहने जाते हैं।"
},

"Uttarakhand|festival|Nanda Devi Raj Jat": {
    telugu: "నందా దేవి రాజ్ జాట్ ఉత్తరాఖండ్‌లో ప్రతి పన్నెండు సంవత్సరాలకు ఒకసారి జరిగే ప్రసిద్ధ హిమాలయ తీర్థయాత్ర. నందా దేవిని గౌరవిస్తూ ఈ యాత్ర నిర్వహించబడుతుంది.",
    hindi: "नंदा देवी राज जात उत्तराखंड में हर बारह वर्ष में आयोजित होने वाली प्रसिद्ध हिमालयी तीर्थयात्रा है। यह देवी नंदा के सम्मान में आयोजित की जाती है।"
},

"Uttarakhand|culture|Garhwali Culture": {
    telugu: "గఢ్వాలీ సంస్కృతిలో హిమాలయ జీవనశైలి, జానపద సంగీతం, నృత్యం, ఆహారం, వస్త్రాలు మరియు పర్వత సంప్రదాయాలు ముఖ్యమైనవి.",
    hindi: "गढ़वाली संस्कृति में हिमालयी जीवनशैली, लोक संगीत, नृत्य, भोजन, परिधान और पर्वतीय परंपराओं का महत्वपूर्ण स्थान है।"
},

"Uttarakhand|places|Kedarnath": {
    telugu: "కేదార్‌నాథ్ హిమాలయాల్లో ఉన్న ప్రసిద్ధ శివాలయం మరియు ముఖ్యమైన తీర్థయాత్రా కేంద్రం. ఇది పర్వత ప్రాంతంలోని పవిత్ర దేవాలయంగా ప్రసిద్ధి చెందింది.",
    hindi: "केदारनाथ हिमालय में स्थित प्रसिद्ध शिव मंदिर और प्रमुख तीर्थ स्थल है। यह पर्वतीय क्षेत्र में स्थित पवित्र मंदिर के रूप में प्रसिद्ध है।"
},

"Uttarakhand|places|Badrinath": {
    telugu: "బద్రీనాథ్ ఉత్తరాఖండ్‌లోని ప్రసిద్ధ విష్ణు ఆలయం. హిందూ సంప్రదాయంలోని చార్ ధామ్ తీర్థయాత్రలో ఇది ముఖ్యమైన స్థానం కలిగి ఉంది.",
    hindi: "बद्रीनाथ उत्तराखंड का प्रसिद्ध भगवान विष्णु मंदिर है। हिंदू परंपरा की चार धाम तीर्थयात्रा में इसका महत्वपूर्ण स्थान है।"
},

"Uttarakhand|places|Rishikesh": {
    telugu: "ఋషికేశ్ గంగా నది తీరంలో ఉన్న ప్రసిద్ధ ఆధ్యాత్మిక మరియు యోగా కేంద్రం. హిమాలయాల ప్రవేశ ద్వారంగా కూడా దీనిని పిలుస్తారు.",
    hindi: "ऋषिकेश गंगा नदी के किनारे स्थित प्रसिद्ध आध्यात्मिक और योग केंद्र है। इसे हिमालय का प्रवेश द्वार भी कहा जाता है।"
},


/* ==================== WEST BENGAL ==================== */

"West Bengal|dance|Chhau": {
    telugu: "ఛౌ తూర్పు భారతదేశంలోని ప్రసిద్ధ జానపద నృత్య రూపం. ముఖవేషాలు, యుద్ధ కదలికలు మరియు పురాణ కథలను ప్రదర్శించడం దీని ప్రత్యేకత.",
    hindi: "छाऊ पूर्वी भारत की प्रसिद्ध लोक नृत्य शैली है। मुखौटे, युद्ध जैसी गतिविधियाँ और पौराणिक कथाओं का प्रदर्शन इसकी प्रमुख विशेषताएँ हैं।"
},

"West Bengal|dance|Gambhira": {
    telugu: "గంభీరా పశ్చిమ బెంగాల్‌లోని జానపద గాన-నృత్య సంప్రదాయం. సామాజిక విషయాలను పాటలు, సంభాషణలు మరియు హాస్యంతో ప్రదర్శించడం దీని ప్రత్యేకత.",
    hindi: "गंभीरा पश्चिम बंगाल की लोक गीत और नृत्य परंपरा है। इसमें सामाजिक विषयों को गीत, संवाद और हास्य के माध्यम से प्रस्तुत किया जाता है।"
},

"West Bengal|arts|Kalighat Painting": {
    telugu: "కాలీఘాట్ పెయింటింగ్ కోల్‌కతాలో అభివృద్ధి చెందిన సంప్రదాయ చిత్రకళ. దేవతలు, పురాణ కథలు మరియు సామాజిక జీవితాన్ని సరళమైన ఆకృతులతో చిత్రించడం దీని ప్రత్యేకత.",
    hindi: "कालीघाट चित्रकला कोलकाता में विकसित हुई पारंपरिक चित्रकला है। इसमें देवी-देवताओं, पौराणिक कथाओं और सामाजिक जीवन को सरल आकृतियों में चित्रित किया जाता है।"
},

"West Bengal|food|Rasgulla": {
    telugu: "రసగుల్లా చెన్నా లేదా పన్నీర్‌తో తయారు చేసే ప్రసిద్ధ బెంగాలీ మిఠాయి. మృదువైన గుండ్రని ముక్కలను చక్కెర పాకంలో ఉడికిస్తారు.",
    hindi: "रसगुल्ला प्रसिद्ध बंगाली मिठाई है। इसे छेना या पनीर से बने नरम गोलों को चीनी की चाशनी में पकाकर तैयार किया जाता है।"
},

"West Bengal|food|Macher Jhol": {
    telugu: "మాచెర్ ఝోల్ బెంగాల్‌లో ప్రసిద్ధి చెందిన చేపల కూర. చేపను మసాలాలు మరియు కూరగాయలతో పలుచని గ్రేవీలో వండుతారు.",
    hindi: "माछेर झोल बंगाल की प्रसिद्ध मछली की करी है। इसमें मछली को मसालों और सब्ज़ियों के साथ हल्की ग्रेवी में पकाया जाता है।"
},

"West Bengal|dress|Tant Saree": {
    telugu: "టాంట్ చీర పశ్చిమ బెంగాల్‌లో ప్రసిద్ధి చెందిన తేలికైన చేతినేయు పత్తి చీర. వేడి వాతావరణానికి అనుకూలంగా ఉండి అందమైన డిజైన్లతో తయారు చేస్తారు.",
    hindi: "टांत साड़ी पश्चिम बंगाल की प्रसिद्ध हल्की हथकरघा सूती साड़ी है। यह गर्म मौसम के लिए उपयुक्त होती है और सुंदर डिज़ाइनों के लिए प्रसिद्ध है।"
},

"West Bengal|festival|Durga Puja": {
    telugu: "దుర్గా పూజ పశ్చిమ బెంగాల్‌లో అత్యంత వైభవంగా జరుపుకునే పండుగ. దుర్గాదేవి విగ్రహాలను ప్రతిష్ఠించి పూజలు, సాంస్కృతిక కార్యక్రమాలు మరియు ఊరేగింపులు నిర్వహిస్తారు.",
    hindi: "दुर्गा पूजा पश्चिम बंगाल का सबसे भव्य त्योहारों में से एक है। दुर्गा की प्रतिमाएँ स्थापित करके पूजा, सांस्कृतिक कार्यक्रम और जुलूस आयोजित किए जाते हैं।"
},

"West Bengal|culture|Bengali Culture": {
    telugu: "బెంగాలీ సంస్కృతిలో సాహిత్యం, సంగీతం, కళలు, నాటకం, పండుగలు, వస్త్రాలు మరియు ప్రత్యేక ఆహార సంప్రదాయాలకు ముఖ్యమైన స్థానం ఉంది.",
    hindi: "बंगाली संस्कृति में साहित्य, संगीत, कला, रंगमंच, त्योहार, परिधान और विशिष्ट खाद्य परंपराओं का महत्वपूर्ण स्थान है।"
},

"West Bengal|places|Victoria Memorial": {
    telugu: "విక్టోరియా మెమోరియల్ కోల్‌కతాలోని తెల్లని పాలరాతితో నిర్మించిన ప్రసిద్ధ చారిత్రక స్మారకం. బ్రిటిష్ మరియు మొఘల్ నిర్మాణ శైలుల ప్రభావం ఇందులో కనిపిస్తుంది.",
    hindi: "विक्टोरिया मेमोरियल कोलकाता का प्रसिद्ध सफेद संगमरमर का ऐतिहासिक स्मारक है। इसमें ब्रिटिश और मुगल वास्तुकला का प्रभाव दिखाई देता है।"
},

"West Bengal|places|Sundarbans": {
    telugu: "సుందర్‌బన్స్ ప్రపంచంలోనే అతిపెద్ద మాంగ్రోవ్ అడవి ప్రాంతం. ఇది బెంగాల్ పులులు, విభిన్న జీవజాలం మరియు ప్రత్యేకమైన తీరప్రాంత పర్యావరణ వ్యవస్థకు ప్రసిద్ధి.",
    hindi: "सुंदरबन दुनिया का सबसे बड़ा मैंग्रोव वन क्षेत्र है। यह बंगाल टाइगर, विविध वन्यजीव और विशिष्ट तटीय पारिस्थितिकी तंत्र के लिए प्रसिद्ध है।"
},
    // =====================================================
    // JHARKHAND
    // =====================================================

    "Jharkhand|dance|Chhau": {
        telugu:
            "ఛౌ అనేది ముఖ కవచాలతో ప్రదర్శించే నృత్య-నాటక రూపం. ఇది యుద్ధ మరియు రాజసంప్రదాయాల నుండి అభివృద్ధి చెంది, శక్తివంతమైన మరియు విన్యాసభరితమైన కదలికలను పురాణ కథలతో కలిపి ప్రదర్శిస్తుంది. 2010లో యునెస్కో దీనిని అమూర్త సాంస్కృతిక వారసత్వంగా గుర్తించింది.",
        hindi:
            "छऊ एक मुखौटा नृत्य-नाट्य रूप है, जिसकी जड़ें युद्ध और राजदरबारी परंपराओं में हैं। इसमें कलाबाजी जैसी गतिविधियों को पौराणिक कथाओं के साथ प्रस्तुत किया जाता है। 2010 में यूनेस्को ने इसे अमूर्त सांस्कृतिक विरासत के रूप में मान्यता दी।"
    },

    "Jharkhand|dance|Jhumair": {
        telugu:
            "ఝుమైర్ ఛోటా నాగ్‌పూర్ పీఠభూమిలోని వివిధ సమాజాలు ప్రదర్శించే సాంప్రదాయ పంట నృత్యం. ఋతువుల మార్పును సూచించే జానపద గీతాలకు అనుగుణంగా వృత్తాకారంలో నృత్యం చేస్తారు. ఇది సమాజంలో ఐక్యత మరియు అనుబంధాన్ని పెంపొందిస్తుంది.",
        hindi:
            "झूमैर छोटानागपुर पठार के विभिन्न समुदायों द्वारा किया जाने वाला पारंपरिक फसल नृत्य है। इसमें ऋतु परिवर्तन को दर्शाने वाले लोकगीतों के साथ गोलाकार रूप में नृत्य किया जाता है। यह सामुदायिक एकता और आपसी संबंधों को मजबूत करता है।"
    },

    "Jharkhand|arts|Sohrai Painting": {
        telugu:
            "సోహ్రాయ్ కుడ్యచిత్రాలను హజారీబాగ్ ప్రాంతంలోని గిరిజన మహిళలు సోహ్రాయ్ పంట పండుగ సందర్భంగా మట్టి గోడలపై చిత్రిస్తారు. స్థానిక మట్టి మరియు మొక్కల నుండి పొందిన సహజ రంగులను ఉపయోగించి ఈ చిత్రాలను రూపొందిస్తారు.",
        hindi:
            "सोहराय भित्ति चित्र हजारीबाग क्षेत्र की जनजातीय महिलाओं द्वारा सोहराय फसल उत्सव के दौरान बनाए जाते हैं। इन्हें मिट्टी की दीवारों पर स्थानीय मिट्टी और पौधों से प्राप्त प्राकृतिक रंगों का उपयोग करके चित्रित किया जाता है।"
    },

    "Jharkhand|food|Dhuska": {
        telugu: {
            recipe:
                "బియ్యం మరియు పప్పులతో తయారు చేసిన పిండిని డీప్ ఫ్రై చేసి రుచికరమైన, పాన్‌కేక్‌లాంటి చిరుతిండిగా తయారు చేస్తారు. దీనిని సాధారణంగా శనగలు లేదా బంగాళాదుంపల కూరతో వడ్డిస్తారు.",
            nutrients:
                "బియ్యం మరియు పప్పుల మిశ్రమం కార్బోహైడ్రేట్లు మరియు వృక్ష ప్రోటీన్‌ను అందిస్తుంది. అయితే డీప్ ఫ్రై చేయడం వల్ల ఇందులో కొవ్వు పరిమాణం పెరుగుతుంది."
        },
        hindi: {
            recipe:
                "चावल और दाल से बने घोल को डीप-फ्राई करके स्वादिष्ट, पैनकेक जैसे नाश्ते के रूप में तैयार किया जाता है। इसे आमतौर पर चने या आलू की करी के साथ परोसा जाता है।",
            nutrients:
                "चावल और दाल का मिश्रण कार्बोहाइड्रेट और वनस्पति प्रोटीन प्रदान करता है। हालांकि, डीप-फ्राई करने से इसमें वसा की मात्रा बढ़ जाती है।"
        }
    },

    "Jharkhand|dress|Traditional Tribal Dress": {
        telugu:
            "సంతాల్ మరియు ముండా వంటి సమాజాలు సాంప్రదాయకంగా చేతితో నేసిన పత్తి వస్త్రాలను ధరిస్తారు. వీటిలో తెలుపు రంగుతో పాటు ఎరుపు అంచులు తరచుగా కనిపిస్తాయి. ఈ దుస్తులు జార్ఖండ్ యొక్క అడవి ఆధారిత వస్త్ర సంప్రదాయాలను ప్రతిబింబిస్తాయి.",
        hindi:
            "संथाल और मुंडा जैसे समुदाय पारंपरिक रूप से हाथ से बुने सूती वस्त्र पहनते हैं। इनमें अक्सर सफेद रंग और लाल बॉर्डर दिखाई देते हैं। ये वस्त्र झारखंड की वन-आधारित पारंपरिक वस्त्र संस्कृति को दर्शाते हैं।"
    },

    "Jharkhand|festival|Sarhul": {
        telugu:
            "సర్హుల్ సాల్ చెట్టు పుష్పించే కాలాన్ని సూచించే ప్రకృతి ఆరాధన పండుగ. జార్ఖండ్ గిరిజన సమాజాలు దీనిని కొత్త సంవత్సరానికి స్వాగతం పలుకుతూ, సమృద్ధిగా పంటలు పండాలని ప్రార్థిస్తూ జరుపుకుంటారు.",
        hindi:
            "सरहुल साल वृक्ष के फूलने के समय मनाया जाने वाला प्रकृति-पूजा उत्सव है। झारखंड के जनजातीय समुदाय इसे नए वर्ष के स्वागत और अच्छी फसल की प्रार्थना కోసం मनाते हैं।"
    },

    "Jharkhand|places|Hundru Falls": {
        telugu:
            "హుండ్రూ జలపాతం సువర్ణరేఖ నదిపై ఏర్పడిన జార్ఖండ్‌లోని ఎత్తైన జలపాతాలలో ఒకటి. స్థానిక సమాజాలు దీనిని చాలా కాలంగా అద్భుతమైన సహజ ప్రదేశంగా భావిస్తున్నాయి.",
        hindi:
            "हुंडरू जलप्रपात स्वर्णरेखा नदी पर बना झारखंड के ऊँचे जलप्रपातों में से एक है। स्थानीय समुदाय लंबे समय से इसे एक शानदार प्राकृतिक स्थल के रूप में मानते आए हैं."
    },

    "Jharkhand|places|Betla National Park": {
        telugu:
            "బెత్లా జాతీయ ఉద్యానవనం చారిత్రక పాలమౌ అడవులలో భాగం. ఈ అడవులను గతంలో ప్రాంతీయ పాలకులు వేట కోసం ఉపయోగించేవారు. 1974లో ఇది భారతదేశంలోని ప్రారంభ ప్రాజెక్ట్ టైగర్ రిజర్వులలో ఒకటిగా మారింది.",
        hindi:
            "बेतला राष्ट्रीय उद्यान ऐतिहासिक पलामू वनों का हिस्सा है। इन वनों का उपयोग पहले क्षेत्रीय शासकों द्वारा शिकार के लिए किया जाता था। 1974 में यह भारत के शुरुआती प्रोजेक्ट टाइगर रिजर्वों में शामिल हुआ।"
    },


    // =====================================================
    // KARNATAKA
    // =====================================================

    "Karnataka|dance|Yakshagana": {
        telugu:
            "యక్షగానం తీర కర్ణాటకకు చెందిన సాంప్రదాయ నృత్య-నాటక రూపం. ఇందులో నృత్యం, సంగీతం, సంభాషణలు మరియు అద్భుతమైన దుస్తులు ఉంటాయి. ఇది శతాబ్దాల క్రితం దేవాలయ ఆచార నాటక సంప్రదాయాల నుండి అభివృద్ధి చెందినట్లు భావిస్తారు. సాంప్రదాయ ప్రదర్శనలు రాత్రంతా కొనసాగుతూ హిందూ ఇతిహాసాలలోని కథలను వివరిస్తాయి.",
        hindi:
            "यक्षगान तटीय कर्नाटक का पारंपरिक नृत्य-नाट्य रूप है। इसमें नृत्य, संगीत, संवाद और भव्य वेशभूषा शामिल होती है। माना जाता है कि यह सदियों पहले मंदिरों की अनुष्ठानिक नाट्य परंपराओं से विकसित हुआ। पारंपरिक प्रस्तुतियाँ रातभर चलती हैं और हिंदू महाकाव्यों की कथाएँ सुनाती हैं।"
    },

    "Karnataka|arts|Mysore Painting": {
        telugu:
            "మైసూరు చిత్రకళ దక్షిణ భారతదేశానికి చెందిన శాస్త్రీయ కళా శైలి. మైసూరు వోడేయర్ రాజుల ఆదరణలో ఇది అభివృద్ధి చెందింది. సూక్ష్మమైన వివరాలు, హిందూ దేవతల అందమైన చిత్రణ మరియు సున్నితమైన బంగారు రేకుల అలంకరణ దీని ప్రత్యేకతలు.",
        hindi:
            "मैसूर चित्रकला दक्षिण भारत की एक शास्त्रीय कला शैली है। यह मैसूर के वोडेयार राजाओं के संरक्षण में विकसित हुई। बारीक विवरण, हिंदू देवताओं के सुंदर चित्रण और नाजुक सोने की पत्ती का काम इसकी प्रमुख विशेषताएँ हैं।"
    },

    "Karnataka|food|Bisi Bele Bath": {
        telugu: {
            recipe:
                "బియ్యం, పప్పులు మరియు వివిధ కూరగాయలను చింతపండు, ఎండు మిరపకాయలు మరియు ధనియాల గింజలతో తయారు చేసిన ప్రత్యేక బిసిబెలె బాత్ మసాలాతో కలిపి వండుతారు. చివరగా నెయ్యి మరియు జీడిపప్పుతో తాలింపు వేస్తారు.",
            nutrients:
                "బియ్యం కార్బోహైడ్రేట్లను, పప్పులు ప్రోటీన్‌ను మరియు కూరగాయలు ఫైబర్, విటమిన్లను అందిస్తాయి. అందువల్ల ఇది సమతుల్యమైన ఒక పాత్ర భోజనంగా ఉంటుంది."
        },
        hindi: {
            recipe:
                "चावल, दाल और मिश्रित सब्जियों को इमली, सूखी मिर्च और धनिया के बीजों से बने विशेष बिसी बेले बाथ मसाले के साथ पकाया जाता है। अंत में घी और काजू का तड़का लगाया जाता है।",
            nutrients:
                "चावल कार्बोहाइड्रेट, दाल प्रोटीन और सब्जियाँ फाइबर तथा विटामिन प्रदान करती हैं। इसलिए यह एक अपेक्षाकृत संतुलित एक-पॉट भोजन है।"
        }
    },

    "Karnataka|food|Mysore Pak": {
        telugu: {
            recipe:
                "సెనగపిండి, నెయ్యి మరియు చక్కెరను కలిపి ఉడికించి, గట్టిపడే వరకు తయారు చేస్తారు. ఇది సమృద్ధిగా ఉండే, ముక్కలుగా విరిగే తీపి పదార్థంగా మారుతుంది. ఇది మొదట మైసూరు రాజభవనం వంటశాలలో తయారైనట్లు చెబుతారు.",
            nutrients:
                "సెనగపిండి కొంత ప్రోటీన్‌ను అందిస్తుంది. అయితే అధిక నెయ్యి మరియు చక్కెర కారణంగా ఇది ఎక్కువ కేలరీలు కలిగిన తీపి పదార్థం."
        },
        hindi: {
            recipe:
                "बेसन, घी और चीनी को एक साथ पकाया जाता है जब तक कि मिश्रण जमकर समृद्ध और भुरभुरा मिठाई जैसा न बन जाए। माना जाता है कि इसे पहली बार मैसूर महल की रसोई में बनाया गया था।",
            nutrients:
                "बेसन कुछ प्रोटीन प्रदान करता है, लेकिन अधिक मात्रा में घी और चीनी होने के कारण यह अधिक कैलोरी वाली मिठाई है।"
        }
    },

    "Karnataka|dress|Mysore Silk Saree": {
        telugu:
            "మైసూరు పట్టు చీరలు స్వచ్ఛమైన పట్టుతో నేయబడతాయి. వోడేయర్ రాజుల ఆదరణతో ఈ పరిశ్రమ అభివృద్ధి చెందింది. తేలికైన వస్త్రం మరియు గాఢమైన ఏకరంగు డిజైన్ల కారణంగా ఇవి ప్రసిద్ధి చెందాయి.",
        hindi:
            "मैसूर सिल्क साड़ियाँ शुद्ध रेशम से बुनी जाती हैं। यह उद्योग वोडेयार राजाओं के संरक्षण में विकसित हुआ और बाद में कर्नाटक सिल्क इंडस्ट्रीज कॉरपोरेशन से भी जुड़ा। हल्की बनावट और गहरे एकरंगी रंग इनके लिए प्रसिद्ध हैं।"
    },

    "Karnataka|festival|Mysore Dasara": {
        telugu:
            "మైసూరు దసరా కర్ణాటక రాష్ట్ర పండుగ. ఇది రాక్షసుడు మహిషాసురుడిపై దేవి చాముండేశ్వరి సాధించిన విజయాన్ని జరుపుకుంటుంది. వోడేయర్ రాజవంశం దీనికి చారిత్రకంగా ఆదరణ ఇచ్చింది. నేడు మైసూరు ప్యాలెస్ వెలుగులతో అలంకరించబడటం మరియు ఘనమైన ఊరేగింపు ప్రధాన ఆకర్షణలు.",
        hindi:
            "मैसूर दशहरा कर्नाटक का राज्य उत्सव है। यह देवी चामुंडेश्वरी की राक्षस महिषासुर पर विजय का उत्सव है। वोडेयार राजवंश ने ऐतिहासिक रूप से इसे संरक्षण दिया। आज मैसूर महल की रोशनी और भव्य समापन जुलूस इसके प्रमुख आकर्षण हैं।"
    },

    "Karnataka|places|Hampi": {
        telugu:
            "హంపి 14వ నుండి 16వ శతాబ్దాల వరకు విజయనగర సామ్రాజ్యానికి రాజధానిగా ఉండేది మరియు ఒకప్పుడు ప్రపంచంలోని అత్యంత సంపన్న నగరాలలో ఒకటిగా నిలిచింది. నేడు ఇది దేవాలయాలు, రాజభవనాలు మరియు పురాతన మార్కెట్ వీధుల శిథిలాలతో కూడిన యునెస్కో ప్రపంచ వారసత్వ ప్రదేశం.",
        hindi:
            "हम्पी 14वीं से 16वीं शताब्दी तक विजयनगर साम्राज्य की राजधानी थी और कभी दुनिया के सबसे समृद्ध शहरों में से एक थी। आज यह मंदिरों, राजकीय परिसरों और पुराने बाजारों के खंडहरों वाला यूनेस्को विश्व धरोहर स्थल है।"
    },

    "Karnataka|places|Mysore Palace": {
        telugu:
            "మైసూరు ప్యాలెస్ వోడేయర్ రాజవంశానికి రాజ నివాసంగా ఉండేది. పాత చెక్క రాజభవనం అగ్నిప్రమాదంలో నాశనం అయిన తరువాత ప్రస్తుత ప్యాలెస్ 1900ల ప్రారంభంలో నిర్మించబడింది. ఇందులో హిందూ, ఇస్లామిక్, రాజ్‌పుత్ మరియు గోతిక్ వాస్తుశిల్ప శైలుల సమ్మేళనం కనిపిస్తుంది.",
        hindi:
            "मैसूर महल वोडेयार राजवंश का शाही निवास था। पुराने लकड़ी के महल के आग में नष्ट होने के बाद वर्तमान महल का निर्माण 1900 के दशक की शुरुआत में हुआ। इसमें हिंदू, इस्लामी, राजपूत और गोथिक वास्तुकला का मिश्रण दिखाई देता है।"
    },

    "Karnataka|places|Coorg": {
        telugu:
            "కూర్గ్ ప్రాంతాన్ని గతంలో కొడవ రాజవంశం పాలించింది. 19వ శతాబ్దంలో బ్రిటిష్ పాలనలోకి వచ్చిన తరువాత కాఫీ తోటలు అభివృద్ధి చెందాయి. ఈ ప్రాంతం ప్రత్యేకమైన కొడవ సంస్కృతి మరియు యుద్ధ సంప్రదాయాలకు కూడా ప్రసిద్ధి చెందింది.",
        hindi:
            "कूर्ग क्षेत्र पर पहले कोडवा राजवंश का शासन था। 19वीं शताब्दी में ब्रिटिश शासन के बाद यहाँ कॉफी के बागान विकसित हुए। यह क्षेत्र अपनी विशिष्ट कोडवा संस्कृति और मार्शल परंपराओं के लिए भी प्रसिद्ध है।"
    },


    // =====================================================
    // KERALA
    // =====================================================

    "Kerala|dance|Kathakali": {
        telugu:
            "కథకళి కేరళలో సుమారు 17వ శతాబ్దంలో అభివృద్ధి చెందింది. కృష్ణనాట్టం వంటి దేవాలయ నృత్య-నాటక సంప్రదాయాలను కలరిపయట్టు యుద్ధ కదలికలతో మిళితం చేసింది. కళాకారులు రామాయణం మరియు మహాభారతంలోని పాత్రలను అద్భుతమైన మేకప్ మరియు దుస్తులతో ప్రదర్శిస్తారు. మాటలకంటే ముద్రలు మరియు ముఖ భావాలను ఉపయోగించి కథను వ్యక్తపరుస్తారు.",
        hindi:
            "कथकली केरल में लगभग 17वीं शताब्दी में विकसित हुआ। इसमें कृष्णनाट्टम जैसी मंदिर नृत्य-नाट्य परंपराओं को कलरिपयट्टु की युद्ध गतिविधियों के साथ जोड़ा गया। कलाकार रामायण और महाभारत के पात्रों को भव्य मेकअप और वेशभूषा के साथ प्रस्तुत करते हैं तथा संवाद के बजाय मुद्राओं और चेहरे के भावों से कथा व्यक्त करते हैं।"
    },

    "Kerala|dance|Mohiniyattam": {
        telugu:
            "మోహినీయాట్టం అనే పేరు 'మోహింపజేసే స్త్రీ నృత్యం' అనే అర్థాన్ని కలిగి ఉంది మరియు విష్ణువు యొక్క మోహినీ అవతార కథ నుండి వచ్చింది. ఇది కథకళితో పాటు కేరళ దేవాలయ ప్రాంగణాల్లో అభివృద్ధి చెందింది. 19వ శతాబ్దంలో ఆదరణ తగ్గిన తరువాత, 20వ శతాబ్దం ప్రారంభంలో దీనిని పునరుద్ధరించారు.",
        hindi:
            "मोहिनीअट्टम का अर्थ 'मोहिनी का नृत्य' है और इसका नाम विष्णु के मोहिनी अवतार की कथा से आया है। यह कथकली के साथ केरल के मंदिरों में विकसित हुआ। 19वीं शताब्दी में इसकी लोकप्रियता कम हुई, लेकिन 20वीं शताब्दी की शुरुआत में इसे पुनर्जीवित किया गया।"
    },

    "Kerala|arts|Mural Painting": {
        telugu:
            "కేరళ కుడ్యచిత్ర సంప్రదాయం వెయ్యి సంవత్సరాలకు పైగా పురాతనమైనది. దేవాలయాలు మరియు రాజభవనాల గోడలపై హిందూ పురాణాల దృశ్యాలను సహజ రంగులతో చిత్రిస్తారు. ఖనిజాలు, మొక్కలు మరియు బొగ్గు నుండి పొందిన రంగులను ఉపయోగించడం మరియు ఎరుపు, పసుపు, ఆకుపచ్చ రంగులకు ప్రాధాన్యత ఇవ్వడం దీని ప్రత్యేకత.",
        hindi:
            "केरल की भित्ति चित्रकला परंपरा एक हजार वर्षों से भी अधिक पुरानी है। मंदिरों और महलों की दीवारों पर हिंदू पौराणिक कथाओं के दृश्य प्राकृतिक रंगों से बनाए जाते हैं। खनिजों, पौधों और कोयले से प्राप्त रंगों का उपयोग तथा लाल, पीले और हरे रंगों की प्रधानता इसकी विशेषताएँ हैं।"
    },

    "Kerala|food|Appam": {
        telugu: {
            recipe:
                "బియ్యం మరియు కొబ్బరితో తయారు చేసిన పులియబెట్టిన పిండిని చిన్న వంపు ఉన్న పాత్రలో పోసి చేతితో తిప్పుతూ వండుతారు. మధ్య భాగం మృదువుగా మరియు స్పాంజిలా ఉండగా, అంచులు పలుచగా మరియు కరకరలాడేలా ఉంటాయి.",
            nutrients:
                "బియ్యం కార్బోహైడ్రేట్లను అందిస్తుంది. పులియబెట్టడం జీర్ణక్రియకు సహాయపడే ప్రోబయోటిక్స్‌ను అందిస్తుంది మరియు కొబ్బరి ఆరోగ్యకరమైన కొవ్వులను అందిస్తుంది."
        },
        hindi: {
            recipe:
                "चावल और नारियल से बने खमीर उठे घोल को एक छोटी घुमावदार कड़ाही में डालकर हाथ से घुमाया जाता है। पकने पर इसका बीच का हिस्सा नरम और स्पंजी तथा किनारे पतले और कुरकुरे होते हैं।",
            nutrients:
                "चावल कार्बोहाइड्रेट प्रदान करता है। किण्वन पाचन के लिए लाभकारी प्रोबायोटिक्स प्रदान करता है और नारियल स्वस्थ वसा देता है।"
        }
    },

    "Kerala|food|Sadya": {
        telugu: {
            recipe:
                "అరటి ఆకుపై వడ్డించే సాంప్రదాయ శాకాహార విందును సద్య అంటారు. ఇందులో అన్నంతో పాటు వివిధ కూరలు, సాంబార్, రసం, ఊరగాయలు మరియు పాయసం వంటి తీపి పదార్థాలు ఉంటాయి. దీనిని ఓణం మరియు ఇతర వేడుకల సందర్భంగా ప్రత్యేకంగా తయారు చేస్తారు.",
            nutrients:
                "వివిధ కూరగాయలు మరియు పప్పులు ఫైబర్, ప్రోటీన్ మరియు అనేక రకాల విటమిన్లను అందిస్తాయి. అందువల్ల ఇది విస్తృతమైన మరియు పోషకమైన భోజనంగా ఉంటుంది."
        },
        hindi: {
            recipe:
                "सद्या केले के पत्ते पर परोसा जाने वाला पारंपरिक शाकाहारी भोज है। इसमें चावल के साथ विभिन्न करी, सांभर, रसम, अचार और पायसम जैसी मिठाई शामिल होती है। इसे विशेष रूप से ओणम और अन्य समारोहों में तैयार किया जाता है।",
            nutrients:
                "विभिन्न सब्जियाँ और दालें फाइबर, प्रोटीन और कई प्रकार के विटामिन प्रदान करती हैं। इसलिए यह एक विविध और पौष्टिक भोजन है।"
        }
    },

    "Kerala|dress|Kasavu Saree": {
        telugu:
            "కసవు చీరలు తెల్లటి లేదా ఆఫ్-వైట్ పత్తితో నేయబడతాయి మరియు బంగారు జరీ అంచును కలిగి ఉంటాయి. ఇవి కేరళ యొక్క చారిత్రక చేనేత సంప్రదాయాల్లో పాతుకుపోయాయి. కసవు అంచు సంప్రదాయంగా పవిత్రతకు ప్రతీకగా భావించబడేది మరియు దేవాలయ సందర్శనలు, ఓణం వంటి పండుగలలో ధరించేవారు.",
        hindi:
            "कसावु साड़ी ऑफ-व्हाइट सूती कपड़े से बुनी जाती है और इसमें सुनहरे ज़री का बॉर्डर होता है। यह केरल की ऐतिहासिक हथकरघा परंपरा से जुड़ी है। कसावु बॉर्डर को पारंपरिक रूप से पवित्रता का प्रतीक माना जाता था और इसे मंदिर जाने तथा ओणम जैसे त्योहारों पर पहना जाता था।"
    },

    "Kerala|festival|Onam": {
        telugu:
            "ఓణం రాజు మహాబలి తన ప్రజలను కలుసుకోవడానికి ప్రతి సంవత్సరం తిరిగి వస్తాడనే పురాణ కథను గుర్తుచేసుకునే కేరళ పండుగ. ఇది వరి పంట కాలంతో కూడా సంబంధం కలిగి ఉంది. పూకళం పూల అలంకరణలు, పడవ పోటీలు మరియు ఘనమైన ఓణసద్య ఈ వేడుకలో ముఖ్యమైన భాగాలు.",
        hindi:
            "ओणम केरल का प्रमुख त्योहार है जो राजा महाबली के हर वर्ष अपनी प्रजा से मिलने लौटने की पौराणिक कथा से जुड़ा है। यह धान की फसल के मौसम से भी संबंधित है। पूक्कलम फूलों की सजावट, नौका दौड़ और भव्य ओणसद्या इस उत्सव के प्रमुख भाग हैं।"
    },

    "Kerala|places|Alleppey": {
        telugu:
            "అల్లెప్పి 'తూర్పు వెనిస్'గా ప్రసిద్ధి చెందింది. 18వ శతాబ్దంలో దివాన్ రాజా కేశవదాస్ ఆధ్వర్యంలో ఇది ముఖ్యమైన నౌకాశ్రయం మరియు మసాలా వ్యాపార కేంద్రంగా అభివృద్ధి చెందింది. నేడు దాని బ్యాక్‌వాటర్స్, కాలువలు మరియు హౌస్‌బోట్లు కేరళ పర్యాటకానికి ముఖ్యమైన భాగంగా ఉన్నాయి.",
        hindi:
            "अलेप्पी को 'पूर्व का वेनिस' कहा जाता है। 18वीं शताब्दी में दीवान राजा केशवदास के समय यह एक महत्वपूर्ण बंदरगाह और मसाला व्यापार केंद्र के रूप में विकसित हुआ। आज इसके बैकवाटर्स, नहरें और हाउसबोट केरल पर्यटन की प्रमुख पहचान हैं।"
    },

    "Kerala|places|Munnar": {
        telugu:
            "మున్నార్ 19వ శతాబ్దం చివర్లో బ్రిటిష్ తోటల యజమానులచే అభివృద్ధి చేయబడిన కొండ ప్రాంతం మరియు టీ సాగు కేంద్రంగా ప్రసిద్ధి చెందింది. చల్లని వాతావరణం కారణంగా ఈ ప్రాంతం ఆకర్షణీయంగా మారింది. నేడు విస్తారమైన టీ తోటలు మున్నార్ ప్రకృతి దృశ్యానికి ప్రత్యేక గుర్తింపుగా ఉన్నాయి.",
        hindi:
            "मुन्नार 19वीं शताब्दी के अंत में ब्रिटिश बागान मालिकों द्वारा विकसित एक पहाड़ी क्षेत्र और चाय उत्पादन केंद्र के रूप में प्रसिद्ध हुआ। ठंडी जलवायु के कारण यह क्षेत्र आकर्षक बना। आज इसके विस्तृत चाय बागान मुन्नार के प्राकृतिक दृश्य की प्रमुख पहचान हैं।"
    },

    "Kerala|places|Padmanabhaswamy Temple": {
        telugu:
            "తిరువనంతపురంలోని పద్మనాభస్వామి దేవాలయం విష్ణువుకు అంకితం చేయబడింది. ఈ దేవాలయం గురించి వెయ్యి సంవత్సరాలకు పైగా పురాతన గ్రంథాలలో ప్రస్తావనలు ఉన్నాయి. 18వ శతాబ్దంలో ట్రావంకోర్ రాజకుటుంబం దీనిని ప్రస్తుత ద్రావిడ శైలిలో పునర్నిర్మించింది.",
        hindi:
            "तिरुवनंतपुरम का पद्मनाभस्वामी मंदिर भगवान विष्णु को समर्पित है। इस मंदिर का उल्लेख एक हजार वर्षों से भी पुराने ग्रंथों में मिलता है। 18वीं शताब्दी में त्रावणकोर राजपरिवार ने इसे वर्तमान द्रविड़ शैली में पुनर्निर्मित किया।"
    },
        // ---------------- HARYANA ----------------
    "Haryana|dress|Ghagra Choli": {
        telugu: "ఘాఘ్రా చోళీ హర్యానాలో మహిళలు ధరించే సాంప్రదాయ దుస్తులు. ఇందులో పొడవైన ఘాఘ్రా, చోళీ మరియు దుపట్టా ఉంటాయి. రంగురంగుల వస్త్రాలు మరియు ఎంబ్రాయిడరీ ఈ దుస్తుల ప్రత్యేకత.",
        hindi: "घाघरा चोली हरियाणा में महिलाओं द्वारा पहना जाने वाला पारंपरिक पहनावा है। इसमें लंबी घाघरा, चोली और दुपट्टा शामिल होते हैं। रंगीन कपड़े और कढ़ाई इसकी प्रमुख विशेषताएँ हैं।"
    },

    // ---------------- HIMACHAL PRADESH ----------------
    "Himachal Pradesh|dress|Himachali Traditional Dress": {
        telugu: "హిమాచల్ ప్రదేశ్ సాంప్రదాయ దుస్తులు చల్లని పర్వత వాతావరణానికి అనుగుణంగా రూపొందించబడ్డాయి. మహిళలు సాధారణంగా రంగురంగుల దుస్తులు మరియు ప్రత్యేకమైన తలపాగాలను ధరిస్తారు. పురుషుల దుస్తుల్లో కుర్తా, చురీదార్ మరియు హిమాచలి టోపీ వంటి వస్త్రాలు ఉంటాయి.",
        hindi: "हिमाचल प्रदेश की पारंपरिक पोशाक ठंडे पहाड़ी मौसम के अनुकूल होती है। महिलाएँ रंगीन वस्त्र और विशेष सिर पर पहने जाने वाले आभूषण या कपड़े पहनती हैं। पुरुषों की पोशाक में कुर्ता, चूड़ीदार और हिमाचली टोपी प्रमुख हैं।"
    },

    // ---------------- JHARKHAND ----------------
    "Jharkhand|dress|Traditional Tribal Dress": {
        telugu: "జార్ఖండ్ గిరిజన సమాజాల సాంప్రదాయ దుస్తులు వారి ప్రత్యేక సాంస్కృతిక గుర్తింపును ప్రతిబింబిస్తాయి. చేతితో నేసిన పత్తి వస్త్రాలు, రంగురంగుల నమూనాలు మరియు సంప్రదాయ ఆభరణాలు ఈ దుస్తులలో ముఖ్యమైన భాగాలు.",
        hindi: "झारखंड के जनजातीय समुदायों की पारंपरिक पोशाक उनकी विशिष्ट सांस्कृतिक पहचान को दर्शाती है। हाथ से बुने सूती वस्त्र, रंगीन डिज़ाइन और पारंपरिक आभूषण इनके महत्वपूर्ण भाग हैं।"
    },

    // ---------------- KARNATAKA ----------------
    "Karnataka|dress|Mysore Silk Saree": {
        telugu: "మైసూరు పట్టు చీర కర్ణాటకకు ప్రసిద్ధి చెందిన సంప్రదాయ వస్త్రం. ఇది నాణ్యమైన పట్టుతో తయారు చేయబడి, అందమైన బంగారు జరీ అంచులతో అలంకరించబడుతుంది. వివాహాలు మరియు పండుగల వంటి ప్రత్యేక సందర్భాల్లో దీనిని ధరిస్తారు.",
        hindi: "मैसूर सिल्क साड़ी कर्नाटक की प्रसिद्ध पारंपरिक पोशाक है। यह उच्च गुणवत्ता वाले रेशम से बनाई जाती है और सुंदर सुनहरे ज़री बॉर्डर से सजाई जाती है। इसे विवाह और त्योहार जैसे विशेष अवसरों पर पहना जाता है।"
    },

    // ---------------- KERALA ----------------
    "Kerala|dress|Kasavu Saree": {
        telugu: "కసవు చీర కేరళకు చెందిన ప్రసిద్ధ సాంప్రదాయ దుస్తులు. ఇది సాధారణంగా తెలుపు లేదా క్రీమ్ రంగులో ఉండి, బంగారు జరీ అంచును కలిగి ఉంటుంది. ఓణం మరియు ఇతర పండుగలు, వివాహాలు మరియు సాంస్కృతిక కార్యక్రమాల్లో దీనిని ధరిస్తారు.",
        hindi: "कसावु साड़ी केरल की प्रसिद्ध पारंपरिक पोशाक है। यह सामान्यतः सफेद या क्रीम रंग की होती है और इसमें सुनहरे ज़री का बॉर्डर होता है। इसे ओणम, अन्य त्योहारों, विवाहों और सांस्कृतिक कार्यक्रमों में पहना जाता है।"
    },

    // ---------------- MADHYA PRADESH ----------------
    "Madhya Pradesh|dress|Chanderi Saree": {
        telugu: "చందేరీ చీర మధ్యప్రదేశ్‌కు చెందిన ప్రసిద్ధ చేతితో నేసిన చీర. ఇది పట్టు మరియు పత్తి మిశ్రమంతో తయారు చేయబడుతుంది. తేలికైన వస్త్రం, సున్నితమైన నేయడం మరియు అందమైన జరీ అంచులు దీని ప్రత్యేకతలు.",
        hindi: "चंदेरी साड़ी मध्य प्रदेश की प्रसिद्ध हाथ से बुनी साड़ी है। इसे रेशम और सूती धागों के मिश्रण से बनाया जाता है। हल्की बनावट, महीन बुनाई और सुंदर ज़री बॉर्डर इसकी विशेषताएँ हैं।"
    },

    // ---------------- MAHARASHTRA ----------------
    "Maharashtra|dress|Nauvari Saree": {
        telugu: "నౌవారీ చీర మహారాష్ట్రకు చెందిన ప్రత్యేకమైన సాంప్రదాయ చీర. ఇది తొమ్మిది గజాల పొడవు కలిగి ఉండటం వల్ల నౌవారీ అని పిలుస్తారు. దీనిని ధోతి తరహాలో ధరించడం వల్ల సౌకర్యవంతమైన కదలిక సాధ్యమవుతుంది.",
        hindi: "नौवारी साड़ी महाराष्ट्र की विशिष्ट पारंपरिक साड़ी है। यह नौ गज लंबी होने के कारण नौवारी कहलाती है। इसे धोती की तरह पहना जाता है, जिससे चलने-फिरने में सुविधा होती है।"
    },

    // ---------------- MANIPUR ----------------
    "Manipur|dress|Phanek": {
        telugu: "ఫనేక్ మణిపూర్ మహిళలు ధరించే సాంప్రదాయ దుస్తులు. ఇది నడుము నుండి కాళ్ల వరకు చుట్టుకునే వస్త్రం. చేతితో నేసిన ఆకృతులు మరియు రంగురంగుల నమూనాలు మణిపూర్ సంప్రదాయాన్ని ప్రతిబింబిస్తాయి.",
        hindi: "फनेक मणिपुर की महिलाओं द्वारा पहना जाने वाला पारंपरिक वस्त्र है। यह कमर से पैरों तक लपेटा जाने वाला कपड़ा होता है। हाथ से बुने डिज़ाइन और रंगीन पैटर्न मणिपुर की परंपरा को दर्शाते हैं।"
    },

    // ---------------- MEGHALAYA ----------------
    "Meghalaya|dress|Jainsem": {
        telugu: "జైన్‌సెమ్ మేఘాలయలోని ఖాసీ మహిళల సంప్రదాయ దుస్తులు. ఇది శరీరాన్ని చుట్టుకునే పొరల వస్త్రంతో రూపొందించబడుతుంది. ప్రత్యేకమైన నేయు నమూనాలు మరియు రంగులు ఖాసీ సంస్కృతిని ప్రతిబింబిస్తాయి.",
        hindi: "जैनसेम मेघालय की खासी महिलाओं की पारंपरिक पोशाक है। यह शरीर के चारों ओर लपेटे जाने वाले कपड़े की परतों से बनी होती है। विशेष बुनाई और रंग खासी संस्कृति को दर्शाते हैं।"
    },

    // ---------------- MIZORAM ----------------
    "Mizoram|dress|Puan": {
        telugu: "పువాన్ మిజో సమాజానికి చెందిన సంప్రదాయ వస్త్రం. ఇది చేతితో నేసిన రంగురంగుల వస్త్రం మరియు ప్రత్యేకమైన గీతలు, నమూనాలతో అలంకరించబడుతుంది. పండుగలు మరియు సాంస్కృతిక కార్యక్రమాల్లో దీనిని ధరిస్తారు.",
        hindi: "पुआन मिजो समुदाय का पारंपरिक वस्त्र है। यह हाथ से बुना हुआ रंगीन कपड़ा होता है और इसमें विशेष धारियाँ तथा डिज़ाइन होते हैं। इसे त्योहारों और सांस्कृतिक कार्यक्रमों में पहना जाता है।"
    },

    // ---------------- NAGALAND ----------------
    "Nagaland|dress|Naga Shawl": {
        telugu: "నాగా షాల్ నాగాలాండ్‌లోని వివిధ గిరిజన సమాజాల సంప్రదాయ వస్త్రం. ప్రతి తెగకు ప్రత్యేకమైన రంగులు, నమూనాలు మరియు చిహ్నాలు ఉంటాయి. షాల్‌పై కనిపించే ఆకృతులు ధరించిన వ్యక్తి యొక్క తెగ మరియు సామాజిక గుర్తింపును సూచించవచ్చు.",
        hindi: "नागा शॉल नागालैंड की विभिन्न जनजातियों का पारंपरिक वस्त्र है। प्रत्येक जनजाति के अपने विशेष रंग, डिज़ाइन और प्रतीक होते हैं। शॉल पर बने पैटर्न पहनने वाले व्यक्ति की जनजातीय और सामाजिक पहचान को दर्शा सकते हैं।"
    },

    // ---------------- ODISHA ----------------
    "Odisha|dress|Sambalpuri Saree": {
        telugu: "సంబల్పురి చీర ఒడిశాకు చెందిన ప్రసిద్ధ చేతితో నేసిన చీర. ఇందులో ఇక్కత్ పద్ధతిలో తయారు చేసిన ప్రత్యేకమైన నమూనాలు కనిపిస్తాయి. శంఖం, చక్రం, పువ్వులు మరియు జంతువుల ఆకృతులు ఒడిశా కళా సంప్రదాయాన్ని ప్రతిబింబిస్తాయి.",
        hindi: "संबलपुरी साड़ी ओडिशा की प्रसिद्ध हाथ से बुनी साड़ी है। इसमें इकत तकनीक से बनाए गए विशेष डिज़ाइन दिखाई देते हैं। शंख, चक्र, फूल और पशु आकृतियाँ ओडिशा की कला परंपरा को दर्शाती हैं।"
    },

    // ---------------- PUNJAB ----------------
    "Punjab|dress|Phulkari": {
        telugu: "ఫుల్కారీ పంజాబ్‌కు చెందిన ప్రసిద్ధ ఎంబ్రాయిడరీ సంప్రదాయం. రంగురంగుల పట్టు దారాలతో పువ్వులు మరియు ఇతర ఆకృతులను వస్త్రంపై కుట్టుతారు. పంజాబీ మహిళల దుపట్టాలు మరియు దుస్తుల అలంకరణలో ఇది ముఖ్యమైనది.",
        hindi: "फुलकारी पंजाब की प्रसिद्ध कढ़ाई परंपरा है। रंगीन रेशमी धागों से कपड़े पर फूलों और अन्य डिज़ाइनों की कढ़ाई की जाती है। यह पंजाबी महिलाओं के दुपट्टों और पारंपरिक वस्त्रों की प्रमुख सजावट है।"
    },

    // ---------------- RAJASTHAN ----------------
    "Rajasthan|dress|Ghagra Choli": {
        telugu: "ఘాఘ్రా చోళీ రాజస్థాన్ మహిళల ప్రసిద్ధ సంప్రదాయ దుస్తులు. పొడవైన ఘాఘ్రా, చోళీ మరియు ఓఢ్నీ ఇందులో ఉంటాయి. ప్రకాశవంతమైన రంగులు, అద్దాల పని మరియు అందమైన ఎంబ్రాయిడరీ రాజస్థానీ సంస్కృతిని ప్రతిబింబిస్తాయి.",
        hindi: "घाघरा चोली राजस्थान की महिलाओं का प्रसिद्ध पारंपरिक पहनावा है। इसमें लंबी घाघरा, चोली और ओढ़नी शामिल होती हैं। चमकीले रंग, शीशे का काम और सुंदर कढ़ाई राजस्थानी संस्कृति को दर्शाते हैं।"
    },

    // ---------------- SIKKIM ----------------
    "Sikkim|dress|Bakhu": {
        telugu: "బఖు సిక్కింలోని భూటియా సమాజానికి చెందిన సంప్రదాయ దుస్తులు. ఇది శరీరాన్ని చుట్టుకునే పొడవైన వస్త్రం మరియు నడుము వద్ద బెల్ట్‌తో బిగించబడుతుంది. చల్లని పర్వత వాతావరణానికి అనుకూలంగా ఉండే ఈ దుస్తులు సిక్కిం సంస్కృతికి ప్రతీక.",
        hindi: "बखू सिक्किम के भूटिया समुदाय की पारंपरिक पोशाक है। यह शरीर के चारों ओर लपेटा जाने वाला लंबा वस्त्र है जिसे कमर पर बेल्ट से बाँधा जाता है। ठंडे पहाड़ी मौसम के अनुकूल यह पोशाक सिक्किम की सांस्कृतिक पहचान है।"
    },

    // ---------------- TAMIL NADU ----------------
    "Tamil Nadu|dress|Kanchipuram Silk Saree": {
        telugu: "కాంచీపురం పట్టు చీర తమిళనాడుకు చెందిన ప్రసిద్ధ సంప్రదాయ చీర. ఇది కాంచీపురంలో నాణ్యమైన పట్టుతో నేయబడుతుంది. బంగారు జరీ, దేవాలయ ఆకృతులు మరియు గాఢమైన రంగులు ఈ చీరల ప్రత్యేకతలు.",
        hindi: "कांचीपुरम सिल्क साड़ी तमिलनाडु की प्रसिद्ध पारंपरिक साड़ी है। इसे कांचीपुरम में उच्च गुणवत्ता वाले रेशम से बुना जाता है। सुनहरी ज़री, मंदिरों से प्रेरित डिज़ाइन और गहरे रंग इसकी प्रमुख विशेषताएँ हैं।"
    },
    // =========================================================
    // TRIPURA
    // =========================================================

    "Tripura|dress|Rignai and Risa": {
        telugu: "రిగ్నై మరియు రిసా త్రిపురలోని మహిళల సాంప్రదాయ దుస్తులు. రిగ్నై శరీరం దిగువ భాగానికి ధరించే వస్త్రం కాగా, రిసా పైభాగాన్ని కప్పే సంప్రదాయ వస్త్రం. చేతితో నేసిన రంగురంగుల నమూనాలు త్రిపుర గిరిజన సంస్కృతిని ప్రతిబింబిస్తాయి.",
        hindi: "रिगनाई और रिसा त्रिपुरा की महिलाओं की पारंपरिक पोशाक हैं। रिगनाई शरीर के निचले हिस्से पर पहना जाने वाला वस्त्र है, जबकि रिसा ऊपरी शरीर को ढकता है। हाथ से बुने रंगीन डिज़ाइन त्रिपुरा की जनजातीय संस्कृति को दर्शाते हैं।"
    },


    // =========================================================
    // UTTAR PRADESH
    // =========================================================

    "Uttar Pradesh|dress|Banarasi Saree": {
        telugu: "బనారసీ చీర ఉత్తరప్రదేశ్‌లోని వారణాసికి చెందిన ప్రసిద్ధ పట్టు చీర. ఇది సున్నితమైన పట్టు మరియు జరీ పనికి ప్రసిద్ధి చెందింది. పూలు, ఆకులు మరియు సాంప్రదాయ ఆకృతులతో కూడిన క్లిష్టమైన నమూనాలు ఈ చీరల ప్రత్యేకత.",
        hindi: "बनारसी साड़ी उत्तर प्रदेश के वाराणसी की प्रसिद्ध रेशमी साड़ी है। यह महीन रेशम और ज़री के काम के लिए प्रसिद्ध है। फूलों, पत्तियों और पारंपरिक आकृतियों वाले जटिल डिज़ाइन इसकी विशेषता हैं।"
    },


    // =========================================================
    // UTTARAKHAND
    // =========================================================

    "Uttarakhand|dress|Ghagra and Pichora": {
        telugu: "ఘాఘ్రా మరియు పిచోరా ఉత్తరాఖండ్ మహిళల సంప్రదాయ దుస్తులు. పిచోరా సాధారణంగా పసుపు రంగులో ఎరుపు అంచులతో ఉండే ప్రత్యేక వస్త్రం. వివాహాలు మరియు ఇతర శుభకార్యాల్లో దీనిని ముఖ్యంగా ధరిస్తారు.",
        hindi: "घाघरा और पिछोड़ा उत्तराखंड की महिलाओं की पारंपरिक पोशाक हैं। पिछोड़ा सामान्यतः पीले रंग का होता है और इसमें लाल बॉर्डर या डिज़ाइन होते हैं। इसे विशेष रूप से विवाह और अन्य शुभ अवसरों पर पहना जाता है।"
    },


    // =========================================================
    // WEST BENGAL
    // =========================================================

    "West Bengal|dress|Tant Saree": {
        telugu: "తాంత్ చీర పశ్చిమ బెంగాల్‌కు చెందిన ప్రసిద్ధ తేలికైన చేతితో నేసిన పత్తి చీర. వేడి మరియు తేమతో కూడిన వాతావరణానికి అనుకూలంగా ఉండే ఈ చీరలు సున్నితమైన నేయు పని మరియు అందమైన అంచులకు ప్రసిద్ధి చెందాయి.",
        hindi: "तांत साड़ी पश्चिम बंगाल की प्रसिद्ध हल्की और हाथ से बुनी सूती साड़ी है। गर्म और नम मौसम के लिए उपयुक्त ये साड़ियाँ महीन बुनाई और सुंदर बॉर्डर के लिए प्रसिद्ध हैं।"
    },
    // ============================================================
// PART 1 — PLACES: TELUGU + HINDI
// States 1–14
// ============================================================

// ==================== ANDHRA PRADESH ====================

"Andhra Pradesh|places|Tirupati": {
    telugu: "తిరుపతి తిరుమల కొండలపై ఉన్న ప్రసిద్ధ వెంకటేశ్వర స్వామి ఆలయానికి నిలయం. ఈ ఆలయం ప్రపంచంలోని ప్రముఖ పుణ్యక్షేత్రాలలో ఒకటి. అనేక రాజవంశాల కాలంలో ఆలయం అభివృద్ధి చెందింది.",
    hindi: "तिरुपति तिरुमला की पहाड़ियों पर स्थित प्रसिद्ध वेंकटेश्वर मंदिर के लिए जाना जाता है। यह दुनिया के प्रमुख तीर्थस्थलों में से एक है। अनेक राजवंशों के समय मंदिर का विकास हुआ।"
},

"Andhra Pradesh|places|Araku Valley": {
    telugu: "అరకు లోయ తూర్పు కనుమల్లో ఉన్న అందమైన పర్వత ప్రాంతం. ఇక్కడ గిరిజన సమాజాల జీవన విధానం, కాఫీ తోటలు మరియు ప్రకృతి దృశ్యాలు ప్రసిద్ధి చెందాయి.",
    hindi: "अराकू घाटी पूर्वी घाटों में स्थित सुंदर पहाड़ी क्षेत्र है। यहाँ जनजातीय जीवन, कॉफी के बागान और प्राकृतिक दृश्य प्रसिद्ध हैं।"
},

"Andhra Pradesh|places|Amaravati": {
    telugu: "అమరావతి కృష్ణా నది తీరంలోని ప్రాచీన బౌద్ధ కేంద్రం. అమరావతి స్తూపం మరియు పురాతన శిల్పాలు ఈ ప్రాంత చారిత్రక ప్రాధాన్యతను తెలియజేస్తాయి.",
    hindi: "अमरावती कृष्णा नदी के किनारे स्थित प्राचीन बौद्ध केंद्र है। अमरावती स्तूप और प्राचीन मूर्तियाँ इस क्षेत्र के ऐतिहासिक महत्व को दर्शाती हैं।"
},


// ==================== ARUNACHAL PRADESH ====================

"Arunachal Pradesh|places|Tawang": {
    telugu: "తవాంగ్ ప్రసిద్ధ తవాంగ్ మఠానికి పేరుగాంచిన పర్వత ప్రాంతం. ఈ మఠం 17వ శతాబ్దంలో స్థాపించబడింది మరియు భారతదేశంలోని ముఖ్యమైన బౌద్ధ కేంద్రాలలో ఒకటి.",
    hindi: "तवांग अपने प्रसिद्ध तवांग मठ के लिए जाना जाता है। यह मठ 17वीं शताब्दी में स्थापित हुआ और भारत के महत्वपूर्ण बौद्ध केंद्रों में से एक है।"
},

"Arunachal Pradesh|places|Ziro Valley": {
    telugu: "జీరో లోయ అపటాని గిరిజన సమాజానికి ప్రసిద్ధి చెందిన పర్వత ప్రాంతం. వరి సాగు మరియు చేపల పెంపకాన్ని కలిపిన ప్రత్యేక వ్యవసాయ పద్ధతి ఇక్కడ కనిపిస్తుంది.",
    hindi: "जीरो घाटी अपातानी जनजाति के लिए प्रसिद्ध पहाड़ी क्षेत्र है। यहाँ धान की खेती और मछली पालन को मिलाकर की जाने वाली अनोखी कृषि पद्धति देखने को मिलती है।"
},


// ==================== ASSAM ====================

"Assam|places|Kaziranga National Park": {
    telugu: "కాజిరంగా జాతీయ ఉద్యానవనం ఒక కొమ్ము గల భారతీయ ఖడ్గమృగాల సంరక్షణకు ప్రపంచ ప్రసిద్ధి చెందింది. ఇది గడ్డి భూములు, చిత్తడి ప్రాంతాలు మరియు సమృద్ధమైన వన్యప్రాణులకు నిలయం.",
    hindi: "काजीरंगा राष्ट्रीय उद्यान एक सींग वाले भारतीय गैंडों के संरक्षण के लिए विश्व प्रसिद्ध है। यह घासभूमि, आर्द्रभूमि और समृद्ध वन्यजीवन का घर है।"
},

"Assam|places|Kamakhya Temple": {
    telugu: "కామాఖ్య దేవాలయం గువాహటిలోని నీలాచల్ కొండపై ఉన్న ప్రముఖ శక్తి పీఠం. ఇది శక్తి ఆరాధనకు ముఖ్యమైన ఆధ్యాత్మిక కేంద్రం.",
    hindi: "कामाख्या मंदिर गुवाहाटी की नीलाचल पहाड़ी पर स्थित प्रमुख शक्तिपीठ है। यह शक्ति उपासना का महत्वपूर्ण आध्यात्मिक केंद्र है।"
},


// ==================== BIHAR ====================

"Bihar|places|Mahabodhi Temple": {
    telugu: "బోధ్ గయలోని మహాబోధి దేవాలయం బుద్ధుడు జ్ఞానోదయం పొందిన ప్రదేశంగా ప్రసిద్ధి చెందింది. ఇది ప్రపంచంలోని ప్రముఖ బౌద్ధ పుణ్యక్షేత్రాలలో ఒకటి.",
    hindi: "बोधगया का महाबोधि मंदिर उस स्थान पर स्थित है जहाँ माना जाता है कि बुद्ध को ज्ञान प्राप्त हुआ था। यह दुनिया के प्रमुख बौद्ध तीर्थस्थलों में से एक है।"
},

"Bihar|places|Nalanda": {
    telugu: "నాలందా ప్రాచీన భారతదేశంలోని ప్రసిద్ధ విద్యా కేంద్రం. ఆసియాలోని అనేక ప్రాంతాల నుండి పండితులు ఇక్కడకు వచ్చి బౌద్ధ తత్వశాస్త్రం, తర్కం మరియు ఇతర విద్యలను అభ్యసించేవారు.",
    hindi: "नालंदा प्राचीन भारत का प्रसिद्ध शिक्षा केंद्र था। एशिया के अनेक क्षेत्रों से विद्वान यहाँ आकर बौद्ध दर्शन, तर्क और अन्य विषयों का अध्ययन करते थे।"
},


// ==================== CHHATTISGARH ====================

"Chhattisgarh|places|Chitrakote Falls": {
    telugu: "చిత్రకూట్ జలపాతం ఇంద్రావతి నదిపై ఏర్పడిన ప్రసిద్ధ జలపాతం. దీని విశాలమైన ప్రవాహం మరియు సహజ అందం కారణంగా దీనిని భారతదేశపు నయాగరా అని కూడా పిలుస్తారు.",
    hindi: "चित्रकोट जलप्रपात इंद्रावती नदी पर स्थित प्रसिद्ध जलप्रपात है। इसके विशाल प्रवाह और प्राकृतिक सुंदरता के कारण इसे भारत का नियाग्रा भी कहा जाता है।"
},

"Chhattisgarh|places|Bastar": {
    telugu: "బస్తర్ దట్టమైన అడవులు మరియు గొప్ప గిరిజన సంస్కృతికి ప్రసిద్ధి చెందిన ప్రాంతం. స్థానిక గిరిజన సమాజాలు తమ సంప్రదాయ కళలు, పండుగలు మరియు జీవన విధానాలను కొనసాగిస్తున్నాయి.",
    hindi: "बस्तर घने जंगलों और समृद्ध जनजातीय संस्कृति के लिए प्रसिद्ध क्षेत्र है। स्थानीय जनजातीय समुदाय आज भी अपनी पारंपरिक कला, त्योहार और जीवनशैली को बनाए हुए हैं।"
},


// ==================== GOA ====================

"Goa|places|Basilica of Bom Jesus": {
    telugu: "బసిలికా ఆఫ్ బామ్ జీసస్ ఓల్డ్ గోవాలోని ప్రసిద్ధ చారిత్రక చర్చి. ఇది 1605లో పూర్తయింది మరియు సెయింట్ ఫ్రాన్సిస్ జేవియర్ అవశేషాలను కలిగి ఉంది.",
    hindi: "बेसिलिका ऑफ बॉम जीसस ओल्ड गोवा का प्रसिद्ध ऐतिहासिक चर्च है। यह 1605 में पूरा हुआ और इसमें सेंट फ्रांसिस जेवियर के अवशेष हैं।"
},

"Goa|places|Fort Aguada": {
    telugu: "ఫోర్ట్ అగ్వాడాను పోర్చుగీసులు 1612లో నిర్మించారు. ఇది సముద్ర మార్గాల రక్షణకు మరియు మండోవి నది ప్రవేశాన్ని కాపాడటానికి ఉపయోగించబడింది.",
    hindi: "फोर्ट अगुआडा का निर्माण पुर्तगालियों ने 1612 में किया था। इसका उपयोग समुद्री मार्गों की रक्षा और मांडोवी नदी के प्रवेश की सुरक्षा के लिए किया जाता था।"
},


// ==================== GUJARAT ====================

"Gujarat|places|Statue of Unity": {
    telugu: "స్టాచ్యూ ఆఫ్ యూనిటీ సర్దార్ వల్లభభాయ్ పటేల్‌కు అంకితం చేయబడిన ప్రసిద్ధ స్మారక చిహ్నం. ఇది నర్మదా నది సమీపంలోని కేవడియాలో ఉంది మరియు భారతదేశ ఏకత్వానికి ప్రతీకగా నిలుస్తుంది.",
    hindi: "स्टैच्यू ऑफ यूनिटी सरदार वल्लभभाई पटेल को समर्पित प्रसिद्ध स्मारक है। यह नर्मदा नदी के पास केवड़िया में स्थित है और भारत की एकता का प्रतीक है।"
},

"Gujarat|places|Rann of Kutch": {
    telugu: "రన్ ఆఫ్ కచ్ గుజరాత్‌లోని విశాలమైన ఉప్పు ఎడారి ప్రాంతం. తెల్లటి ఉప్పు మైదానాలు, స్థానిక సంస్కృతి మరియు రణ్ ఉత్సవం దీనిని ప్రసిద్ధ పర్యాటక ప్రదేశంగా మార్చాయి.",
    hindi: "कच्छ का रण गुजरात का विशाल नमक का रेगिस्तानी क्षेत्र है। सफेद नमक के मैदान, स्थानीय संस्कृति और रण उत्सव इसे प्रसिद्ध पर्यटन स्थल बनाते हैं।"
},


// ==================== HARYANA ====================

"Haryana|places|Kurukshetra": {
    telugu: "కురుక్షేత్రం మహాభారత ఇతిహాసంతో అనుబంధం ఉన్న పవిత్ర ప్రదేశం. సంప్రదాయం ప్రకారం శ్రీకృష్ణుడు అర్జునుడికి భగవద్గీతను ఇక్కడే బోధించాడు.",
    hindi: "कुरुक्षेत्र महाभारत से जुड़ा पवित्र स्थान माना जाता है। परंपरा के अनुसार श्रीकृष्ण ने यहीं अर्जुन को भगवद्गीता का उपदेश दिया था।"
},

"Haryana|places|Sultanpur National Park": {
    telugu: "సుల్తాన్‌పూర్ జాతీయ ఉద్యానవనం ఢిల్లీ సమీపంలోని ప్రసిద్ధ పక్షుల అభయారణ్యం. అనేక వలస పక్షులు ముఖ్యంగా శీతాకాలంలో ఇక్కడికి వస్తాయి.",
    hindi: "सुल्तानपुर राष्ट्रीय उद्यान दिल्ली के पास स्थित प्रसिद्ध पक्षी अभयारण्य है। अनेक प्रवासी पक्षी विशेष रूप से सर्दियों में यहाँ आते हैं।"
},


// ==================== HIMACHAL PRADESH ====================

"Himachal Pradesh|places|Shimla": {
    telugu: "షిమ్లా బ్రిటిష్ పాలనలో ప్రముఖ పర్వత ప్రాంతంగా అభివృద్ధి చెందింది. ఇది బ్రిటిష్ భారతదేశానికి వేసవి రాజధానిగా పనిచేసింది. వలస పాలన కాలం నాటి భవనాలు ఇక్కడి చారిత్రక వారసత్వాన్ని ప్రతిబింబిస్తాయి.",
    hindi: "शिमला ब्रिटिश शासन के दौरान एक प्रमुख पहाड़ी क्षेत्र के रूप में विकसित हुआ। यह ब्रिटिश भारत की ग्रीष्मकालीन राजधानी था। औपनिवेशिक काल की इमारतें इसकी ऐतिहासिक विरासत को दर्शाती हैं।"
},

"Himachal Pradesh|places|Manali": {
    telugu: "మనాలి హిమాలయాల్లోని ప్రసిద్ధ పర్వత ప్రాంతం. పురాణ సంప్రదాయంలో దీనికి ఋషి మనువుతో సంబంధం ఉంది. ప్రకృతి అందాలు మరియు పర్వత సంస్కృతికి ఇది ప్రసిద్ధి చెందింది.",
    hindi: "मनाली हिमालय का प्रसिद्ध पहाड़ी क्षेत्र है। पौराणिक परंपरा में इसका संबंध ऋषि मनु से माना जाता है। यह प्राकृतिक सुंदरता और पहाड़ी संस्कृति के लिए प्रसिद्ध है."
},

"Himachal Pradesh|places|Spiti Valley": {
    telugu: "స్పితి లోయ హిమాలయాల్లోని ఎత్తైన చల్లని ఎడారి ప్రాంతం. పురాతన బౌద్ధ మఠాలు మరియు ప్రత్యేకమైన పర్వత దృశ్యాలు ఈ ప్రాంతానికి ప్రత్యేకతను ఇస్తాయి.",
    hindi: "स्पीति घाटी हिमालय का ऊँचा ठंडा रेगिस्तानी क्षेत्र है। प्राचीन बौद्ध मठ और अनोखे पहाड़ी दृश्य इस क्षेत्र की विशेष पहचान हैं।"
},


// ==================== JHARKHAND ====================

"Jharkhand|places|Hundru Falls": {
    telugu: "హుండ్రూ జలపాతం సువర్ణరేఖ నదిపై ఏర్పడిన ప్రసిద్ధ జలపాతం. దాని సహజ అందం మరియు ఎత్తైన జలప్రవాహం కారణంగా ఇది జార్ఖండ్‌లో ప్రముఖ పర్యాటక ప్రదేశం.",
    hindi: "हुंडरू जलप्रपात स्वर्णरेखा नदी पर स्थित प्रसिद्ध जलप्रपात है। इसकी प्राकृतिक सुंदरता और ऊँचा जलप्रवाह इसे झारखंड का प्रमुख पर्यटन स्थल बनाते हैं।"
},

"Jharkhand|places|Betla National Park": {
    telugu: "బెత్లా జాతీయ ఉద్యానవనం జార్ఖండ్‌లోని ముఖ్యమైన వన్యప్రాణి ప్రాంతం. అడవులు, జలపాతాలు మరియు వివిధ రకాల వన్యప్రాణులు ఈ ప్రాంతం ప్రత్యేకత.",
    hindi: "बेतला राष्ट्रीय उद्यान झारखंड का महत्वपूर्ण वन्यजीव क्षेत्र है। जंगल, जलप्रपात और विभिन्न प्रकार के वन्यजीव इसकी प्रमुख विशेषताएँ हैं।"
},


// ==================== KARNATAKA ====================

"Karnataka|places|Hampi": {
    telugu: "హంపి విజయనగర సామ్రాజ్యానికి రాజధానిగా ఉన్న చారిత్రక నగరం. దేవాలయాలు, రాజభవనాలు మరియు పురాతన నిర్మాణాల శిథిలాలు విజయనగర వైభవాన్ని చూపిస్తాయి.",
    hindi: "हम्पी विजयनगर साम्राज्य की ऐतिहासिक राजधानी थी। इसके मंदिर, राजकीय परिसर और प्राचीन संरचनाओं के खंडहर विजयनगर की समृद्धि को दर्शाते हैं।"
},

"Karnataka|places|Mysore Palace": {
    telugu: "మైసూరు ప్యాలెస్ వోడేయర్ రాజవంశానికి చెందిన ప్రసిద్ధ రాజభవనం. ప్రస్తుత భవనంలో హిందూ, ఇస్లామిక్, రాజ్‌పుత్ మరియు గోతిక్ వాస్తుశిల్ప శైలుల సమ్మేళనం కనిపిస్తుంది.",
    hindi: "मैसूर महल वोडेयार राजवंश का प्रसिद्ध राजमहल है। वर्तमान भवन में हिंदू, इस्लामी, राजपूत और गोथिक वास्तुकला का सुंदर मिश्रण दिखाई देता है।"
},

"Karnataka|places|Coorg": {
    telugu: "కూర్గ్ పశ్చిమ కనుమల్లోని అందమైన పర్వత ప్రాంతం. కాఫీ తోటలు, కొడవ సంస్కృతి మరియు సహజ ప్రకృతి దృశ్యాలకు ఇది ప్రసిద్ధి చెందింది.",
    hindi: "कूर्ग पश्चिमी घाटों में स्थित सुंदर पहाड़ी क्षेत्र है। यह कॉफी के बागानों, कोडवा संस्कृति और प्राकृतिक दृश्यों के लिए प्रसिद्ध है।"
},


// ==================== KERALA ====================

"Kerala|places|Alleppey": {
    telugu: "అలప్పుజ కేరళ బ్యాక్‌వాటర్స్‌కు ప్రసిద్ధి చెందింది. కాలువలు, సరస్సులు మరియు హౌస్‌బోట్లు ఈ ప్రాంతానికి ప్రత్యేక ఆకర్షణ. మసాలా మరియు నీటి మార్గాల వ్యాపారంలో కూడా ఈ ప్రాంతానికి చారిత్రక ప్రాధాన్యత ఉంది.",
    hindi: "अलप्पुझा केरल के बैकवाटर्स के लिए प्रसिद्ध है। नहरें, झीलें और हाउसबोट यहाँ के प्रमुख आकर्षण हैं। मसाला और जलमार्ग व्यापार में भी इस क्षेत्र का ऐतिहासिक महत्व रहा है।"
},

"Kerala|places|Munnar": {
    telugu: "మున్నార్ పశ్చిమ కనుమల్లోని ప్రసిద్ధ పర్వత ప్రాంతం. విస్తారమైన టీ తోటలు, చల్లని వాతావరణం మరియు ప్రకృతి దృశ్యాలు దీనిని ప్రత్యేకంగా నిలబెడతాయి.",
    hindi: "मुन्नार पश्चिमी घाटों का प्रसिद्ध पहाड़ी क्षेत्र है। विस्तृत चाय बागान, ठंडी जलवायु और प्राकृतिक दृश्य इसकी प्रमुख पहचान हैं।"
},

"Kerala|places|Padmanabhaswamy Temple": {
    telugu: "తిరువనంతపురంలోని పద్మనాభస్వామి దేవాలయం విష్ణువుకు అంకితం చేయబడింది. ద్రావిడ వాస్తుశిల్పం, చారిత్రక సంప్రదాయం మరియు ఆధ్యాత్మిక ప్రాధాన్యత దీనిని ప్రముఖ దేవాలయంగా మార్చాయి.",
    hindi: "तिरुवनंतपुरम का पद्मनाभस्वामी मंदिर भगवान विष्णु को समर्पित है। द्रविड़ वास्तुकला, ऐतिहासिक परंपरा और आध्यात्मिक महत्व इसे प्रमुख मंदिर बनाते हैं।"
},


// ==================== MADHYA PRADESH ====================

"Madhya Pradesh|places|Khajuraho": {
    telugu: "ఖజురాహో దేవాలయాలు చందేల రాజవంశం కాలంలో నిర్మించబడ్డాయి. దేవాలయాల గోడలపై ఉన్న శిల్పాలు భారతీయ కళ, మతం మరియు సామాజిక జీవితంలోని అనేక అంశాలను ప్రతిబింబిస్తాయి.",
    hindi: "खजुराहो के मंदिर चंदेल राजवंश के समय बनाए गए। मंदिरों की दीवारों पर बनी मूर्तियाँ भारतीय कला, धर्म और सामाजिक जीवन के अनेक पहलुओं को दर्शाती हैं।"
},

"Madhya Pradesh|places|Sanchi Stupa": {
    telugu: "సాంచి స్తూపం భారతదేశంలోని ప్రాచీన బౌద్ధ స్మారక చిహ్నాలలో ఒకటి. దీని మూల నిర్మాణం అశోక చక్రవర్తి కాలానికి చెందినదిగా భావిస్తారు.",
    hindi: "सांची स्तूप भारत के प्राचीन बौद्ध स्मारकों में से एक है। इसका मूल निर्माण सम्राट अशोक के समय से जुड़ा माना जाता है।"
},


// ==================== MAHARASHTRA ====================

"Maharashtra|places|Gateway of India": {
    telugu: "గేట్‌వే ఆఫ్ ఇండియా ముంబైలోని ప్రసిద్ధ చారిత్రక స్మారక చిహ్నం. బ్రిటిష్ కాలంలో నిర్మించబడిన ఈ నిర్మాణం నేడు ముంబై నగరానికి ముఖ్యమైన గుర్తింపుగా నిలిచింది.",
    hindi: "गेटवे ऑफ इंडिया मुंबई का प्रसिद्ध ऐतिहासिक स्मारक है। ब्रिटिश काल में निर्मित यह संरचना आज मुंबई शहर की प्रमुख पहचान है।"
},

"Maharashtra|places|Ajanta Caves": {
    telugu: "అజంతా గుహలు ప్రాచీన బౌద్ధ శిలా స్మారకాలు. గుహల్లోని చిత్రాలు మరియు శిల్పాలు బౌద్ధ కథలు, కళ మరియు ప్రాచీన భారతీయ జీవితాన్ని ప్రతిబింబిస్తాయి.",
    hindi: "अजंता की गुफाएँ प्राचीन बौद्ध शैल स्मारक हैं। गुफाओं के चित्र और मूर्तियाँ बौद्ध कथाओं, कला और प्राचीन भारतीय जीवन को दर्शाती हैं।"
},

"Maharashtra|places|Ellora Caves": {
    telugu: "ఎల్లోరా గుహలు బౌద్ధ, హిందూ మరియు జైన మతాలకు చెందిన శిలా స్మారకాల సముదాయం. కైలాస దేవాలయం ఒకే రాతి నుండి చెక్కబడిన అద్భుత నిర్మాణం.",
    hindi: "एलोरा की गुफाएँ बौद्ध, हिंदू और जैन धर्म से जुड़े शैल स्मारकों का समूह हैं। कैलाश मंदिर एक ही चट्टान से तराशा गया अद्भुत निर्माण है।"
},
// ============================================================
// PART 2 — PLACES: TELUGU + HINDI
// States 15–28
// ============================================================


// ==================== MANIPUR ====================

"Manipur|places|Loktak Lake": {
    telugu: "లోక్తక్ సరస్సు ఈశాన్య భారతదేశంలోని అతిపెద్ద మంచినీటి సరస్సు. నీటిపై తేలియాడే 'ఫుమ్దిస్' అనే వృక్ష సమూహాలు దీని ప్రత్యేకత. కీబుల్ లామ్‌జావో జాతీయ ఉద్యానవనం కూడా ఈ సరస్సు ప్రాంతంలో ఉంది.",
    hindi: "लोकटक झील पूर्वोत्तर भारत की सबसे बड़ी मीठे पानी की झील है। इसकी तैरती हुई वनस्पति संरचनाएँ 'फुमदी' कहलाती हैं। केइबुल लामजाओ राष्ट्रीय उद्यान भी इसी झील क्षेत्र में स्थित है।"
},


// ==================== MEGHALAYA ====================

"Meghalaya|places|Living Root Bridges": {
    telugu: "లివింగ్ రూట్ బ్రిడ్జ్‌లను ఖాసీ మరియు జైంతియా సమాజాలు చెట్ల వేర్లను నదులు మరియు ప్రవాహాలపైకి మళ్లించడం ద్వారా అనేక సంవత్సరాల పాటు అభివృద్ధి చేశారు. ఇవి ప్రకృతితో మనుషుల సృజనాత్మక అనుబంధానికి అద్భుతమైన ఉదాహరణలు.",
    hindi: "लिविंग रूट ब्रिज खासी और जयंतिया समुदायों ने पेड़ों की जड़ों को नदियों और जलधाराओं के ऊपर मार्गदर्शन देकर कई वर्षों में विकसित किए हैं। ये प्रकृति और मानव रचनात्मकता के अद्भुत संबंध का उदाहरण हैं।"
},

"Meghalaya|places|Cherrapunji": {
    telugu: "చెర్రాపుంజి ప్రపంచంలో అధిక వర్షపాతం నమోదయ్యే ప్రాంతాలలో ఒకటి. భారీ వర్షపాతం, జలపాతాలు, గుహలు మరియు ఖాసీ సంస్కృతి కారణంగా ఇది ప్రసిద్ధి చెందింది.",
    hindi: "चेरापूंजी दुनिया के अधिक वर्षा वाले क्षेत्रों में से एक है। भारी वर्षा, जलप्रपात, गुफाएँ और खासी संस्कृति इसे प्रसिद्ध बनाते हैं।"
},


// ==================== MIZORAM ====================

"Mizoram|places|Aizawl": {
    telugu: "ఐజ్వాల్ మిజోరాం రాష్ట్ర రాజధాని మరియు ప్రధాన సాంస్కృతిక కేంద్రం. కొండల మధ్య ఉన్న ఈ నగరం మిజో ప్రజల సంప్రదాయాలు, సంగీతం మరియు జీవన విధానానికి ముఖ్యమైన కేంద్రంగా ఉంది.",
    hindi: "आइजोल मिजोरम की राजधानी और प्रमुख सांस्कृतिक केंद्र है। पहाड़ियों के बीच स्थित यह शहर मिजो लोगों की परंपराओं, संगीत और जीवनशैली का महत्वपूर्ण केंद्र है।"
},

"Mizoram|places|Phawngpui": {
    telugu: "ఫావంగ్‌పుయిని బ్లూ మౌంటెన్ అని కూడా పిలుస్తారు. ఇది మిజోరాంలోని అత్యంత ఎత్తైన పర్వత శిఖరం. చుట్టూ ఉన్న అడవులు మరియు అరుదైన వృక్షజాలం ఈ ప్రాంతానికి ప్రత్యేకతను ఇస్తాయి.",
    hindi: "फावंगपुई को ब्लू माउंटेन भी कहा जाता है। यह मिजोरम की सबसे ऊँची पर्वत चोटी है। आसपास के जंगल और दुर्लभ वनस्पतियाँ इस क्षेत्र को विशेष बनाती हैं।"
},


// ==================== NAGALAND ====================

"Nagaland|places|Kohima": {
    telugu: "కోహిమా నాగాలాండ్ రాజధాని మరియు నాగా సంస్కృతికి ముఖ్యమైన కేంద్రం. రెండవ ప్రపంచ యుద్ధ సమయంలో జరిగిన కోహిమా యుద్ధం కారణంగా ఈ నగరానికి ప్రత్యేక చారిత్రక ప్రాధాన్యత ఉంది.",
    hindi: "कोहिमा नागालैंड की राजधानी और नगा संस्कृति का प्रमुख केंद्र है। द्वितीय विश्व युद्ध के दौरान हुए कोहिमा युद्ध के कारण इस शहर का विशेष ऐतिहासिक महत्व है।"
},

"Nagaland|places|Dzukou Valley": {
    telugu: "డ్జుకో లోయ నాగాలాండ్ మరియు మణిపూర్ సరిహద్దు ప్రాంతంలో ఉన్న అందమైన పర్వత లోయ. పచ్చని కొండలు, ప్రత్యేకమైన పుష్పాలు మరియు సహజ ప్రకృతి దృశ్యాలకు ఇది ప్రసిద్ధి చెందింది.",
    hindi: "दज़ुको घाटी नागालैंड और मणिपुर की सीमा के पास स्थित सुंदर पहाड़ी घाटी है। हरी-भरी पहाड़ियाँ, विशेष फूल और प्राकृतिक दृश्य इसे प्रसिद्ध बनाते हैं।"
},


// ==================== ODISHA ====================

"Odisha|places|Konark Sun Temple": {
    telugu: "కోణార్క్ సూర్య దేవాలయం 13వ శతాబ్దంలో నిర్మించబడిన అద్భుతమైన దేవాలయం. సూర్య దేవుని రథాన్ని పోలిన నిర్మాణం మరియు రాతి శిల్పాలు దీని ప్రధాన ప్రత్యేకతలు.",
    hindi: "कोणार्क सूर्य मंदिर 13वीं शताब्दी में बनाया गया अद्भुत मंदिर है। सूर्य देव के रथ के रूप में इसकी संरचना और पत्थर की नक्काशी इसकी प्रमुख विशेषताएँ हैं।"
},

"Odisha|places|Jagannath Temple": {
    telugu: "పురీ జగన్నాథ దేవాలయం ఒడిశాలోని ప్రముఖ పుణ్యక్షేత్రం. ఇది జగన్నాథుడు, బలభద్రుడు మరియు సుభద్రకు అంకితం చేయబడింది. వార్షిక రథయాత్ర ప్రపంచవ్యాప్తంగా ప్రసిద్ధి చెందింది.",
    hindi: "पुरी का जगन्नाथ मंदिर ओडिशा का प्रमुख तीर्थस्थल है। यह भगवान जगन्नाथ, बलभद्र और सुभद्रा को समर्पित है। इसकी वार्षिक रथयात्रा विश्व प्रसिद्ध है।"
},


// ==================== PUNJAB ====================

"Punjab|places|Golden Temple": {
    telugu: "అమృత్‌సర్‌లోని గోల్డెన్ టెంపుల్‌ను హర్మందిర్ సాహిబ్ అని కూడా పిలుస్తారు. ఇది సిక్కు మతంలోని అత్యంత పవిత్రమైన పుణ్యక్షేత్రాలలో ఒకటి. ఆలయం చుట్టూ ఉన్న అమృత్ సరోవర్ దీనికి ప్రత్యేక అందాన్ని ఇస్తుంది.",
    hindi: "अमृतसर के गोल्डन टेंपल को हरमंदिर साहिब भी कहा जाता है। यह सिख धर्म के सबसे पवित्र तीर्थस्थलों में से एक है। मंदिर के चारों ओर स्थित अमृत सरोवर इसकी सुंदरता को बढ़ाता है।"
},

"Punjab|places|Jallianwala Bagh": {
    telugu: "జలియన్‌వాలా బాగ్ అమృత్‌సర్‌లోని చారిత్రక ప్రదేశం. 1919లో ఇక్కడ శాంతియుతంగా సమావేశమైన ప్రజలపై బ్రిటిష్ సైనికులు కాల్పులు జరిపారు. ఈ సంఘటన భారత స్వాతంత్ర్య ఉద్యమంలో కీలక ఘట్టంగా నిలిచింది.",
    hindi: "जलियांवाला बाग अमृतसर का ऐतिहासिक स्थल है। 1919 में यहाँ शांतिपूर्ण सभा कर रहे लोगों पर ब्रिटिश सैनिकों ने गोलीबारी की। यह घटना भारतीय स्वतंत्रता आंदोलन की महत्वपूर्ण घटना बनी।"
},


// ==================== RAJASTHAN ====================

"Rajasthan|places|Hawa Mahal": {
    telugu: "హవా మహల్ జైపూర్‌లోని ప్రసిద్ధ చారిత్రక భవనం. దీనిని 1799లో మహారాజా సవాయి ప్రతాప్ సింగ్ నిర్మించారు. అనేక చిన్న కిటికీలు ఉండటం దీని ప్రత్యేకత.",
    hindi: "हवा महल जयपुर की प्रसिद्ध ऐतिहासिक इमारत है। इसे 1799 में महाराजा सवाई प्रताप सिंह ने बनवाया था। इसकी अनेक छोटी खिड़कियाँ इसकी प्रमुख विशेषता हैं।"
},

"Rajasthan|places|Amber Fort": {
    telugu: "ఆమెర్ కోట జైపూర్ సమీపంలోని కొండపై ఉన్న ప్రసిద్ధ కోట. రాజ్‌పుత్ పాలకులు దీనిని అభివృద్ధి చేశారు. రాజస్థానీ మరియు మొఘల్ వాస్తుశిల్ప శైలుల అందమైన సమ్మేళనం ఇందులో కనిపిస్తుంది.",
    hindi: "आमेर किला जयपुर के पास पहाड़ी पर स्थित प्रसिद्ध किला है। इसे राजपूत शासकों ने विकसित किया। इसमें राजस्थानी और मुगल वास्तुकला का सुंदर मिश्रण दिखाई देता है।"
},

"Rajasthan|places|Jaisalmer Fort": {
    telugu: "జైసల్మేర్ కోట థార్ ఎడారిలో ఉన్న ప్రసిద్ధ పసుపు రాతి కోట. దీనిని 12వ శతాబ్దంలో రావల్ జైసల్ నిర్మించారు. కోటలో నేటికీ ప్రజలు నివసించడం దీని ప్రత్యేకత.",
    hindi: "जैसलमेर किला थार रेगिस्तान में स्थित प्रसिद्ध पीले पत्थर का किला है। इसका निर्माण 12वीं शताब्दी में रावल जैसल ने कराया था। आज भी किले के अंदर लोग रहते हैं।"
},


// ==================== SIKKIM ====================

"Sikkim|places|Tsomgo Lake": {
    telugu: "త్సోమ్గో సరస్సు సిక్కింలోని ఎత్తైన పర్వత సరస్సు. మంచుతో కప్పబడిన పర్వతాల మధ్య ఉన్న ఈ సరస్సు ప్రకృతి అందాలకు మరియు స్థానిక ఆధ్యాత్మిక సంప్రదాయాలకు ప్రసిద్ధి చెందింది.",
    hindi: "त्सोमगो झील सिक्किम की ऊँचाई पर स्थित पर्वतीय झील है। बर्फ से ढके पहाड़ों के बीच स्थित यह झील प्राकृतिक सुंदरता और स्थानीय आध्यात्मिक परंपराओं के लिए प्रसिद्ध है।"
},

"Sikkim|places|Rumtek Monastery": {
    telugu: "రుమ్టెక్ మఠం సిక్కింలోని ప్రముఖ బౌద్ధ మఠం. ఇది టిబెటన్ బౌద్ధ సంప్రదాయానికి ముఖ్యమైన కేంద్రంగా ఉంది మరియు అందమైన పర్వత ప్రాంతంలో ఉంది.",
    hindi: "रुमटेक मठ सिक्किम का प्रमुख बौद्ध मठ है। यह तिब्बती बौद्ध परंपरा का महत्वपूर्ण केंद्र है और सुंदर पहाड़ी क्षेत्र में स्थित है।"
},


// ==================== TAMIL NADU ====================

"Tamil Nadu|places|Meenakshi Temple": {
    telugu: "మదురైలోని మీనాక్షి అమ్మన్ దేవాలయం తమిళనాడులోని ప్రముఖ దేవాలయాలలో ఒకటి. ఎత్తైన గోపురాలు, అనేక శిల్పాలు మరియు విశాలమైన ఆలయ సముదాయం దీని ప్రత్యేకతలు.",
    hindi: "मदुरै का मीनाक्षी अम्मन मंदिर तमिलनाडु के प्रमुख मंदिरों में से एक है। ऊँचे गोपुरम, अनेक मूर्तियाँ और विशाल मंदिर परिसर इसकी प्रमुख विशेषताएँ हैं।"
},

"Tamil Nadu|places|Mahabalipuram": {
    telugu: "మహాబలిపురం పల్లవుల కాలానికి చెందిన శిలా దేవాలయాలు మరియు స్మారక చిహ్నాలకు ప్రసిద్ధి చెందింది. ఇక్కడి రాతి శిల్పాలు దక్షిణ భారతీయ శిల్పకళా సంప్రదాయాన్ని ప్రతిబింబిస్తాయి.",
    hindi: "महाबलीपुरम पल्लव काल के शैल मंदिरों और स्मारकों के लिए प्रसिद्ध है। यहाँ की पत्थर की नक्काशी दक्षिण भारतीय मूर्तिकला परंपरा को दर्शाती है।"
},


// ==================== TELANGANA ====================

"Telangana|places|Charminar": {
    telugu: "చార్మినార్ హైదరాబాద్‌లోని ప్రసిద్ధ చారిత్రక స్మారక చిహ్నం. దీనిని 1591లో మహమ్మద్ కులీ కుతుబ్ షా నిర్మించాడు. నాలుగు మినార్లతో కూడిన ఈ నిర్మాణం హైదరాబాద్ నగరానికి ముఖ్యమైన గుర్తింపు.",
    hindi: "चारमीनार हैदराबाद का प्रसिद्ध ऐतिहासिक स्मारक है। इसका निर्माण 1591 में मुहम्मद कुली कुतुब शाह ने कराया था। चार मीनारों वाली यह इमारत हैदराबाद की प्रमुख पहचान है।"
},

"Telangana|places|Golconda Fort": {
    telugu: "గోల్కొండ కోట హైదరాబాద్ సమీపంలోని చారిత్రక కోట. ఇది కుతుబ్ షాహీ పాలకుల ముఖ్యమైన కోట మరియు రాజధానిగా అభివృద్ధి చెందింది. కోట నిర్మాణం మరియు ప్రత్యేక శబ్ద ప్రసరణ వ్యవస్థ ప్రసిద్ధి చెందాయి.",
    hindi: "गोलकोंडा किला हैदराबाद के पास स्थित ऐतिहासिक किला है। यह कुतुब शाही शासकों का महत्वपूर्ण किला और राजधानी रहा। इसकी संरचना और विशेष ध्वनि-प्रसारण व्यवस्था प्रसिद्ध हैं।"
},


// ==================== TRIPURA ====================

"Tripura|places|Ujjayanta Palace": {
    telugu: "ఉజ్జయంత ప్యాలెస్ అగర్తలాలోని చారిత్రక రాజభవనం. ఇది మాణిక్య రాజవంశానికి చెందిన రాజ నివాసంగా ఉపయోగించబడింది. నేడు ఇది త్రిపుర చరిత్ర మరియు సంస్కృతిని పరిచయం చేసే ముఖ్యమైన ప్రదేశం.",
    hindi: "उज्जयंत महल अगरतला का ऐतिहासिक राजमहल है। इसका उपयोग माणिक्य राजवंश के शाही निवास के रूप में किया जाता था। आज यह त्रिपुरा के इतिहास और संस्कृति से जुड़ा महत्वपूर्ण स्थल है।"
},

"Tripura|places|Neermahal": {
    telugu: "నీర్మహల్ రుద్రసాగర్ సరస్సు మధ్యలో ఉన్న అందమైన రాజభవనం. దీనిని త్రిపుర రాజకుటుంబం వేసవి నివాసంగా ఉపయోగించేది. నీటిలో ప్రతిబింబించే రాజభవనం ప్రత్యేకమైన దృశ్యాన్ని అందిస్తుంది.",
    hindi: "नीरमहल रुद्रसागर झील के बीच स्थित सुंदर राजमहल है। इसका उपयोग त्रिपुरा के राजपरिवार के ग्रीष्मकालीन निवास के रूप में किया जाता था। झील में इसका प्रतिबिंब इसे विशेष बनाता है।"
},


// ==================== UTTAR PRADESH ====================

"Uttar Pradesh|places|Taj Mahal": {
    telugu: "ఆగ్రాలోని తాజ్ మహల్ మొఘల్ చక్రవర్తి షాజహాన్ తన భార్య ముంతాజ్ మహల్ జ్ఞాపకార్థం నిర్మించాడు. తెల్లటి పాలరాతితో నిర్మించిన ఈ స్మారక చిహ్నం మొఘల్ వాస్తుశిల్పానికి ప్రసిద్ధ ఉదాహరణ.",
    hindi: "आगरा का ताजमहल मुगल सम्राट शाहजहाँ ने अपनी पत्नी मुमताज महल की स्मृति में बनवाया था। सफेद संगमरमर से बना यह स्मारक मुगल वास्तुकला का प्रसिद्ध उदाहरण है।"
},

"Uttar Pradesh|places|Varanasi": {
    telugu: "వారణాసి గంగా నది తీరంలో ఉన్న భారతదేశంలోని ప్రాచీన నగరాలలో ఒకటి. ఇది ఆధ్యాత్మిక సంప్రదాయాలు, ఘాట్లు, దేవాలయాలు మరియు గంగా ఆరతికి ప్రసిద్ధి చెందింది.",
    hindi: "वाराणसी गंगा नदी के किनारे स्थित भारत के प्राचीन शहरों में से एक है। यह आध्यात्मिक परंपराओं, घाटों, मंदिरों और गंगा आरती के लिए प्रसिद्ध है।"
},

"Uttar Pradesh|places|Fatehpur Sikri": {
    telugu: "ఫతేపూర్ సిక్రీని మొఘల్ చక్రవర్తి అక్బర్ 16వ శతాబ్దంలో నిర్మించాడు. కొంతకాలం ఇది మొఘల్ సామ్రాజ్య రాజధానిగా పనిచేసింది. బులంద్ దర్వాజా మరియు పంచ్ మహల్ ప్రసిద్ధ నిర్మాణాలు.",
    hindi: "फतेहपुर सीकरी का निर्माण मुगल सम्राट अकबर ने 16वीं शताब्दी में कराया था। कुछ समय तक यह मुगल साम्राज्य की राजधानी रहा। बुलंद दरवाजा और पंच महल इसकी प्रसिद्ध संरचनाएँ हैं।"
},


// ==================== UTTARAKHAND ====================

"Uttarakhand|places|Kedarnath": {
    telugu: "కేదార్‌నాథ్ హిమాలయాలలోని ప్రసిద్ధ శివాలయం మరియు ముఖ్యమైన పుణ్యక్షేత్రం. ఎత్తైన పర్వతాల మధ్య ఉన్న ఈ ఆలయం శతాబ్దాలుగా యాత్రికులను ఆకర్షిస్తోంది.",
    hindi: "केदारनाथ हिमालय में स्थित भगवान शिव का प्रसिद्ध मंदिर और महत्वपूर्ण तीर्थस्थल है। ऊँचे पहाड़ों के बीच स्थित यह मंदिर सदियों से तीर्थयात्रियों को आकर्षित करता रहा है।"
},

"Uttarakhand|places|Badrinath": {
    telugu: "బద్రీనాథ్ ఉత్తరాఖండ్‌లోని ప్రముఖ వైష్ణవ పుణ్యక్షేత్రం. ఇది విష్ణువుకు అంకితం చేయబడింది మరియు చార్ ధామ్ యాత్రలో ముఖ్యమైన ప్రదేశం.",
    hindi: "बद्रीनाथ उत्तराखंड का प्रमुख वैष्णव तीर्थस्थल है। यह भगवान विष्णु को समर्पित है और चार धाम यात्रा का महत्वपूर्ण स्थान है।"
},

"Uttarakhand|places|Rishikesh": {
    telugu: "ఋషికేశ్ గంగా నది తీరంలో ఉన్న ప్రసిద్ధ ఆధ్యాత్మిక కేంద్రం. యోగా, ధ్యానం మరియు ఆశ్రమాలకు ఇది ప్రసిద్ధి చెందింది. హిమాలయ ప్రాంతాలకు ప్రవేశ ద్వారంగా కూడా దీనికి ప్రాధాన్యత ఉంది.",
    hindi: "ऋषिकेश गंगा नदी के किनारे स्थित प्रसिद्ध आध्यात्मिक केंद्र है। यह योग, ध्यान और आश्रमों के लिए प्रसिद्ध है। इसे हिमालयी क्षेत्रों का प्रवेश द्वार भी माना जाता है।"
},


// ==================== WEST BENGAL ====================

"West Bengal|places|Victoria Memorial": {
    telugu: "విక్టోరియా మెమోరియల్ కోల్‌కతాలోని ప్రసిద్ధ చారిత్రక స్మారక చిహ్నం. బ్రిటిష్ పాలన కాలంలో రాణి విక్టోరియా జ్ఞాపకార్థం దీనిని నిర్మించారు. ప్రస్తుతం ఇది మ్యూజియంగా పనిచేస్తోంది.",
    hindi: "विक्टोरिया मेमोरियल कोलकाता का प्रसिद्ध ऐतिहासिक स्मारक है। इसे ब्रिटिश शासन के दौरान महारानी विक्टोरिया की स्मृति में बनाया गया था। वर्तमान में यह एक संग्रहालय है।"
},

"West Bengal|places|Sundarbans": {
    telugu: "సుందర్‌బన్స్ ప్రపంచంలోని అతిపెద్ద మడ అడవుల ప్రాంతాలలో ఒకటి. గంగా–బ్రహ్మపుత్ర డెల్టాలో విస్తరించిన ఈ ప్రాంతం రాయల్ బెంగాల్ టైగర్ మరియు సమృద్ధమైన జీవ వైవిధ్యానికి ప్రసిద్ధి చెందింది.",
    hindi: "सुंदरबन दुनिया के सबसे बड़े मैंग्रोव वन क्षेत्रों में से एक है। गंगा-ब्रह्मपुत्र डेल्टा में फैला यह क्षेत्र रॉयल बंगाल टाइगर और समृद्ध जैव विविधता के लिए प्रसिद्ध है।"
},
// ============================================================
// MISSING TRANSLATIONS — TELUGU + HINDI
// ============================================================


// ==================== CHHATTISGARH ====================

// Dress — Kosa Silk
"Chhattisgarh|dress|Kosa Silk": {
    telugu: "కోసా సిల్క్ ఛత్తీస్‌గఢ్‌లో ప్రసిద్ధి చెందిన సాంప్రదాయ పట్టు వస్త్రం. ఇది తసర్ పట్టు నుంచి తయారు చేయబడుతుంది. సహజమైన బంగారు మెరుపు మరియు ప్రత్యేకమైన నేయకళ దీనికి ప్రత్యేక గుర్తింపును ఇస్తాయి.",
    hindi: "कोसा सिल्क छत्तीसगढ़ का प्रसिद्ध पारंपरिक रेशमी वस्त्र है। इसे तसर रेशम से बनाया जाता है। इसकी प्राकृतिक सुनहरी चमक और विशेष बुनाई इसे विशिष्ट पहचान देती है।"
},

// Arts — Dhokra Art
"Chhattisgarh|arts|Dhokra Art": {
    telugu: "డోక్రా కళ అనేది పురాతన లోహ శిల్పకళా సంప్రదాయం. ఛత్తీస్‌గఢ్‌లోని గిరిజన కళాకారులు సంప్రదాయ పద్ధతుల్లో మైనపు నమూనాలు మరియు లోహాన్ని ఉపయోగించి అందమైన విగ్రహాలు, అలంకరణ వస్తువులను తయారు చేస్తారు.",
    hindi: "ढोकरा कला एक प्राचीन धातु शिल्प परंपरा है। छत्तीसगढ़ के जनजातीय कलाकार पारंपरिक तकनीकों से मोम के नमूने और धातु का उपयोग करके सुंदर मूर्तियाँ और सजावटी वस्तुएँ बनाते हैं।"
},

// Places — Bastar
"Chhattisgarh|places|Bastar": {
    telugu: "బస్తర్ ఛత్తీస్‌గఢ్‌లోని దట్టమైన అడవులు మరియు గొప్ప గిరిజన సంస్కృతికి ప్రసిద్ధి చెందిన ప్రాంతం. ఇక్కడి గిరిజన సమాజాలు తమ సంప్రదాయ కళలు, పండుగలు, సంగీతం మరియు జీవన విధానాన్ని కొనసాగిస్తున్నాయి.",
    hindi: "बस्तर छत्तीसगढ़ का घने जंगलों और समृद्ध जनजातीय संस्कृति के लिए प्रसिद्ध क्षेत्र है। यहाँ के जनजातीय समुदाय अपनी पारंपरिक कला, त्योहार, संगीत और जीवनशैली को आज भी बनाए हुए हैं।"
},


// ==================== GOA ====================

// Arts — Azulejo Art
"Goa|arts|Azulejo Art": {
    telugu: "అజులేజో కళ గోవాలో కనిపించే అలంకార టైల్స్ కళా సంప్రదాయం. రంగురంగుల టైల్స్‌పై చిత్రాలు మరియు అలంకార నమూనాలను రూపొందించడం దీని ప్రత్యేకత. గోవా యొక్క పోర్చుగీస్ సాంస్కృతిక ప్రభావాన్ని ఈ కళ ప్రతిబింబిస్తుంది.",
    hindi: "अज़ुलेजो कला गोवा में दिखाई देने वाली सजावटी टाइल कला की परंपरा है। रंगीन टाइलों पर चित्र और सजावटी डिज़ाइन बनाए जाते हैं। यह कला गोवा पर पुर्तगाली सांस्कृतिक प्रभाव को दर्शाती है।"
},

// Festival — Goa Carnival
"Goa|festival|Goa Carnival": {
    telugu: "గోవా కార్నివల్ గోవాలో ప్రసిద్ధి చెందిన రంగురంగుల ఉత్సవం. సంగీతం, నృత్యం, అలంకరించిన ఊరేగింపులు మరియు సాంస్కృతిక కార్యక్రమాలతో ఈ వేడుకను జరుపుకుంటారు.",
    hindi: "गोवा कार्निवल गोवा का प्रसिद्ध रंगीन उत्सव है। इसमें संगीत, नृत्य, सजाई गई झाँकियाँ और विभिन्न सांस्कृतिक कार्यक्रम आयोजित किए जाते हैं।"
},


// ==================== GUJARAT ====================

// Food — Thepla
"Gujarat|food|Thepla": {
    telugu: "థేప్లా గుజరాత్‌లో ప్రసిద్ధి చెందిన సాంప్రదాయ రొట్టె. సాధారణంగా గోధుమ పిండి, మెంతి ఆకులు మరియు సుగంధ ద్రవ్యాలతో దీనిని తయారు చేస్తారు. ఇది ప్రయాణాల్లో కూడా సులభంగా తీసుకెళ్లగల ప్రసిద్ధ ఆహారం.",
    hindi: "थेपला गुजरात की प्रसिद्ध पारंपरिक रोटी है। इसे आमतौर पर गेहूँ के आटे, मेथी के पत्तों और मसालों से बनाया जाता है। यह यात्रा के लिए भी आसानी से ले जाया जाने वाला लोकप्रिय भोजन है।"
},

// Places — Rann of Kutch
"Gujarat|places|Rann of Kutch": {
    telugu: "రన్ ఆఫ్ కచ్ గుజరాత్‌లోని విశాలమైన ఉప్పు ఎడారి ప్రాంతం. తెల్లటి ఉప్పు మైదానాలు, స్థానిక కళలు, సంగీతం మరియు సంస్కృతి దీనిని ప్రసిద్ధ పర్యాటక ప్రదేశంగా మార్చాయి.",
    hindi: "कच्छ का रण गुजरात का विशाल नमक का रेगिस्तानी क्षेत्र है। सफेद नमक के मैदान, स्थानीय कला, संगीत और संस्कृति इसे प्रसिद्ध पर्यटन स्थल बनाते हैं।"
},


// ==================== HARYANA ====================

// Dress — Ghagra Choli
"Haryana|dress|Ghagra Choli": {
    telugu: "ఘాగ్రా చోళీ హర్యానాలో మహిళలు ధరించే సాంప్రదాయ దుస్తులలో ఒకటి. ఇది పొడవైన ఘాగ్రా, చోళీ మరియు దుపట్టాతో కూడి ఉంటుంది. రంగురంగుల వస్త్రాలు మరియు సంప్రదాయ అలంకరణలు దీనికి ప్రత్యేకతను ఇస్తాయి.",
    hindi: "घाघरा चोली हरियाणा में महिलाओं द्वारा पहने जाने वाले पारंपरिक परिधानों में से एक है। इसमें लंबा घाघरा, चोली और दुपट्टा शामिल होते हैं। रंगीन कपड़े और पारंपरिक सजावट इसकी विशेषता हैं।"
},


// ==================== HIMACHAL PRADESH ====================

// Dress — Himachali Traditional Dress
"Himachal Pradesh|dress|Himachali Traditional Dress": {
    telugu: "హిమాచలి సాంప్రదాయ దుస్తులు హిమాచల్ ప్రదేశ్ పర్వత ప్రాంతాల సంస్కృతిని ప్రతిబింబిస్తాయి. పురుషులు సాధారణంగా చోలా, సుతాన్ మరియు ప్రత్యేకమైన హిమాచలి టోపీ ధరిస్తారు. మహిళలు సంప్రదాయ వస్త్రాలు, శాలువాలు మరియు అలంకరణలను ఉపయోగిస్తారు.",
    hindi: "हिमाचली पारंपरिक पोशाक हिमाचल प्रदेश के पहाड़ी क्षेत्रों की संस्कृति को दर्शाती है। पुरुष आमतौर पर चोला, सुथान और विशेष हिमाचली टोपी पहनते हैं। महिलाएँ पारंपरिक वस्त्र, शॉल और आभूषण पहनती हैं।"
},

// Places — Manali
"Himachal Pradesh|places|Manali": {
    telugu: "మనాలి హిమాచల్ ప్రదేశ్‌లోని ప్రసిద్ధ పర్వత ప్రాంతం. హిమాలయాల మధ్య ఉన్న ఈ ప్రాంతం ప్రకృతి అందాలు, పర్వత సంస్కృతి మరియు చారిత్రక సంప్రదాయాలకు ప్రసిద్ధి చెందింది.",
    hindi: "मनाली हिमाचल प्रदेश का प्रसिद्ध पहाड़ी क्षेत्र है। हिमालय के बीच स्थित यह स्थान प्राकृतिक सुंदरता, पहाड़ी संस्कृति और ऐतिहासिक परंपराओं के लिए प्रसिद्ध है।"
},

// Places — Spiti Valley
"Himachal Pradesh|places|Spiti Valley": {
    telugu: "స్పితి లోయ హిమాచల్ ప్రదేశ్‌లోని ఎత్తైన చల్లని ఎడారి ప్రాంతం. పురాతన బౌద్ధ మఠాలు, పర్వత గ్రామాలు మరియు ప్రత్యేకమైన ప్రకృతి దృశ్యాలు ఈ ప్రాంతానికి ప్రత్యేక గుర్తింపును ఇస్తాయి.",
    hindi: "स्पीति घाटी हिमाचल प्रदेश का ऊँचा ठंडा रेगिस्तानी क्षेत्र है। प्राचीन बौद्ध मठ, पहाड़ी गाँव और अनोखे प्राकृतिक दृश्य इस क्षेत्र की विशेष पहचान हैं।"
}

};


/* =========================================================
   ITEM-LEVEL AI NARRATOR + LANGUAGE BOX

   Every item card's history/craft/recipe block gets its own
   compact language switcher (English / Telugu / Hindi) and
   its own Listen/Pause/Resume/Stop narrator, independent of
   the whole-state and whole-theme narrators above. Only one
   item narrates at a time; starting an item narration stops
   every other narrator (monument, state, theme, or another
   item) first so voices never overlap.
========================================================= */

// uid -> { state, category, item }, filled in as cards render
const itemNarrationRegistry = {};

// uid -> "english" | "telugu" | "hindi" (defaults to english)
const itemLanguageState = {};

let activeItemUtterance = null;
let itemNarrationActive = false;
let itemNarrationPlayer = null;
let itemNarrationQueue = [];
let itemNarrationIndex = 0;
let itemNarrationLangCode = "en";
let currentItemNarrationUid = null;


function makeItemUid(state, category, item) {

    return (state + "-" + category + "-" + item)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-");
}


function langCodeForLang(lang) {

    if (lang === "telugu") {
        return "te-IN";
    }

    if (lang === "hindi") {
        return "hi-IN";
    }

    return "en-IN";
}


function pendingTranslationNote(lang) {

    const message =
        lang === "telugu" ?
            "🌐 తెలుగు అనువాదం త్వరలో అందుబాటులోకి వస్తుంది — ప్రస్తుతానికి ఆంగ్లంలో చూపిస్తోంది." :
            "🌐 हिंदी अनुवाद जल्द जोड़ा जाएगा — फ़िलहाल अंग्रेज़ी में दिखाया जा रहा है.";

    return `<p class="item-translation-pending"><em>${message}</em></p>`;
}


/*
   Looks up the localized version of one item's detail entry.
   Returns null when there's no base English entry at all
   (nothing to show or narrate yet). Otherwise returns the
   data (a string for most categories, {recipe, nutrients}
   for food) plus whether it's a real translation or an
   English fallback, so the caller can show a small
   "translation coming soon" note.
*/
function getLocalizedItemDetail(state, category, item, lang) {

    const key = `${state}|${category}|${item}`;
    const base = itemDetails[key];

    if (!base) {
        return null;
    }

    if (lang === "english") {
        return { data: base, isTranslated: true };
    }

    const translated =
        itemDetailTranslations[key] &&
        itemDetailTranslations[key][lang];

    if (translated) {
        return { data: translated, isTranslated: true };
    }

    return { data: base, isTranslated: false };
}


/*
   Rebuilds just one item's extra-detail block (language
   buttons + narrator + text) in place, without re-rendering
   the whole card grid.
*/
function changeItemLanguage(uid, lang) {

    itemLanguageState[uid] = lang;

    if (currentItemNarrationUid === uid) {
        stopItemNarration();
    }

    const entry = itemNarrationRegistry[uid];

    if (!entry) {
        return;
    }

    const container =
        document.getElementById("itemExtra-" + uid);

    if (container) {
        container.outerHTML =
            getItemDetailHTML(entry.state, entry.category, entry.item);
    }
}


function getItemNarrationText(uid) {

    const entry = itemNarrationRegistry[uid];

    if (!entry) {
        return null;
    }

    const lang = itemLanguageState[uid] || "english";

    const localized =
        getLocalizedItemDetail(entry.state, entry.category, entry.item, lang);

    if (!localized) {
        return null;
    }

    if (entry.category === "food") {
        return `${localized.data.recipe} ${localized.data.nutrients}`;
    }

    return localized.data;
}


function playOnlineItemNarrationQueue() {

    const status =
        document.getElementById(
            "itemNarrationStatus-" + currentItemNarrationUid
        );

    if (itemNarrationIndex >= itemNarrationQueue.length) {

        if (status) {
            status.innerText = "✅ Narration completed.";
        }

        itemNarrationActive = false;
        itemNarrationPlayer = null;
        return;
    }

    const chunkText =
        itemNarrationQueue[itemNarrationIndex];

    const url =
        buildOnlineTTSUrl(chunkText, itemNarrationLangCode);

    const player = new Audio(url);
    itemNarrationPlayer = player;

    player.onended = function () {
        itemNarrationIndex++;
        playOnlineItemNarrationQueue();
    };

    player.onerror = function (event) {

        console.error(
            "Item online narration chunk failed:",
            event
        );

        if (status) {
            status.innerText =
                "❌ Online narration is unavailable right now " +
                "(the free voice service may be busy). Please try " +
                "again shortly, or read the text above.";
        }

        itemNarrationActive = false;
        itemNarrationPlayer = null;
    };

    player.play().catch(function (error) {

        console.error(
            "Item online narration playback error:",
            error
        );

        if (status) {
            status.innerText = "❌ Unable to play narration.";
        }

        itemNarrationActive = false;
        itemNarrationPlayer = null;
    });
}


function startOnlineItemNarration(text, langCode) {

    const status =
        document.getElementById(
            "itemNarrationStatus-" + currentItemNarrationUid
        );

    itemNarrationActive = true;
    itemNarrationLangCode = langCode;
    itemNarrationQueue = splitTextForOnlineTTS(text);
    itemNarrationIndex = 0;

    if (status) {
        status.innerText = "🔊 Narrating (online voice)...";
    }

    playOnlineItemNarrationQueue();
}


function startItemNarration(uid) {

    // Stop every other narrator first (monument, state,
    // theme, or a different item) so only one voice plays.
    window.speechSynthesis.cancel();
    activeItemUtterance = null;
    activeThemeUtterance = null;
    activeStateUtterance = null;

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }

    if (themeNarrationPlayer) {
        themeNarrationPlayer.pause();
    }
    themeNarrationActive = false;
    themeNarrationPlayer = null;

    if (onlineNarrationPlayer) {
        onlineNarrationPlayer.pause();
    }
    onlineNarrationActive = false;
    onlineNarrationPlayer = null;

    if (itemNarrationPlayer) {
        itemNarrationPlayer.pause();
    }
    itemNarrationActive = false;
    itemNarrationPlayer = null;

    currentItemNarrationUid = uid;

    const text = getItemNarrationText(uid);

    if (!text) {
        alert("Nothing to narrate for this item yet.");
        return;
    }

    const status =
        document.getElementById("itemNarrationStatus-" + uid);

    if (status) {
        status.innerText = "⏳ Loading voice...";
    }

    const lang = itemLanguageState[uid] || "english";
    const langCode = langCodeForLang(lang);

    loadSpeechVoices().then(function () {

        const voice = findVoiceForLangCode(langCode);
        const isIndianLanguage =
            lang === "telugu" || lang === "hindi";

        if (isIndianLanguage && !voice) {

            console.warn(
                "No local voice found for", langCode,
                "- falling back to online narration for item. " +
                "Installed voices:", cachedVoiceList
            );

            startOnlineItemNarration(text, langCode);
            return;
        }

        const speech =
            new SpeechSynthesisUtterance(text);

        speech.lang = langCode;

        if (voice) {
            speech.voice = voice;
        }

        speech.rate = 0.9;
        speech.pitch = 1;
        speech.volume = 1;

        activeItemUtterance = speech;

        speech.onerror = function (event) {

            console.error(
                "Item speech error:",
                event
            );

            if (status) {
                status.innerText =
                    "❌ Voice generation failed on this device.";
            }
        };

        speech.onend = function () {

            if (status) {
                status.innerText =
                    "✅ Narration completed.";
            }

            activeItemUtterance = null;
        };

        if (status) {
            status.innerText = "🔊 Narrating...";
        }

        window.speechSynthesis.speak(speech);

    });

}


function pauseItemNarration(uid) {

    const status =
        document.getElementById("itemNarrationStatus-" + uid);

    if (itemNarrationActive && itemNarrationPlayer) {

        itemNarrationPlayer.pause();

        if (status) {
            status.innerText = "⏸️ Narration paused.";
        }

        return;
    }

    window.speechSynthesis.pause();

    if (status) {
        status.innerText = "⏸️ Narration paused.";
    }
}


function resumeItemNarration(uid) {

    const status =
        document.getElementById("itemNarrationStatus-" + uid);

    if (itemNarrationActive && itemNarrationPlayer) {

        itemNarrationPlayer.play();

        if (status) {
            status.innerText = "▶️ Narration resumed.";
        }

        return;
    }

    window.speechSynthesis.resume();

    if (status) {
        status.innerText = "▶️ Narration resumed.";
    }
}


function stopItemNarration() {

    window.speechSynthesis.cancel();
    activeItemUtterance = null;

    if (itemNarrationPlayer) {
        itemNarrationPlayer.pause();
        itemNarrationPlayer.currentTime = 0;
    }

    itemNarrationActive = false;
    itemNarrationPlayer = null;
    itemNarrationQueue = [];
    itemNarrationIndex = 0;

    const status =
        currentItemNarrationUid &&
        document.getElementById(
            "itemNarrationStatus-" + currentItemNarrationUid
        );

    if (status) {
        status.innerText = "⏹️ Narration stopped.";
    }

    currentItemNarrationUid = null;
}


/*
   Returns the extra HTML block for a card: recipe + nutrition
   for food items, or a history/origin/reason paragraph for
   every other theme. Falls back to a friendly "coming soon"
   note for items not yet in itemDetails, so nothing breaks
   while more states are added over time.
*/
function getItemDetailHTML(state, category, item) {

    const uid = makeItemUid(state, category, item);
    itemNarrationRegistry[uid] = { state, category, item };

    const lang = itemLanguageState[uid] || "english";
    const localized =
        getLocalizedItemDetail(state, category, item, lang);

    const langButtonsHTML = `
        <div class="item-lang-buttons">
            <button type="button" class="item-lang-btn ${lang === "english" ? "active" : ""}" onclick="changeItemLanguage('${uid}', 'english')">🇬🇧 English</button>
            <button type="button" class="item-lang-btn ${lang === "telugu" ? "active" : ""}" onclick="changeItemLanguage('${uid}', 'telugu')">🇮🇳 తెలుగు</button>
            <button type="button" class="item-lang-btn ${lang === "hindi" ? "active" : ""}" onclick="changeItemLanguage('${uid}', 'hindi')">🇮🇳 हिंदी</button>
        </div>
    `;

    const narratorHTML = `
        <div class="item-narrator">
            <button type="button" onclick="startItemNarration('${uid}')">🔊 Listen</button>
            <button type="button" onclick="pauseItemNarration('${uid}')">⏸️ Pause</button>
            <button type="button" onclick="resumeItemNarration('${uid}')">▶️ Resume</button>
            <button type="button" onclick="stopItemNarration()">⏹️ Stop</button>
            <p id="itemNarrationStatus-${uid}" class="item-narration-status">Ready to narrate.</p>
        </div>
    `;

    if (category === "food") {

        if (localized && localized.data && localized.data.recipe) {

            const pendingNote =
                !localized.isTranslated ?
                    pendingTranslationNote(lang) : "";

            return `
                <div class="item-extra" id="itemExtra-${uid}">
                    <p><strong>👩‍🍳 How it's made:</strong> ${localized.data.recipe}</p>
                    <p><strong>🥗 Nutrition:</strong> ${localized.data.nutrients}</p>
                    ${pendingNote}
                    ${langButtonsHTML}
                    ${narratorHTML}
                </div>
            `;
        }

        return `
            <div class="item-extra item-extra-pending" id="itemExtra-${uid}">
                <p><em>📋 Recipe and nutrition details for ${item} are being added soon.</em></p>
            </div>
        `;
    }

    const labelByCategory = {
        dance: "🕺 How this dance form began",
        arts: "🎨 History of this craft",
        dress: "🧵 History of this garment",
        festival: "🎉 Why it's celebrated",
        places: "🏛️ History of this place"
    };

    const label = labelByCategory[category];

    if (!label) {
        return "";
    }

    if (localized) {

        const pendingNote =
            !localized.isTranslated ?
                pendingTranslationNote(lang) : "";

        return `
            <div class="item-extra" id="itemExtra-${uid}">
                <p><strong>${label}:</strong> ${localized.data}</p>
                ${pendingNote}
                ${langButtonsHTML}
                ${narratorHTML}
            </div>
        `;
    }

    return `
        <div class="item-extra item-extra-pending" id="itemExtra-${uid}">
            <p><em>📋 The story behind ${item} is being added soon.</em></p>
        </div>
    `;
}


/*
   Tracks the language currently selected for state theme
   descriptions, and which category is on screen so the
   language buttons can re-render it instantly.
*/
let currentStateLanguage = "english";
let lastViewedCategory = null;


/*
   Called by the 🇬🇧 English / తెలుగు / हिंदी buttons in the
   "Choose Description Language" section.
*/
function changeStateLanguage(lang) {

    currentStateLanguage = lang;

    ["english", "telugu", "hindi"].forEach(function (code) {

        const btn = document.getElementById("stateLangBtn-" + code);

        if (btn) {
            btn.classList.toggle("active", code === lang);
        }
    });

    /*
       The narration text depends on the language, so any
       narration that is currently playing is now out of date.
    */
    stopStateNarration();

    if (lastSelectedState) {
        renderStateOverview(lastSelectedState);
    }

    if (lastViewedCategory) {
        showStateCategory(lastViewedCategory);
    }
}


/* =========================================================
   /* =========================================================
   LOCAL STATE HERITAGE IMAGES
========================================================= */

function getStateFolderName(state) {
    return state
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-");
}


function getItemFileName(item) {

    // FORCE CULTURE
    if (
        item === "Culture" ||
        item === "culture" ||
        item === "Traditional Culture" ||
        item.includes("Culture")
    ) {
        return "culture";
    }

    return item
        .toLowerCase()
        .trim()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}


function getHeritageImage(state, item) {

    const folder = getStateFolderName(state);
    const fileName = getItemFileName(item);

    const imagePath =
        `images/states/${folder}/${fileName}.jpg.webp`;

    console.log("================================");
    console.log("STATE:", state);
    console.log("ITEM:", item);
    console.log("FOLDER:", folder);
    console.log("FILE:", fileName);
    console.log("IMAGE:", imagePath);
    console.log("================================");

    return imagePath;
}
/* =========================================================
   STATE SELECT DROPDOWN
========================================================= */

const stateSelect =
    document.getElementById(
        "stateSelect"
    );
    
console.log("State selector found:", stateSelect);
console.log("States available:", indianStates);



if (stateSelect) {

    indianStates.forEach(
        function(state) {

            const option =
                document.createElement(
                    "option"
                );

            option.value = state;

            option.textContent = state;

            stateSelect.appendChild(
                option
            );

        }
    );


    stateSelect.addEventListener(
        "change",
        function() {

            const selectedState =
                this.value;

            /*
               Selecting a different state (or clearing the
               selection) makes any in-progress narration
               stale, so stop it here.
            */
            stopStateNarration();
            stopThemeNarration();

            if (!selectedState) {

                const narratorBox =
                    document.getElementById(
                        "stateNarrator"
                    );

                if (narratorBox) {
                    narratorBox.style.display = "none";
                }

                const themeNarratorBox =
                    document.getElementById(
                        "themeNarrator"
                    );

                if (themeNarratorBox) {
                    themeNarratorBox.style.display = "none";
                }

                document
                    .getElementById(
                        "categoryButtons"
                    )
                    .style.display =
                    "none";

                document
                    .getElementById(
                        "stateInfo"
                    )
                    .style.display =
                    "none";

                document
                    .getElementById(
                        "allThemesBox"
                    )
                    .style.display =
                    "none";

                document
                    .getElementById(
                        "stateCards"
                    )
                    .innerHTML = `

                        <div class="state-welcome">

                            <div class="india-icon">
                                🇮🇳
                            </div>

                            <h2>
                                Discover India's
                                Cultural Diversity
                            </h2>

                            <p>
                                Select a state above
                                to explore its heritage.
                            </p>

                        </div>

                    `;

                return;

            }


            document
                .getElementById(
                    "categoryButtons"
                )
                .style.display =
                "flex";


            document
                .getElementById(
                    "stateInfo"
                )
                .style.display =
                "block";


            document
                .getElementById(
                    "selectedStateTitle"
                )
                .innerText =
                "🇮🇳 " + selectedState;


            document
                .getElementById(
                    "selectedCategoryTitle"
                )
                .innerText =
                "Choose a category to explore";


            renderStateOverview(selectedState);


            document
                .getElementById(
                    "stateCards"
                )
                .innerHTML = `

                    <div class="state-welcome">

                        <div class="india-icon">
                            🌏
                        </div>

                        <h2>
                            ${selectedState}
                        </h2>

                        <p>
                            Select Dress, Dance,
                            Arts, Food, Festivals,
                            Culture or Famous Places.
                        </p>

                    </div>

                `;

        }
    );

}


/* =========================================================
   SHOW CATEGORY
========================================================= */

/* =========================================================
   STATE HERITAGE OVERVIEW
   One flowing description per state that mentions every
   theme (dress, dance, arts, food, festivals, culture,
   places) in a single paragraph — built in English, Telugu
   and Hindi, exactly like the monument history section.
========================================================= */

const stateOverviewDescriptions = {};

Object.keys(heritageData).forEach(function (state) {

    const d = heritageData[state];

    const dressEn = joinItemsForLanguage(d.dress, "english");
    const danceEn = joinItemsForLanguage(d.dance, "english");
    const artsEn = joinItemsForLanguage(d.arts, "english");
    const foodEn = joinItemsForLanguage(d.food, "english");
    const festivalEn = joinItemsForLanguage(d.festival, "english");
    const cultureEn = joinItemsForLanguage(d.culture, "english");
    const placesEn = joinItemsForLanguage(d.places, "english");

    const dressTe = joinItemsForLanguage(d.dress, "telugu");
    const danceTe = joinItemsForLanguage(d.dance, "telugu");
    const artsTe = joinItemsForLanguage(d.arts, "telugu");
    const foodTe = joinItemsForLanguage(d.food, "telugu");
    const festivalTe = joinItemsForLanguage(d.festival, "telugu");
    const cultureTe = joinItemsForLanguage(d.culture, "telugu");
    const placesTe = joinItemsForLanguage(d.places, "telugu");

    const dressHi = joinItemsForLanguage(d.dress, "hindi");
    const danceHi = joinItemsForLanguage(d.dance, "hindi");
    const artsHi = joinItemsForLanguage(d.arts, "hindi");
    const foodHi = joinItemsForLanguage(d.food, "hindi");
    const festivalHi = joinItemsForLanguage(d.festival, "hindi");
    const cultureHi = joinItemsForLanguage(d.culture, "hindi");
    const placesHi = joinItemsForLanguage(d.places, "hindi");

    const stateTe = translateState(state, "telugu");
    const stateHi = translateState(state, "hindi");

    stateOverviewDescriptions[state] = {

        english:
            `${state} carries a rich and colourful heritage. ` +
            `Its traditional dress features ${dressEn}, while its dance forms include ${danceEn}. ` +
            `The state is celebrated for arts and crafts such as ${artsEn}, and for its cuisine, ` +
            `including ${foodEn}. Festivals like ${festivalEn} bring the community together, ` +
            `reflecting the spirit of ${cultureEn}. Among its famous places, ${placesEn} stand out ` +
            `as must-visit heritage destinations.`,

        telugu:
            `${stateTe} గొప్ప మరియు రంగురంగుల వారసత్వాన్ని కలిగి ఉంది. ` +
            `దీని సాంప్రదాయ దుస్తులలో ${dressTe} ఉన్నాయి, నృత్య రూపాలలో ${danceTe} ఉన్నాయి. ` +
            `ఈ రాష్ట్రం ${artsTe} వంటి కళలు మరియు హస్తకళలకు, అలాగే ${foodTe} వంటి ఆహారానికి ప్రసిద్ధి చెందింది. ` +
            `${festivalTe} వంటి పండుగలు సమాజాన్ని ఏకం చేస్తాయి, ఇవి ${cultureTe} స్ఫూర్తిని ప్రతిబింబిస్తాయి. ` +
            `ప్రసిద్ధ ప్రదేశాలలో ${placesTe} తప్పక సందర్శించవలసిన వారసత్వ ప్రదేశాలుగా నిలుస్తాయి.`,

        hindi:
            `${stateHi} एक समृद्ध और रंगीन विरासत रखता है। ` +
            `इसके पारंपरिक पहनावे में ${dressHi} शामिल हैं, जबकि नृत्य रूपों में ${danceHi} शामिल हैं। ` +
            `यह राज्य ${artsHi} जैसी कला और शिल्प के साथ-साथ ${foodHi} जैसे भोजन के लिए प्रसिद्ध है। ` +
            `${festivalHi} जैसे त्योहार समुदाय को एक साथ लाते हैं, जो ${cultureHi} की भावना को दर्शाते हैं। ` +
            `इसके प्रसिद्ध स्थलों में ${placesHi} अवश्य देखने योग्य विरासत स्थलों के रूप में जाने जाते हैं।`
    };

});


/*
   Tracks the state currently on screen so the language
   buttons can re-render its overview instantly.
*/
let lastSelectedState = null;


/*
   Fills the overview box (title + one flowing paragraph)
   for the given state, in the currently selected language.
   Mirrors changeLanguage()/languageHistoryText for monuments.
*/
function renderStateOverview(state) {

    const box =
        document.getElementById(
            "allThemesBox"
        );

    if (!box) {
        return;
    }

    lastSelectedState = state;

    const overview =
        (stateOverviewDescriptions[state] &&
         stateOverviewDescriptions[state][currentStateLanguage]) ||
        "";

    const localizedStateName =
        translateState(state, currentStateLanguage);

    const overviewLabel =
        currentStateLanguage === "telugu" ? "వారసత్వ అవలోకనం" :
        currentStateLanguage === "hindi" ? "विरासत का अवलोकन" :
        "Heritage Overview";

    box.innerHTML = `
        <h2 id="stateOverviewTitle">📖 ${localizedStateName} — ${overviewLabel}</h2>
        <p id="stateOverviewText">${overview}</p>
    `;

    box.style.display = "block";

    /*
       Reveal the state narrator now that there is an
       overview to narrate, and reset it for the new state.
    */

    stopStateNarration();

    const narratorBox =
        document.getElementById("stateNarrator");

    if (narratorBox) {
        narratorBox.style.display = "block";
    }

    const narratorTitle =
        document.getElementById("stateNarratorTitle");

    if (narratorTitle) {
        narratorTitle.innerText =
            "🤖 Listen to " + localizedStateName + "'s Heritage";
    }

}


function showStateCategory(category) {

    const state =
        document.getElementById(
            "stateSelect"
        ).value;


    if (!state) {

        alert(
            "Please select a state first."
        );

        return;

    }


    /*
       Get information from your
       existing heritageData object.
    */

    const data =
        heritageData[state];


    if (!data) {

        alert(
            "Heritage information is not available."
        );

        return;

    }


    const items =
        data[category];


    /*
       Remember what's on screen so the language
       buttons can re-render it in the new language.
    */

    lastViewedCategory = category;


    /*
       Look up the theme description in the currently
       selected language (English / Telugu / Hindi).
    */

    const description =
        (heritageDescriptions[state] &&
         heritageDescriptions[state][category] &&
         heritageDescriptions[state][category][currentStateLanguage]) ||
        "";


    if (!items || items.length === 0) {

        stopThemeNarration();

        const themeNarratorBoxEmpty =
            document.getElementById("themeNarrator");

        if (themeNarratorBoxEmpty) {
            themeNarratorBoxEmpty.style.display = "none";
        }

        document
            .getElementById(
                "stateCards"
            )
            .innerHTML = `

                <div class="state-welcome">

                    <h2>
                        Information coming soon
                    </h2>

                    <p>
                        We are adding more heritage
                        information for ${state}.
                    </p>

                </div>

            `;

        return;

    }


    document
        .getElementById(
            "selectedCategoryTitle"
        )
        .innerText =
        categoryNamesMulti[category][currentStateLanguage];


    const descriptionEl =
        document.getElementById(
            "stateCategoryDescription"
        );

    if (descriptionEl) {
        descriptionEl.innerText = description;
    }


    /*
       Reveal the theme narrator now that there is a
       description to narrate, and reset it so it doesn't
       keep playing stale text from a previous theme/state.
    */

    stopThemeNarration();

    const themeNarratorBox =
        document.getElementById("themeNarrator");

    if (themeNarratorBox) {
        themeNarratorBox.style.display = "block";
    }

    const themeNarratorTitle =
        document.getElementById("themeNarratorTitle");

    if (themeNarratorTitle) {

        themeNarratorTitle.innerText =
            "🤖 Listen to " +
            categoryNamesMulti[category][currentStateLanguage].replace(/^\S+\s/, "");
    }


    const cardsContainer =
        document.getElementById(
            "stateCards"
        );


    cardsContainer.innerHTML = "";


    /*
       Create one card for every item.
    */

    items.forEach(function (item) {

        const imageURL =
            getHeritageImage(state, item);

        const card =
            document.createElement("div");

        card.className = "heritage-card";

        card.innerHTML = `
            <img
                src="${imageURL}"
                alt="${item} - ${state}"
                loading="lazy"
                onerror="this.src='https://placehold.co/800x550?text=Heritage+Image';"
            >

            <div class="heritage-card-content">

                <span class="card-category">
                    ${categoryNamesMulti[category][currentStateLanguage]}
                </span>

                <h3>${item}</h3>

                <p>
                    <strong>📍 State:</strong>
                    ${state}
                </p>

                <p>
                    ${description}
                </p>

                ${getItemDetailHTML(state, category, item)}

            </div>
        `;

        cardsContainer.appendChild(card);

    });


    /*
       Scroll automatically to the results.
    */

    document
        .getElementById(
            "stateCards"
        )
        .scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

}
