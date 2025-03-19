from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline
from config import Config


class LanguageModel:
    def __init__(self):
        self.tokenizer = AutoTokenizer.from_pretrained(Config.LOCAL_MODEL_PATH)
        self.model = AutoModelForCausalLM.from_pretrained(Config.LOCAL_MODEL_PATH)
        self.generator = pipeline(
            "text-generation", model=self.model, tokenizer=self.tokenizer
        )

    def generate_suggestions(self, code):
        suggestions = self.generator(code, max_length=100, num_return_sequences=1)
        return suggestions[0]["generated_text"]
