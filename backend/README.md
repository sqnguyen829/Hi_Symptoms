# README
Current Model Relationships

User has_many Symptom_Check_In

Symptom_Check_In has_many User_Desciption
Symptom_Check_In belongs_to User
Symptom_Check_In has_one Body   or Symptom_Check_In has_many Body          Either way they'll have a body object tied to the model
Symptom_Check_In has_many Current_Symptoms
Symptom_Check_In has_many Symptoms, through Current_Symptoms

User_Description belongs_to Symptom_Check_In

Body has_many Body_Parts
Body has_many Parts, through Body_Parts

Body_Part belongs_to Body
Body_Part belongs_to Part
Body_part has_many Detail_Descriptions

Part has_many Body_Parts
Part has_many Bodys, through Body_Parts

Detail_Description belongs_to Body_Part