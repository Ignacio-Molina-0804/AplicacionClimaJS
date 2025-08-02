let URLBase = 'https://api.openweathermap.org/data/2.5/weather';
let APIKey = '605507acf87117e111e54a3ab5238541';
let kelvinTransform = 273.15;



document.getElementById('botonBusqueda').addEventListener('click', () => {

    const city = document.getElementById('ciudadEntrada').value;
    if (city) {
        fetchDatosClima(city); 
    }

})

function fetchDatosClima(city) {

    fetch(`${URLBase}?q=${city}&appid=${APIKey}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))

}

function mostrarDatosClima(data) {
    console.log(data);
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';
    
    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const humedad = data.main.humidity
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = ciudadNombre;

    const paisTitulo = document.createElement('h3');
    paisTitulo.textContent = `País: ${paisNombre}`;

    const humedadElemento = document.createElement('p');
    humedadElemento.textContent = `Humedad: ${humedad}%`;

    const temperaturaElemento = document.createElement('p');
    temperaturaElemento.textContent = `Temperatura: ${Math.floor(temperatura - kelvinTransform)}°C`;

    const descripcionElemento = document.createElement('p');
    descripcionElemento.textContent = `Descripción: ${descripcion}`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(paisTitulo);
    divDatosClima.appendChild(humedadElemento);
    divDatosClima.appendChild(temperaturaElemento);
    divDatosClima.appendChild(descripcionElemento);
}