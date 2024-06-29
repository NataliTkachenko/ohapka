import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.scss";
import flower from "./../../assets/flower.png";

export default function NavBar() {
  const [activeTab, setActiveTab] = useState(""); // состояние для активной вкладки

  useEffect(() => {
    // Установка активной вкладки при загрузке страницы
    setActiveTab(window.location.pathname);
  }, []);

  const handleTabClick = (path) => {
    setActiveTab(path);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <a href="/bukety">Цветы</a>
        <a href="/plants">Растения</a>
        <a href="/about">О нас </a>
      </div>
      <div className={styles.logo}>
        <img src={flower} alt="Лого" width="32px" height="32px" />
        <img src={flower} alt="Лого" width="32px" height="32px" />
        <img src={flower} alt="Лого" width="32px" height="32px" />
        <div className={styles.header}> Охапка</div>
      </div>
      <div className={styles.contactInfo}>
        <span className={styles.email}>example@example.com</span>
        <span className={styles.phone}>123-456-7890</span>
      </div>
    </div>
  );
}
