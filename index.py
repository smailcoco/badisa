<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>المعالم السياحية في المدينة</title>
    <link rel="stylesheet" href="styles.css">
    <!-- إضافة مكتبة Leaflet -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
</head>
<body>
    <header>
        <h1>أهلا بك في دليل المعالم السياحية في لمدينة بوسعادة</h1>
    </header>

    <main>
        <section>
            <h2>البحث عن معلم سياحي</h2>
            <input type="text" id="searchInput" placeholder="ابحث عن معلم سياحي..." onkeyup="filterAttractions()">
        </section>

        <section>
            <h2>قائمة المعالم السياحية</h2>
            <div id="attractionsList">
                <!-- ستظهر قائمة المعالم السياحية هنا -->
            </div>
        </section>

        <section>
            <form id="addAttractionForm">
                <input type="text" id="attractionName" placeholder="اسم المعلم السياحي" required>
                <input type="text" id="attractionDescription" placeholder="وصف المعلم" required>
                <input type="text" id="attractionLocation" placeholder="الموقع" required>
                <input type="text" id="attractionCoordinates" placeholder="إحداثيات الموقع (مثال: 36.752778, 3.042222)">
                <button type="submit">إضافة المعلم</button>
            </form>
        </section>

        <section>
            <h2>الخريطة</h2>
            <div id="map"></div>
        </section>
    </main>

    <!-- إضافة مكتبة Leaflet -->
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    <script src="script.js"></script>
</body>
</html>

