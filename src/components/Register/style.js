import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10%;
`

export const RegisterImg = styled.img`
  height: 400px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 45px;
`

export const LabelName = styled.label`
  font-family: 'Roboto';
  color: #7b8794;
  font-size: 13px;
  margin-bottom: 5px;
  margin-top: 15px;
`

export const InputContainer = styled.input`
  height: 35px;
  width: 320px;
  padding-left: 10px;
`
export const RegisterBtn = styled.button`
  width: 120px;
  height: 40px;
  margin-top: 40px;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  color: #ff0b37;
  font-size: 10px;
`
