import {Link} from 'react-router-dom'

import Header from '../Header'

import {
  BgContainer,
  ContentContainer,
  Heading,
  Description,
  Button,
  Image,
} from './styledComponents'

import MeetupContext from '../../context/MeetupContext'

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

const Home = () => (
  <MeetupContext.Consumer>
    {value => {
      const {name, activeTopic, isShowRegisteredView} = value
      let topic
      topicsList.map(eachItem => {
        if (activeTopic === eachItem.id) {
          topic = eachItem.displayText
        }
        return null
      })
      return (
        <BgContainer>
          <Header />
          <ContentContainer>
            {isShowRegisteredView ? (
              <>
                <Heading active>Hello {name}</Heading>
                <Description active>Welcome to {topic}</Description>
                <Image
                  alt="meetup"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                />
              </>
            ) : (
              <>
                <Heading>Welcome to Meetup</Heading>
                <Description>Please register for the topic</Description>
                <Link
                  to="/register"
                  style={{textDecoration: 'none', color: '#ffffff'}}
                >
                  <Button>Register</Button>
                </Link>
                <Image
                  alt="meetup"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                />
              </>
            )}
          </ContentContainer>
        </BgContainer>
      )
    }}
  </MeetupContext.Consumer>
)

export default Home
