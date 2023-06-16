import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import MeetupContext from './context/MeetupContext'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    name: '',
    activeTopic: 'ARTS_AND_CULTURE',
    isShowRegisteredView: false,
    isShowErrorMsg: false,
  }

  onChangeInput = event => this.setState({name: event.target.value})

  onChangeTopic = event => this.setState({activeTopic: event.target.value})

  onChangeIsShowRegisteredView = () =>
    this.setState({isShowRegisteredView: true})

  onChangeIsShowErrorMsg = () => this.setState({isShowErrorMsg: true})

  render() {
    const {name, activeTopic, isShowRegisteredView, isShowErrorMsg} = this.state
    return (
      <MeetupContext.Provider
        value={{
          name,
          activeTopic,
          isShowRegisteredView,
          isShowErrorMsg,
          onChangeInput: this.onChangeInput,
          onChangeIsShowRegisteredView: this.onChangeIsShowRegisteredView,
          onChangeIsShowErrorMsg: this.onChangeIsShowErrorMsg,
          onChangeTopic: this.onChangeTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
