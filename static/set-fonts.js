var headingMarginTop = 10;
var headingLargeSpanMarginBottom = 10;

function initSetFonts() {

  // let ratio = window.innerWidth / window.innerHeight;
  // console.log(ratio);

  sizeHeading_first();

}


function sizeHeading_first(){

  // Get span of longest text
  let longestHeadingDiv = document.querySelectorAll('#heading-large-second-span')[0];

  // Fit font size to the length of that span
  let fitties = fitty(".fit-heading");

  // Adjust rest when fitted
  elem = document.querySelectorAll('.fit-heading')[0];
  elem.addEventListener('fit', () => {

    // Make the heading divs non flexible after the fit
    changeHeadingFlex();

    // Let other spans in heading overtake the fitted font size
    let headingFontSize = longestHeadingDiv.style.fontSize;
    overtakeFontSize(headingFontSize);

    // Calculate the proper line height and vertical align for the fitted fontsize
    // for better white space control
    let headingSpanWrappers = document.querySelectorAll('.heading-span-wrapper');

    let headingFontMetric = setProperFontMetric(headingFontSize);
    let headingLineHeight = headingFontMetric[0];
    let headingValign = headingFontMetric[1];
    let headingCapitalHeight = headingFontMetric[2];

    // Apply the calculated font metrics
    headingSpanWrappers.forEach((headingSpanWrapper) => {

      let headingSpan = headingSpanWrapper.firstElementChild;

      headingSpanWrapper.style.lineHeight = headingLineHeight + headingLineHeight * 0.1 + 'px';
      headingSpan.style.verticalAlign = -1 * headingValign - headingValign * 0.1 + "px";
    });

    // Adjust heading margin for the adjusted line height
    // Otherwise the heading would be clipped at the top
    let heading = document.querySelectorAll('.heading')[0];
    heading.style.marginTop = headingValign + "px";

    // Set the bottom height based on the computed font metrics
    let topLeft = document.querySelectorAll('#top-left')[0];
    let bottoms = document.querySelectorAll('.bottom');

    bottoms.forEach((bottom) => {
      topHeight = 3 * (headingCapitalHeight + headingCapitalHeight*0.15 + headingLargeSpanMarginBottom) + headingMarginTop;
      bottomHeight = window.innerHeight - topHeight;
      bottom.style.height = bottomHeight + 'px';

    });

    // Set the size of the logos based on the fitted font size
    sizeLogos(headingCapitalHeight, headingValign);
    sizeMenuToggle(headingCapitalHeight, headingValign);
    sizeHeadingSmall(headingFontSize, headingLineHeight, headingValign, headingCapitalHeight);


    // Fit the suture side heading into to the remaining space
    sizeSuture_second();

  });
}

function setProperFontMetric(targetFontSize){
  let fm_capitalHeight= 0.777;
  let fm_descender= 0.571;
  let fm_ascender= 1.062;
  let fm_linegap= 0.037;

  /* desired font-size for capital height */
  let capital_height = parseFloat(targetFontSize) * fm_capitalHeight;

  /* compute font-size to get capital height equal desired font-size */
  // --computedFontSize: calc(var(--capital-height) / var(--fm-capitalHeight));

  let trueFontSize = targetFontSize;
  let lineheightNormal = fm_ascender + fm_descender + fm_linegap;
  let contentArea = lineheightNormal * targetFontSize;
  let distanceBottom = fm_descender;
  let distanceTop = fm_ascender - fm_capitalHeight;
  let valign = (distanceBottom - distanceTop) * parseFloat(targetFontSize);

  let line_height= 1;
  // line_height = (line_height * capital_height) - valign + 'px';
  line_height = (line_height * parseFloat(capital_height)) - valign;


  return [line_height, valign, capital_height];
}


function overtakeFontSize(newFontSize) {
  let targets = document.querySelectorAll('.overtake-font-size');

  targets.forEach((target) => {
    target.style.fontSize = parseFloat(newFontSize) + "px";
  });
}

function changeHeadingFlex() {
  let left = document.querySelectorAll('.left')[0];
  let top = document.querySelectorAll('.top')[0];
  let heading = document.querySelectorAll('.heading')[0];
  let headingLarge = document.querySelectorAll('.heading-large')[0];
  let anchorsHeadingLarge = document.querySelectorAll('.heading-large > a');

  headingLarge.style.alignItems="flex-start";

  left.style.flex = "0 0 auto";
  top.style.flex = "0 0 auto";
  heading.style.flex = "0 0 auto";
}

