from sqlalchemy import Column, Integer, String
from database import Base

# יצירת טבלה במסד הנתונים
class Job(Base):
    __tablename__ = "jobs"    # שם הטבלה במסד

    id = Column(Integer, primary_key=True, index=True)
    company = Column(String(255), nullable=False)
    position = Column(String(255), nullable=False)
    datePosted = Column(String(50))
    dateApplied = Column(String(50))
    status = Column(String(50))
