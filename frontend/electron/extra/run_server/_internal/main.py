from fastapi import FastAPI
from fastapi.responses import JSONResponse
import uvicorn
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # לצורך dev בלבד
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def main():
    return JSONResponse(content={"status": "ok"})


@app.get("/health")
def health_check():
    return JSONResponse(content={"status": "ok"})


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000)
