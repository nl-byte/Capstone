import html from "html-literal";

export default state => html`
  <section id="Home Page">
    <div class="homepage"><h1>MANILA DOD-ID CARDS OFFICE - HELPDESK</h1></div>
  </section>
  <img
    src="https://lh3.googleusercontent.com/pw/ADCreHeKjqjcFZ-3CwF0fZEIESnCJJxnPba142fiXnretNBPIXuI0bWIQzpQppHrWVZn5tx83oDlwm2ul1vUxhx_Lu9H_9_024l0-gXJQAj7celLpMsvK3nM7JAS14VigQ_ERH6BrfQuyEFNnYYGRPoyw5JjKjbWagjSVPFoWVUQYyJok1XIEZIf0i7cocYtuzfD9Aid01ck9t_nrKp1c-Q71QwK6B3PUQvLY6v14UTYJkLoke8OAj5rX1c5XP5gNo_OwTquNQehTMmFJjW5eEhxdkgfNFbptlPPIMLvlA1A1hxk08-0S9QY-zu0wHusjHE5eCITTcrWY-92Qir7OZnBJ7t8S3WCeswVUwtPrZZcxCa4VjBNIVMLAwb64KMnkwfnCSCvOluxPYsZ8FVcKKQDOD5887lQhl4KFsNLXaLEDutSkvryW4MAtvEyCNLPEeji8s0tO75yMBKHPS-lHUPM9U2rsZKPBzVQ7ciMSHYc-PIBGcs4ktWmkhnfIwRvRO-p8vbN2YAF-UbfJ9u_fPO_Py8LIml_U98-gGYr2slbhJLu1EvSoPM7qB9KS9OZp8A5hn8B6TnOmwIgW93FeRZKqcd2w0xb2vv9zwUpi5wKqev4W7rjmjpy47OfwZnMjPfGB6vJaXSz9M6v3R30WIflInzFf5R81waSzI66Gk8Si0ttdGNN8tHRk7ivCRIrwcL7129MGlYmp2uMsuhQj395ISU3IqKoi5ECIOQrOLjrZEPxmnCwXXJG4i1lHhCKEviAHtTyfS2NVCclRgO0dMOBByBNnZ_1R0X6x1h-2xqFeEI9swYPtS6fTl4jIfRK9PJwFdt6m7ciKQxs-upR8HUiqihRR0RVF20Xw6DdQs-FX7lnIvRMU11bH48ofXWtyEoxb_Gl3rZMz3WQ6uOE7Cvvtw=w1000-no-tmp.jpg"/>
  <p class="welcomemsg">
    Welcome to the Manila Dodid Helpdesk. Select option below to create an appointment or to display requirements for the category that applies to you:
<div class = "container">

  <section class="homebox1">
      <h3>ID Card Appointment Scheduler</h3>
      <ul>
        <li>Procedures</li>
        <li>Directions & Parking</li>
        <li>Make an appointment</li>
      </ul>
      <button>Continue</button>
</section>

  <section class="homebox2">
      <h3>Common Access Card - CAC</h3>
      <ul>
        <li>Active Duty U.S. Military Service Members</li>
        <li>
          Department of Defense Contractors, Federal Employees, and Overseas
          Hires
        </li>
      </ul>
      <button>Continue</button>
</section>

  <section class="homebox3">
      <h3>Uniformed Services ID-USID Card</h3>
      <ul>
        <li>Us Military Retirees</li>
        <li>US Military Disabled Veterans</li>
        <li>US Military Dependents</li>
        <li>Other US Eligible Family Members</li>
      </ul>
      <button>Continue</button>
    </section>
  </div>

  <div class = "container2">
  <form id="contact_form" action="https://formspree.io/f/mknlkjrk" method="POST">
  <div class="row">
    <label class="required" for="name">Name:</label><br/>
    <input id="name" class="input" name="name" type="text" value="" size="30" /><br />
    <span id="name_validation" class="error_message"></span>
  </div>
  <div class="row">
    <label class="required" for="email">Email:</label><br/>
    <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
    <span id="email_validation" class="error_message"></span>
  </div>
  <div class="row">
  <label class="required" for="message">Message:</label><br>
  <textarea id="message" class="input" name="message" rows="5" cols="30"></textarea><br>
</div>
    <input id="submit_button" type="submit" value="Send email" />
</form>
</div>
<div class = "container3">
  <img src="https://www.mapquestapi.com/staticmap/v5/map?start=14.578200323908787,120.97765376605633|flag-end&locations=14.545053952461592,120.99224498345163&size=@2x&key=${process.env.MAPQUEST_MAP_API_KEY}" />
</div>

    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>


  </section>

`;
