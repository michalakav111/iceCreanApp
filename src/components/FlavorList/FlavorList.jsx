import s from './FlavorList.module.css';
import SoldOutBadge from '../SoldOutBadge/SoldOutBadge';

function FlavorCard({ flavor, addScoop, removeScoop }) {
  return (
    <div className={`${s.flavorCard} ${flavor.isSoldOut ? s.soldOut : ''}`}>

      <h3>{flavor.name}</h3>

      {flavor.isSoldOut && <SoldOutBadge />}

      <p>Scoops: {flavor.scoopsSelected}</p>

      <div className={s.buttons}>
        <button
          onClick={() => removeScoop(flavor.name)}
          disabled={flavor.isSoldOut || flavor.scoopsSelected === 0}
        >
          -
        </button>

        <button
          onClick={() => addScoop(flavor.name)}
          disabled={flavor.isSoldOut}
        >
          +
        </button>
      </div>

    </div>
  );
}

export default FlavorCard;