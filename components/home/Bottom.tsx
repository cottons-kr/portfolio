import styles from '@/styles/home/bottom.module.scss'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Variants, motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'

export function HomeBottom() {
  const { t } = useTranslation('home')

  const helloVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: (i: number) => ({
      opacity: 0.8,
      y: 0,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 1.5,
        delay: i * 0.1 + 0.3,
      },
    }),
  }

  return <>
    <div className={styles.bottom}>
      <div className={styles.hello}>{
        ['Hola', 'Hello', 'Bonjour', '안녕하세요', 'こんにちは'].map((hello, i) => (
          <motion.span key={i} custom={i} variants={helloVariants} initial='hidden' animate='visible'>{hello}</motion.span>
        ))
      }</div>
      <div className={styles.scroll}>
        <FontAwesomeIcon icon={faArrowDown} />
        <p>{t('Scroll down to explore')}</p>
      </div>
    </div>
  </>
}
