// قائمة المعالم السياحية الأولية
const attractions = [
    {
        name: "برج الساعة",
        description: "برج مميز يعكس تاريخ المدينة.",
        location: "وسط المدينة",
        coordinates: "36.752778, 3.042222",
        marker: null // لتخزين علامة الخريطة
    },
    {
        name: "طاحونة فيريرو ",
        description: "طاحونة رائعة كان ملك ل",
        location: "حي الزهور",
        coordinates: "36.753, 3.034",
        marker: null
    }
];

// دالة لتهيئة الخريطة
const map = L.map('map').setView([36.752778, 3.042222], 13);

// إضافة طبقة خريطة
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// دالة لعرض قائمة المعالم السياحية
function displayAttractions() {
    const attractionsList = document.getElementById('attractionsList');
    attractionsList.innerHTML = ''; // تفريغ القائمة

    if (attractions.length === 0) {
        attractionsList.innerHTML = '<p>لا توجد معالم سياحية متاحة.</p>';
        return;
    }

    attractions.forEach((attraction, index) => {
        const attractionDiv = document.createElement('div');
        attractionDiv.className = 'attraction-item';
        attractionDiv.innerHTML = `
            <h3>${attraction.name}</h3>
            <p>الوصف: ${attraction.description}</p>
            <p>الموقع: ${attraction.location}</p>
            <p>الإحداثيات: ${attraction.coordinates}</p>
            <button onclick="viewAttraction(${index})">عرض</button>
        `;
        attractionsList.appendChild(attractionDiv);
    });
}

// دالة لإضافة معلم سياحي جديد
document.getElementById('addAttractionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const name = document.getElementById('attractionName').value;
    const description = document.getElementById('attractionDescription').value;
    const location = document.getElementById('attractionLocation').value;
    const coordinates = document.getElementById('attractionCoordinates').value.split(','); // تقسيم الإحداثيات

    const newAttraction = { name, description, location, coordinates, marker: null };
    attractions.push(newAttraction);
    displayAttractions(); // إعادة عرض القائمة
    addMarker(newAttraction); // إضافة العلامة على الخريطة

    // إعادة تعيين حقول النموذج
    document.getElementById('attractionName').value = '';
    document.getElementById('attractionDescription').value = '';
    document.getElementById('attractionLocation').value = '';
    document.getElementById('attractionCoordinates').value = '';
});

// دالة لإضافة علامة على الخريطة
function addMarker(attraction) {
    const lat = parseFloat(attraction.coordinates[0]);
    const lng = parseFloat(attraction.coordinates[1]);
    
    // إضافة علامة
    const marker = L.marker([lat, lng]).addTo(map)
        .bindPopup(`<b>${attraction.name}</b><br>${attraction.description}`)
        .openPopup();

    attraction.marker = marker; // تخزين العلامة في المعلم
}

// دالة لعرض تفاصيل المعلم في نافذة منبثقة
function viewAttraction(index) {
    const attraction = attractions[index];
    alert(`اسم المعلم: ${attraction.name}\nالوصف: ${attraction.description}\nالموقع: ${attraction.location}\nالإحداثيات: ${attraction.coordinates}`);
}

// دالة لتصفية قائمة المعالم السياحية
function filterAttractions() {
    const filter = document.getElementById('searchInput').value.toLowerCase();
    const filteredAttractions = attractions.filter(attraction => attraction.name.toLowerCase().includes(filter));
    
    const attractionsList = document.getElementById('attractionsList');
    attractionsList.innerHTML = '';

    filteredAttractions.forEach((attraction) => {
        const attractionDiv = document.createElement('div');
        attractionDiv.className = 'attraction-item';
        attractionDiv.innerHTML = `
            <h3>${attraction.name}</h3>
            <p>الوصف: ${attraction.description}</p>
            <p>الموقع: ${attraction.location}</p>
            <p>الإحداثيات: ${attraction.coordinates}</p>
        `;
        attractionsList.appendChild(attractionDiv);
    });
}

// عرض قائمة المعالم السياحية عند تحميل الصفحة
displayAttractions();
