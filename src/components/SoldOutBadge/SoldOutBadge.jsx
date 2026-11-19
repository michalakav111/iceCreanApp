import  s from './SoldOutBadge.module.css';

function SoldOutBadge() {
  return (
    <span className={s['sold-out-badge']}>
      Sold Out
    </span>
  );
}

export default SoldOutBadge;