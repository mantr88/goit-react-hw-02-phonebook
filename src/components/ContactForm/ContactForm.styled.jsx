import styled from "styled-components";
import { Form as FormikForm, ErrorMessage as FormikErrorMessage, Field as FormikField } from 'formik';

export const Form = styled(FormikForm)`
    margin-bottom: 25px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Field = styled(FormikField)`
    padding: 10px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
    color: red;
`;