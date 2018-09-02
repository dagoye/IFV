var imageBox = document.querySelectorAll(".imgWrap");
var overlay = document.querySelectorAll(".overlay.center");
var filterButton = document.querySelectorAll(".filterBox button");
var fButtonColors = ["#50739a","#5d5d5d", "#168276", "#e67322fa", "#073f77", "rgba(0,0,0,0.8)"];
var rulesExpand = $(".ruleContent");
var arrowDown = $(".rules");

// OVERLAY HOVER
$(".imgWrap").hover(function(){
  $(this).find(".overlay.center").css("display", "flex");
}, function(){
  $(this).find(".overlay.center").css("display", "none");
})

// GIVE FILTER BUTTONS COLOR
for(var i=0; i<filterButton.length;i++){
  filterButton[i].style.background = fButtonColors[i];
}
    // hover filter button
var origColor;
$(".filterBox button").hover(function(){
  origColor = $(this).css("background");
  $(this).css("background", "rgba(0,0,0,0.8)");
}, function(){
  $(this).css("background", origColor);
});

// EXPAND Rules
var count = 0;
var arrOrigPos = arrowDown.html();
$(".rules").click(function(){
  rulesExpand.slideDown("slow", function(){
    $(this).css("display", "block");
  });
  count++;
  arrowDown.html("Rules for Checking Out Equipment <i class=\"fas fa-arrow-circle-up\"></i>");


  if (count == 2){
    rulesExpand.slideUp("slow", function(){
      $(this).css("display", "none");
    });
    count=0;
    arrowDown.html(arrOrigPos);
  }

});

// FILTERING ----------------------
var $grid = $('.equipment.grid').isotope({
  // options
  itemSelector: '.equipBox',
  layoutMode: 'fitRows'
});


$('.camera.equipFilter').on( 'click', function() {
  $grid.isotope({ filter: ".camera"});
});

$('.all').on( 'click', function() {
  $grid.isotope({ filter: "*"});
});
