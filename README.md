# Unique Team — Static Website

Website giới thiệu nhóm Unique gồm 6 thành viên. Website dùng HTML, CSS và JavaScript thuần, không cần backend hay database.

## Chạy thử
Mở `index.html` bằng trình duyệt. Có thể dùng VS Code + Live Server để xem trong quá trình chỉnh sửa.

## Cập nhật logo
Thay file `assets/unique-logo.jpg` bằng logo mới (giữ nguyên tên file).

## Cập nhật ảnh nhóm và ảnh thành viên
- Tạo thư mục `assets/images/`.
- Đặt ảnh thành viên vào đó, ví dụ `hai-anh.jpg`, `minh-cuong.jpg`, ...
- Trong `script.js`, mỗi thành viên có thể bổ sung trường `photo: "assets/images/hai-anh.jpg"`.
- Sau đó cập nhật phần tạo card và modal trong `script.js` để dùng ảnh này thay cho placeholder.
- Có thể thêm ảnh nhóm vào phần hero hoặc tạo gallery riêng sau khi có ảnh.

## Chỉnh sửa nội dung
Mở `script.js`, tìm mảng `MEMBERS`. Mỗi phần tử tương ứng một thành viên. Chỉnh `name`, `role`, `tagline`, `about`, `team`, `goal` tại đó. Không cần sửa HTML cho từng người.

## Đưa website lên Internet bằng GitHub Pages
1. Tạo repository GitHub, ví dụ `unique-team`.
2. Upload toàn bộ nội dung thư mục này lên nhánh `main`.
3. Vào **Settings → Pages**.
4. Ở **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn branch `main`, folder `/(root)`, rồi nhấn **Save**.
6. Chờ GitHub Pages triển khai. Đường dẫn thường có dạng `https://TEN-GITHUB.github.io/unique-team/`.

## Quyền riêng tư
Bản hiện tại không hiển thị MSSV, số điện thoại hoặc email cá nhân trên website công khai. Chỉ thêm các thông tin này khi từng thành viên đã đồng ý.
