import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>Powered by Nuvo Cargo</p>

      <nav>
        <ul>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
