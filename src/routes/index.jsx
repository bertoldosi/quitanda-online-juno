import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import QuemSomos from "../pages/QuemSomos";
import PoliticaPrivacidade from "../pages/PoliticaPrivacidade";
import TermosUso from "../pages/TermosUso";
import TrocasDevolucoes from "../pages/TrocasDevolucoes";
import Carrinho from "../pages/Carrinho";
import Error from "../pages/NotFound";
import Base from "../pages/Base";
import RecuperarSenha from "../pages/RecuperarSenha";

const Routes = () => {
  return (
    <Switch>
      {/* ROTA COM COMPONENTES FILHOS */}
      <Route path="/" exact component={Base} child={Home} />
      <Route exact path="/cadastro" component={Base} child={Cadastro} />
      <Route
        exact
        path="/recuperar-senha"
        component={Base}
        child={RecuperarSenha}
      />
      <Route path="/contato" exact component={Base} child={Contato} />
      <Route path="/quemsomos" exact component={Base} child={QuemSomos} />
      <Route path="/termos-uso" exact component={Base} child={TermosUso} />
      <Route
        path="/trocas-devolucoes"
        exact
        component={Base}
        child={TrocasDevolucoes}
      />
      <Route
        path="/politica-privacidade"
        exact
        component={Base}
        child={PoliticaPrivacidade}
      />

      {/* ROTA SEM COMPONENTES FILHOS */}
      <Route path="/login" exact component={Base} child={Login} />

      {/*<Route path="/dashboard" component={Dashboard} isPrivate />*/}
      <Route path="/carrinho" exact component={Base} child={Carrinho} />

      <Route path="*" exact component={Error} />
    </Switch>
  );
};

export default Routes;
