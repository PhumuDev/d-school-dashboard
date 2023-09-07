import base64
import requests


def get_vcom_data():
    api_key = "gpbgpSav1s"
    username = "wanda_majikijela"
    password = "solar_meteo2022"
 
    url = "https://api.meteocontrol.de/v2/session"
    
    credentials = f"{username}:{password}"
    
    credentials_base64 = base64.b64encode(credentials.encode()).decode()
    
    headers = {
        "Authorization": f"Basic {credentials_base64}",
        "X-API-KEY": api_key
        }
 
    response = requests.get(url, headers=headers)  # response should be 'Response [200]'
 
    print(response)
 
    if response.status_code == 200:
        return response.json() #returns actual data
    else:
        return None

get_vcom_data()