import React from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import { Card } from 'react-bootstrap';

// ==============================|| MESSAGE ||============================== //

const Messages = ({ message, photo, name }) => {
  let image = '';
  if (message.type) {
    image = (
      <Link to="#" className="media-left photo-table ps-2">
        <img className="media-object img-radius img-radius m-t-5" src={photo} alt={name} />
      </Link>
    );
  }

  let msgClass = [];
  if (message.type) {
    msgClass = [...msgClass, 'chat-menu-content'];
  } else {
    msgClass = [...msgClass, 'chat-menu-reply text-muted'];
  }

  return (
    <React.Fragment>
      <Card
        className="d-flex align-items-start shadow-none mb-0 p-0 chat-messages"
        style={{ flexDirection: 'row', backgroundColor: 'unset' }}
      >
        {image}
        <Card.Body className={msgClass.join(' ')} style={{ padding: 0 }}>
          <div className="">
            <p className="chat-cont">{message.msg}</p>
          </div>
          <p className="chat-time">{message.time}</p>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default Messages;
