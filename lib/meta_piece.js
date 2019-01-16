//ALL INFORMATION ABOUT CHESS PIECES GOES HERE

//Unicode chess characters for colours & pieces
const PieceUnicodeCharacters = {
    black: {
        rook: "♜",
        knight: "♞",
        bishop: "♝",
        queen: "♛",
        king: "♚",
        pawn: "♟"
    },
    white: {
        rook: "♖",
        knight: "♘",
        bishop: "♗",
        queen: "♕",
        king: "♔",
        pawn: "♙"
    }
}

//List of possible colours  in chess
const ChessColors = ["white", "black"]

//List of possible chess pieces
const ChessPieces = ["rook", "knight", "bishop",
    "queen", "king", "pawn"]

//The max number that a position for a given piece can have
const PiecePositionRangeMaxes = {
    rook: 1,
    knight: 1,
    bishop: 1,
    queen: 0,
    king: 0,
    pawn: 7
}

//List of starting x-values on the board for pieces
const PieceXStartingValues = {
    rook: 0,
    knight: 1,
    bishop: 2,
    queen: 3,
    king: 4,
    pawn: 0
}

//The amount changing from postion to position for pieces
const PieceChangeXValues = {
    rook: 7,
    knight: 5,
    bishop: 3,
    //These values are in here for completeness but do not matter:
    //Position for king and queen cannot be >0
    queen: 0,
    king: 0,
    pawn: 1
}

//number of pieces on the board
var TotalPieces = {
    king:1,
    queen:1,
    rook:2,
    bishop:2,
    knight:2,
    pawn:8
}

//Export all of these values
export {
    PieceUnicodeCharacters,
    ChessColors,
    ChessPieces,
    PiecePositionRangeMaxes,
    PieceXStartingValues,
    PieceChangeXValues,
    TotalPieces
}