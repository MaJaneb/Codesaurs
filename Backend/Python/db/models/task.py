from models.databasedef import BaseModel
from peewee import *
from models.courselesson import CourseLesson

class Task(BaseModel):
    id = AutoField(primary_key=True)
    lesson_id = ForeignKeyField(CourseLesson, related_name="homeworks")
    name = CharField(null=False, max_length=64)
    description = TextField(null=False)
    solution = TextField(null=False) # is necessary?
    answer = TextField(null=False)
    # hints = # список строк?
    check = CharField(null=False, constraints=[Check('check IN ( "auto", "manual" )')])
    points = IntegerField(null=False)