(() => {
  // variables at the top -> elements on the page we need to work with
  let sigilButtons = document.querySelectorAll(".sigilContainer"),
      lightBox = document.querySelector(".lightbox"),
      houseVideo = lightBox.querySelector("video"),
      rewindButton = lightBox.querySelector(".rewind-button"),
      playButton = lightBox.querySelector(".play-button"),
      resizeButton = lightBox.querySelector(".resize-button"),
      pauseButton = lightBox.querySelector(".pause-button"),
      closeLightBox = lightBox.querySelector(".lightbox-close"),
      currentHouseName = document.querySelector("h1"),
      houseDescription = document.querySelector(".house-info"),
      imageContainer = document.querySelector("#houseImages");

      let houseName,
          newSource,
          targetSource;

      const houseData = [
      ["Stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`],

      ["Baratheon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.
        House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a
        rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron
        Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.`],

      ["Lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.

        The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory
        overlooking the Sunset Sea which has had habitations and fortifications built into it over the 
        millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new 
        royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's 
        Landing, the traditional seat of the royal family.`],

      ["Tully",`House Tully of Riverrun is an exiled Great House of Westeros. 
      Its most senior member carried the title of Lord of Riverrun and Lord 
      Paramount of the Trident, until the Red Wedding. The current head is Lord 
      Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout
       on a red and blue background. Their house words are "Family, Duty, Honor."`],

      ["GreyJoy",`House Greyjoy of Pyke is one of the Great Houses of Westeros.
       It rules over the Iron Islands, a harsh and bleak collection of islands
        off the west coast of Westeros, from the castle at Pyke. The head of 
        the house is the Lord Reaper of Pyke.
        House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God. 
        `],
      ["Arryn",`House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority.`]
      ];

      function animateBanners(){
        let offsetWidth = 600;

        multiplier = this.dataset.offset;
        newPosition = offsetWidth * multiplier;

        //debugger;

        imageContainer.style.right = `${newPosition}px`;

        houseName = this.className.split(" ")[1];

        newSource = houseName.charAt(0).toUpperCase() + houseName.slice(1);

        targetSource = `video/House-${newSource}.mp4`;
      }

  function showLightbox() {
    lightBox.classList.add("show-lightbox");
    document.querySelector("body").classList.add("no-scroll");
    houseVideo.src = targetSource;
    houseVideo.load();
    houseVideo.play();
  }

  function changeInfo(){
    currentHouseName.textContent = `House ${houseData[this.dataset.offset][0]}`;
    houseDescription.textContent = `House ${houseData[this.dataset.offset][1]}`;
  }

  function hideLightBox() {
    lightBox.classList.remove("show-lightbox");
    document.querySelector("body").classList.remove("no-scroll");

    houseVideo.pause();
    houseVideo.currentTime = 0;
    
  }


  // //animate baners on a click
  sigilButtons.forEach(button => button.addEventListener("click", animateBanners));
  sigilButtons.forEach(button => button.addEventListener("click", changeInfo));
    document.querySelector(".buttons").addEventListener("mouseover", function(){
    document.querySelector(".buttons").style.opacity= "1";
  });

    document.querySelector(".buttons").addEventListener("mouseleave", function(){
    document.querySelector(".buttons").style.opacity = "0";
  });

  imageContainer.addEventListener("transitionend", showLightbox);
  houseVideo.addEventListener("ended", hideLightBox);
  closeLightBox.addEventListener("click", hideLightBox);

})();
