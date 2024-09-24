luồng chạy redux
dispatch actions => vào reducers cập nhật state => update UI 

1. Khi bạn tạo một "slice" trong Redux Toolkit bằng cách sử dụng createSlice, nó tạo ra một đối tượng bao gồm nhiều thứ:
Reducer: Hàm chịu trách nhiệm cập nhật trạng thái (đây là cái bạn cần khi truyền cho configureStore).
Actions: Các hàm để tạo ra action tương ứng với từng loại thay đổi trạng thái.
State: Trạng thái khởi tạo (initial state).

2. Bạn chỉ cần reducer để quản lý trạng thái trong store:
configureStore chỉ yêu cầu bạn cung cấp các reducer, vì đó là thứ giúp Redux biết cách cập nhật trạng thái dựa trên các action.
Mỗi "slice" có một phần riêng của nó để xử lý logic về cập nhật trạng thái, và bạn chỉ cần chuyển cái reducer từ "slice" vào store. Đây là lý do tại sao bạn phải thêm .reducer ở cuối filterSlice và todoSlice.

3. Trong Redux Toolkit, reducers không phải là actions vì chúng phục vụ những mục đích khác nhau:
3.1 Reducers:
Chức năng của reducers là xác định cách trạng thái của ứng dụng được cập nhật dựa trên các hành động (actions) đã được gửi.
Trong createSlice, các reducers là những hàm định nghĩa cách mỗi hành động ảnh hưởng đến trạng thái. Ví dụ: addTodo và toggleTodoStatus là các reducer trong slice này, và chúng mô tả cách trạng thái todoList được thay đổi khi một hành động tương ứng được kích hoạt.

3.2 Actions:
Actions là những đối tượng mô tả điều gì đang xảy ra trong ứng dụng, thường chứa type (loại hành động) và payload (dữ liệu bổ sung).
Khi bạn dùng createSlice, Redux Toolkit tự động tạo ra các action creators dựa trên các reducers. Ví dụ, nó sẽ tạo các action creators như addTodo và toggleTodoStatus mà bạn có thể gọi từ bên ngoài để gửi các hành động và cập nhật trạng thái.