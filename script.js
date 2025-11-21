// Nút "Tìm hiểu thêm" cuộn xuống phần giới thiệu
document.getElementById("learnMore").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// Hiển thị thông báo khi gửi form
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.");
});
