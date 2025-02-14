import React from 'react';
import Subject from '../Subject';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PrevArrow, NextArrow } from '../CustomArrow';
import maths from '../../../../images/G12-math.jpeg';
import Agriculture from '../../../../images/G12-Agri.jpeg';
import english from '../../../../images/G12-English.jpeg';
import Geography from '../../../../images/G12-Geo.jpeg';
import Biology from '../../../../images/G12-Biology.png';
import Chemistry from '../../../../images/G12-Chemistry.png';
import History from '../../../../images/G12-History.jpeg';
import it from '../../../../images/G12-IT.jpeg';
import Physics from '../../../../images/G12-Physics.jpeg';
import Economics from '../../../../images/G12-Economics.jpeg';

const Grade12 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="grade">
      <p>
        Welcome to the Grade 12 Learning Materials page! Here, you'll find a
        comprehensive collection of essential textbooks designed to support your
        academic journey across various subjects. Whether you're studying in the
        classroom or at home, these resources will help you enhance your
        understanding and expand your knowledge. Dive into the diverse and
        challenging topics of Grade 12 and let these materials guide you towards
        achieving your academic goals and excelling in your studies.
      </p>

      <h2>Lists of Grade 12 Textbooks</h2>
      <div className="class-cont">
        <Slider {...settings}>
          <Link to="/resources/highschool/grade12/agriculture">
            <Subject
              number={1}
              title={'Agriculture'}
              image={Agriculture}
              grade={12}
              subject={'Agriculture'}
            />
          </Link>
          <Link to="/resources/highschool/grade12/english">
            <Subject
              number={2}
              title={'English'}
              image={english}
              grade={12}
              subject={'English'}
            />
          </Link>
          <Link to="/resources/highschool/grade12/maths">
            <Subject
              number={3}
              title={'Mathematics'}
              image={maths}
              grade={12}
              subject={'Mathematics'}
            />
          </Link>
          <Link to="/resources/highschool/grade12/geography">
            <Subject
              number={4}
              title={'Geography'}
              image={Geography}
              grade={12}
              subject={'Geography'}
            />
          </Link>
          <Link to="/resources/highschool/grade12/biology">
            <Subject
              number={5}
              title={'Biology'}
              image={Biology}
              grade={12}
              subject={'Biology'}
            />
          </Link>
          <Link to="/resources/highschool/grade12/history">
            <Subject
              number={6}
              title={'History'}
              image={History}
              grade={12}
              subject={'History'}
            />
          </Link>
          <Link to="/resources/highschool/grade12/it">
            <Subject
              number={7}
              title={'IT'}
              image={it}
              grade={12}
              subject={'IT'}
            />
          </Link>
          <Link to="/resources/highschool/grade12/chemistry">
            <Subject
              number={8}
              title={'Chemistry'}
              image={Chemistry}
              grade={12}
              subject={'Chemistry'}
            />
          </Link>
          <Link to="/resources/highschool/grade12/physics">
            <Subject
              number={9}
              title={'Physics'}
              image={Physics}
              grade={12}
              subject={'Physics'}
            />
          </Link>
          <Link to="/resources/highschool/grade12/economics">
            <Subject
              number={10}
              title={'Economics'}
              image={Economics}
              grade={12}
              subject={'Economics'}
            />
          </Link>
        </Slider>
      </div>
    </div>
  );
};

export default Grade12;
