import { MdLibraryMusic } from "react-icons/md"
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (    
    <nav className="navbar mb-3 shadow-lg bg-dark text-white">
      <div className="container mx-auto">
        <div className="px-2 mx-2">
          <MdLibraryMusic className="me-2 display-5" />
          <Link to="/" className="text-white align-content-center fs-2 fw-bold text-decoration-none">
            {title}
          </Link>
        </div>

        <div className='d-flex px-2 mx-2'>
          <div className='d-flex justify-content-end gap-2 d-md-flex justify-content-md-end'>
            <Link to='/' className='btn btn-secondary rounded-btn btn-sm me-3'>
                    Home
            </Link>
            <Link to='/about' className='btn btn-secondary rounded-btn btn-sm'>
                    About
            </Link>
          </div>
        </div>

      </div>
    </nav>
    
  )
}

Navbar.defaultProps = {
    title: 'Genius Lyrics API Music Library',
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar