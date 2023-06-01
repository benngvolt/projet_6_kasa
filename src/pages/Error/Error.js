import { Link } from 'react-router-dom'
import './Error.scss'

function Error() {
    return (
        <div className="errorContainer">
            <div className="error404">
                404
            </div>
            <div className="errorMsg">
                Oups! La page que vous demandez n'existe pas!
            </div>
            <Link to="/" className="errorLink">Retourner sur la page d'accueil</Link>
        </div>
    )
  }
  
  export default Error