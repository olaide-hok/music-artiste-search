import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <div className=' mt-5'>
        <img width={180} src={spinner} alt="Loading..." className="text-center mx-auto" />
    </div>
  )
}

export default Spinner