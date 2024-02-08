from peewee import *
from models.databasedef import BaseModel

class Course(BaseModel):
    id = AutoField()
    name = CharField(max_length=100, null=False)
    short_description = CharField(null=False, default='')
    description = CharField(null=False, default='')
    imageurl = TextField(null=False, default="/static/no-photo.png")
    duration = IntegerField(null=False)
    price = IntegerField(null=False)
    language = CharField(null=False)
    level = IntegerField(constraints=[Check("level IN(1, 2, 3)")])
    stages = TextField(null=False, default="")
    #chips = // #its supposed to be string array, but its complicated
    practice_description = TextField(null=False, default="")
    max_score = IntegerField(null=False)
    views = IntegerField(null=False, default=0)