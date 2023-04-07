import sys
import json


fo = open(sys.argv[1], "r")

lines = fo.readlines()


for line in lines:
    line = json.loads(line)
    if "labels" in line:
        line["entities"] = line.pop("labels")
    else:
        line["entities"] = []

    tmp_ents = []
    for e in line["entities"]:
        if e[2] in ['NAME', 'COMPANIES WORKED AT', 'DESIGNATION', 'YEARS OF EXPERIENCE', 'LOC', 'SKILLS', 'DEGREE', 'EMAIL ADDRESS', 'GRADIATION YEAR', 'COLLEGE NAME', 'DOB', 'PHONE NUMBER', 'LANGUAGES', 'INTERESTS', 'LINKS']:
            tmp_ents.append({"start": e[0], "end": e[1], "label": e[2]})

        line["entities"] = tmp_ents

    if (len(line["text"]) > 5):
        print(json.dumps({"entities": line["entities"], "text": line["text"]}))
