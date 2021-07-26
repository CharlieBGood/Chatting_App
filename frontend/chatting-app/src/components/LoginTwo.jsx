import React, {useState} from 'react';
import FormInputs from './comp_config/FormInputs';
/* import '../../index.css'; */
import { FormUser, ContainerButton, PushButton, AlertError, MsnSuccess } from './elements/elementsForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

function LoginTwo() {

     const [newPassword, setNewpassword] = useState({field:'', condition: null});
     const [confPassword, setConfpassword] = useState({field:'', condition: null});
     const [formOK, setFormok]= useState(null);

     const multiregex = {
          newPassword: /^.{4,12}$/,
     }

     const validatePassword = () => {
          if(newPassword.field.length > 0){
               if(newPassword.field !== confPassword.field){
                    setConfpassword((prevState)=>{
                         return {...prevState,  condition: 'false'}
                    });
               }else{
                    setConfpassword((prevState)=>{
                         return {...prevState,  condition: 'true'}
                    });
               }
          }
     }

     const MainLogin = (e) => {
          e.preventDefault();
          if(
               newPassword.condition === 'true' &&
               confPassword.condition === 'true'
          ){
               setFormok(true);
               setNewpassword({field:'', condition: null})
               setConfpassword({field:'', condition: null})
          }else{
               setFormok(false);
          }
     }

     return (
          <main>
               <FormUser action="" onSubmit={MainLogin}>

               <FormInputs
                         status={newPassword}
                         change={setNewpassword}
                         id="newPassword"
                         name="newPassword"
                         type="password"
                         label="New Password"
                         placeholder="New Password"
                         patternRegex={multiregex.newPassword}
                         message="Please enter a strong password with symbols, ambiguities, irrational and illogical reading"
                    />

               <FormInputs
                         status={confPassword}
                         change={setConfpassword}
                         id="confPassword"
                         name="confPassword"
                         type="password"
                         label="Confirm Password"
                         placeholder="Password"
                         /* patternRegex={multiregex.confPassword} */
                         message="Please repeat the password"
                         passfunction={validatePassword}
                    />

                    {formOK === false && <AlertError>
                         <p>
                              <FontAwesomeIcon icon={faExclamationCircle}/>
                              <b>Error:</b> Please enter the data correctly!
                         </p>
                    </AlertError>}

                    <ContainerButton>
                         <PushButton type="submit">Login</PushButton>
                         {formOK === true && <MsnSuccess>Login correctly!</MsnSuccess>}
                    </ContainerButton>

               </FormUser>
          </main>
     );
}

export default LoginTwo