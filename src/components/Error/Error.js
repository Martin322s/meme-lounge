import styles from './styles/Error.module.css';

export const Error = (props) => {
    return <p className={styles["error"]}>{props.text}</p>;
};