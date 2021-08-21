import React, {useState} from 'react';
import FormInputs from './FormInputs';

function FormPass() {

     const [oldPassword, setOldpassword] = useState({field:'', condition: null});
     const [newPassword, setNewpassword] = useState({field:'', condition: null});
     const [confPassword, setConfpassword] = useState({field:'', condition: null});

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

     return (

          <React.Fragment>
               <FormInputs
                         status={oldPassword}
                         change={setOldpassword}
                         id="oldPassword"
                         name="oldPassword"
                         type="password"
                         label="Old Password"
                         placeholder="Current Password"
                         /* patternRegex={multiregex.oldPassword} */
                         /* message="Please enter a name (max 1)! symbols, numbers, accents are not allowed" */
                    />

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
          </React.Fragment>
     )
}

export default FormPass
