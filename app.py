from flask import Flask, render_template, request, jsonify
import psycopg2
import json

app = Flask(__name__)

# Database Connection
def get_db_connection():
    conn = psycopg2.connect(host='localhost', database='dencity', user='postgres', password='password')
    return conn

# Route for Landing
@app.route('/')
def landing():
    return render_template('landing.html')

# Route for Properties
@app.route('/properties')
def properties():
    # conn = get_db_connection()
    # cur = conn.cursor()
    # cur.execute('SELECT propertyid, propertylatitude, propertylongitude, propertyaddress, propertyvaluation FROM PROPERTY;')
    # properties = cur.fetchall()
    # cur.close()
    # conn.close()
    
    # # Convert properties data to a list of dictionaries
    # properties_list = []
    # for prop in properties:
    #     prop_dict = {
    #         'propertyid': prop[0],
    #         'propertylatitude': float(prop[1]),
    #         'propertylongitude': float(prop[2]),
    #         'propertyaddress': prop[3],
    #         'propertyvaluation': str(prop[4])
    #     }
    #     properties_list.append(prop_dict)

    # return render_template('properties.html', properties=json.dumps(properties_list))
    return render_template('properties.html')


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

# Route for Contact (POST request)
@app.route('/contact', methods=['POST'])
def contact_submit():
    name = request.form['name']
    email = request.form['email']
    category = request.form['category']
    subject = request.form['subject']
    message = request.form['message']

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('INSERT INTO CONTACT (Name, Email, Category, Subject, Message) VALUES (%s, %s, %s, %s, %s)', 
                (name, email, category, subject, message))
    conn.commit()
    cur.close()
    conn.close()

    return jsonify({'message': 'Thank you for your message. We will get back to you soon!'})

if __name__ == '__main__':
    app.run(debug=True)