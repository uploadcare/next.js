import styles from '../styles.module.css'
import Image from 'next/image'

const Code = (p) => <code className={styles.inlineCode} {...p} />

const Index = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h1>Uploadcare loader for Image Component</h1>
      <p>
        The following is an example of a reference to an image from the{' '}
        Uploadcare CDN at <Code>ucarecdn.com</Code>
      </p>
      <p>
        It will be served directly from <Code>ucarecdn.com</Code>, without
        proxying through Media Proxy.
      </p>
      <Image
        alt="Vercel logo"
        src="https://ucarecdn.com/a6f8abc8-f92e-460a-b7a1-c5cd70a18cdb/vercel.png"
        width={1000}
        height={1000}
      />
      <hr className={styles.hr} />
      <p>
        The following is an example of a reference to an external image at{' '}
        <Code>assets.vercel.com</Code>.
      </p>
      <p>It will be proxied through Media Proxy.</p>
      <Image
        alt="Next.js logo"
        src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js.png"
        width={1200}
        height={400}
      />
      <hr className={styles.hr} />
      Checkout the documentation for{' '}
      <a href="https://nextjs.org/docs/basic-features/image-optimization#uploadcare-loader">
        Image Optimization
      </a>{' '}
      to learn more.
    </div>
  </div>
)

export default Index
