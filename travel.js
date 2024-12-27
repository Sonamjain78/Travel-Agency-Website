// Sample data for destinations
const destinationData = {
    Paris: {
        packages: ["Eiffel Tower Tour", "Louvre Museum Tickets", "Seine River Cruise"],
        timings: "09:00 AM - 10:00 PM",
        transport: {
            bus: { price: "$20", timing: "2 hours", departure: "City Center", arrival: "Eiffel Tower" },
            train: { price: "$30", timing: "1.5 hours", departure: "Gare de Lyon", arrival: "Gare du Nord" },
            flight: { price: "$150", timing: "8 hours", departure: "JFK", arrival: "CDG" }
        }
    },
    Mumbai: {
        packages: ["Gateway of India Tour", "Marine Drive Visit", "Elephanta Caves"],
        timings: "07:00 AM - 11:00 PM",
        transport: {
            bus: { price: "$15", timing: "1 hour", departure: "City Center", arrival: "Gateway of India" },
            train: { price: "$25", timing: "45 minutes", departure: "Chhatrapati Shivaji Maharaj Terminus", arrival: "Dadar" },
            flight: { price: "$120", timing: "2 hours", departure: "JFK", arrival: "BOM" }
        }
    },
    Ahmedabad: {
        packages: ["Sabarmati Ashram Visit", "Kankaria Lake", "Adalaj Stepwell"],
        timings: "08:00 AM - 09:00 PM",
        transport: {
            bus: { price: "$10", timing: "1 hour", departure: "City Center", arrival: "Kankaria Lake" },
            train: { price: "$20", timing: "30 minutes", departure: "Ahmedabad Junction", arrival: "Maninagar" },
            flight: { price: "$100", timing: "1.5 hours", departure: "JFK", arrival: "AMD" }
        }
    },
    Uttarakhand: {
        packages: ["Nainital Tour", "Mussoorie Visit", "Rishikesh Adventure"],
        timings: "06:00 AM - 08:00 PM",
        transport: {
            bus: { price: "$25", timing: "6 hours", departure: "City Center", arrival: "Nainital" },
            train: { price: "$35", timing: "5 hours", departure: "Dehradun", arrival: "Kathgodam" },
            flight: { price: "$140", timing: "10 hours", departure: "JFK", arrival: "DEL" }
        }
    }
};

// Show dropdown when input is focused
document.getElementById('destination-input').addEventListener('focus', function() {
    document.getElementById('dropdown').style.display = 'block';
});

// Hide dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdown');
    const input = document.getElementById('destination-input');
    if (!input.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});

// Function to display destination info
function displayDestinationInfo(destination) {
    const infoDiv = document.getElementById('destination-info');
    const data = destinationData[destination];

    if (data) {
        infoDiv.innerHTML = `
            <h3>${destination}</h3>
            <p><strong>Packages:</strong> ${data.packages.join(', ')}</p>
            <p><strong>Timings:</strong> ${data.timings}</p>
            <p><strong>Transport Costs:</strong></p>
            <ul>
                <li>Bus: ${data.transport.bus.price} (Timing: ${data.transport.bus.timing}, Departure: ${data.transport.bus.departure}, Arrival: ${data.transport.bus.arrival})</li>
                <li>Train: ${data.transport.train.price} (Timing: ${data.transport.train.timing}, Departure: ${data.transport.train.departure}, Arrival: ${data.transport.train.arrival})</li>
                <li>Flight: ${data.transport.flight.price} (Timing: ${data.transport.flight.timing}, Departure: ${data.transport.flight.departure}, Arrival: ${data.transport.flight.arrival})</li>
            </ul>
        `;
        infoDiv.style.display = 'block'; // Show the info div
    } else {
        infoDiv.innerHTML = '';
        infoDiv.style.display = 'none'; // Hide the info div if no data found
    }
}

// Adding click event listeners to dropdown items
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function () {
        const value = this.getAttribute('data-value');
        document.getElementById('destination-input').value = value; // Set input value
        displayDestinationInfo(value); // Display information for the selected destination
        document.getElementById('dropdown').style.display = 'none'; // Hide dropdown
    });
});
