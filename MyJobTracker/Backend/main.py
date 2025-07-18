from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from schemas import JobCreate
from models import Job
from database import get_db
from sqlalchemy.orm import Session


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # בזמן פיתוח – כל מקור מותר
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

jobs_db = []  # In-memory database for jobs

@app.post("/jobs")
def create_job(job: JobCreate, db: Session = Depends(get_db)):
    new_job = Job(
        company=job.company,
        position=job.position,
        datePosted=job.datePosted,
        dateApplied=job.dateApplied,
        status=job.status
    )
    db.add(new_job)
    db.commit()
    db.refresh(new_job)
    return {"message": "Job created successfully", "job_id": new_job.id}

@app.delete("/jobs/{job_id}")
def delete_job(job_id: int, db: Session = Depends(get_db)):
    job_to_delete = db.query(Job).filter(Job.id == job_id).first()
    if job_to_delete:
        db.delete(job_to_delete)
        db.commit()
        return {"message": "Job deleted successfully"}
    else:
        return {"error": "Job not found"}, 404

@app.get("/jobs")
def get_jobs(db: Session = Depends(get_db)):
    jobs = db.query(Job).all()
    return jobs

@app.put("/jobs/{job_id}")
def update_job(job_id: int, job: JobCreate, db: Session = Depends(get_db)):
    job_to_update = db.query(Job).filter(Job.id == job_id).first()
    if job_to_update:
        job_to_update.company = job.company
        job_to_update.position = job.position
        job_to_update.datePosted = job.datePosted
        job_to_update.dateApplied = job.dateApplied
        job_to_update.status = job.status
        db.commit()
        db.refresh(job_to_update)
        return {"message": "Job updated successfully", "job_id": job_to_update.id}
    else:
        return {"error": "Job not found"}, 404