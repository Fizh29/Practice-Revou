const produk = {
    nama: 'Buku Tulis',
    harga: 15000,
    diskon: 0.1, // Diskon 10%
    stok: 20
};

// Kalau Beli Barang lebih dari atau sama dengan 10 maka diskon 10%
// Mendapatkan jumlah produk yang akan dibeli
const jumlahBeli = 15;

// Menghitung total harga dengan memperhitungkan diskon
let totalHarga;
if (jumlahBeli <= produk.stok) {
    let itungdiskon = produk.harga * produk.diskon;
    let hargaSetelahDiskon = produk.harga - itungdiskon;
    totalHarga = jumlahBeli * hargaSetelahDiskon;
    console.log("Total harga pembelian: Rp" + totalHarga);
    produk.stok -= jumlahBeli;
    console.log("Sisa stok produk '" + produk.nama + "': " + produk.stok);
} else {
    console.log("Maaf, stok produk tidak mencukupi untuk jumlah pembelian yang diminta.");
}