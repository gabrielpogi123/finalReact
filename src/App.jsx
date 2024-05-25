import React, { useState } from 'react';
import './App.css';

const App = () => {
  const initialOrder = {
    size: 'Medium',
    type: 'Milk Chocolate',
    extras: [],
    sugarLevel: 'Normal'
  };

  const [chocolateOrder, setChocolateOrder] = useState(initialOrder);

  const handleOrderChange = (key, value) => {
    setChocolateOrder(prevOrder => ({
      ...prevOrder,
      [key]: value
    }));
  };

  return (
    <div className="container">
      <div className="order-container">
        <OrderForm order={chocolateOrder} onOrderChange={handleOrderChange} />
      </div>
      <div className="order-summary">
        <OrderSummary order={chocolateOrder} />
      </div>
    </div>
  );
};

const OrderForm = ({ order, onOrderChange }) => {
  const handleSizeChange = (e) => onOrderChange('size', e.target.value);
  const handleTypeChange = (e) => onOrderChange('type', e.target.value);
  const handleExtrasChange = (e) => {
    const extras = Array.from(e.target.selectedOptions, option => option.value);
    onOrderChange('extras', extras);
  };
  const handleSugarLevelChange = (e) => onOrderChange('sugarLevel', e.target.value);

  return (
    <>
      <h2>Chocolate Order</h2>
      <p>Size:
        <select className="select" value={order.size} onChange={handleSizeChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </p>
      <p>Type:
        <select className="select" value={order.type} onChange={handleTypeChange}>
          <option value="Milk Chocolate">Milk Chocolate</option>
          <option value="Dark Chocolate">Dark Chocolate</option>
          <option value="White Chocolate">White Chocolate</option>
          <option value="Ruby Chocolate">Ruby Chocolate</option>
        </select>
      </p>
      <p>Sugar Level:
        <select className="select" value={order.sugarLevel} onChange={handleSugarLevelChange}>
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>
      </p>
      <p>Extras:
        <select className="select" multiple value={order.extras} onChange={handleExtrasChange}>
          <option value="Nuts">Nuts</option>
          <option value="Raisins">Raisins</option>
          <option value="Caramel">Caramel</option>
          <option value="Sea Salt">Sea Salt</option>
        </select>
      </p>
    </>
  );
};

const OrderSummary = ({ order }) => (
  <>
    <h3>Order Summary</h3>
    <p>Size: {order.size}</p>
    <p>Type: {order.type}</p>
    <p>Sugar Level: {order.sugarLevel}</p>
    <p>Extras: {order.extras.join(', ')}</p>
  </>
);

export default App;
