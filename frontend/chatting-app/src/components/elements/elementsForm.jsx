import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colors = {
     boundary: "#1b4f8f",
     error: "#FF3131",
     success: "#39ff14",
     alert: "#3b1b43"
}

const FormUser = styled.form`
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 10px;

     @media (max-width: 800px){
          grid-template-columns: 1fr;
     }
`;

const Label = styled.label`
     display: block;
     font-weight: 900;
     padding: 5px;
     min-height: 40px;
     cursor: pointer;

     ${props => props.condition === 'false' && css`
          color: ${colors.error};
     `}
`;

const Inputs = styled.div`
     position: relative;
     z-index: 90;
`;

const Input = styled.input`
     width: 100%;
     background: #ffffff;
     border-radius: 3px;
     height: 45px;
     line.height: 45px;
     padding: 0 50px 0 10px;
     transition: 0.4s ease all;
     border: 3px solid transparent;

     &:focus {
          border: 3px solid ${colors.boundary};
          outline: none;
          box-shadow: 3px 0px 35px rgba(165, 165, 165, 0.4) ;
     }

     ${props => props.condition === 'true' && css`
          border: 3px solid transparent;
     `}

     ${props => props.condition === 'false' && css`
          border: 3px solid ${colors.error} !important;
     `}
`;

const MsnError = styled.p`
     font-size: 12px;
     margin-bottom: 0;
     color: ${colors.error};
     display: none;

     ${props => props.condition === 'true' && css`
          display: none;
     `}

     ${props => props.condition === 'false' && css`
          display: block;
     `}
`;

const IconValidation = styled(FontAwesomeIcon)`
     position: absolute;
     right: 10px;
     bottom: 14px;
     z-index: 100;
     font-size: 16px;
     opacity: 0;

     ${props => props.condition === 'true' && css`
          opacity: 1;
          color: ${colors.success}
     `}

     ${props => props.condition === 'false' && css`
          opacity: 1;
          color: ${colors.error}
     `}
`;

const ContainerCheck = styled.div`
     grid-column: span 2;
     input{
          margin-right: 10px;
     }

     @media (max-width: 800px)
     grid-column: span 1;
`;

const ContainerButton = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     grid-column: span 2;

     @media (max-width: 800px)
     grid-column: span 1;
`;

const PushButton = styled.button`
     height: 45px;
     line-weight: 45px;
     width: 30%;
     background: navy;
     color: orange;
     font-weight: bold;
     border: none;
     border-radius: 3px;
     cursor: pointer;
     transition: 0.1s ease all;

     &:hover{
          box-shadow: 3px 0px 35px rgba(163, 163, 163, 1 ) ;
     }
`;

const AlertError = styled.div`
     height: 45px;
     line-height: 45px;
     background: ${colors.error};
     padding: 0 15 px;
     border-radius: 3px;
     grid-column: span 2;

     p {
          margin: 0 0 0 15px;
     };
     b {
          margin-left: 10px;
     }

     @media (max-width: 800px)
     grid-column: span 1;
`;

const MsnSuccess = styled.p`
     font-size: 14px;
     color: ${colors.alert};

`;


export {
     FormUser,
     Label,
     Inputs,
     Input,
     MsnError,
     IconValidation,
     ContainerCheck,
     ContainerButton,
     PushButton,
     AlertError,
     MsnSuccess
};