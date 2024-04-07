const  terre_cote = document.querySelector(".a-cote-terre")
const reservoir_elt = document.querySelectorAll(".reservoir")

const main_tuyau_1 = document.querySelector(".main-tuyau-1")
const main_tuyau_2 = document.querySelector(".main-tuyau-2")

const tuyau_secondaire = document.querySelectorAll(".tuyau-secondaire")

const terre_dispositif = document.querySelector(".terre-dispositif")



function display_terre_a_cote()
{
    terre_cote.classList.add("a-cote-terre-animation")
    
}

function display_reservoir()
{
    reservoir_elt.forEach(
        (elt) => {
            elt.classList.add("animation-reservoir-active")
        }
    )
    
}


function display_main_tuyau_1()
{
    main_tuyau_1.classList.add("animation-tuyau-1-active")
}

function display_main_tuyau_2()
{
    main_tuyau_2.classList.add("animation-tuyau-2-active")
}

function display_tuyau_secondaire()
{
    tuyau_secondaire.forEach(
        (elt) => {
            elt.classList.add("tuyau-secondaire-animation-active")
        }
    )
}



function display_all_ouverture()
{
   // premier lot 1er cote
    document.querySelector(".fleche-1-1").classList.add("animation-fleche-1-x_1_3-active")
    document.querySelector(".fleche-1-2").classList.add("animation-fleche-1-x_1_3-active")
    document.querySelector(".fleche-1-3").classList.add("animation-fleche-1-x_1_3-active")

    // 2e cote
    document.querySelector(".fleche-1-4").classList.add("animation-fleche-1-x_4_6-active")
    document.querySelector(".fleche-1-5").classList.add("animation-fleche-1-x_4_6-active")
    document.querySelector(".fleche-1-6").classList.add("animation-fleche-1-x_4_6-active")



     // deuxieme lot 1er cote
     document.querySelector(".fleche-2-1").classList.add("animation-fleche-2-x_1_3-active")
     document.querySelector(".fleche-2-2").classList.add("animation-fleche-2-x_1_3-active")
     document.querySelector(".fleche-2-3").classList.add("animation-fleche-2-x_1_3-active")
 
     // 2e cote
     document.querySelector(".fleche-2-4").classList.add("animation-fleche-2-x_4_6-active")
     document.querySelector(".fleche-2-5").classList.add("animation-fleche-2-x_4_6-active")
     document.querySelector(".fleche-2-6").classList.add("animation-fleche-2-x_4_6-active")


     // 3 lot 1er cote
     document.querySelector(".fleche-3-1").classList.add("animation-fleche-3-x_1_3-active")
     document.querySelector(".fleche-3-2").classList.add("animation-fleche-3-x_1_3-active")
     document.querySelector(".fleche-3-3").classList.add("animation-fleche-3-x_1_3-active")
 
     // 2e cote
     document.querySelector(".fleche-3-4").classList.add("animation-fleche-3-x_4_6-active")
     document.querySelector(".fleche-3-5").classList.add("animation-fleche-3-x_4_6-active")
     document.querySelector(".fleche-3-6").classList.add("animation-fleche-3-x_4_6-active")


    
}


function display_terre_dispositif()
{
terre_dispositif.classList.add("terre-dispositif-animation-active")
}