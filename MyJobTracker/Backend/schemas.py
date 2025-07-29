from pydantic import BaseModel

class JobCreate(BaseModel):
    company: str
    position: str
    datePosted: str
    dateApplied: str
    status: str


class UserCreate(BaseModel):
    username: str
    email: str
    hashed_password: str

class UserLogin(BaseModel):
    email: str
    password: str
