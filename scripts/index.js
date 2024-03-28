const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];
/* -----------------------------------------------------------------------*/
/*                               elements                                 */
/* -----------------------------------------------------------------------*/
const profileEditBtn = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseBtn = document.querySelector("#profile-close-button");
const profileName = document.querySelector("#profile-title");
const profileDescr = document.querySelector("#profile-descr");
const profileTitleInput = document.querySelector("#modal-form-title");
const profileDescrInput = document.querySelector("#modal-form-descr");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__card-list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/* -----------------------------------------------------------------------*/
/*                               Functions                                */
/* -----------------------------------------------------------------------*/
function closePopup() {
  profileEditModal.classList.remove("modal__opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardImageAltEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__description-title");
  cardImageEl.src = cardData.link;
  cardImageAltEl.content = cardData.name;
  cardTitleEl.textContent = cardData.name;
  return cardElement;
}

/* -----------------------------------------------------------------------*/
/*                               Event Handlers                           */
/* -----------------------------------------------------------------------*/
function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileTitleInput.value;
  profileDescr.textContent = profileDescrInput.value;
  closePopup();
}

/* -----------------------------------------------------------------------*/
/*                               Event Listeners                          */
/* -----------------------------------------------------------------------*/
profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileName.textContent;
  profileDescrInput.value = profileDescr.textContent;
  profileEditModal.classList.add("modal__opened");
});

profileCloseBtn.addEventListener("click", () => {
  profileEditModal.classList.remove("modal__opened");
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.append(cardElement);
});
