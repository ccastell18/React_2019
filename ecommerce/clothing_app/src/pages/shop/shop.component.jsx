import React from 'react';

import Shop_Data from './shop.data';

import Collection from '../../components/collection/collection.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: Shop_Data

    }
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <Collection key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage;