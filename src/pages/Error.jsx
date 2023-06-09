import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Ooops! Page doesn't exist!</h1>
        <Link to="/" className='btn btn-primary'>Back Home</Link>
      </div>
  </section>
  )
}

export default Error