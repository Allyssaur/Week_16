import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UpdateForm from './UpdateForm';


function UpdateModal({taskId}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <span className="text-gradient"><i id="pencil" className="fas fa-pencil-alt" onClick={handleShow}></i></span>
  
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Update Your Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateForm taskId={taskId}/>

      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }

  export default UpdateModal;