


let menubtn = document.querySelector('#menu-btn');
let menulist = document.querySelector('header ul');

menubtn.onclick = ()=>{
    menubtn.classList.toggle('fa-times');
    menulist.classList.toggle('active');
} 

