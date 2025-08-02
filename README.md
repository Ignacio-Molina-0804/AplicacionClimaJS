# Aplicación de Clima en JavaScript

Esta es una aplicación web sencilla que permite consultar el clima actual de cualquier ciudad del mundo utilizando la API de OpenWeatherMap. El usuario ingresa el nombre de una ciudad y la aplicación muestra información relevante como la temperatura, la humedad, la descripción meteorológica y el país correspondiente.

## Demo

Puedes ver una versión finalizada aquí:  
[APLICACION DE CLIMA TRABAJO FINALIZADO](https://aplicacion-clima-javascript.netlify.app/)

---

## ¿Cómo funciona la aplicación?

1. **Entrada de ciudad:**  
   El usuario escribe el nombre de una ciudad en el campo de texto y pulsa el botón "Buscar".

2. **Petición a la API:**  
   Al hacer clic en el botón, la aplicación realiza una solicitud a la API de OpenWeatherMap usando la ciudad ingresada y una clave de API.

3. **Procesamiento de datos:**  
   Cuando la API responde, la aplicación extrae los datos relevantes (nombre de la ciudad, país, temperatura, humedad y descripción del clima).

4. **Visualización:**  
   Los datos se muestran dinámicamente en la página, debajo del formulario de búsqueda.

---

## Estructura de archivos

- `index.html`: Estructura básica de la página y elementos de entrada/salida.
- `style.css`: Estilos para una presentación agradable y centrada.
- `script.js`: Lógica principal de la aplicación, manejo de eventos y comunicación con la API.

---

## Instalación y uso

1. **Clona o descarga este repositorio.**
2. **Consigue una clave de API gratuita en [OpenWeatherMap](https://openweathermap.org/).**
3. **Reemplaza la clave de ejemplo en `script.js` por la tuya propia:**
   ```javascript
   let APIKey = 'TU_API_KEY_AQUI';
   ```
4. **Abre `index.html` en tu navegador.**
5. **Ingresa el nombre de una ciudad y haz clic en "Buscar".**

---

## Fragmento principal del código

```javascript
// Al hacer clic en el botón, obtiene la ciudad y llama a la función principal
document.getElementById('botonBusqueda').addEventListener('click', () => {
    const city = document.getElementById('ciudadEntrada').value;
    if (city) {
        fetchDatosClima(city); 
    }
})

// Solicita los datos del clima a la API
function fetchDatosClima(city) {
    fetch(`${URLBase}?q=${city}&appid=${APIKey}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
}

// Muestra los datos en pantalla
function mostrarDatosClima(data) {
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';
    // Extrae y muestra los datos relevantes...
}
```

---

## Personalización

- Puedes modificar los estilos en `style.css` para cambiar la apariencia.
- Si deseas mostrar más información (como el icono del clima), puedes ampliar la función `mostrarDatosClima`.

---

## Créditos

- Curso original: [JavaScript Desde Cero por Sergie Code](https://youtu.be/N8Xt5rP_DUo)
- API: [OpenWeatherMap](https://openweathermap.org/)

---

¡Listo! Ahora tienes una aplicación de clima funcional y personalizable hecha con JavaScript