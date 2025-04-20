import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Nav } from "react-bootstrap";

Chart.register(CategoryScale);

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("income");
  const [filter, setFilter] = useState("day");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [displayData, setDisplayData] = useState([]);

  const fetchData = (tabName, filter, date) => {
    let data = [];
    const today = new Date();
  
    if (filter === "day") {
      // Single-day dummy data
      data = [{ date: date.toISOString().split("T")[0], amount: tabName === "income" ? 1500 : 500 }];
    } else if (filter === "week") {
      // Weekly dummy data (7 days)
      for (let i = 6; i >= 0; i--) {
        const day = new Date(date);
        day.setDate(day.getDate() - i);
        data.push({
          date: day.toISOString().split("T")[0],
          amount: tabName === "income" ? 1500 + i * 200 : 500 + i * 100,
        });
      }
    } else if (filter === "month") {
      // Monthly dummy data (30 days)
      const month = date.getMonth();
      for (let day = 1; day <= 30; day++) {
        const date = new Date(today.getFullYear(), month, day);
        data.push({
          date: date.toISOString().split("T")[0],
          amount: tabName === "income" ? 1500 + day * 100 : 500 + day * 50,
        });
      }
    } else if (filter === "year") {
      // Yearly dummy data (12 months)
      for (let month = 0; month < 12; month++) {
        const date = new Date(today.getFullYear(), month, 1);
        data.push({
          date: date.toISOString().split("T")[0],
          amount: tabName === "income" ? 30000 + month * 2000 : 15000 + month * 1000,
        });
      }
    } else if (filter === "period") {
      // Custom period data (start and end dates)
      const startDate = new Date(date.start);
      const endDate = new Date(date.end);
      let currDate = new Date(startDate);
  
      while (currDate <= endDate) {
        data.push({
          date: currDate.toISOString().split("T")[0],
          amount: tabName === "income" ? 2000 : 800,
        });
        currDate.setDate(currDate.getDate() + 1);
      }
    }
  
    return data;
  };
  

  const updateData = () => {
    const data = fetchData(activeTab, filter, selectedDate);
    setDisplayData(data);
  };

  useEffect(() => {
    updateData();
  }, [activeTab, filter, selectedDate]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFilter("day");
    setSelectedDate(new Date());
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setSelectedDate(new Date());
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    if (filter === "period") {
      setSelectedDate((prevState) => ({
        ...prevState,
        [e.target.name]: new Date(date),
      }));
    } else {
      setSelectedDate(new Date(date));
    }
  };

  const chartData = {
    labels: displayData.map((entry) => entry.date),
    datasets: [
      {
        label: activeTab,
        data: displayData.map((entry) => entry.amount),
        backgroundColor: activeTab === "income" ? 'rgba(75, 192, 192, 0.2)' : 'rgba(255, 99, 132, 0.2)',
        borderColor: activeTab === "income" ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <div className="home-page" style={{ backgroundColor: "white" }}>
      <div>
        <h2 style={{ textAlign: "center" }}>
          Total {activeTab === "income" ? "Income" : "Expenses"}
        </h2>
        <h1 style={{ textAlign: "center" }}>₹{displayData.reduce((sum, entry) => sum + entry.amount, 0)}</h1>
      </div>

      <Nav
        fill
        variant="tabs"
        className="w-100 d-flex justify-content-between"
        style={{ backgroundColor: "white", padding: "10px" }}
      >
        <Nav.Item>
          <Nav.Link
            onClick={() => handleTabChange("income")}
            active={activeTab === "income"}
            style={{
              color: activeTab === "income" ? "black" : "#555",
              backgroundColor: activeTab === "income" ? "#f5f5f5" : "white",
            }}
          >
            Income
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => handleTabChange("expenses")}
            active={activeTab === "expenses"}
            style={{
              color: activeTab === "expenses" ? "black" : "#555",
              backgroundColor: activeTab === "expenses" ? "#f5f5f5" : "white",
            }}
          >
            Expenses
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <div
        className="w-100 d-flex justify-content-around align-items-center filters"
        style={{
          backgroundColor: "white",
          padding: "10px 20px",
          marginTop: "15px",
        }}
      >
        {["day", "week", "month", "year", "period"].map((f) => (
          <div
            key={f}
            className={`filter-item ${filter === f ? "active" : ""}`}
            onClick={() => handleFilterChange(f)}
            style={{
              padding: "8px 12px",
              cursor: "pointer",
              color: filter === f ? "black" : "#555",
              backgroundColor: filter === f ? "#f5f5f5" : "white",
              borderRadius: "4px",
              textAlign: "center",
              width: "fit-content",
            }}
          >
            {f}
          </div>
        ))}
        <input
          type="date"
          name={filter === "period" ? "start" : "single"}
          value={selectedDate.toISOString().split("T")[0]}
          onChange={handleDateChange}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            backgroundColor: "white",
          }}
        />
        {filter === "period" && (
          <input
            type="date"
            name="end"
            onChange={handleDateChange}
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: "white",
              marginLeft: "10px",
            }}
          />
        )}
      </div>

      <div className="chart-container" style={{ width: "60%", margin: "0 auto" }}>
        {displayData.length > 0 ? (
          <Line data={chartData} />
        ) : (
          <p>No {activeTab} recorded.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
