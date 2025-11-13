// --- Bus crowd data for each bus ---
const busCrowdData = {
  "Bus 101": {
    morning: { crowd: 25, status: "Low" },
    afternoon: { crowd: 55, status: "Medium" },
    evening: { crowd: 85, status: "High" },
    locations: ["Main Station", "City Mall", "University Gate"]
  },
  "Bus 102": {
    morning: { crowd: 40, status: "Medium" },
    afternoon: { crowd: 30, status: "Low" },
    evening: { crowd: 75, status: "High" },
    locations: ["North Depot", "Central Plaza", "Market Square"]
  },
  "Bus 103": {
    morning: { crowd: 60, status: "High" },
    afternoon: { crowd: 45, status: "Medium" },
    evening: { crowd: 25, status: "Low" },
    locations: ["South Station", "Park Avenue", "Airport Junction"]
  },
  "Bus 104": {
    morning: { crowd: 20, status: "Low" },
    afternoon: { crowd: 35, status: "Low" },
    evening: { crowd: 50, status: "Medium" },
    locations: ["Old Town", "Library Corner", "East End Terminal"]
  },
  "Bus 105": {
    morning: { crowd: 80, status: "High" },
    afternoon: { crowd: 60, status: "Medium" },
    evening: { crowd: 90, status: "High" },
    locations: ["Tech Hub", "Downtown", "Stadium Gate"]
  },
  "Bus 106": {
    morning: { crowd: 25, status: "Low" },
    afternoon: { crowd: 40, status: "Medium" },
    evening: { crowd: 55, status: "Medium" },
    locations: ["Hill View", "Metro Station", "Harbor Point"]
  }
};

// --- Function to display bus crowd and location details ---
function showDetails(busName) {
  const detailsBox = document.getElementById("details-box");
  const busTitle = document.getElementById("bus-title");
  const table = document.getElementById("crowd-table");

  // Set title
  busTitle.textContent = busName;

  // Get data for selected bus
  const data = busCrowdData[busName];

  // Clear previous rows (except header)
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  // Add new rows for morning, afternoon, evening
  ["morning", "afternoon", "evening"].forEach(time => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.textContent = time.charAt(0).toUpperCase() + time.slice(1);
    cell2.textContent = data[time].crowd + "%";
    cell3.textContent = data[time].status;

    // 🎨 Color code based on crowd level
    if (data[time].status === "Low") cell3.style.color = "green";
    if (data[time].status === "Medium") cell3.style.color = "orange";
    if (data[time].status === "High") cell3.style.color = "red";
  });

  // --- Add Bus Location Info ---
  let locationSection = document.getElementById("location-info");
  if (!locationSection) {
    locationSection = document.createElement("div");
    locationSection.id = "location-info";
    locationSection.style.marginTop = "20px";
    locationSection.style.textAlign = "left";
    detailsBox.appendChild(locationSection);
  }

  locationSection.innerHTML = `<h3>🗺️ Route Locations:</h3><ul style="list-style:none; padding:0;"></ul>`;
  const list = locationSection.querySelector("ul");

  data.locations.forEach(loc => {
    const li = document.createElement("li");
    li.textContent = "📍 " + loc;
    li.style.padding = "5px 0";
    list.appendChild(li);
  });

  // Show details section
  detailsBox.style.display = "block";
}
