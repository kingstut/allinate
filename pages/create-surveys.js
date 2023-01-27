import Layout from "../components/layout"
import { useSession } from "next-auth/react"
import SurveyForm from "../components/SurveyForm"

import { handleResponse} from "../helpers/api"
import axios from "axios"

export default function CreateSurveyPage() {
  const  { data: session } = useSession()
 
  
  async function handleOnSubmit(data, e) {
    e.preventDefault();

    //data should be   {question:,  budget: , cpr: }
    await axios.post('http://localhost:3000/api/surveys/', 
    { session, data } ).then(handleResponse)

    //update user
    const budget = data.budget
    const cpr = 0

    await axios.put('http://localhost:3000/api/dashboard/', 
    { session, cpr, budget } ).then(handleResponse)

  }

  return (
    <Layout>
      <h1><center>Create a Survey</center></h1>

      
      <SurveyForm onSubmit={handleOnSubmit} />
       
    </Layout>
  )
}
