import CreateChessPiece from "./create_chess_piece"
import { TotalPieces } from './meta_piece'

//Is a collection of chess pieces
//can apply an action and see if any is it (pending movement, in a space)
//Can select a specific one
//ofc, add and remove
const LibPieceCollection = {
    CreateOneSide: (color) => {
        var pieces = []

        for (var piece in TotalPieces) {
            for (var i = 0; i < TotalPieces[piece]; i++) {
                pieces.push(CreateChessPiece(color, piece, i))
            }
        }
        return pieces
    },
    CreateStandardPieceCollection: () => {
        var collection = {}
        collection.white = LibPieceCollection.CreateOneSide("white")
        collection.black = LibPieceCollection.CreateOneSide("black")
        return collection
    },
    AnyPieceAt: (collection, location) => {
        for (var side of collection) {
            for (var piece of side) {
                if (piece.location == location) {
                    return true
                }
            }
        }
        return false
    },
    AnyPieceMoving: (collection) => {
        for (var side of collection) {
            for (var piece of side) {
                if (piece.pendingMovement) {
                    return true
                }
            }
        }
        return false
    }
}

export default LibPieceCollection