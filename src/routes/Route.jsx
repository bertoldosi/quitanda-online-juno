import React from "react";
import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

// CRIAÇÃO DE ROTA PRIVADA, SÓ ACESSAR SE O USUÁRIO FOR AUTENTICADO
// CASO O COMPONENTE POSSUA FILHOS, RENDERIZA O FILHO DENTRO DO PAI
const Route = ({
  isPrivate = false,
  component: Component,
  child: Child,
  ...rest
}) => {
  const { user } = "logado";

  return (
    <ReactDOMRoute
      {...rest}
      render={({ props, location }) => {
        return isPrivate === !!user ? (
          //CASO TENHA FILHO, MOSTRAR O PAI E O FILHO
          Child ? (
            <Component {...props}>
              <Child {...props} />
            </Component>
          ) : (
            //CASO NÃO TENHA FILHO, O COMPONENTE APENAS
            <Component {...props} />
          )
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
