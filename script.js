document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const doctor = document.getElementById("doctor").value;
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;

    const appointment = {
      name,
      doctor,
      day,
      time,
    };

    displayAppointment(appointment);

    document.getElementById("appointmentForm").reset();
  });

function displayAppointment(appointment) {
  const appointmentsContainer = document.getElementById("appointments");

  const appointmentDiv = document.createElement("div");
  appointmentDiv.classList.add("appointment");

  const name = document.createElement("h3");
  name.textContent = `Name: ${appointment.name}`;
  appointmentDiv.appendChild(name);

  const doctor = document.createElement("p");
  doctor.textContent = `Doctor: ${appointment.doctor}`;
  appointmentDiv.appendChild(doctor);

  const day = document.createElement("p");
  day.textContent = `Day: ${appointment.day}`;
  appointmentDiv.appendChild(day);

  const time = document.createElement("p");
  time.textContent = `Time: ${appointment.time}`;
  appointmentDiv.appendChild(time);

  appointmentsContainer.appendChild(appointmentDiv);
}
