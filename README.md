# Minimal FastAPI + Electron + React Test (JS)

פרויקט זה מדגים שילוב בסיסי של FastAPI (backend), Electron (framework לאפליקציות דסקטופ) ו-React (frontend) באמצעות JavaScript.

## מבנה הפרויקט

```
minimal-fastapi-electron-test/
├── backend/               ← אפליקציית FastAPI (uvicorn)
│   ├── main.py
│   └── requirements.txt
├── frontend/              ← React + Vite + Electron
│   ├── react/             ← קוד React (Vite)
│   └── electron/          ← main.js, preload.js וכו'
└── README.md
```

## דרישות

- Python 3.x
- Node.js
- npm או yarn

## הרצה

1.  **התקנת תלויות:**

    ```bash
    # עבור ה-backend (FastAPI)
    cd backend
    pip install -r requirements.txt

    # עבור ה-frontend (React)
    cd frontend/react
    npm install # או yarn install
    ```

2.  **הרצת שרת הפיתוח של React:**

    ```bash
    cd frontend/react
    npm run dev # או yarn dev
    ```

    זה יפעיל את שרת הפיתוח של Vite, בדרך כלל בכתובת http://localhost:3000.

3.  **הרצת אפליקציית Electron:**

    פתח טרמינל חדש והרץ את הפקודה הבאה מתיקיית `frontend`:

    ```bash
    cd frontend
    npm run electron:dev # או yarn electron:dev
    ```

    זה יפעיל את אפליקציית Electron, אשר תטען את אפליקציית React משרת הפיתוח של Vite.

## בנייה לאריזה כקובץ exe

1.  **בניית אפליקציית React:**

    ```bash
    cd frontend/react
    npm run build # או yarn build
    ```

    זה ייצור build אופטימלי של אפליקציית React בתיקיית `frontend/react/dist`.

2.  **עדכון נתיב ב main.js**
    ודא שבקובץ `frontend/electron/main.js` הנתיב לטעינת האפליקציה תואם:

    ```javascript
    mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
    ```

3.  **אריזת האפליקציה באמצעות Electron Builder:**

    ```bash
    cd frontend
    npm run electron:build # או yarn electron:build
    ```

    זה ייצור קובץ exe (או מתקין מתאים לפלטפורמה שלך) בתיקייה `dist`.

## הסבר

- **FastAPI:** משמש כ-backend, מספק נקודות קצה ל-API (למשל, `/api/hello`) ותקשורת WebSocket.
- **Electron:** משמש ליצירת אפליקציית דסקטופ חוצה פלטפורמות. הוא מריץ את אפליקציית React בתוך BrowserWindow.
- **React:** משמש לבניית ממשק המשתמש. הוא מתקשר עם ה-backend של FastAPI באמצעות בקשות HTTP ו-WebSockets.
- **Vite:** משמש ככלי לפיתוח מהיר של ה-frontend של React.

## תקשורת

- **React ל-FastAPI:** React שולח בקשות HTTP לנקודות הקצה של FastAPI (למשל, `/api/hello`).
- **React ל-Electron Main:** React שולח הודעות לתהליך ה-main של Electron באמצעות `window.electron.ipcRenderer.sendMessage` ו`window.electron.ipcRenderer.on`.
- **WebSocket:** ישנה דוגמה לתקשורת WebSocket בין React ל-FastAPI.

## הערות

- הגדרות ה-CORS ב-FastAPI פתוחות מדי (allow_origins=\["\*"]). יש להגדיר אותן בצורה מאובטחת יותר עבור פרודקשן.
- כיבוי `contextIsolation` באלקטרון נעשה כדי לפשט את הדוגמה, אך אינו מומלץ עבור אפליקציות פרודקשן מאובטחות.
- יש להתאים את נתיב הפקודה `python` בהתאם לסביבה שלך.
- ודא ששרת ה-FastAPI רץ לפני הפעלת אפליקציית Electron.
- השתמש ב `npm run electron:build` כדי לארוז את האפליקציה לקובץ הפעלה.

explorer %APPDATA%\electron-fastapi-react-app
