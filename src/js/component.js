import '../css/component.css';

export const saludar = (nombre) => {
    console.log('Hola Mundillo')
    const h1 = document.createElement('h1')
    h1.innerText = `Hola soy ${nombre}`
    document.body.append(h1)

} 