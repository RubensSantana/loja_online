
function Cadastrar_nova_senha(){
    return(
        <>
            <body>
                <div className="d-flex flex-column wrapper">
                    <main className="flex-fill">
                        <div className="container">
                            <div className="row justify-content-center">
                                <form className="col-sm-10 col-md-8 col-lg-6">
                                    <h1>Digite sua nova senha</h1>
                                    <div className="form-floating mb-3">
                                        <input type="password" id="txtSenha" className="form-control" placeholder=" " autofocus/>
                                        <label for="txtSenha">Nova Senha</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" id="txtSenha" className="form-control" placeholder=" "/>
                                        <label for="txtSenha">Confirme a Nova Senha</label>
                                    </div>
                                    <button type="button" onclick="window.location.href=
                                        'confirmcadastrosenha.html'" className="btn btn-lg btn-dark">Cadastrar Nova Senha</button>
                                </form>
                            </div>
                        </div>
                    </main>
                </div>
            </body>
        </>
    );
}

export default Cadastrar_nova_senha;