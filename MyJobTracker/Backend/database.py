from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = "mysql+pymysql://root:Lior!209470236@127.0.0.1:3306/jobtracker"


# יצירת מנוע שמחבר את Python למסד הנתונים
engine = create_engine(DATABASE_URL)

# הגדרה איך לייצר "session" (חיבור זמני לבסיס הנתונים)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# בסיס לבניית מודלים (טבלאות)
Base = declarative_base()

# פונקציה שתייצר חיבור חדש לבסיס הנתונים עבור כל בקשת API
def get_db():
    db = SessionLocal()       # לפתוח חיבור זמני
    try:
        yield db              # להעביר אותו הלאה
    finally:
        db.close()            # לסגור את החיבור בסוף
