# React  ![React](.img/logo.png)

# Tabla de contenidos
- [Extensiones para VS code y el navegador](#extensiones-para-vs-code-y-el-navegador)
- [Listado de atajos con la extension VS code](#listado-de-atajos-con-la-extension-vs-code)
- [Creacion de un proyecto](#creacion-de-un-proyecto)
- [Componentes](#componentes)
- [Variables](#variables)
- [Condicionales y bucles en JSX](#condicionales-y-bucles-en-jsx)
- [Comunicacion entre componentes (props, PropTypes)](#comunicacion-entre-componentes-props-proptypes)
  - [Validacion de props (PropTypes)](#validacion-de-props-proptypes)
- [Eventos](#eventos)

# Extensiones para VS code y el navegador
Podemos instalar extensiones para mejorar el funcionamienot de React en nuestro entorno de desarrollo
- **[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es)**
- **[ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)**

# Listado de atajos con la extension VS code
  - rafc => Creacion de la estrucutra basica de un componente


# Creacion de un proyecto
Para poder trabajar con React, dependemos de noje.js asi que tendremos que instalarlo.   
Una vez hayamos instalado node.js nos dirijimos a una terminal
```bash
npx create-react-app proyecto
```
Si nos da algun fallo es posible que tengamos que actualizar npm 
```bash
npm install -g npm
```
Podemos iniciar el proyecto
```bash
npm start
```

# Componentes 
Un componente es una parte de la aplicacion, para ello creamos un directorio en src, donde almacenaremos los componentes que vayamos creando, lo podemos llamar componentes, y dentro de el creamos un archivo en, en mi caso lo llamare MiComponete.js (Debe ir en mayuscula siempre)
```jsx
  // Funcion del compoennt
const MiComponente = () => {
    return <p>Este es mi primer componente</p>
};

  // Exportamos el componete
export default MiComponente;
```
Si tenemos instalada la extension que he comentado anteriormente, podemos crear un componente de una manera mucha mas sencilla, con el atajo rafc  
Es decir creamos un archivo que sera nuestro componente y en el escribirmos rafc y nos generara la estrcutrua basica de un componente
```javascript
import React from 'react'

export const SegundoComponente = () => {
  return (
    <div>SegundoComponente</div>
  )
}

```
Luego cargamos el componente en el App.js
```jsx
import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Primer proyecto</p>
        
        {/* Cargar el primer componente */}
        <MiComponente />
      </header>

    </div>
  );
}

export default App;
```
Si en un componente queremos añadir varias etiquetas HTML, que seria lo normal, tenemos varias formas de hacerlo, podemos usar un div, o un fragmento de JSX "<>"  
```jsx
const MiComponente = () => {
    return (
        <> {/* Podemos usar un <div> en vez del fragmento <></> */}
            <h2>Componente creado</h2>
            <p>Este es mi primer componente</p>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
            </ul>
        </div>
    );
};
```

# Variables
Podemos usar variables en los componentes
```jsx
const MiComponente = () => {

    const nombre = "Jose";
    let web = "www.jose.es";

    return (
        <>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: {nombre}</li>
                <li>Web: {web}</li>
            </ul>
        </>
    );
};
```
De una forma algo mas compleja, podemos usar tambien un objeto para almacenar las variables
```jsx
const MiComponente = () => {

    let usuario = {
        nombre: "Jose",
        apellidos: "Almiron Lopez",
        web: "www.jose.es"
    }

    return (
        <>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: {usuario.nombre}</li>
                <li>Apellidos: {usuario.apellidos}</li>
                <li>Web: {usuario.web}</li>
            </ul>
        </>
    );
};
```

# Condicionales y bucles en JSX
Dentro de JSX para recorrer y mostrar un elemento, tengo que tener acceso a los indices y para ello es mucho mas recomendable usar un map
```jsx
export const SegundoComponente = () => {

    const libros = ["Harry Potter", "Juego de Tronos", "Clean Code"];

    return (
        <div className='segundo-componente'>
            <h1>Listado de libros</h1>
            <ul>
              {
                  libros.map((libro, indice) => {
                      return <li key={indice}>{libro}</li>
                  })
              }
            </ul>
        </div>
    )
}
```
Si queremos un condicional para mostrar un mensaje en el caso de que no existan datos en el elemento que estamos reccoriendo
```jsx
export const SegundoComponente = () => {

    // const libros = ["Harry Potter", "Juego de Tronos", "Clean Code"];
    const libros = [];

    return (
        <div className='segundo-componente'>
            <h1>Listado de libros</h1>
            {libros.length >= 1 ? (
                <ul>
                    {
                        libros.map((libro, indice) => {
                            return <li key={indice}>{libro}</li>
                        })
                    }
                </ul>
                ) : ( <p>No hay libros</p>)
            }
        </div>
    )
}
```

# Comunicacion entre componentes (props, PropTypes)
Podemos pasar variableso o datos de un componente a otro por medio de las props
```jsx
function App() {

  const ficha_medica = {
    altura: "180cm",
    grupo: "H+",
    estado: "Bueno",
    alergias: "Ninguna"
  }

  return (
    <div className="App">
      <header className="App-header">
        <TercerComponente nombre="Jose" apellidos="Almiron" ficha={ficha_medica} />
      </header>
    </div>
  );
}
```
De esta forma tan sencilla podemos usar las props para enviar datos de un componente a otro
```jsx
export const TercerComponente = (props) => {
  return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        <ul>
            <li>{ props.nombre }</li>
            <li>{ props.apellidos }</li>
            <li>{ props.ficha.estado }</li>
        </ul>
    </div>
  )
}
```
Si queremos evitar tener que estar repitiendo "props" cada vez que llamemos a una variable, podemos usar la desestructuracion de javascript de la siguiente manera quedaria mucho mas claro
```jsx
export const TercerComponente = ({nombre, apellidos, ficha}) => {
  return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        <ul>
            <li>{ nombre }</li>
            <li>{ apellidos }</li>
            <li>{ ficha.estado }</li>
        </ul>
    </div>
  )
}
```

## Validacion de props (PropTypes)
Cuando hacemos uso de las props para comunicar componentes, tenemos la posbilidad de validar esas props y poner ciertos filtros, es decir que si tengo nombre asegurarme de que este sea un STring  
Podemos consultar la documentacion de [PropTypes](https://legacy.reactjs.org/docs/typechecking-with-proptypes.html)
```jsx
import React from 'react'
import PropTypes from 'prop-types'; // Esta seria la importacion

export const TercerComponente = ({nombre, apellidos, ficha}) => {
  return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        <ul>
            <li>{ nombre }</li>
            <li>{ apellidos }</li>
            <li>{ ficha.estado }</li>
        </ul>
    </div>
  )
}

  // De esta forma realizamos la validacion de las props, y si son requeridas
TercerComponente.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellidos: PropTypes.string.isRequired,
  ficha: PropTypes.object
}
```
Con PropsTypes podemos tambien asignar valores por defecto
```jsx
TercerComponente.propTypes = {
  // ---
}

  // Asignamos nombre y apellidos con valores por defecto, en el caso de que no reciban ningun dato
TercerComponente.defaultProps = {
  nombre: "Alberto",
  apellidos: "Martinez"
}
```

# Eventos
En react tambien tenemos los eventos que estamos acostumbrados a usar en javascript, aqui te pongo un ejemplo de los mas comunes
```jsx
import React from 'react'

export const EventosComponentes = () => {

    const handleClick = (e, nombre) => {
        alert("Has dado click al boton " + nombre)
    }

    const handleDoubleClick = () => {
        alert("Has dado doble click")
    }

    const handleEnter = (e, accion) => {
        alert(`Has ${accion} a la caja con el mouse`)
    }

    const handleFocus = e => {
        console.log("Estas dentro del input, mete tu nombre")
    }

    const handleBlur = e => {
        console.log("Estas fuera del input")
    }

    return (
        <div>
            <h1>Eventos en React</h1>
            <p>
                {/* Evento click */}
                <button onClick={e => handleClick(e, "Jose")}>Dame click!</button>
            </p>
            <p>
                {/* Evento doble click */}
                <button onDoubleClick={handleDoubleClick}>Dame doble click!</button>
            </p>
            <div id='caja' 
                onMouseEnter={e => handleEnter(e, "entrado")} 
                onMouseLeave={e => handleEnter(e, "salido")}>
                {/* Evento onMouserEnter onMouseLeave */}
                Pasa por encima!!
            </div>
            <p>
                {/* Evento onFcous onBlur */}
                <input type='text' 
                    onFocus={handleFocus} 
                    onBlur={handleBlur}
                    placeholder='introduce tu nombre' />
            </p>
        </div>
    )
}

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
```jsx

```
