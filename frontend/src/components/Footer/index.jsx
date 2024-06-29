import React from "react";
import styles from "./Footer.module.scss";
import telegramIcon from "../../../src/assets/tele.png";
import whatsappIcon from "../../../src/assets/whatsapp.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contact_info}>
        <h4>Свяжитесь с нами</h4>
        <p>Вы можете задать вопросы и заказать растения, связавшись с нами</p>
        <ul>
          <li>
            <a href="https://telegram.example.com">
              <img
                src={telegramIcon}
                width="24"
                height="24"
                fill="currentColor"
              />
            </a>
            Телеграм
          </li>
          <li>
            <a href="https://whatsapp.example.com">
              <img
                src={whatsappIcon}
                width="24"
                height="24"
                fill="currentColor"
              />
            </a>
            Whatsapp
          </li>
        </ul>
      </div>
    </div>
  );
}
