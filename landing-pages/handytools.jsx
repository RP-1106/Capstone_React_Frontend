import React from 'react';
import SimpleInterestCalculator from '../components/simpleinterest';
import CompoundInterestCalculator from '../components/compoundinterest';
import Box from '@mui/material/Box';

const HandyTools = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignItems="flex-start"
      flexWrap="wrap"
      style={{
        padding: '2rem',
        backgroundColor: '#FAF9FA',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Box style={{ flex: '1 1 50%', margin: '1rem', maxWidth: '600px' }}>
        <SimpleInterestCalculator />
      </Box>
      <Box style={{ flex: '1 1 50%', margin: '1rem', maxWidth: '600px' }}>
        <CompoundInterestCalculator />
      </Box>
    </Box>
  );
};

export default HandyTools;
