/*<!-- booking  js start here -->*/
// Store booked time slots
let bookedSlots = {};

// Generate time slots
function generateTimeSlots() {
    const select = document.getElementById('timeSlot');
    select.innerHTML = '<option value="">Select time</option>';
    
    // Start time: 9:00 AM (9 * 60 = 540 minutes)
    // End time: 4:00 PM (16 * 60 = 960 minutes)
    // Interval: 30 minutes
    for (let minutes = 540; minutes < 960; minutes += 30) {
        const hour = Math.floor(minutes / 60);
        const minute = minutes % 60;
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const option = document.createElement('option');
        option.value = timeString;
        option.textContent = timeString;
        select.appendChild(option);
    }
}

// Validate date selection (Monday to Friday only)
document.getElementById('date').addEventListener('change', function() {
    const selectedDate = new Date(this.value);
    const day = selectedDate.getDay();

    if (day === 0 || day === 6) { // 0 is Sunday, 6 is Saturday
        alert('Please select a weekday (Monday to Friday).');
        this.value = ''; // Clear the date selection
    }
});

// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        date: document.getElementById('date').value,
        timeSlot: document.getElementById('timeSlot').value,
        requirements: document.getElementById('requirements').value
    };

    // Check if time slot is already booked
    const bookingKey = `${formData.date}-${formData.timeSlot}`;
    if (bookedSlots[bookingKey]) {
        alert('This time slot is already booked. Please select another time.');
        return;
    }

    try {
        // Here you would typically send the data to your server
        // For demonstration, we'll just simulate the email sending
        await emailBooking(formData);
        
        // Mark the time slot as booked
        bookedSlots[bookingKey] = true;
        
        alert('Booking successful! Confirmation sent to your email.');
        this.reset();
    } catch (error) {
        alert('There was an error processing your booking. Please try again.');
        console.error('Booking error:', error);
    }
});

// Simulate email sending (replace with actual email service)
async function emailBooking(formData) {
    // In a real application, you would send this data to your server
    // which would then use a service like NodeMailer to send emails
    console.log('Booking details:', formData);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return success (in real app, this would be the email service response)
    return true;
}

// Initialize time slots on page load
generateTimeSlots();

//newsection
