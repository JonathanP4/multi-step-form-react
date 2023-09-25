import styles from "./Sidebar.module.css";
import Pagination from "./Pagination";

export function Sidebar({ className }: { className?: string }) {
    return (
        <div className={`${styles.sidebar} ${className || ""} `}>
            <Pagination />
        </div>
    );
}
