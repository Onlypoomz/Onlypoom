window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("tab").style.top = "0";
  } else {
    document.getElementById("tab").style.top = "-100px";
  }
}
// https://www.w3schools.com/howto/howto_js_navbar_slide.asp แท็บข้างบนเมื่อมีการเลื่อนลงมาข้างล่าง