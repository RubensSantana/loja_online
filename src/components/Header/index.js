import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <div className="d-flex flex-column wrapper">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom shadow-sm mb-3">
                    <div className="container">
                        <Link to="/" className='navbar-brand'><b></b>Casa dos Bonés<b></b></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target=".navbar-collapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contato" className="nav-link text-white">Contato</Link>
                                </li>
                            </ul>
                            <div className="align-self-end">
                                <ul className="navbar-nav">
                                    <li className="nav-item">

                                        <Link to="/cadastro" className="nav-link text-white">Quero me Cadastrar</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link text-white">Entrar</Link>
                                    </li>
                                    <li className="nav-item">
                                        <span className="badge rounded-pill bg-light text-dark position-absolute ms-4 mt-0"
                                            title="5 produto(s) no carrinho">
                                            <small>5</small>
                                        </span>
                                        <Link to="/carrinho" className="nav-link text-white">
                                            <i className="bi-cart"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>   
                </nav>
            </div>
        </header>
    );
}

export default Header;