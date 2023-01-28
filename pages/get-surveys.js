import Layout from "../components/layout"
import { handleResponse} from "../helpers/api"
import { useSession, getSession } from "next-auth/react"
import { server } from '../config'
import GetFormList from "../components/GetFormList"
import axios from "axios"
import { prisma } from '../server/db/client'

export default function GetSurveyPage({surveys}) {
  const { data: session } = useSession()

  async function handleOnSubmit( survey, setShow, e) {
    e.preventDefault();
    const email = session.user.email
    const cpr = survey.cpr
    const budget = 0
    const survey_id = survey.survey_id
    await axios.put(`${server}/api/dashboard/`, 
    { session, cpr, budget } ).then(handleResponse)
    
    await axios.put(`${server}/api/surveys/`, 
    { email, survey_id, cpr } ).then(handleResponse)
    setShow(false)
  }


  return (
    <Layout>
      <h1><center>Fill Surveys</center></h1>

      {
        <GetFormList surveys={surveys} onSubmit={handleOnSubmit} />
      }    
    </Layout>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const session = await getSession(context)
  const em = session.user.email

  const surveys =   await prisma.survey.findMany({
    where: {
      show_to_users: {
        has: em,
      },
    },
  })

  // Pass data to the page via props
  return { props: { surveys } }
}