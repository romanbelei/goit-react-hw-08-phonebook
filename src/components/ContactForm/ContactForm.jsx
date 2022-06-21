import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
// import { addContactsuccess } from '../../redux/contacts/contacts-actions';
import { contactsOperations } from '../../redux/contacts';
import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.css';

// export default function ContactForm(onClose) {
const ContactForm = ({ handleClick }) => {
  const dispath = useDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      namber: '',
    },
  });
  const onSubmit = data => {
    dispath(
      contactsOperations.addContact({
        name: data.name,
        number: data.number,
      })
    );
    reset();
  };
  return (
    <div className={styles.App}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          Name:
          <input
            type="name"
            {...register('name', {
              required: " поле обов'язкове до заповнення!",
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.name && <p>{errors?.name?.message || 'Error!'}</p>}
        </div>

        <label className={styles.label}>
          Number:
          <input
            {...register('number', {
              required: " поле обов'язкове до заповнення!",
              validate: value => value.length > 5,
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.password && <p>Мінімум 6 символів!</p>}
        </div>
        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
};
// }
export default ContactForm;

// const mapStateProps = state => {
//   return {};
// };

// const mapDispathToProps = dispath => {
//   return {
//     onAddContact: (name, number) =>
//       dispath(addContactAction({ name: name, number: number })),
//   };
// };
// export default connect(mapStateProps, mapDispathToProps)(ContactForm);
