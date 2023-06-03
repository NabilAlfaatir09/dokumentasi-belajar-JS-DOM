function ubahWarna(){
    p2.style.backgroundColor = 'blue';
}
const p2 = document.querySelector('.p2');
p2.onClick = ubahWarna;

const p4 = document.querySelector('section#list p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#list ul');
    const liBaru = document.createElement('li');
    const tektLiBaru = document.createTextNode('item baru');
    liBaru.appendChild(tektLiBaru);
    ul.appendChild(liBaru);
});

const p3 = document.querySelector('.p3');
p3.addEventListener('click', function(){
    p3.style.backgroundColor = 'red';
    p3.style.color = 'blue';
});

