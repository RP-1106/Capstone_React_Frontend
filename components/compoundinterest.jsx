import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [compoundsPerYear, setCompoundsPerYear] = useState(1);
  const [result, setResult] = useState("");

  const calculateCompoundInterest = (e) => {
    e.preventDefault();
    if (principal === 0 || rate === 0 || time === 0 || compoundsPerYear === 0) {
      alert("Please enter valid values for all fields.");
    } else {
      // Compound Interest Formula: A = P(1 + r/n)^(nt)
      const r = rate / 100;
      const amount = principal * Math.pow(1 + r / compoundsPerYear, compoundsPerYear * time);
      const compoundInterest = amount - principal;
      setResult(compoundInterest.toFixed(2));
    }
  };

  const resetFields = () => {
    setResult(0);
    setPrincipal(0);
    setRate(0);
    setTime(0);
    setCompoundsPerYear(1);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{
        padding: '2rem',
        backgroundColor: '#FAF9FA',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Box
        className="container"
        style={{
            backgroundColor: '#efebef',
            width: '100%',
            maxWidth: '630px', 
            borderRadius: '8px',
            padding: '3rem',
            boxShadow: '0px 0px 12px rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
        }}
        >

        <div className="heading_text">
          <h1 className="heading_one">Compound Interest Calculator</h1>
          <p className="heading_two">Calculate your compound interest easily</p>
        </div>
        <div
          className="total_amount_card"
          style={{
            width: '420px',
            height: '138px',
            backgroundColor: '#D6FF58',
            marginTop: '22px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <h3
            className="total_amount_heading"
            style={{
              fontSize: '30px',
              fontWeight: '800',
            }}
          >
            ₹ {result}
          </h3>
          <p
            className="total_amount_para"
            style={{
              fontSize: '12px',
              paddingTop: '5px',
              color: '#4B4B4B',
            }}
          >
            Total Compound Interest
          </p>
        </div>
        <form onSubmit={calculateCompoundInterest}>
          <div className="input_area" style={{ marginTop: '40px' }}>
            <div className="input_field" style={{ marginTop: '30px' }}>
              <TextField
                type="number"
                value={principal || ""}
                onChange={(e) => setPrincipal(e.target.value)}
                label="₹ Principal Amount"
                variant="outlined"
                style={{ width: '410px' }}
              />
            </div>
            <div className="input_field" style={{ marginTop: '30px' }}>
              <TextField
                type="number"
                value={rate || ""}
                onChange={(e) => setRate(e.target.value)}
                label="Rate of Interest (p.a) %"
                variant="outlined"
                style={{ width: '410px' }}
              />
            </div>
            <div className="input_field" style={{ marginTop: '30px' }}>
              <TextField
                type="number"
                value={time || ""}
                onChange={(e) => setTime(e.target.value)}
                label="Time Period (Years)"
                variant="outlined"
                style={{ width: '410px' }}
              />
            </div>
            <div className="input_field" style={{ marginTop: '30px' }}>
              <TextField
                type="number"
                value={compoundsPerYear || ""}
                onChange={(e) => setCompoundsPerYear(e.target.value)}
                label="Compounds per Year"
                variant="outlined"
                style={{ width: '410px' }}
              />
            </div>
          </div>
          <div
            className="button_collection"
            style={{
              marginTop: '61px',
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Stack spacing={2} direction="row">
              <Button
                type="submit"
                style={{ backgroundColor: 'black', width: '200px', height: '75px' }}
                variant="contained"
              >
                Calculate
              </Button>
              <Button
                onClick={resetFields}
                variant="outlined"
                style={{ width: '100px', height: '75px' }}
              >
                Reset
              </Button>
            </Stack>
          </div>
        </form>
      </Box>
    </Box>
  );
};

export default CompoundInterestCalculator;
