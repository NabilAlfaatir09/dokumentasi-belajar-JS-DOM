const pBaru = document.createElement('p');
const text = document.createTextNode('ini adalah paragraf baru');
pBaru.appendChild(text);
const section = document.getElementById('paragraf');
section.appendChild(pBaru);

const liBaru = document.createElement('li');
const litext = document.createTextNode('item baru');
liBaru.appendChild(litext);

const ul = document.querySelector('#list ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName('a')[0];
section.removeChild(link);

const h2 = document.getElementById('list');
const p = h2.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2 = document.createTextNode('judul baru');
h2Baru.appendChild(textH2);

h2.replaceChild(h2Baru, p);

pBaru.style.backgroundColor = 'blue';
liBaru.style.backgroundColor = 'blue';
h2Baru.style.backgroundColor = 'blue';