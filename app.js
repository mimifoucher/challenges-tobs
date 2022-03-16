const dateNumber = document.getElementById('date--day__number');
const valueContainer = document.getElementById('table--container');
const tableApi = document.getElementById('table--api');

//Api - trae valores de Crytomonedas
//document.addEventListener('DOMContentLoadead', catchValuesApi);
let valueArray = [];
//async function catchValuesApi() {
// try {
//   const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
//   const answer = await response.json();
// } catch (error) {
//    console.log(error);
// }
//}
const addCrytpoTable = data => {
    let prueba = ''
    for (let i = 0; i < data.length; i++) {
        prueba += `<tr><td>${data[i].name}</td></tr>`
    }
    document.getElementById('data').innerHTML = prueba;
}

fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
    .then(response => response.json())
    .then(data => valueArray.push(data))

if (valueArray.length > 1) {
    addCrytpoTable(valueArray);
}

// Funcion para que aparezca fecha del día
const getDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleDateString();
};
getDate();

//crea el nuevo valor de la lista
const addNewValue = event => {
    event.preventDefault();
    const value = event.target.newValue.value;
    const crypto = event.target.newCrypto.value;
    const cryptoBox = crypto + " " + value;
    if (value + crypto !== '') {
        console.log(value + crypto);
        const valueBox = document.createElement('tr');
        console.log(valueBox);
        valueBox.classList.add('table--box');
        valueBox.addEventListener('click', addValueBox);
        valueBox.textContent = cryptoBox;
        valueContainer.prepend(valueBox); //coloca en orden los valores
        event.target.reset(); //elimina los cambios
    } else {

    }
}

//suma cada valor a la lista
const addValueBox = event => {
    event.target.classList.toggle('show');
}