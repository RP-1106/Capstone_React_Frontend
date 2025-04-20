import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const SimpleInterestCalculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [Add, setAdd] = useState("");

  const calcSum = (e) => {
    e.preventDefault();
    if (num1 === 0 || num2 === 0 || num3 === 0) {
      alert("Please enter a valid principal, rate, and time period.");
    } else {
      let Add = (parseInt(num1) * parseInt(num2) * parseInt(num3)) / 100;
      setAdd(parseInt(Add));
    }
  };

  const handleClick = () => {
    setAdd(0);
    setNum1(0);
    setNum2(0);
    setNum3(0);
  };

  return (
      <div style={{
        backgroundColor: '#efebef',
        width: '100%',
        maxWidth: '630px', // Increased from 600px to 630px
        padding: '3rem',
        boxShadow: '0px 0px 12px rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
        boxSizing: 'border-box',
      }}>

      <div style={{
        backgroundColor: '#efebef',
        width: '100%', 
        maxWidth: '600px', // Increased by 30px (15px on each side)
        padding: '3rem',
        boxShadow: '0px 0px 12px rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
        boxSizing: 'border-box',
      }}>
        <div className="heading_text">
          <h1 className="heading_one">Simple Interest Calculator</h1>
          <p className="heading_two">Calculate your simple interest easily</p>
        </div>
        <div className="total_amount_card" style={{
          width: '100%',
          height: '138px',
          backgroundColor: '#D6FF58',
          marginTop: '22px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <h3 className="total_amount_heading" style={{
            fontSize: '30px',
            fontWeight: '800'
          }}>₹ {Add}</h3>
          <p className="total_amount_para" style={{
            fontSize: '12px',
            paddingTop: '5px',
            color: '#4B4B4B'
          }}>Total Simple Interest</p>
        </div>
        <form onSubmit={calcSum}>
          <div className="input_area" style={{ marginTop: '40px' }}>
            <div className="input_field" style={{ marginTop: '30px' }}>
              <TextField
                type="number"
                value={num1 || ""}
                onChange={(e) => setNum1(e.target.value)}
                id="outlined-basic"
                label="₹ Principal Amount"
                variant="outlined"
                style={{ width: '100%' }}
              />
            </div>
            <div className="input_field" style={{ marginTop: '30px' }}>
              <TextField
                type="number"
                value={num2 || ""}
                onChange={(e) => setNum2(e.target.value)}
                id="outlined-basic"
                label="Rate of Interest (p.a) %"
                variant="outlined"
                style={{ width: '100%' }}
              />
            </div>
            <div className="input_field" style={{ marginTop: '30px' }}>
              <TextField
                type="number"
                value={num3 || ""}
                onChange={(e) => setNum3(e.target.value)}
                id="outlined-basic"
                label="Time Period (Years)"
                variant="outlined"
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div className="button_collection" style={{
            marginTop: '61px',
            marginBottom: '1rem',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Stack spacing={2} direction="row">
              <Button
                type="submit"
                className="btn_one"
                style={{ backgroundColor: 'black', width: '200px', height: '75px' }}
                variant="contained"
              >
                Calculate
              </Button>
              <Button
                className="btn_one"
                onClick={handleClick}
                variant="outlined"
                style={{ width: '100px', height: '75px' }}
              >
                Reset
              </Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SimpleInterestCalculator;
