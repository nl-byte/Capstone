import html from "html-literal";

export default state => html`
<h3>Contact Us</h3>
<ul class="accordion">
<div class = "container2">
    <form id="contact_form" action="https://formspree.io/f/mknlkjrk" method="POST">
     <div class="row">
      <label class="required" for="name">Name:</label><br/>
      <input id="name" class="input" name="name" type="text" value="" size="30" /><br />
      <span id="name_validation" class="error_message"></span>
    </div>
  <div class="row">
    <label class="required" for="email">Email:</label><br/>
    <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
    <span id="email_validation" class="error_message"></span>
  </div>
  <div class="row">
    <label class="required" for="phone">Phone Number:</label><br/>
    <input id="phone" class="input" name="phone" type="text" value="" size="30" /><br />
    <span id="phone_validation" class="error_message"></span>
  </div>
  <div class="row">
    <label class="required" for="subject">Subject:</label><br/>
    <select id="subject" class="input" name="subject">
      <option value="client support">Client Support</option>
      <option value="general information">General Information</option>
      <option value="IT support">IT Support</option>
      <option value="partnership inquiries">Partnership Inquiries</option>
      <option value="other">Other</option>
    </select><br />
    <span id="subject_validation" class="error_message"></span>
  </div>
  <div class="row">
    <label class="required" for="message">Message:</label><br>
    <textarea id="message" class="input" name="message" rows="5" cols="30"></textarea><br>
  </div>
  <input id="submit_button" type="submit" value="Send email"/>
</form>
</div>
</div>

`;
