import React from "react";
import error from "../../assets/img/404.png";
import styles from "./styles.module.scss";

export default function Error() {
  return (
    <main className={`flex-fill text-center ${styles.error}`}>
      <img src={error} alt="404" width="80%" />
    </main>
  );
}
