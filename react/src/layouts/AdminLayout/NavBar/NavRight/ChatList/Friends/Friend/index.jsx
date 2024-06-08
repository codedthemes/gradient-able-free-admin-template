import React from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import { Card } from 'react-bootstrap';

// ==============================|| FRIEND ||============================== //

const Friend = ({ data, activeId, clicked }) => {
  let timeClass = ['d-block f-w-400'];
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
      {/* eslint-disable-next-line */}
      <Card
        className={activeId === data.id ? 'userlist-box mb-0 shadow-none active' : 'userlist-box mb-0 shadow-none'}
        style={{ flexDirection: 'row', backgroundColor: 'unset' }}
        onClick={clicked}
        onKeyDown={clicked}
      >
        <Link to="#" className="media-left">
          {' '}
          <img className="media-object img-radius" src={data.photo} alt={data.name} />
          {newFriend}
        </Link>
        <Card.Body className="p-0">
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
