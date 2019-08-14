import pandas as pd

file_name = "data"

xls = pd.ExcelFile("./resources/"+file_name+".xlsx")

actualizacion = "ActualizacionSO"
id_subject = 'idx'
subject_en = 'subject'
ras_en = "en"
ras_sp = "sp"

recommendations = "recommendations"
formation = "formation"
assessment = "assessment"
improvement = "improvement"


dfsActSO = pd.read_excel(xls, actualizacion, encoding="UTF-8")
dfsRec = pd.read_excel(xls, recommendations, encoding="UTF-8")


def getSubjects():
	json = dfsActSO[[id_subject,subject_en]].drop_duplicates().to_json(orient='records')
	return json
	
def getRAS(idx):
	json = dfsActSO[dfsActSO[id_subject] == idx][[ras_en, ras_sp]].to_json(orient='records')
	return json

def getRecommendations(idx):
	json = dfsRec[dfsRec[id_subject] == idx][[formation, assessment, improvement]].to_json(orient='records')
	return json