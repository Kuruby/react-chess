import Chessboard from '../components/chessboard'
import LibPieceCollection from '../lib/lib_piece_collection'
import PieceCollection from '../components/piece_collection'

export default () => (<Chessboard>
    <PieceCollection
        collection={LibPieceCollection.CreateStandardPieceCollection()} />

</Chessboard>)