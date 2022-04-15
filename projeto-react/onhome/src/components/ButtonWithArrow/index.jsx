import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import './style.css'


const ButtonWithArrow = ({ value, style }) => {
    // pfv vai agr
    return (
        <button 
            className="button-with-arrow" 
            style={style} >
            {value}
            <ArrowRightAltIcon 
                sx={{ fontSize: '48px', color: '#7879F1' }}
            />
        </button>
    )
}

export default ButtonWithArrow;