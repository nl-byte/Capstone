import html from "html-literal";

export default state => html`
  <h1>The Manila Veterans Affairs Regional Office</h1>
  <img
    class="vapic"
    src="https://www.benefits.va.gov/ROManila/images/RO_Manila.jpg"
    alt=""
    class="center"
  />

  <div class="va-form">
    <label class="required" for="va-form-input"
      >Search for a VA form by keyword, form name, or form number.</label
    ><br />
    <input id="va-form-input" value="" size="20" /><br />
    <span id="va-form" class="error_message"></span>
    <button id="search-button" class="button" type="button" size="10">
      Search
    </button>
  </div>
`;
