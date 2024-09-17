import React from 'react';
import './SubscriptionPlans.css'; 

const SubscriptionPlans = () => {
  const plans = [
    {
      id: 1,
      title: 'Gold Subscription',
      price: '$100.00',
      frequency: 'Every month',
      description: 'Get anytime access to our growing collection of classes, workshops, and exclusive content. New items added every month.',
      image: 'https://www.elcom.com.vn/storage/uploads/images/QgKpr7joU3h2xW2IzECFll5Bn8WqlWplvPqLSuBf.jpg',
    },
    {
      id: 2,
      title: 'Gold Subscription',
      price: '$100.00',
      frequency: 'Every month',
      description: 'Get anytime access to our growing collection of classes, workshops, and exclusive content. New items added every month.',
      image: 'https://image.vietstock.vn/2024/08/28/bitcoin0-12123_934971.png',
    },
    {
      id: 3,
      title: 'Gold Subscription',
      price: '$100.00',
      frequency: 'Every month',
      description: 'Get anytime access to our growing collection of classes, workshops, and exclusive content. New items added every month.',
      image: 'https://www.elcom.com.vn/storage/uploads/images/hx1vspgHqgxnp40vXCisiov2dthWdwxmlIxu15AJ.jpg',
    },
  ];

  return (
    <div className="subscription-container">
      <h1>Choose your plan</h1>
      <div className="plans-grid">
        {plans.map(plan => (
          <div className="plan-card" key={plan.id}>
            <img src={plan.image} alt={plan.title} className="plan-image" />
            <div className="plan-details">
              <h2>{plan.title}</h2>
              <h3>{plan.price}</h3>
              <p>{plan.frequency}</p>
              <p>{plan.description}</p>
              <button className="sign-up-button">Sign Up</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
