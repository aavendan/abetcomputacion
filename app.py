from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
   return render_template('index.html')

@app.route('/formacion')
def formacion():
   return render_template('formacion.html')

if __name__ == '__main__':
	app.run()