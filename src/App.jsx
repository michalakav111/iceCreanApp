import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import SoldOutBadge from './components/SoldOutBadge/SoldOutBadge'
import FlavorList from './components/FlavorList/FlavorList'
import Header from './components/Header/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [flavors, setFlavors] = useState([
  { name: "Vanilla", isSoldOut: true, scoopsSelected: 0 },
  { name: "Chocolate", isSoldOut: false, scoopsSelected: 0 },
  { name: "Strawberry", isSoldOut: false, scoopsSelected: 0 },
  { name: "Pistachio", isSoldOut: false, scoopsSelected: 0 },
  { name: "Cookies & Cream", isSoldOut: false, scoopsSelected: 0 },
]);
// גבול 5 כדורים לגלידה
const [scoopLimit, setScoopLimit] = useState(5);
const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

//משתנה סיכום בכום
const totalScoops = flavors.reduce(
  (total, flavor) => total + flavor.scoopsSelected,
  0
);
const totalPrice = totalScoops * 5;
const allSoldOut = flavors.every((flavor) => flavor.isSoldOut);
// פונקצית הוספה
const addScoop = (flavorName) => {
  if (totalScoops >= scoopLimit) {
    return;
  }

  setFlavors((prevFlavors) =>
    prevFlavors.map((flavor) =>
      flavor.name === flavorName && !flavor.isSoldOut
        ? { ...flavor, scoopsSelected: flavor.scoopsSelected + 1 }
        : flavor
    )
  );
};
// הורדת כדור
const removeScoop = (flavorName) => {
  setFlavors((prevFlavors) =>
    prevFlavors.map((flavor) =>
      flavor.name === flavorName && flavor.scoopsSelected > 0
        ? { ...flavor, scoopsSelected: flavor.scoopsSelected - 1 }
        : flavor
    )
  );
};

return (
    <>
     <div className="app">

      {/* Header */}
    <Header/>
      {/* Notice Area */}
      <section className="notice-area">
        <section className="notice-area">
  {totalScoops >= scoopLimit && (
    <div className="scoop-limit-notice">
      Scoop limit reached!
    </div>
  )}

 {showOnlyAvailable && allSoldOut && (
  <p className="no-flavors-message">
    No flavors to show
  </p>
)}
</section>
      </section>
{/* כפתור בחירה של זמינות טעימים */}
<div className="filter">
  <label>
    <input
      type="checkbox"
      checked={showOnlyAvailable}
      onChange={() => setShowOnlyAvailable(!showOnlyAvailable)}
    />
    Show only available
  </label>
</div>

      {/* Flavor List */}
      <section className="flavor-list">

  <div className="flavors-container">
    {flavors
  .filter((flavor) => !showOnlyAvailable || !flavor.isSoldOut)
  .map((flavor) => (
  <FlavorList
        key={flavor.name}
        flavor={flavor}
        addScoop={addScoop}
        removeScoop={removeScoop}
      />


    ))}
  </div> 
  
</section>

      {/* Order Summary */}

      <section className="order-summary">
        <h2>Order Summary</h2>
        <p>Total Scoops: {totalScoops}</p>

      <p>Total Price: ${totalPrice}</p>

     {totalScoops===0 && (<p>“Your order is empty”</p>)}
      </section>

    </div>
  

     
    </>
  )
}

export default App
