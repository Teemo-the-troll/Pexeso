import { field } from "./models/field.js";

export class Pexeso {
    /**
     * @param {[]} array
     * @param {number} rows
     * @param {number} columns
     * @param {number | null} pieces
     */
    constructor(rows, columns, pieces) {
        this.rows = rows;
        this.columns = columns;
        this.pieces = pieces;
        this.pieceField = [];
        for (let a = 0; a < rows; a++) {
            let row = [];
            for (let b = 0; b < columns; b++) {
                row.push(0);
            }
            this.pieceField.push(row);
        }

        this.array = [];
        for (let a = 0; a < rows; a++) {
            let row = [];
            for (let b = 0; b < columns; b++) {
                row.push(field.hidden);
            }
            this.array.push(row);
        }


        this.createPieces();
    }
    /**
     * TODO: IMPLEMENT THIS
     * Returns the current state of the field.
     * Fields can be: hidden or revealed
     * @param {number} x
     * @param {number} y
     * @return {field}
     */
    getField(x, y) {
        return this.array[x][y];
    }
    createTile(value) {
        let pieceRow = Math.floor(Math.random() * this.rows);
        let pieceColumn = Math.floor(Math.random() * this.rows);
        if (this.pieceField[pieceColumn][pieceRow] == 0 && this.pieceField[pieceColumn][pieceRow] != value) {
            this.pieceField[pieceColumn][pieceRow] = value;
        } else this.createTile(value);
    }
    /**
     * 
     * @param {*} pieceRow 
     * @param {*} pieceColumn 
     */
    createPieces() {
        let value = 1;
        for (let a = 0; a < this.rows; a++) {
            for (let b = 0; b < this.columns; b++) {
                if (value >= (this.rows * this.columns / 2) ) {
                    value = 0;
                }
                value++;
                console.log(value);
                this.createTile(value);
            }
        }
        console.log(this.pieceField);
    }


    /**
     * TODO:
     * checks if the selected cards are a pair or not
     * @param {number} pairOne 
     * @param {number} pairTwo
     * @returns {boolean} 
     */
    isPair(pairOne, pairTwo) {
        if (pairOne == pairTwo) {
            return true
        } else
            return false;
    }
    /**
     * TODO: IMPLEMENT THIS
     * Reveals the field 
     * @param {number} x
     * @param {number} y
     */
    reveal(x, y) {
        if (this.array[y][x] == field.hidden) {
            this.array[y][x] = field.visible;
        } else
            this.array[y][x] = field.visible;


    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns if the user already won
     * @returns {boolean}
     */
    didWin() {
        return false;
    }


}


