import React from 'react'
import logo from '../iconoFoto.png';
export default function Grupos() {
    return (
        <div class='contGrupo'>
            {/* Parte izquierda: barra de búsqueda de contactos */}
     <div class="busqueda">
        <h2>Agregar al grupo</h2>

        <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Nombre del contacto" title="Type in a name"></input>

        <ul id="myUL">
          <li>
            <div class='form-check'>
             <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
             <label class="form-check-label" for="defaultCheck1">Adele</label>
            </div>
          </li>
          <li>
            <div class='form-check'>
             <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
             <label class="form-check-label" for="defaultCheck1">Agnes</label>
            </div>
          </li>
          <li>
            <div class='form-check'>
             <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
             <label class="form-check-label" for="defaultCheck1">Billy</label>
            </div>
          </li>
          <li>
            <div class='form-check'>
             <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
             <label class="form-check-label" for="defaultCheck1">Bob</label>
            </div>
          </li>
          <li>
            <div class='form-check'>
             <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
             <label class="form-check-label" for="defaultCheck1">Calvin</label>
            </div>
          </li><li>
            <div class='form-check'>
             <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
             <label class="form-check-label" for="defaultCheck1">Christina</label>
            </div>
          </li><li>
            <div class='form-check'>
             <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
             <label class="form-check-label" for="defaultCheck1">Cindy</label>
            </div>
          </li>
        </ul>
        <button type='button'>Guardar</button>
     </div>
     
     {/* Parte derecha: Configuraciones de grupo    */}
      <div  class="configGrupo"> 
        <h2>Configuracion del grupo</h2>
        <h3 id="nombreGrupo">Nuevo Grupo</h3>
        <img src={logo} id="fotoGrupo" alt="logo" />
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Nombre del grupo" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>       
        <div class="input-group mb-3">
         <input type="file" class="form-control" id="inputGroupFile02"/>
         <label class="input-group-text" for="inputGroupFile02">Subir</label>
        </div>
        <button type='button'>Guardar</button>
      </div>
        </div>
    )
}