import { Link } from 'react-router-dom';
import pix from '../../assets/imagens/pix.PNG';

function Fechamento_pagamento(){
    return(
        <>
            <body>
                <div className="d-flex flex-column wrapper">
                    <main className="flex-fill">
                        <div className="container">
                            <h1>Selecione a Forma de Pagamento</h1>
                            <h4 className="mb-4">
                                Selecione a forma de pagamento e clique em <b>Continuar</b> para
                                prosseguir para <b>concluir o pedido</b>.
                            </h4>
                            <div className="d-flex justify-content-between flex-wrap border roudend-top
                                pt-4 px-3">
                                <div className="mb-4 mx-2 flex-even">
                                    <input type="radio" className="btn-check" name="pagamento" autocomplete="off" id="pag1"/>
                                    <label className="btn btn-outline-dark p-4 h-100 w-100" for="pag1">
                                        <h4><b>Cartão de Crédito</b></h4>
                                        <hr/>
                                        <form action="">
                                            <div className="form-floating mb-3">
                                                <input type="text" id="txtNome" className="form-control" placeholder=" " autofocus/>
                                                <label for="textNome" className="text-black-50">Nome
                                                    Impresso no Cartão</label>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <input type="text" id="txtNumero" className="form-control" placeholder=" " autofocus/>
                                                <label for="textNumero" className="text-black-50">Número do
                                                    Cartão</label>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <input type="text" id="txtValidade" className="form-control" placeholder=" " autofocus/>
                                                <label for="textValidade" className="text-black-50">Validade (mm/aa)</label>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <input type="text" id="txtCodigo" className="form-control" placeholder=" " autofocus/>
                                                <label for="textCodigo" className="text-black-50">Código de
                                                    Segurança</label>
                                            </div>

                                            <div className="form-floating">
                                                <select id="selParcelas" className="form-select">
                                                    <option value="1" selected>À vista</option>
                                                    <option value="2">2 x sem juros</option>
                                                    <option value="3">3 x sem juros</option>
                                                    <option value="4">4 x sem juros</option>
                                                    <option value="5">5 x sem juros</option>
                                                    <option value="6">6 x sem juros</option>
                                                    <option value="7">7 x sem juros</option>
                                                    <option value="8">8 x sem juros</option>
                                                    <option value="9">9 x sem juros</option>
                                                    <option value="10">10 x sem juros</option>
                                                    <option value="11">11 x sem juros</option>
                                                    <option value="12">12 x sem juros</option>
                                                </select>
                                                <label for="selParcelas" className="text-black-50">Parcelamento</label>
                                            </div>
                                        </form>
                                    </label>
                                </div>

                                <div className="mb-4 mx-2 flex-even">
                                    <input type="radio" className="btn-check" name="pagamento"
                                        autocomplete="off" id="pag2"/>
                                    <label className="btn btn-outline-dark p-4 h-100 w-100" for="pag2">
                                        <h4>
                                            <b>Pix</b><br/>
                                            <hr/>
                                            <b>Valor da Compra: R$ 798,00</b><br/>
                                        </h4><br/>
                                        <img src={pix}/>
                                    </label>
                                </div>
                            </div>

                            <div className="text-end border border-top-0 rounded-bottom p-4 pb-0">
                                <Link to={"/fechamento_endereco"} className="btn btn-outline-success btn-lg mb-4">
                                    Voltar aos Endereços
                                </Link>
                                <Link to={"/fechamento_pedido"} className="btn btn-dark btn-lg ms-2 mb-4">
                                    Finalizar
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </body>
        </>
    );
}

export default Fechamento_pagamento;