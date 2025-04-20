import React from 'react';
import Box from '@mui/material/Box';

const Features = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between" // Space out the content between left and right
      alignItems="flex-start" // Align items to the top of the container
      style={{
        height: '100vh',
        backgroundColor: '#FAF9FA',
        padding: '20px',  // Padding around the content
        boxSizing: 'border-box',
      }}
    >
      <Box
        style={{
          width: '50%',  // Set the width to 50% for the left content (text)
          backgroundColor: '#f0f0f0',  // Light grey background for the box
          padding: '20px',  // Padding inside the container
          borderRadius: '8px',  // Rounded corners for the box
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',  // Subtle shadow around the box
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontWeight: 'bold',
            fontSize: '2rem',  // Adjust font size for title
            marginBottom: '20px',  // Adds spacing below the title
          }}
        >
          Features
        </h1>

        {/* Feature 1 */}
        <p
          style={{
            fontWeight: 'bold',  // Makes the paragraph text bold
            marginBottom: '20px',  // Increases the space between paragraphs
          }}
        >
          <strong>1. OCR Model for Financial Data Extraction</strong><br />
          The OCR model is responsible for extracting text from images of bills, receipts, and screenshots. The dataset for training this model needs to include various types of documents that will allow the system to learn how to accurately parse text from images.
        </p>

        {/* Feature 2 */}
        <p
          style={{
            fontWeight: 'bold',  // Makes the second paragraph bold as well
            marginBottom: '20px',
          }}
        >
          <strong>2. Rule-Based and NLP-Based Chatbot</strong><br />
          The AI-based chatbot will need to be trained on personalized user data, which includes transaction history, categories of expenses, and financial goals. This data will allow the chatbot to provide tailored advice and insights (e.g., “How can I save more on groceries?” or “Can you suggest a savings plan for a vacation next year?”).
        </p>

        {/* Feature 3 */}
        <p
          style={{
            fontWeight: 'bold',  // Makes the third paragraph bold as well
          }}
        >
          <strong>3. Statistical Models for Financial Analysis and Predictions</strong><br />
          The statistical models are responsible for providing financial insights, recommendations, and predictions, such as forecasting future expenses, identifying areas to cut back on spending, or providing personalized financial plans.
        </p>
      </Box>

      <Box
        style={{
          width: '50%',  // Set the width to 50% for the right content (image)
          padding: '20px',  // Padding inside the container for spacing
        }}
      >
        <img
          src={require("../resources/features.png")}
          alt="Features"
          style={{
            width: '100%',  // Makes sure the image takes up the full width of its container
            height: 'auto',  // Keeps the aspect ratio of the image intact
            borderRadius: '8px',  // Optional: Adds rounded corners to the image
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',  // Adds shadow around the image for styling
          }}
        />
      </Box>
    </Box>
  );
};

export default Features;
