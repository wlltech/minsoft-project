
import React, { useState, useEffect, axios } from 'react';



const createUserFunction = (props) => {

    const [users, setUsers] = useState([])
    const [editing, setEditing] = useState(false)
    const [rolSelected, setRolSelected] = useState("")
    const [stateSelected, setStateSelected] = useState("")
    const [id, setId] = useState("")
    const [usersIdentification, setUsersIdentification] = useState(usersIdentification)

    const user = {         ///estos valores se llaman desde el valor del input o select 
        name: "",        // el llamado se hace como user.name por ejemplo
        email: "",
        rol: "",
        userState: ""
    }

    const usersData = {
        editing: false,  //este lo incluyo pero no entiendo a que se refiere
        rolSelected: "",
        stateSelected: "",  //este lo incluyo pero no entiendo a que se refiere
        id: ""
    }

    const onInputChange = (event) => {
          setUsersIdentification(
            {
                ...user, [event.target.name]: event.target.value
            }
            )
    }

    useEffect(() => {
            if (props.match.params.id) {
            const resp = await axios.get("http://localhost:8080/api/users" + props.match.params.id); ///esta url no existe, se define en el backend
            setUsersIdentification(
                {
                    name: resp.data.name,
                    email: resp.data.email,
                    rol: resp.data.rol,
                    userState: resp.data.userState
                }
            );

            setEditing(true); //true tengo dudas 
            setRolSelected(resp.data.rolSelected);
            setStateSelected(resp.data.stateSelected);
            setId(resp.data.id)

        }
    }, [])


    return (
        <div>
            <main class="container user">
                <h1>Gestión de Usuarios</h1>
                <form class="form-group" name="selector">
                    <label for="rol">Usuario</label>
                    <input class="form-control" />
                    <label for="rol">Seleccionar el rol</label>
                    <select class="form-control" name="rol" id="rol">
                        <option>Administrador</option>
                        <option>Vendedor</option>
                    </select>
                    <label for="rol">Estado del usuario</label>

                    <select class="form-control" name="estado" id="estado">
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No Autorizado</option>
                    </select>
                    <input type="button" id="btn" value="Update" onclick="update()" />
                </form>
            </main>
        </div>
    )

}