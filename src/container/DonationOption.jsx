import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import './DonationOption.css';

const DonationOption = ({ title, details }) => (
  <div className="donation-box">
    <div className="donation-header">
      <h3>{title}</h3>
    </div>
    {details.map((detail, index) => (
      <div className="donation-detail" key={index}>
        <h4>
          <span className="icon"><FontAwesomeIcon icon={faBolt} /></span>
          {detail.heading}
        </h4>
        <p>{detail.text}</p>
      </div>
    ))}
  </div>
);

const DonateePage = () => {
  const donationOptions = [
    {
      title: 'One-Time Donation',
      details: [
        { heading: 'Amount', text: 'You can donate any amount you like, but we recommend a minimum donation of $25.' },
        { heading: 'Processing', text: 'Your donation will be processed securely through our website or by phone.' },
        { heading: 'Receipt', text: 'You will receive a tax-deductible receipt for your donation via email within 24 hours.' }
      ]
    },
    {
      title: 'Monthly Giving',
      details: [
        { heading: 'Amount', text: 'You can choose to donate any amount you like, but we recommend a minimum monthly donation of $10.' },
        { heading: 'Automatic Withdrawal', text: 'Your donation will be automatically withdrawn each month on the same day.' },
        { heading: 'Benefits', text: 'Monthly donors receive exclusive benefits, such as early access to events and discounts.' }
      ]
    },
    {
      title: 'Corporate Donations',
      details: [
        { heading: 'Size', text: 'We welcome corporate donations of all sizes.' },
        { heading: 'Honor', text: 'Your donation can be made in honor of an employee, customer, or client.' },
        { heading: 'Appreciation', text: 'We can provide you with a letter of appreciation for your donation.' }
      ]
    },
    {
      title: 'Legacy Giving',
      details: [
        { heading: 'Will or Trust', text: 'You can include ForHelp in your will or trust.' },
        { heading: 'Specific Amount', text: 'You can designate a specific amount of money or property to ForHelp.' },
        { heading: 'Life Insurance', text: 'You can name ForHelp as a beneficiary of your life insurance policy.' }
      ]
    }
  ];

  return (
    <div className="donation-container">
      {donationOptions.map((option, index) => (
        <DonationOption key={index} title={option.title} details={option.details} />
      ))}
    </div>
  );
};

export default DonateePage;
