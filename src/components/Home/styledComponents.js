import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
`

export const ContentContainer = styled.div`
  min-height: 90vh;
`

export const Heading = styled.h1`
  color: ${props => (props.active ? '#334155' : '#2563eb')};
  font-family: 'Roboto';
  font-size: 46px;
`

export const Description = styled.p`
  color: ${props => (props.active ? '#475569' : '#334155')};
  font-family: 'Roboto';
  font-size: 20px;
`

export const Image = styled.image`
  width: 20%;
`

export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  background-color: #3b82f6;
  border: 0px;
  border-radius: 6px;
  padding: 10px 25px 10px 25px;
`
