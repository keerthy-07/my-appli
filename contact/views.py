from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ContactSerializers
from django.core.mail import send_mail
from django.conf import settings

@api_view(['POST'])
def contact_api(request):
    serializer = ContactSerializers(data=request.data)

    if serializer.is_valid():
        serializer.save()

        send_mail(
            subject="New Contact Form Message",
            message=f"""
Name: {serializer.validated_data['first_name']} {serializer.validated_data['last_name']}

Email: {serializer.validated_data['email']}

Message:
{serializer.validated_data['message']}
""",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.EMAIL_HOST_USER],
            fail_silently=False,
        )

        return Response({
            "message": "Contact saved successfully"
        })

    print(serializer.errors)
    return Response(serializer.errors, status=400)