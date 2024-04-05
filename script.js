const  terre_cote = document.querySelector(".a-cote-terre")
const reservoir_elt = document.querySelectorAll(".reservoir")
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