---
title: Django with Postgres
description: Simple guide to configure Django with Postgres database
---

Hello there 👋🏻, fellow Django enthusiast! So, you’ve decided to take the plunge and dive into the world of databases with your Django app. You want the reliability and power of Postgres to back your project, and you're in the right place. I’m here to guide you through this process with a touch of humor and a whole lot of detail.

### Prerequisites:
First things first, before we embark on this adventure, let’s ensure you have everything you need:
- **Django** installed (if not, `pip install django`)
- **Postgres** installed (if not, check out the [official website](https://www.postgresql.org/download/))

### Step 1: Create Your Django App
If you haven’t yet kicked off your Django project, do it now. Open your terminal, use the `django-admin` command, and create your project.

```bash
django-admin startproject yourprojectname
```

### Step 2: Configure Django Settings
Navigate to your `settings.py` file within your project directory. Find the `DATABASES` section and configure it to use Postgres.

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'yourdatabase',
        'USER': 'yourusername',
        'PASSWORD': 'yourpassword',
        'HOST': 'localhost',
        'PORT': '',
    }
}
```

Pro tip: If you’re like me and keep forgetting passwords, write it down but don’t stick it on your monitor!

### Step 3: Create the Postgres Database
Open your terminal and fire up Postgres.

```bash
psql postgres
```

Now, let's create your database.

```sql
CREATE DATABASE yourdatabase;
```

You can replace `yourdatabase` with whatever name you gave in your Django settings.

### Step 4: Migrate Your Django Models
Back in your terminal, let’s run those magical Django commands.

```bash
python manage.py makemigrations
python manage.py migrate
```

If all goes well, your models will now be chilling in your Postgres database.

### Step 5: Test Your Setup
Now comes the thrilling moment of truth. Fire up your Django development server.

```bash
python manage.py runserver
```

Head to your browser and type `http://127.0.0.1:8000/`. If all goes smoothly, congratulations! You’ve successfully configured Django with Postgres.

### Conclusion
You’ve made it! Your Django app is now happily dancing with Postgres. Remember, databases might seem intimidating at first, but once you get the hang of it, they're like the dependable sidekick to your superhero Django skills.

So go ahead, tinker with your models, create migrations, and build something awesome. And if you run into any trouble, remember: Google and Stack Overflow are your best friends!

Until next time, happy coding and may your database queries always return what you expect (and more)! 🐍🐘✨