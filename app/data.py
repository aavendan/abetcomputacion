import pandas as pd

file_name = "alldata"
sheet_name = "ActualizacionSO"

dfsActSO = pd.read_excel("./resources/"+file_name+".xlsx", sheet_name=sheet_name, encoding="UTF-8")
id_subject = 'idx'
subject_en = 'subject'
ras_en = "en"
ras_sp = "sp"

def getSubjects():
	json = dfsActSO[[id_subject,subject_en]].drop_duplicates().to_json(orient='records')
	return json
	
def getRAS(idx):
	json = dfsActSO[dfsActSO[id_subject] == idx][[ras_en, ras_sp]].to_json(orient='records')
	return json

