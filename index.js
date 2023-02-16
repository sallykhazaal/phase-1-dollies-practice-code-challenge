let dollNav = document.querySelector("#doll-nav");
let dollName = document.querySelector("#doll-name");
let dollDescription = document.querySelector("#doll-description");
let dollPhoto = document.querySelector("#doll-image");
let dollLikes = document.querySelector("#num-of-likes");
let form = document.querySelector("#add-doll-form");
let button = document.querySelector("#likes-btn");
let newDoll;

fetch("http://localhost:3000/dollies")
  .then((res) => res.json())
  .then((dolls) => dolls.forEach((doll) => addDolls(doll)));

function addDolls(doll) {
  let dollImages = document.createElement("img");
  dollImages.src = doll.photo;
  dollNav.append(dollImages);
  dollImages.addEventListener("click", () => addInfo(doll));
  newDoll = doll;
}

function addInfo(doll) {
  dollName.textContent = doll.name;
  dollDescription.textContent = doll.description;
  dollPhoto.src = doll.photo;
  dollLikes.textContent = doll.likes;
}

button.addEventListener("click", () => {
  dollLikes.textContent++;
});

form.addEventListener("submit", (e) => addNewDoll(e));

function addNewDoll(e) {
  e.preventDefault();
  let newDoll = {
    name: e.target["new-doll-name"].value,
    photo: e.target["new-doll-image"].value,
  };
  addDolls(newDoll);
  e.target.reset();
}
