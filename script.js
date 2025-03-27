document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan elemen form
    const form = document.getElementById('biodataForm');
    
    // Mendapatkan elemen fakultas dan prodi
    const fakultasSelect = document.getElementById('fakultas');
    const prodiSelect = document.getElementById('prodi');
    
    // Data program studi berdasarkan fakultas
    const prodiData = {
        'fti': ['Teknik Informatika', 'Sistem Informasi', 'Ilmu Komputer'],
        'feb': ['Manajemen', 'Akuntansi', 'Ekonomi Pembangunan'],
        'fh': ['Ilmu Hukum'],
        'fisip': ['Ilmu Komunikasi', 'Ilmu Politik', 'Sosiologi']
    };
    
    // Event listener untuk perubahan fakultas
    fakultasSelect.addEventListener('change', function() {
        const selectedFakultas = this.value;
        
        // Kosongkan dropdown prodi
        prodiSelect.innerHTML = '<option value="" selected>Pilih Program Studi</option>';
        
        // Jika fakultas dipilih, tambahkan program studi yang sesuai
        if (selectedFakultas && prodiData[selectedFakultas]) {
            prodiData[selectedFakultas].forEach(function(prodi) {
                const option = document.createElement('option');
                option.value = prodi.toLowerCase().replace(' ', '-');
                option.textContent = prodi;
                prodiSelect.appendChild(option);
            });
        }
    });
    
    // Event listener untuk submit form
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Mengumpulkan data form
        const formData = {
            nama: document.getElementById('nama').value,
            fakultas: fakultasSelect.options[fakultasSelect.selectedIndex].text,
            prodi: prodiSelect.options[prodiSelect.selectedIndex].text,
            nim: document.getElementById('nim').value,
            angkatan: document.getElementById('angkatan').value,
            noHP: document.getElementById('noHP').value,
            email: document.getElementById('email').value,
            tempatLahir: document.getElementById('tempatLahir').options[document.getElementById('tempatLahir').selectedIndex].text,
            tanggalLahir: document.getElementById('tanggalLahir').value,
            jenisKelamin: document.getElementById('jenisKelamin').value === 'laki' ? 'Laki-Laki' : 'Perempuan',
            hobi: document.getElementById('hobi').value
        };
        
        // Menampilkan data di console (bisa diganti dengan pengiriman ke server)
        console.log('Data Biodata Mahasiswa:', formData);
        
        // Menampilkan alert
        alert('Data berhasil disimpan!\nLihat detail di console browser Anda.');
        
        // Reset form (opsional)
        // form.reset();
    });
    
    // Event listener untuk tombol reset
    const resetButton = form.querySelector('button[type="reset"]');
    resetButton.addEventListener('click', function() {
        // Reset dropdown prodi ke keadaan awal
        prodiSelect.innerHTML = '<option value="" selected>Pilih Program Studi</option>';
    });
});