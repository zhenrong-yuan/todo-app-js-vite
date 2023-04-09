import html from './app.html?raw';


/**
 * Aquí se crea lo que queremos renderizar en pantalla.
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

 // Esta es una función anónima auto invocada. Se va a llamar cuando la función app se llama.
 
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
    })();


}