function sizeLogos(headingCapitalHeight, headingValign){

  let logoTop = document.querySelectorAll('.logo-top')[0];
  let logoBottom = document.querySelectorAll('.logo-bottom')[0];

  let logoTopHeight =  headingCapitalHeight;
  let logoBottomHeight = 0.45 * logoTopHeight;

  logoTop.style.height = logoTopHeight + 'px';
  logoTop.style.width = logoTopHeight + 'px';
  logoTop.style.marginTop = headingValign + "px";
  logoTop.style.marginRight = headingValign + "px";



  logoBottom.style.height = logoBottomHeight + 'px';
  logoBottom.style.width = logoTopHeight + 'px';
  logoBottom.style.bottom = headingValign + "px";
  logoBottom.style.right = headingValign + "px";

}

function sizeMenuToggle(headingCapitalHeight, headingValign){

  // Set distance to top
  let heading = document.querySelectorAll('.heading')[0];
  headingMarginTop = heading.style.marginTop;


  let menuToggle = document.querySelectorAll('#menuToggle')[0];
  menuToggle.style.width = headingCapitalHeight + 'px';
  menuToggle.style.marginTop = parseFloat(headingMarginTop)  + 1/6 * headingCapitalHeight + 'px';
  menuToggle.style.marginRight = headingValign + "px";

  // Set toggle bar look
  let menuToggleBars = menuToggle.querySelectorAll('span');
  let menuToggleBarWidth = headingCapitalHeight;
  let menuToggleBarHeight = barHeight = Math.max(parseInt(headingCapitalHeight * 0.12),2);
  let menuToggleBarMarginBottom = parseInt(barHeight * 1.25);
  let menuToggleBarAnimationOffsetY = menuToggleBarHeight + menuToggleBarMarginBottom ;


  menuToggleBars.forEach((bar, i) => {
    bar.style.width = menuToggleBarWidth + 'px';
    bar.style.height = menuToggleBarHeight + 'px';
    bar.style.marginBottom = menuToggleBarMarginBottom + 'px';

    // Set toggle bar animation variable for css

    bar.style.setProperty('--translationOffsetY', menuToggleBarAnimationOffsetY+'px');


  });

}

function sizeHeadingSmall(headingFontSize, headingLineHeight, headingValign, headingCapitalHeight){

  let headingSmall = document.querySelectorAll('.heading-small')[0];
  let headingLarge = document.querySelectorAll('.heading-large')[0];
  let smallestHeadingSpan = document.querySelectorAll('#heading-large-third-span')[0];

  let availableWidth = headingLarge.offsetWidth - smallestHeadingSpan.offsetWidth;

  headingSmall.style.width = availableWidth + "px";
  headingSmall.style.height = headingCapitalHeight + headingLargeSpanMarginBottom + "px";

  let headingAdress = document.querySelectorAll('.heading-adress')[0];
  let headingAdressSpan = headingAdress.firstElementChild;;

  let headingDate = document.querySelectorAll('.heading-date')[0];
  let headingDateSpan = headingDate.firstElementChild;


  let headingDateFontFraction = 1/2.7;
  headingDate.style.fontSize = headingDateFontFraction * parseFloat(headingFontSize) + 'px';
  headingDate.style.lineHeight = headingDateFontFraction * parseFloat(headingLineHeight) + 'px';
  headingDateSpan.style.verticalAlign = -1 * headingDateFontFraction * parseFloat(headingValign) + 'px';

  let headingDateMarginBottom = headingDateFontFraction * parseFloat(headingValign) + headingDateFontFraction * parseFloat(headingValign) * 0.3;
  headingDate.style.marginBottom = headingDateMarginBottom * 1.1 +'px';


  let headingAdressFontFraction = 1/5;
  if( window.innerWidth / window.innerHeight < 1){
    headingAdressFontFraction = 1/4;
  }

  headingAdress.style.fontSize = headingAdressFontFraction * parseFloat(headingFontSize) + 'px';
  headingAdress.style.lineHeight = headingAdressFontFraction * parseFloat(headingLineHeight) + 'px';
  headingAdressSpan.style.verticalAlign = -1 * headingAdressFontFraction * parseFloat(headingValign) + 'px';

  let headingAdressMarginBottom = headingAdressFontFraction * parseFloat(headingValign) + headingAdressFontFraction * parseFloat(headingValign) * 0.3;
  headingAdress.style.marginBottom = headingAdressMarginBottom + 'px';

  headingSmall.style.marginTop = (headingDateMarginBottom + headingAdressMarginBottom) * 0.6 + 'px';

}

