import { useState } from "react";

interface Formdata {
  user: string;
  password: string;
}

import React from "react";

function FormLogin() {
  /! useState para manejar el formulario */;
  const [formData, setFormData] = useState<Formdata>({
    user: "",
    password: "",
  });

  /! Cuando se activa el submit ,amda la alerta si el envio es correcto */;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("informacion enviada exitosamente");
    // console.log("Se hace el submit");
    console.log(formData);
  };

  /! cuando se cambia el valor de un input mediante el uso de useState */;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    // let {user, password} = event.target
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h1>Form login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">User: </label>
        <input
          type="text"
          name="user"
          id="user"
          onChange={handleChange}
          placeholder="Insert user"
          required
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          placeholder="insert password"
          required
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </>
  );
}

export default FormLogin;
