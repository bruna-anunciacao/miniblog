import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const user = {
        displayName,
        email,
        password,
    }
    if (password !== confirmPassword) {
        setError("As senhas não conferem");
        return;
    }
    console.log(user);
  };
  return (
    <div className={styles.register}>
      <div className={styles.titleRegisterWrapper}>
        <h1>Cadastre-se aqui para começar</h1>
        <p>É rápido e fácil</p>
      </div>
      <form onSubmit={handleSubmit}>
        {error && <p className='error'>{error}</p>}
        <label>
          <span className="spanBlue">Nome:</span>
          <input
            type="text"
            name="displayName"
            placeholder="Nome do usuário"
            required
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="E-mail do usuário"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span className="spanBlue">Senha:</span>
          <input
            type="password"
            name="password"
            placeholder="Senha do usuário"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirme a senha:</span>
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirme a senha"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <div className={styles.btnWrapper}>
          <button className="btn">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
