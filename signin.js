// Lấy các phần tử từ DOM
const emailInput = document.querySelector('.email input[type="email"]');
const passwordInput = document.querySelector('.password input[type="password"]');

// Hàm kiểm tra cú pháp email hợp lệ
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Xử lý sự kiện khi người dùng nhấn phím Enter
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Lấy giá trị từ input
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Kiểm tra tính hợp lệ của email và mật khẩu
        if (!email || !password) {
            alert('Vui lòng nhập đầy đủ email và mật khẩu để đăng ký.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Email không hợp lệ. Vui lòng nhập email đúng định dạng.');
            return;
        }

        // Mô phỏng lưu thông tin đăng ký (hoặc gọi API để xử lý)
        const user = {
            email: email,
            password: password,
        };

        // Lưu thông tin người dùng vào Local Storage (chỉ để mô phỏng)
        localStorage.setItem('registeredUser', JSON.stringify(user));

        // Hiển thị thông báo đăng ký thành công và chuyển hướng
        alert('Đăng ký thành công! Bạn sẽ được chuyển hướng đến trang đăng nhập.');
        window.location.href = 'login.html'; // Thay đổi 'login.html' thành trang đăng nhập thực tế
    }
});
