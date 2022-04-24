import './style.css';

const Message = ({ radius }) => (
    <div className="home-graph-message">
        <div className="home-content-image">
            <img src="./images/grafico3.png" style={{ borderRadius: radius }} />
        </div>
        <div className="home-graph-content">
            <div className="home-content-title">
                <p>OnHome</p>
            </div>
            <div className="home-content-description">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut illum dolorem tempora unde quo laboriosam. Nihil mollitia corporis aliquam!</p>
            </div>
        </div>
    </div>
);

export default Message;