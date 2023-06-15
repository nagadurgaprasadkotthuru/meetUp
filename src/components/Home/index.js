import {Link} from 'react-router-dom'

import {
  BgContainer,
  ContentContainer,
  Heading,
  Description,
  Button,
  Image,
} from './styledComponents'

import MeetupContext from '../../context/MeetupContext'

const Home = () => (
  <MeetupContext.Consumer>
    {value => {
      const {name, activeTopic, isShowRegisteredView} = value
      return (
        <BgContainer>
          <ContentContainer>
            {isShowRegisteredView ? (
              <>
                <Heading active>Hello {name}</Heading>
                <Description active>Welcome to {activeTopic}</Description>
                <Image
                  alt="meetup"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                />
              </>
            ) : (
              <>
                <Heading>Welcome to Meetup</Heading>
                <Description>Please register for the topic</Description>
                <Button>
                  <Link
                    to="/register"
                    style={{textDecoration: 'none', color: '#ffffff'}}
                  >
                    Register
                  </Link>
                </Button>
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
