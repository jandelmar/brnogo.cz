import React, {Component} from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap'

const items = [
    {
        src: `${__dirname}photos/Go-jidlo-2.jpg`,
        altText: 1
    },
    {
        src: `${__dirname}photos/Go-interier-11.jpg`,
        altText: 2,
    },
    {
        src: `${__dirname}photos/Go-interier-5.jpg`,
        altText: 3
    },
    {
        src: `${__dirname}photos/Go-interier-9.jpg`,
        altText: 4
    },
    {
        src: `${__dirname}photos/Go-interier-0.jpg`,
        altText: 5
    }
]

class MyCarousel extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
      const { activeIndex } = this.state;
  
      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} />
          </CarouselItem>
        )
      })
  
      return (
        <Carousel
          activeIndex={activeIndex}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselCaption captionHeader="Vietnamese street food. Pravá vietnamská kuchyně." />
        </Carousel>
      )
    }
  }
  
  export default MyCarousel