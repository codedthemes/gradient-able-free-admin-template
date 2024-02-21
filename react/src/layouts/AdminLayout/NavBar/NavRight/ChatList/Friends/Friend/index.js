import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const images = require.context('../../../../../../../assets/images/user', true);

const Friend = ({ data, activeId, clicked }) => {
  let photo = images(`./${data.photo}`);
  let timeClass = ['d-block'];
  if (data.status) {
    timeClass = [...timeClass, 'text-c-green'];
  } else {
    timeClass = [...timeClass, 'text-muted'];
  }

  let time = '';
  if (data.time) {
    time = <small className={timeClass.join(' ')}>{data.time}</small>;
  }

  let newFriend = '';
  if (data.new) {
    newFriend = <div className="live-status">{data.new}</div>;
  }

  return (
    <React.Fragment>
      <Card className={activeId === data.id ? 'userlist-box active' : 'userlist-box'} onClick={clicked}>
        <Link to="#" className="media-left">
          {' '}
          <img className="media-object img-radius" src={photo} alt={data.name} />
          {newFriend}
        </Link>
        <Card.Body>
          <h6 className="chat-header">
            {data.name}
            {time}
          </h6>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default Friend;
