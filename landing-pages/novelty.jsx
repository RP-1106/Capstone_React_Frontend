import React from 'react';
import Box from '@mui/material/Box';

const Novelty = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between" // This spaces the paragraph containers and image
      alignItems="flex-start"
      style={{
        height: '100vh', // Full viewport height
        backgroundColor: '#FAF9FA', // Light background color for main container
        padding: '20px', // Padding around the content
        boxSizing: 'border-box', // Ensure padding is included in width and height calculation
        overflowY: 'auto' // Allows scrolling if content overflows
      }}
    >
      {/* Left Side: Paragraph Containers */}
      <Box
        style={{
          width: '50%', // Set the width to 50% for the left content (text)
          paddingRight: '20px', // Spacing to the right for separation from the image
        }}
      >
        {/* Container 1 */}
        <Box
          style={{
            backgroundColor: '#e0f2e0', // Light green background
            padding: '20px', // Padding inside each container
            borderRadius: '8px', // Rounded corners for the box
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow around the box
            marginBottom: '20px', // Space between containers
          }}
        >
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>
            1. No Financial Risk and Compromise of Privacy
          </p>
          <p>
            Unlike other finance and expense tracking apps that often require integration with bank accounts, payment apps (like Paytm, PhonePe, GPay), or e-commerce platforms (like Amazon, Flipkart), our application completely avoids connecting to any financial accounts. Users create anonymous profiles with usernames and passwords, which further ensures privacy by eliminating the need for verification (e.g., mobile OTPs). This approach builds trust and significantly reduces the hesitancy many users feel when using apps that demand full access to their financial data.
          </p>
        </Box>

        {/* Container 2 */}
        <Box
          style={{
            backgroundColor: '#e0f2e0', // Light green background
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
          }}
        >
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>
            2. Highly Tailored Chatbot Assistance
          </p>
          <p>
            The chatbot in our application goes beyond basic rule-based interactions. While the landing page may feature a rule-based chatbot, each user's personal account will be equipped with an AI-powered entity to interact with each user based on their specific financial records. Sample queries can range from simple rule-based interactions like asking about last month's grocery expenses to more sophisticated, AI-driven analyses, such as predicting future spending trends or suggesting savings plans.
          </p>
          <ul>
            <li>Predictive Analytics: “Can you predict my total expenses for the next quarter based on my current spending patterns?”</li>
            <li>Personalized Recommendations: “What areas can I cut back on to increase my savings?”</li>
            <li>Market-aware Suggestions: “Can you suggest strategies to protect my savings from market fluctuations?”</li>
          </ul>
          <p>
            This intelligent interaction not only enhances user engagement but also helps users make more informed decisions with personalized financial guidance.
          </p>
        </Box>

        {/* Container 3 */}
        <Box
          style={{
            backgroundColor: '#e0f2e0', // Light green background
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
          }}
        >
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>
            3. Enhanced Expense Tracking with OCR Integration
          </p>
          <p>
            Monefy, YNAB, and Goodbudget are primarily manual-entry apps which require users to enter each expense individually or select from preset categories, which some users find reliable but time-consuming. Instead of receipt scanning, these allow users to connect directly with their bank accounts to automatically import and categorize transactions. Our OCR Expense Categorization feature allows users to automatically log purchases, significantly reducing manual input and offering convenience, especially for users with diverse or frequent transactions.
          </p>
        </Box>
      </Box>

      {/* Right Side: Image */}
      <Box
        style={{
          width: '50%', // Set the width to 50% for the right content (image)
          padding: '20px', // Padding inside the container for spacing
        }}
      >
        <img
          src={require("../resources/novelty.png")}
          alt="Novelty Features"
          style={{
            width: '100%', // Makes sure the image takes up the full width of its container
            height: 'auto', // Keeps the aspect ratio of the image intact
            borderRadius: '8px', // Optional: Adds rounded corners to the image
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Adds shadow around the image for styling
          }}
        />
      </Box>
    </Box>
  );
};

export default Novelty;
