import html from "html-literal";

export default () => html`
<div class = "container4">
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
    <label for="customer">Category:</label>
      <select id="customer" name="customer">
        <option value="Active Duty">Active Duty</option>
        <option value="Contractor">Contractor</option>
        <option value="Dependent">Dependent</option>
        <option value="Disabled American Veteran">Disabled American Veteran</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div>
      <label for="request">Request:</label>
      <input
        type="checkbox"
        id="id_of_checkbox1"
        class="items1"
        name="request"
        value="id card-renewal"
      />
      <label for="request1">id card-renewal</label>
      <input
        type="checkbox"
        id="id_of_checkbox2"
        class="items2"
        name="request"
        value="nextgen"
      />
      <label for="top2">record update</label>
      <input
        type="checkbox"
        id="id_of_checkbox3"
        class="items3"
        name="record update"
        value="both"
      />
      <label for="top3">both</label>
      <div>
      <label for="startDate">Start Date:</label>
      <input
        type="date"
        name="startDate"
        id="startDate"
        required
      />
    </div>
    <div>
      <label for="endDate">End Date:</label>
      <input
        type="date"
        name="endDate"
        id="endDate"
        required
      />
    </div>

    <input type="submit" name="submit" value="Submit Appointment Request" />
  </form>

  <div class = "container4">
`;
