# Gulp taks and Purge CSS integration with django

This simple project is a starter for integrating various gulp taks and purge css with django

# How to use

## Build for prod

```bash
$ python manage.py gulp
```

## Update templates

1 - add on the top of your base.html this :

```html
{% load theme_utils %}
```

2 - add the tag that populate the purged css file on prod

```html
<head>
  {% app_css %}
</head>
```

# How it works

The gulp commands is located in core/management/commands folder
and mainly do the following job

- first installs npm dependencies if not alreday exist
- run the "gulp" commands
- regenerate staticfiles folder

# Gulp commands use

- purge (the most important indeed)

# TO DO

Add the following taks

- css min
- js min
- image min
- sass
- clean css
- autoprefixer
