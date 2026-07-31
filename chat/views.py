from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Visitor, ChatMessage
from .serializers import VisitorSerializer, ChatMessageSerializer


# Create Visitor
@api_view(["POST"])
def create_visitor(request):

    serializer = VisitorSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=400)


# Send Message
@api_view(["POST"])
def send_message(request):

    session_id = request.data.get("session_id")
    message = request.data.get("message")

    try:
        visitor = Visitor.objects.get(session_id=session_id)
    except Visitor.DoesNotExist:
        return Response(
            {"error": "Visitor not found"},
            status=404
        )

    chat = ChatMessage.objects.create(
        visitor=visitor,
        sender="visitor",
        message=message,
    )

    serializer = ChatMessageSerializer(chat)

    return Response(serializer.data)


# Get Messages
@api_view(["GET"])
def get_messages(request):

    session_id = request.GET.get("session_id")

    try:
        visitor = Visitor.objects.get(session_id=session_id)
    except Visitor.DoesNotExist:
        return Response(
            {"error": "Visitor not found"},
            status=404
        )

    chats = ChatMessage.objects.filter(
        visitor=visitor
    ).order_by("created_at")

    serializer = ChatMessageSerializer(
        chats,
        many=True
    )

    return Response(serializer.data)


# Visitor List (Admin)
@api_view(["GET"])
def visitor_list(request):

    visitors = Visitor.objects.all().order_by("-created_at")

    serializer = VisitorSerializer(
        visitors,
        many=True
    )

    return Response(serializer.data)


# Messages of One Visitor (Admin)
@api_view(["GET"])
def visitor_messages(request, visitor_id):

    try:
        visitor = Visitor.objects.get(id=visitor_id)
    except Visitor.DoesNotExist:
        return Response(
            {"error": "Visitor not found"},
            status=404
        )

    chats = ChatMessage.objects.filter(
        visitor=visitor
    ).order_by("created_at")

    serializer = ChatMessageSerializer(
        chats,
        many=True
    )

    return Response(serializer.data)


# Admin Reply
@api_view(["POST"])
def admin_reply(request):

    visitor_id = request.data.get("visitor_id")
    message = request.data.get("message")

    try:
        visitor = Visitor.objects.get(id=visitor_id)
    except Visitor.DoesNotExist:
        return Response(
            {"error": "Visitor not found"},
            status=404
        )

    chat = ChatMessage.objects.create(
        visitor=visitor,
        sender="admin",
        message=message,
    )

    serializer = ChatMessageSerializer(chat)

    return Response(serializer.data)