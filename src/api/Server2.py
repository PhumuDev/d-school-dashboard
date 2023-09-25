from flask import Flask, jsonify
import copy
import threading
import time

app = Flask(__name__)


# for solar generation and building consumption
energy_data = [
      {"x": "2023-08-01T00:00:00","generationValue": 0,"consumptionValue": 654},
      {"x": "2023-08-02T00:00:00","generationValue": 149,"consumptionValue": 884},
      {"x": "2023-08-03T00:00:00","generationValue": 116,"consumptionValue": 800},
      {"x": "2023-08-04T00:00:00","generationValue": 192,"consumptionValue": 990},
      {"x": "2023-08-05T00:00:00","generationValue": 181,"consumptionValue": 784.4},
      {"x": "2023-08-06T00:00:00","generationValue": 156,"consumptionValue": 795.4},
      {"x": "2023-08-07T00:00:00","generationValue": 138,"consumptionValue": 1062.1},
      {"x": "2023-08-08T00:00:00","generationValue": 180,"consumptionValue": 1109.1},
      {"x": "2023-08-09T00:00:00","generationValue": 204,"consumptionValue": 870.2},
      {"x": "2023-08-10T00:00:00","generationValue": 199,"consumptionValue": 974.8},
      {"x": "2023-08-11T00:00:00","generationValue": 187,"consumptionValue": 863.3},
      {"x": "2023-08-12T00:00:00","generationValue": 139,"consumptionValue": 675.8},
      {"x": "2023-08-13T00:00:00","generationValue": 181,"consumptionValue": 649.2},
      {"x": "2023-08-14T00:00:00","generationValue": 122,"consumptionValue": 856.1},
      {"x": "2023-08-15T00:00:00","generationValue": 216,"consumptionValue": 912.1},
      {"x": "2023-08-16T00:00:00","generationValue": 151,"consumptionValue": 994.5},
      {"x": "2023-08-17T00:00:00","generationValue": 138,"consumptionValue": 1053.5},
      {"x": "2023-08-18T00:00:00","generationValue": 202,"consumptionValue": 873},
      {"x": "2023-08-19T00:00:00","generationValue": 148,"consumptionValue": 662.7},
      {"x": "2023-08-20T00:00:00","generationValue": 213,"consumptionValue": 647.3},
      {"x": "2023-08-21T00:00:00","generationValue": 141,"consumptionValue": 938.8},
      {"x": "2023-08-22T00:00:00","generationValue": 8,"consumptionValue": 956.7},
      {"x": "2023-08-23T00:00:00","generationValue": 123,"consumptionValue": 866.3},
      {"x": "2023-08-24T00:00:00","generationValue": 175,"consumptionValue": 1057.7},
      {"x": "2023-08-25T00:00:00","generationValue": 180,"consumptionValue": 970},
      {"x": "2023-08-26T00:00:00","generationValue": 128,"consumptionValue": 750.1},
      {"x": "2023-08-27T00:00:00","generationValue": 230,"consumptionValue": 720.6},
      {"x": "2023-08-28T00:00:00","generationValue": 228,"consumptionValue": 997.8},
      {"x": "2023-08-29T00:00:00","generationValue": 194,"consumptionValue": 1135.9},
      {"x": "2023-08-30T00:00:00","generationValue": 166,"consumptionValue": 1006.6},
      {"x": "2023-08-31T00:00:00","generationValue": 38,"consumptionValue": 1065.8},
          
]


