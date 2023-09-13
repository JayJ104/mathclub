import styles from './form.module.scss';

export default function ContactForm({ onSubmitHandler }) {

    return (
        <form className={styles.form_container} onSubmit={onSubmitHandler}>
            <input required type="text" id="name" name="name" placeholder='Name' />
            <input required type="email" id="email" name="email" placeholder='Email' />
            <input required type='text' id='subject' name='subject' placeholder='Subject'/>
            <textarea required id='message' name='message' placeholder='Your Message'/>
            <button className={styles.button} type="submit" onClick={onSubmitHandler}>SUBMIT</button>
        </form>        
    )
}