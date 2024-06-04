import { Link } from 'react-router-dom';

function Fechamento_pedido(){
    return(
        <>
            <body>
                <div className="d-flex flex-column wrapper">
                    <main className="flex-fill">
                        <div className="container text-center">
                            <h1>Obrigado!</h1>
                            <hr/>
                            <h3>Anote o número de seu pedido:</h3>
                            <h2 className="text-danger"><b>004571</b></h2>
                            <p>Em até 7 dias úteis, seu pedido será entregue. Qualquer dúvida sobre este
                                pedido, entre em contato conosco e informe o número do pedido para que
                                possamos te ajudar.</p>
                            <p>Tenha um ótimo dia!</p>
                            <p>
                                Atenciosamente,<br/>
                                Equipe Casa dos Bonés
                            </p>
                            <p>
                                <Link to="/" className="btn btn-dark btn-lg">Voltar à Página Principal</Link>
                            </p>
                        </div>
                    </main>
                </div>
            </body>

        </>
    );
}

export default Fechamento_pedido;