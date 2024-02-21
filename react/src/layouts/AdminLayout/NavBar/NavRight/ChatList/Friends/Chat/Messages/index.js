import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const images = require.context('../../../../../../../../assets/images/user', true);

const Messages = ({ message, photo, name }) => {
  let image = '';
  if (message.type) {
    image = (
      <Link to="#" className="media-left photo-table">
        <img className="media-object img-radius img-radius m-t-5" src={images(`./${photo}`)} alt={name} />
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
      <Card className="media chat-messages">
        {image}
        <Card.Body className={msgClass.join(' ')}>
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
