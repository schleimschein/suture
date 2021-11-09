fit_count = 0;

function initAdjustFonts() {
    let sourceElement = document.getElementById('heading-large-second-span');

    sourceElement.addEventListener('fit', function(e){
      let newFontSize = e.detail.newValue;
      overtakeFontSize(newFontSize);
    });
}

function overtakeFontSize(newFontSize) {

  let targets = document.querySelectorAll('.overtake-font-size');

  targets.forEach((target) => {
    target.style.fontSize = (newFontSize + 1) + 'px';
  });

  changeHeadingFlex();
}

function changeHeadingFlex() {
  let heading = document.querySelectorAll('.heading')[0];
  let headingLarge = document.querySelectorAll('.heading-large')[0];
  let anchorsHeadingLarge = document.querySelectorAll('.heading-large > a');

  heading.style.alignSelf = "flex-start";
  heading.style.flex = "0 0 auto";
  headingLarge.style.alignSelf = "flex-start";

  anchorsHeadingLarge.forEach((anchor, i) => {
    anchor.style.alignSelf = "flex-start";
  });

  sizeSuture();
}

function sizeSuture(){
  let bottom = document.querySelectorAll('#bottom-left')[0];
  let bottomHeight = bottom.offsetHeight;

  let sideHeading = document.querySelectorAll('a.side-heading')[0];
  sideHeading.style.width = bottomHeight + "px";

  fitty(".fit-suture");

  let sutureSpan = document.querySelectorAll('.fit-suture')[0];

  sutureSpan.addEventListener('fit', function(e){
    positionSuture();
  });
}

function positionSuture(){
  let top = document.querySelectorAll('#top-left')[0];
  let topHeight = top.offsetHeight;

  let sideHeadingWrapper = document.querySelectorAll('.side-heading-wrapper')[0];
  sideHeadingWrapper.style.top = topHeight + "px";
}
