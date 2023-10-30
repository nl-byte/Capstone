import html from "html-literal";

export default state => html`
  <section id="apptlist">
    <table id="apptlists">
      <tr>
        <th>Customer</th>
        <th>Location</th>
        <th>Request</th>
        <th>Category</th>
        <th>StartDate</th>
        <th>EndDate</th>
      </tr>

      ${state.appt
        .map(appointment => {
          return `<tr><td>${appointment.customer}</td><td>${
            appointment.location
          }</td><td>${appointment.request}</td><td>${appointment.category.join(
            " & "
          )}</td><td>${appointment.startDate}</td><td>${
            appointment.endDate
          }</td></tr>`;
        })
        .join("")}
    </table>
  </section>
`;
