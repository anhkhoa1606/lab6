# Modular Architecture Refactor (UniFAQ Chat only)

## Mô tả
Refactor UniFAQ (Chat) theo mô hình kiến trúc **3 lớp: UI – Service – Repo**.

### Trước (Before)
Toàn bộ logic và UI nằm chung trong một component.

### Sau (After)
Tách riêng:
- **UI:** `ChatContainer`, `ChatPresenter`
- **Service:** `chatService.js`
- **Repo:** `chatRepo.js`

Ứng dụng vẫn chạy ổn định, hiển thị chatbot demo.
