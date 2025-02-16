document.addEventListener('DOMContentLoaded', function() {
    var task_events = []
    for (task of tasks) {
        task_events.push(
            {
                id: task.id,
                title: task.description,
                start: task.start_time,
                end: task.end_time
            }
        ) 
    }

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        themeSystem: 'bootstrap5',
        initialView: 'timeGridDay',
        initialDate: date.date,
        allDaySlot: false,
        headerToolbar: {
            left: '',
            center: '',
            right: ''
        },
        events: task_events,
    })
    calendar.render();
});

