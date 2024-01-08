from flask import Flask, request

from sudoku_solver import *

app = Flask(__name__)


@app.route("/healthcheck")
def hello():
    return {'message':"Hello World!"}


@app.route("/solve", methods = ['POST'])
def solver():
    grid = request.get_json()['puzzle']
    answer = solve_puzzle(grid)

    return answer


@app.route("/generate", methods = ['GET'])
def generate():
    difficulty = request.args["difficulty"]
    answer = generate_puzzle(difficulty)

    return answer


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)
