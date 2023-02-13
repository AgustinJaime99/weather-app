import Image from 'next/image'
import ErrorImage from '@/public/images/error_image.png'
import styles from '@/styles/Layout.module.scss'

export const Error = () => {
  return (
    <div className={styles.centered_container}>
      <h2>
        We couldn't find your place :(
      </h2>
      <Image src={ErrorImage} alt='error' width={500} height={500} />
    </div>
  )
}
