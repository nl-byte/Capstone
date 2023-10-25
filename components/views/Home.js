import html from "html-literal";

export default state => html`
  <section id="Home Page">
    <div class="homepage"><h1>Manila DODID Helpdesk</h1></div>
  </section>
  <p class="welcomemsg">
  Active-duty Military Service Members, DOD Contractors, DOD/ Federal Civilian Employees, Military Retirees, Dependents, Eligible Family Members (EFM) Appointment/ Enrollment Renewal/ DEERS Updates </p>
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
     <a href="Cac.js"><button>Continue</button></a>
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

    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
    <div class = "container3">
  <img src="https://www.mapquestapi.com/staticmap/v5/map?start=14.578200323908787,120.97765376605633|flag-end&locations=14.545053952461592,120.99224498345163&size=@2x&key=${process.env.MAPQUEST_MAP_API_KEY}" />
</div>

<footer>
  <p>created by NL 2023</p>
</footer>
  </section>

`;
