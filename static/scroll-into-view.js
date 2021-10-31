function initScrollIntoView() {

  var imgContainers_dict = {};
  contentWrapper = document.getElementsByClassName('content-wrapper')[0];
  imgContainers = contentWrapper.querySelectorAll('.img-container');
  imgContainers.forEach(imgContainer => {
    let name = imgContainer.dataset.artist;
    imgContainers_dict[name]=imgContainer;
  });

  nameList = document.getElementsByClassName('name-list')[0];
  nameElems = nameList.querySelectorAll('li');
  nameElems.forEach(nameElem => {
    let name = nameElem.dataset.artist;
    if(name){
      let targetClick = nameElem.firstChild;
      let targetScroll = imgContainers_dict[name];
      targetClick.addEventListener("click", function() {
        targetScroll.scrollIntoView({behavior: "smooth"});
      });
    }
  });
}
