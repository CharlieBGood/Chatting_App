import React from 'react'
import { Input, GrupoInput, LeyendaError } from './FormItems';

const ComponentInput = ({estado, cambiarEstado, type, nombre, placeholder, icono, expresionRegular, leyendaError}) =>{

    
    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value});
    }

    const validacion = () => {
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'})
            }
            else{
                cambiarEstado({...estado, valido: 'false'})
            }
        }
    }
    
    return(

        <div  >
            <GrupoInput>

            <Input 
                    type={type} 
                    name={nombre} 
                    placeholder={placeholder}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}/>
            <span className="focus-input100"></span>
            <span className="symbol-input100">
                <i className={icono} aria-hidden="true"></i>
            </span>

            </GrupoInput>

            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
 
        </div>
        

    )
}

export default ComponentInput;

