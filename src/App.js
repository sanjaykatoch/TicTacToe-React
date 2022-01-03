import React, { useState } from 'react';
import logo from './logo.svg';

import Icon from './Components/Icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { icons } from 'react-icons/lib';


const itemArray = new Array(9).fill("empty");



const App = () =>  
{
  const [isCross, setIsCroos] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () =>
  {
    setIsCroos(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  }

  const checkWinner = () =>
  {
    debugger;
    if (itemArray[0] === itemArray[1]
      && itemArray[0] === itemArray[2]
      && itemArray[0] != "empty")
    {
      setWinMessage(`${itemArray[0]} Wins`);
    }
    else if (
      itemArray[3] === itemArray[4]
      && itemArray[3] === itemArray[5]
      && itemArray[3] != "empty"
    )
    {
      setWinMessage(`${itemArray[3]} Wins`);
    }
    else if (
      itemArray[6] === itemArray[7]
      && itemArray[6] === itemArray[8]
      && itemArray[6] != "empty"
    )
    {
      setWinMessage(`${itemArray[6]} Wins`);
    }
    else if (
      itemArray[0] === itemArray[3]
      && itemArray[0] === itemArray[6]
      && itemArray[0] != "empty"
    )
    {
      setWinMessage(`${itemArray[0]} Wins`);
    }
    else if (
      itemArray[1] === itemArray[4]
      && itemArray[1] === itemArray[7]
      && itemArray[1] != "empty"
    )
    {
      setWinMessage(`${itemArray[1]} Wins`);
    }
    else if (
      itemArray[2] === itemArray[5]
      && itemArray[2] === itemArray[8]
      && itemArray[2] != "empty"
    )
    {
      setWinMessage(`${itemArray[2]} Wins`);
    }
    else if (
      itemArray[0] === itemArray[4]
      && itemArray[0] === itemArray[8]
      && itemArray[0] != "empty"
    )
    {
      setWinMessage(`${itemArray[0]} Wins`);
    }
    else if (
      itemArray[2] === itemArray[4]
      && itemArray[2] === itemArray[6]
      && itemArray[2] != "empty"
    )
    {
      setWinMessage(`${itemArray[2]} Wins`);
    }
  }
  const changeItem = itemNumber =>
  {
    if (winMessage)
    {
      return toast(winMessage, { type: "success" });
    }
    if (itemArray[itemNumber] === "empty")
    {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCroos(!isCross);
      console.log(isCross);

    } else
    {
      return toast("AlreadyFilled", { type: "error" });
    }

    checkWinner();

  }

  return (

    <Container className='p-5'>
      <ToastContainer position='bottom-center'></ToastContainer>
      <Row>
        <Col md={6} className='offset-md-3'>
          {winMessage ? (
            <div className='mb-2 mt-2'>
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
                <br />
                <Button color="success" block onClick={reloadGame}>Reload The Game</Button>
              </h1>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}
          <div className='grid'>
            {itemArray.map((item, index) => (
              <Card color="warning" onClick={() => changeItem(index)}>
                <CardBody className='box'>
                  <Icon name={item}></Icon>
                </CardBody>
              </Card>

            ))}
          </div>
        </Col>
      </Row>
    </Container>

  );
}

export default App;
