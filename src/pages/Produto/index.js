import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import imagem1 from '../../assets/imagens/imagem1.png';
import imagem2 from '../../assets/imagens/imagem4.png';
import imagem3 from '../../assets/imagens/imagem5.png';


function trocarImagem(el) {
    var imgProduto = document.getElementById("imgProduto");
    imgProduto.src = el.src;
}


function Produto(){
    return(
        <>
           <body>
                <div className="d-flex flex-column wrapper">
                    <main className="flex-fill">
                        <div className="container">
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <img src={imagem1} className="img-thumbnail" id="imgProduto"/>
                                    <br className="clearfix"/>
                                    <div className="row my-3 gx-3">
                                        <div className="col-3">
                                            <img src={imagem1} className="img-thumbnail"/>
                                                                                            
                                        </div>
                                        <div className="col-3">
                                            <img src={imagem2} className="img-thumbnail"/>
                                                                                           
                                        </div>
                                        <div className="col-3">
                                            <img src={imagem3} className="img-thumbnail"/>
                                                
                                        </div>
                                        <div className="col-3">
                                            <img src={imagem1} className="img-thumbnail"/>
                                                
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6" >
                                    <h1>Boné Filhos do Rei </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dignissimos maxime incidunt
                                        quos dolor cum harum voluptas laborum iste qui laboriosam placeat soluta, praesentium
                                        delectus hic autem, expedita minima nobis?
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eum. Iusto ullam, explicabo
                                        perferendis unde molestias deleniti facilis, temporibus distinctio autem provident accusamus
                                        at nobis! Odit rerum quod quasi eius!
                                    </p>

                                    <p>12x de R$ 11,66 = <b>R$140,00</b></p>
                                    <h5>ou <b>R$ 133,00</b> no Pix</h5><br/>
                                
                                    <p className="pt-3 pb-0">
                                        <Link to="/carrinho"> <button className="btn btn-lg btn-dark mb-3">
                                            <i className="bi-cart"></i> Adicionar ao Carrinho
                                        </button></Link>
                                        <Link to="/cliente_favoritos"> <button className="btn btn-lg btn-outline-dark mb-3" >
                                            <i className="bi-heart"></i> Adicionar aos Favoritos
                                        </button> </Link>
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                    </main>
                </div>
                <script src='../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'></script>
                
            </body>
        </>
    );
}

export default Produto;