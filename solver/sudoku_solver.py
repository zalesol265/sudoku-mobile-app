from sudoku import Sudoku
import random


def generate_puzzle(difficulty):
    if difficulty == "Easy":
        given_boxes = random.randint(40, 45)
    elif difficulty == "Medium":
        given_boxes = random.randint(30, 35)
    else:
        given_boxes = random.randint(20, 25)

    puzzle = Sudoku(3, 3, seed=random.randint(0, 1000000000)).difficulty((81-given_boxes)/81).board
    return puzzle


def solve_puzzle(board):
    puzzle = Sudoku(3, 3, board=board)
    solution = puzzle.solve(raising=True).board

    return solution
