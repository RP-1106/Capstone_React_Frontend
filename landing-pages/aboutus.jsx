import React from 'react';
import Box from '@mui/material/Box';

const AboutUs = () => {
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
          About Us
        </h1>

        {/* Paragraphs */}
        <p
          style={{
            fontWeight: 'bold',  // Makes the paragraph text bold
            marginBottom: '20px',  // Increases the space between paragraphs
          }}
        >
          The AI Assisted Personal Finance Management System is an intelligent web application that streamlines personal financial planning through the integration of artificial intelligence and data science. Designed as a comprehensive platform, it enables users to manage income, track expenditures, set financial goals, and receive tailored insights, all within a compact and user-friendly dashboard. The application’s privacy-centric approach avoids linking with personal bank accounts, instead urging users to upload receipts and categorize transactions, creating a safe, centralized financial ecosystem. To deliver a holistic experience, the system uses technologies like OCR to digitize bills and receipts, NLP for personalized chatbot responses, and predictive analytics for trend forecasting and goal-setting.
        </p>
        <p
          style={{
            fontWeight: 'bold',  // Makes the second paragraph bold as well
          }}
        >
          Advanced data visualization tools present clear, actionable insights, while unique simulation features allow users to project the potential impacts of their spending habits over time. Additional features include custom settings to match user preferences, intelligent reminders for ensuring consistency, and financial education resources for aiding the users on a daily basis. Thus, our application prioritizes security and user privacy by operating independently from sensitive accounts, making it a safe, accessible tool for end-to-end financial management.
        </p>


        <p style={{
            fontWeight: 'bold',  // Makes the second paragraph bold as well
          }}>
            The target audience for our budgeting application includes individuals and families looking for a secure, user-friendly, and comprehensive way to manage personal finances without linking sensitive financial accounts. This tool caters especially to users concerned with privacy who prefer manual entry or receipt-based tracking over direct bank integration, addressing the growing demand for data security in financial management. Additionally, it serves people with diverse spending habits—such as frequent online shoppers, cash spenders, and small business owners—who require a streamlined, customizable solution for tracking expenses. The application is also ideal for users seeking actionable insights into their spending patterns, thanks to the integration of advanced data analytics and a highly responsive chatbot. With features designed to enhance personal finance literacy, the app is accessible for users of all financial knowledge levels, providing straightforward tools for managing budgets, setting savings goals, and gaining better control over daily and long-term expenses.</p>
      </Box>

      <Box
        style={{
          width: '50%',  // Set the width to 50% for the right content (image)
          padding: '20px',  // Padding inside the container for spacing
        }}
      >
        <img
          src={require("../resources/aboutus.png")}
          alt="About Us"
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

export default AboutUs;
