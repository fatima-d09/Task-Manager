from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

tasks = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/tasks', methods=['GET', 'POST', 'PUT', 'DELETE'])
def manage_tasks():
    global tasks
    if request.method == 'GET':
        return jsonify(tasks)
    elif request.method == 'POST':
        data = request.json
        task = {
            'name': data['name'],
            'priority': data['priority'],
            'completed': False
        }
        tasks.append(task)
        return jsonify({'status': 'Task added'}), 201
    elif request.method == 'PUT':
        data = request.json
        for task in tasks:
            if task['name'] == data['name']:
                task['completed'] = True
                return jsonify({'status': 'Task completed'}), 200
        return jsonify({'status': 'Task not found'}), 404
    elif request.method == 'DELETE':
        data = request.json
        tasks = [task for task in tasks if task['name'] != data['name']]
        return jsonify({'status': 'Task removed'}), 200

if __name__ == '__main__':
    app.run(debug=True)
