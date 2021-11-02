function initScrollIntoView() {

  // Create dict of imgContainers
  var imgContainers_dict = {};
  var contentWrapper = document.getElementsByClassName('content-wrapper')[0];
  var imgContainers = contentWrapper.querySelectorAll('.img-container');
  imgContainers.forEach(imgContainer => {
    let name = imgContainer.dataset.artist;
    imgContainers_dict[name]=imgContainer;
  });

  // Scroll Slagman into view and make content wrapper visible
  imgContainer_slagman = imgContainers_dict["SLAGMAN"];
  imgContainer_slagman.scrollIntoView();
  globalPos = imgContainer_slagman.offsetTop;

  contentWrapper = document.getElementsByClassName("content-wrapper")[0];
  contentWrapper.style.visibility = "visible";

  // Create dict of list elems and add click event to each that scrolls imgContainer into view

  var nameList = document.getElementsByClassName('name-list')[0];
  var nameElems = nameList.querySelectorAll('li');
  nameElems.forEach(nameElem => {
    let name = nameElem.dataset.artist;


    if(name){
      let targetClick = nameElem.firstElementChild;

      let targetScroll = imgContainers_dict[name];
      targetClick.addEventListener("click", function() {

        targetScroll.scrollIntoView({behavior: "smooth"});
        globalPos = targetScroll.offsetTop;
        console.log(globalPos);
      });
    }
  });
}
