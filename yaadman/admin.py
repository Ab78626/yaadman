from django.contrib import admin

from .models import gasproduct
from.models import accessoryproduct


# Register your models here.
admin.site.register(gasproduct)
admin.site.register(accessoryproduct)
