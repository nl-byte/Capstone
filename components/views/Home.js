import html from "html-literal";

export default state => html`
  <section id="Home Page">
    <div class="homepage"><h1>MANILA DOD-ID CARDS OFFICE - HELPDESK</h1></div>

  </section>
  <section id="homeboxes">
    <div id="boxstyle" class="homebox1">
      <h3>ID Card Appointment Scheduler</h3>
      <ul>
        <li>Procedures</li>
        <li>Directions & Parking</li>
        <li>Make an appointment</li>
      </ul>
      <button>Continue</button>
    </div>

    <div id="boxstyle" class="homebox2">
      <h3>Common Access Card - CAC</h3>
      <ul>
        <li>Active Duty U.S. Military Service Members</li>
        <li>
          Department of Defense Contractors, Federal Employees, and Overseas
          Hires
        </li>
      </ul>
      <button>Continue</button>
    </div>

    <div id="boxstyle" class="homebox3">
      <h3>Uniformed Services ID-USID Card</h3>
      <ul>
        <li>Us Military Retirees</li>
        <li>US Military Disabled Veterans</li>
        <li>US Military Dependents</li>
        <li>Other US Eligible Family Members</li>
      </ul>
      <button>Continue</button>
    </div>
  </section>
`;
