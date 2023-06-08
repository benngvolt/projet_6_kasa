import { Link } from 'react-router-dom'
import './Error.css'

function Error() {
    return (
        <div className="error">
            <div className="error__404">
                404
            </div>
            <div className="error__message">
                Oups! La page que vous demandez n'existe pas!
            </div>
            <Link to="/" className="error__link">Retourner sur la page d'accueil</Link>
        </div>
    )
  }
  
  export default Error