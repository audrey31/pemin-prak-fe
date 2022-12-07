import styles from "../styles/Thanks.module.css";

const Thanks = () => {
  return (
    <body className={styles.body_config}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <img src="https://cdn.discordapp.com/attachments/769141849545506826/1050097254427529216/thanksdawg.png"></img>
        <div style={{ marginTop : "1rem" }}>
          <span className={styles.wave}>👋</span>
          <span className={styles.wave}>👋</span>
          <span className={styles.wave}>👋</span>
        </div>
      </div>
    </body>
  );
};

export default Thanks;
