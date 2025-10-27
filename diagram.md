
```mermaid
flowchart TD
    A[UI Layer<br>(ChatPresenter)] --> B[Container]
    B --> C[Service Layer<br>(ChatService)]
    C --> D[Repo Layer<br>(chatRepo)]
    D -->|Mock Data| C
```
