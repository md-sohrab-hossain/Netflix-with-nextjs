import React from 'react';

export interface footerProps {
  title: string;
  publishTime: string;
  description?: string;
  channelTitle: string;
  viewCount: number;
}

const Footer: React.FC<footerProps> = ({ publishTime, title, description, channelTitle, viewCount }) => {
  return (
    <div className="a-footer-modal">
      <div className="a-footer-modal__details">
        <p className="a-footer-modal__details--publish-time">{publishTime}</p>
        <p className="a-footer-modal__details--title">{title}</p>
        <p className="a-footer-modal__details--description">{description}</p>
      </div>
      <div className="a-footer-modal__info">
        <p className="a-footer-modal__info--cast">
          <span>Cast: </span>
          <span>{channelTitle}</span>
        </p>
        <p className="a-footer-modal__info--view">
          <span>View Count: </span>
          <span>{viewCount}</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
