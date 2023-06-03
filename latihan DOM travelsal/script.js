// event handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click',function(){
//     card.style.display = 'none';
// });


// const close = document.querySelectorAll('.close');
// for (let i = 0; i < close.length; i++){
//     close[i].addEventListener('click',function(e){
        // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }
// cara pertama

// cara mudah dengan forEach
// close.forEach(function(el){
//     el.addEventListener('click',function(e){
//         e.target.parentElement.style.display = 'none';
//     });
// });

// cara mudah dengan mengambil container

const container = document.querySelector('.container');
container.addEventListener('click',function(e){
    if (e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});