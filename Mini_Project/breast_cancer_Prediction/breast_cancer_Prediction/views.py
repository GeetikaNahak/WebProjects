from django.shortcuts import render

import numpy as np
import pandas as pd
import sklearn.datasets
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn import svm
# Dummy classifier (you should train your own model)
model=LogisticRegression()


def index(request): 
    return render(request, "index.html") 

def predict(request): 
    return render(request, "predict.html") 
  
def result(request): 
    data_frame = pd.read_csv("dataset.csv") 
  
    
    x=data_frame.drop(columns='Binary',axis=1)
    y=data_frame['Binary']
    # X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.1) 
    x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2,random_state=2)
  
    model = LogisticRegression() 
    model.fit(x_train,y_train)
  
    val1 = float(request.GET['n1']) 
    val2 = float(request.GET['n2']) 
    val3 = float(request.GET['n3']) 
    val4 = float(request.GET['n4']) 
    val5 = float(request.GET['n5']) 
    val6 = float(request.GET['n6']) 
    val7 = float(request.GET['n7'])
    val8 = float(request.GET['n8'])
    val9 = float(request.GET['n9'])
    val10 = float(request.GET['n10'])
    val11 = float(request.GET['n11'])
    val12 = float(request.GET['n12'])
    val13 = float(request.GET['n13'])
    val14 = float(request.GET['n14'])
    val15 = float(request.GET['n15'])
    val16 = float(request.GET['n16'])
    val17 = float(request.GET['n17'])
    val18 = float(request.GET['n18'])
    val19 = float(request.GET['n19'])
    val20 = float(request.GET['n20'])
    val21 = float(request.GET['n21'])
    val22 = float(request.GET['n22'])
    val23 = float(request.GET['n23'])
    val24 = float(request.GET['n24'])
    val25 = float(request.GET['n25'])
    val26 = float(request.GET['n26'])
    val27 = float(request.GET['n27'])
    val28 = float(request.GET['n28'])
    val29 = float(request.GET['n29'])
    val30 = float(request.GET['n30'])
  
    pred = model.predict([[val1,val2,val3,val4,val5,val6,val7,val8,val9,val10,val11,val12,val13,val14,val15,val16,val17,val18,val19,val20,val21,val22,val23,val24,val25,val26,val27,val28,val29,val30]]) 
  
    # val1,val2,val3,val4,val5,val6,val7,val8,val9,val10,val11,val12,val13,val14,val15,val16,val17,val18,val19,val20,val21,val22,val23,val24,val25,val26,val27,val28,val29,val30

    result1 = "[will be displayed here]" 
    
    if(pred[0]==0):
        result1="THE BREAST CANCER IS MALIGNANT\n\n\n\n"
    else:
        result1="THE BREAST CANCER IS BENIGN\n\n\n\n"
  
    return render(request, "predict.html", {"result2": result1}) 