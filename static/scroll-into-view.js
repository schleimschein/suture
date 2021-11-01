function initScrollIntoView() {

  var imgContainers_dict = {};
  var contentWrapper = document.getElementsByClassName('content-wrapper')[0];
  var imgContainers = contentWrapper.querySelectorAll('.img-container');
  imgContainers.forEach(imgContainer => {
    let name = imgContainer.dataset.artist;
    imgContainers_dict[name]=imgContainer;
  });

  var nameList = document.getElementsByClassName('name-list')[0];
  var nameElems = nameList.querySelectorAll('li');
  nameElems.forEach(nameElem => {
    let name = nameElem.dataset.artist;


    if(name){
      let targetClick = nameElem.firstElementChild;

      let targetScroll = imgContainers_dict[name];
      targetClick.addEventListener("click", function() {

        targetScroll.scrollIntoView({behavior: "smooth"});
      });
    }
  });
}
