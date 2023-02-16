let dolliesList = document.querySelector("#doll-nav");
let dolliesDisplay = document.querySelector("#doll-display");
let dolliesName = document.querySelector("#doll-name");
let dolliesDescription = document.querySelector("#doll-description");
let dolliesPhoto = document.querySelector("#doll-image");
let dolliesLikes = document.querySelector("#num-of-likes");
let form = document.querySelector("#add-doll-form");
let newDollName = document.querySelector("#new-doll-name");
let newDollImage = document.querySelector("#new-doll-image");
let button = document.querySelector("#likes-btn");
let theDollsList;

fetch("http://localhost:3000/dollies")
  .then((res) => res.json())
  .then((dollies) => {
    dollies.forEach((dollie) => addDollies(dollie));
  });

function addDollies(dollies) {
  dollies.forEach((dollie) => {
    let dolliesImages = document.createElement("img");
    dolliesImages.src = dollie.photo;
    dolliesList.append(dolliesImages);
    dolliesImages.addEventListener("click", () => {
      dolliesName.textContent = dollie.name;
      dolliesDescription.textContent = dollie.description;
      dolliesPhoto.src = dollie.photo;
      dolliesLikes.textContent = dollie.likes;
      dolliesList = theDollsList;

      button.addEventListener("click", () => {
        /*theDollsList.likes++;
        dolliesLikes.textContent = theDollsList.likes;*/
        dolliesLikes.textContent++;
      });
    });
  });
}

// button.addEventListener("click", () => {
//   theDollsList.likes++;
//   dolliesLikes.textContent = theDollsList.likes;
// });

// form.addEventListener("submit", (e) =>
//   e.preventDefault();

//   newDollName.textContent = e.target["new-doll-name"].value;
//   newDollImage.src = e.target["new-doll-image"];
//   e.target.reset();
// });
