import html from "html-literal";

export default state => html`
<h3>Contact Us</h3>
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
  <label class="required" for="message">Message:</label><br>
  <textarea id="message" class="input" name="message" rows="5" cols="30"></textarea><br>
</div>
    <input id="submit_button" type="submit" value="Send email" />
</form>
</div>
<div class = "container3">
  <img src="https://www.mapquestapi.com/staticmap/v5/map?start=Embassy of the United States of America, 1201 Roxas Blvd, Ermita, Manila, 1000 Metro Manila, Philippines|flag-end&locations=Seafront, Roxas, U.S. Embassy, GXVR+FQP, Service Rd, Pasay, Metro Manila, Philippines&size=@2x&key=${process.env.MAPQUEST_MAP_API_KEY}" />
</div>
  </section>
`;
