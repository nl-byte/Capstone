import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

console.log(store);
const router = new Navigo("/");
console.log("test");
function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  afterRender(state);
  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Appointment") {
    // Add an event handler for the submit button on the form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      // Create an empty array to hold the toppings
      const request = [];

      // Iterate over the toppings array

      for (let input of inputList.request) {
        // If the value of the checked attribute is true then add the value to the toppings array
        if (input.checked) {
          request.push(input.value);
        }
      }
      // Create a request body object to send to the API
      const requestData = {
        customer: inputList.customer.value,
        location: inputList.location.value,
        request: inputList.request.value,
        category: inputList.category.value,
        startDate: inputList.startDate.value,
        endDate: inputList.endDate.value
      };
      // Log the request body to the console
      console.log("request Body", requestData);

      axios
        // Make a POST request to the API to create a new appointment
        .post(`${process.env.APPOINTMENT_API_URL}/appt`, requestData)
        .then(response => {
          //  Then push the new appt onto the Appointment state appt attribute, so it can be displayed in the Appointment list
          store.Que.appt.push(response.data);
          router.navigate("/Que");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }

  if (state.view === "Va") {
    // Add an event handler for the submit button on the form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);
      axios
        .get(
          `${process.env.VA_FORMS_API_URL}?query=${inputList.vaforminput.value}`,
          {
            headers: {
              apikey: process.env.VA_FORMS_API_KEY
            }
          }
        )
        .then(res => {
          const statusCode = res.status;
          console.log(`VA Forms index response, code ${statusCode}`);
          if (statusCode === 200) {
            console.log(res.data);
            store.Va.vaform = res.data.data.map(form => form.attributes);
            router.navigate("/Va");
          }
          console.log(store.Va.vaform);
        })

        .catch(error => {
          console.log("It puked", error);
          const statusCode = error.response ? error.response.status : null;

          if (statusCode === 401) {
            console.log("Authorization information not provided");
          } else if (statusCode === 403) {
            console.log("Invalid authorization");
          } else if (statusCode === 413) {
            console.log("Payload too large");
          } else if (statusCode === 429) {
            console.log("Too many requests");
          }
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=manila`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;

      case "Que":
        axios
          .get(`${process.env.APPOINTMENT_API_URL}/appt`)
          .then(res => {
            console.log(res.data);
            store.Que.appt = res.data;
            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;

      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});
router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
