import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Carrinho from "../pages/Carrinho";
import Error from "../pages/NotFound";
import Base from "../pages/Base";

const Routes = () => {
  return (
    <Switch>
      {/* ROTA COM COMPONENTES FILHOS */}
      <Route path="/" exact component={Base} child={Home} />
      <Route path="/sobre" exact component={Base} child={Sobre} />

      {/* ROTA SEM COMPONENTES FILHOS */}
      {/* <Route path="/login" exact component={Base} child={Login} /> */}

      {/*<Route path="/dashboard" component={Dashboard} isPrivate />*/}
      <Route path="/carrinho" exact component={Base} child={Carrinho} />

      <Route path="*" exact component={Error} />
    </Switch>
  );
};

export default Routes;
