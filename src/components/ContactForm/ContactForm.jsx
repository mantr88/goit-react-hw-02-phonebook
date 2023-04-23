import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Form, ErrorMessage, FormField, Field } from './ContactForm.styled';

const UserSchema = Yup.object().shape({
    name: Yup.string().required('Requered field'),
})

export const ContactForm = ({addContact}) => {
    return (
        <Formik
      initialValues={{
        name: '',
      }}
      validationSchema={UserSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        addContact({...values, id: nanoid()})
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field 
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
          <ErrorMessage name="name" component="div" />
        </FormField>
        {/* <FormField>
          Image
          <Field name="number" />
          <ErrorMessage name="number" component="div" />
        </FormField> */}
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
    )
};