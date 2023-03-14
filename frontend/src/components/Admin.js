import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/style.css'

function Admin() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        mostrarAdmin();
    }, []);

    const mostrarAdmin = async () => {
        const response = await axios.get("http://localhost:8080/users");
        setUser(response.data);
    };

    const deleteUser = async (id) => {
        try {
          await axios.delete(`http://localhost:8080/users/${id}`);
          mostrarAdmin();
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div className="Principal">
            <div className="">
                <Link to={`add`} className="">
                <button>Adicionar</button>
                </Link>
                <table className="tablePrincipal">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Nascimento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.nome}</td>
                            <td>{user.email}</td>
                            <td>{user.fone}</td>
                            <td>{user.nascimento}</td>
                            <td>
                            <Link
                                to={`edit/${user.id}`}
                                className="button is-small is-info mr-2"
                            >
                                <button>Editar</button>
                            </Link>
                            <button
                                onClick={() => deleteUser(user.id)}
                                className="deletar"
                            >
                                Excluir
                            </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
      </div>
    </div>
    )
}

export default Admin