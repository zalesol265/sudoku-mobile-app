import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../styles/Style';
import Grid from './Grid';

// Sudoku puzzle has 81 boxes total with a 9x9 grid. Valid values include integers 1-9
const num_boxes = 81;
const num_rows = Math.sqrt(num_boxes);
const num_cols = Math.sqrt(num_boxes);
const num_options = Array.from({ length: 9 }, (_, index) => index + 1);


export class Puzzle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(num_boxes).fill(null),
            selected_num: 1,
            cur_square: null,
        };
    }

    getPuzzle(difficulty) {
        const url = 'http://192.168.0.165/generate?difficulty=Medium';
        fetch(url)
            .then((resp) => resp.json())
            .then((json) => this.setState({ squares: json.flat() }))
            .catch((error) => console.error("Error occured in function getPuzzle", error));
    }

    solvePuzzle() {
        const url = 'http://192.168.0.165/solve';

        // Reformat to be a 2d array. Convert null values to 0 
        const nestedList = Array.from({ length: num_rows }, (_, i) =>
            this.state.squares
                .slice(i * num_cols, (i + 1) * num_cols)
                .map(value => (value === null ? 0 : value))
        );

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ puzzle: nestedList }), 
        })
            .then((resp) => resp.json())
            .then((json) => this.setState({ squares: json.flat() }))
            .catch((error) => console.error("Error occured in solve_puzzle function: ", error));
    }


    handleGridInteraction(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.selected_num === squares[i] ? null : this.state.selected_num;
        this.setState({ squares: squares, cur_square: i });
    }

    numSelection(i) {
        this.setState({ selected_num: num_options[i] });
    }

    // Function to restart the game 
    restartGame() {
        this.setState({
            // Set default values to reset the game		 
            squares: Array(num_boxes).fill(null),
            cur_square: null,
        });
    }

    renderOptionSquare(i) {
        const isSelected = num_options[i] === this.state.selected_num;
        const backgroundColor = isSelected ? '#2E6C7B' : 'transparent';

        return (
            <TouchableOpacity
                style={[styles.square, { backgroundColor }]}
                onPress={() => this.numSelection(i)}
                key={i}
            >
                <Text style={[styles.squareText, { color: isSelected ? 'white' : 'black' }]}>
                    {num_options[i]}
                </Text>
            </TouchableOpacity>
        );
    }

    render() {

        return (
            <>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20, marginTop: 20 }}>
                        {Array(num_cols).fill(null).map((_, j) => (
                            this.renderOptionSquare(j)
                        ))}
                    </View>
                    <Grid squares={this.state.squares} selected_num={this.state.selected_num} onGridInteraction={(i) => this.handleGridInteraction(i)} />

                    <View style={styles.solveButtonContainer}>
                        <TouchableOpacity onPress={() => this.getPuzzle()} style={styles.solveButton}>
                            <Text style={{ color: 'white', textAlign: 'center' }}>Generate Puzzle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.solvePuzzle()} style={styles.solveButton}>
                            <Text style={{ color: 'white', textAlign: 'center' }}>Solve</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>);
    }
}
