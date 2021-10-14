import React from "react";
import {Button } from 'reactstrap';
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <Button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Editar
        </Button>
        <Button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
