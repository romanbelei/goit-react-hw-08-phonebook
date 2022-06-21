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

export default function LoginView() {
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
      authOperations.logIn({ email: data.email, password: data.password })
    );
    // setEmail('');
    // setPassword('');
    reset();
  };
  // const onSubmit = e => {
  //   e.preventDefault();
  //   dispatch(authOperations.logIn({ email, password }));
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <ModalWindow>
      <h1>Login</h1>
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
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
        to="/register"
        exact="true"
        style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      >
        or Registration
      </NavLink>
    </ModalWindow>
  );
}
