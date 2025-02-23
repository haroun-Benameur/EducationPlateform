# serializers.py
from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, smart_str
from django.core.mail import send_mail
from django.urls import reverse

class RequestPasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate(self, attrs):
        email = attrs.get('email', '')
        user = User.objects.filter(email=email).first()
        if user:
            token = PasswordResetTokenGenerator().make_token(user)
            uidb64 = urlsafe_base64_encode(force_bytes(user.pk))
            reset_url = f"http://localhost:3000/reset-password/{uidb64}/{token}/"

            send_mail(
                subject="Password Reset Request",
                message=f"Click the link below to reset your password:\n{reset_url}",
                from_email="harounbam@gmail.com",
                recipient_list=[email],
                fail_silently=False,
            )
        return attrs

class ResetPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(write_only=True, min_length=6)
    token = serializers.CharField(write_only=True)
    uidb64 = serializers.CharField(write_only=True)

    def validate(self, attrs):
        try:
            uid = smart_str(urlsafe_base64_decode(attrs.get("uidb64")))
            user = User.objects.get(pk=uid)

            if not PasswordResetTokenGenerator().check_token(user, attrs.get("token")):
                raise serializers.ValidationError("Invalid or expired token")

            user.set_password(attrs.get("password"))
            user.save()
            return attrs

        except Exception as e:
            raise serializers.ValidationError("Invalid token")
