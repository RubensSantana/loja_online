import { Link } from 'react-router-dom';

function Recuperar_senha(){
    return(
        <>
            <body>
                <div className="d-flex flex-column wrapper">
                    <main className="flex-fill">
                        <div className="container">
                            <div className="row justify-content-center">
                                <form className="col-sm-10 col-md-8 col-lg-6">
                                    <h1>Recuperação de Senha</h1>

                                    <div className="form-floating mb-3">
                                        <input type="email" id="txtEmail" className="form-control"
                                            placeholder=" " autofocus/>
                                        <label for="textEmail">E-mail</label>
                                    </div>

                                    <button type="button" onclick="window.location.href=
                                        'confirmrecupsenha.html'" className="btn btn-lg btn-dark">
                                        Recuperar Senha</button>
                                    
                                    <p className="mt-3">
                                        Ainda não é cadastrado? <Link to="/cadastro">Clique aqui</Link>
                                            para se cadastrar.
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

export default Recuperar_senha;