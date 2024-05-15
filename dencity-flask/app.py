from flask import Flask, render_template, request, jsonify
import psycopg2

app = Flask(__name__)

# Database Connection
def get_db_connection():
    conn = psycopg2.connect(host='localhost', database='dencity', user='postgres', password='password')
    return conn

# Route for Index
@app.route('/')
def index():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT propertyid, propertylatitude, propertylongitude, propertyaddress FROM PROPERTY;')
    properties = cur.fetchall()
    cur.close()
    conn.close()
    return render_template('index.html', properties=properties)

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