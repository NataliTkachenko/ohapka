import React from "react";
import styles from "./NavBarMobile.module.scss";

function NavBarMobile() {
  return (
    <div className={styles.navbar}>
      <a href="#catalog" className={styles.navlink}>
        Каталог
      </a>
      <a href="#flowers" className={styles.navlink}>
        Цветы
      </a>
      <a href="#plants" className={styles.navlink}>
        Растения
      </a>
      <a href="#contacts" className={styles.navlink}>
        Контакты
      </a>
    </div>
  );
}

export default NavBarMobile;
