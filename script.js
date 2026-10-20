// 1. Memilih tombol berdasarkan ID-nya ('klikButton')
const klik = document.getElementById('klikButton');

// 2. Menambahkan 'event listener' untuk mendeteksi aksi klik dari pengguna
klik.addEventListener('click', function() {
    // 3. Menampilkan jendela pop-up (alert) ketika tombol diklik
    alert('Halo! Terima kasih sudah berkunjung!');
});
