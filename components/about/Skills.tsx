import styles from '@/styles/about/skills.module.scss'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

enum SkillType {
  LANGUAGE = 'LANGUAGE',
  LIBRARY = 'LIBRARY',
  FRAMEWORK = 'FRAMEWORK',
  OTHER = 'OTHER',
}

interface Skill {
  type: SkillType
  name: string
  image: string
  width?: number
  height?: number
  subfix: {
    en: string
    kr: string
  }
  color: string
  description: {
    en: string
    kr: string
  }
}

const skills: Skill[] = [
  {
    type: SkillType.LANGUAGE,
    name: 'TypeScript',
    image: '/images/skills/typescript.png',
    subfix: {
      en: 'I always use $name.',
      kr: '$name를 항상 사용합니다.',
    },
    color: '#3178c6',
    description: {
      en: 'I use TypeScript for almost all projects. This site as well!',
      kr: '거의 대부분의 프로젝트를 TypeScript를 사용하여 개발하고 있습니다. 이 사이트 또한요!',
    },
  },
  {
    type: SkillType.LANGUAGE,
    name: 'JavaScript',
    image: '/images/skills/javascript.png',
    subfix: {
      en: 'I often use $name.',
      kr: '$name을 종종 사용합니다.',
    },
    color: '#f7df1e',
    description: {
      en: 'I use JavaScript when TypeScript is not needed or when I need to write scripts quickly.',
      kr: 'TypeScript가 필요하지 않거나 스크립트를 빠르게 작성해야 할 때 JavaScript를 사용합니다.',
    },
  },
  {
    type: SkillType.LANGUAGE,
    name: 'SCSS',
    image: '/images/skills/sass.png',
    height: 22,
    subfix: {
      en: 'I always use $name.',
      kr: '$name을 항상 사용합니다.',
    },
    color: '#c69',
    description: {
      en: 'I use SCSS for frontend styling. I love the abstract syntax tree the most!',
      kr: '프론트엔드 스타일링을 위해 SCSS를 사용합니다. 추상 구문 트리가 가장 맘에 듭니다!',
    },
  },
  {
    type: SkillType.LANGUAGE,
    name: 'Kotlin',
    image: '/images/skills/kotlin.png',
    subfix: {
      en: 'I am learning $name.',
      kr: '$name을 배우고 있습니다.',
    },
    color: '#9835EA',
    description: {
      en: 'I am learning Jetpack Compose and Kotlin together. Aside from web development, I am also working to expend my skills.',
      kr: 'Jetpack Compose와 Kotlin을 같이 배우고 있습니다. 웹 개발 외에도 제 능력을 더욱 확장하기 위해 노력하고 있습니다.',
    },
  },
  {
    type: SkillType.LANGUAGE,
    name: 'Python',
    image: '/images/skills/python.png',
    subfix: {
      en: 'I sometimes use $name.',
      kr: '$name을 가끔 사용합니다.',
    },
    color: '#3776AB',
    description: {
      en: 'I use Python when writing scripts or simple programs that will be used in several projects.',
      kr: '여러 프로젝트에서 사용할 스크립트나 간단한 프로그램을 작성할 때 Python을 사용합니다.',
    },
  },
  {
    type: SkillType.LANGUAGE,
    name: 'SQL',
    image: '/images/skills/sql.png',
    width: 40,
    height: 17,
    subfix: {
      en: 'I rarely use $name.',
      kr: '$name을 거의 사용하지 않습니다.',
    },
    color: '#26567a',
    description: {
      en: 'I use SQL when working with databases. I rarely use it because I use ORM in most projects. However, I use it when creating tables or fetching information.',
      kr: '데이터베이스를 다룰 때 SQL을 사용합니다. 여러 프로젝트에서 ORM을 사용하고 있기 때문에 거의 사용하지 않습니다. 다만 테이블을 생성하거나 여러 정보를 가져올 때 사용합니다.',
    },
  },
  {
    type: SkillType.LIBRARY,
    name: 'React',
    image: '/images/skills/react.png',
    height: 26,
    subfix: {
      en: 'I always use $name.',
      kr: '$name을 항상 사용합니다.',
    },
    color: '#61DAFB',
    description: {
      en: 'I use React for frontend development in most projects. I can handle React the best because I use it a lot.',
      kr: '대부분의 프로젝트에서 React를 사용하여 프론트엔드를 개발하고 있습니다. 많이 사용하는 만큼 React를 가장 잘 다룰 수 있습니다.',
    },
  },
  {
    type: SkillType.LIBRARY,
    name: 'Recoil',
    image: '/images/skills/recoil.jpg',
    width: 13,
    subfix: {
      en: 'I always use $name.',
      kr: '$name을 항상 사용합니다.',
    },
    color: '#000000',
    description: {
      en: 'I use Recoil for state management with React, but development is no longer active and I plan to replace it with another library.',
      kr: 'React와 함께 상태 관리를 위해 사용하지만 개발이 더이상 되지 않아 다른 라이브러리로 대체할 예정입니다.',
    },
  },
  {
    type: SkillType.LIBRARY,
    name: 'Prisma',
    image: '/images/skills/prisma.png',
    width: 25,
    subfix: {
      en: 'I usually use $name.',
      kr: '$name을 주로 사용합니다.',
    },
    color: '#2D3748',
    description: {
      en: 'I use Prisma in most projects when working with databases. Using ORM improves development speed and experience, so I use it a lot.',
      kr: '대부분의 프로젝트에서 데이터베이스를 다룰 때 Prisma를 사용합니다. ORM을 사용하면 개발 속도 및 경험이 향상되어 애용하고 있습니다.',
    },
  },
  {
    type: SkillType.LIBRARY,
    name: 'Framer Motion',
    image: '/images/skills/framer_motion.png',
    subfix: {
      en: 'I sometimes use $name.',
      kr: '$name을 가끔 사용합니다.',
    },
    color: '#610CFD',
    description: {
      en: 'I mainly use Framer Motion to handle animations in frontend.',
      kr: '프론트엔드에서 애니메이션을 다룰 때 주로 사용합니다.',
    },
  },
  {
    type: SkillType.LIBRARY,
    name: 'Socket.IO',
    image: '/images/skills/socketio.png',
    subfix: {
      en: 'I sometimes use $name.',
      kr: '$name을 가끔 사용합니다.',
    },
    color: '#010101',
    description: {
      en: 'I use Socket.IO when backend and real-time communication is needed. It provides more features than WebSocket and is convenient to use.',
      kr: '백엔드와 실시간 통신이 필요할때 사용합니다. WebSocket보다 많은 기능을 제공해 편리하게 사용할 수 있습니다.',
    },
  },
  {
    type: SkillType.LIBRARY,
    name: 'Swagger',
    image: '/images/skills/swagger.png',
    subfix: {
      en: 'I am learning $name.',
      kr: '$name을 배우고 있습니다.',
    },
    color: '#85EA2D',
    description: {
      en: 'I am learning Swagger to quickly document and test APIs.',
      kr: 'API를 빠르게 문서화하고 테스트하기 위해 배우고 있습니다.',
    },
  },
  {
    type: SkillType.LIBRARY,
    name: 'Redux',
    image: '/images/skills/redux.png',
    subfix: {
      en: 'I rarely use $name.',
      kr: '$name을 거의 사용하지 않습니다.',
    },
    color: '#764ABC',
    description: {
      en: 'I used Redux for state management before using Recoil, but I rarely use it after replacing it with Recoil.',
      kr: 'Recoil 전에 상태 관리를 위해 사용하였으나 Recoil로 대체한 후 거의 사용하지 않습니다.',
    },
  },
  {
    type: SkillType.FRAMEWORK,
    name: 'NextJS',
    image: '/images/skills/nextjs.png',
    subfix: {
      en: 'I always use $name.',
      kr: '$name을 항상 사용합니다.',
    },
    color: '#000000',
    description: {
      en: 'I use NextJS for React SSR and Vercel deployment. I use it in most projects.',
      kr: 'React SSR 및 Vercel 배포를 위해 사용합니다. 대부분의 프로젝트에서 사용하고 있습니다.',
    },
  },
  {
    type: SkillType.FRAMEWORK,
    name: 'NestJS',
    image: '/images/skills/nestjs.png',
    subfix: {
      en: 'I always use $name.',
      kr: '$name을 항상 사용합니다.',
    },
    color: '#E0234E',
    description: {
      en: 'I use NestJS for backend development in most projects. It is convenient to use because it has a fixed structure.',
      kr: 'REST API를 만들 때 주로 사용합니다. 정해진 구조를 따르면서 개발할 수 있어 편리합니다.',
    },
  },
  {
    type: SkillType.FRAMEWORK,
    name: 'Jetpack Compose',
    image: '/images/skills/jetpack_compose.png',
    subfix: {
      en: 'I am learning $name.',
      kr: '$name을 배우고 있습니다.',
    },
    color: '#34C983',
    description: {
      en: 'I am learning Jetpack Compose and Kotlin together to develop Android apps.',
      kr: 'Android 앱 개발을 위해 Kotlin과 함께 배우고 있습니다.',
    },
  },
  {
    type: SkillType.OTHER,
    name: 'NodeJS',
    image: '/images/skills/nodejs.png',
    width: 26,
    subfix: {
      en: 'I always use $name.',
      kr: '$name을 항상 사용합니다.',
    },
    color: '#339933',
    description: {
      en: 'I always use it for frontend and backend development. I also use when developing desktop apps with Electron sometimes.',
      kr: '프론트엔드 및 백엔드 개발을 위해 항상 사용합니다. Electron으로 데스크탑 앱을 개발할때도 종종 사용합니다.',
    },
  },
  {
    type: SkillType.OTHER,
    name: 'Visual Studio Code',
    image: '/images/skills/vscode.png',
    subfix: {
      en: 'I always use $name.',
      kr: '$name을 항상 사용합니다.',
    },
    color: '#007ACC',
    description: {
      en: 'I always use it when programming, and it is the oldest editor I have used.',
      kr: '프로그래밍을 할때 항상 사용합니다. 제가 가장 오랫동안 사용해온 에디터이기도 합니다.',
    },
  },
  {
    type: SkillType.OTHER,
    name: 'Figma',
    image: '/images/skills/figma.png',
    width: 20,
    subfix: {
      en: 'I always use $name.',
      kr: '$name을 항상 사용합니다.',
    },
    color: '#F24E1E',
    description: {
      en: 'I use it when designing frontend or presentation. I can design quickly with Auto Layout function.',
      kr: '프론트엔드 디자인 또는 프레젠테이션을 만들 때 사용합니다. Auto Layout 기능으로 빠르게 디자인할 수 있습니다.',
    },
  },
  {
    type: SkillType.OTHER,
    name: 'Android Studio',
    image: '/images/skills/android_studio.png',
    subfix: {
      en: 'I am learning $name.',
      kr: '$name을 배우고 있습니다.',
    },
    color: '#4989F6',
    description: {
      en: 'I am learning to develop Android apps with Jetpack Compose.',
      kr: 'Jetpack Compose를 이용한 Android 앱 개발을 위해 배우고 있습니다.',
    },
  },
  {
    type: SkillType.OTHER,
    name: 'Bun',
    image: '/images/skills/bun.png',
    subfix: {
      en: 'I sometimes use $name.',
      kr: '$name을 가끔 사용합니다.',
    },
    color: '#FBF0E0',
    description: {
      en: 'I have been interested in it since the beta version, and I like it because it does not need to compile TypeScript and has many built-in features.',
      kr: '베타 버전때부터 관심을 가져오고 있으며, TypeScript를 컴파일하지 않아도 되고 여러 도구들도 내장되어 있어 좋아합니다.',
    },
  },
  {
    type: SkillType.OTHER,
    name: 'PostgreSQL',
    image: '/images/skills/postgresql.png',
    subfix: {
      en: 'I always use $name.',
      kr: '$name을 항상 사용합니다.',
    },
    color: '#336791',
    description: {
      en: 'I mainly use it when working with databases in projects. I use it with Prisma.',
      kr: '프로젝트에서 DB를 다룰 때 주로 사용합니다. Prisma와 함께 사용하고 있습니다.',
    },
  },
  {
    type: SkillType.OTHER,
    name: 'Redis',
    image: '/images/skills/redis.png',
    height: 25,
    subfix: {
      en: 'I sometimes use $name.',
      kr: '$name을 가끔 사용합니다.',
    },
    color: '#DC382D',
    description: {
      en: 'I use it when performance is important in I/O operations in projects.',
      kr: '프로젝트에서 성능이 중요한 I/O 작업을 할 때 사용합니다.',
    },
  },
  {
    type: SkillType.OTHER,
    name: 'PM2',
    image: '/images/skills/pm2.png',
    height: 25,
    subfix: {
      en: 'I always use $name.',
      kr: '$name을 항상 사용합니다.',
    },
    color: '#2B0B73',
    description: {
      en: 'I use it to manage NodeJS processes.',
      kr: 'NodeJS 프로세스를 관리할때 사용합니다.',
    },
  },
  {
    type: SkillType.OTHER,
    name: 'QEMU',
    image: '/images/skills/qemu.png',
    subfix: {
      en: 'I sometimes use $name.',
      kr: '$name을 가끔 사용합니다.',
    },
    color: '#FF6600',
    description: {
      en: 'I use it to create and run virtual machines. I like it because I can use advanced features for free.',
      kr: '가상머신을 만들고 실행시키기 위해 사용합니다. 무료로 고급 기능을 사용할 수 있어 좋아합니다.',
    },
  },
]

