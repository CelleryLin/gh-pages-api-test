from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask("app")
CORS(app, resources={r"/test": {"origins": "*"}})

@app.route('/test',methods=['GET','POST'])
def api_test():
    data = request.get_json()
    print(data['nums'])
    return jsonify({"sum": data['nums'][0] + data['nums'][1]})

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=5586)