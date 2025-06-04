import styles from './Menu.css';
import Enlace from './Enlace';

function Menu({ enlaces }) {
  return (
    <nav>
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