import React from 'react'
import ChessPiece from './chess_piece'

//renders a collection of chess pieces
class PieceCollection extends React.Component {

    render() {
        var collection = this.props.collection

        return (<>
            {
                collection.white.map((piece) => (
                    <ChessPiece piece={piece} />
                ))
            }
            {
                collection.black.map((piece) => (
                    <ChessPiece piece={piece} />
                ))
            }
        </>)
    }
}

export default PieceCollection