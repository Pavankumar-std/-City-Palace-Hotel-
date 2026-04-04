let bookings = [];

// Book room or service
function bookNow(type) {
    let name = prompt("Enter your name:");
    let phone = prompt("Enter your phone number:");

    if (name && phone) {
        let booking = {
            type: type,
            name: name,
            phone: phone
        };

        bookings.push(booking);

        alert("✅ Booking Successful!\n" +
              "Name: " + name +
              "\nService: " + type);

        console.log(bookings);
    } else {
        alert("❌ Booking cancelled. Please enter details.");
    }
}