const Number = ({ value, label }) => {
    function leadingZero(num) {
        return String(num).padStart(2, "0");
    }
    return (
        <>
         <p className="number">{leadingZero(value[label])}</p>
         <p className="unit">{label}</p>
        </>
    );
}

export default Number;