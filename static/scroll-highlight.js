function initScrollHighlight() {

  var imgContainers_dict = {};
  var contentWrapper = document.getElementsByClassName('content-wrapper')[0];
  var imgContainers = contentWrapper.querySelectorAll('.img-container');

  var nameElems_dict = {};
  var nameList = document.getElementsByClassName('name-list')[0];
  var nameElems = nameList.querySelectorAll('li');
  nameElems.forEach(nameElem => {
    let name = nameElem.dataset.artist;
    nameElems_dict[name]=nameElem;
  });

  // create observer
  const config = {threshold: 0.2};
  const observer = new IntersectionObserver(onChange, config);

  // observer callback
  function onChange(changes) {
    changes.forEach(entry => {

      // remove active class
      let imgContainer = entry.target;
      let name = imgContainer.dataset.artist;
      let nameElem = nameElems_dict[name];
      let nameAnchor = nameElem.firstChild;
      nameAnchor.className = "";

      // add active class if visible
      if (entry.isIntersecting) {
        let visibleImgContainer = entry.target;
        let visibleName = visibleImgContainer.dataset.artist;

        let visibleNameElem = nameElems_dict[visibleName];
        let visibleNameAnchor = visibleNameElem.firstChild;

        nameAnchor.className = "active";

      }
    });
  }

  // observe images
  [...imgContainers].forEach(imgContainer => observer.observe(imgContainer));





}
