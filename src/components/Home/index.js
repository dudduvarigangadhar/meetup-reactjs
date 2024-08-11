import {Component} from 'react'
import {Link} from 'react-router-dom'

import {
  WebsiteLogo,
  TextContainer,
  Heading,
  Para,
  RegisterBtn,
  MeetupImg,
} from './style'

class Home extends Component {
  state = {}

  render() {
    return (
      <div>
        <>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
            className="website-logo-img"
          />
        </>
        <TextContainer>
          <Heading>Welcome to Meetup</Heading>
          <Para className="para">Please register for the topic</Para>
          <Link to="/register">
            <RegisterBtn type="button" className="register-btn">
              Register
            </RegisterBtn>
          </Link>

          <MeetupImg
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
            className="meetup-img"
          />
        </TextContainer>
      </div>
    )
  }
}

export default Home
