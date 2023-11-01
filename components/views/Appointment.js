import html from "html-literal";

export default () => html`
  <div class="container4">
    <form id="appt" method="POST" action="">
      <h2>Create an Appointment</h2>
      <div>
        <label for="customer">Customer:</label>
        <input
          type="text"
          name="customer"
          id="customer"
          placeholder="Enter customer name"
          required
        />
      </div>
      <div>
        <label for="location">Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Enter location"
          required
        />
      </div>
      <div>
        <label for="category">Category:</label>
        <select id="category" name="category">
          <option value="Active Duty">Active Duty</option>
          <option value="Contractor">Contractor</option>
          <option value="Dependent">Dependent</option>
          <option value="Disabled American Veteran"
            >Disabled American Veteran</option
          >
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
      <label for="request">Request:</label>
        <select id="request" name="request">
          <option value="dodidhelp">DODID Assistance</option>
          <option value="vahelp">VA Assistance</option>
          <option value="both">BOTH</option>
          <option value="other">OTHER</option>
</div>

      <div>
        <label for="startDate">Start Date:</label>
        <input type="date" name="startDate" id="startDate" required />
      </div>
      <div>
        <label for="endDate">End Date:</label>
        <input type="date" name="endDate" id="endDate" required />
      </div>

      <input type="submit" name="submit" value="Submit Appointment Request" />
    </form>

    <div class="container4"></div>
  </div>
`;
