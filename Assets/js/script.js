function addColorCode(x) {
  const currentHour = dayjs().hour();
  let hourID = "hour-" + x;
  let element = document.getElementById(hourID);
  if (x < currentHour) {
    console.log("event hour is less than current hour");
    console.log("element is " + element + " hourID is " + hourID);
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
  return;
}

function createEvent(x) {
  console.log("x is " + x);
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
        // Add code to apply the past, present, or future class to each timeblock 

        addColorCode(hour.hour);
      })
      /*
            const saveBtn = document.querySelector('button');
            saveBtn.addEventListener('click', () => {
              console.log("button clicked");
            });
      
            const hourBlock = document.querySelector('div');
            hourBlock.addEventListener('click', (event) => {
              event.stopPropagation;
              console.log("hourblock clicked");
            });
            */
    });
  let events = [];
  const saveBtn = document.querySelector('button');
  saveBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const currentTarget = event.currentTarget.getAttribute("id");
    console.log("current target is " + currentTarget);
    const target = event.target.getAttribute("id");
    console.log("target is " + target);
    const inputID = "input- " + target;
    console.log("inputID is " + inputID);
    const inputEl = document.getElementById(inputID);
    const input = inputEl.value;
    console.log("input is " + input);
    let storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    events.push({
      hour: target.trim(),
      event: input.trim()
    });
    storedEvents.push(...events);
    localStorage.setItem("events", JSON.stringify(storedEvents));
  });



  // Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMMM DD'));
  console.log(dayjs().format('dddd, MMMM DD'));

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


}
);
