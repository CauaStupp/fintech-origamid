import { NavLink } from 'react-router-dom'
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h2>Paginá não encontrada!</h2>
      <button>
        <NavLink to='/'>Home</NavLink>
      </button>
    </div>
  )
}

export default NotFound