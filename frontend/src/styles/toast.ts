import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const Toast = styled(ToastContainer)`
  .Toastify__toast--success {
    background: ${(props) => props.theme.colors.primaryColor};
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
  }

  .Toastify__toast--error {
    background: ${(props) => props.theme.colors.primaryColor};
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
  }
`;
