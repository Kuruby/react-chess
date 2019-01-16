import {
    PieceUnicodeCharacters,
    ChessColors,
    ChessPieces,
    PiecePositionRangeMaxes,
    PieceXStartingValues,
    PieceChangeXValues
} from './meta_piece'


const CreateChessPiece = (color, type, position = 0) => {
    //Validate input (types > color > piece type > position)

    //Make sure all the parameters are the correct type:
    //Color and type are strings and the position is a number
    if (typeof color === "string"
        && typeof type === "string"
        && typeof position === "number") { }
    else {
        throw "Invalid parameter value"
    }

    //make sure colour and piece type are lowercase
    color = color.toLowerCase()
    type = type.toLowerCase()

    //Check for valid colour in chess
    if (!ChessColors.includes(color)) {
        throw "Invalid color"
    }

    //Check for a valid type
    if (!ChessPieces.includes(type)) {
        throw "invalid chess piece"
    }
    //Check that the position provided is valid
    if (position < 0 ||
        position > PiecePositionRangeMaxes[type]) {
        throw "Invalid position"
    }

    //After validation, create the piece
    //This piece only has some values filled- others need
    //to be programatically filled in the rest of the constructor
    var piece = {
        type: type,
        renderCharacter: PieceUnicodeCharacters[color][type],
        location: {},
        team: color
    }

    //Y location depends on the colour and
    //whether or not the piece is a pawn

    //white non-pawn
    if (color === "white" && type !== "pawn") {
        piece.location.y = 0
    }
    //is a white pawn
    else if (color === "white") {
        piece.location.y = 1
    }
    //Black non-pawn piece
    else if (type !== "pawn") {
        piece.location.y = 7
    }
    //Black pawn
    else {
        piece.location.y = 6
    }

    //X location depends on the type of the piece
    //and which position piece it is
    piece.location.x = PieceXStartingValues[type]
        + PieceChangeXValues[type] * position

    //return the piece
    return piece;
}

export default CreateChessPiece