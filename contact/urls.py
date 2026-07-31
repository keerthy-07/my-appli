from django.urls import path
from .views import contact_api


urlpatterns = [
    path("send/", contact_api, name="contact-send"),
]