import { field } from "./models/field.js";
import { PexesoGUI } from "../presentation/pexeso-gui.js";
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
        this.controlCoordinates = [null, null];
        this.controlCoordinates2 = [null, null];
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
     * creates pieces
     * @param {*} pieceRow 
     * @param {*} pieceColumn 
     */
    createPieces() {
        let value = 1;
        for (let a = 0; a < this.rows; a++) {
            for (let b = 0; b < this.columns; b++) {
                if (value >= (this.rows * this.columns / 2)) {
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
     * saves the piece to the control field
     * @param {*} x 
     * @param {*} y 
     */
    savePiece(x, y) {
        if (this.controlCoordinates[0] == null) {
            this.controlCoordinates[0] = x;
            this.controlCoordinates[1] = y;
        } else if (this.controlCoordinates2[0] == null) {
            this.controlCoordinates2[0] = x;
            this.controlCoordinates2[1] = y;
            this.isPair();
            setTimeout(() => {
                this.controlCoordinates[0] = null;
                this.controlCoordinates[1] = null;
                this.controlCoordinates2[0] = null;
                this.controlCoordinates2[1] = null;
            }, 100);
        }

    }
    /**
     * hides the tile at x, y
     * @param {*} x 
     * @param {*} y 
     */
    hideTile(x, y) {
        console.log(this)
        console.log("x a y jsou: " + x, y)
        this.array[x][y] = field.hidden;
    }

    /**
     * returns a value of piece on the field
     * @param {*} x 
     * @param {*} y 
     */
    getPiece(x, y) {
        return this.pieceField[x][y];
    }

    /**
     * TODO: redo the hiding sequence, and find how the timeout method works
     * checks if the selected cards are a pair or not
     * @param {number} pairOne 
     * @param {number} pairTwo
     * @returns {boolean} 
     */
    isPair() {
        setTimeout(() => {
            if (this.getPiece(this.controlCoordinates2[0], this.controlCoordinates2[1]) != this.getPiece(this.controlCoordinates[0], this.controlCoordinates[1])) {
                console.log(this.controlCoordinates)
                console.log(this.controlCoordinates2)
                this.hideTile(this.controlCoordinates2[0], this.controlCoordinates2[1]);
                this.hideTile(this.controlCoordinates[0], this.controlCoordinates[1]);
            }
        }, 50);
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
            this.savePiece(y, x);
        } else
            this.array[y][x] = field.visible;
    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns if the user already won
     * @returns {boolean}
     */
    didWin() {
        console.log(this.array)
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                if (this.array[i][j] == field.hidden) {
                    return false;
                }
            }
        }
        return true;
    }


}


