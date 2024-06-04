import { Link } from 'react-router-dom';

function Fechamento_endereco(){
    return(
        <>
            <body>
                <div className="d-flex flex-column wrapper">
                    <main className="flex-fill">
                        <div className="container">
                            <h1>Selecione o Endereço de Entrega</h1>
                            <h4 className="mb-4">
                                Selecione o endereço de entrega e clique em <b>Continuar</b> para
                                prosseguir para a <b>seleção da forma de pagamento</b>.
                            </h4>
                            <div className="d-flex justify-content-around flex-wrap border roudend-top
                                pt-4 px-3">
                                <div className="mb-4 mx-2 flex-even">
                                    <input type="radio" className="btn-check" name="endereco"
                                        autocomplete="off" id="end1"/>
                                    <label className="btn btn-outline-dark p-4 h-100 w-100" for="end1">
                                        <h4>
                                            <b>Minha Casa</b><br/>
                                            <hr/>
                                            <b>Rubens</b><br/>
                                            Rua XV de Novembro, 2010<br/>
                                            Guarapuava/Pr<br/>
                                            CEP 01.010-101
                                        </h4>
                                    </label>
                                </div>

                                <div className="mb-4 mx-2 flex-even">
                                    <input type="radio" className="btn-check" name="endereco"
                                        autocomplete="off" id="end2"/>
                                    <label className="btn btn-outline-dark p-4 h-100 w-100" for="end2">
                                        <h4>
                                            <b>Meu Trabalho</b><br/>
                                            <hr/>
                                            <b>Rubens</b><br/>
                                            Rua 8 de Julho, 210<br/>
                                            Guarapuava/Pr<br/>
                                            CEP 01.010-101
                                        </h4>
                                    </label>
                                </div>

                                <div className="mb-4 mx-2 flex-even">
                                    <input type="radio" className="btn-check" name="endereco"
                                        autocomplete="off" id="end3"/>
                                    <label className="btn btn-outline-dark p-4 h-100 w-100" for="end3">
                                        <h4>
                                            <b>Casa de Praia</b><br/>
                                            <hr/>
                                            <b>Rubens</b><br/>
                                            Rua XV de Novembro, 2010<br/>
                                            Pontal do Paraná/Pr<br/>
                                            CEP 01.010-101
                                        </h4>
                                    </label>
                                </div>

                            </div>
                            <div className="text-end border border-top-0 rounded-bottom p-4 pb-0">
                                <Link to={"/fechamento_itens"} className="btn btn-outline-success btn-lg mb-4">
                                    Voltar aos Itens
                                </Link>
                                <Link to={"/fechamento_pagamento"} className="btn btn-dark btn-lg ms-2 mb-4">
                                    Continuar
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </body>
        </>
    );
}

export default Fechamento_endereco;