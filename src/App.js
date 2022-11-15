import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import RegisterContext from './context/RegisterContext'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.
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

// Replace your code here
class App extends Component {
  state = {isRegister: false, name: '', topic: ''}

  onSuccessRegister = (name, topic) => {
    const topicSelected = topicsList.filter(eachItem => eachItem.id === topic)
    const displayTopicText = topicSelected[0].displayText
    this.setState({isRegister: true, name, topic: displayTopicText})
  }

  render() {
    const {isRegister, name, topic} = this.state
    return (
      <RegisterContext.Provider
        value={{
          topicsList,
          name,
          topic,
          onSuccessRegister: this.onSuccessRegister,
          isRegister,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
