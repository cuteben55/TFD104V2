//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// 導覽列縮合
$(function(){
  
  // 點擊按鈕，選單縮放
  $("button.btn_switch").on("click", function(){
    $("nav").slideToggle();
  });
  
});

$(function(){
  
  // hamburger icon 的切換
  $("button.hamburger").on("click", function(){
    $(this).toggleClass("is-active");
  });

});