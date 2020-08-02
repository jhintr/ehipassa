---
title: "Extend Django User Model"
date: 2020-06-26T16:42:29+08:00
---


<kbd>models.py</kbd>

```python
from django.conf import settings
from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save

class Profile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    MALE = 'M'
    FEMALE = 'F'
    GENDER_CHOICE = [(MALE, '男'), (FEMALE, '女')]
    gender = models.CharField(
        max_length=1,
        choices=GENDER_CHOICE,
        default=FEMALE,
    )

# create profile after User was created
def created_receiver(sender, instance, **kwargs):
    if kwargs["created"]:
        Profile.objects.create(user=instance)

post_save.connect(created_receiver, sender=settings.AUTH_USER_MODEL)

# add new methods to User model
def get_gender(self):
    return self.profile.get_gender_display()

User.add_to_class("get_gender", get_gender)
```


<kbd>admin.py</kbd>

```python
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from .models import Profile

class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False

class ProfileAdmin(UserAdmin):
    inlines = (ProfileInline,)

admin.site.unregister(User)
admin.site.register(User, ProfileAdmin)
```