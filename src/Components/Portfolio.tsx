import React from 'react';
import Swiper from 'swiper';
import './Portfolio.scss';
import 'swiper/swiper.scss'

class Portfolio extends React.Component {
    state = {
        opened: false
    }

    private projects = [
        {
            name: "Portfolio",
            card: "/assets/projects/portfolio_card.png",
        },
        {
            name: "ARE Website",
            card: "/assets/projects/arewebsite_card.png"
        },
        {
            name: "Pharaoh Sun",
            card: "/assets/projects/pharaohsun_card.jpg"
        },
        {
            name: "Wild Tiki",
            card: "/assets/projects/wildtiki_card.jpg"
        }
    ];

    openPortfolio() {
        let name = document.getElementById("name");
        if (!this.state.opened) {
            this.setState({opened: true});
            name?.classList.add("opened");
        }
        else {
            this.setState({ opened: false});
            name?.classList.remove("opened");
        }
    }

    componentDidUpdate() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let mySwiper = new Swiper('.swiper-container', {
            init: true,
            freeMode: true,
            initialSlide: 1,
            slidesPerView: "auto",
            spaceBetween: 50,
            centeredSlides: true,
        });
    }

    render() {

        let swiper;

        if(this.state.opened)
        {
            swiper =
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {this.projects.map((element, index) => {
                        return <div key={index}className="swiper-slide" augmented-ui="br-clip-x tl-clip-x bl-clip exe" style={{ backgroundImage: `url(${element.card})`, backgroundSize: "cover", backgroundPosition: "center"}}><h1>{element.name}</h1></div>
                    })}
                </div>
            </div>;
        }

        return (
            <React.Fragment>
                <div id="name" onClick={() => {this.openPortfolio()}}>CHRISTOPHER LACHANCE</div>
                {swiper}
            </React.Fragment>
        )
    }
}

export default Portfolio;