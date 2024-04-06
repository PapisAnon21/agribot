const  terre_cote = document.querySelector(".a-cote-terre")
const reservoir_elt = document.querySelectorAll(".reservoir")

const main_tuyau_1 = document.querySelector(".main-tuyau-1")
const main_tuyau_2 = document.querySelector(".main-tuyau-2")

const tuyau_secondaire = document.querySelectorAll(".tuyau-secondaire")


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