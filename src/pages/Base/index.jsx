import React from "react";
import styles from "./styles.module.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Base({ children }) {
  return (
    <section className="d-flex flex-column bd-highlight">
      <Header />
      <main className={styles.Main}>{children}</main>
      <Footer />
    </section>
  );
}

export default Base;
