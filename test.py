from flask import Flask, jsonify
import random

app = Flask(__name__)

# Static data (e.g., some sample items)  it can be static data too once updated
static_data = [
    {"id": 1, "name": "Live Data", "value": 10},
    {"id": 2, "name": "Live Data", "value": 20},
    {"id": 3, "name": "Live Data", "value": 30},
]
print(static_data)

# Function to generate live data (e.g., random values)
def generate_live_data():
    return random.randint(1, 100)  # Replace with your live data generation logic



# API endpoint to fetch static data
@app.route("/static-data")
def staticData():
    i = 4
    live_data = generate_live_data()
    dict_value = {"id": i, "name": "Live Data", "value": live_data}  # to be appended to static_data
    static_data.append(dict_value.copy())
    final = static_data
    
    return jsonify(final)


# API endpoint to retrieve the latest live data
@app.route('/latest-data', methods=['GET'])
def latest_data():
    if static_data:
        latest = static_data[-1]  # Get the latest added data
        return jsonify(latest)
    else:
        return jsonify({"message": "No data available"})

if __name__ == "__main__":
    app.run(debug=True)
