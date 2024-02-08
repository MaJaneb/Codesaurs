from models.databasedef import BaseModel
from peewee import *

class Teacher(BaseModel):
    id = AutoField(primary_key=True)
    name = CharField(null=False, max_length=20)
    last_name = CharField(null=False, max_length=20)
    contact = CharField(null=False, max_length=15)  # Максимальная длина 15 символов, содержит только цифры
    email = CharField(null=False)
    image = TextField(null=False, default='/static/no-photo.png')  # Поле для хранения ссылки на изображение или самого изображения в виде Base64 строки