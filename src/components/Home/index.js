import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import RegisterContext from '../../context/RegisterContext'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {isRegister, name, topic} = value
      return (
        <div>
          <Navbar />
          {isRegister ? (
            <>
              <h1>Hello {name}</h1>
              <p>Welcome to {topic}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </>
          ) : (
            <div>
              <h1>Welcome to Meetup</h1>
              <p>Please register for the topic</p>
              <Link to="/register">
                <button type="button">Register</button>
              </Link>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          )}
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
