import './Navegador.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Buscar() {
    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
            <input type="text" placeholder="Buscar..."></input>
            <button> Buscar </button>

            <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Categoria 1</a></li>
                    <li><a className="dropdown-item" href="#">Categoria 2</a></li>
                    <li><a className="dropdown-item" href="#">Categoria 3</a></li>
                </ul>
            </div>
        </div>

        
        </>
        
    );
}

export default Buscar;
