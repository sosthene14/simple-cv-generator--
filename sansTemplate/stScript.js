/*Information from HTML DOCUMENT, this is where information will be insert*/

let names = document.getElementById("name");
let firstName = document.getElementById("first-name");
let adresse = document.getElementById("adresse");
let phone = document.getElementById("telephone");
let email = document.getElementById("email");
let description = document.getElementById("description");
let date = document.getElementById("date");
let born = document.getElementById("naissance");
let experienceStart = document.getElementById("experience-start");
let experienceEnd = document.getElementById("experience-end");
let experiencePoste = document.getElementById("experience-poste");
let experienceSociety = document.getElementById("experience-society");
let experienceDetails = document.getElementById("experience-details");
let experienceWord = document.getElementById("experience-word");
let educationWord = document.getElementById("education-word");
let competenceWord = document.getElementById("competence-word");
let educationDate = document.getElementById("education-date");
let diplome = document.getElementById("diplome");
let ecole = document.getElementById("ecole");
let diplomeDetails = document.getElementById("diplome-details");
let comptence1 = document.getElementById("competence1");
let comptence2 = document.getElementById("competence2");
let comptence3 = document.getElementById("competence3");
let comptence4 = document.getElementById("competence4");

/*Information from HTML DOCUMENT, this is where we will get informations*/

let nameInput = document.getElementById("name-input");
let firstNameInput = document.getElementById("first-name-input");
let adresseInput = document.getElementById("adresse-input");
let phoneInput = document.getElementById("telephone-input");
let emailInput = document.getElementById("email-input");
let descriptionInput = document.getElementById("description-input");
let dateInput = document.getElementById("date-input");
let bornInput = document.getElementById("naissance-input");
let experienceStartInput = document.getElementById("experience-start-input");
let experienceEndInput = document.getElementById("experience-end-input");
let experiencePosteInput = document.getElementById("experience-poste-input");
let experienceSocietyInput = document.getElementById(
  "experience-society-input"
);
let experienceDetailsInput = document.getElementById(
  "experience-details-input"
);
let educationDateInput = document.getElementById("education-date-input");
let diplomeInput = document.getElementById("diplome-input");
let ecoleInput = document.getElementById("ecole-input");
let educationDetailsInput = document.getElementById("education-details-input");
let comptence1Input = document.getElementById("competence1-input");
let comptence2Input = document.getElementById("competence2-input");
let comptence3Input = document.getElementById("competence3-input");
let comptence4Input = document.getElementById("competence4-input");

/*Let's get some divs in order to do some annimations */

let personnalInformationDiv =
  document.getElementsByClassName("first-inputs-block")[0];
let descriptionDiv = document.getElementById("description-div");
let experienceDiv = document.getElementById("experiences-div");
let educationDiv = document.getElementById("education-div");
let competenceDiv = document.getElementById("competence-div");
let message1 = "Masquer";

/*Let's get some button*/
let buttonPersonnalInformation = document.getElementById("divs-btn");
buttonPersonnalInformation.textContent = message1;

let experienceCheckBox = document.getElementById("experiences-checkbox");

let buttonDescriptionInformation = document.getElementById("divs-btn-2");
buttonDescriptionInformation.textContent = message1;

let buttonExperienceInformation = document.getElementById("divs-btn-3");
buttonExperienceInformation.textContent = message1;

let buttonEducationInformation = document.getElementById("divs-btn-4");
buttonEducationInformation.textContent = message1;

let buttonCompetence = document.getElementById("divs-btn-5");
buttonCompetence.textContent = message1;

/*Let's store theses informations in order to optimise the code */

let listInformationsToTake = [
  nameInput,
  firstNameInput,
  adresseInput,
  phoneInput,
  emailInput,
  descriptionInput,
  dateInput,
  bornInput,
  experienceStartInput,
  experienceEndInput,
  experiencePosteInput,
  experienceSocietyInput,
  experienceDetailsInput,
  educationDateInput,
  diplomeInput,
  educationDetailsInput,
  ecoleInput,
  comptence1Input,
  comptence2Input,
  comptence3Input,
  comptence4Input,
];
let listWhereToInsertInformation = [
  names,
  firstName,
  adresse,
  phone,
  email,
  description,
  date,
  born,
  experienceStart,
  experienceEnd,
  experiencePoste,
  experienceSociety,
  experienceDetails,
  educationDate,
  diplome,
  diplomeDetails,
  ecole,
  comptence1,
  comptence2,
  comptence3,
  comptence4,
];

/*The event listener function, for getting all input informations and inserting them to corresponding element */

document.addEventListener("input", function (event) {
  for (let i = 0; i < listInformationsToTake.length; i++) {
    listWhereToInsertInformation[i].textContent =
      listInformationsToTake[i].value;
  }
});

function handle(elementToHandle, buttonTextContent, message1, message2) {
  elementToHandle.classList.toggle("hidden");
  if (buttonTextContent.textContent == message1) {
    buttonTextContent.textContent = message2;
  } else {
    buttonTextContent.textContent = message1;
  }
}
/*Show or hide personnal informations div */
function handleInformations() {
  let message2 = "Informations Personnelles";
  handle(
    personnalInformationDiv,
    buttonPersonnalInformation,
    message1,
    message2
  );
}

function handleDescriptionInformation() {
  let message2 = "Decrivez vous";
  handle(descriptionDiv, buttonDescriptionInformation, message1, message2);
}

function handleExperiencesInformations() {
  let message2 = "Experience";
  handle(experienceDiv, buttonExperienceInformation, message1, message2);
}
function handleEducationInformations() {
  let message2 = "Education";
  handle(educationDiv, buttonEducationInformation, message1, message2);
}
function handleCompetenceInformations() {
  let message2 = "Compétences";
  handle(competenceDiv, buttonCompetence, message1, message2);
}
function insertImage() {
  const fileInput = document.getElementById("fileInput");
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    if (file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);

      const image = document.createElement("img");
      image.src = imageUrl;
      image.width = 300;
      const imageContainer = document.getElementById("imageContainer");
      imageContainer.appendChild(image);
    }
  }
}

function restInputs(listElement,listElementShown)
{
for (let i = 0; i < listElement.length; i++)
{
  listElement[i].value = "";
  listElement[i].textContent = "";
}
}

function savePDF() {
  var element = document.getElementById("div-to-save").innerHTML;
  var opt = {
    margin: 1,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().from(element).set(opt).save();
  restInputs(listInformationsToTake)
}

handleCompetenceInformations();
handleDescriptionInformation();
handleEducationInformations();
handleExperiencesInformations();
handleInformations();

// Default export is a4 paper, portrait, using millimeters for units
