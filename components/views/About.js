import html from "html-literal";

export default state => html`
  <div class="container0">
    <h1>About</h1>
    <ul class="accordion">
      <li>
        <input type="radio" name="accordion" id="first" checked="checked" />
        <label for="first">About Us</label>
        <div class="content">
          <p>
            Manila US Veterans Services Organization (MUSVSO) is a woman and
            veteran owned organization founded in 2022, aimed to provide
            information, resources, and benefits available to US veterans
            residing in the Philippines.
          </p>
        </div>
      </li>
    </ul>
    <ul class="accordion">
      <li>
        <input type="radio" name="accordion" id="second" />
        <label for="second">U.S. Veterans in the Philippines</label>
        <div class="content">
          <p>
            Manila is home to the only Veterans Administration regional office
            outside the United States, and the American Cemetery in Manila is
            the largest American military cemetery outside the United States.
            More than four million Filipino-Americans live in the United States,
            and almost 300,000 U.S. citizens reside in the Philippines,
            including a large number of U.S. military veterans.
          </p>
        </div>
      </li>
    </ul>
    <ul class="accordion">
      <li>
        <input type="radio" name="accordion" id="third" />
        <label for="third">How We Help</label>
        <div class="content">
          <p>
            We consolidate and disperse US Veteran benefit information and
            resources and provide various services tailored to each veterans
            needs including:military ID card Assistance/ Initial Issuance
            Assistance, VA Claims Assistance, US Military Burial Arrangement
            Assistance.
          </p>
        </div>
      </li>
    </ul>
  </div>
`;
