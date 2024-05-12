import { AboutGallery } from '@/components/about/Gallery'
import { AboutProfile } from '@/components/about/Profile'
import { AboutSkills } from '@/components/about/Skills'
import { HomeBottom } from '@/components/home/Bottom'
import { HomeNavbar } from '@/components/home/Navbar'
import { HomeTitle } from '@/components/home/Title'
import styles from '@/styles/home/home.module.scss'
import { Variants, motion } from 'framer-motion'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'

export default function Home() {
  const [shouldRender, setShouldRender] = useState(false)

  const sectionVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 1.5,
        delay: i * 0.1 + 0.2,
      }, 
    }),
  }

  return <>
    <section className={styles.main}>
      <div className={styles.middle}>
        <HomeTitle />
        <HomeNavbar />
      </div>
      <div className={styles.bottom}>
        <HomeBottom /> 
      </div>
    </section>
    <section className={styles.about}>
      <motion.div className={styles.sections} onViewportEnter={() => setShouldRender(true)} onViewportLeave={() => setShouldRender(false)}>{
        shouldRender ?
          <>
            <motion.div className={styles.section} variants={sectionVariants} initial='hidden' animate='visible' custom={0}>
              <AboutGallery />
            </motion.div>
            <motion.div className={styles.section} variants={sectionVariants} initial='hidden' animate='visible' custom={1}>
              <AboutProfile />
            </motion.div>
            <motion.div className={styles.section} variants={sectionVariants} initial='hidden' animate='visible' custom={2}>
              <AboutSkills />
            </motion.div>
          </> :
          null
      }</motion.div>
    </section>
  </>
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const translations = await serverSideTranslations(ctx.locale || 'en', ['home', 'common'])

  return {
    props: translations,
  }
}
