import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
`

export const ContentContainer = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 24%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 360px;
  width: 20%;
`

export const Heading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 28px;
`

export const Label = styled.label`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 16px;
  cursor: pointer;
  outline: none;
`

export const Input = styled.input`
  width: 100%;
  height: 38px;
  border: 1px solid #7b8794;
  border-radius: 6px;
  font-family: 'Roboto';
  color: #7b8794;
  padding-left: 10px;
  margin-bottom: 30px;
  font-size: 15px;
  font-weight: 500;
`

export const Select = styled.select`
  width: 100%;
  height: 38px;
  border: 1px solid #7b8794;
  border-radius: 6px;
  font-family: 'Roboto';
  font-size: 16px;
  color: #334155;
  padding-left: 10px;
  margin-bottom: 30px;
  font-weight: 400;
  cursor: pointer;
  outline: none;
`

export const Option = styled.option`
  font-family: 'Roboto';
  font-size: 16px;
  color: #334155;
  font-weight: 400;
  cursor: pointer;
  outline: none;
`

export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  background-color: #3b82f6;
  color: #ffffff;
  border: 0px;
  border-radius: 6px;
  padding: 12px 25px 12px 25px;
  margin-top: 10px;
  cursor: pointer;
  outline: none;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 12px;
`
