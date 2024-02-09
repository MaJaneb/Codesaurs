from peewee import *
from models.databasedef import database
from models.course import Course
from models.courselesson import CourseLesson
from models.student import Student
from models.studentcourse import StudentCourse
from models.studentsrespond import StudentRespond
from models.task import Task
from models.teacher import Teacher 


database.connect()

database.create_tables([Course, CourseLesson, Student, StudentCourse, StudentRespond, Task, Teacher])


database.close()