import React from "react";
import styles from "./SideBar.module.scss";
import classNames from "classnames";

export const SideBar = ({ showSideBar, handleShowSideBar }) => {
  return (
    <section className={styles.container}>
      <div
        className={classNames({
          iternal: true,
          show: showSideBar,
          hide: !showSideBar,
        })}
      ></div>
      <div className={styles.blurContainer} onClick={handleShowSideBar} />
    </section>
  );
};
