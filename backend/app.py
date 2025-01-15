from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing for React

@app.route('/api/response', methods=['POST'])
def get_response():
    data = request.get_json()
    user_message = data.get('message', '')
    if not user_message:
        return jsonify({"response": "Please provide a message!"}), 400

    # Simulate AI logic (you can replace this with an ML model or API call)
    response = f"AI Response to: {user_message}"

    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)
