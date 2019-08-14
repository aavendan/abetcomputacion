import json
from app import app
from app import data
from flask import render_template, redirect, url_for, request

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/formacion', methods=['GET'])
def formacion():
	subjects = json.loads(data.getSubjects())
	return render_template('formacion.html', subjects = subjects)

@app.route('/formacion/ras', methods=['POST'])
def formacion_ras():
	idx = int(request.data)
	ras = data.getRAS(idx)
	return ras

@app.route('/formacion/recommendations', methods=['POST'])
def recommendations_subject():
	idx = int(request.data)
	rec = data.getRecommendations(idx)
	return rec