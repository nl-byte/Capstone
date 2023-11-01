import html from "html-literal";

export default state => html`
  <h1>The Manila Veterans Affairs Regional Office</h1>
  <img src="https://www.benefits.va.gov/ROManila/images/RO_Manila.jpg" alt="" />


  <div class="va-form">
    <label class="required" for="phone">Search for a VA form by keyword, form name, or form number.</label><br/>
    <input id="va-form" class="input" name="va-form" type="text" value="" size="20" /><br />
    <span id="va-form" class="error_message"></span>
  </div>
  </div>
`;
