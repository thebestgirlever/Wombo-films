import styles from './Tag.module.css'

function Tag({ text, onClick = () => { } }) {

  return (
    <div className={styles.tag} onClick={onClick}>
      {text}
    </div>
  )
}

export default Tag
