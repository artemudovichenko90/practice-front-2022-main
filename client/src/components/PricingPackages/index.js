import React from 'react';
import PricingPackage from './PricePackage';
import packages from './PricingData.json';
import styles from './PricingPackages.module.scss';

const PricingPackages = () => {
  const renderPackages = (packagePrice, i) => <PricingPackage key={i} packagePrice={packagePrice} />
  return (
    <div className={styles.container}>
      <h1 className={styles.page_heading}>Select a Package for your Managed Branding Contest</h1>
      <section className={styles.page_section}>{packages.map(renderPackages)}</section>

    </div>
  );
}

export default PricingPackages;
