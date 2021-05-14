// Hamburger anklicken


var hamburger = document.querySelector(".nav__hamburger");
var close = document.querySelector(".nav__close");
var background_image = document.querySelector(".front");
var description_hamburger = document.querySelector(".front__flex--menu");
var description_normal = document.querySelector(".front__flex");

var hamburger_set = "";


window.addEventListener("resize", function (){

    if(window.innerWidth > "565"){

        hamburger.style.display = "none";
        close.style.display = "none";
        background_image.style.opacity = "1";
        description_hamburger.style.display = "none";
        description_normal.style.display = "flex";
        hamburger_set = 0;

    }else if (window.innerWidth < "565"){


        if (hamburger_set == 1){

            hamburger.style.display = "none";

        }else{

            hamburger.style.display = "block";

        }
    
    }

})

hamburger.addEventListener("click", openmenu);
close.addEventListener("click", closemenu);

function closemenu(){

    hamburger_set = 0;
    hamburger.style.display = "block";
    

    close.style.display = "none";

    
    background_image.style.opacity = "1";

    
    description_normal.style.display = "flex";

    
    description_hamburger.style.display = "none";


}

   
function openmenu(){

    hamburger.style.display = "none";
    hamburger_set = 1;
    
    close.style.display = "block";

    var background_image = document.querySelector(".front");
    background_image.style.opacity = "0.8";

    var description_normal = document.querySelector(".front__flex");
    description_normal.style.display = "none";

    var description_hamburger = document.querySelector(".front__flex--menu");
    description_hamburger.style.display = "flex";

}
    
// Pfeil Auswahl Menu aufklappen

var menu_symbol = document.querySelectorAll(".merge__svg");
var cards = document.querySelectorAll(".merge__item");
var set_item = "";

var item_selected = "";

for (var item_aufklappen of menu_symbol){


    item_aufklappen.addEventListener("click", open_close);


}


for (var card of cards){

    card.addEventListener("click", selected);

}
    

  

function open_close(){

    
    var selected_item = this.parentNode.lastElementChild;

    if (this.id == "close" || this.id ==""){
        

        this.style.transform = "rotate(0deg)";
        
        selected_item.style.display = "flex";

        this.id = "open";
        
    }else if (this.id == "open"){

        this.style.transform = "rotate(180deg)";
        selected_item.style.display = "none";
        this.id = "close";
        
    }
    
}

function selected(){

    if(this.parentNode.id != "item_selected" && this.id != "selected" ){


            this.classList.add("item__selected");
            this.id = "selected";
            this.parentNode.id = "item_selected";

            var titel = this.parentNode.parentNode.firstElementChild.innerHTML;
            var card_inhalt =  this.firstElementChild.innerHTML;

            if (titel == "How do you drink your coffee ?"){

                var span1 = document.querySelector(".selected1");
                span1.innerText = card_inhalt;

            }else if (titel == "What type of coffee? "){

                var span2 = document.querySelector(".selected2");
                span2.innerText = card_inhalt;

            }else if (titel == "How much would you like?"){
                
                var span3 = document.querySelector(".selected3");
                span3.innerText = card_inhalt;

            }else if (titel == "Want us to grind them?"){
                
                var span4 = document.querySelector(".selected4");

                if (card_inhalt == 'Whole<br class="enable"><span class="enable item--text">-</span>bean'){

                    card_inhalt = "Wholebean";

                }
                span4.innerText = card_inhalt;

            }else if (titel == "How often should we deliver?"){
                
                var span5 = document.querySelector(".selected5");
               
                if (card_inhalt == 'Every 2<br class="enable"> weeks'){

                    card_inhalt = "Every 2 weeks";

                }
                span5.innerText = card_inhalt;

            }
            

    }   

    else if (this.id == "selected"){

        this.id = "clear";
        this.classList.remove("item__selected");
        this.parentNode.id = "no_item_selected";

    }

}

