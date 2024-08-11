import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import RegisterContext from '../../context/index'
import {
  RegisterContainer,
  RegisterImg,
  FormContainer,
  Heading,
  LabelName,
  InputContainer,
  RegisterBtn,
  ErrorMsg,
} from './style'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {
            name,
            topic,
            changeName,
            changeTopic,
            showError,
            registerName,
            updateError,
          } = value
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Register

//  <RegisterContext.Consumer>
//       {value => {
//            onChangeUsername = event => {
//     this.setState({username: event.target.value})
//     }

//   selectedId = event => {
//     this.setState({selectedId: event.target.value})
//   }

//   onSubmitForm = event => {
//     event.preventDefault()
//     console.log('clicked')
//   }
//             render() {
//     const {username, isEmpty} = this.state

//     return (
//       <RegisterContainer>
//         <RegisterImg
//           src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
//           alt="website-register"
//         />

//         <FormContainer onSubmit={this.onSubmitForm}>
//           <Heading className="heading">Let us join</Heading>
//           <LabelName htmlFor="name">NAME</LabelName>
//           <InputContainer type="text" id="name" />
//           <LabelName htmlFor="Topic">TOPICS</LabelName>
//           <select id="topic" className="input-container">
//             {topicsList.map(eachItem => (
//               <option key={eachItem.id} value={eachItem.displayText}>
//                 {eachItem.displayText}
//               </option>
//             ))}
//           </select>
//           <RegisterBtn className="register-btn" type="submit">
//             Register Now
//           </RegisterBtn>
//           {isEmpty && <ErrorMsg>Please enter your name</ErrorMsg>}
//         </FormContainer>
//       </RegisterContainer>
//     )
//   }
//       }}
