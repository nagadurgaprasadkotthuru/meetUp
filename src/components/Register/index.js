import {withRouter} from 'react-router-dom'

import MeetupContext from '../../context/MeetupContext'

import {
  BgContainer,
  ContentContainer,
  Heading,
  Form,
  Button,
  Image,
  Label,
  Input,
  Select,
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
      const {name, activeTopic, isShowErrorMsg, onChangeInput, onChangeTopic, onChangeIsShowRegisteredView, onChangeIsShowErrorMsg} = value
      return (
          <BgContainer>
            <ContentContainer>
              <Image alt="website register" src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png" />
              <Form onSubmit={onFormSubmit}>
                <Heading>Let us join</Heading>
                <Label htmlFor="name">NAME</Label>
                <Input value={name} placeholder="Your name" id="name" />
                <Label htmlFor="topic">TOPICS</Label>
                <Select value={activeTopic} id="topic">
                  {topicsList.map(eachOption => <Option value={eachOption.displayText} key={eachOption.id}>{eachOption.displayText}</Option>)}
                </Select>
              </Form>
          </ContentContainer>
        </BgContainer>
      )
    }}
  </MeetupContext.Consumer>
)

export default Register
