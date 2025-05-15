from main import app  # נדרש לוודא ש-main.py נמצא באותה תיקייה
import uvicorn

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
