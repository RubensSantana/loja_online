import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './pages/Home';
import Contato from './pages/Contato';
import Header from './components/Header';
import Footer from './components/Footer';
import Cadastro from "./pages/Cadastro";
import Carrinho from "./pages/Carrinho";
import Fechamento_itens from "./pages/Fechamento_itens";
import Fechamento_endereco from "./pages/Fechamento_endereco";
import Fechamento_pagamento from "./pages/Fechamento_pagamento";
import Fechamento_pedido from "./pages/Fechamento_pedido";
import Erro from "./pages/Erro";
import Login from "./pages/Login";
import Recuperar_senha from "./pages/Recuperar_senha";
import Confirm_recup_senha from "./pages/Confirm_recup_senha";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import Quem_Somos from "./pages/Quem_somos";
import Trocas from "./pages/Trocas";
import Cadastrar_nova_senha from "./pages/Cadastrar_nova_senha";
import Cliente from "./pages/Cliente";
import Cliente_dados from "./pages/Cliente_dados";
import Cliente_contatos from "./pages/Cliente_contatos";
import Cliente_endereco from "./pages/Cliente_endereco";
import Cliente_pedidos from "./pages/Cliente_pedidos";
import Cliente_favoritos from "./pages/Cliente_favoritos";
import Cliente_senha from "./pages/Cliente_senha";
import Produto from "./pages/Produto";


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contato" element={<Contato/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/carrinho" element={<Carrinho/>}/>
                <Route path="/fechamento_itens" element={<Fechamento_itens/>}/>
                <Route path="/fechamento_endereco" element={<Fechamento_endereco/>}/>
                <Route path="/fechamento_pagamento" element={<Fechamento_pagamento/>}/>
                <Route path="/fechamento_pedido" element={<Fechamento_pedido/>}/>
                <Route path="*" element={<Erro/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/recuperar_senha" element={<Recuperar_senha/>}/>
                <Route path="/confirm_recup_senha" element={<Confirm_recup_senha/>}/>
                <Route path="/privacidade" element={<Privacidade/>}/>
                <Route path="/termos" element={<Termos/>}/>
                <Route path="/quem_somos" element={<Quem_Somos/>}/>
                <Route path="/trocas" element={<Trocas/>}/>
                <Route path="/cadastrar_nova_senha" element={<Cadastrar_nova_senha/>}/>
                <Route path="/cliente" element={<Cliente/>}/>
                <Route path="/cliente_dados" element={<Cliente_dados/>}/>
                <Route path="/cliente_contatos" element={<Cliente_contatos/>}/>
                <Route path="/cliente_endereco" element={<Cliente_endereco/>}/>
                <Route path="/cliente_pedidos" element={<Cliente_pedidos/>}/>
                <Route path="/cliente_favoritos" element={<Cliente_favoritos/>}/>
                <Route path="/cliente_senha" element={<Cliente_senha/>}/>
                <Route path="/produto" element={<Produto/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default RoutesApp;