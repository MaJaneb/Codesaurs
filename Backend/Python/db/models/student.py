from peewee import *
from models.databasedef import BaseModel

class Student(BaseModel):
    id = AutoField()
    name = CharField(null=False, max_length=20)
    last_name = CharField(null=False, max_length=20) # добавить ограничение на содержанеи цифр
    age = IntegerField(null=False) # добавить ограничение на минимальный и максимальный возраст
    gender = CharField(constraints=[Check('gender IN ("male", "female", "undefined")')])
    contact = CharField(null=False, max_length=15)  # Максимальная длина 15 символов, содержит только цифры
    email = CharField(null=False)
    image = TextField(null=False, default='/static/no-photo.png')  # Поле для хранения ссылки на изображение или самого изображения в виде Base64 строки
    parent_name = CharField(null=False, max_length=20)
    parent_last_name = CharField(null=False, max_length=20)
    parent_contact = CharField(null=False, max_length=15)  # Максимальная длина 15 символов