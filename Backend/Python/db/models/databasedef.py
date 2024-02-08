from peewee import *

database = PostgresqlDatabase(
    "codesaurs", user="postgres", password="postgres", host="localhost", port=5432
)

class BaseModel(Model):
    class Meta:
        database = database