from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the LLM model from the local path
local_model_path = "/Users/admin/.cache/huggingface/hub/models--meta-llama--Llama-3.2-3B-Instruct/snapshots/0cb88a4f764b7a12671c53f0838cd831a0843b95/"
tokenizer = AutoTokenizer.from_pretrained(local_model_path)
model = AutoModelForCausalLM.from_pretrained(local_model_path)
generator = pipeline("text-generation", model=model, tokenizer=tokenizer)


@app.route("/suggestions", methods=["POST"])
def get_suggestions():
    data = request.json
    code = data.get("code", "")

    # Generate suggestions using the LLM model
    suggestions = generator(code, max_length=100, num_return_sequences=1)
    suggestion_text = suggestions[0]["generated_text"]

    return jsonify({"suggestions": suggestion_text})


if __name__ == "__main__":
    app.run(debug=True)
