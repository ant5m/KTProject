from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///ktproject.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Project Model
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    major = db.Column(db.String(100), nullable=False)
    expertise = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    requirements = db.Column(db.Text)
    status = db.Column(db.String(20), default='Open')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'major': self.major,
            'expertise': self.expertise,
            'description': self.description,
            'requirements': self.requirements,
            'status': self.status,
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat()
        }

# Create database tables
with app.app_context():
    db.create_all()

# Routes
@app.route('/api/projects', methods=['GET'])
def get_projects():
    major = request.args.get('major')
    expertise = request.args.get('expertise')
    
    query = Project.query
    
    if major:
        query = query.filter_by(major=major)
    if expertise:
        query = query.filter_by(expertise=expertise)
    
    projects = query.all()
    return jsonify([project.to_dict() for project in projects])

@app.route('/api/projects', methods=['POST'])
def create_project():
    data = request.json
    
    new_project = Project(
        title=data['title'],
        major=data['major'],
        expertise=data['expertise'],
        description=data['description'],
        requirements=data.get('requirements', '')
    )
    
    db.session.add(new_project)
    db.session.commit()
    
    return jsonify(new_project.to_dict()), 201

@app.route('/api/projects/<int:project_id>', methods=['PUT'])
def update_project(project_id):
    project = Project.query.get_or_404(project_id)
    data = request.json
    
    project.title = data.get('title', project.title)
    project.major = data.get('major', project.major)
    project.expertise = data.get('expertise', project.expertise)
    project.description = data.get('description', project.description)
    project.requirements = data.get('requirements', project.requirements)
    project.status = data.get('status', project.status)
    
    db.session.commit()
    return jsonify(project.to_dict())

@app.route('/api/projects/<int:project_id>', methods=['DELETE'])
def delete_project(project_id):
    project = Project.query.get_or_404(project_id)
    db.session.delete(project)
    db.session.commit()
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)