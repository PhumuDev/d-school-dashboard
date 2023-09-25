from flask import Flask, jsonify
import random
import requests


# baseURL = "http://localhost:3000/"


app = Flask(__name__)

# for solar generation and building consumption
energy_data = [
        {"x": "2023-08-01T00:00:00", "generationValue": 20},
        {"x": "2023-08-02T00:00:00", "generationValue": 3},
        {"x": "2023-08-03T00:00:00", "generationValue": 55},
        {"x": "2023-08-04T00:00:00", "generationValue": 2},
        {"x": "2023-08-05T00:00:00", "generationValue": 25},
        {"x": "2023-08-06T00:00:00", "generationValue": 36},
        {"x": "2023-08-07T00:00:00", "generationValue": 66},
        {"x": "2023-08-08T00:00:00", "generationValue": 77},
        {"x": "2023-08-09T00:00:00", "generationValue": 89},
        {"x": "2023-08-10T00:00:00", "generationValue": 34},
        {"x": "2023-08-11T00:00:00", "generationValue": 11},
        {"x": "2023-08-12T00:00:00", "generationValue": 5},
]

# for testing hourly implementation
tempAllFormatDisplay = [
    {
        "date": "2023-08-01",
        "data": [
            {"x": "2023-08-01T00:00:00", "solarGeneration": 988, "buildingConsump": 786 },
            {"x": "2023-08-01T02:00:00", "solarGeneration": 888, "buildingConsump": 34 },
            {"x": "2023-08-01T04:00:00", "solarGeneration": 777, "buildingConsump": 322 },
            {"x": "2023-08-01T06:00:00", "solarGeneration": 655, "buildingConsump": 765 },
            {"x": "2023-08-01T08:00:00", "solarGeneration": 444, "buildingConsump": 345 },
            {"x": "2023-08-01T10:00:00", "solarGeneration": 333, "buildingConsump": 678 },
            {"x": "2023-08-01T12:00:00", "solarGeneration": 222, "buildingConsump": 234 },
            {"x": "2023-08-01T14:00:00", "solarGeneration": 345, "buildingConsump": 123 },
            {"x": "2023-08-01T16:00:00", "solarGeneration": 111, "buildingConsump": 456 },
            {"x": "2023-08-01T18:00:00", "solarGeneration": 400, "buildingConsump": 100 },
        ],
        "dailyAverage": 
            {"dailyDate": "2023-08-01T00:00:00", "generationAvg": 567, "consumpAvg": 345},
        

    },
    {
        "date": "2023-08-02",
        "data": [
            {"x": "2023-08-02T00:00:00", "solarGeneration": 918, "buildingConsump": 186 },
            {"x": "2023-08-02T02:00:00", "solarGeneration": 818, "buildingConsump": 14 },
            {"x": "2023-08-02T04:00:00", "solarGeneration": 717, "buildingConsump": 722 },
            {"x": "2023-08-02T06:00:00", "solarGeneration": 615, "buildingConsump": 265 },
            {"x": "2023-08-02T08:00:00", "solarGeneration": 494, "buildingConsump": 845 },
            {"x": "2023-08-02T10:00:00", "solarGeneration": 313, "buildingConsump": 978 },
            {"x": "2023-08-02T12:00:00", "solarGeneration": 202, "buildingConsump": 734 },
            {"x": "2023-08-02T14:00:00", "solarGeneration": 395, "buildingConsump": 923 },
            {"x": "2023-08-02T16:00:00", "solarGeneration": 191, "buildingConsump": 456 },
            {"x": "2023-08-02T18:00:00", "solarGeneration": 490, "buildingConsump": 823 },
        ],
        "dailyAverage": 
            {"dailyDate": "2023-08-01T00:00:00", "generationAvg": 167, "consumpAvg": 945},
        

    },
]
# for water usage per category
static_data = [
    {
        "date": "2023-08-01",
        "data": [
            {"x": "Toilets", "y": 988},
            {"x": "Hot Water", "y": 0},
            {"x": "Cold Water", "y": 147},
            {"x": "Washing", "y": 150},
        ],
        

    },
    {
        "date": "2023-08-02",
        "data": [
            {"x": "Toilets", "y": 5},
            {"x": "Hot Water", "y": 10},
            {"x": "Cold Water", "y": 15},
            {"x": "Washing", "y": 20},
        ],
    },
     {
        "date": "2023-08-03",
        "data": [
            {"x": "Toilets", "y": 9},
            {"x": "Hot Water", "y": 22},
            {"x": "Cold Water", "y": 13},
            {"x": "Washing", "y": 3},
        ],
    },
]

# waterUsagePerCategory = {
#     "dataUsage" :[
    
#     {
#         "date": "2023-08-01",
#         "t": "Toilets",
#         "tValue": 4213,  # sum of all floors toilets
#         "c": "Cold Water",
#         "cValue": 408,   # sum of all floors cold water
#         "w": "Washing",
#         "wValue": 105,   # sum of all floors washing
#         "o":"Other",
#         "oValue": 77    # sum of all floors other data

#      },
#      {
#         "date": "2023-08-02",
#         "t": "Toilets",
#         "tValue": 3875,  # sum of all floors toilets
#         "c": "Cold Water",
#         "cValue": 224,   # sum of all floors cold water
#         "w": "Washing",
#         "wValue": 78,   # sum of all floors washing
#         "o":"Other",
#         "oValue": 63    # sum of all floors other data

