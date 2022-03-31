const kickOffHours = document.querySelector('.kick-off-hours').textContent;
const kickOffQuantity = document.querySelector('.kick-off-qty');
const kickOffTotal = document.querySelector('.kick-off-total');
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

const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  navbarLinks.classList.toggle('active');
});

printButton.disabled = true;

kickOffQuantity.defaultValue = '1';
procurementQuantity.defaultValue = '1';
siteVisitQuantity.defaultValue = '1';
materialQuantity.defaultValue = '1';
updateQuantity.defaultValue = '1';
qualityQuantity.defaultValue = '1';
closeoutQuantity.defaultValue = '1';

submitButton.addEventListener('click', function () {
  kickOffTotal.textContent = +kickOffHours * +kickOffQuantity.value;
  procurementTotal.textContent = +procurementHours * +procurementQuantity.value;
  siteVisitTotal.textContent = +siteVisitHours * +siteVisitQuantity.value;
  coordinationMeetingTotal.textContent =
    +coordinationMeetingHours * +coordinationMeetingQuantity.value;
  travelTotal.textContent = +travelHours * +travelQuantity.value;
  ongoingTotal.textContent = +ongoingHours * +ongoingQuantity.value;
  materialTotal.textContent = +materialHours * +materialQuantity.value;
  fieldwireTotal.textContent = +fieldwireHours * +fieldwireQuantity.value;
  ganttTotal.textContent = +ganttHours * +ganttQuantity.value;
  updateTotal.textContent = +updateHours * +updateQuantity.value;
  qualityTotal.textContent = +qualityHours * +qualityQuantity.value;
  certifiedTotal.textContent = +certifiedHours * +certifiedQuantity.value;
  closeoutTotal.textContent = +closeoutHours * +closeoutQuantity.value;
  total.textContent = `${
    +kickOffTotal.textContent +
    +procurementTotal.textContent +
    +siteVisitTotal.textContent +
    +coordinationMeetingTotal.textContent +
    +travelTotal.textContent +
    +ongoingTotal.textContent +
    +materialTotal.textContent +
    +fieldwireTotal.textContent +
    +ganttTotal.textContent +
    +updateTotal.textContent +
    +qualityTotal.textContent +
    +certifiedTotal.textContent +
    +closeoutTotal.textContent
  } Hours`;

  printButton.disabled = false;
});

function createPDF() {
  var doc = new jsPDF('p', 'pt', 'letter');
  var htmlstring = '';
  var tempVarToCheckPageHeight = 0;
  var pageHeight = 0;
  pageHeight = doc.internal.pageSize.height;
  specialElementHandlers = {
    // element with id of "bypass" - jQuery style selector
    '#bypassme': function (element, renderer) {
      // true = "handled elsewhere, bypass text extraction"
      return true;
    },
  };
  margins = {
    top: 150,
    bottom: 60,
    left: 40,
    right: 40,
    width: 600,
  };
  var y = 20;
  doc.setLineWidth(2);
  doc.text(200, (y = y + 30), 'PM Labor Calculator');
  doc.autoTable({
    html: '#table1',
    startY: 70,
    theme: 'grid',
    columnStyles: {
      0: {
        cellWidth: 360,
      },
      1: {
        cellWidth: 45,
        halign: 'center',
      },
      2: {
        cellWidth: 45,
        halign: 'center',
      },
      3: {
        cellWidth: 45,
        halign: 'center',
      },
    },
    styles: {
      minCellHeight: 40,
    },
  });
  doc.save('PM_Labor_Calculator.pdf');
}

printButton.addEventListener('click', function () {
  createPDF();
});

console.log('Hello');
