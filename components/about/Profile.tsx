import styles from '@/styles/about/profile.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ContactList } from '../home/Title'

function MyPictureSlide() {
  const [order, setOrder] = useState(0)
  const onClickSlide = () => setOrder(prev => {
    if (prev === 1) return 0
    return prev + 1
  })

  return <>
    <div className={styles.slide} onClick={onClickSlide}>
      <Image
        unoptimized
        className={styles.image} src='/images/my_face.png' width={130} height={175} alt='My face'
        style={{
          zIndex: order === 0 ? 1 : 0,
          transform: order === 0 ? 'translateX(0)' : 'translateX(10%) translateY(10%)',
        }}
      />
      <Image
        unoptimized
        className={styles.image} src='/images/my_back.png' width={130} height={175} alt='My back'
        style={{
          zIndex: order === 1 ? 1 : 0,
          transform: order === 1 ? 'translateX(0)' : 'translateX(10%) translateY(10%)',
        }}
      />
    </div>
  </>
}

export function AboutProfile() {
  const { t } = useTranslation('about')

  return <>
    <div className={styles.profile}>
      <div className={styles.title}>
        <span>{t('My name is')}</span>
        <h2>{t('Taeyeong Kim')}</h2>
      </div>
      <MyPictureSlide />
      <h2 className={styles.intro}>
        {t('I am a')}
        <span>{t('student developer')}</span>
        <br />
        <span>{t('in Sunrin Internet High School.')}</span>
      </h2>
      <div className={styles.description}>
        <p>{t('I am 17y old and studying programming since I was only 13.')}</p>
        <p>{t('I usually enjoy taking pictures with my phone and like to learn and know about brand-new technology.')}</p>
      </div>
      <ContactList />
    </div>
  </>
}
