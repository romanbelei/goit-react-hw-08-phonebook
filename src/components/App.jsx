import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import HomeView from '../views/HomeView';
import ContactsView from '../views/ContactsView';
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';
import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import PrivateRoute from '../Route/PrivateRoute';
import PublicRoute from '../Route/PublicRoute';
import { authOperations, authSelectors } from '../redux/auth';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomeView />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsView />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                {/* <Modal open="true"> */}
                <RegisterView />
                {/* </Modal> */}
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                {/* <Modal open="true"> */}
                <LoginView />
                {/* </Modal> */}
              </PublicRoute>
            }
          />
          <Route path="*" element={<HomeView />} />
        </Routes>
      </Container>
    )
  );
};
