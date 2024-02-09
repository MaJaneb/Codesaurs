from peewee import *

database = MySQLDatabase(
    "codesaurs", user="root", password="rootroot", port=3306, host="localhost"
)

class BaseModel(Model):
    class Meta:
        database = database