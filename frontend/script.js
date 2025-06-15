const LISTINGS_API = 'http://localhost:3000/api/listings';
const BOOKINGS_API = 'http://localhost:3000/api/bookings';

document.addEventListener('DOMContentLoaded', () => {
  const listingsContainer = document.getElementById('listings');
  const listingForm = document.getElementById('listingForm');

  const token = localStorage.getItem('token');

  if (listingsContainer) {
    fetch(LISTINGS_API)
      .then(res => res.json())
      .then(data => {
        data.forEach(listing => {
          const div = document.createElement('div');
          div.classList.add('listing');
          div.innerHTML = `
            <h4>${listing.title}</h4>
            <p><strong>Location:</strong> ${listing.location}</p>
            <p>${listing.description}</p>
            <p><strong>Price:</strong> ₹${listing.price}</p>
            <label>Start Date: <input type="date" class="start-date" /></label><br/>
            <label>End Date: <input type="date" class="end-date" /></label><br/>
            <button class="book-btn" data-id="${listing._id}">Book Now</button>
            <hr/>
          `;
          listingsContainer.appendChild(div);

          // Add event listener to the book button
          const bookBtn = div.querySelector('.book-btn');
          bookBtn.addEventListener('click', async () => {
            const listingId = bookBtn.getAttribute('data-id');
            const startDate = div.querySelector('.start-date').value;
            const endDate = div.querySelector('.end-date').value;

            if (!startDate || !endDate) {
              alert('Please select both start and end dates');
              return;
            }

            const res = await fetch(BOOKINGS_API, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({ listingId, startDate, endDate })
            });

            const result = await res.json();
            if (res.ok) {
              alert('Booking successful!');
            } else {
              alert(result.message || 'Booking failed');
            }
          });
        });
      });
  }

  // Add new listing
  if (listingForm) {
    listingForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const title = document.getElementById('title').value;
      const location = document.getElementById('location').value;
      const price = document.getElementById('price').value;
      const description = document.getElementById('description').value;

      const res = await fetch(LISTINGS_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title, location, price, description })
      });

      const data = await res.json();

      if (res.ok) {
        alert('Listing added!');
        window.location.reload();
      } else {
        alert(data.message || 'Error adding listing');
      }
    });
  }
});
