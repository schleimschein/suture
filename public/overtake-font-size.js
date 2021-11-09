fit_count = 0;

function initOvertakeFontSize() {
    let sourceElement = document.getElementById('heading-large-second-span');

    sourceElement.addEventListener('fit', function(e){
      let newFontSize = e.detail.newValue;
      overtakeFontSize(newFontSize);

      changeHeadingFlex();

      initSizeSuture();
      fitty(".fit-suture");
    });
}

function overtakeFontSize(newFontSize) {

  let targets = document.querySelectorAll('.overtake-font-size');

  targets.forEach((target) => {
    target.style.fontSize = (newFontSize + 1) + 'px';
  });
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
}