# for water usage per category
water_category_data = [
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


# electricity and water cost usage
elec_cost = [
    {
"x": "2023-08-01T00:00:00",
"value": 2774,
"wValue": 134
},
{
"x": "2023-08-02T00:00:00",
"value": 1068,
"wValue": 118
},
{
"x": "2023-08-03T00:00:00",
"value": 1083,
"wValue": 139
},
{
"x": "2023-08-04T00:00:00",
"value": 2804,
"wValue": 67
},
{
"x": "2023-08-05T00:00:00",
"value": 3115,
"wValue": 2

},
{
"x": "2023-08-06T00:00:00",
"value": 2389,
"wValue": 10
},
{
"x": "2023-08-07T00:00:00",
"value": 2768,
"wValue": 69
},
{
"x": "2023-08-08T00:00:00",
"value": 1454,
"wValue": 115
},
{
"x": "2023-08-09T00:00:00",
"value": 836,
"wValue": 101
},
{
"x": "2023-08-10T00:00:00",
"value": 803,
"wValue": 24
},
{
"x": "2023-08-11T00:00:00",
"value": 1460,
"wValue": 120
},
{
"x": "2023-08-12T00:00:00",
"value": 1554,
"wValue": 101
},
{
"x": "2023-08-13T00:00:00",
"value": 1693,
"wValue": 78
},
{
"x": "2023-08-14T00:00:00",
"value": 1786,
"wValue": 57
},
{
"x": "2023-08-15T00:00:00",
"value": 1445,
"wValue": 172
},
{
"x": "2023-08-16T00:00:00",
"value": 820,
"wValue": 156
},
{
"x": "2023-08-17T00:00:00",
"value": 801,
"wValue": 145
},
{
"x": "2023-08-18T00:00:00",
"value": 1599,
"wValue": 93
},
{
"x": "2023-08-19T00:00:00",
"value": 1640,
"wValue": 27
},
{
"x": "2023-08-20T00:00:00",
"value": 1497,
"wValue": 26
},
{
"x": "2023-08-21T00:00:00",
"value": 1792,
"wValue": 76
},
{
"x": "2023-08-22T00:00:00",
"value": 1626,
"wValue": 137
},
{
"x": "2023-08-23T00:00:00",
"value": 928,
"wValue": 49
},
{
"x": "2023-08-24T00:00:00",
"value": 891,
"wValue": 133
},
{
"x": "2023-08-25T00:00:00",
"value": 1729,
"wValue": 140
},
{
"x": "2023-08-26T00:00:00",
"value": 1944,
"wValue": 99
},
{
"x": "2023-08-27T00:00:00",
"value": 1715,
"wValue": 10
},
{
"x": "2023-08-28T00:00:00",
"value": 1818,
"wValue": 69
},
{
"x": "2023-08-29T00:00:00",
"value": 1498,
"wValue": 148
},
{
"x": "2023-08-30T00:00:00",
"value": 809,
"wValue": 77
},
{
"x": "2023-08-31T00:00:00",
"value": 759,
"wValue": 86
},
]


energy_data_live = [
      {"x": "2023-08-01T00:00:00","generationValue": 0,"consumptionValue": 654},
      {"x": "2023-08-02T00:00:00","generationValue": 149,"consumptionValue": 884},
      {"x": "2023-08-03T00:00:00","generationValue": 116,"consumptionValue": 800},
      {"x": "2023-08-04T00:00:00","generationValue": 192,"consumptionValue": 990},
      {"x": "2023-08-05T00:00:00","generationValue": 181,"consumptionValue": 784.4},
      {"x": "2023-08-06T00:00:00","generationValue": 156,"consumptionValue": 795.4},
      {"x": "2023-08-07T00:00:00","generationValue": 138,"consumptionValue": 1062.1},
      {"x": "2023-08-08T00:00:00","generationValue": 180,"consumptionValue": 1109.1},
]

all_cost_live=[
  {
"x": "2023-08-01T00:00:00",
"value": 2774,
"wValue": 134
},
{
"x": "2023-08-02T00:00:00",
"value": 1068,
"wValue": 118
},
{
"x": "2023-08-03T00:00:00",
"value": 1083,
"wValue": 139
},
{
"x": "2023-08-04T00:00:00",
"value": 2804,
"wValue": 67
},
{
"x": "2023-08-05T00:00:00",
"value": 3115,
"wValue": 2

},
{
"x": "2023-08-06T00:00:00",
"value": 2389,
"wValue": 10
},
{
"x": "2023-08-07T00:00:00",
"value": 2768,
"wValue": 69
},
{
"x": "2023-08-08T00:00:00",
"value": 1454,
"wValue": 115
}
]



@app.route("/waterUsagePerCate")
def waterUsage():
   
    return jsonify(water_category_data)







@app.route("/solarGeneration")
def energyGeneration():
   
    return jsonify(energy_data)

# Function to update energy_data2 every 5 seconds
def update_live_data():

    global energy_data_live
    index = 8

    while (index<30):

        # Update the data in energy_data_live
        energy_data_live.pop(0)
        energy_data_live.append(copy.deepcopy(energy_data[index]))

        index = index+1
        # Sleep for 5 seconds
        time.sleep(5)

@app.route("/solarGenerationLive")
def energyGenerationLive():
    return jsonify(energy_data_live)


@app.route("/UsageCost")
def UsageCost():
    return jsonify(elec_cost)


# Function to update energy_data2 every 5 seconds
def update_live_cost():

    global all_cost_live
    index = 8

    while (index<30):

        # Update the data in energy_data_live
        all_cost_live.pop(0)
        all_cost_live.append(copy.deepcopy(elec_cost[index]))

        index = index+1
        # Sleep for 5 seconds
        time.sleep(5)

@app.route("/UsageCostLive")
def UsageCostLive():
    return jsonify(all_cost_live)



if __name__ == "__main__":

    # Start the background thread to update energy_data2
    update_thread = threading.Thread(target=update_live_data)
    update_thread.daemon = True
    update_thread.start()

     # Start the background thread to update electricity cost
    update_thread2 = threading.Thread(target=update_live_cost)
    update_thread2.daemon = True
    update_thread2.start()

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
