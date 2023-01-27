import Link from "next/link";
import styles from "../styles/get.module.css"
import { useState } from "react";
const GetForm = ({question, onSubmit} ) => {
    function handleOnSubmit(e) {
        onSubmit(question, setShow, e)
      
    }

    const [show, setShow] = useState(true);
    return (
      <div>
        {show &&
        <form onSubmit={handleOnSubmit}>
              <h1> <center> ${question.cpr}</center>  </h1>
              <a href= {question.question}> <center> <em>Link to form</em></center></a> 
              <button className={styles.FormButton}>Submitted</button>       
        </form>
        
        }
      </div>
      
    )
  }
  
export default GetForm;