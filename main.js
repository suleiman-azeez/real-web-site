
    // Navbar

    const navbarEl = document.querySelector('nav');
    // console.log(navbarEl)

    window.onscroll = function (){
        if(window.scrollY > 400){
            navbarEl.style.backgroundColor = 'green';
        }else{
            navbarEl.style.background = '';
        }
    }

    // javascript for Form

    // All variables for our buttons
    
    const closeBtnEl = document.querySelector('.close-btn');
    const signBtnEl = document.querySelector('.btn');
    const btnEl = document.querySelector('.form-model');
    // console.log(signBtnEl)

    signBtnEl.addEventListener('click', ()=>{
        btnEl.style.display = 'block';
    })

    closeBtnEl.addEventListener('click', ()=>{
        btnEl.style.display = 'none';
    })
    