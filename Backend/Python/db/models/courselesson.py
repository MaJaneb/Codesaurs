from peewee import *
from models.databasedef import BaseModel
from models.course import Course
from models.teacher import Teacher

class CourseLesson(BaseModel):
    id = AutoField(primary_key=True)
    course_id = ForeignKeyField(Course, related_name="courselessons")
    name = CharField(null=False)
    description = TextField(null=False)
    date = TimestampField(null=False)
    teacher = ForeignKeyField(Teacher, related_name="teachers")
    record_url = TextField()