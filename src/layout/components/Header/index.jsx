import Navigation from "../Navigation";
import styles from "./Header.module.scss";
function Header() {
    return (
        <header className={styles.header}>
            <Navigation className={styles.navigation} />
        </header>
    );
}
export default Header;
