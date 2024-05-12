import styles from '@/styles/home/title.module.scss'
import Link from 'next/link'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { fa0, faAt } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function ContactList() {
  const [hoveredIcon, setHoveredIcon] = useState<IconProp | null>(null)

  const IconLink = ({ icon, href }: { icon: IconProp, href: string }) => <>
    <Link
      className={hoveredIcon !== null && hoveredIcon !== icon ? styles.inactive : ''}
      href={href} target='_blank' onMouseEnter={() => setHoveredIcon(icon)} onMouseLeave={() => setHoveredIcon(fa0)}
    >
      <FontAwesomeIcon icon={icon} size='xl' />
    </Link>
  </>

  return <>
    <ul className={styles.contact} onMouseEnter={() => setHoveredIcon(fa0)} onMouseLeave={() => setHoveredIcon(null)}>
      <IconLink icon={faGithub} href='https://github.com/cottons-kr' />
      <IconLink icon={faInstagram} href='https://www.instagram.com/t.yeong.kim/' />
      <IconLink icon={faAt} href='mailto:devkim@hanarin.uk' />
    </ul>
  </>
}

export function HomeTitle() {
  const { t } = useTranslation('home')

  const textVariants = {
    hidden: {
      x: 20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 1.3,
        delay: 0.1,
      },
    },
  }
  const profileVariants = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 1.3,
        delay: 0.2,
      },
    },
  }

  return <>
    <div className={styles.title}>
      <motion.div className={styles.text} variants={textVariants} initial='hidden' animate='visible'>
        <h1>{t('Making parts of the world.')}</h1>
        <p>{t('Making the world more beneficial by creating meritorious services is my personal mission.')}</p>
      </motion.div>
      <div className={styles.line} />
      <motion.div className={styles.profile} variants={profileVariants} initial='hidden' animate='visible'>
        <h2>Taeyeong Kim</h2>
        <ContactList />
      </motion.div>
    </div>
  </>
}
