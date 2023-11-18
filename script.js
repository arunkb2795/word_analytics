const textAreaEl = document.querySelector(".textarea");

const numberOfCharactersEl = document.querySelector(
  ".stat__number--characters"
);
const numberOfTwitterCharactersEl = document.querySelector(
  ".stat__number--twitter"
);

const numberOfFacebookCharactersEl = document.querySelector(
  ".stat__number--facebook"
);

const numberOfWordsEl = document.querySelector(".stat__number--words");

textAreaEl.addEventListener("input", (e) => {
  //Basic input validations
  if (textAreaEl.value.includes("<script>")) {
    alert("You can't use a <script> tag in your text!");
    textAreaEl.value = textAreaEl.value.replace("<script>", "");
  }

  const numberOfCharacters = textAreaEl.value.length;
  let numberOfWords = textAreaEl.value.split(" ").length;
  if (textAreaEl.value.length === 0) {
    numberOfWords = 0;
  }
  const numberOfTwitterCharacterLeft = 280 - Number(numberOfCharacters);
  const numberOfFacebookCharacterLeft = 2200 - Number(numberOfCharacters);

  if (numberOfTwitterCharacterLeft < 0) {
    //adding a red color to the limited number of Twitter characters
    numberOfTwitterCharactersEl.classList.add("stat__number--limit");
  } else {
    numberOfTwitterCharactersEl.classList.remove("stat__number--limit");
  }

  if (numberOfFacebookCharacterLeft < 0) {
    numberOfFacebookCharactersEl.classList.add("stat__number--limit");
  } else {
    numberOfFacebookCharactersEl.classList.remove("stat__number--limit");
  }

  numberOfCharactersEl.textContent = numberOfCharacters;

  numberOfTwitterCharactersEl.textContent = numberOfTwitterCharacterLeft;

  numberOfFacebookCharactersEl.textContent = numberOfFacebookCharacterLeft;
  numberOfWordsEl.textContent = numberOfWords;
});
