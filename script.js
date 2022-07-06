$(".title-2, .evil-witch,.dia-1,.dia-2,.dia-3,.dia-4,.dia-5,.no,.yes,.enter,.shop-list,.shop-item,.item-choice").hide();


$(".sb").click(function() {
    $(".bg-1").css("background-image", "url(https://cdna.artstation.com/p/assets/images/images/022/887/772/large/gonzalo-blanco-blancogonzalo-render-final.jpg?1577108004)");
    $(".sb, .c, .q,.title").hide();
    $(".evil-witch,.title-2,.dia-1,.no,.yes").show();
});

$(".yes").click(function() {
    $(".yes,.no,.dia-1").hide();
    $(".dia-2").show();
});

$(".no").click(function() {

    $(".yes,.no,.dia-1").hide();
    $("").show();
});


$(".enter").click(function() {
    let shop = $("input").val();
    $(".shop-list").append("<li class='shop-item'>" + " You chose " + shop + "</li>");


});


let gauntlets = "gauntlets";
if (gauntlets === "gauntlets") {
    console.log("You chose the gauntlets!");
    
      } else if(gauntlets!== "gauntlets") {
  console.log("You have to exactly write what you want!");
    
} else {
    console.log("choose an item!");
}

let potion = "potion";
if (potion === "potion") {
    console.log("You chose the charisma potion!");
    
     } else if(potion!== "potion") {
  console.log("You have to exactly write what you want!");
    
} else {
    console.log("choose an item!");
}

let grimoire = $('.shop-item').val();
console.log("here!!!");

if (grimoire === "grimoire") {
    console.log("You chose the grimoire!");
    
    } else if(grimoire !== "grimoire") {
  console.log("You have to exactly write what you want!");
    
} else {
    console.log("choose an item!");
}