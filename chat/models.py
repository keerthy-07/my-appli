from django.db import models
import uuid



class Visitor(models.Model):
    session_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class ChatMessage(models.Model):
    visitor = models.ForeignKey(
        Visitor,
        on_delete=models.CASCADE,
        related_name="messages"
    )

    sender = models.CharField(max_length=20)
    message = models.TextField()

    # Status
    is_delivered = models.BooleanField(default=False)
    is_read = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)



