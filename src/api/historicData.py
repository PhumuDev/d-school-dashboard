import csv
'''
count=0
hour=0
solarIndex=0
with open('savings.csv','r') as save:
    csvreader=csv.reader(save)
    for rows in csvreader:
        if count!=0:
            date=rows[0].split(' ')
            savings=rows[1].split('-')
            if len(savings)<2:
                savings=['0','0']
            line=['','{','"date": "'+date[0]+'T'+date[1]+'",','"value": '+savings[1],'},']
            with open('save.txt','a') as s:
                s.write('\n'.join(line))
        count=1

count=0
index=0
solarconsumption=[800,990,784.4,795.4,1062.1,1109.1,870.2,974.8,863.3,675.8,649.2,856.1,912.1,994.5,1053.5,873,662.7,647.3,938.8,956.7,866.3,1057.7,970,750.1,720.6,997.8,1135.9,1006.6,1065.8,884.6,654]

with open("solarDaily.csv",'r') as file:
    csvreader = csv.reader(file)
    for row in csvreader:
        if count>2:
            date=row[0].split(' ')
            line1=['','{"x": "'+date[0]+'T'+date[1]+'","generationValue": '+row[1]+',"consumptionValue": '+str(solarconsumption[index])+'}']
            index+=1
            
            with open('electricity.txt','a') as f:
                f.write('\n'.join(line1))
        count+=1
'''

with open("hot1.csv",'r') as file:
    csvreader = csv.reader(file)
    count=0
    hot1=[]
    for row in csvreader:
        if count!=0:
            if row[1]==None:
                hot1.append('0')
            else:
                hot1.append(row[1])
        count=1
with open("hot2.csv",'r') as file:
    csvreader = csv.reader(file)
    count=0
    hot2=[]
    for row in csvreader:
        if count!=0:
            if row[1]==None:
                hot2.append('0')
            else:
                hot2.append(row[1])
        count=1
with open("cold1.csv",'r') as file:
    csvreader = csv.reader(file)
    count=0
    cold1=[]
    for row in csvreader:
        if count!=0:
            if row[1]==None:
                cold1.append('0')
            else:
                cold1.append(row[1])
        count=1
with open("cold2.csv",'r') as file:
    csvreader = csv.reader(file)
    count=0
    cold2=[]
    for row in csvreader:
        
        if count!=0:
            print(str(float(row[2])))
            cold2.append(row[2])
        count=1
print(cold2)
with open("toilet1.csv",'r') as file:
    csvreader = csv.reader(file)
    count=0
    toilet1=[]
    for row in csvreader:
        if count!=0:
            if row[1]==None:
                toilet1.append('0')
            else:
                toilet1.append(row[1])
        count=1
with open("toilet2.csv",'r') as file:
    csvreader = csv.reader(file)
    count=0
    toilet2=[]
    for row in csvreader:
        if count!=0:
            if row[1]==None:
                toilet2.append('0')
            else:
                toilet2.append(row[1])
        count=1
with open("toilet3.csv",'r') as file:
    csvreader = csv.reader(file)
    count=0
    toilet3=[]
    for row in csvreader:
        if count!=0:
            if row[1]==None:
                toilet3.append('0')
            else:
                toilet3.append(row[1])
        count=1
with open("ablution.csv",'r') as file:
    csvreader = csv.reader(file)
    count=0
    index=0
    list7=[]
    for row in csvreader:
        date=row[0].split(' ')
        if index!=0:
            line=['','{','"date": "'+date[0]+'T'+date[1]+'",','"data": [','{"x": "Toilets", "y": '+str(float(toilet3[count])+float(toilet1[count])+float(toilet2[count]))+'},','{"x": "Hot Water", "y": '+str(float(hot1[count])+float(hot2[count]))+'},','{"x": "Cold Water", "y": '+str(float(cold1[count])+float(cold2[count]))+'},','{"x": "Washing", "y": '+row[1]+'},','],','},']
            count+=1
            with open('waterpercategory.txt','a') as f:
                f.write('\n'.join(line))
        index+=1
'''
with open("electricityCost.csv",'r') as file:
    csvreader = csv.reader(file)
    index=0
    for row in csvreader:
        date=row[0].split(' ')
        if index!=0:
            d=str(100+index)
            line=['','{','"date": "2023-08-'+str(index)+'T'+date[1]+'",','"value": '+row[1],'},']
            
            with open('electricitycost.txt','a') as f:
                f.write('\n'.join(line))
        index+=1
        '''