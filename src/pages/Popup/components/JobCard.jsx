import moment from 'moment';
import React, { Component } from 'react';
import he from 'he';
import { useState } from 'react';
const JobCard = ({ item }) => {
  const [readMore, setReadMore] = useState(false);
  const handleToggleModal = (link) => {
    // setShowModal(!showModal);
    window.open(link);
  };

  const handleHTMLcoding = (text) => {
    return he.decode(text);
  };

  const truncate = (string) => {
    const decodedText = handleHTMLcoding(string);
    return decodedText.length > 190
      ? decodedText.substring(0, 190) + ' ...'
      : decodedText;
  };
  return (
    <div className={`px-[32px] pb-[16px]`}>
      <div
        className={`${
          item['__seen'] === true ? 'border-[#000]' : 'border-[#66DC78]'
        } border  rounded-[4px] p-[16px]`}
      >
        <div className="bg-[#282828] rounded-[4px] p-[16px] ">
          <div className="flex text-[16px] font-bold items-center justify-between text-[#999999] ">
            <span>
              <span className=" capitalize">{moment(item.date).fromNow()}</span>
              {/* Acceptance feature will be implemented way in the future */}
              {/* <span>{item.acceptance} </span>%  Acceptance */}
            </span>
            {item.budget && (
              <span className=" capitalize">
                Budget: <span>{item.budget}</span>
              </span>
            )}
            {item.hourly && (
              <span className=" capitalize">
                hourly Rate : <span>{item.hourly}</span>
              </span>
            )}
          </div>
          <h1 className=" text-[24px] font-medium max-w-[450px] my-[16px] ">
            {handleHTMLcoding(item.title)}
          </h1>
          <p className=" text-[#999999] text-[16px] leading-[32px] mb-[16px]   ">
            {readMore
              ? handleHTMLcoding(item.description)
              : truncate(item?.description)}
          </p>

          <div
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <button
              onClick={() => handleToggleModal(item.link)}
              className="font-bold text-[#66DC78] text-[16px]"
            >
              {' '}
              View Job Posting{' '}
            </button>
            {item?.description.length > 190 ? (
              <button
                onClick={() => setReadMore(!readMore)}
                style={{ float: 'right' }}
                className="font-bold text-[#66DC78] text-[16px]"
              >
                {readMore ? 'Show less' : 'Show More'}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
