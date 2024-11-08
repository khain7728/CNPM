// Lấy các phần tử từ DOM
const emailInput = document.querySelector('.email input[type="email"]');
const passwordInput = document.querySelector('.password input[type="password"]');

// Xử lý sự kiện khi người dùng nhấn phím Enter
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Lấy giá trị từ input
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Kiểm tra tính hợp lệ
        if (!email || !password) {
            alert('Vui lòng nhập email và mật khẩu.');
            return;
        }

        // Mô phỏng gọi API (Có thể thay thế bằng API thực tế)
        // Thay thế đoạn này bằng mã gọi API thực tế nếu cần
        if (email === "user@example.com" && password === "password123") {
            alert('Đăng nhập thành công!');

            // Lưu thông tin đăng nhập vào Local Storage
            localStorage.setItem('loggedInUser', email);

            // Chuyển hướng đến trang chủ
            window.location.href = 'home.html'; // Thay đổi 'home.html' thành tên file trang chủ của bạn
        } else {
            alert('Email hoặc mật khẩu không đúng.');
        }
    }
});