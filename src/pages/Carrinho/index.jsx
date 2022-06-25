import React, { useRef, useState } from "react";
import api from "../../api/api";

import styles from "./styles.module.scss";
import espera from "../../assets/img/espera.svg";

//Libs
import { toast } from "react-toastify";
import { Form } from "@unform/web";
import * as Yup from "yup";
import Input from "../../components/Input";
import { Result } from "antd";
import { Spinner } from "react-bootstrap";

// const cartaoTeste = {
//   nomeTitular: "Jose teste",
//   numeroCartao: "5448280000000007",
//   codigoSeguranca: "123",
//   mesExpiracao: "01",
//   anoExpiracao: "2028",
// };

function Carrinho() {
  const [isLoading, setIsLoading] = useState(false);
  const [isForm, setIsForm] = useState(true);
  const [isResultado, setIsResultado] = useState(false);
  const [typeResultStatus, setTypeResultStatus] = useState("");

  const formRef = useRef(null);

  function tokenizarCartao(data) {
    api
      .post("/tokenizar", data)
      .then((response) => {
        toast.success("Cartão criptografado!");
        gerarConta(response.data);
      })
      .catch((erro) => {
        toast.error(
          "Erro ao criptografado o cartão. Verefique se é validao e contate seu banco!"
        );

        setIsLoading(false);
        setIsForm(true);
        setIsResultado(false);
      });
  }

  function gerarConta(cardHash) {
    const conta = {
      charge: {
        description: "Compra em cartão de crédito teste",
        amount: 0.6,
        paymentTypes: ["CREDIT_CARD"],
      },
      billing: {
        name: "Quitanda online",
        email: "matheus.bertoldosi@gmail.com",
        document: "13132896047",
        address: {
          street: "Travessa nascimento",
          number: "92",
          city: "Rio Branco",
          state: "AC",
          postCode: "69907509",
        },
      },
    };

    api
      .post("/conta", conta)
      .then((response) => {
        pagarConta(response.data.id, cardHash);
      })
      .catch((erro) => {
        setIsLoading(false);
        setIsForm(true);
        setIsResultado(false);
        console.log(erro.response.data.details[0].message);
        toast.error(erro.response.data.details[0].message);
      });
  }

  function pagarConta(contaId, cardHash) {
    const pagador = {
      billing: {
        email: "matheus.bertoldosi@gmail.com",
        address: {
          street: "Travessa Nascimento",
          complement: "sem",
          number: "92",
          city: "Rio Branco",
          state: "AC",
          postCode: "69907509",
        },
        delayed: false,
      },
      creditCardDetails: {},
    };

    pagador.chargeId = contaId;
    pagador.creditCardDetails.creditCardHash = cardHash;

    console.log(pagador);

    api
      .post("/pagamento", pagador)
      .then((response) => {
        console.log(response);
        setTypeResultStatus(response.data.payments.status);
        toast.success("Pagamento realizado!");
        setTypeResultStatus("confirmado");
        setIsLoading(false);
        setIsForm(false);
        setIsResultado(true);
      })
      .catch((erro) => {
        setTypeResultStatus("negado");
        setIsLoading(false);
        setIsForm(false);
        setIsResultado(true);
        console.log(erro.response.data.details[0].message);
        toast.error(erro.response.data.details[0].message);
      });
  }

  const handleSubmit = async (data) => {
    setIsLoading(true);
    setIsForm(false);
    setIsResultado(false);
    try {
      // resetando os erros
      formRef.current?.setErrors({});

      // validando os dados
      const schema = Yup.object().shape({
        nomeTitular: Yup.string().required("* Campo obrigatório"),
        numeroCartao: Yup.string().required("* Campo obrigatório"),
        codigoSeguranca: Yup.string().required("* Campo obrigatório"),
        mesExpiracao: Yup.string().required("* Campo obrigatório"),
        anoExpiracao: Yup.string().required("* Campo obrigatório"),
      });

      // passando os dados para o schema validar os inputs
      await schema.validate(data, {
        abortEarly: false,
      });

      //Removendo espaços
      data.numeroCartao = await data.numeroCartao.replace(/\s/g, "");

      //Enviar
      tokenizarCartao(data);
    } catch (err) {
      setIsLoading(false);
      setIsForm(true);
      setIsResultado(false);
      console.log(err);
      // pegando os erros
      if (err instanceof Yup.ValidationError) {
        // criando uma lista para guardar os erros
        const errorMessages = {};

        // percorrendo os errors localizados no form
        err.inner.forEach((error) => {
          // add o erros na lista
          errorMessages[error.path] = error.message;
        });

        formRef.current?.setErrors(errorMessages);
      }
    }
  };

  return (
    <main className="flex-fill">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h3 className="text-center border-bottom py-3">
          Formulario de pagamento
        </h3>
        <hr />

        <br />

        {isResultado && (
          <>
            {typeResultStatus === "confirmado" ? (
              <Result
                status="success"
                title="Pagamento realizado com sucesso!"
                extra={[
                  <a
                    className="btn btn-primary"
                    href="/"
                    type="primary"
                    key="console"
                  >
                    Voltar
                  </a>,
                ]}
              />
            ) : (
              <Result
                status="error"
                title="Pagamento não realizado!"
                extra={[
                  <a
                    className="btn btn-primary"
                    href="/"
                    type="primary"
                    key="console"
                  >
                    Voltar
                  </a>,
                ]}
              />
            )}
          </>
        )}

        {isLoading && (
          <>
            <img
              className="mb-5"
              src={espera}
              width={300}
              alt="esperando resposta"
            />
            <Spinner animation="border" variant="success" />
          </>
        )}

        {isForm && (
          <>
            <Form
              onSubmit={handleSubmit}
              ref={formRef}
              className={`row g-3 m-2 ${styles.wrapper} `}
            >
              <div className="mb-3">
                <Input
                  label="Nome impresso no cartão"
                  name="nomeTitular"
                  placeholder="Maria Souza Silvinha"
                />
              </div>

              <div className="mb-3">
                <Input
                  label="Número do cartão"
                  name="numeroCartao"
                  placeholder="4556 9498 0128 7697"
                  mask={"cartao"}
                />
              </div>

              <div className="col-md-3">
                <Input
                  label="Ano"
                  name="anoExpiracao"
                  placeholder="2025"
                  mask={"ano"}
                />
              </div>

              <div className="col-md-3">
                <Input
                  label="Mês"
                  name="mesExpiracao"
                  placeholder="12"
                  mask={"mes"}
                />
              </div>

              <div className="col-md-6 mb-3">
                <Input
                  label="CVV"
                  name="codigoSeguranca"
                  placeholder="123"
                  mask={"cvv"}
                />
              </div>

              {/*<div className="mb-3">
            <label htmlFor="" className="form-label">
              Número de parcelamento
            </label>
            <select className="form-select" aria-label="Default select example">
              <option value="1">1 Parcela</option>
              <option value="2">2 Parcela</option>
              <option value="3">3 Parcela</option>
              <option value="4">4 Parcela</option>
            </select>
          </div>*/}

              <div className={styles.valorPedido}>
                <h4>Total:</h4>
                <span>R$ 0,60</span>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <button type="submit" className="btn btn-danger px-5 py-2 mb-5">
                  Fechar pedido
                </button>
              </div>
            </Form>
          </>
        )}
      </div>
    </main>
  );
}

export default Carrinho;
