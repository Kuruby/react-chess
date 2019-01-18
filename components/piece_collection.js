import React from 'react'
import ChessPiece from './chess_piece'

//renders a collection of chess pieces
class PieceCollection extends React.Component {

    render() {
        var collection = this.props.collection

        return (<>
            {
                collection.white.map((piece) => (
                    <ChessPiece piece={piece} key={piece.toString()} />
                ))
            }
            {
                collection.black.map((piece) => (
                    <ChessPiece piece={piece} key={piece.toString()} />
                ))
            }
        </>)
    }
}

export default PieceCollection