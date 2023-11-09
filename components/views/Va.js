import html from "html-literal";
import { Va } from "../../store";

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
      />
      <label for="section1" class="accordion2_label">VA’s Manila Regional Office</label>
      <div class="accordion2_content">
        <p>
          VA’s Manila Regional Office (RO) administers a variety of services,
          including Compensation, Education, Insurance, Pension, and Veteran
          Readiness and Employment for Veterans, Service members, their families
          and survivors in the Philippines. Some of the additional services include:
          </p>
         <ul>
          <li>Counseling about eligibility for VA benefits and how to apply</li>
          <li>Information about VA health care and memorial benefits</li>
          <li> Outreach to Veterans, including those who are homeless or at risk for homelessness and older, minority, and women Veterans </li>
          <li>Public affairs</li>
          </ul>
        <p>Visit: <a href="https://www.benefits.va.gov/ROMANILA/services-offered.asp">https://www.benefits.va.gov/ROMANILA/services-offered.asp</a> for more information</p>
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
            Friday,8:00 a.m. to 3:00 p.m.

            Located at:

            U S Embassy Seafront Compound
            Address: 1501 Roxas Blvd, Pasay,
            1302 Metro Manila, Philippines

            Phone numbers:

            Metro Manila Trunk Line: (+632) 8550-3888
            Outside Metro Manila toll-free number: 1-800-1888-5252
            Fax Number: (+632) 8550-3944
            If you are in the Philippines, you can now contact VA MANILA via the Domestic Toll Free Number #myVA (#6982)
          </p>
</div>
</div>
<div>
    <input
        type="checkbox"
        name="example"
        id="section14"
        class="accordion2_input"
      />
      <label for="section14" class="accordion2_label">MUSVSO Site VA Services:</label>
      <div class="accordion2_content">
        <ul>

          <p>

<div id="vaformsearchbox">
    <form>
    <label class="required" for="va-form-input"
      ></label
    ><br /> <h3 id="valocator">Va Form Locator</h3>
    <p>Search for a VA form by keyword, form name, or form number.</p>
    <input id="va-form-input" name ="vaforminput" value="" size="20" /><br />
    <span id="va-form" class="error_message"></span>
    <br>
    <button id="search-button" class="button" type="submit" size="10">
      Search
    </button>
    <br />
</form>

  <section class="formlist" id="formlist">
    <table id="vaformtable">
      <tr>
        <th>Form Name</th>
        <th>Form Url</th>
      </tr>
      ${state.vaform
        .map(vaformtable => {
          return `<tr><td>${vaformtable.form_name}</td><td>${vaformtable.url}</td>
          </td></tr>`;
        })
        .join("")}
    </table>
  </section>
          </p>
          <h3 id="valocator">Va Facility Locator </h3>
          <p>(coming soon)</p>
</div>
</div>
</div>
`;
