from flask import Flask, render_template
import pymongo
import json
from bson.json_util import dumps

app = Flask(__name__)

uri = 'mongodb://abetcomputacion:mongo2019@ds255794.mlab.com:55794/abetcomputacion'
client = pymongo.MongoClient(uri)

@app.route('/')
def index():
   return render_template('index.html')

@app.route('/formacion')
def formacion():
   return render_template('formacion.html')

@app.route('/formacion/materias')
def formacionData():
	db = client.get_database()
	return dumps(db.formacion.distinct("Materia"))

if __name__ == '__main__':
	app.debug = True
	app.run()