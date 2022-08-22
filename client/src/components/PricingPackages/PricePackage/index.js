import React, { useState } from 'react';
import cx from 'classnames';
import styles from './../PricingPackages.module.scss';

const PricePackage = (props) => {
  const {
    packagePrice: {
      title, description, options, color, price: {
        currency, amount
      }
    }
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const [isHover, setIsHover] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  const handleMouseEnter = () => setIsHover(true);

  const handleMouseLeave = () => setIsHover(false);

  const renderOptions = (option, i) => <li key={i} className={styles.item}>{option}</li>

  const hover = {
    color: isHover ? '#fff' : '#666',
    backgroundColor: isHover ? color : 'white',
    border: isHover ? '2px solid ' + color : '2px solid #ddd'
  };

  return (
    <article style={{ borderColor: `${color}` }} className={styles.package}>
      {/* for mobile */}
      <div style={{ borderColor: `${color}` }} className={styles.small_screen}>
        <div className={styles.title_small_screen}>
          <h2 style={{ color: `${color}` }} className={styles.title}>{description} ${amount}</h2>
          <span
            style={{ color: `${color}` }}
            className={styles.hide}
            onClick={handleClick}
          >
            {isOpen ? '-' : '+'}
          </span>
        </div>
        {
          isOpen &&
          <>
            <ul>{options.map(renderOptions)}</ul>
            <button
              className={styles.button}
              style={hover}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              start
            </button>
          </>
        }
      </div>
      {/* for all */}
      <div className={styles.normal_screen}>
        <div style={{ borderColor: `${color}` }} className={styles.package_box}>
          <h2 style={{ color: `${color}` }} className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <p style={{ color: `${color}` }} className={styles.currency}>{currency}${amount}</p>
        </div>
        <ul>
          {options.map(renderOptions)}
        </ul>
        <button
          className={styles.button}
          style={hover}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          start
        </button>
      </div>
    </article>
  );
}

export default PricePackage;
