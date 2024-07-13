import React, { useContext, useState, useEffect } from 'react';
import NavBar from '../layouts/NavBar';
import Godofwar from '../asset/image/god-of-war-name.png';
import ButtonComponent from '../components/ButtonComponent';
import Leftarrow from '../asset/icon/leftArrow.jsx';
import Windows from '../asset/icon/windows.jsx';
import Leftarrowblack from '../asset/icon/leftarrowblack.jsx';
import Plus from '../asset/icon/plus.jsx';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Game from '../data/Data.jsx';
import Hero3 from '../asset/image/image21.png';
import Footer from '../layouts/Footer.jsx';
import { CartContext } from '../contex/CartContext.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Icon } from "@iconify/react";

function Home() {
    const { cartItems, addToCart } = useContext(CartContext);

    const handleAddToCart = (item) => {
        const isInCart = cartItems.find(cartItem => cartItem.id === item.id);
        if (isInCart) {
            toast.error("This item is already in your cart!");
            return;
        }

        addToCart(item);
        toast.success("Item added to cart!");
    };

    const [visibleCount, setVisibleCount] = useState(4);
    const [currentGameIndex, setCurrentGameIndex] = useState(0);

    const handleSlideChange = (index) => {
        setCurrentGameIndex(index);
    };

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 4);
    };

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 878,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        // appendDots: dots => (
        //     <div style={{
        //         position: 'absolute',
        //         top: '-30px',
        //         right: '7px',
        //     }}>
        //         <ul style={{ margin: '0px' }}> {dots.slice(0, 3)} </ul>
        //     </div>
        // ),
        // customPaging: i => (
        //     <div
        //         style={{
        //             width: '10px',
        //             height: '10px',
        //             backgroundColor: 'blue',
        //             borderRadius: '50%',
        //             display: 'inline-block',
        //             margin: '0 5px'
        //         }}
        //     />
        // )
    };

    // Scroll up button logic
    const [showScroll, setShowScroll] = useState(false);

    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section>
            <ToastContainer />
            <div className='home-background'>
                <NavBar />
                <div className="container">
                    <div className="home-head">
                        <img src={Godofwar} alt="text" />
                        <p>God of War é uma série de jogos eletrônicos de ação e aventura baseada nas mitologias grega e nórdica. Estreando em 2005, a série tornou-se um título emblemático para a marca PlayStation, e Kratos é um dos seus personagens mais populares. </p>
                        <div className="home-btn">
                            <ButtonComponent
                                customClass="home-1-btn"
                                label={
                                    <>
                                        <span className=''>Buy in pre-sale</span>
                                        <Leftarrow />
                                    </>
                                }
                                width={"200px"}
                                height={"52px"}
                            />
                            <ButtonComponent
                                customClass="home-1-btn"
                                label={
                                    <>
                                        <Plus />
                                        <span className=''>To the Wish List</span>
                                    </>
                                }
                                width={"200px"}
                                height={"52px"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div id="game-sale-head" className="game-sale-head">
                <div className="container">
                    <div className="game-sale-1">
                        <h1>Games on sale</h1>
                        <div className="game-sale-1sub">
                            <p>New releases</p>
                            <p>Best sellers</p>
                            <p>Shortly</p>
                        </div>
                        <h2>Discover more offers</h2>
                    </div>
                    <div className="slick-1">
                        <Slider {...settings} afterChange={handleSlideChange}>
                            {Game.map((data, index) => (
                                <div className="box" key={index}>
                                    <img className='thumbnail' src={data.Image} alt={`Game ${index + 1}`} style={{ width: '100%', height: '234px' }} />
                                    <div className="game-text">
                                        <div className="game-text1">
                                            <h3>{data.name}</h3>
                                            <p>R$ 5,99</p>
                                            <h4>{data.rate}</h4>
                                        </div>
                                        <div className="game-text2">
                                            <ButtonComponent
                                                customClass="game1-btn"
                                                label={<span>{data.text}</span>}
                                                width={"72px"}
                                                height={"17px"}
                                            />
                                        </div>
                                    </div>
                                    <div className="btn-addtocart">
                                        <ButtonComponent
                                            customClass="game-btn"
                                            label={<span>Add to Cart</span>}
                                            width={"72px"}
                                            height={"17px"}
                                            onClick={() => handleAddToCart(data)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="main-details">
                        <img className='details-image' src={Game[currentGameIndex].Image} alt={`Game ${currentGameIndex + 1}`} style={{ width: '386px', height: '236px' }} />
                        <div className="details-text">
                            <h4>{Game[currentGameIndex].name}</h4>
                            <p>{Game[currentGameIndex].description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="browes-head">
                <div className="container">
                    <div className="browse-1">
                        <h1>Browse Epic</h1>
                        <div className="browse-1sub">
                            <p>Recently updated</p>
                            <p>More popular</p>
                        </div>
                        <h2>Still don't know epic?</h2>
                    </div>
                    <div className="line"></div>
                    <div className="browse-add-to-card-head">
                        <div className="browse-add-to-card">
                            {Game.slice(0, visibleCount).map((data, index) => (
                                <div className="box-head" key={index}>
                                    <div className="box-1">
                                        <div className='img-box'>
                                            <img className='thumbnail' src={data.Image} alt={`Game ${index + 1}`} style={{ width: '145px', height: '189px' }} />
                                        </div>
                                        <div className="browse-flex-1">
                                            <div className="browse-text">
                                                <div className="browse-text1">
                                                    <div>
                                                        <h3>{data.name}</h3>
                                                        <p>R$ 5,99</p>
                                                        <h4>{data.rate}</h4>
                                                    </div>
                                                    <div className="browse-text3">
                                                        <ButtonComponent
                                                            customClass="browse2-btn"
                                                            label={<><span>-60%</span></>}
                                                            width={"44px"}
                                                            height={"20px"}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="browse-text2">
                                                    <ButtonComponent
                                                        customClass="browse1-btn"
                                                        label={<><span>{data.text}</span></>}
                                                        width={"72px"}
                                                        height={"30px"}
                                                    />
                                                </div>
                                            </div>
                                            <div className="icon-windows">
                                                <Windows />
                                            </div>
                                        </div>
                                        <div className="btn-addtocart-2">
                                            <ButtonComponent
                                                customClass="game-btn"
                                                label={<span>Add to Cart</span>}
                                                width={"72px"}
                                                height={"17px"}
                                                onClick={() => handleAddToCart(data)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {visibleCount < Game.length && (
                            <div className="load-more">
                                <button onClick={loadMore} style={{ padding: '10px 20px', border: 'none', color: '#fff', cursor: 'pointer' }}>
                                    Load More
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Explore our catalog */}
            <div className="Exploreourcatalog-head">
                <div className="container">
                    <div className="Exploreourcatalog-1">
                        <div className="Exploreourcatalog-2">
                            <h2>Explore our catalog</h2>
                            <p>Search by genre, features, price and more to find your next favorite game.</p>
                            <ButtonComponent
                                customClass="explore-btn"
                                label={<span>KNOW MORE <Leftarrowblack /></span>}
                                width={"174px"}
                                height={"52px"}
                            />
                        </div>
                        <img className='explore-img' src={Hero3} alt="image" />
                    </div>
                </div>
            </div>

            {/* Explore our catalog */}
            <Footer />

            <div id="scroll-up" onClick={handleScrollUp} className={showScroll ? 'show-scroll' : ''}>
                <Icon icon="bi:arrow-up" width="30" height="30" />
            </div>
        </section>
    );
}

export default Home;
