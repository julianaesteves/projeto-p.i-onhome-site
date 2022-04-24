import './style.css';

const Message = ({ message, radius }) => (
    <div className="home-graph-message">
        <div className="home-content-image">
            <img src={`${message.icon}`} style={{ borderRadius: radius }} />
        </div>
        <div className="home-graph-content">
            <div className="home-content-title">
                <p>{message.author}</p>
            </div>
            <div className="home-content-description">
                <p>{message.content}</p>
            </div>
        </div>
    </div>
);

export default Message;