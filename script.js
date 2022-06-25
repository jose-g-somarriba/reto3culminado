const d = document;

function menu_1(btn,menu) {
    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            d.querySelector(menu).classList.toggle("is-active-1")
        }
    })
}

menu_1(".menu_desplegable_1", ".list_menu_1");

function vuelta_1(btn,flecha){
    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            d.querySelector(flecha).classList.toggle("is-active-rotate-1")
        }
    })

}

vuelta_1(".menu_desplegable_1", ".btn_1")

function menu_2(btn,menu){
    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            d.querySelector(menu).classList.toggle("is-active-2")
        }
    })
}

menu_2(".menu_desplegable_2", ".list_menu_2");

function vuelta_2(btn,flecha){
    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            d.querySelector(flecha).classList.toggle("is-active-rotate-2")
        }
    })
}

vuelta_2(".menu_desplegable_2", ".btn_2");

function menu_3(btn,menu){
    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            d.querySelector(menu).classList.toggle("is-active-3")
        }
    })
}

menu_3(".menu_desplegable_3", ".list_menu_3");

function vuelta_3(btn, flecha){
    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            d.querySelector(flecha).classList.toggle("is-active-rotate-3")
        }
    })
}

vuelta_3(".menu_desplegable_3",".btn_3");


function hamburguesa(btn,menu){
    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            d.querySelector(menu).classList.toggle("is-active-hambur")
        }
    })
}

hamburguesa(".hamburguesa", ".menu_nav")

