from peewee import *
from models.databasedef import BaseModel

class Course(BaseModel):
    id = AutoField(primary_key=True)
    name = CharField(null=False)
    short_description = CharField()
    description = CharField()
    imageurl = TextField(null=False, default="/static/no-photo.png")
    duration = IntegerField(null=False)
    price = IntegerField(null=False)
    language = CharField(null=False)
    level = IntegerField(choices=[1, 2, 3])
    stages = TextField()
    practice_description = TextField()
    max_score = IntegerField(null=False)
    views = IntegerField(null=False, default=0)