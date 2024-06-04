import imagem1 from '../../assets/imagens/imagem1.png';
import imagem5 from '../../assets/imagens/imagem5.png';
import imagem7 from '../../assets/imagens/imagem7.png';
import { Link } from 'react-router-dom';

function Carrinho() {
    return (
        <>
            <body>
                <div className="d-flex flex-column wrapper">
                    <main className="flex-fill">
                        <div className="container">
                            <h1>Carrinho de Compras</h1>
                            <ul className="list-group mb-3">
                                <li className="list-group-item py-3">
                                    <div className="row g-3">
                                        <div className="col-4 col-md-3 col-lg-2">
                                            <a href="#">
                                                <img src={imagem1} className="img-thumbnail"/>
                                            </a>
                                        </div>
                                        <div className="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                                            <h4>
                                                <b><a href="#" className="text-decoration-none text-dark">
                                                    Boné Filhos do Rei</a></b>
                                            </h4>
                                            <h5>
                                                Um boné de tecido, de alta qualidade, tamanho único, com aba abaulada.
                                            </h5>
                                        </div>
                                        <div className="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 
                                offset-md-8 col-lg-3 offset-lg-0 col-xl-2
                                align-self-center mt-3">
                                            <div className="input-group">
                                                <button className="btn btn-outline-dark btn-sm" type="button">
                                                    <i className="bi-caret-down-fill"></i>
                                                </button>

                                                <input type="text" className="form-control text-center border-dark" value="2"/>

                                                    <button className="btn btn-outline-dark btn-sm" type="button">
                                                        <i className="bi-caret-up-fill"></i>
                                                    </button>

                                                    <button className="btn btn-outline-dark border-dark btn-sm" type="button">
                                                        <i className="bi-trash-fill"></i>
                                                    </button>
                                            </div>
                                            <div className="text-end mt-2">
                                                <small className="text-secondary">Valor Unitário: R$ 133,00</small><br/>
                                                    <span className="text-dark">Valor Item: R$ 266,00</span>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item py-3">
                                    <div className="row g-3">
                                        <div className="col-4 col-md-3 col-lg-2">
                                            <a href="#">
                                                    <img src={imagem5} className="img-thumbnail"/>
                                            </a>
                                        </div>
                                        <div className="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                                            <h4>
                                                <b><a href="#" className="text-decoration-none text-dark">
                                                    Boné Filhos do Rei</a></b>
                                            </h4>
                                            <h5>
                                                Um boné de tecido, de alta qualidade, tamanho único, com aba abaulada.
                                            </h5>
                                        </div>
                                        <div className="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 
                                offset-md-8 col-lg-3 offset-lg-0 col-xl-2
                                align-self-center mt-3">
                                            <div className="input-group">
                                                <button className="btn btn-outline-dark btn-sm" type="button">
                                                    <i className="bi-caret-down-fill"></i>
                                                </button>

                                                <input type="text" className="form-control text-center border-dark" value="2"/>

                                                    <button className="btn btn-outline-dark btn-sm" type="button">
                                                        <i className="bi-caret-up-fill"></i>
                                                    </button>

                                                    <button className="btn btn-outline-dark border-dark btn-sm" type="button">
                                                        <i className="bi-trash-fill"></i>
                                                    </button>
                                            </div>
                                            <div className="text-end mt-2">
                                                <small className="text-secondary">Valor Unitário: R$ 133,00</small><br/>
                                                    <span className="text-dark">Valor Item: R$ 266,00</span>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item py-3">
                                    <div className="row g-3">
                                        <div className="col-4 col-md-3 col-lg-2">
                                            <a href="#">
                                                <img src={imagem7} className="img-thumbnail"/>
                                            </a>
                                        </div>
                                        <div className="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                                            <h4>
                                                <b><a href="#" className="text-decoration-none text-dark">
                                                    Boné Filhos do Rei</a></b>
                                            </h4>
                                            <h5>
                                                Um boné de tecido, de alta qualidade, tamanho único, com aba abaulada.
                                            </h5>
                                        </div>
                                        <div className="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 
                                offset-md-8 col-lg-3 offset-lg-0 col-xl-2
                                align-self-center mt-3">
                                            <div className="input-group">
                                                <button className="btn btn-outline-dark btn-sm" type="button">
                                                    <i className="bi-caret-down-fill"></i>
                                                </button>

                                                <input type="text" className="form-control text-center border-dark" value="2"/>

                                                    <button className="btn btn-outline-dark btn-sm" type="button">
                                                        <i className="bi-caret-up-fill"></i>
                                                    </button>

                                                    <button className="btn btn-outline-dark border-dark btn-sm" type="button">
                                                        <i className="bi-trash-fill"></i>
                                                    </button>
                                            </div>
                                            <div className="text-end mt-2">
                                                <small className="text-secondary">Valor Unitário: R$ 133,00</small><br/>
                                                    <span className="text-dark">Valor Item: R$ 266,00</span>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item pt-3 pb-0">
                                    <div className="text-end">
                                        <h4 className="text-dark mb-3">
                                            Valor Total: R$ 798,00
                                        </h4>
                                        <Link to="/" className="btn btn-outline-success btn-lg mb-3">Continuar Comprando</Link>
                                        <Link to="/fechamento_itens" className="btn btn-dark btn-lg ms-2 mb-3">
                                            Fechar Compra
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </main>
                </div>
            </body>
        </>

    );
}

export default Carrinho;