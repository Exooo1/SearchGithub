import styled from 'styled-components';

export const StyleMain = styled.div`
  border-radius: 10px 10px 0 0;
  width: 100%;
  background-color: black;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    cursor: pointer;
    box-shadow: 0 0 5px white;
    border-radius: 5px;
    border: solid 1px white;
    color: white;
    font-weight: 800;
    width: 100px;
    height: 40px;
  }

  button:first-child {
    background-color: red;
  }

  button:last-child {
    background-color: lawngreen;
  }

  button:active {
    border: solid 1px #FFB400;
  }

`

export const SearchStyle = styled.div`
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 0;
    text-shadow: 2px 0 7px red;
    padding: 10px;
    color: white;
    font-weight: 800;
  }

  input {
    font-size: 15px;
    color: white;
    width: 200px;
    outline: none;
    background-color: black;
    border: none;
    border-bottom: 1px solid white;
  }

  input:focus::placeholder {
    color: silver;
  }

  input:focus {
    border-radius: 10px;
    width: 220px;
    transition: 1s;
  }
`

export const UsersStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 75%;
  background-color: darkgrey;

  div {
    h2 {
      
      color: white;
    }

    border-radius: 10px;
    border: solid 1px grey;
    text-align: center;
    width: 150px;
  }
`
export const PaginationStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  border-radius: 0 0 10px 10px;
  height: 15%;
  background-color: black;
`

type ActivePagination = {
    active:boolean
}
export const PaginationActive = styled.span<ActivePagination>`
  box-shadow: 0 0 5px white;
  background: ${props => (props.active ? 'green' : 'white')};
  color: black;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin: 0 5px;
  border-radius: 90px;
  cursor: pointer;
  display: inline-block;
  width: 20px;
  height: 20px;
`