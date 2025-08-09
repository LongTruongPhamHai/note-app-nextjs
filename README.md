# 📝 Ứng dụng Note App

Ứng dụng tạo ghi chú Note App.

## 🎥 Demo

[![Watch the video](https://img.youtube.com/vi/rQ_YWXL6JG4/0.jpg)](https://youtu.be/rQ_YWXL6JG4)

## ✨ Chức năng

- ➕ Thêm ghi chú.
- 👁️‍🗨️ Xem một/toàn bộ ghi chú.
- ✏️ Chỉnh sửa ghi chú.
- 🗑️ Xóa ghi chú.
- 📂 Quản lý ghi chú theo các mục: Notes, Archive, Trash. *(mới)*.
- 🌙 Chuyển đổi Dark mode *(mới)*.

## 🛠 Công nghệ sử dụng

- **Frontend:** [Next.js](https://nextjs.org/), [TailwindCSS](https://tailwindcss.com/), [Bootstrap Icons](https://icons.getbootstrap.com/).
- **Backend:** [JSON Server](https://github.com/typicode/json-server).

## ⚡ Hướng dẫn cài đặt và chạy

### 1️⃣ Clone dự án

```
git clone https://github.com/LongTruongPhamHai/note-app-nextjs.git
cd note-app-nextjs
```

### 2️⃣ Cài đặt và chạy ứng dụng

```
npm install                                       # Cài đặt dependencies
npm run dev                                       # Chạy frontend (http://localhost:3000)
json-server --watch src/data/db.json --port 5000  # Chạy backend (http://localhost:5000)
```

## 📂 Cấu trúc thư mục

```
note-app-nextjs/
├── .next/
├── node_modules/
├── public/
├── src/
│   ├── api/
│   ├── app/
│   │   ├── home/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   │
│   ├── assets/
│   ├── components/
│   │   ├── NoteForm.js
│   │   └── NoteList.js
│   │
│   ├── data/
│   └── repositories/
│   
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.json
├── package-lock.json
├── package.json
├── postcss.config.json
└── README.md
```

## 👤 Tác giả

- **Long Trương Phạm Hải** – [GitHub](https://github.com/LongTruongPhamHai).

---

📌 *Tham khảo thêm:* [Tài liệu triển khai Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

