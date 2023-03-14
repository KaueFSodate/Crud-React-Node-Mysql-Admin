import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/style.css'


function EditAdmin() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [fone, setFone] = useState("");
    const [nascimento, setNascimento] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getUserById();
      }, []);
    
      const updateUser = async (e) => {
        e.preventDefault();
        try {
          await axios.patch(`http://localhost:8080/users/${id}`, {
            nome,
            email,
            fone,
            nascimento
          });
          navigate("/users");
        } catch (error) {
          console.log(error);
        }
      };

      const getUserById = async () => {
        const response = await axios.get(`http://localhost:8080/users/${id}`);
        setNome(response.data.nome);
        setEmail(response.data.email);
        setFone(response.data.fone);
        setNascimento(response.data.nascimento);
        console.log(response.data)
      };

  return (
    
    <form onSubmit={updateUser}>
      <div className="Form">
        <label className="label">Name</label>

          <input
            type="text"
            className="input"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Name"
          />
        <label className="label">Email</label>
          <input
            type="text"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        <label className="label">Telefone</label>
          <input
            type="text"
            className="input"
            value={fone}
            onChange={(e) => setFone(e.target.value)}
            placeholder="Telefone"
          />
        <label className="label">Nascimento</label>
          <input
            type="text"
            className="input"
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
            placeholder="Nascimento"
          />
        <button type="submit" className="button is-success">
          Editar
        </button>
      </div>
    </form>

  )
}

export default EditAdmin