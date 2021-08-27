from flask import Flask, render_template

app = Flask(__name__)

@app.route('/projects/virtualFriend/')
def virtualFriend():
    return render_template('index.html')
