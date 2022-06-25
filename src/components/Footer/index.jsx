function Footer() {
  return (
    <footer className="border-top text-muted bg-light">
      <div className="container">
        <div className="row py-3">
          <div className="col-12 col-md-4 text-center mb-2">
            &copy; 2021 - Quitanda Online LTDA ME
            <br />
            Rua Virtual Inexistente, 171, Cidadolândia <br />
            CNPJ 99.999.999/0001-99
          </div>

          <div className="col-12 col-md-4 text-center mb-2">
            <a
              className="text-decoration-none text-dark"
              href="/politica-privacidade"
            >
              Polílitica de Privacidade
            </a>
            <br />

            <a className="text-decoration-none text-dark" href="/termos-uso">
              Termos de Uso
            </a>
            <br />

            <a className="text-decoration-none text-dark" href="/quemsomos">
              Quem Somos
            </a>
            <br />

            <a
              className="text-decoration-none text-dark"
              href="/trocas-devolucoes"
            >
              Trocas e Devoluções
            </a>
          </div>

          <div className="col-12 col-md-4 text-center mb-2">
            <a className="text-decoration-none text-dark" href="/contato">
              Contato pelo Site
            </a>
            <br />
            E-mail:
            <a
              className="text-decoration-none text-dark"
              href="bertoldo:email@dominio.com"
            >
              bertoldo:email@dominio.com
            </a>
            <br />
            Telefone:
            <a
              className="text-decoration-none text-dark"
              href="phone:999999999"
            >
              (68) 9 9999-9999
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
