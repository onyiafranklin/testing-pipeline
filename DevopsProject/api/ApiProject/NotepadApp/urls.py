# from django.conf.urls import url
from django.urls import re_path as url
from NotepadApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^notepad$',views.nodePadApi),
    url(r'^notepad/([0-9]+)$',views.nodePadApi)
]
