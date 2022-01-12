from django import template
from django.utils.safestring import mark_safe
from django.conf import settings


register = template.Library()


@register.simple_tag
def app_css(*args, **kwargs):
    if settings.DEBUG == True:
        return mark_safe('<link rel="stylesheet" href="/static/core/css/app.css">')
    return mark_safe('<link rel="stylesheet" href="/static/core/css/app.min.css">')
