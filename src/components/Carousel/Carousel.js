import React, { useStateW, useRef } from 'react';
import styled, { css } from 'styled-components';

const arrowStyle = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 60px;
  width: 30px;
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ArrowLeft = styled.div`
  ${arrowStyle};
  left: 0;
  border-radius: 0 60px 60px 0;
  background: rgba(0, 0, 0, 0.05);
`;

const TriangleLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-right: 12px solid rgba(0, 0, 0, 0.5);
  border-bottom: 6px solid transparent;
  transform: translateX(-3px);
`;

const TriangleRight = styled.div`
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-left: 12px solid rgba(0, 0, 0, 0.5);
  border-bottom: 6px solid transparent;
  transform: translateX(3px);
`;

const ArrowRight = styled.div`
  ${arrowStyle};
  right: 0;
  border-radius: 60px 0 0 60px;
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDown: false,
      startX: null,
      transLeftOffset: null,
      dragSpeed: props.dragSpeed,
    };
    this.cRef = React.createRef();
  }

  handleMouseDown = (e) => {
    const carousel = this.cRef.current;
    e.persist();

    carousel.classList.add('active');

    const _startX = e.pageX - carousel.offsetLeft;
    const _transLeftOffset = this.giveMeIntValOf(carousel.firstChild.style.transform);
    this.setState(
      {
        isDown: true,
        startX: _startX,
        transLeftOffset: _transLeftOffset,
      },
      () => {
        const { startX, transLeftOffset, dragSpeed } = this.state;

        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * dragSpeed;

        carousel.firstChild.style.cssText = `
        transform: translateX(${transLeftOffset + walk}px);
        transition: transform 0.0s ease-in-out;
      `;
      },
    );
  };

  handleMouseLeave = () => {
    this.handleSnap();
  };

  handleMouseUp = () => {
    this.handleSnap();
  };

  handleMouseMove = (e, arrow = 0) => {
    const { isDown, startX, transLeftOffset, dragSpeed } = this.state;
    e.preventDefault();
    const carousel = this.cRef.current;
    const x = e.pageX - carousel.offsetLeft;

    if (!isDown) return;
    const walk = (x - startX) * dragSpeed;
    carousel.firstChild.style.transform = `translateX(${transLeftOffset + walk}px)`;
  };

  handleArrowClick = (e, offset) => {
    const { transLeftOffset, dragSpeed } = this.state;
    const carousel = this.cRef.current;
    carousel.firstChild.style = `
    transform: translateX(${transLeftOffset + offset}px);
    transition: 0.5s cubic-bezier(.25,.72,.51,.96);
    `;

    this.handleSnap();
  };

  giveMeIntValOf = (el) => {
    return parseInt(el.replace('translateX(', '').replace('px)', ''));
  };

  handleSnap = () => {
    const { _data, itemWidth } = this.props;
    const carousel = this.cRef.current;

    this.setState({ isDown: false });

    carousel.classList.remove('active');

    const end = _data.length * itemWidth - 270;

    const tempThresholdOffset = this.giveMeIntValOf(carousel.firstChild.style.transform);

    if (tempThresholdOffset < 447 || tempThresholdOffset > end) {
      this.setState({ isDown: false });
      carousel.firstChild.style.cssText = `
        transform: translateX(${tempThresholdOffset < 447 ? 447 : end}px);
        transition: transform 0.5s cubic-bezier(.25,.72,.51,.96);
      `;
    }
  };

  render() {
    return (
      <div
        ref={this.cRef}
        onMouseDown={this.handleMouseDown}
        onMouseLeave={this.handleMouseLeave}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}
      >
        <div style={{ transform: 'translateX(2610px)' }}>{this.props.children}</div>
        <ArrowRight>
          <TriangleRight onClick={(e) => this.handleArrowClick(e, -300)} />
        </ArrowRight>
        <ArrowLeft>
          <TriangleLeft onClick={(e) => this.handleArrowClick(e, 300)} />
        </ArrowLeft>
      </div>
    );
  }
}

export default Carousel;
