import { useSession, getSession } from "next-auth/react"
import Layout from "../components/layout"
import styles from "../styles/me.module.css"
import { handleResponse} from "../helpers/api"
import { prisma } from '../server/db/client'

export default function MePage({user}) {


  return (
    <Layout>
        <center><h1 className={styles.container}>Total Money : {user.money} </h1></center>
    </Layout>
  )
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    const session = await getSession(context)
    const em = session.user.email
    //const res = await axios.get('http://localhost:3000/api/surveys/', 
    // { params: {em: email} } ).then(handleResponse)
    const user = await prisma.user.findUnique({
        where: {
          user_id: em,
        },
      }).then(handleResponse)
    //const res = await fetch(`http://localhost:3000/api/surveys/${em}`).then(handleResponse)
    //const surveys = await res.json()
  
    // Pass data to the page via props
    return { props: { user } }
  }