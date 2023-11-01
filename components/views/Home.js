import html from "html-literal";

export default state => html`

<section id="manila">
<ul>
  <li>The Manila US Veterans</li>
  <li>Services Organization</li>
  <li>(MUSVO)</li>
</ul>
</p>
</section>

<h1 id="categories">
  <p>Categories:</p>
</h1>
<div class = "container">
  <div class="box">
  <a href="http://localhost:1234/Dodid">
    <div class="icon"><i class="fa fa-id-card" aria-hidden="true"></i></div>
  </a>
      <div class="Content">
      <h3>DODID Cards Office Manila</h3>
      <ul>
        <li>Eligibility</li>
        <li>Requirements</li>
        <li>Appointment Scheduler</li>
      </ul>
</div>
</div>
<div class="box">
<a href="http://localhost:1234/Va">
    <div class="icon"><i class="fa fa-building" aria-hidden="true"></i></div>
  </a>
      <div class="Content">
      <h3>Manila Veterans Affairs Regional Office</h3>
      <br>
      <ul>
        <li>Services</li>
        <li>Hours and Location</li>
        <li>Appointment Scheduler</li>
      </ul>
      <br>

      </div>
</div>
<div class="box">
<a href="https://localhost:1234/Appointment">
    <div class="icon"><i class="fa fa-calendar" aria-hidden="true"></i></div>
  </a>
      <div class="Content">
      <h3>Make an Appointment</h3>
      <br>
      <ul>
        <li>Id Renewal Help</li>
        <li>VA Services Help</li>
        <li>Other concerns</li>
      </ul>
      <br>
  </div>
</div>
</div>
<div class ="weather">
  <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
</div>
<footer>
<div class="ftrcontct">
  <div class="ftrcontact1 ftrcntctadress" style="color: black;"><div class="ftrcntct"
  >Contact</div>
  <span>Manila US Veterans Services Organization
  3201 Landover St,
  Alexandria, VA 22305</span></div>
  <div class="ftrcontcttel ftrcntctadress" style="color: black;">
  <span>Tel 123-456-7890</span>
  <span>Email MUSVSO@mysite.com</span>
</div>
<div class="ftrcontctnwsltr">
  <span class="ftrcntctadress" style="color: black;">Subscribe to my Newsletter</span>
  <div class="ftrcntcteadress">
    <div class="ftrcntcteadress2" style="border-color: black; color: black;">
    <span class="ftrcntctadress">Enter your email here*</span>
  </div>
  <div class="ftrcntcteadress3" >Join</div></div></div></div>

</footer>
  </section>

`;
