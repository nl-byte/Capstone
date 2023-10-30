import html from "html-literal";

export default state => html`
  <section id="Home Page">
<div class="homepage">
  <h1>The Manila US Veterans Services Organization (MUSVSO)</h1>
  </section>

  <h2>About Us</h2>

  <p class="welcomemsg">  Manila US Veterans Services Organization (MUSVSO) is a woman and veteran owned organization founded in 2022,
    aimed to provide inforamtion, resources, and benefits available to US veterans residing in the Philippines.
    available for US
   </p>

  <h2>U.S. Veterans in the Philippines</h2>

  <p class="welcomemsg">  Manila is home to the only Veterans Administration regional office outside the United States,
    and the American Cemetery in Manila is the largest American military cemetery outside the United States.
    More than four million Filipino-Americans live in the United States, and almost 300,000 U.S. citizens reside in the Philippines, including a large number of U.S. military veterans.
   </p>

   <h2>How We Help</h2>
  <p class="welcomemsg"> We aim to consolidate and disperse US Veteran benefit information and resources and provide various services tailored to each veterans needs including:
     military ID card Assistance/ Initial Issuance Assistance, VA Claims Assistance, US Military Burial Arrangement Assistance.
  </p>

  <h2>Become a MUSVSO member</h2>
  <button type="submit">Sign Up</button>
  </div>

<div class = "container">
  <section class="homebox1">
      <h3>DODID Cards Office Manila</h3>
      <ul>

      </ul>
      <button>Continue</button>
</section>

  <section class="homebox2">
      <h3>Manila Veterans Affairs Regional Office</h3>
      <ul>
      </ul>
     <a href="Cac.js"><button>Continue</button></a>
</section>

  <section class="homebox3">
      <h3>US Embassy US Citizen/ Veteran Services</h3>
      <ul>

      </ul>
      <button>Continue</button>
    </section>
  </div>

    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>

<footer>
  <p>created by NL 2023</p>
</footer>
  </section>

`;
