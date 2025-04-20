/*
import React, { useEffect, useState } from "react";
import Papa from "papaparse"; // For parsing CSV
import { Pie } from "react-chartjs-2"; // For displaying pie chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const LandingPage = () => {
  const [chartData, setChartData] = useState({});

  // Function to parse and process CSV data
  const processCSV = (csvData) => {
    const transactionTypes = [
      "Groceries",
      "Transportation",
      "Entertainment",
      "Dining",
      "Rent/Mortgage",
      "Education",
      "Shopping",
      "Healthcare",
      "Utilities",
    ];

    // Initialize an object to store the sum of amounts for each transaction type
    const typeTotals = transactionTypes.reduce((acc, type) => {
      acc[type] = 0;
      return acc;
    }, {});

    // Loop through each row in the CSV and sum the amounts based on the transaction type
    csvData.forEach((row) => {
      const { "Transaction Type": type, "Amount Spent": amount, "Transaction Date": date } = row;
      
      // Check if the date exists and split it only if valid
      if (date && date.includes("-")) {
        const [day, month, year] = date.split("-"); // Split the date only if it's valid

        // Optionally, you can filter or use this parsedDate for date-based logic here
      }

      if (typeTotals[type] !== undefined) {
        typeTotals[type] += parseFloat(amount);
      }
    });

    // Log the totals for debugging
    console.log("Transaction Totals:", typeTotals);

    // Prepare the data for the pie chart
    const data = {
      labels: transactionTypes,
      datasets: [
        {
          data: Object.values(typeTotals),
          backgroundColor: [
            "#ff9999", "#66b3ff", "#99ff99", "#ffcc99", "#c2c2f0", "#ffb3e6",
            "#c2f0c2", "#ff6666", "#ffb366"
          ],
        },
      ],
    };

    // Log the chart data for debugging
    console.log("Chart Data:", data);

    setChartData(data); // Set the chart data
  };

  // Fetch and process the CSV data on component mount
  useEffect(() => {
    // Replace this with the actual path to your CSV file
    Papa.parse("../resources/dummy_transactions.csv", {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        processCSV(result.data);
      },
    });
  }, []);

  return (
    <div>
      <h1>Welcome to PaisaVault</h1>
      <p>Your secure finance management platform.</p>

      {// Display the pie chart only after data is available }
      {chartData.labels ? (
        <div style={{ width: "50%", height: "50%", margin: "auto" }}>
          <Pie data={chartData} />
        </div>
      ) : (
        <p>Loading data...</p>
      )}

      {/* Add any other landing page content here }
    </div>
  );
};

export default LandingPage; */

// components/LandingNav.js
import React, { useEffect, useState } from "react";
import Papa from "papaparse"; // For parsing CSV

const LandingPage = () => {
  const [chartData, setChartData] = useState(null);

  // Function to parse and process CSV data
  const processCSV = (csvData) => {
    const transactionTypes = [
      "Groceries",
      "Transportation",
      "Entertainment",
      "Dining",
      "Rent/Mortgage",
      "Education",
      "Shopping",
      "Healthcare",
      "Utilities",
    ];

    // Initialize an object to store the sum of amounts for each transaction type
    const typeTotals = transactionTypes.reduce((acc, type) => {
      acc[type] = 0;
      return acc;
    }, {});

    // Loop through each row in the CSV and sum the amounts based on the transaction type
    csvData.forEach((row) => {
      const { "Transaction Type": type, "Amount Spent": amount, "Transaction Date": date } = row;
      
      // Check if the date exists and split it only if valid
      if (date && date.includes("-")) {
        const [day, month, year] = date.split("-"); // Split the date only if it's valid

        // Optionally, you can filter or use this parsedDate for date-based logic here
      }

      if (typeTotals[type] !== undefined) {
        typeTotals[type] += parseFloat(amount);
      }
    });

    // Log the totals for debugging
    console.log("Transaction Totals:", typeTotals);

    setChartData(typeTotals); // Set the chart data
  };

  // Fetch and process the CSV data on component mount
  useEffect(() => {
    // Replace this with the actual path to your CSV file
    Papa.parse("../resources/dummy_transactions.csv", {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        processCSV(result.data);
      },
    });
  }, []);

  return (
    <div>
      <h1 style = {{textAlign: "center"}}>Welcome to PaisaVault</h1>
      <p style = {{textAlign: "center"}}>Your secure finance management platform.</p>

      {/* Display the image instead of the pie chart */}
      {chartData ? (
        <div style={{ width: "50%", height: "50%", margin: "auto" }}>
          <h1>  </h1>
          <img src={require("../resources/landing-pie-chart.png")} alt="Landing Pie Chart" style={{ width: "100%", height: "auto" }} />
        </div>
      ) : (
        <p>Loading data...</p>
      )}

      {/* Add any other landing page content here */}
    </div>
  );
};

export default LandingPage;

