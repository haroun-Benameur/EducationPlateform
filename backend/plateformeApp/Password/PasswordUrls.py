from django.urls import path
from .PasswordViews import RequestPasswordResetView, ResetPasswordView

urlpatterns = [
    path('password-reset/', RequestPasswordResetView.as_view(), name='request-password-reset'),
    path('reset-password/', ResetPasswordView.as_view(), name='reset-password'),
]
