import React from 'react'
import useHistory from 'react-router-dom'
import Carousel from 'react-multi-carousel';

const Home = () => {
    const history = useHistory()

    const images = [

    ]

    return (
        <>
            <Header
                name={"Home"}
                onClick1={() => goToCreateTrip(history)}
                title1={"Criar Viagem"}
                onClick2={() => goToList(history)}
                title2={"Viagens"}
            />
            <Main>
                <h1>Alguns dos lugares mais visitados</h1>
                <DivCarousel>
                    <Carousel
                        responsive={responsive}
                        {...settings}
                    >
                        {images.map(i => {
                            return (
                                <DivMap key={i.image} imagem={i.image}>
                                    <h2>{i.title}</h2>
                                </DivMap>
                            )
                        })}
                    </Carousel>
                </DivCarousel>
            </Main>
            <Footer />
        </>
    )
}
export default Home;