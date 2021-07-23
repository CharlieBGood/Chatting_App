import React, {useState} from 'react';
import { FormUser, Label, Input, ContainerCheck, ContainerButton, PushButton, AlertError, MsnSuccess } from '../elements/elementsForm.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import FormInputs from './FormInputs';
import '../../index.css';

const FormUpdate = () => {

     const [name, setName] = useState({field:'', condition: null});
     const [surname, setSurname] = useState({field:'', condition: null});
     const [nameCompany, setNameCompany] = useState({field:'', condition: null});
     const [webpage, setWebpage] = useState({field:'', condition: null});
     const [email, setEmail] = useState({field:'', condition: null});
     const [cellphone, setCellphone] = useState({field:'', condition: null});
     const [github, setGithub] = useState({field:'', condition: null});
     const [linkedin, setLinkedin] = useState({field:'', condition: null});
     const [instagram, setInstagram] = useState({field:'', condition: null});
     const [facebook, setFacebook] = useState({field:'', condition: null});
     /* const [twitter, setTwitter] = useState({field:'', condition: null}); */
     /* const [nickname, setNickname] = useState({field:'', condition: null}); */
     const [formOK, setFormok]= useState(null);


     const multiregex = {
          name: /^[a-zA-Z0-9_-]{3,16}$/,
          surname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
          password: /^.{4,12}$/,
          email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          cellphone: /^\d{7,14}$/
     }

     const diveRush = (e) => {
          e.preventDefault();
          if(
               name.condition === 'true' &&
               surname.condition === 'true' &&
               email.condition === 'true' &&
               cellphone.condition === 'true'
          ){
               setFormok(true);
               setName({field:'', condition: null})
               setSurname({field:'', condition: null})
               setEmail({field:'', condition: null})
               setCellphone({field:'', condition: null})
               setNameCompany({field:''})
               setWebpage({field:''})
               setGithub({field:''})
               setLinkedin({field:''})
               setInstagram({field:''})
               setFacebook({field:''})
          }else{
               setFormok(false);
          }
     }

     return (
          <main>
               <FormUser action="" onSubmit={diveRush}>

                    <FormInputs
                         status={name}
                         change={setName}
                         id="name"
                         name="name"
                         type="text"
                         label="Name"
                         placeholder="First Name"
                         patternRegex={multiregex.name}
                         message="Please enter a name (max 1)! symbols, numbers, accents are not allowed"
                    />

                    <FormInputs
                         status={surname}
                         change={setSurname}
                         id="surname"
                         name="surname"
                         type="text"
                         label="Surname"
                         placeholder="Last Name"
                         patternRegex={multiregex.surname}
                         message="Please enter a name (max 2)! symbols, numbers, accents are not allowed"
                    />

                    <FormInputs
                         status={nameCompany}
                         change={setNameCompany}
                         id="company"
                         name="company"
                         type="text"
                         label="Business"
                         placeholder="Company  Corporation  Industry"
                         /* patternRegex={multiregex.surname} */
                         /* message="Please enter a name (max 2)! symbols, numbers, accents are not allowed" */
                    />

                    <FormInputs
                         status={webpage}
                         change={setWebpage}
                         id="webpage"
                         name="webpage"
                         type="text"
                         label="Web Page"
                         placeholder="Blog  WebPage  Briefcase  Sponsor"
                         /* patternRegex={multiregex.surname} */
                         /* message="Please enter a name (max 2)! symbols, numbers, accents are not allowed" */
                    />

                    <FormInputs
                         status={email}
                         change={setEmail}
                         id="email"
                         name="email"
                         type="email"
                         label="E-Mail"
                         placeholder="Electronic Mail"
                         patternRegex={multiregex.email}
                         message="Please enter a valid email, xample:  wolverine@xmen.org"
                    />

                    <FormInputs
                         status={cellphone}
                         change={setCellphone}
                         id="cellphone"
                         name="cellphone"
                         type="number"
                         label="Cellphone"
                         placeholder="Cellphone or Mobile number / Whatsapp Telegram"
                         patternRegex={multiregex.cellphone}
                         message="Please enter a number between 7 and 14 numbers, without dots, symbols or spaces"
                    />

                    <FormInputs
                         status={github}
                         change={setGithub}
                         id="github"
                         name="github"
                         type="text"
                         label="GitHub"
                         placeholder="Link of Github repository"
                         /* patternRegex={multiregex.name} */
                         /* message="Please enter a name (max 2)! symbols, numbers, accents are not allowed" */
                    />

                    <FormInputs
                         status={linkedin}
                         change={setLinkedin}
                         id="linkedin"
                         name="linkedin"
                         type="text"
                         label="LinkedIn"
                         placeholder="Link of LinkedIn Perfil"
                         /* patternRegex={multiregex.name} */
                         /* message="Please enter a name (max 2)! symbols, numbers, accents are not allowed" */
                    />

                    <FormInputs
                         status={facebook}
                         change={setFacebook}
                         id="facebook"
                         name="facebook"
                         type="text"
                         label="Facebook"
                         placeholder="Link of Facebook"
                         /* patternRegex={multiregex.name} */
                         /* message="Please enter a name (max 2)! symbols, numbers, accents are not allowed" */
                    />

                    <FormInputs
                         status={instagram}
                         change={setInstagram}
                         id="instagram"
                         name="instagram"
                         type="text"
                         label="Instagram"
                         placeholder="Link of Instagram"
                         /* patternRegex={multiregex.name} */
                         /* message="Please enter a name (max 2)! symbols, numbers, accents are not allowed" */
                    />


                    {/* <ContainerCheck>
                         <Label>
                              <Input type="checkbox" name="terms" id="terms" />
                              All records are correct?
                         </Label>
                    </ContainerCheck> */}

                    {formOK === false && <AlertError>
                         <p>
                              <FontAwesomeIcon icon={faExclamationCircle}/>
                              <b>Error:</b> Please enter the data correctly!
                         </p>
                    </AlertError>}

                    <ContainerButton>
                         <PushButton type="submit">Send</PushButton>
                         {formOK === true && <MsnSuccess>Information sent correctly!</MsnSuccess>}
                    </ContainerButton>

               </FormUser>
          </main>
     );
}

export default FormUpdate