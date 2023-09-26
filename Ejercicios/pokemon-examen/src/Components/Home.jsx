import SelectPokemon from './SelectPokemon';
import Pokemon from './Pokemon';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

const Home = () => {

    return (
        <>
            <h1 className='text-center p-3' id='titulo'>Pagina de Pokemons</h1>
            <section className='row m-0'>
                <aside className='col-auto' id='selectorPokemones'>
                    <SelectPokemon />
                </aside>
                <div className='col-auto'>
                    <Pokemon/>
                </div>
            </section>
        </>
    )
}

export default Home;