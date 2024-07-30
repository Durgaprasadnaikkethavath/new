function bookAppointment() {
  const patientName = document.getElementById("patientName").value;
  const doctorName = document.getElementById("doctorName").value;
  const appointmentTime = document.getElementById("appointmentTime").value;
  const currentTime = new Date().toISOString();

  if (new Date(appointmentTime) < new Date(currentTime)) {
    alert("Cannot select a past date and time.");
    return;
  }

  if (patientName && doctorName && appointmentTime) {
    const appointmentList = document.getElementById("appointmentList");
    const appointmentItem = document.createElement("div");
    appointmentItem.textContent = `Patient Name: ${patientName}, Doctor Name: ${doctorName}, Appointment Time: ${appointmentTime}`;
    appointmentList.appendChild(appointmentItem);
    alert(`Appointment booked successfully!`);
  } else {
    alert("Please fill in all fields.");
  }
}
