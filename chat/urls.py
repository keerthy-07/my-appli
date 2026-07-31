from django.urls import path
from . import views

urlpatterns = [
    path("visitor/", views.create_visitor),
    path("send/", views.send_message),
    path("messages/", views.get_messages),

    path("visitors/", views.visitor_list),
    path("messages/<int:visitor_id>/", views.visitor_messages),
    path("reply/", views.admin_reply),
]