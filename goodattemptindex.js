const list = document.querySelector("#doll-nav");
const form = document.querySelector("#add-doll-form");
const likesButton = document.querySelector("#likes-btn");
let dollLikes = document.querySelector("#num-of-likes");
// let currentDoll

//fetching data
fetch("http://localhost:3000/dollies")
  .then((res) => res.json())
  .then((dolls) => dolls.forEach((doll) => renderDolls(doll)));

let dollNav = document.querySelector("#doll-nav");

fetch("http://localhost:3000/dollies")
  .then((res) => res.json())
  .then((dolls) => dolls.forEach((doll) => renderDolls));

//function that add all the doll images to the menu on top
function renderDolls(doll) {
  let dollImage = document.createElement("img"); //Where
  dollImage.src = doll.photo; //What
  list.append(dollImage); //Append (if the where was create elemnent instead of querySelector)

  dollImage.addEventListener("click", () => renderInfo(doll));
}

//function that displays detailed info about the doll
function renderInfo(doll) {
  let dollName = document.querySelector("#doll-name");
  let dollImage = document.querySelector("#doll-image");
  let dollDescription = document.querySelector("#doll-description");

  dollName.textContent = doll.name;
  dollImage.src = doll.photo;
  dollDescription.textContent = doll.description;
  dollLikes.textContent = doll.likes;
  currentDoll = doll;
}

function handleSubmit(e) {
  e.preventDefault();

  console.log(e.target["new-doll-name"].value);

  //creating new doll
  const newDoll = {
    name: e.target["new-doll-name"].value,
    photo: e.target["new-doll-image"].value,
    likes: 0,
  };

  //calling functuion to add doll to the menu
  renderDolls(newDoll);

  //resetting the form
  e.target.reset();
}

//EVENT LISTENERS
form.addEventListener("submit", (e) => handleSubmit(e));
likesButton.addEventListener("click", () => {
  // const newLikes = currentDoll.likes++
  // dollLikes.textContent = `${newLikes} Likes`
  dollLikes.textContent++;
});
