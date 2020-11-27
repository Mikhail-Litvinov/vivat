document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'ru',
      fixedWeekCount: false,
      height: "85vh",
      navLinks: false,
      selectable: true
    });
    calendar.render();
  });
