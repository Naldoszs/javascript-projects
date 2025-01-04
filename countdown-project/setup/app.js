//get from local storgae
let futureDate =
  dayjs(localStorage.getItem("futuredate")) ||
  dayjs()
    .add(34, "days")
    .add(34, "hours")
    .add(34, "minutes")
    .add(34, "seconds");

// If futureDate wasn't found in localStorage, set it there
if (!localStorage.getItem("futuredate")) {
  localStorage.setItem("futuredate", futureDate.toString());
}

// Get elements
const deadlineContainerEl = document.querySelector(".js-deadline");
const giveawayEl = document.querySelector(".giveaway");
const deadlineH4Els = deadlineContainerEl.querySelectorAll("h4");

// Ensure elements exist
if (!deadlineContainerEl || !giveawayEl || deadlineH4Els.length === 0) {
  console.error("Required elements not found!");
} else {
  // Function to get the ordinal day
  function getOrdinal(num) {
    const suffix = ["th", "st", "nd", "rd"];
    const value = num % 100;
    return num + (suffix[(value - 20) % 10] || suffix[value] || suffix[0]);
  }

  // Format the date
  const formattedDate =
    futureDate.format("dddd, ") +
    getOrdinal(futureDate.date()) +
    futureDate.format(" MMMM, YYYY") +
    futureDate.format(" h:mm a");

  // Put formatted date in place
  giveawayEl.innerHTML = `Giveaway ends on ${formattedDate}`;

  // Countdown function
  function updateCountdown() {
    const now = dayjs(); // Get current time
    const diff = futureDate.diff(now);

    // Check if countdown has elapsed
    if (diff <= 0) {
      deadlineContainerEl.innerHTML = `<h4>Giveaway has ended!</h4>`;
      clearInterval(countdownInterval); // Stop the timer

      // Remove futureDate from localStorage when countdown ends
      localStorage.removeItem("futureDate");
      return; // Exit the function if time is up
    } else {
      // Calculate remaining time
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      // Update countdown elements
      const timeValues = [days, hours, minutes, seconds];

      deadlineH4Els.forEach((headingFour, index) => {
        headingFour.innerHTML = timeValues[index];
      });
    }
  }

  // Run countdown function every second
  const countdownInterval = setInterval(updateCountdown, 1000);

  // Initialize countdown on load
  updateCountdown();
}
