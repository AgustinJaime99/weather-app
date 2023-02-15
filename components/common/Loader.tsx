import styles from '@/styles/Loader.module.scss'

export const Loader = () => {
  return (
    <div >
      <div className={styles.container}>
        <div className={styles.circle}>
          <div className={styles.bar} />
        </div>
        <div className={styles.circle}>
          <div className={styles.bar} />
        </div>
        <div className={styles.circle}>
          <div className={styles.bar} />
        </div>
        <div className={styles.base}>
          <div className={styles.bar} />
        </div>
      </div>
    </div>
  )
}
