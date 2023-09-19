import styles from "./Header.module.css";
import Pagination from "./Pagination";

function Header() {
    return (
        <div
            className={`${styles.header} grid justify-center items-start pt-md`}
        >
            <Pagination />
        </div>
    );
}
export default Header;
