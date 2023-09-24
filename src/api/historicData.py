import csv

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
            line1=['','{"x": "'+date[0]+'T'+date[1]+'","solarGeneration": '+row[1]+',"solarConsumption": '+str(solarconsumption[index])+'}']
            index+=1
            
            with open('electricity.txt','a') as f:
                f.write('\n'.join(line1))
        count+=1
        