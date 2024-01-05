from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.task_list, name='task_list'),
    path('task/<int:id>', views.task_view, name='task_view'),
    path('new-task/', views.new_task, name='new_task'),
    path('edit-task/<int:id>', views.edit_task, name='edit_task'),
    path('changestatus/<int:id>', views.change_status, name='change_status'),
    path('delete-task/<int:id>', views.delete_task, name='delete_task'),
    path('aboutme/', views.about_me, name='about_me')
]