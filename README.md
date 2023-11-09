# React native lab 7

Lập trình thiết bị di động với React-native lab-5

## Mô Tả Dự Án

- Thiết kế ác màn hình cơ bản với react-native
- Sử dụng react Navigation để tạo stack và di chuyển giữa các trang
- Truyền dữ liệu giữa các trang với Navigation và route
- hook cơ bản
- kết nối api với mockApi và sử dụng Axios để call API jobs

- API : `https://65444c9e5a0b4b04436c3d4a.mockapi.io/api/v1/jobs`
![data](/demo/dataFromMockApi.png)

## Các thành phần chính 

Dưới đây là danh sách các thành phần đã làm:

- Màn hình 1 : Màn hình bắt đầu
![FitstScreen](/demo/screen1.png)

Ở đây nhập tên người dùng, tên này sẽ được truyền đến màn hình thứ 2 thông qua route trong navigation và hiển thị ở phần header.

- Màn hình 2 : Nơi hiển thị jobs 
Jobs sẽ được lấy về từ api ở trên, sau đó sử dụng FlatList để hiển thị các job ra.
ở đây có chức năng search, chọn vào nút bút chì trên job để tiến chỉnh sửa, chọn vào nút dấu cộng màu xanh để thêm 1 job mới.

- Giao diện màn hình 2 và mã call api sau khi call api thành công :
![Screen1_a](/demo/callApiAndLoadToUI.png)

Khi nhấn vào nút chỉnh sửa,màn hình thứ 3 sẽ có tiêu đề là chỉnh sửa và thực hiện chức năng chiinrh sửa, khi chọn chức năng thêm thì màn hình thứ 3 sẽ có chức năng thêm. sau khi nhật jobTitle và nhấn finish, ứng dụng sẽ quay lại màn hình thứ 2 và hiển thị lại dât mới được thêm hoặc chỉnh sửa.
- màn hình 3
![Screen1_a](/demo/screenAddJobs.png)

- mã xử lý thêm jobs : 

![Screen1_a](/demo/handleAddJobs.png)



## Hướng Dẫn Cài Đặt

- Clone repository :
Mở cmd trong thư mục cần lưu và chạy lệnh : `git clone https://github.com/nhatlinhdev201/reactnative-lab05.git`

Di chuyển vào ứng dụng, chạy lệnh `cd reactnative-lab05`

- Tải các modules ứng dụng :
Tại cmd chạy lệnh `npm install`

- Chạy ứng dụng : 
Chạy lệnh : `npm run web`


## thực hiện bởi Pham Nhat Linh
 Email : nhatlinhdev201@gmail.com
 