#      },
#      {
#         "date": "2023-08-03",
#         "t": "Toilets",
#         "tValue": 4458,  # sum of all floors toilets
#         "c": "Cold Water",
#         "cValue": 341,   # sum of all floors cold water
#         "w": "Washing",
#         "wValue": 114,   # sum of all floors washing
#         "o":"Other",
#         "oValue": 49    # sum of all floors other data

#      },
#      {
#         "date": "2023-08-04",
#         "t": "Toilets",
#         "tValue": 2283,  # sum of all floors toilets
#         "c": "Cold Water",
#         "cValue": 81,   # sum of all floors cold water
#         "w": "Washing",
#         "wValue": 30,   # sum of all floors washing
#         "o":"Other",
#         "oValue": 10    # sum of all floors other data

#      },
#      {
#         "date": "2023-08-05",
#         "t": "Toilets",
#         "tValue": 45,  # sum of all floors toilets
#         "c": "Cold Water",
#         "cValue": 69,   # sum of all floors cold water
#         "w": "Washing",
#         "wValue": 4,   # sum of all floors washing
#         "o":"Other",
#         "oValue": 1    # sum of all floors other data

#      },
#      {
#         "date": "2023-08-06",
#         "t": "Toilets",
#         "tValue": 337,  # sum of all floors toilets
#         "c": "Cold Water",
#         "cValue": 82,   # sum of all floors cold water
#         "w": "Washing",
#         "wValue": 50,   # sum of all floors washing
#         "o":"Other",
#         "oValue": 41    # sum of all floors other data

#      },
#      {
#         "date": "2023-08-07",
#         "t": "Toilets",
#         "tValue": 1764,  # sum of all floors toilets
#         "c": "Cold Water",
#         "cValue": 425,   # sum of all floors cold water
#         "w": "Washing",
#         "wValue": 178,   # sum of all floors washing
#         "o":"Other",
#         "oValue": 211    # sum of all floors other data

#      },
#      {
#         "date": "2023-08-08",
#         "t": "Toilets",
#         "tValue": 3290,  # sum of all floors toilets
#         "c": "Cold Water",
#         "cValue": 575,   # sum of all floors cold water
#         "w": "Washing",
#         "wValue": 136,   # sum of all floors washing
#         "o":"Other",
#         "oValue": 195    # sum of all floors other data

#      },
#      {
#         "date": "2023-08-09",
#         "t": "Toilets",
#         "tValue": 3527,  # sum of all floors toilets
#         "c": "Cold Water",
#         "cValue": 5,   # sum of all floors cold water
#         "w": "Washing",
#         "wValue": 0,   # sum of all floors washing
#         "o":"Other",
#         "oValue": 23    # sum of all floors other data

#      },
#      {
#         "date": "2023-08-10",
#         "t": "Toilets",
#         "tValue": 555,  # sum of all floors toilets
#         "c": "Cold Water",
#         "cValue": 271,   # sum of all floors cold water
#         "w": "Washing",
#         "wValue": 124,   # sum of all floors washing
#         "o":"Other",
#         "oValue": 36    # sum of all floors other data

#      },
#      {
#         "date": "2023-08-11",
#         "t": "Toilets",
#         "tValue": 3908,  # sum of all floors toilets
#         "c": "Cold Water",
#         "cValue": 262,   # sum of all floors cold water
#         "w": "Washing",
#         "wValue": 60,   # sum of all floors washing
#         "o":"Other",
#         "oValue": 80    # sum of all floors other data

#      },
#      {
#         "date": "2023-08-12",
#         "t": "Toilets",
#         "tValue": 3439,  # sum of all floors toilets
#         "c": "Cold Water",
#         "cValue": 121,   # sum of all floors cold water
#         "w": "Washing",
#         "wValue": 2,   # sum of all floors washing
#         "o":"Other",
#         "oValue": 10    # sum of all floors other data

#      },

#     ]
# }



@app.route("/waterUsagePerCate")
def waterUsage():
   
    return jsonify(static_data)



@app.route("/solarGeneration")
def energyGeneration():
   
    return jsonify(energy_data)


@app.route("/allDataTemp")
def allData():
   
    return jsonify(tempAllFormatDisplay)



if __name__ == "__main__":
    app.run(debug=True)



















# -------------------------------------------------------------------------------------------
# from flask import Flask, jsonify
# import random

# app = Flask(__name__)

# # Static data (e.g., some sample items)  it can be static data too once updated
# static_data = [
#     {"id": 1, "name": "Live Data", "value": 10},
#     {"id": 2, "name": "Live Data", "value": 20},
#     {"id": 3, "name": "Live Data", "value": 30},
# ]
# print(static_data)

# # Function to generate live data (e.g., random values)
# def generate_live_data():
#     return random.randint(1, 100)  # Replace with your live data generation logic



# # API endpoint to fetch static data
# @app.route("/static-data")
# def staticData():
#     i = 4
#     live_data = generate_live_data()
#     dict_value = {"id": i, "name": "Live Data", "value": live_data}  # to be appended to static_data
#     static_data.append(dict_value.copy())
#     final = static_data
    
#     return jsonify(final)


# # API endpoint to retrieve the latest live data
# @app.route('/latest-data', methods=['GET'])
# def latest_data():
#     if static_data:
#         latest = static_data[-1]  # Get the latest added data
#         return jsonify(latest)
#     else:
#         return jsonify({"message": "No data available"})

# if __name__ == "__main__":
#     app.run(debug=True)
