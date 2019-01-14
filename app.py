from flask import Flask, request, render_template
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

@app.route('/medicion')
def medicion():
   return render_template('medicion.html')

@app.route('/formacion/materias')
def formacionMaterias():
	db = client.get_database()
	return dumps(db.formacion.distinct("Materia"))

@app.route('/formacion/resultados')
def formacionResultados():
	materia = request.args.get('materia')

	db = client.get_database()
	result = db.formacion.find({"Materia":materia})
	return dumps(result)

if __name__ == '__main__':
	app.debug = True
	app.run()