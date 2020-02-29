import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from '../audio-player';
import Arrow from '../arrow';

import './bird-details.scss';

const Card = ({ title, latinName, desc, audioSrc, imgSrc }) => (
  <div className="row__child bird-details">
    <img className="bird-details__img" src={imgSrc} alt="bird" />
    <div className="bird-details__info">
      <h3 className="bird-details__title">{title}</h3>
      <p className="bird-details__latin-name">{latinName}</p>
      <AudioPlayer url={audioSrc} isPause={false} />
    </div>
    <div className="bird-details__desc">{desc}</div>
  </div>
);

const BirdDetails = ({ isChosen, details, imgSrc }) => {
  return isChosen && details ? (
    <Card
      title={details.name}
      latinName={details.species}
      desc={details.description}
      audioSrc={details.audioUrl}
      imgSrc={imgSrc}
    />
  ) : (
    <Arrow />
  );
};

export default BirdDetails;

Card.defaultProps = {
  title: '',
  latinName: '',
  desc: '',
  audioSrc: '/',
  // eslint-disable-next-line global-require
  imgSrc: require('./imgs/placeholder.jpg').default
};

Card.propTypes = {
  title: PropTypes.string,
  latinName: PropTypes.string,
  desc: PropTypes.string,
  audioSrc: PropTypes.string,
  imgSrc: PropTypes.string
};

BirdDetails.defaultProps = {
  isChosen: null,
  details: {},
  // eslint-disable-next-line global-require
  imgSrc: require('./imgs/placeholder.jpg').default
};

BirdDetails.propTypes = {
  isChosen: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  details: PropTypes.instanceOf(Object),
  imgSrc: PropTypes.string
};
