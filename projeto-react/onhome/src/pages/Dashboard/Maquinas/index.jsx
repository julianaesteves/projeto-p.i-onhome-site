import './style.css'
const Maquinas = () => {
    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div className='border-gradient' style={{ flex: 1, gap: 20, display: 'flex',flexDirection: 'column' }}>
                <div className='maquinas-header container border-gradient'>
                    <div className='maquinas-title'>Setor X</div>
                    <div className='maquinas-legend'>
                        <ul>
                            <li><i></i>Desligada</li>
                            <li><i></i>Ideal</li>
                            <li><i></i>Regular</li>
                            <li><i></i>Crítico</li>
                        </ul>
                        <ul>
                            <li><i></i>Em respouso</li>
                            <li><i></i>Bom</li>
                            <li><i></i>Atenção</li>
                            <li><i></i>Emergência</li>
                        </ul>
                    </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
                    <div className='border-gradient dash-item'>
                        <div>1</div>
                        <img src="./icons/emergency.svg" alt="" />
                    </div>
                    <div className='border-gradient dash-item'>
                        <div>1</div>
                        <img src="./icons/emergency.svg" alt="" />
                    </div>
                    <div className='border-gradient dash-item'>
                        <div>1</div>
                        <img src="./icons/emergency.svg" alt="" />
                    </div>
                    <div className='border-gradient dash-item'>
                        <div>1</div>
                        <img src="./icons/emergency.svg" alt="" />
                    </div>
                    <div className='border-gradient dash-item'>
                        <div>
                            <p>1</p>
                            <img src=""></img>
                        </div>
                        <img src="./icons/emergency.svg" alt="" />
                    </div>
                    <div className='border-gradient dash-item'>
                        <div>
                            <p>1</p>
                            <img src=""></img>
                        </div>
                        <img src="./icons/emergency.svg" alt="" />
                    </div>
                    <div className='border-gradient dash-item'>
                        <div>
                            <p>1</p>
                            <img src=""></img>
                        </div>
                        <img src="./icons/emergency.svg" alt="" />
                    </div>
                    <div className='border-gradient dash-item'>
                        <div>
                            <p>1</p>
                            <img src=""></img>
                        </div>
                        <img src="./icons/emergency.svg" alt="" />
                    </div>
                    <div className='border-gradient dash-item'>
                        <div>
                            <p>1</p>
                            <img src=""></img>
                        </div>
                        <img src="./icons/emergency.svg" alt="" />
                    </div>
                    <div className='border-gradient dash-item'>
                        <div>
                            <p>1</p>
                            <img src=""></img>
                        </div>
                        <img src="./icons/emergency.svg" alt="" />
                    </div>
                    <div className='border-gradient dash-item'>
                        <div>
                            <p>1</p>
                            <img src=""></img>
                        </div>
                        <img src="./icons/emergency.svg" alt="" />
                    </div>
                    <div className='border-gradient dash-item'>
                        <div>
                            <p>1</p>
                            <img src=""></img>
                        </div>
                        <img src="./icons/emergency.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Maquinas;