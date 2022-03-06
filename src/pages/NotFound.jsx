import {FaHome} from "react-icons/fa"
import {Link} from 'react-router-dom'

function NotFound() {
  return (    
        <div className="px-4 py-5 my-5 text-center">
            <div className="col-lg-6 mx-auto">
                <h1 className="display-5 fw-bold lh-base mb-4">
                    Oops!
                </h1>
                <p className="fs-1 lh-base mb-4">404 - Page not found!</p>
                <Link to='/' className="btn btn-secondary btn-lg">
                    <FaHome className="me-2" />
                    Back To Home
                </Link>
            </div>
        </div>
  )
}

export default NotFound