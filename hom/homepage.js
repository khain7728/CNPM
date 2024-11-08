let currentMonth = new Date().getMonth(); // Tháng hiện tại (0-11)
let currentYear = new Date().getFullYear(); // Năm hiện tại
let selectedDayElement = null; // Biến để lưu trữ ngày được chọn
let tasks = {}; // Lưu trữ nhiệm vụ theo ngày

// Hàm tạo lịch
function generateCalendar(month, year) {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = ''; // Xóa nội dung cũ

    const daysOfWeek = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        dayElement.style.fontWeight = 'bold';
        calendar.appendChild(dayElement);
    });

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    const startDay = (firstDay === 0) ? 6 : firstDay - 1;

    for (let i = startDay - 1; i >= 0; i--) {
        const dayElement = document.createElement('div');
        dayElement.textContent = prevMonthDays - i;
        dayElement.classList.add('empty');
        calendar.appendChild(dayElement);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;

        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        if (day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            dayElement.classList.add('active');
        }

        dayElement.addEventListener('click', function() {
            if (selectedDayElement) {
                selectedDayElement.classList.remove('selected');
            }
            dayElement.classList.add('selected');
            selectedDayElement = dayElement;

            // Hiển thị nhiệm vụ cho ngày được chọn
            displayTasksForDate(dateString);
        });

        calendar.appendChild(dayElement);
    }

    let totalCells = calendar.children.length;
    let nextMonthDay = 1;
    while (totalCells < 42) {
        const dayElement = document.createElement('div');
        dayElement.textContent = nextMonthDay++;
        dayElement.classList.add('empty');
        calendar.appendChild(dayElement);
        totalCells++;
    }

    document.getElementById('monthYear').textContent = `Tháng ${month + 1} ${year}`;
}

// Hàm hiển thị nhiệm vụ cho ngày được chọn
function displayTasksForDate(date) {
    const tasksForDay = document.getElementById('tasksForDay');
    const selectedDateDisplay = document.getElementById('selectedDate');

    selectedDateDisplay.textContent = date;
    tasksForDay.innerHTML = ''; // Xóa nhiệm vụ cũ

    if (tasks[date]) {
        tasks[date].forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.textContent = task;
            tasksForDay.appendChild(taskElement);
        });
    } else {
        tasksForDay.textContent = 'Không có nhiệm vụ cho ngày này.';
    }
}

// Hàm thêm nhiệm vụ
document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('newTask');
    const task = taskInput.value.trim();
    const selectedDate = document.getElementById('selectedDate').textContent;

    if (task && selectedDate) {
        if (!tasks[selectedDate]) {
            tasks[selectedDate] = [];
        }
        tasks[selectedDate].push(task);
        taskInput.value = ''; // Xóa input sau khi thêm
        displayTasksForDate(selectedDate); // Cập nhật danh sách nhiệm vụ hiển thị
    }
});

// Sự kiện chuyển tháng
document.getElementById('prevMonth').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
});

// Hàm chuyển đổi thanh bên
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar'); // Lấy thanh bên
    sidebar.classList.toggle('active'); // Thêm hoặc bỏ lớp 'active'
}

// Tạo lịch ban đầu
generateCalendar(currentMonth, currentYear);
