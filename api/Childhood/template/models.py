from InTexT import db


class Template(db.Model):
    __tablename__ = 'templates'

    templates_id = db.Column(db.Integer, primary_key=True)
    templates_parent = db.Column(db.Integer)
    templates_child = db.Column(db.PickleType)

    def save(self, args):
        db.session.commit()

    def delete(self, args):
        db.session.commit()

    def update(self, args):
        db.session.commit()
