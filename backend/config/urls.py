from django.contrib import admin
from django.http import JsonResponse
from django.urls import path
from django.views.decorators.http import require_GET

@require_GET
def health(request):
    return JsonResponse({"status": "ok", "service": "kudiai-voice-api"})

urlpatterns = [path("admin/", admin.site.urls), path("api/health/", health, name="api-health")]
