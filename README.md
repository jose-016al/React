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
- [Hook](#hook)
  - [Hook useState](#hook-usestate)
  - [Hook useEffect](#hook-useeffect)
    - [Monstar y desmonstar componentes](#monstar-y-desmonstar-componentes)
- [Peticiones Ajax (consultar una API)](#peticiones-ajax-consultar-una-api)
  - [Peticiones con Fetch](#peticiones-con-fetch)
  - [Peticiones con Async y Await](#peticiones-con-async-y-await)
  - [Efectos de carga](#efectos-de-carga)
  - [Capturar y mostar errores](#capturar-y-mostar-errores)
- [Formularios](#formularios)
- [Helpers](#helpers)

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

# Hook
Un Hook es una funcion que te permite enganchar el estado de react y te va a permitir trabajar con el ciclo de vida de los componentes (Es una funcion que cuando pasa algo hace algo)

## Hook useState
Con el useState, podremos gestionar y actualizar el estado de un componente
```jsx
import React, { useState } from 'react'

export const MiPrimerEstado = () => {

                                // Asingmaos un valor por defecto
    const [nombre, setNombre] = useState("Jose Almiron");

        // Desde la funcion llamamos a setNombre que nos permite actualziar el estado del componente
    const cambiarNombre = e => {
        setNombre("Francisco");
    }

    return (
        <div>
            <h3>Componente: MiPrimerEstado</h3>
            <strong className='label'>{nombre}</strong>
            &nbsp; {/* Añade una pequeña separacion */}
            <button onClick={cambiarNombre}>Cambiar</button>
        </div>
    )
}
```
Aqui tenemos un ejemplo mas usando el evento onKeyUp
```jsx
import React, { useState } from 'react'

export const MiPrimerEstado = () => {

                                // Asingmaos un valor por defecto
    const [nombre, setNombre] = useState("Jose Almiron");

        // Desde la funcion llamamos a setNombre que nos permite actualziar el estado del componente
    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    }

    return (
        <div>
            <h3>Componente: MiPrimerEstado</h3>
            <strong className='label'>{nombre}</strong>
            &nbsp; {/* Añade una pequeña separacion */}
            <button onClick={ e => cambiarNombre(e, "Fran") }>Cambiar nombre a Fran</button>
            &nbsp; {/* Añade una pequeña separacion */}
            <input type='text' onKeyUp={ e => cambiarNombre(e, e.target.value) } placeholder='Cambia el nombre' />
        </div>
    )
}
```

## Hook useEffect
El useEffect se utiliza para detectar y responder a cambios en el estado o en las propiedades de un componente (Permite ejecutar codigo cuando ocurren modificaciones en el componente)
```jsx
import React, { useEffect, useState } from 'react'

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Jose Almiron");
    const [fecha, setFecha] = useState("01-01-1998");
    const [contador, setContador] = useState(0);

    const modUsuario = e => {
        setUsuario(e.target.value);
    }

    const cambiarFecha = e => {
        setFecha(Date.now());
    }

        // Solo se ejecuta una vez, solo al cargar el componente
    useEffect(() => {
        console.log("Has cargado el componente PruebasComponent");
    }, []);

        // Se ejecuta solo se cambio el usuario
    useEffect(() => {
        setContador(contador + 1);
        console.log("Has modificado el usuario: " + contador);
    }, [fecha, usuario]);

    return (
        <div>
            <h1>El efecto - Hook useEffect</h1>
            <strong className={ contador >= 10 ? 'label label-green' : 'label' }>{ usuario }</strong>
            <strong>{ fecha }</strong>
            <p>
                <input type='text' onChange={ modUsuario } placeholder='Cambia el nombre' />
                <button onClick={ cambiarFecha }>Cambiar fecha</button>
            </p>
        </div>
    )
}
```
### Monstar y desmonstar componentes 
En este caso veremos como monstar y desmonstar componentes de React, y con esto veremos otro ejemplo del funcionamienot del useEffect
```jsx
import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Jose Almiron");
    const [contador, setContador] = useState(0);

    const modUsuario = e => {
        setUsuario(e.target.value);
    }

        // Se ejecuta solo se cambio el usuario
    useEffect(() => {
        setContador(contador + 1);
        console.log("Has modificado el usuario: " + contador);
    }, [usuario]);

    return (
        <div>
            <h1>El efecto - Hook useEffect</h1>
            <strong className={ contador >= 10 ? 'label label-green' : 'label' }>{ usuario }</strong>
            <p>
                <input type='text' onChange={ modUsuario } placeholder='Cambia el nombre' />
            </p>

            {/* Cuando el usuario sea JOSE se cargara el componente, si se elimina del input se desmontar el componente */}
            { usuario === "JOSE" && <AvisoComponent /> }
        </div>
    )
}
```
Este seria el componente que se monta y desmonta
```jsx
import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        // Cuando el componente se monta
        alert("El componente AvisoComponent esta montado");

        // Cuando el componente se desmonta
        return () => {
            alert("COMPONENTE DESMONTADO");
        }
    }, []); // Se ejecuta una vez porque le paso el array vacio

    return (
        <div>
            <hr />
            <h3>Saludos Jose ¿Que tal estas?</h3>
            <button onClick={e => {
                alert("Bienvenido");
            }}>Mostar alerta</button>

        </div>
    )
}
```

# Peticiones Ajax (consultar una API)
Vamos a ver varias maneras de hacer peticiones s una API desde react

## Peticiones con Fetch
```jsx
import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);

    const getUsuariosAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then(respuesta => respuesta.json())
            .then(
                resultado_final => {
                    setUsuarios(resultado_final.data);
                    console.log(usuarios);
                },
                error => {
                    console.log(error);
                }
            );
    }

    useEffect(() => {
        getUsuariosAjaxPms();
    }, []); // Para evitar que se ejecute siempre que haya un cambio en el componente, le añadimos un array vacio

    return (
        <div>
            <h2>Listado de usuarios via Ajax</h2>
            <ol className='usuarios'>
                {
                    usuarios.map(usuario => {
                        console.log(usuario);
                        return <li key={usuario.id}>{`${usuario.first_name} ${usuario.last_name}`}</li>
                    })
                }
            </ol>
        </div>
    )
}
```

## Peticiones con Async y Await
```jsx
import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);

    const getUsuariosAjazAW = async() => {
        try {
            const peticion = await fetch("https://reffdsaqres.in/api/users345?page=1");
            const {data} = await peticion.json();        

            setUsuarios(data);
        } catch (error) {
            console.log(error.message);
        }
    }


    useEffect(() => {
        getUsuariosAjazAW();
    }, []); // Para evitar que se ejecute siempre que haya un cambio en el componente, le añadimos un array vacio

    return (
        <div>
            <h2>Listado de usuarios via Ajax</h2>
            <ol className='usuarios'>
                {
                    usuarios.map(usuario => {
                        console.log(usuario);
                        return <li key={usuario.id}>{`${usuario.first_name} ${usuario.last_name}`}</li>
                    })
                }
            </ol>
        </div>
    )
}
```

## Efectos de carga
Para el efecto seria tan sencillo como crear un useState, para controlar cuando mostarlo y cuando no, y tener un condicional en el return. En este caso he puesto solo un texto pero podria ponerse una animacion
```jsx
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsuariosAjazAW = () => {
        // Le podemos poner tamibien un diley a la peticion
        setTimeout(async() => {
            const peticion = await fetch("https://reqres.in/api/users?page=1");
            const {data} = await peticion.json();
    
            setUsuarios(data);
            setLoading(false);
        }, 2000);
    }

    useEffect(() => {
        getUsuariosAjazAW();
    }, []); // Para evitar que se ejecute siempre que haya un cambio en el componente, le añadimos un array vacio


    if (loading === true) {
        return (
            <div className='cargando'>Cargando datos...</div>
        )
    } else {
            // Cuando todo va bine
        return (
            <div>
                <h2>Listado de usuarios via Ajax</h2>
                <ol className='usuarios'>
                    {
                        usuarios.map(usuario => {
                            return (
                                <li key={usuario.id}>
                                    <img src={ usuario.avatar } width="20" />
                                    &nbsp;
                                    {`${usuario.first_name} ${usuario.last_name}`}
                                </li>
                            );
                        })
                    }
                </ol>
            </div>
        )
    }

}
```

## Capturar y mostar errores
```jsx
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const getUsuariosAjazAW = () => {
        setTimeout(async() => {
            try {
                const peticion = await fetch("https://reffdsaqres.in/api/users345?page=1");
                const {data} = await peticion.json();
        
                setUsuarios(data);
                setLoading(false);
            } catch (error) {
                console.log(error.message);
                setError(error.message);
            }
        }, 2000);
    }

    useEffect(() => {
        getUsuariosAjazAW();
    }, []); // Para evitar que se ejecute siempre que haya un cambio en el componente, le añadimos un array vacio


    if (error !== "") {
            // Cuando algun error
        return (
            <div className='errores'>{ error }</div>
        )
    } else if (loading === true) {
            // Cuando esta todo cargando
        return (
            <div className='cargando'>Cargando datos...</div>
        )
    } else if (loading === false && error === "") {
            // Cuando todo va bine
        return (
            <div>
                <h2>Listado de usuarios via Ajax</h2>
                <ol className='usuarios'>
                    {
                        usuarios.map(usuario => {
                            return (
                                <li key={usuario.id}>
                                    <img src={ usuario.avatar } width="20" />
                                    &nbsp;
                                    {`${usuario.first_name} ${usuario.last_name}`}
                                </li>
                            );
                        })
                    }
                </ol>
            </div>
        )
    }

}
```

# Formularios
Con el evento onSubmit podemos enviar datos de un formulario y almacenarlos en un estado
```jsx
import React, { useState } from 'react'

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState({});

    const conseguirDatosFormulario = e => {
        e.preventDefault();

        let datos = e.target;
        let usuario = {
            nombre: datos.nombre.value,
            apellidos: datos.apellidos.value,
            genero: datos.genero.value,
            bio: datos.biografia.value
        }
        setUsuario(usuario);
    }

    return (
        <div>
            <h1>Formularios en Reac</h1>

            { usuario.bio && usuario.bio.length >= 1 && (
                <div className='info_usuario label label-gray'>
                    { usuario.nombre } { usuario.apellidos } es un { usuario.genero } y su biografia es esta: <p>{ usuario.bio }</p>
                </div>
            )}

            <form onSubmit={ conseguirDatosFormulario }>
                <input type='text' placeholder='Nombre' name='nombre' />
                <input type='text' placeholder='Apellidos' name='apellidos' />
                <select name='genero'>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea placeholder='biografia' name='biografia'></textarea>

                <input type='submit' value="Enviar" />
            </form>
        </div>
    )
}
```
Sigueineod el ejemplo anterior, podemos hacer que si se modifican los datos del fromulario estos se actualicen de forma dinamica, con un onChange en cada input 
```jsx
    // De esta forma podemos hacer que al modificar un campo del formulario su estado se actualice automaticamanete
    const cambiarDatos = e => {
        let name_del_input = e.target.name;

        setUsuario(estado_previo => {
            return {
                ...estado_previo, 
                [name_del_input]: e.target.value 
            }
        });
    }

    return (
        <div>
            <h1>Formularios en Reac</h1>

            { usuario.bio && usuario.bio.length >= 1 && (
                <div className='info_usuario label label-gray'>
                    { usuario.nombre } { usuario.apellidos } es un { usuario.genero } y su biografia es esta: <p>{ usuario.bio }</p>
                </div>
            )}

            <form onSubmit={ conseguirDatosFormulario }>
                <input type='text' placeholder='Nombre' name='nombre' onChange={ cambiarDatos } />
                <input type='text' placeholder='Apellidos' name='apellidos' onChange={ cambiarDatos } />
                <select name='genero' onChange={ cambiarDatos }>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea placeholder='biografia' name='bio' onChange={ cambiarDatos }></textarea>

                <input type='submit' value="Enviar" />
            </form>
        </div>
    )
```

# Helpers
Los "helpers" en React son funciones o servicios que se pueden reutilizar en distintos componentes para evitar la repeticion de codigo y mejorar la modularidad de la aplicacion. Estas funciones auxiliares encapsulan logica común o tareas específicas para hacer que el codigo sea mas limpio y mantenible  
Para trabajar con ellos creamos un nuevo directorio en src, llamado helpers, y un ejemplo de una funcionalidad que puede ser reutilizable es la gestion del localStorage
```jsx
export const guardarEnStorage = (key, item) => {
    // Conseguir los elementos que ya tenemos en el localStorage
    let items = JSON.parse(localStorage.getItem(key));

    // Comprobar si es un array
    if (Array.isArray(items)) {
        // Añadir dentro del array un elemento nuevo
        items.push(item);
    } else {
        // Crear un array con el nuevo elemento
        items = [item];
    }

    // Guardar en el localStorage
    localStorage.setItem(key, JSON.stringify(items));

    // Devolver objeto guardado
    return item;
}
```
Para usar la funcionalidad solo tendremos que llamar al helper y este se importara automaticmanete
```jsx
import { guardarEnStorage } from '../helpers/GuardarEnStorage';

guardarEnStorage("pelis", peli);
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
