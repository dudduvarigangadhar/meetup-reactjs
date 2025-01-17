import './index.css'

const NotFound = () => {
  console.log('notfound')
  return (
    <div className="not-found-div-container">
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
          alt="not found"
          className="not-found-img"
        />
        <h1>Page Not Found</h1>
        <p>We are sorry, the page you requested could not be found</p>
      </div>
    </div>
  )
}

export default NotFound
