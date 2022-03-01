import { useContext } from "react"
import AlertContext from "../context/alert/AlertContext"


function Alert() {
    const { alert } = useContext(AlertContext)

  return (
    alert !== null && (
        <p className='d-flex text-start ms-4'>
            {alert.type === 'error' && (
                <svg
                    className='d-flex'
                    style={{width: "24px"}}
                    fill='none'
                    viewBox='0 0 24 24'
                >
                    <circle cx='12' cy='12' r='12' fill='#FECDD3'></circle>
                    <path
                        d='M8 8l8 8M16 8l-8 8'
                        stroke='#B91C1C'
                        strokeWidth='2'
                    ></path>
                </svg>
            )}
            <span className="d-flex flex-fill ms-1 fw-bold lh-base text-black">
                <strong>{alert.msg}</strong>
            </span>
        </p>
    )
  )
}

export default Alert