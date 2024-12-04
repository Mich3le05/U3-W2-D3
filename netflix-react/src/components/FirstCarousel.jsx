import { Component } from 'react'
import { Carousel, Row, Col } from 'react-bootstrap'
import Loading from './Loading'
import Error from './Error'

class FirstCarousel extends Component {
  state = {
    carouselItems: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=cd12fbd2&s=Harry Potter`
      )
      if (response.ok) {
        const data = await response.json()
        if (data.Search) {
          this.setState({
            carouselItems: data.Search,
            isLoading: false,
            isError: false,
          })
        }
      } else {
        this.setState({ isLoading: false, isError: true })
      }
    } catch (error) {
      console.error('Error', error)
      this.setState({ isLoading: false, isError: true })
    }
  }

  render() {
    const { carouselItems, isLoading, isError } = this.state

    const element = []
    for (let i = 0; i < carouselItems.length; i += 6) {
      element.push(carouselItems.slice(i, i + 6))
    }

    return (
      <div className="bg-color px-3 text-white pb-3">
        <h4 className="mb-4">Trending Now</h4>

        {isLoading && <Loading />}
        {isError && <Error />}

        {!isLoading && !isError && (
          <Carousel
            interval={3000}
            controls={true}
            indicators={true}
            slide={true}
          >
            {element.map((film, index) => (
              <Carousel.Item key={index}>
                <Row className="justify-content-center">
                  {film.map((item, index) => (
                    <Col key={index} xs={6} sm={6} md={4} lg={2}>
                      <div className="text-center img">
                        <img
                          src={item.Poster}
                          alt={item.Title}
                          className="img-fluid h-auto mw-100"
                        />
                        <h5>{item.Title}</h5>
                        <p>{item.Year}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
    )
  }
}

export default FirstCarousel
