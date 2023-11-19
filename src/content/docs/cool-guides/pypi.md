---
title: Guide to write a PYPI library
description: Simple guide to create your first PYPI library and deploy it.
---


Welcome, fellow Python enthusiast! So, you’ve toiled away at your code masterpiece and now want to share it with the world? Excellent choice! Let’s embark on this adventure together and get your library up on PYPI (Python Package Index) so it can spread its wings and fly into the lives of many developers.

### Before We Dive In:
Grab your favorite beverage, put on some comfy coding socks, and let’s make sure you’ve got everything you need:
- Python installed (obviously).
- A PYPI account. If you don’t have one, head over to [PYPI](https://pypi.org/) and create an account. Come back when you’re ready!

### Step 1: Code Creation Magic
You’ve probably already conjured up an amazing Python library, but let’s do a quick double-check:
```python
# Your incredible code goes here
print("yeah, its pretty cool")
```

### Step 2: The Prerequisite Steps
Time to set the stage:
1. **Choose a Unique Name:** Make sure your library name isn’t already taken on PYPI. Think creatively, like “FluffyUnicornMagic” or “ZenOfPythonInACup.”
2. **Update `setup.py`:** This is where the magic starts. Create a `setup.py` file in your project directory and fill it with details about your library, like version, description, author, etc.

### Step 3: Create a Manifest File (Optional)
You'll need a `MANIFEST.in` file to tell PYPI which data files to include in your package. Here’s a little secret: it’s not magic, it’s just meticulousness!

### Step 4: Package Your Library
It’s showtime! Use `setup.py` to create a distribution package:
```base
#sample setup.py

from setuptools import setup, find_packages

with open("README.md", "r") as fh:
    long_description = fh.read()

setup(
    name="cedric",
    version="1.0.30",
    author="Your Name",
    author_email="youremail",
    description="Python library that does a lot of magic💫",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/pypa/your-package-name",
    packages=find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    install_requires=["requests",], 
    entry_points={"console_scripts": ["package-name-setup=src.cli:main"]},
)


```

```bash
$ python -m build --sdist
```

### Step 5: Test Your Package
Don’t just throw your library out there—give it a test run locally first. Install it using `pip` in a virtual environment and make sure it works as expected. You don’t want to share a library that’s allergic to its own code!

### Step 6: Time to Deploy
With nerves of steel and confidence in your creation, let’s send it to the PYPI servers:
```bash
$ twine upload dist/*
```
Note: If you haven’t installed `twine` yet, a simple `pip install twine` should do the trick.

### Step 7: Party Time!
Congratulations, your library is now on PYPI! Pop the confetti, do a little victory dance, and bask in the glory of your achievement.

### Bonus Tips:
- **Versioning is Key:** Remember to update your version number each time you make changes. No one likes outdated libraries!
- **Readme Matters:** A good `README.md` is your library’s red carpet. Make it informative, friendly, and pepper it with emojis (if that’s your style).
- **Documentation is Your Bestie:** Invest time in documenting your library. It’s like giving your users a treasure map to navigate through your code!

### Conclusion:
Voila! You’ve mastered the mystical art of creating and deploying a PYPI library. Your code is now out in the wild, ready to be embraced by developers around the globe. Now go, spread your Pythonic wisdom and bask in the glory of your creation!

If you’ve enjoyed this journey, feel free to share this guide with your fellow Python wizards. Until next time, happy coding! 🐍✨