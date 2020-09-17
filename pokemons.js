
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
//submitBtn.addEventListener('click', cardType); 
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
    
    let pName = document.createElement('h1');
    pName.textContent = `${pokemon} // #${pNum}`;

    let pPic = document.createElement('img');
    pPic.setAttribute('class', 'dexImg')
    pPic.setAttribute('src', pImgSrc);
    
    let pType = document.createElement('p');
    pType.textContent = type;
    if (pType.textContent == 'electric'){
        pHeader.style.backgroundColor = '#F8D030';
        pType.style.color = '#F8D030';
    } else if (pType.textContent == 'fire') {
        pHeader.style.backgroundColor = '#F08030';
        pType.style.color = '#F08030';
    } else if (pType.textContent == 'grass'){
        pHeader.style.backgroundColor = '#78C850';
        pType.style.color = '#78C850';
    } else if (pType.textContent == 'water') {
        pHeader.style.backgroundColor = '#6890F0';
        pType.style.color = '#6890F0';
    } else if (pType.textContent == 'fighting') {
        pHeader.style.backgroundColor = '#C03028';
        pType.style.color = '#C03028';
    } else if (pType.textContent == 'flying') {
        pHeader.style.backgroundColor = '#A890F0';
        pType.style.color = '#A890F0';
    } else if (pType.textContent == 'poison') {
        pHeader.style.backgroundColor = '#A040A0';
        pType.style.color = '#A040A0';
    } else if (pType.textContent == 'ground') {
        pHeader.style.backgroundColor = '#E0C068';
        pType.style.color = '#E0C068';
    } else if (pType.textContent == 'psychic') {
        pHeader.style.backgroundColor = '#F85888';
        pType.style.color = '#F85888';
    } else if (pType.textContent == 'rock') {
        pHeader.style.backgroundColor = '#B8A038';
        pType.style.color = '#B8A038';
    } else if (pType.textContent == 'ice') {
        pHeader.style.backgroundColor = '#98D8D8';
        pType.style.color = '#98D8D8';
    } else if (pType.textContent == 'bug') {
        pHeader.style.backgroundColor = '#A8B820';
        pType.style.color = '#A8B820';
    } else if (pType.textContent == 'dragon') {
        pHeader.style.backgroundColor = '#7038F8';
        pType.style.color = '#7038F8';
    } else if (pType.textContent == 'ghost') {
        pHeader.style.backgroundColor = '#705898';
        pType.style.color = '#705898';
    } else if (pType.textContent == 'dark') {
        pHeader.style.backgroundColor = '#000';
        pType.style.color = '#000';
        pHeader.style.color = '#fff'
    } else if (pType.textContent == 'steel') {
        pHeader.style.backgroundColor = '#B8B8D0';
        pType.style.color = '#B8B8D0';
    } else if (pType.textContent == 'fairy') {
        pHeader.style.backgroundColor = '#EE99AC';
        pType.style.color = '#EE99AC';
    } else {
        pHeader.style.backgroundColor = '#A8A878';
        pType.style.color = '#A8A878';
    }
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
// function cardType(){
//     if (type === 'grass'){
//         pHeader.style.color = 'green';
//     } else if (type === 'water') {
//         pHeader.setAttribute('class', 'bg-primary')
//     } else if (type === 'fire') {
//         pHeader.setAttribute('class', 'bg-danger')
//     } else if (type === 'electric') {
//         document.getElementsByClassName('card-header').style.backgroundColor = 'yellow !important'
//     } else {}
// };