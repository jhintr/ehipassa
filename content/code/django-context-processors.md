---
title: "Django Context Processors"
date: 2020-06-27T19:59:53+08:00
lang: en
---


Create a file in your `INSTALLED_APPS` like <kbd>profiles/context_processors.py</kbd>

```python
from django.conf import settings

def site(request):
    return {
    	'SITE_NAME': settings.SITE_NAME,
    }
```

add this `context_processors` in your <kbd>settings.py</kbd>

```python
TEMPLATES = [
    {
        # ...
        'OPTIONS': {
            'context_processors': [
                # ...
                'profiles.context_processors.site',
            ],
        },
    },
]
```

then your can use `{{ SITE_NAME }}` in all `templates` files.