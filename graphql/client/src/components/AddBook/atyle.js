import styled from "styled-components";

export const Form = styled.form`
  width: 400px;
  height: 400px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  position: fixed;
  z-index: 11;
  padding: 20px 35px;
  border-radius: 8px;
  margin: auto;
  background: white;

  label {
    margin-bottom: 10px;
    display: block;
    font-family: Arial;
    font-size: 20px;
  }

  input {
    padding: 10px;
    border-radius: 4px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.38);;
    margin-bottom: 25px;
    display: block;
  }
`
export const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(8px);
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`