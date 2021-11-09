function initSizeSuture(){
  sizeSuture();
}

function sizeSuture(){

  let bottom = document.querySelectorAll('#bottom-left')[0];
  let bottomHeight = bottom.offsetHeight;

  console.log(bottomHeight);
  let sideHeading = document.querySelectorAll('a.side-heading')[0];
  sideHeading.style.width = bottomHeight + "px";



}
