// Grid.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import styles from '../styles/Style';


const num_boxes = 81;
const num_rows = Math.sqrt(num_boxes);
const num_cols = Math.sqrt(num_boxes);


const Grid = ({ squares, selected_num, onGridInteraction }) => {

    const handleGridInteraction = (i) => {
        const squares = squares.slice();
        squares[i] = selected_num === squares[i] ? null : selected_num;
        // this.setState({ squares: squares, cur_square: i });
        onGridInteraction(squares, i);
    }

    const renderSquare = (i) => {

        const curNum = selected_num !== null && selected_num === squares[i];
        const filledBox = selected_num !== null && !curNum && squares[i] != null;
        const backgroundColor = curNum ? '#2E6C7B' : filledBox ? '#bcdad2' : 'transparent';

        const accentWidth = 4;
        const borderRightWidth = (i + 1) % 3 === 0 ? accentWidth : 1;
        const borderLeftWidth = i % 9 === 0 ? accentWidth : 1;
        const borderTopWidth = i % 27 < 9 ? accentWidth : 1;
        const borderBottomWidth = i > 71 ? accentWidth : 1;

        return (
            <TouchableOpacity
                style={[styles.square, { backgroundColor, borderRightWidth, borderLeftWidth, borderTopWidth, borderBottomWidth }]}
                onPress={() => onGridInteraction(i)}
                key={i}
            >
                <Text style={[styles.squareText, { color: curNum ? 'white' : 'black' }]}>
                    {squares[i]}
                </Text>
            </TouchableOpacity>
        );
    }

    return (
        <View>
            {Array(num_rows).fill(null).map((_, i) => (
                <View key={i} style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {Array(num_cols).fill(null).map((_, k) => {
                        const squareNumber = i * num_rows + k;
                        return renderSquare(squareNumber);
                    })}
                </View>
            ))}
        </View>
    );
};

export default Grid;
