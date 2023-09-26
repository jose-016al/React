const NumRom = (props) => {

    const romanNumber = toRomanNumeral(props.num);

    function toRomanNumeral(num) {
        const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];

        if (num < 1 || num > 6) {
            return num;
        }

        return romanNumerals[num - 1];
    }

    return(<>{romanNumber}</>);
};

export default NumRom;
