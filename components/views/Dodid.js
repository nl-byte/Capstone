import html from "html-literal";

export default state => html`
  <h1 id="dodid">The DOD(Department of Defense) ID Cards Office in Manila</h1>
  <ul class="accordion">
    <li>
      <input type="radio" name="accordion" id="fifth" checked />
      <label for="first">Eligible Personnel</label>
      <div class="content">
        <p>
          Active-duty Military Service Members, DOD Contractors, DOD/ Federal
          Civilian Employees, Military Retirees, Dependents, Eligible Family
          Members (EFM). For more information regarding DODID types end
          eligibility, please visit:
          <a href="https://www.cac.mil/">https://www.cac.mil/</a> for more
          information.
        </p>
      </div>
    </li>
  </ul>
  <ul class="accordion">
    <li>
      <input type="radio" name="accordion" id="six" checked />
      <label for="first"
        >Making an Appointment With the Manila DODID Office</label
      >
      <div class="content">
        <ol>
          <li>
            Visit
            <a href="https://idco.dmdc.osd.mil/idco/">idco.dmdc.osd.mil</a>and
            click Continue on the “ID Card Office Locator & Appointments”.
          </li>
          <li>Enter location of “Manila” and click SEARCH.</li>
          <li>
            Select the “US Embassy – JUSMAGPHIL Manila”. Select the “SCHEDULE AN
            APPOINTMENT”.
          </li>
          <li>
            Select on the date with available appointment and click “BOOK THIS
            APPOINTMENT”.
          </li>
          <li>Fill out needed information and click on the “SAVE” button.</li>
          <li>
            Please take note of your appointment date, time and confirmation
            number Reminder, one (1) appointment per individual / per family
            member. If you wish to cancel your appointment, just click the
            “CANCEL APPOINTMENT”
          </li>
          ** Note: The U.S. Embassy is closed on all U.S. and Philippine
          Holidays. Click
          <a
            href="https://ph.usembassy.gov/events/category/holiday-schedule-2023/"
            >ph.usembassy.gov/holiday-schedule-2023/</a
          >
          for the List of Holidays.**
        </ol>
      </div>
    </li>
  </ul>
  <ul class="accordion">
    <li>
      <input type="radio" name="accordion" id="first" checked />
      <label for="first">Required Documents</label>
      <div class="content">
        <h5>CAC Requirements:</h5>
        <ul>
          <li>
            Three (3) forms of valid picture ID, example: passport, ID with
            photo, Social Security card, driver’s license. The third ID will be
            left for security to obtain a visitor badge.
          </li>
          <li>Expired Common Access Card (CAC).</li>
          <li>
            You must provide Letter of Authorization (LOA) from your company to
            show start and end dates and confirmation email from your agent.
          </li>
        </ul>
        <h5>USID Requirements:</h5>
        <ul>
          <li>
            Three (3) forms of valid picture ID, example: passport, ID with
            photo, Social Security card, driver’s license, voter’s card, and US
            citizenship (form N-560 OR N561).
          </li>
          <li>Expired retiree or dependent ID card (for renewal)</li>
          <li>
            You must provide Letter of Authorization (LOA) from your company to
            show start and end dates and confirmation email from your agent.
          </li>
          <li>
            For first time enrollment, you must provide original marriage
            certificate and birth certificate.
          </li>
          <li>
            For full time students turning 21 years old need to provide a letter
            from the school stating that you are an enrolled as a full-time
            student with date of enrollment and anticipated date of graduation.
          </li>
          <li>
            For recently retired veterans, you must provide DD Form 214 stating
            minimum of 20 years and honorable discharge or retirement orders
            (for recently retired veterans).
          </li>
          <li>
            For disabled American veterans, you must provide a letter from the
            Department of Veterans Affairs (DVA) office confirming your
            permanent 100% disability rating.
          </li>
          <li>
            For parent / parent-in-law, you must provide Approved Financial
            Dependency Determination from DFAS.
          </li>

          <li>
            To remove former spouse, you must provide a Divorce Decree or Death
            Certificate.
          </li>
        </ul>
      </div>
    </li>
  </ul>
`;
