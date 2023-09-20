from flask import Flask, jsonify
import random
import requests


# baseURL = "http://localhost:3000/"


app = Flask(__name__)

#API routes
@app.route("/electricity")
def electricalEnergyData():

    num = 90
    num2 = random.randint(1, 100)
    data = {
    "energy_consumption": [
      {
        "time": "00:00",
        "load_power": num
        
      },
      {
        "time": "03:00",
        "load_power": 55.21
      },
      {
        "time": "06:00",
        "load_power": 48.71
      },
      {
        "time": "09:00",
        "load_power": 95.55
      },
      {
        "time": "12:00",
        "load_power": 80.13
      },
      {
        "time": "15:00",
        "load_power": 58.62
      },
      {
        "time": "18:00",
        "load_power": 61.34
      },
      {
        "time": "21:00",
        "load_power": 0
      },
      {
        "time": "23:55",
        "load_power": num2
      },
    ],

    "energy_generation":[
        {
            "time": "00:00",
            "power_produced": 0,
            "irradiance" : 0,
            "cost": 0
        },
         {
            "time": "03:00",
            "power_produced": 0,
            "irradiance" : 0,
            "cost": 0
        },
         {
            "time": "06:00",
            "power_produced": 0,
            "irradiance" : 0,
            "cost": 0
        },
         {
            "time": "09:00",
            "power_produced": 17.7,
            "irradiance" : 400.37,
            "cost": 23.51
        },
         {
            "time": "12:00",
            "power_produced": 17.42,
            "irradiance" : 397.5,
            "cost": 23.13
        },
        {
            "time": "15:00",
            "power_produced": 36.7,
            "irradiance" : 750.84,
            "cost": 48.74
        },
        {
            "time": "18:00",
            "power_produced": 0.78,
            "irradiance" : 28.54,
            "cost": 1.04
        },
        {
            "time": "21:00",
            "power_produced": 0,
            "irradiance" : 0,
            "cost": 0
        },
        {
            "time": "23:55",
            "power_produced": 0,
            "irradiance" : 0,
            "cost": 0
        }
    ],
    }
   
    return jsonify(data)

@app.route("/water")
def waterUsage():
    data = {
        "category_usage": [
        {
            "x": "Toilets",
            "y": 988
        },
        {
            "x": "Hot Water",
            "y": 0
        },
        {
            "x": "Cold Water",
            "y": 147
        },
        {
            "x": "Washing",
            "y": 150
        },
    ],
    
        "floor_usage":[
            {
                "x": "Ground floor",
                "y": 509,
                "water_cost": 20.36
            },
            {
                "x": "First floor",
                "y": 835,
                "water_cost": 33.4
            },
            {
                "x": "Second floor",
                "y": 248,
                "water_cost": 9.92
            },
            {
                "x": "Thrid Floor",
                "y": 0,
                "water_cost": 0
            },
        ]
    }
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)

 # #return {"yearly" : ['hello1','hello2','hello3']}

    #  response = requests.get(baseURL + endpoint)
    # # #print(response)

    #  data = response.json()  # storing all data in variable
    # # #print(data[0]['x'])

    #  return(data)

















# def get_vcom_data():
#     api_key = "gpbgpSav1s"
#     username = "wanda_majikijela"
#     password = "solar_meteo2022"
 
#     url = "https://api.meteocontrol.de/v2/session"
    
#     credentials = f"{username}:{password}"
    
#     credentials_base64 = base64.b64encode(credentials.encode()).decode()
    
#     headers = {
#         "Authorization": f"Basic {credentials_base64}",
#         "X-API-KEY": api_key
#         }
 
#     response = requests.get(url, headers=headers)  # response should be 'Response [200]'
 
#     print(response)
 
#     if response.status_code == 200:
#         return response.json() #returns actual data
#     else:
#         return None

# get_vcom_data()