
function Contato() {
    return (
        <>
            <body>
                <div className="d-flex flex-column wrapper">
                    <main className="flex-fill">
                        <div className="container">
                            <div className="row justify-content-center">
                                <form className="col-sm-10 col-md-8 col-lg-6">
                                    <h1>Entre em Contato</h1>

                                    <div className="form-floating mb-3">
                                        <input type="text" id="txtNomeCompleto" className="form-control"
                                            placeholder=" " autofocus/>
                                            <label for="textNomeCompleto">Nome Completo</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="email" id="txtEmail" className="form-control"
                                            placeholder=" "/>
                                            <label for="txtEmail">E-mail</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <textarea id="txtMensagem" className="form-control"
                                            placeholder=" "></textarea>
                                        <label for="txtMensagem">Mensagem</label>
                                    </div>

                                    <button type="button" onclick="window.location.href=
                                        'confirmcontato.html'"
                                        className="btn btn-lg btn-dark">Enviar Mensagem</button>


                                    <p className="mt-3">
                                        Faremos nosso melhor para responder sua mensagem em até 2 dias úteis.
                                    </p>

                                    <p className="mt-3">
                                        Atenciosamente,<br/>
                                            Central de Relacionamento Casa dos Bonés
                                    </p>
                                </form>
                            </div>
                        </div>
                    </main>
                </div>
            </body>
        </>
    );
}

export default Contato;