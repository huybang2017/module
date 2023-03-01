// export: Khai báo để các module khác có thể gọi tới để sử dụng biến/hàm này
// export: cho phép xuất nhiều đối tượng từ một tệp JavaScript. Khi sử dụng export, cần phải sử dụng cặp dấu ngoặc nhọn để đánh dấu đối tượng cần được xuất.
export const PI = 3.14;

export function circleArea(r) {
  return PI * r ** 2;
}
export const MAX = 10;
