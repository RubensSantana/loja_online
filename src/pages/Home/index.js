import bone from '../../assets/imagens/bones.png';
import carroselsite from '../../assets/imagens/carrosselsite.png';
import imagem1 from '../../assets/imagens/imagem1.png';
import imagem4 from '../../assets/imagens/imagem4.png';
import imagem5 from '../../assets/imagens/imagem5.png';
import imagem6 from '../../assets/imagens/imagem6.png';
import imagem7 from '../../assets/imagens/imagem7.png';
import imagem8 from '../../assets/imagens/imagem8.png';
import imagem9 from '../../assets/imagens/imagem9.png';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";


function Home() {
    return (
        <>
        <body>
            <div className="d-flex flex-column wrapper">
                <div className="container">
                    <div id="carouselMain" className="carousel slide carousel-dark" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="1"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="3000">
                                <img src={bone} className="d-block w-100" alt="" />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src={carroselsite} className="d-block w-100" alt="" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselMain" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                            <span className="visually-hidden">Anterior</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselMain" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                            <span className="visually-hidden">Próximo</span>
                        </button>
                    </div>
                    <hr className="mt-3" />
                </div>

                <main className="flex-fill">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <form className="justify-content-center justify-content-md-start mb-3 mb-md-0">
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" placeholder="Digite aqui o que procura" />
                                        <button className="btn btn-dark">Buscar</button>
                                    </div>
                                </form>
                            </div>

                            <div className="col-12 col-md-7">
                                <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                                    <form className="d-inline-block">
                                        <select className="form-select form-select-sm">
                                            <option>Ordenar pelo nome</option>
                                            <option>Ordenar pelo menor preço</option>
                                            <option>Ordenar pelo maior preço</option>
                                        </select>
                                    </form>
                                    <nav className="d-inline-block me-3">
                                        <ul className="pagination pagination-sm my-0">
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item disabled"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                                            <li className="page-item"><a className="page-link" href="#">6</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <hr mt-3 />

                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card text-center bg-light">
                                    <a href="#" className="position-absolute end-0 p-2 text-danger">
                                        <i className="bi-suit-heart"></i>
                                    </a>

                                    <Link to="/produto"><img src={imagem1} className="card-img-top" /></Link>
                                    <div className="card-body">
                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                        <p className="card-text"> 12x de R$ 11,66.<br />
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

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card text-center bg-light">
                                    <a href="#" className="position-absolute end-0 p-2 text-danger">
                                        <i className="bi-suit-heart"></i>
                                    </a>

                                    <img src={imagem4} className="card-img-top" />
                                    <div className="card-body">
                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                        <p className="card-text"> 12x de R$ 11,66.<br />
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

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card text-center bg-light">
                                    <a href="#" className="position-absolute end-0 p-2 text-danger">
                                        <i className="bi-suit-heart"></i>
                                    </a>

                                    <img src={imagem5} className="card-img-top" />
                                    <div className="card-body">
                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                        <p className="card-text"> 12x de R$ 11,66.<br />
                                            <b>R$140,00</b>
                                        </p>
                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                        <small className="text-dark">Código 01346</small>
                                    </div>
                                    <div className="card-footer">
                                        <a href="#" className="btn btn-light disabled mt-2 d-block">
                                            <small><b>Reabastecendo estoque</b></small>
                                        </a>
                                        <small className="text-danger"><b>Produto Esgotado</b></small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card text-center bg-light">
                                    <a href="#" className="position-absolute end-0 p-2 text-danger">
                                        <i className="bi-suit-heart-fill"></i>
                                    </a>

                                    <img src={imagem6} className="card-img-top" />
                                    <div className="card-body">
                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                        <p className="card-text"> 12x de R$ 11,66.<br />
                                            <b>R$140,00</b>
                                        </p>
                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                        <small className="text-dark">Código 01346</small>
                                    </div>
                                    <div className="card-footer">
                                        <a href="carrinho.html" className="btn btn-dark mt-2 d-block">
                                            Adicionar ao Carrinho
                                        </a>
                                        <small className="text-success">10un em estoque</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card text-center bg-light">
                                    <a href="#" className="position-absolute end-0 p-2 text-danger">
                                        <i className="bi-suit-heart"></i>
                                    </a>

                                    <img src={imagem7} className="card-img-top" />
                                    <div className="card-body">
                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                        <p className="card-text"> 12x de R$ 11,66.<br />
                                            <b>R$140,00</b>
                                        </p>
                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                        <small className="text-dark">Código 01346</small>
                                    </div>
                                    <div className="card-footer">
                                        <a href="carrinho.html" className="btn btn-dark mt-2 d-block">
                                            Adicionar ao Carrinho
                                        </a>
                                        <small className="text-success">10un em estoque</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card text-center bg-light">
                                    <a href="#" className="position-absolute end-0 p-2 text-danger">
                                        <i className="bi-suit-heart"></i>
                                    </a>

                                    <img src={imagem8} className="card-img-top" />
                                    <div className="card-body">
                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                        <p className="card-text"> 12x de R$ 11,66.<br />
                                            <b>R$140,00</b>
                                        </p>
                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                        <small className="text-dark">Código 01346</small>
                                    </div>
                                    <div className="card-footer">
                                        <a href="carrinho.html" className="btn btn-dark mt-2 d-block">
                                            Adicionar ao Carrinho
                                        </a>
                                        <small className="text-success">10un em estoque</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card text-center bg-light">
                                    <a href="#" className="position-absolute end-0 p-2 text-danger">
                                        <i className="bi-suit-heart-fill"></i>
                                    </a>

                                    <img src={imagem9} className="card-img-top" />
                                    <div className="card-body">
                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                        <p className="card-text"> 12x de R$ 11,66.<br />
                                            <b>R$140,00</b>
                                        </p>
                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                        <small className="text-dark">Código 01346</small>
                                    </div>
                                    <div className="card-footer">
                                        <a href="carrinho.html" className="btn btn-dark mt-2 d-block">
                                            Adicionar ao Carrinho
                                        </a>
                                        <small className="text-success">10un em estoque</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card text-center bg-light">
                                    <a href="#" className="position-absolute end-0 p-2 text-danger">
                                        <i className="bi-suit-heart"></i>
                                    </a>

                                    <img src={imagem8} className="card-img-top" />
                                    <div className="card-body">
                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                        <p className="card-text"> 12x de R$ 11,66.<br />
                                            <b>R$140,00</b>
                                        </p>
                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                        <small className="text-dark">Código 01346</small>
                                    </div>
                                    <div className="card-footer">
                                        <a href="carrinho.html" className="btn btn-dark mt-2 d-block">
                                            Adicionar ao Carrinho
                                        </a>
                                        <small className="text-success">10un em estoque</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card text-center bg-light">
                                    <a href="#" className="position-absolute end-0 p-2 text-danger">
                                        <i className="bi-suit-heart"></i>
                                    </a>

                                    <img src={imagem4} className="card-img-top" />
                                    <div className="card-body">
                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                        <p className="card-text"> 12x de R$ 11,66.<br />
                                            <b>R$140,00</b>
                                        </p>
                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                        <small className="text-dark">Código 01346</small>
                                    </div>
                                    <div className="card-footer">
                                        <a href="carrinho.html" className="btn btn-dark mt-2 d-block">
                                            Adicionar ao Carrinho
                                        </a>
                                        <small className="text-success">10un em estoque</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card text-center bg-light">
                                    <a href="#" className="position-absolute end-0 p-2 text-danger">
                                        <i className="bi-suit-heart"></i>
                                    </a>

                                    <img src={imagem7} className="card-img-top" />
                                    <div className="card-body">
                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                        <p className="card-text"> 12x de R$ 11,66.<br />
                                            <b>R$140,00</b>
                                        </p>
                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                        <small className="text-dark">Código 01346</small>
                                    </div>
                                    <div className="card-footer">
                                        <a href="carrinho.html" className="btn btn-dark mt-2 d-block">
                                            Adicionar ao Carrinho
                                        </a>
                                        <small className="text-success">10un em estoque</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card text-center bg-light">
                                    <a href="#" className="position-absolute end-0 p-2 text-danger">
                                        <i className="bi-suit-heart"></i>
                                    </a>

                                    <img src={imagem5} className="card-img-top" />
                                    <div className="card-body">
                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                        <p className="card-text"> 12x de R$ 11,66.<br />
                                            <b>R$140,00</b>
                                        </p>
                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                        <small className="text-dark">Código 01346</small>
                                    </div>
                                    <div className="card-footer">
                                        <a href="carrinho.html" className="btn btn-dark mt-2 d-block">
                                            Adicionar ao Carrinho
                                        </a>
                                        <small className="text-success">10un em estoque</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card text-center bg-light">
                                    <a href="#" className="position-absolute end-0 p-2 text-danger">
                                        <i className="bi-suit-heart"></i>
                                    </a>

                                    <img src={imagem6} className="card-img-top" />
                                    <div className="card-body">
                                        <h6 className="card-title">Boné Filhos do Rei</h6>
                                        <p className="card-text"> 12x de R$ 11,66.<br />
                                            <b>R$140,00</b>
                                        </p>
                                        <h6><b>R$ 133,00 no Pix</b></h6>
                                        <small className="text-dark">Código 01346</small>
                                    </div>
                                    <div className="card-footer">
                                        <a href="carrinho.html" className="btn btn-dark mt-2 d-block">
                                            Adicionar ao Carrinho
                                        </a>
                                        <small className="text-success">10un em estoque</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-3" />

                        <div className="row pb-3">
                            <div className="col-12">
                                <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                                    <form className="d-inline-block">
                                        <select className="form-select form-select-sm">
                                            <option>Ordenar pelo nome</option>
                                            <option>Ordenar pelo menor preço</option>
                                            <option>Ordenar pelo maior preço</option>
                                        </select>
                                    </form>
                                    <nav className="d-inline-block me-3">
                                        <ul className="pagination pagination-sm my-0">
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item disabled"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                                            <li className="page-item"><a className="page-link" href="#">6</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <script src="/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>            
        </body>
        </>
    );
}

export default Home;