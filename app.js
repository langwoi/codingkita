const express = require('express');
const app = express();
const path = require('path');

// Setup EJS sebagai View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware untuk file statis (CSS, Images, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route Landing Page
app.get('/', (req, res) => {
    // Data paket harga (biar gampang diubah-ubah)
    const packages = [
        { 
            name: 'Paket UMKM Hemat', 
            price: '499.000', 
            features: ['Landing Page 1 Halaman', 'Domain .my.id', 'SSL Gratis', 'Optimasi Mobile'] 
        },
        { 
            name: 'Paket Bisnis Pro', 
            price: '1.499.000', 
            features: ['Hingga 5 Halaman', 'Domain .com', 'SEO Basic', 'Revisi 3x', 'Integrasi WA'] 
        }
    ];

    res.render('index', { packages });
});

// Jalankan Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server lari kencang di http://localhost:${PORT}`);
});