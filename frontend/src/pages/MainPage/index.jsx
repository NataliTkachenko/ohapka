import React from "react";
import OneProductCard from "../../components/Card";
import styles from "./MainPage.module.scss";

export default function MainPage() {
  return (
    <div className={styles.main}>
      <OneProductCard />
    </div>
  );
}
