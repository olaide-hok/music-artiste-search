import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <div className='text-center mx-auto'>
        <img width={300} src={spinner} alt="Loading..." className="text-center mx-auto" />
    </div>
  )
}

export default Spinner