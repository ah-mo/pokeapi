
const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
let url;

//Search Form
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//Results Navigation
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//Results section
const section = document.querySelector('section');

//Event Listeners
searchForm.addEventListener('submit', fetchResults); 
// nextBtn.addEventListener('click', nextPage); 
// previousBtn.addEventListener('click', previousPage);

//Retriving the data, accessing a REST API
function fetchResults(e){
    e.preventDefault();
    url = baseURL + searchTerm.value;
    console.log("URL:", url);
    fetch(url)
        .then(function(result) {
            return result.json();
        }).then(function(json) {
            console.log(json)
            displayResults(json);
        });
};

function displayResults(json) {
    while (section.firstChild) {//begins while loop (while loops result always have to come back true then stop when false(y)) to check if section has a firstChild element
        section.removeChild(section.firstChild);//if it does remove the firstChild, this will clear the section to display the next results
    }
    let pokemon = json.name;
    let pNum = json.id;
    let pImgSrc = json.sprites.front_default;
    let type = json.types[0].type.name;
    // if (type = ) {

    // };
    let ht = json.height;
    let wt = json.weight;
    console.log(pokemon);
    console.log(type);
    console.log(ht);
    console.log(wt);
    let card = document.createElement('div');
    card.setAttribute('class', 'card bg-light mb-3');
    let pHeader = document.createElement('div');
    pHeader.setAttribute('class', 'card-header');
    let pName = document.createElement('h1');
    pName.textContent = `${pokemon} // #${pNum}`;

    let pPic = document.createElement('img');
    pPic.setAttribute('class', 'dexImg')
    pPic.setAttribute('src', pImgSrc);
    
    let pType = document.createElement('p');
    pType.textContent = type;
    let pHt = document.createElement('p');
    pHt.textContent = 'Ht: ' + ht + ' ft.';
    let pWt = document.createElement('p');
    pWt.textContent = 'Wt: ' + wt + ' lb.';
    pHeader.appendChild(pName);
    card.appendChild(pHeader);
    card.appendChild(pPic);
    card.appendChild(pType);
    card.appendChild(pWt); //then creating the heading 
    card.appendChild(pHt);
     //then adding the image
     //then adding the keywords paragraph
    section.appendChild(card);
}
//Button functionality
function nextPage(e){
    console.log('Next button clicked');
    pageNumber++;
    if (pageNumber >= 0) {
        document.querySelector('.prev').style.display = 'block';
    }
    fetchResults(e);
    console.log("Page number:", pageNumber);

}

function previousPage(e){
    
    console.log('Previous button clicked');
    if(pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log("Page:", pageNumber);
    if(pageNumber < 1) {
        document.querySelector('.prev').style.display = 'none';
    }
}