import React from "react";

import Carousel from "../../components/Carousel";

import ProductList from "../../components/ProductList";
import { gql, useQuery } from "@apollo/client";

const GET_PRODUTOS = gql`
  query MyQuery {
    produtos {
      id
      nome
      preco
      imagem {
        id
        url
      }
      descricao
    }
  }
`;

function Home() {
  const { data } = useQuery(GET_PRODUTOS);

  return (
    <main>
      <Carousel />
      <ProductList produtos={data?.produtos} />
    </main>
  );
}

export default Home;
