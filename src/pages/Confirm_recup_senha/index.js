import { Link } from 'react-router-dom';

function Confirm_recup_senha(){
    return(
        <>
            <body>
                <div class="d-flex flex-column wrapper">
                    <main class="flex-fill">
                        <div class="container">
                            <h1>Instruções Enviadas!</h1>
                            <hr/>
                            <p>
                                Caro cliente,
                            </p>
                            <p>
                                As instruções para a realização de cadastro de uma nova senha foram enviadas para o e-mail <b>email@dominio.com.br</b>. Abra a mensagem que lhe enviamos e siga as instruções corretamente para cadastrar uma nova senha.
                            </p>
                            <p>
                                Agradecemos pela confiança em nossos serviços.
                            </p>
                            <p>
                                Cordialmente,<br/>
                                Central de Relacionamento Casa dos Bonés
                            </p>
                            <p>
                                <Link to="/" class="btn btn-lg btn-dark">Voltar à Página Principal</Link>
                            </p>
                        </div>
                    </main>
                </div>
            </body>
        </>
    );
}

export default Confirm_recup_senha;