import React, { useState, Fragment } from "react";
import { Input, Button, Table, FormGroup } from 'reactstrap';

// import './Navigation.css';
import './Products.css';

import { nanoid } from "nanoid";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const List = () => {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });
  
    const [editFormData, setEditFormData] = useState({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });
  
    const [editContactId, setEditContactId] = useState(null);
  
    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };
  
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newContact = {
        id: nanoid(),
        fullName: addFormData.fullName,
        address: addFormData.address,
        phoneNumber: addFormData.phoneNumber,
        email: addFormData.email,
      };
  
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedContact = {
        id: editContactId,
        fullName: editFormData.fullName,
        address: editFormData.address,
        phoneNumber: editFormData.phoneNumber,
        email: editFormData.email,
      };
  
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === editContactId);
  
      newContacts[index] = editedContact;
  
      setContacts(newContacts);
      setEditContactId(null);
    };
  
    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditContactId(contact.id);
  
      const formValues = {
        fullName: contact.fullName,
        address: contact.address,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditContactId(null);
    };
  
    const handleDeleteClick = (contactId) => {
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === contactId);
  
      newContacts.splice(index, 1);
  
      setContacts(newContacts);
    };
  
    return (
      <div className="container-app">
        <form onSubmit={handleEditFormSubmit}>
          <Table className="table table-sm table-striped table-hover">
            <thead>
              <tr>
                <th>Código de Producto:</th>
                <th>Nombre del Producto:</th>
                <th>Valor Unitario:</th>
                <th>Número de Existencia:</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </Table>
        </form>
  
        <h2>Añadir un nuevo producto:</h2>
        <FormGroup className="group" onSubmit={handleAddFormSubmit}>
          <Input
            type="text"
            name="fullName"
            required="required"
            placeholder="Código de Producto"
            onChange={handleAddFormChange}
          />
          <Input
            type="text"
            name="address"
            required="required"
            placeholder="Nombre del Produto"
            onChange={handleAddFormChange}
          />
          <Input
            type="text"
            name="phoneNumber"
            required="required"
            placeholder="Valor Unitario"
            onChange={handleAddFormChange}
          />
          <Input
            type="email"
            name="email"
            required="required"
            placeholder="Número de Existencia"
            onChange={handleAddFormChange}
          />
          <Button type="submit">Agregar</Button>
        </FormGroup>
      </div>
    );
  };
  
  export default List;