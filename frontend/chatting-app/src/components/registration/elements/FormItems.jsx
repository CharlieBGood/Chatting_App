import styled, {css} from "styled-components";


    const colores = {
        borde: "#0075FF",
        error: "#bb2929",
        exito: "#1ed12d"
      };

      const GrupoInput = styled.div`
        position: relative;
        z-index: 90;
        `;

      const Input = styled.input`
        font-family: Poppins-Medium;
        font-size: 15px;
        line-height: 1.5;
        color: #666666;
        outline:none;
        display: block;
        width: 100%;
        background: #e6e6e6;
        height: 50px;
        border-radius: 25px;
        padding: 0 30px 0 68px;
        &:focus {
            border: 3px solid ${colores.borde};
            outline: none;
            box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
        }
        ${props => props.valido === 'true' && css`
            border: 3px solid transparent;
        `}
        ${props => props.valido === 'false' && css`
            border: 3px solid ${colores.error} !important;
        `}
        `;


    const LeyendaError = styled.p`
        font-size: 12px;
        margin-bottom: 0;
        color: ${colores.error};
        display: none;
        ${props => props.valido === 'true' && css`
            display: none;
        `}
        ${props => props.valido === 'false' && css`
            display: block;
        `}
        `;

    export {
        GrupoInput,
        Input,
        LeyendaError
    }