const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';

// const p = document.getElementsByTagName('p');
// for (let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'blue';
// }

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

const p4 = document.querySelector('#list p');
p4.style.backgroundColor = 'orange';

const li2 = document.querySelector('#list ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

const p = document.querySelectorAll('p');
for (let i=0; i<p.length; i++){
    p[i].style.backgroundColor = 'blue';
}

const p1 = document.querySelector('.p1');
p1.classList.toggle('para1');