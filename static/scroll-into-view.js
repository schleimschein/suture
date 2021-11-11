function initScrollIntoView() {
  // Create dict of imgContainers
  var imgContainers_dict = {};
  var contentWrapper = document.getElementsByClassName('content-wrapper')[0];
  var imgContainers = contentWrapper.querySelectorAll('.img-container');
  imgContainers.forEach(imgContainer => {
    let name = imgContainer.dataset.artist;
    imgContainers_dict[name]=imgContainer;
  });

  // Create dict of list elems and add click event to each that scrolls imgContainer into view

  var nameLists = document.querySelectorAll('.name-list');

  nameLists.forEach((nameList) => {
    var nameElems = nameList.querySelectorAll('li');
    nameElems.forEach(nameElem => {
      let name = nameElem.dataset.artist;


      if(name){
        let targetClick = nameElem.firstElementChild;

        let targetScroll = imgContainers_dict[name];
        targetClick.addEventListener("click", function() {

          targetScroll.scrollIntoView({behavior: "smooth"});
          globalPos = targetScroll.offsetTop;

          // Close Menu
          let menuToggleInput = document.querySelectorAll('#menuToggle > input')[0];
          menuToggleInput.checked = false;

        });
      }
    });
  });
}

function scrollIntoView_Slagman(){
  // Create dict of imgContainers
  var imgContainers_dict = {};
  var contentWrapper = document.getElementsByClassName('content-wrapper')[0];
  var imgContainers = contentWrapper.querySelectorAll('.img-container');
  imgContainers.forEach(imgContainer => {
    let name = imgContainer.dataset.artist;
    imgContainers_dict[name]=imgContainer;
  });

  // Scroll Slagman into view and make content wrapper visible
  contentWrapper.style.visibility = "visible";

  imgContainer_slagman = imgContainers_dict["SLAGMAN"];
  imgContainer_slagman.scrollIntoView();
  globalPos = imgContainer_slagman.offsetTop;

  contentWrapper = document.getElementsByClassName("content-wrapper")[0];

}
