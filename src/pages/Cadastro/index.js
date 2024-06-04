

function Cadastro() {
    return (
        <>
            <body>
                <div className="d-flex flex-column wrapper">
                    <main className="flex-fill">
                        <div className="container">
                            <div className="row justify-content-center">
                                <form className="col-sm-10 col-md-8 col-lg-6 mb-3">
                                    <h1>Novo Cadastro</h1>

                                    <div className="form-floating mb-3">
                                        <input type="email" id="txtEmail" className="form-control"
                                            placeholder=" " autofocus/>
                                            <label for="txtEmail">E-mail</label>
                                    </div>

                                    <h2>Dados Pessoais</h2>

                                    <div className="form-floating mb-3">
                                        <input type="text" id="txtNomeCompleto" className="form-control"
                                            placeholder=" " autofocus/>
                                            <label for="textNomeCompleto">Nome Completo</label>
                                    </div>

                                    <div className="form-floating mb-3 col-md-6 col-xl-4">
                                        <input className="form-control" type="text" id="txtCPF"
                                            placeholder="" />
                                        <label for="txtCPF">CPF</label>
                                    </div>

                                    <div className="form-floating mb-3 col-md-6">
                                        <input className="form-control" type="text" id="txtTelefone"
                                            placeholder="" />
                                        <label for="txtTelefone">Telefone</label>
                                    </div>

                                    <div className="form-floating mb-3 col-md-6 col-xl-4">
                                        <input className="form-control" type="date"
                                            id="txtDataNascimento" placeholder="" />
                                        <label for="txtDataNascimento">Data de Nascimento</label>
                                    </div>

                                    <h2>Endereço</h2>

                                    <div className="form-floating mb-3 col-md-6 col-lg-4">
                                        <input className="form-control" type="text" id="txtCEP" placeholder="" />
                                        <label for="txtCEP">CEP</label>
                                    </div>

                                    <div className="form-floating mb-3 col-md-6 col-lg-8">
                                        <textarea id="buscaEndereco" className="form-control text-muted "
                                            disabled>Digite o CEP para buscarmos o endereço.</textarea>
                                    </div>

                                    <div className="form-floating mb-3 col-md-4">
                                        <input className="form-control" type="text" id="txtNumero" placeholder="" />
                                        <label for="txtNumero">Numero</label>
                                    </div>

                                    <div className="form-floating mb-3 col-md-8">
                                        <input className="form-control" type="text" id="txtComplemento" placeholder="" />
                                        <label for="txtComplemento">Complemento</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input className="form-control" type="text" id="txtReferencia" placeholder="" />
                                        <label for="txtReferencia">Ponto de Referência</label>
                                    </div>

                                    <button type="button" onclick="window.location.href='index.html'"
                                        className="btn btn-lg btn-dark">Salvar</button>
                                </form>
                            </div>
                        </div>
                    </main>
                </div>
            </body>
        </>
    );
}

export default Cadastro;