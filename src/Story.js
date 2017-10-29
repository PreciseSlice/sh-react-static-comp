import React from 'react';
import Button from './Button';
import './Story.css';

const Story = (props) => {
  return (
    <div className='Story'>
      <img className ='story-img'src={props.img} />
      <div className='story-info'>
        <div>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
          <img src={props.authImg} />
          <p>{props.authName}</p>
          <p>{props.estTime}</p>
      </div>
    </div>
  )
}

export default Story;
