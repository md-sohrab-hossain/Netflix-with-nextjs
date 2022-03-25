import React from 'react';

export interface footerProps {
  title: string;
  publishTime: string;
  description?: string;
  channelTitle?: string;
  viewCount?: string;
}

const Footer: React.FC<footerProps> = ({ publishTime, title, description, channelTitle, viewCount }) => {
  return (
    <div className="a-footer">
      <div className="a-footer__details">
        <p className="a-footer__details--publish-time">{publishTime}</p>
        <p className="a-footer__details--title">{title}</p>
        <p className="a-footer__details--description">{description}</p>
      </div>
      <div className="a-footer__info">
        <p className="a-footer__info--cast">
          <span>Cast: </span>
          <span>{channelTitle}</span>
        </p>
        <p className="a-footer__info--view">
          <span>View Count: </span>
          <span>{viewCount}</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
