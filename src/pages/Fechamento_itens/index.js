import imagem1 from '../../assets/imagens/imagem1.png';
import imagem5 from '../../assets/imagens/imagem5.png';
import imagem7 from '../../assets/imagens/imagem7.png';
import { Link } from 'react-router-dom';


function Fechamento_itens() {
    return (
        <>
            <body>
                <div className="d-flex flex-column wrapper">
                    <main className="flex-fill">
                        <div className="container">
                            <h1>Confira os Itens</h1>
                            <h4>Confira os itens e clique em <b>Continuar</b> para prosseguir para a
                                <b>seleção do endereço de entrega</b>.</h4>
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
                                                Um boné de tecido, de alta qualidade, tamanho único, com aba abaulada.<br/>

                                                    <b>
                                                        2 unidade(s)<br/>
                                                            R$ 266,00
                                                    </b>

                                            </h5>
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
                                                Um boné de tecido, de alta qualidade, tamanho único, com aba abaulada.<br/>

                                                    <b>
                                                        2 unidade(s)<br/>
                                                            R$ 266,00
                                                    </b>

                                            </h5>
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
                                                Um boné de tecido, de alta qualidade, tamanho único, com aba abaulada.<br/>

                                                    <b>
                                                        2 unidade(s)<br/>
                                                            R$ 266,00
                                                    </b>

                                            </h5>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item pt-3 pb-0">
                                    <div className="text-end">
                                        <h4 className="text-dark mb-3">
                                            Valor Total: R$ 798,00
                                        </h4>
                                        <Link to={"/carrinho"} className="btn btn-outline-success btn-lg mb-3">
                                            Voltar ao Carrinho
                                        </Link>
                                        <Link to={"/fechamento_endereco"} className="btn btn-dark btn-lg ms-2 mb-3">
                                            Continuar
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

export default Fechamento_itens;