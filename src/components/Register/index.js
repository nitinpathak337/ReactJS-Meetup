import {Component} from 'react'

import RegisterContext from '../../context/RegisterContext'
import Navbar from '../Navbar'

class Register extends Component {
  state = {errorMsg: '', showError: false, name: '', topics: 'ARTS_AND_CULTURE'}

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onTopicChange = event => {
    this.setState({topics: event.target.value})
  }

  render() {
    const {errorMsg, showError, name, topics} = this.state
    return (
      <RegisterContext.Consumer>
        {value => {
          const {topicsList, onSuccessRegister} = value

          const onRegister = event => {
            event.preventDefault()
            if (name === '') {
              this.setState({
                showError: true,
                errorMsg: 'Please enter your name',
              })
            } else {
              const {history} = this.props
              onSuccessRegister(name, topics)
              history.replace('/')
            }
          }

          return (
            <div>
              <Navbar />
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <form>
                  <h1>Let us join</h1>
                  <label htmlFor="name">NAME</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={this.onNameChange}
                  />
                  <label htmlFor="topics">TOPICS</label>
                  <select
                    value={topics}
                    onChange={this.onTopicChange}
                    id="topics"
                  >
                    {topicsList.map(eachItem => (
                      <option value={eachItem.id} key={eachItem.id}>
                        {eachItem.displayText}
                      </option>
                    ))}
                  </select>
                  <button type="submit" onClick={onRegister}>
                    Register Now
                  </button>
                  {showError && <p>{errorMsg}</p>}
                </form>
              </div>
            </div>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Register
