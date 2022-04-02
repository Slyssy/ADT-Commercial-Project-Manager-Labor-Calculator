const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

const kickOffHours = document.querySelector('.kickoff-hours').textContent;
const kickOffQuantity = document.querySelector('.kickoff-qty');
const kickOffTotal = document.querySelector('.kickoff-total');
const procurementHours =
  document.querySelector('.procurement-hours').textContent;
const procurementQuantity = document.querySelector('.procurement-qty');
const procurementTotal = document.querySelector('.procurement-total');
const siteVisitHours = document.querySelector('.site-visit-hours').textContent;
const siteVisitQuantity = document.querySelector('.site-visit-qty');
const siteVisitTotal = document.querySelector('.site-visit-total');
const coordinationMeetingHours = document.querySelector(
  '.coordination-meeting-hours'
).textContent;
const coordinationMeetingQuantity = document.querySelector(
  '.coordination-meeting-qty'
);
const coordinationMeetingTotal = document.querySelector(
  '.coordination-meeting-total'
);
const travelHours = document.querySelector('.travel-hours').textContent;
const travelQuantity = document.querySelector('.travel-qty');
const travelTotal = document.querySelector('.travel-total');
const ongoingHours = document.querySelector(
  '.ongoing-site-visit-hours'
).textContent;
const ongoingQuantity = document.querySelector('.ongoing-site-visit-qty');
const ongoingTotal = document.querySelector('.ongoing-site-visit-total');
const materialHours = document.querySelector(
  '.material-research-hours'
).textContent;
const materialQuantity = document.querySelector('.material-research-qty');
const materialTotal = document.querySelector('.material-research-total');
const fieldwireHours = document.querySelector('.fieldwire-hours').textContent;
const fieldwireQuantity = document.querySelector('.fieldwire-qty');
const fieldwireTotal = document.querySelector('.fieldwire-total');
const ganttHours = document.querySelector('.gantt-chart-hours').textContent;
const ganttQuantity = document.querySelector('.gantt-chart-qty');
const ganttTotal = document.querySelector('.gantt-chart-total');
const updateHours = document.querySelector('.update-hours').textContent;
const updateQuantity = document.querySelector('.update-qty');
const updateTotal = document.querySelector('.update-total');
const qualityHours = document.querySelector(
  '.quality-control-hours'
).textContent;
const qualityQuantity = document.querySelector('.quality-control-qty');
const qualityTotal = document.querySelector('.quality-control-total');
const certifiedHours = document.querySelector(
  '.certified-payroll-hours'
).textContent;
const certifiedQuantity = document.querySelector('.certified-payroll-qty');
const certifiedTotal = document.querySelector('.certified-payroll-total');
const closeoutHours = document.querySelector('.closeout-hours').textContent;
const closeoutQuantity = document.querySelector('.closeout-qty');
const closeoutTotal = document.querySelector('.closeout-total');
const total = document.querySelector('.total');

const submitButton = document.getElementById('submitButton');
const printButton = document.getElementById('printButton');

toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  navbarLinks.classList.toggle('active');
  console.log('click');
});
