from flask import Blueprint, request, jsonify
from model import LanguageModel

model = LanguageModel()
routes = Blueprint("routes", __name__)


@routes.route("/suggestions", methods=["POST"])
def get_suggestions():
    data = request.json
    code = data.get("code", "")

    # Generate suggestions using the LLM model
    suggestion_text = model.generate_suggestions(code)

    return jsonify({"suggestions": suggestion_text})
