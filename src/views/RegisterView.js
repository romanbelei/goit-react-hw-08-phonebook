import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import ModalWindow from '../components/Modal/Modal';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    // defaultValues: {
    //   email: 'bly@ukr.net',
    //   password: 112233,
    // },
  });
  const onSubmit = data => {
    dispatch(
      authOperations.register({
        name: data.name,
        email: data.email,
        password: data.password,
      })
    );
    reset();
  };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(authOperations.register({ name, email, password }));
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <ModalWindow>
      <h1>Registration</h1>
      <div className="App">
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
          <label className="label">
            Email:
            <input
              type="email"
              {...register('email', {
                required: " поле обов'язкове до заповнення!",
              })}
            />
          </label>
          <div style={{ height: 40 }}>
            {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
          </div>

          <label className="label">
            Password:
            <input
              {...register('password', {
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
      <NavLink
        to="/login"
        exact="true"
        style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      >
        or Login
      </NavLink>
    </ModalWindow>
  );
}
