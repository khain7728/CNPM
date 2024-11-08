// Lấy các phần tử từ DOM
const emailInput = document.querySelector('.email input[type="email"]');
const submitButton = document.querySelector('#submit'); // Giả sử có nút gửi

// Hàm kiểm tra cú pháp email hợp lệ
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Hàm kiểm tra xem email đã được đăng ký chưa
function isEmailRegistered(email) {
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
    return registeredUser && registeredUser.email === email;
}

// Xử lý sự kiện khi người dùng nhấn nút hoặc phím Enter
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleForgotPassword();
    }
});

submitButton.addEventListener('click', handleForgotPassword);

function handleForgotPassword() {
    const email = emailInput.value.trim();

    // Kiểm tra cú pháp email
    if (!email) {
        alert('Vui lòng nhập email.');
        return;
    }
    if (!isValidEmail(email)) {
        alert('Email không hợp lệ. Vui lòng nhập email đúng định dạng.');
        return;
    }

    // Kiểm tra xem email đã được đăng ký chưa
    if (isEmailRegistered(email)) {
        alert('Mật khẩu đã được gửi đến email của bạn.');
        // Ở đây, thêm mã gọi API gửi email thực tế nếu cần
    } else {
        alert('Email chưa được đăng ký. Vui lòng kiểm tra lại hoặc đăng ký.');
    }
}
