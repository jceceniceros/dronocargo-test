import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <p className={classes.companyName}>Dronocargo</p>

      <div className={classes.user}>
        <p>Regina Cepeda</p>
        <span><AccountCircleIcon color="inherit" /></span>
      </div>
    </header>
  )
}

export default Header;
