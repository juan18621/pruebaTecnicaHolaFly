
const base_url = 'http://localhost:4567'

const getEndPoints = {
    "character": 'getPeople',
    "planet": 'getPlanets',
}
const createEndPoints = {
    "character": 'people',
    "planet": 'planet'
}

document.addEventListener("DOMContentLoaded", async (event) => {
    toggleSpinner("character", true)
    toggleSpinner("planet", true)

    setTimeout(async () => {
        const hyperSpace = document.querySelector('.hyperspace')
        hyperSpace.remove()
        setButtons()
        getItemsDB("character");
        getItemsDB("planet");
    }, 6000);
});


setButtons = ()=> {

    setButtonListener('searchCharacter', () => {
        const characterInput = document.getElementById('characterInput')
        if(characterInput.value){
            getItemById(characterInput.value, "character");
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
    const character = await (await fetch(`${base_url}/hfswapi/${getEndPoints[identifier]}/`)).json()
    toggleSpinner(identifier, false)
    renderItems(character, identifier)

}

renderItems =  (items, identifier)=> {
    const itemsContainer = document.getElementById(identifier);
    itemsContainer.innerHTML = ''
    items.forEach(item => {
        const card = document.createElement('div')
        card.classList = 'card';
        card.innerHTML = `
        <h1 class="font-size--24">${item?.name}</h1>
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
            card.innerHTML += `<p>Item found at swapi <br> <a id="create${identifier}">Create it at database?</a></p>`
            setButtonListener(`create${identifier}`, () => {
                
                createItem(item, identifier);
                
            });
        }
    });
}

createItem = async (entity, identifier) => {
    toggleSpinner(identifier, true)
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
    const response = await (await fetch(`${base_url}/hfswapi/getPeople/${id}`)).json();
    toggleSpinner(identifier, false)
    if(!response[identifier]){
        return
    }
    if(response.foundAtSwapi){
        response[identifier].foundAtSwapi = true
    }
    renderItems([response[identifier]], identifier)
}






