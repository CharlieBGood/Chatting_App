import React from 'react';
import { Label, Inputs, Input, MsnError, IconValidation } from '../elements/elementsForm.jsx';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const FormInput = ({status, change, id, name, type, label, placeholder, patternRegex, message, passfunction}) => {

     const onChange = (e) => {
          change({...status, field: e.target.value})
     }

     const validation = () => {
          if(patternRegex){
               if(patternRegex.test(status.field)){
                    change({...status, condition:'true'})
               }else{
                    change({...status, condition:'false'})
               }
          }

          if(passfunction){
               passfunction();
          }
     }

     return (
          <div>
               <Label condition={status.condition} htmlFor={name}>{label}</Label>
               <Inputs>
                    <Input
                         name={name}
                         type={type}
                         placeholder={placeholder}
                         value={status.field}
                         onChange={onChange}
                         onKeyUp={validation}
                         onBlur={validation}
                         condition={status.condition}
                    />

                    <IconValidation icon={faCog} condition={status.condition}/>
               </Inputs>
               <MsnError condition={status.condition}>{message}</MsnError>
          </div>

     );
}

export default FormInput



