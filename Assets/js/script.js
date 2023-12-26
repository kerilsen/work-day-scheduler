// Wrapped in a JQuery function that runs once the DOM is ready
$(function () {

  // Display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMMM DD'));
  console.log(dayjs().format('dddd, MMMM DD'));

  // Apply color code to past, present and future time blocks
  function addColorCode(x) {
    const currentHour = dayjs().hour();
    let hourID = "hour-" + x;
    let element = document.getElementById(hourID);
    if (x < currentHour) {
      element.classList.add("past");
    }
    else if (x === currentHour) {
      element.classList.add("present");
    }
    else if (x > currentHour) {
      element.classList.add("future");
    }
    return;
  }

  // Save event to local storage
  function saveEvent(x) {
    console.log("x is " + x);
    const inputID = "input-" + x;
    console.log("inputID is " + inputID);
    const inputEl = document.getElementById(inputID);
    let input = inputEl.value;
    console.log("input is " + input);
    let storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    storedEvents.push({
      hour: x.trim(),
      event: input.trim()
    });
    localStorage.setItem("events", JSON.stringify(storedEvents));
  }

  const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  hours.forEach(addColorCode);

  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(function (button) {
    button.addEventListener('click', (event) => {
      let target = event.currentTarget.getAttribute("id");
      console.log("target is " + target);
      event.preventDefault();
      console.log("button clicked");
      saveEvent(target);
    });
  });
  // Listener for click events on the save button.

  // Get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  // How to overwrite previous values?
  window.addEventListener('load', function () {
    let storedEvents = JSON.parse(localStorage.getItem("events")) || [];

    storedEvents.forEach((item) => {
      outputID = item.hour;
      const outputEl = document.getElementById(outputID);
      outputEl.value = item.event;
    });

  });

});