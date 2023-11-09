import html from "html-literal";

export default state => html`

  <div class="accordion2">
      <div>
        <input
          type="checkbox"
          name="example"
          id="section8"
          class="accordion2_input"
        />
        <label for="section8" class="accordion2_label">Eligible Personnel</label>
        <div class="accordion2_content">
        <p>
          Active-duty Military Service Members, DOD Contractors, DOD/ Federal
          Civilian Employees, Military Retirees, Dependents, Eligible Family
          Members (EFM). For more information regarding DODID types end
          eligibility, please visit:
          <a href="https://www.cac.mil/">https://www.cac.mil/</a> for more
          information.
        </p>
          </p>
        </div>
      </div>
      <div class="accordion2">
      <div>
        <input
          type="checkbox"
          name="example"
          id="section7"
          class="accordion2_input"
          class="hidecheckbox"
        />
      <label for="section7" class="accordion2_label">How to Make an Appointment</label>
        <div class="accordion2_content">
        <p>
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
        <p>
        </div>
      </div>
      <div class="accordion2">
      <div>
        <input
          type="checkbox"
          name="example"
          id="section6"
          class="accordion2_input"
        />
        <label for="section6" class="accordion2_label">CAC Requirements</label>
        <div class="accordion2_content">
          <p>
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
          </p>
        </div>
      </div>
      <div class="accordion2">
      <div>
        <input
          type="checkbox"
          name="example"
          id="section5"
          class="accordion2_input"
        />
        <label for="section5" class="accordion2_label">DODID Requirements</label>
        <div class="accordion2_content">
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
      </div>
`;
