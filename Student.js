// export default: chỉ cho phép xuất một đối tượng mặc định từ một tệp JavaScript. Đối tượng được xuất này có thể được nhập vào một tệp khác mà không cần phải sử dụng cặp dấu ngoặc nhọn. Nếu có nhiều hơn một export default trong một tệp JavaScript, thì chỉ có đối tượng được xuất mặc định đầu tiên được sử dụng.
export default class Student {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
