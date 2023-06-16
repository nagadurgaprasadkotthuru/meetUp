import {BgContainer, Image, Heading, Description} from './styledComponents'

const NotFound = () => (
  <BgContainer>
    <Image
      alt="not found"
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
    />
    <Heading>Page Not Found</Heading>
    <Description>
      We are sorry, the page you requested could not be found.
    </Description>
  </BgContainer>
)

export default NotFound
