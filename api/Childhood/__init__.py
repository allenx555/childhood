from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_login import LoginManager
from flask_docs import ApiDoc
from flask_cors import CORS

app = Flask(__name__, instance_relative_config=True)
app.config.from_object('config')
app.config.from_pyfile('config.py')
app.config['RESTFUL_API_DOC_EXCLUDE'] = []
api = Api(app)
ApiDoc(app)
CORS(app, supports_credentials=True,
     allow_headers=["Content-Type", "Authorization", "Access-Control-Allow-Credentials"])
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)


from Childhood.user.models import User


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)


import Childhood.user.resources
import Childhood.note.resources

api.add_resource(Childhood.user.resources.UserRegistration, '/api/register')
api.add_resource(Childhood.user.resources.UserLogin, '/api/login')
api.add_resource(Childhood.user.resources.UserLogout, '/api/logout')
api.add_resource(Childhood.note.resources.NoteCreate, '/api/note/create')
api.add_resource(Childhood.note.resources.NoteUpdate, '/api/note/update')
api.add_resource(Childhood.note.resources.NoteDelete, '/api/note/delete')
api.add_resource(Childhood.note.resources.NoteSearch, '/api/note/<string:global_id>')
api.add_resource(Childhood.user.resources.UserNotes, '/api/note_list')
