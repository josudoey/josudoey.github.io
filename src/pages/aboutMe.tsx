import type { ReactNode } from 'react'
import Layout from '@theme/Layout'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

function AboutHeader () :ReactNode {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">你好，我是Joey</h1>
        <p className="hero__subtitle">這裡有些我的數位產物, 歡迎大家參觀分享</p>
        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href="/docs"
            rel="noopener noreferrer">
              Get Started
          </a>
        </div>
        <img
          className={styles.heroImage}
          src={useBaseUrl('/img/hero-image.jpg')}
          alt="Hero Image"
        />
      </div>
    </header>
  )
}

export default function About (): ReactNode {
  return (
  <Layout>
      <AboutHeader />
      <main>
        <section className={styles.themeSection}>
          <div className="container">
            <h2>關於我</h2>
            <p>
              我是<strong>Better Engineer</strong>, 期許自己每天都能多進步一點點, 讓世界可以變得更<strong>美好</strong>
            </p>
            <p>
              我喜歡探索各樣新事物, 認識各樣的知識, 體驗日常的精彩時刻
            </p>
            <p>
              我擅長思考, coding, 滑手機...
            </p>
          </div>
        </section>
      </main>
    </Layout>
  )
}
