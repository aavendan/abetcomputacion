# Imports
from flask import Flask

from config import Config

# app initialization
app = Flask(__name__)
app.debug = True

# Configs
app.config.from_object(Config)

# Models & Routes
from app import routes

#Resources
from app import data