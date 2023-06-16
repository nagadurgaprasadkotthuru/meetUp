import {withRouter} from 'react-router-dom'

import MeetupContext from '../../context/MeetupContext'

import Header from '../Header'

import {
  BgContainer,
  ContentContainer,
  Image,
  Form,
  Heading,
  Label,
  Input,
  Select,
  Option,
  Button,
  ErrorMsg,
} from './styledComponents'

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

const Register = props => (
  <MeetupContext.Consumer>
    {value => {
      const {
        name,
        activeTopic,
        isShowErrorMsg,
        onChangeInput,
        onChangeTopic,
        onChangeIsShowRegisteredView,
        onChangeIsShowErrorMsg,
      } = value
      const onSubmitForm = event => {
        event.preventDefault()
        if (name !== '') {
          onChangeIsShowRegisteredView()
          const {history} = props
          history.replace('/')
        } else {
          onChangeIsShowErrorMsg()
        }
      }
      return (
        <BgContainer>
          <Header />
          <ContentContainer>
            <Image
              alt="website register"
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            />
            <Form onSubmit={onSubmitForm}>
              <Heading>Let us join</Heading>
              <Label htmlFor="name">NAME</Label>
              <Input
                value={name}
                id="name"
                placeholder="Your name"
                onChange={onChangeInput}
              />
              <Label htmlFor="topic">TOPICS</Label>
              <Select id="topic" value={activeTopic} onChange={onChangeTopic}>
                {topicsList.map(eachItem => (
                  <Option value={eachItem.id} key={eachItem.id}>
                    {eachItem.displayText}
                  </Option>
                ))}
              </Select>
              <Button type="submit">Register Now</Button>
              {isShowErrorMsg && <ErrorMsg>Please enter your name</ErrorMsg>}
            </Form>
          </ContentContainer>
        </BgContainer>
      )
    }}
  </MeetupContext.Consumer>
)

export default withRouter(Register)
