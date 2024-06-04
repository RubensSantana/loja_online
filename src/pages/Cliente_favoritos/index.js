import { Link } from 'react-router-dom';
import imagem1 from '../../assets/imagens/imagem1.png';
import imagem4 from '../../assets/imagens/imagem4.png';
import imagem5 from '../../assets/imagens/imagem5.png';
import imagem6 from '../../assets/imagens/imagem6.png';
import imagem7 from '../../assets/imagens/imagem7.png';
import imagem8 from '../../assets/imagens/imagem8.png';
import imagem9 from '../../assets/imagens/imagem9.png';

function Cliente_favoritos(){
    return(
        <>
            <body>
                <div className="d-flex flex-column wrapper">
                    <main className="flex-fill">
                        <div className="container">
                            <h1>Minha Conta</h1>
                            <div className="row gx-3">
                                <div className="col-4">
                                    <div className="list-group">
                                        <Link to="/cliente_dados" className="list-group-item
                                        list-group-item-action">
                                            <i className="bi-person fs-6"></i> Dados Pessoais
                                        </Link>

                                        <Link to="/cliente_contatos" className="list-group-item
                                        list-group-item-action">
                                            <i className="bi-mailbox fs-6"></i> Contatos
                                        </Link>

                                        <Link to="/cliente_endereco" className="list-group-item
                                        list-group-item-action">
                                            <i className="bi-house-door fs-6"></i> Endereço
                                        </Link>

                                        <Link to="/cliente_pedidos" className="list-group-item
                                        list-group-item-action">
                                            <i className="bi-truck fs-6"></i> Pedidos
                                        </Link>

                                        <Link to="/cliente_favoritos" className="list-group-item
                                        list-group-item-action">
                                            <i className="bi-heart fs-6"></i> Favoritos
                                        </Link>
                                        
                                        <Link to="/cliente_senha" className="list-group-item
                                        list-group-item-action">
                                            <i className="bi-lock fs-6"></i> Alterar Senha
                                        </Link>
                                        
                                        <Link to="/" className="list-group-item
                                        list-group-item-action">
                                            <i className="bi-door-open fs-6"></i> Sair
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-8">
                                    <div className="row g-3 mb-3">
                                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                            <div className="card text-center bg-light">
                                                <a href="#" className="position-absolute end-0 p-2 text-danger" title="Remover dos favoritos">
                                                    <i className="bi-x"></i>
                                                </a>

                                                <img src={imagem1} className="card-img-top"/>
                                                    <div className="card-body">
                                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                                        <p className="card-text"> 12x de R$ 11,66.<br/>
                                                            <b>R$140,00</b>
                                                        </p>
                                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                                        <small className="text-dark">Código 01346</small>
                                                    </div>
                                                    <div className="card-footer">
                                                        <Link to="/carrinho" className="btn btn-dark mt-2 d-block">
                                                            Adicionar ao Carrinho
                                                        </Link>
                                                        <small className="text-success">10un em estoque</small>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                            <div className="card text-center bg-light">
                                                <a href="#" className="position-absolute end-0 p-2 text-danger" title="Remover dos favoritos">
                                                    <i className="bi-x"></i>
                                                </a>

                                                <img src={imagem5} className="card-img-top"/>
                                                    <div className="card-body">
                                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                                        <p className="card-text"> 12x de R$ 11,66.<br/>
                                                            <b>R$140,00</b>
                                                        </p>
                                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                                        <small className="text-dark">Código 01346</small>
                                                    </div>
                                                    <div className="card-footer">
                                                        <Link to="/carrinho" className="btn btn-dark mt-2 d-block">
                                                            Adicionar ao Carrinho
                                                        </Link>
                                                        <small className="text-success">10un em estoque</small>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                            <div className="card text-center bg-light">
                                                <a href="#" className="position-absolute end-0 p-2 text-danger" title="Remover dos favoritos">
                                                    <i className="bi-x"></i>
                                                </a>

                                                <img src={imagem6} className="card-img-top"/>
                                                    <div className="card-body">
                                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                                        <p className="card-text"> 12x de R$ 11,66.<br/>
                                                            <b>R$140,00</b>
                                                        </p>
                                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                                        <small className="text-dark">Código 01346</small>
                                                    </div>
                                                    <div className="card-footer">
                                                        <Link to="/carrinho" className="btn btn-dark mt-2 d-block">
                                                            Adicionar ao Carrinho
                                                        </Link>
                                                        <small className="text-success">10un em estoque</small>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                            <div className="card text-center bg-light">
                                                <a href="#" className="position-absolute end-0 p-2 text-danger" title="Remover dos favoritos">
                                                    <i className="bi-x"></i>
                                                </a>

                                                <img src={imagem8} className="card-img-top"/>
                                                    <div className="card-body">
                                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                                        <p className="card-text"> 12x de R$ 11,66.<br/>
                                                            <b>R$140,00</b>
                                                        </p>
                                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                                        <small className="text-dark">Código 01346</small>
                                                    </div>
                                                    <div className="card-footer">
                                                        <Link to="/carrinho" className="btn btn-dark mt-2 d-block">
                                                            Adicionar ao Carrinho
                                                        </Link>
                                                        <small className="text-success">10un em estoque</small>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                            <div className="card text-center bg-light">
                                                <a href="#" className="position-absolute end-0 p-2 text-danger" title="Remover dos favoritos">
                                                    <i className="bi-x"></i>
                                                </a>

                                                <img src={imagem6} className="card-img-top"/>
                                                    <div className="card-body">
                                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                                        <p className="card-text"> 12x de R$ 11,66.<br/>
                                                            <b>R$140,00</b>
                                                        </p>
                                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                                        <small className="text-dark">Código 01346</small>
                                                    </div>
                                                    <div className="card-footer">
                                                        <Link to="/carrinho" className="btn btn-dark mt-2 d-block">
                                                            Adicionar ao Carrinho
                                                        </Link>
                                                        <small className="text-success">10un em estoque</small>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                            <div className="card text-center bg-light">
                                                <a href="#" className="position-absolute end-0 p-2 text-danger" title="Remover dos favoritos">
                                                    <i className="bi-x"></i>
                                                </a>

                                                <img src={imagem9} className="card-img-top"/>
                                                    <div className="card-body">
                                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                                        <p className="card-text"> 12x de R$ 11,66.<br/>
                                                            <b>R$140,00</b>
                                                        </p>
                                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                                        <small className="text-dark">Código 01346</small>
                                                    </div>
                                                    <div className="card-footer">
                                                        <Link to="/carrinho" className="btn btn-dark mt-2 d-block">
                                                            Adicionar ao Carrinho
                                                        </Link>
                                                        <small className="text-success">10un em estoque</small>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                            <div className="card text-center bg-light">
                                                <a href="#" className="position-absolute end-0 p-2 text-danger" title="Remover dos favoritos">
                                                    <i className="bi-x"></i>
                                                </a>

                                                <img src={imagem1} className="card-img-top"/>
                                                    <div className="card-body">
                                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                                        <p className="card-text"> 12x de R$ 11,66.<br/>
                                                            <b>R$140,00</b>
                                                        </p>
                                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                                        <small className="text-dark">Código 01346</small>
                                                    </div>
                                                    <div className="card-footer">
                                                        <Link to="/carrinho" className="btn btn-dark mt-2 d-block">
                                                            Adicionar ao Carrinho
                                                        </Link>
                                                        <small className="text-success">10un em estoque</small>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                            <div className="card text-center bg-light">
                                                <a href="#" className="position-absolute end-0 p-2 text-danger" title="Remover dos favoritos">
                                                    <i className="bi-x"></i>
                                                </a>

                                                <img src={imagem7} className="card-img-top"/>
                                                    <div className="card-body">
                                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                                        <p className="card-text"> 12x de R$ 11,66.<br/>
                                                            <b>R$140,00</b>
                                                        </p>
                                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                                        <small className="text-dark">Código 01346</small>
                                                    </div>
                                                    <div className="card-footer">
                                                        <Link to="/carrinho" className="btn btn-dark mt-2 d-block">
                                                            Adicionar ao Carrinho
                                                        </Link>
                                                        <small className="text-success">10un em estoque</small>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </body>
        </>
    );
}

export default Cliente_favoritos;