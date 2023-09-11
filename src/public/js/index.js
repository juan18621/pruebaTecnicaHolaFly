
const base_url = 'http://localhost:4567'

const getEndPoints = {
    "character": 'getPeople',
    "planet": 'getPlanets',
    "log": 'getLogs',
}
const getByIdEndPoints = {
    "character": 'getPeople',
    "planet": 'getPlanet',
}
const createEndPoints = {
    "character": 'people',
    "planet": 'planet'
}

document.addEventListener("DOMContentLoaded", async (event) => {
    toggleSpinner("character", true)
    toggleSpinner("planet", true)
    toggleSpinner("log", true)

    setTimeout(async () => {
        const hyperSpace = document.querySelector('.hyperspace')
        hyperSpace.remove()
        setButtons()
        getItemsDB("character");
        getItemsDB("planet");
        getItemsDB("log");
    }, 6000);
});


setButtons = ()=> {

    setButtonListener('searchCharacter', () => {
        const characterInput = document.getElementById('characterInput')
        if(characterInput.value){
            getItemById(characterInput.value, "character");
        }
    });
    setButtonListener('searchPlanet', () => {
        const planetInput = document.getElementById('planetInput')
        if(planetInput.value){
            getItemById(planetInput.value, "planet");
        }
    });


}

toggleSpinner = (container, loading) => {
    const containerElement = document.getElementById(container);

    if(loading){
        containerElement.innerHTML = `<div class="spinner" id="spinner"></div>`
    }else{
        containerElement.innerHTML = ``
    }
}

setButtonListener = (id, callback)=> {
    const button = document.getElementById(id)
    button.addEventListener('click', callback)
}


getItemsDB= async (identifier)=> {
    toggleSpinner(identifier, true)
    const items = await (await fetch(`${base_url}/hfswapi/${getEndPoints[identifier]}/`)).json()
    toggleSpinner(identifier, false)
    renderItems(items, identifier)

}

renderItems =  (items, identifier)=> {
    const itemsContainer = document.getElementById(identifier);
    itemsContainer.innerHTML = ''
    items.forEach(item => {
        const card = document.createElement('div')
        card.classList = 'card';
        card.innerHTML = `
        <h1 class="font-size--24">${item?.name || item?.action}</h1>
        ${Object.keys(item).map(key =>{
            if(key === 'isSwapi'){
                return ''
            }
            return `<p>${key}: ${item[key]}</p>`
        }).join('')
        }
        `

 
        itemsContainer.appendChild(card)

        if(item.foundAtSwapi){
            card.innerHTML += `<p class="margin-top--16 text-color--secondary">${identifier} found at swapi <br> <a id="create${identifier}">Create it at database?</a></p>`
            setButtonListener(`create${identifier}`, () => {
                
                createItem(item, identifier);
                
            });
        }
    });
}

createItem = async (entity, identifier) => {
    toggleSpinner(identifier, true)
    delete entity.foundAtSwapi
    resp = await fetch(`${base_url}/hfswapi/${createEndPoints[identifier]}/`, {
        method: "POST",
        body: JSON.stringify(entity),
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    })
    toggleSpinner(identifier, false)
    getItemsDB(identifier);
}

getItemById = async (id, identifier) => {
    if(!id){
        return
    }
    
    toggleSpinner(identifier, true)
    const response = await (await fetch(`${base_url}/hfswapi/${getByIdEndPoints[identifier]}/${id}`)).json();
    toggleSpinner(identifier, false)
    if(!response[identifier]){
        return
    }
    if(response.foundAtSwapi){
        response[identifier].foundAtSwapi = true
    }
    renderItems([response[identifier]], identifier)
}






