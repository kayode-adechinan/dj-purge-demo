from django.core.management.base import BaseCommand
import os
import shutil


def prod():
    gulp_deps = "core/gulp/node_modules"
    staticfiles = "staticfiles"
    if os.path.isdir(gulp_deps) == False:
        os.system("cd core/gulp &&  npm install")
    if os.path.isdir(staticfiles):
        shutil.rmtree(staticfiles)
    os.system("cd core/gulp &&  npx gulp")
    os.system("python manage.py  collectstatic --noinput --no-post-process")
    os.system('find . | grep -E "(__pycache__|\.pyc|\.pyo$)" | xargs rm -rf')


class Command(BaseCommand):
    help = "Fake properties generator"

    def handle(self, *args, **options):
        prod()
        self.stdout.write(self.style.SUCCESS("done!"))