function sizeSuture_second(){
  let bottom = document.querySelectorAll('#bottom-left')[0];
  let bottomHeight = bottom.offsetHeight;

  let ratio = window.innerWidth / window.innerHeight;
  if(ratio < 1)
  {
      bottomHeight = 0.75 * bottomHeight;
  }



  let sideHeading = document.querySelectorAll('a.side-heading')[0];
  sideHeading.style.width = bottomHeight  + "px";

  let sutureDiv = document.querySelectorAll('.fit-suture')[0];
  let sutureSpan = sutureDiv.firstElementChild;

  fitText( sutureDiv, 0.52 ); // turn the compressor up (font will shrink a bit more aggressively)

  let sutureFontSize = sutureDiv.style.fontSize;
  let sutureFontMetric = setProperFontMetric(sutureFontSize);
  let sutureLineHeight = sutureFontMetric[0];
  let sutureValign = sutureFontMetric[1];
  let sutureCapitalHeight = sutureFontMetric[2];

  sutureDiv.style.lineHeight = sutureLineHeight+'px';
  sutureSpan.style.verticalAlign = -1 * sutureValign + "px";

  positionSuture(sutureFontSize, sutureLineHeight, sutureCapitalHeight);
}

function positionSuture(newFontSize, newLineHeight, newCapitalHeight){

  let sideHeading = document.querySelectorAll('a.side-heading')[0];

  sideHeading.style.transform = "rotate(90deg)";


  sideHeading.style.height = newFontSize + 10 + 'px';
  let bottom = document.querySelectorAll('#bottom-left')[0];
  let bottomHeight = bottom.offsetHeight;
  sideHeading.style.width = bottomHeight + "px";

  let top = document.querySelectorAll('#top-left')[0];
  let topHeight = top.offsetHeight;

  let sideHeadingWrapper = document.querySelectorAll('.side-heading-wrapper')[0];
  sideHeadingWrapper.style.top = topHeight + "px";

  setSideHeadingSpacerWidth(newCapitalHeight);
  sizeMenu(topHeight);
  finishEvent();
}

function setSideHeadingSpacerWidth(newWidth){
  let sideHeadingSpacer = document.querySelectorAll('.side-heading-spacer');
  sideHeadingSpacer.forEach((spacer, i) => {
    spacer.style.width = newWidth + 16 + "px";
    spacer.style.flex = "0 0 auto";
  });
}

function sizeMenu(){

  // Taking care of y
  let top = document.querySelectorAll('#top-left')[0];
  let topHeight = top.offsetHeight;

  let bottom = document.querySelectorAll('#bottom-left')[0];
  let bottomHeight = bottom.offsetHeight;

  let menuToggle = document.querySelectorAll('#menuToggle')[0];

  let menuToggleOffsetY = parseFloat(menuToggle.style.marginTop) ;
  console.log(menuToggleOffsetY);


  let offsetY = topHeight - menuToggleOffsetY;

  let menu = document.querySelectorAll('#menu')[0];
  menu.style.top = offsetY + "px";
  menu.style.height = bottomHeight + "px"


  // Taking care of x

  let contentWrapper = document.querySelectorAll('.content-wrapper')[0];
  let contentWrapperWidth = contentWrapper.offsetWidth;
  let menuWidth = contentWrapperWidth;
  menu.style.width = contentWrapperWidth + "px";


  menuToggleWidth = menuToggle.offsetWidth;
  let menuToggleOffsetX_right = menuToggle.clientWidth + parseFloat(menuToggle.style.marginRight) ;
  let sideHeadingSpacer = document.querySelectorAll('.side-heading-spacer')[0];
  let sideHeadingSpacerWidth = sideHeadingSpacer.offsetWidth;
  let offsetXToContent = sideHeadingSpacerWidth - menuToggleOffsetX_right;
  let offsetX = contentWrapperWidth + offsetXToContent;

  menu.style.left = -1 * offsetX + "px";






}


function finishEvent(){
  const event = new Event('finished');
  document.dispatchEvent(event);
}
