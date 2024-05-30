from flask import Flask, render_template, request, jsonify
import psycopg2
import csv

app = Flask(__name__)

# Database Connection
# def get_db_connection():
#     conn = psycopg2.connect(host='localhost', database='dencity', user='postgres', password='password')
#     return conn

# Route for Landing
@app.route('/')
def landing():
    return render_template('landing.html')


# Route for Properties
@app.route('/properties')
def properties():
    with open('./static/housing_info.csv', 'r') as file:
        reader = csv.reader(file)
        properties = list(reader)
    
    return render_template('properties.html', properties=properties)

# Route for About
@app.route('/about')
def about():
    return render_template('about.html')

# Route for Resources
@app.route('/resources')
def resources():
    return render_template('resources.html')

# Route for Contact
@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)