function initScrollHighlight() {

  var imgContainers_dict = {};
  var contentWrapper = document.getElementsByClassName('content-wrapper')[0];
  var imgContainers = contentWrapper.querySelectorAll('.img-container');

  var nameLists = document.querySelectorAll('.name-list');

  nameElems_dicts = [];

  nameLists.forEach((nameList) => {
    var nameElems_dict = {};
    var nameElems = nameList.querySelectorAll('li');
    nameElems.forEach(nameElem => {
      let name = nameElem.dataset.artist;
      nameElems_dict[name]=nameElem;
    });

  nameElems_dicts.push(nameElems_dict);
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

      nameElems_dicts.forEach((nameElems_dict) => {

        let nameElem = nameElems_dict[name];
        let nameAnchor = nameElem.children[0];
        nameAnchor.className = "";

        // add active class if visible
        if (entry.isIntersecting) {
          let visibleImgContainer = entry.target;
          let visibleName = visibleImgContainer.dataset.artist;


          let visibleNameElem = nameElems_dict[visibleName];
          let visibleNameAnchor = visibleNameElem.children[0];

          // console.log(visibleNameElem.children[0]);
          visibleNameElem.className = "active";
          visibleNameAnchor.className = "active";

        }
      });
    });
  }

  // observe images
  [...imgContainers].forEach(imgContainer => observer.observe(imgContainer));





}
