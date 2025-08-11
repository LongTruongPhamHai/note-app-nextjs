# 📝 Ứng dụng Note App

Ứng dụng tạo ghi chú Note App.

## 🎥 Demo

[![Watch the video](https://img.youtube.com/vi/rQ_YWXL6JG4/0.jpg)](https://youtu.be/rQ_YWXL6JG4)

## ✨ Chức năng

- ➕ Thêm ghi chú.
- 👁️‍🗨️ Xem một/toàn bộ ghi chú.
- ✏️ Chỉnh sửa ghi chú.
- 📂 Lưu trữ ghi chú.
- 🔄️ Khôi phục ghi chú.
- 🗑️ Xóa ghi chú.
- 🌙 Chuyển đổi Dark mode _(mới)_.

## 🛠 Công nghệ sử dụng

- **Frontend:** [Next.js](https://nextjs.org/), [TailwindCSS](https://tailwindcss.com/), [Bootstrap Icons](https://icons.getbootstrap.com/).
- **Backend:** [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/) với cơ sở dữ liệu [MongoDB](https://www.mongodb.com/) sử dụng [Mongoose](https://mongoosejs.com/) _(mới)_.

## ⚡ Hướng dẫn cài đặt và chạy

### 1️⃣ Clone dự án

```bash
git clone https://github.com/LongTruongPhamHai/note-app-nextjs.git
cd note-app-nextjs
```

### 2️⃣ Cài đặt dependencies

```bash
npm install
```

### 3️⃣ Chạy ứng dụng

```bash
npm run dev
```

## 📂 Cấu trúc thư mục

```
note-app-nextjs/
├── .next/
├── node_modules/
├── public/
├── src/
│   ├── api/
│   │   └── notes/
│   │
│   ├── app/
│   │   ├── api/
│   │   │   └── notes/
│   │   │
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
│   ├── controllers/
│   │
│   ├── data/ # (Không sử dụng)
│   ├── libs/
│   ├── models/
│   ├── repositories/
│   └── utils/
│
├── .env.local
├── .env.local.example
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.json
└── README.md
```

## 📡 API chính

- `GET /notes?status=<status>` → Lấy danh sách ghi chú theo các mục.
- `POST /notes` → Tạo ghi chú mới.
- `PUT /notes/:id` → Cập nhật ghi chú theo ID.
- `DELETE /notes/:id` → Xóa ghi chú theo ID.

---

## 👤 Tác giả

- **Long Trương Phạm Hải** – [GitHub](https://github.com/LongTruongPhamHai).

---

📌 _Tham khảo thêm:_ [Tài liệu triển khai Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
