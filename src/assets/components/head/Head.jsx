import coin from '../../img/coin.png'
import './head.css'


export function Head({ tap, power, lvl }) {
    return (
        <>
            <div className="title">
                <h1>Veranix <span>Coin</span></h1>
            </div>
            <header>
                <div className="tap">
                    <h4>Earn per Tap</h4>
                    <p><img src={coin} alt="" /> +{tap}</p>
                </div>
                <div className="profit">
                    <h4>Profit per hours</h4>
                    <p><img src={coin} alt="" /> +7K</p>
                </div>
            </header>
        </>
    )
}