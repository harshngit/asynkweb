function Arrow(props) {
  const { onClick, icon } = props;
  return (
    <div onClick={onClick} className="slick-arrow">
      <i className={icon}></i>
    </div>
  );
}
export const sliderProps = {
  testimonial: {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
    nextArrow: <Arrow icon="fa-light fa-chevron-right nextArrow" />,
    prevArrow: <Arrow icon="fa-light fa-chevron-left prevArrow" />,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
        },
      },
    ],
  },
  portfolio: {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    nextArrow: <Arrow icon="fa-light fa-chevron-right nextArrow" />,
    prevArrow: <Arrow icon="fa-light fa-chevron-left prevArrow" />,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  },
};
