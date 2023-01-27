import styles from "../styles/create.module.css"

const SurveyForm = ({ onSubmit }) => {
    function handleOnSubmit(e) {
      const { currentTarget } = e;
  
      const fields = Array.from(currentTarget.elements);
      const data = {};
  
      fields.forEach(field => {
        if ( !field.name ) return;
        data[field.name] = field.value;
      })
  
      if ( typeof onSubmit === 'function' ) {
        onSubmit(data, e)
      }
    }
  
    return (
      <div className={styles.FormContainer}>
      <form className={styles.Form} onSubmit={handleOnSubmit}>
        <div className={styles.FormItem}>
        <label>Link to form?   </label>
        <textarea name="question"></textarea>
        </div>
        <div className={styles.FormItem}>
        <label>Budget?  &ensp;  </label>
        <textarea name="budget"></textarea>
        </div>
        <div className={styles.FormItem}>
        <label>Cost per response?  &ensp;  </label>
        <textarea name="cpr"></textarea>
        </div>
        <button className={styles.FormButton}>Create Survey</button>
      </form>
      </div>
    )
  }
  
  export default SurveyForm;