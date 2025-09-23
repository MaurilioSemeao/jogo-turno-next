import styles from "../styles/HpBar.module.css";

export default function HpBar({ hp, maxHp }) {

    const percent = Math.max(0, (hp / maxHp) * 100);

    return (
        <div className={styles.container}>
            <div className={styles.fill} style={{ width: `${percent}%` }} />
            <span className={styles.label}>{hp} / {maxHp}</span>
        </div>
    );
}