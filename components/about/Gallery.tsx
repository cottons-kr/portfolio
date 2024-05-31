import styles from '@/styles/about/gallery.module.scss'
import { faArrowRight, faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

interface RatioImageProps {
  src: string
  ratio: number
  alt: string
}
function RatioImage(props: RatioImageProps) {
  const { src, ratio, alt } = props

  return <>
    <Image className={styles.image} src={`/images/gallery/${src}.JPEG`} width={110} height={Math.round(110 * ratio)} alt={alt} />
  </>
}

export function AboutGallery() {
  const { t } = useTranslation('about')

  return <>
    <div className={styles.gallery}>
      <p className={styles.text}>I love to capture all moments in my life<br />even it is small or special thing.</p>
      <div className={styles.grid}>
        <div className={styles.left}>
          <RatioImage src='IMG_0127' ratio={4/3} alt={t('Black and white domestic short-haired cat sitting on a textured surface, casting a long shadow in natural sunlight. His name is Leo.')} />
          <div className={styles.somePictures}>
            <FontAwesomeIcon icon={faCamera} />
            <span>{t('Some Pictures I took')}</span>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <RatioImage src='IMG_0803' ratio={1} alt='A lush green tree with white blossoms in front of a modern building with dark grey and light brown panels and large windows.' />
            <RatioImage src='IMG_0209' ratio={4/3} alt='A serene evening view of a lighthouse on a pier, with its light reflecting on the calm sea under the soft blue sky.' />
            <RatioImage src='IMG_0752' ratio={4/3} alt='A serene sunset over a calm body of water, with the orange sun casting a warm glow across the sky and reflecting on the water’s surface. A solitary bird is silhouetted against the sunset, flying in the sky. In the distance, dark outlines of hills are visible under the colorful sky.' />
            <RatioImage src='IMG_0428' ratio={1} alt='A close-up view of a tree with small white flowers and green leaves in the foreground, with a section of a modern building visible in the background under a clear blue sky.' />
          </div>
          <Link href='https://gallery.tyeongkim.me/' target='_blank'>
            <div className={styles.link}>
              <div className={styles.seeMore}>
                {t('See more in Gallery')}
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </>
}
