import React from 'react'

const Features = () => {
    return (
        <div className="home-about-features d-f jc-sb container-p">
            <div className="about-features-item d-f align-center">
                <div><img src="/images/features1.png" alt="features1" /></div>
                <h4 className="features-item-title">Безкоштовна доставка</h4>
            </div>
            <div className="about-features-item d-f align-center">
                <div><img src="/images/features2.png" alt="features2" /></div>
                <h4 className="features-item-title">Безкоштовна збірка</h4>
            </div>
            <div className="about-features-item d-f align-center">
                <div><img src="/images/features3.png" alt="features3" /></div>
                <h4 className="features-item-title">Післягарантійне обслуговування</h4>
            </div>
            <div className="about-features-item d-f align-center">
                <div><img src="/images/features4.png" alt="features4" /></div>
                <h4 className="features-item-title">Знижки клієнтам</h4>
            </div>
        </div>
    )
}

export default Features