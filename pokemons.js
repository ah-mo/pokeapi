
const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
let url;

//Search Form
const searchTerm = (document.querySelector('.search'));
// var newSearchTerm = searchTerm.toString();
// var newSearchTerm2 = newSearchTerm.toLocaleLowerCase();
// var newSearchTerm3 = newSearchTerm2.toObject();
// var pokemonToSearch = newSearchTerm.toLowerCase();
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//Results section
const section = document.querySelector('section');
const pokename = document.querySelector('card-header');

//Event Listeners
searchForm.addEventListener('submit', fetchResults); 
submitBtn.addEventListener('click', cardType); 
// previousBtn.addEventListener('click', previousPage);

//Retriving the data, accessing a REST API
function fetchResults(e){
    e.preventDefault();
    url = baseURL + searchTerm.value;
    console.log("URL:", url);
    console.log(typeof(searchTerm))
    fetch(url)
        .then(function(result) {
            return result.json();
        }).then(function(json) {
            console.log(json)
            let type = json.types[0].type.name;
            console.log(type);
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
    // if (type = 'electric'){
    //     pHeader.setAttribute('class', 'bg-warning')
    // } else {
    //     pHeader.setAttribute('class', '')
    // }
    // if (type = 'grass'){
    //     pHeader.setAttribute('class', 'bg-success')
    // } else if (type = 'water') {
    //     pHeader.setAttribute('class', 'bg-primary')
    // } else if (type = 'fire') {
    //     pHeader.setAttribute('class', 'bg-danger')
    // } else if (type = 'electric') {
    //     pHeader.setAttribute('class', 'bg-warning')
    // } else {}
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

//Force search-term to be lower case because if the name isn't all lowercase, it returns 404 error
function forceLower(strInput) 
{
strInput.value=strInput.value.toLowerCase();
}

//Determine Pokemon type to set card color
function cardType(){
    if (type === 'grass'){
        pHeader.style.color = 'green';
    } else if (type === 'water') {
        pHeader.setAttribute('class', 'bg-primary')
    } else if (type === 'fire') {
        pHeader.setAttribute('class', 'bg-danger')
    } else if (type === 'electric') {
        document.getElementsByClassName('card-header').style.backgroundColor = 'yellow !important'
    } else {}
};