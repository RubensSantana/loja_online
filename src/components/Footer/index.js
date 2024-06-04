import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer className="border-top text-muted bg-light">
            <div className="container">
                <div className="row py-3">
                    <div className="col-12 col-md-4 text-center">
                        &copy;2024 - Casa dos Bonés
                        <br/>
                        Rua Trinta e um de Março, 171, Guarapuava/Pr
                        <br/>
                        CNPJ 99.999.999/0001-99
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <Link to="/privacidade" class="text-decoration-none text-dark">
                            Política de Privacidade
                        </Link>
                        <br/>
                        <Link to="/termos" class="text-decoration-none text-dark">
                            Termos de Uso
                        </Link>
                        <br/>
                        <Link to="/quem_somos" class="text-decoration-none text-dark">
                            Quem Somos
                        </Link>
                        <br/>
                        <Link to="/trocas" class="text-decoration-none text-dark">
                            Troca e Devoluções
                        </Link>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <Link to="/" class="text-decoration-none text-dark">
                            Contato pelo Site
                        </Link>
                        <br/>
                        Email:
                        <Link to="/" class="text-decoration-none text-dark">
                            email@dominio.com
                        </Link>
                        <br/>
                        Telefone:
                        <Link to="phone: 42999990000" class="text-decoration-none text-dark">
                            (42) 99999-0000
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;