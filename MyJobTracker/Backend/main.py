from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # בזמן פיתוח – כל מקור מותר
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)





@app.get("/jobs")

async def get_jobs():
    return [{"company": "Google", "position": "Frontend Developer", "datePosted": "10.07.25", "dateApplied": "17.07.25", "status": "Applied"}]