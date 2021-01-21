import React , {useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'
import '../css/alert.css'
const Alert = () => {
    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
              <i className=' alert-success fas fa-info-circle'>{alert.msg}</i>

            </div>
        )
        
    )
}
export default Alert