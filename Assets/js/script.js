function addColorCode(x) {
  const currentHour = dayjs().hour();
  let hourEl = "hour-" + x;
  let element = document.getElementById(hourEl);
  if (x < currentHour) {
    console.log("event hour is less than current hour");
    element.classList.add("past");
  }
  else if (x === currentHour) {
    console.log("event hour is the same as current hour");
    element.classList.add("present");
  }
  else if (x > currentHour) {
    console.log("event hour is greater than current hour");
    element.classList.add("future");
  }
}

function hide(x) {
  if (x.classList.contains("hidden"))
    return;
  else (x.classList.add("hidden"));
}

// Wrapped in a JQuery function that only runs once the DOM is ready
$(function () {
  fetch('./assets/js/hours.json', {
    // The browser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    cache: 'reload',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // work with data in here
      console.log(data);

      data.forEach(hour => {
        addColorCode(hour.hour);
      })
    });

  // Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMMM DD'));
  console.log(dayjs().format('dddd, MMMM DD'));

  // Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: 
}
);
