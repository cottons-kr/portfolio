import styles from '@/styles/home/navbar.module.scss'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { AnimatePresence, Variants, motion } from 'framer-motion'

function LanguageSelector() {
  const { t } = useTranslation('common')
  const [opened, setOpened] = useState(false)
  const onClickSelector = () => setOpened(prev => !prev)
  
  const dropdownVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -15,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 0.5,
      },
    },
  }

  return <>
    <div className={styles.selector} onClick={onClickSelector}>
      <span>{t('lang')}</span>
      <FontAwesomeIcon className={opened ? styles.opened : ''} icon={faCaretDown} size='sm' />
      <AnimatePresence>{
        opened ?
          <motion.div className={styles.dropdown} variants={dropdownVariants} initial='hidden' animate='visible' exit='hidden'>
            <Link href='/' locale='en'>EN</Link>
            <Link href='/' locale='ko'>KR</Link>
          </motion.div> :
          null
      }</AnimatePresence>
    </div>
  </>
}

export function HomeNavbar() {
  const variants: Variants = {
    hidden: {
      scale: 0.95,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 1,
        delay: 0.4,
      },
    },
  }

  return <>
    <motion.nav className={styles.navbar} variants={variants} initial='hidden' animate='visible'>
      <Link href='/'>home</Link>
      <Link href='https://gallery.tyeongkim.me/' target='_blank'>gallery</Link>
      <Link href='/blog'>blog</Link>
      {/* <LanguageSelector /> */}
    </motion.nav>
  </>
}
