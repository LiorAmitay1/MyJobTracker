from sqlalchemy import Column, Integer, String
from database import Base


class Job(Base):
    __tablename__ = "jobs" 
    id = Column(Integer, primary_key=True, index=True)
    company = Column(String(255), nullable=False)
    position = Column(String(255), nullable=False)
    datePosted = Column(String(50))
    dateApplied = Column(String(50))
    status = Column(String(50))

class User(Base):
    __tablename__ = "users" 

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)  # Should be hashed in practice