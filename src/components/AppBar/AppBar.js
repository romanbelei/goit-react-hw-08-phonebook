import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/auth';
// import styles from './AppBar.module.css';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};
// console.log(styles.header);
export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
