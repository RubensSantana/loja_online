import { Link } from 'react-router-dom';

function Cliente_senha(){
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
                                    <form className="col-sm-12 col-md-8 col-lg-6">
                                        <div className="form-floating mb-3">
                                            <input type="password" id="txtSenhaAtual" className="form-control" placeholder=" " autofocus/>
                                                <label for="txtSenhaAtual">Digite aqui sua senha atual</label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input type="password" id="txtSenha" className="form-control" placeholder=" "/>
                                                <label for="txtSenha">Digite aqui sua nova senha</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" id="txtConfSenha" className="form-control" placeholder=" "/>
                                                <label for="txtConfSenha">Redigite aqui a nova senha</label>
                                        </div>
                                        <button type="button" onclick="window.location.href=
                                    'confirmcadastrosenha.html'" className="btn btn-lg btn-dark">Alterar Senha</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </body>

        </>
    );
}

export default Cliente_senha;