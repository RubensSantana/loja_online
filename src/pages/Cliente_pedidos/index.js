import { Link } from 'react-router-dom';

function Cliente_pedidos(){
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
                                    <form className="row mb-3">
                                        <div className="col-12 col-md-6 mb-3">
                                            <div className="form-floating">
                                                <select className="form-select">
                                                    <option value="30">Últimos 30 dias</option>
                                                    <option value="60">Últimos 60 dias</option>
                                                    <option value="90">Últimos 90 dias</option>
                                                    <option value="180">Últimos 180 dias</option>
                                                    <option value="360">Últimos 360 dias</option>
                                                    <option value="9999">Todo o período</option>
                                                </select>
                                                <label>Período</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select">
                                                    <option value="1">Mais novos primeiro</option>
                                                    <option value="2">Mais antigos primeiro</option>
                                                </select>
                                                <label>Ordenação</label>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="accordion" id="divPedidos">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#pedido000010" aria-expanded="true" aria-controls="collapseOne">
                                                    <b>Pedido 000010</b>
                                                    <span className="mx-1">(realizado em 01/02/2024)</span>
                                                </button>
                                            </h2>
                                            <div id="pedido000010" className="accordion-collapse collapse"
                                                data-bs-parent="#divPedidos">
                                                <div className="accordion-body">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Produto</th>
                                                                <th className="text-end">R$ Unit.</th>
                                                                <th className="text-end">Qtde.</th>
                                                                <th className="text-end">Subtotal</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Boné Filhos do Rei</td>
                                                                <td className="text-end"> 133,00</td>
                                                                <td className="text-end">2</td>
                                                                <td className="text-end">266,00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Boné Filhos do Rei1</td>
                                                                <td className="text-end"> 133,00</td>
                                                                <td className="text-end">2</td>
                                                                <td className="text-end">266,00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Boné Filhos do Rei2</td>
                                                                <td className="text-end"> 133,00</td>
                                                                <td className="text-end">2</td>
                                                                <td className="text-end">266,00</td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Valor
                                                                    dos Produtos:</th>
                                                                <td className="text-end">798,00</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Valor
                                                                    do Frete:</th>
                                                                <td className="text-end">0,00</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Valor
                                                                    a Pagar:</th>
                                                                <td className="text-end">798,00</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Forma
                                                                    de Pagamento:</th>
                                                                <td className="text-end">Crédito VISA 10x</td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#pedido000006" aria-expanded="true" aria-controls="collapseOne">
                                                    <b>Pedido 000006</b>
                                                    <span className="mx-1">(realizado em 01/02/2024)</span>
                                                </button>
                                            </h2>
                                            <div id="pedido000006" className="accordion-collapse collapse"
                                                data-bs-parent="#divPedidos">
                                                <div className="accordion-body">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Produto</th>
                                                                <th className="text-end">R$ Unit.</th>
                                                                <th className="text-end">Qtde.</th>
                                                                <th className="text-end">Subtotal</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Boné Filhos do Rei</td>
                                                                <td className="text-end"> 133,00</td>
                                                                <td className="text-end">2</td>
                                                                <td className="text-end">266,00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Boné Filhos do Rei1</td>
                                                                <td className="text-end"> 133,00</td>
                                                                <td className="text-end">2</td>
                                                                <td className="text-end">266,00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Boné Filhos do Rei2</td>
                                                                <td className="text-end"> 133,00</td>
                                                                <td className="text-end">2</td>
                                                                <td className="text-end">266,00</td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Valor
                                                                    dos Produtos:</th>
                                                                <td className="text-end">798,00</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Valor
                                                                    do Frete:</th>
                                                                <td className="text-end">0,00</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Valor
                                                                    a Pagar:</th>
                                                                <td className="text-end">798,00</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Forma
                                                                    de Pagamento:</th>
                                                                <td className="text-end">Crédito VISA 10x</td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#pedido000007" aria-expanded="true" aria-controls="collapseOne">
                                                    <b>Pedido 000007</b>
                                                    <span className="mx-1">(realizado em 01/02/2024)</span>
                                                </button>
                                            </h2>
                                            <div id="pedido000007" className="accordion-collapse collapse"
                                                data-bs-parent="#divPedidos">
                                                <div className="accordion-body">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Produto</th>
                                                                <th className="text-end">R$ Unit.</th>
                                                                <th className="text-end">Qtde.</th>
                                                                <th className="text-end">Subtotal</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Boné Filhos do Rei</td>
                                                                <td className="text-end"> 133,00</td>
                                                                <td className="text-end">2</td>
                                                                <td className="text-end">266,00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Boné Filhos do Rei1</td>
                                                                <td className="text-end"> 133,00</td>
                                                                <td className="text-end">2</td>
                                                                <td className="text-end">266,00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Boné Filhos do Rei2</td>
                                                                <td className="text-end"> 133,00</td>
                                                                <td className="text-end">2</td>
                                                                <td className="text-end">266,00</td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Valor
                                                                    dos Produtos:</th>
                                                                <td className="text-end">798,00</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Valor
                                                                    do Frete:</th>
                                                                <td className="text-end">0,00</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Valor
                                                                    a Pagar:</th>
                                                                <td className="text-end">798,00</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Forma
                                                                    de Pagamento:</th>
                                                                <td className="text-end">Crédito VISA 10x</td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#pedido000008" aria-expanded="true" aria-controls="collapseOne">
                                                    <b>Pedido 000008</b>
                                                    <span className="mx-1">(realizado em 01/02/2024)</span>
                                                </button>
                                            </h2>
                                            <div id="pedido000008" className="accordion-collapse collapse"
                                                data-bs-parent="#divPedidos">
                                                <div className="accordion-body">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Produto</th>
                                                                <th className="text-end">R$ Unit.</th>
                                                                <th className="text-end">Qtde.</th>
                                                                <th className="text-end">Subtotal</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Boné Filhos do Rei</td>
                                                                <td className="text-end"> 133,00</td>
                                                                <td className="text-end">2</td>
                                                                <td className="text-end">266,00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Boné Filhos do Rei1</td>
                                                                <td className="text-end"> 133,00</td>
                                                                <td className="text-end">2</td>
                                                                <td className="text-end">266,00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Boné Filhos do Rei2</td>
                                                                <td className="text-end"> 133,00</td>
                                                                <td className="text-end">2</td>
                                                                <td className="text-end">266,00</td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Valor
                                                                    dos Produtos:</th>
                                                                <td className="text-end">798,00</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Valor
                                                                    do Frete:</th>
                                                                <td className="text-end">0,00</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Valor
                                                                    a Pagar:</th>
                                                                <td className="text-end">798,00</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Forma
                                                                    de Pagamento:</th>
                                                                <td className="text-end">Crédito VISA 10x</td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#pedido000009" aria-expanded="true" aria-controls="collapseOne">
                                                    <b>Pedido 000009</b>
                                                    <span className="mx-1">(realizado em 01/02/2024)</span>
                                                </button>
                                            </h2>
                                            <div id="pedido000009" className="accordion-collapse collapse"
                                                data-bs-parent="#divPedidos">
                                                <div className="accordion-body">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Produto</th>
                                                                <th className="text-end">R$ Unit.</th>
                                                                <th className="text-end">Qtde.</th>
                                                                <th className="text-end">Subtotal</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Boné Filhos do Rei</td>
                                                                <td className="text-end"> 133,00</td>
                                                                <td className="text-end">2</td>
                                                                <td className="text-end">266,00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Boné Filhos do Rei1</td>
                                                                <td className="text-end"> 133,00</td>
                                                                <td className="text-end">2</td>
                                                                <td className="text-end">266,00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Boné Filhos do Rei2</td>
                                                                <td className="text-end"> 133,00</td>
                                                                <td className="text-end">2</td>
                                                                <td className="text-end">266,00</td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Valor
                                                                    dos Produtos:</th>
                                                                <td className="text-end">798,00</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Valor
                                                                    do Frete:</th>
                                                                <td className="text-end">0,00</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Valor
                                                                    a Pagar:</th>
                                                                <td className="text-end">798,00</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="text-end" colspan="3">Forma
                                                                    de Pagamento:</th>
                                                                <td className="text-end">Crédito VISA 10x</td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
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

export default Cliente_pedidos;