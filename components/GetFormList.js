import GetForm from "./GetForm"
import styles from "../styles/get.module.css"

const GetFormList = ({surveys, onSubmit}) => {
    if (surveys.length>0) {
    return (
        <div className={styles.Ulist}>
          {surveys.map(survey => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className={styles.Form}>
                <GetForm
                  question = {survey}
                  onSubmit = {onSubmit}
                />
              </div>
            )
          })}
        </div>
    )
  }
  else{
    return (<p> No surveys available right now. </p> )
  }
}
  
  export default GetFormList;