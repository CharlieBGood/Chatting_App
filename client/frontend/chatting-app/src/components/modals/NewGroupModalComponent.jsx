import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function RenderUsersList(props){
  var users = ['Adele', 'Agnes', 'Paquita la del barrio', 'Billy Joel', 'Bob Dylan'];
  var id = -1;
  const usersList = users.sort().map((user) =>{
      id++;
      return(
          <li className="list-group-item" id={"id_user_"+id}
          key={"id_user_"+id}>
            <div class="row">
              <div class="col-2">
                <input type="checkbox"></input>
              </div>
              <div class="col-10">
                {user}
              </div>
            </div>
          </li>
      );
  });

  return(
      <div class="scrollable w-100">
          <ul className="list-group">
              {usersList}
          </ul>
      </div>
  );
}

export default function NewGroup(props) {

    return (
      <Modal isOpen={props.isModalOpen} toggle={props.toggleModal} size='lg'>
          <ModalHeader>New Group</ModalHeader>
          <ModalBody>
              <div className='container border'>
                  <div class="row">
                      {/* Parte izquierda: barra de búsqueda de contactos */}
                      <div className="col-5 text-center mt-5">
                          <h1>App Users</h1>
                          <div className="form-group my-5">
                              <input type="text" id="myInput" onkeyup="myFunction()" 
                              placeholder="Contact name..." title="Type in a name" 
                              class="form-control w-75"/>
                          </div>
                          <RenderUsersList />
                      </div>
                      <div class="col-7"> 
                        <img src="images/iconoFoto.png" className="img-fluid" id="fotoGrupo" alt="logo" />
                        <input type="text" class="form-control w-100"></input>
                      </div>
                  </div>
              </div>
          </ModalBody>
          <ModalFooter>
              <Button color="primary" onClick={props.toggleModal}>Do Something</Button>{' '}
              <Button color="secondary" onClick={props.toggleModal}>Cancel</Button>
          </ModalFooter>
      </Modal>
    )
}