from flask import Flask, request, jsonify
import spacy
from collections import defaultdict
from spellchecker import SpellChecker

app = Flask(__name__)


# def correct_spelling(text):
#     spell = SpellChecker(language="fr")
#     words = text.split()
#     corrected_words = [spell.correction(word) if spell.correction(
#         word) is not None else word for word in words]
#     return " ".join(corrected_words)


def recognize_experiences(text):
    nlp = spacy.load("fr_dep_news_trf")
    doc = nlp(text)

    information = defaultdict(list)

    # Extract organizations, dates, and locations
    for ent in doc.ents:
        if ent.label_ == "ORG":
            information["Organizations"].append(ent.text)
        elif ent.label_ == "DATE":
            information["Dates"].append(ent.text)
        elif ent.label_ == "GPE":
            information["Locations"].append(ent.text)

    # Extract skills
    for token in doc:
        if token.dep_ == "amod" and token.head.pos_ == "NOUN":
            skill = f"{token.head.text} {token.text}"
            information["Skills"].append(skill)

    # Extract education
    for sent in doc.sents:
        education_keywords = ["formation", "diplôme",
                              "certificat", "école", "université", "master", "licence", "bac", "bac+", "bac +"]
        if any(token.lemma_.lower() in education_keywords for token in sent):
            information["Education"].append(sent.text)

    # Extract work experience
    for sent in doc.sents:
        experience_keywords = ["expérience", "travail",
                               "emploi", "poste", "responsable"]
        if any(token.lemma_.lower() in experience_keywords for token in sent):
            information["Experience"].append(sent.text)

    return dict(information)


@app.route('/parse_resume', methods=['POST'])
def parse_resume():
    input_text = request.get_json().get('text')
    # corrected_text = correct_spelling(input_text)
    # resume_information = recognize_experiences(corrected_text)
    resume_information = recognize_experiences(input_text)
    return jsonify(resume_information)


if __name__ == '__main__':
    app.run(debug=True)
