import styles from './Menu.module.css';
import Enlace from './Enlace';

function Menu({ enlaces }) {
  return (
    <nav className={styles.menuBarra}>
      <ul className={styles.menu}>
        {enlaces.map((enlace, idx) => (
          <li key={idx}>
            <Enlace
              texto={enlace.texto}
              url={enlace.url}
              className={styles.menu__enlace}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;