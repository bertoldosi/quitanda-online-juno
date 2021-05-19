import styles from "./styles.module.scss";

function RecuperarSenha() {
  return (
    <main className="flex-fill">
      <div className="container">
        <div className="row justify-content-center">
          <form className="col-sm-10 col-md-8 col-lg-6">
            <h1>Recuperação de Senha</h1>

            <div className="form-floating mb-3">
              <input
                type="email"
                id="txtEmail"
                className="form-control"
                placeholder=" "
                autoFocus
              />
              <label htmlFor="txtEmail">E-mail</label>
            </div>

            <button
              type="button"
              className="btn btn-lg btn-danger"
              data-toggle="modal"
              data-target="#modal"
            >
              Recuperar Senha
            </button>

            <p className="mt-3">
              Ainda não é cadastrado? <a href="/cadastro">Clique aqui</a> para
              se cadastrar.
            </p>
          </form>
        </div>

        {/* Confirmar recuperação de senha 
        <!-- Modal -->
        */}

        <div
          className="modal fade"
          id="modal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close btn btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="button" className="btn btn-primary">
                  Comfirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RecuperarSenha;
