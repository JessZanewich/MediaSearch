from flask import Flask, send_file

app = Flask(__name__)

@app.route('/')
def index():
	return send_file('templates/index.html')

@app.route('/api/movies')
def movie():
	return "http://www.omdbapi.com/?"

if __name__ == '__main__':
	app.run(debug=True)