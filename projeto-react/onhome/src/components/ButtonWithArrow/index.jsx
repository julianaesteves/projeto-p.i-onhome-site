import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import './style.css'


const ButtonWithArrow = ({style, children, onClick}) => {
    return (
        <button 
        onClick={onClick}
            className="button-with-arrow" 
            style={style}>{children}
            <ArrowRightAltIcon 
                sx={{ fontSize: '48px', color: '#7879F1' }}
            />
        </button>
    )
}

export default ButtonWithArrow;