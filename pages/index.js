import Layout from "../components/layout"
import styles from "../styles/Home.module.css"
import Image from 'next/image'
export default function IndexPage() {
  return (
    <Layout>
      <div className={styles.BoxContainer}>
        <div className={styles.Box1}>
          <div>
          <Image className={styles.img1} src="/../public/Asker.png" width={180}
            height={240} alt="" /> 
          </div>
          <h2> <li>Gather data from the world </li>
          <li> Finetune your LLMs  </li>
          <li>  Get feeback </li>
          <li> Get labels for your dataset </li></h2>
        </div>
        <div className={styles.Box2}>
        <h2> <li>Tell what you know </li>
          <li> You are the product, get paid for it  </li></h2>
        <div>
          <Image className={styles.img2} src="/../public/Answerer.jpeg" width={180}
            height={240} alt="" /> 
        </div>
        </div>

      </div>
    </Layout>
  )
}