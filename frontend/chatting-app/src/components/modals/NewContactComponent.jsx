import { render } from '@testing-library/react'
import React from 'react'

export default function NewContact() {

    function RightSide(){
        if(true){
            return(
                <img src="images/iconoFoto.png" className="img-fluid" id="fotoGrupo" alt="logo" />
            );
        }
        else{
            return(
                'hi there'
            );
        }
    };

    return (
        <div className='container'>
            <div class="row">
                {/* Parte izquierda: barra de búsqueda de contactos */}
                <div className="col-5 text-center mt-5">

                    <h2>Agregar al grupo</h2>
                    <div className="form-group my-5">
                        <input type="text" id="myInput" onkeyup="myFunction()" 
                        placeholder="Nombre del contacto" title="Type in a name" 
                        class="form-control w-75"/>
                    </div>
                    

                    <ul id="myUL" className="list-group">
                        <li className="list-group-item active">
                            <div class='form-check'>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1">Adele</label>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div class='form-check'>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1">Agnes</label>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div class='form-check'>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1">Billy</label>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div class='form-check'>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1">Bob</label>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div class='form-check'>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1">Calvin</label>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div class='form-check'>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1">Christina</label>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div class='form-check'>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1">Cindy</label>
                            </div>
                        </li>
                    </ul>
                </div>
        
                {/* Parte derecha: Configuraciones de grupo    */}
                <div  class="col-7 text-center"> 
                   <RightSide />
                </div>
            </div>
        </div>
    )
}