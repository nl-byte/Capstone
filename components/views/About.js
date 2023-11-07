import html from "html-literal";

export default state => html`
  <div class="accordion2">
    <div>
      <input
        type="checkbox"
        name="example"
        id="section1"
        class="accordion2_input"
        class="hidecheckbox"
      />
      <label for="section1" class="accordion2_label">About Us</label>
      <div class="accordion2_content">
        <p>
          Manila US Veterans Services Organization (MUSVSO) is a woman and
          veteran owned organization founded in 2022, aimed to provide
          information, resources, and benefits available to US veterans residing
          in the Philippines.
        </p>
      </div>
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
          >U.S. Veterans in the Philippines</label
        >
        <div class="accordion2_content">
          <p>
            Manila is home to the only Veterans Administration regional office
            outside the United States, and the American Cemetery in Manila is
            the largest American military cemetery outside the United States.
            More than four million Filipino-Americans live in the United States,
            and almost 300,000 U.S. citizens reside in the Philippines,
            including a large number of U.S. military veterans.
          </p>
        </div>
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
          <label for="section1" class="accordion2_label">How We Help</label>
          <div class="accordion2_content">
            <p>
              We consolidate and disperse US Veteran benefit information and
              resources and provide various services tailored to each veterans
              needs including:military ID card Assistance/ Initial Issuance
              Assistance, VA Claims Assistance, US Military Burial Arrangement
              Assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
