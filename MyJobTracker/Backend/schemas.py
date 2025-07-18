from pydantic import BaseModel

class JobCreate(BaseModel):
    company: str
    position: str
    datePosted: str
    dateApplied: str
    status: str


