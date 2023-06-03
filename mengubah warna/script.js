const tombol = document.getElementById('tombol');

tombol.onclick = function(){
    // document.body.style.backgroundColor = 'blue';
    document.body.classList.toggle('biru-muda');

}
// pilih warna acak
const tombolWarna = document.createElement('button');
const textWarna = document.createTextNode('pilih warna');
tombolWarna.appendChild(textWarna);
tombolWarna.setAttribute('type', 'button');
tombol.after(tombolWarna);

tombolWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

// pilih warna RGB
const merah = document.querySelector('input[name=merah]');
const hijau = document.querySelector('input[name=hijau]');
const biru = document.querySelector('input[name=biru]');

merah.addEventListener('input', function(){
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

hijau.addEventListener('input', function(){
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

biru.addEventListener('input', function(){
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

// ubah warna sesuai kursor
document.body.addEventListener('mousemove', function(event) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',100)';
});