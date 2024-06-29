import React from "react";
import OneProductCard from "../../components/Card";
import styles from "./Bukety.module.scss";

export default function Bukety() {
  return (
    <div className={styles.wrapper}>
      <div>Buket</div>
      <OneProductCard />
    </div>
  );
}
