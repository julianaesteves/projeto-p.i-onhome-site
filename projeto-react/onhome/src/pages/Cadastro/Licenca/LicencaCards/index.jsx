import "./style.css"

const LicencaCards = ({ cardText }) => {
    return (
        <div className="licenca-cardContainer">
                <div className="licenca-gradientCard">
                    {cardText}
                </div>
        </div>
    )
}

export default LicencaCards
