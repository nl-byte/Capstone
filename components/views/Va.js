import html from "html-literal";

export default state => html`
  <h1>The Manila Veterans Affairs Regional Office</h1>
  <div class="vapic">
    <img
      src="https://www.benefits.va.gov/ROManila/images/RO_Manila.jpg"
      alt=""
    />
  </div>

  <div class="accordion2">
    <div>
      <input
        type="checkbox"
        name="example"
        id="section1"
        class="accordion2_input"
        class="hidecheckbox"
      />
      <label for="section1" class="accordion2_label"
        >VA’s Manila Regional Office</label
      >
      <div class="accordion2_content">
        <p>
          VA’s Manila Regional Office (RO) administers a variety of services,
          including Compensation, Education, Insurance, Pension, and Veteran
          Readiness and Employment for Veterans, Servicemembers, their families
          and survivors in the Philippines.
        </p>
      </div>
    </div>
    <div>
      <input
        type="checkbox"
        name="example"
        id="section2"
        class="accordion2_input"
        class="hidecheckbox"
      />
      <label for="section2" class="accordion2_label">Visiting Hours</label>
      <div class="accordion2_content">
        <ul>
          <p>
            VA Manila Regional Office is open for appointments Monday to
            Friday,8:00 a.m. to 3:00 p.m. for the following services:
          </p>
          <ul>

          <li>Phone/Video Interview</li>
          <li>Interview Document Drop-off</li>
          <li> In-Person Interview (limited slots) </li>
        </ul>
          <p>How to Contact VA Manila or Submit Your Documents:</p>

          <ol>
          <li>Create a Login.gov account</li>
          for a seamless sign-in experience to VA.gov, My HealtheVet, and VA’s
          Health and Benefits mobile app. Veterans can now use the same login
          and password to access a growing list of federal government websites,
          including the VA, Office of Personnel Management, and Small Business
          Administration, to deliver a secure and streamlined identity
          verification experience. Visitors seeking assistance from the Public
          Contact Team at the Manila Regional Office are encouraged to schedule
          a virtual or in-person appointment on the Visitor Engagement Reporting
          Application (VERA) as walk-ins are not allowed. VERA is a self-service
          portal which allows visitors to schedule, reschedule, and cancel
          appointments. Please click or use the camera on your smartphone to
          capture the blue QR Code to schedule an in-person appointment or the
          black QR Code for a virtual appointment. You will receive email
          confirmation of your appointment.
        </ul>
      </div>
      <div>
        <input
          type="checkbox"
          name="example"
          id="section3"
          class="accordion2_input"
          class="hidecheckbox"
        />
        <label for="section3" class="accordion2_label">Section3</label>
      </div>
    </div>
  </div>

  <div class="va-form">
    <label class="required" for="va-form-input"
      >Search for a VA form by keyword, form name, or form number.</label
    ><br />
    <input id="va-form-input" value="" size="20" /><br />
    <span id="va-form" class="error_message"></span>
    <button id="search-button" class="button" type="button" size="10">
      Search
    </button>
    <br />
  </div>
`;
