import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
`

export const ContentContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: ${props => (props.active ? '#2563eb' : '#334155')};
  font-family: 'Roboto';
  font-size: 46px;
  margin-bottom: 10px;
`

export const Description = styled.p`
  color: ${props => (props.active ? '#334155' : '#475569')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
`

export const Image = styled.img`
  width: 45%;
`

export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  background-color: #3b82f6;
  color: #ffffff;
  border: 0px;
  border-radius: 6px;
  padding: 10px 25px 10px 25px;
  cursor: pointer;
  outline: none;
`
