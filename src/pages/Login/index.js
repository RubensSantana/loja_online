import { Link } from 'react-router-dom';

function Login(){
    return (
        <>
            <body>
                <div className="d-flex flex-column wrapper">
                    <main className="flex-fill">
                        <div className="container">
                            <div className="row justify-content-center">
                                <form className="col-sm-10 col-md-8 col-lg-6">
                                    <h1>Identifique-se, por favor</h1>

                                    <div className="form-floating mb-3">
                                        <input type="email" id="txtEmail" className="form-control"
                                            placeholder=" " autofocus/>
                                        <label for="textEmail">E-mail</label>
                                    </div>
                                    
                                    <div className="form-floating mb-3">
                                        <input type="password" id="txtSenha" className="form-control"
                                            placeholder=" "/>
                                        <label for="textEmail">Senha</label>
                                    </div>

                                    <div className="form-check mb-3">
                                        <input type="checkbox" className="form-check-input" value=""
                                            id="chkLembrar"/>
                                        <label for="chkLembrar" className="form-check-label">Lembrar de mim</label>
                                    </div>

                                    <button type="button" onclick="window.location.href=
                                        'index.html'" 
                                        className="btn btn-lg btn-dark">Entrar</button>

                                    <p className="mt-3">
                                        Ainda não é cadastrado? <Link to={"/cadastro"}>Clique aqui</Link>
                                            para se cadastrar.
                                    </p>

                                    <p className="mt-3">
                                        Esqueceu sua senha? <Link to={"/recuperar_senha"}>Clique 
                                            aqui</Link> para recuperá-la. 
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

export default Login;