interface SkillListProps {
  type: SkillType
  title: string
}
function SkillList(props: SkillListProps) {
  const { type, title } = props

  return <>
    <div className={styles.skillList}>
      <h3>{title}</h3>
      <ul>{
        skills.filter(skill => skill.type === type).map(skill => {
          return <li key={skill.name}>
            <SkillItem {...skill} />
          </li>
        })
      }</ul>
    </div>
  </>
}

function SkillItem(props: Skill) {
  const { name, image, width, height } = props
  const [hovered, setHovered] = useState(false)

  return <>
    <div className={styles.item}>
      <Image
        className={styles.image} src={image} width={width ?? 30} height={height ?? 30} alt={name}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      />
      <AnimatePresence>{
        hovered ?
          <SkillTooltip {...props} /> :
          null
      }</AnimatePresence>
    </div>
  </>
}

function SkillTooltip(props: Skill) {
  const { name, subfix, description } = props
  const getContrastYIQ = (hexcolor: string) => {
    hexcolor = hexcolor.replace('#', '')
    const r = parseInt(hexcolor.substring(0, 2), 16)
    const g = parseInt(hexcolor.substring(2, 4), 16)
    const b = parseInt(hexcolor.substring(4, 6), 16)
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
    return (yiq >= 128) ? 'var(--font-color)' : 'white'
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
    }
  }

  return <>
    <motion.div
      className={styles.tooltip}
      style={{
        backgroundColor: props.color,
        color: getContrastYIQ(props.color),
      }}
      variants={variants} initial='hidden' animate='visible' exit='hidden'
    >
      <h4>{name}</h4>
      <p className={styles.subfix}>" {subfix.en.replaceAll('$name', name)} "</p>
      <p className={styles.description}>{description.en}</p>
    </motion.div>
  </>
}

export function AboutSkills() {
  const { t } = useTranslation('about')

  return <>
    <div>
      <SkillList type={SkillType.LANGUAGE} title='Languages' />
      <SkillList type={SkillType.LIBRARY} title='Libraries' />
      <SkillList type={SkillType.FRAMEWORK} title='Frameworks' />
      <SkillList type={SkillType.OTHER} title='Others' />
      <div className={styles.text}>
        <p>
          {t('I can do')}
          <span>{t('flexible development')}</span>
          {t('across front-end and back-end.')}
        </p>
        <p>{t('and also want to learn about CI/CD and Testing for sustainable development.')}</p>
      </div>
    </div>
  </>
}
