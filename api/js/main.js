// Get our Ranger Data with Axios

const getData = async () => {
    let response = await axios.get('https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers')
    return response.data
};


// store any class/id selectors in an object to quickly reference later on
const DOM_Elements = {
    ranger_list: '.ranger-list'
};


// Creation of HTML to populate ranger-list with bootstrap list-items
const createList = (id, name) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">${name}</a>`;
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend',html)
}



// Function to Load Data and Display list
const loadData = async () => {
    const power_rangers = await getData();

    //loop through array and create list items forEach Ranger
    power_rangers.forEach( ranger => createList(ranger.id, ranger.name))
};

// Function to Clear all data =from .ranger-list
const clearData = () => {
    document.querySelector(DOM_Elements.ranger_list).innerHTML = '';
}





