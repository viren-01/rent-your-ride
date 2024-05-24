import BookCarModal from "./common/BookCarModal";
// import '../css/BookCar.css';

export default function BookCar(props) {
    let { show, setShow } = props
    return (
        <BookCarModal isOpen={show} setShow={setShow} />
    )
}