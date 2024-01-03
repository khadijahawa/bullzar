import React from 'react'

export default function Coin({ name, price, image, marketcap, symbol, volume, priceChange }) {
  return (
    <div className='coin-container container rounded-[15px] items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-50 justify-center'>
      <div className='coin-row '>
        <div className='coin-data justify-center coin container rounded-[15px] items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-50 justify-center'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data justify-center coin container rounded-[15px] items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-50 justify-center'>
          <p className='coin-price justify-center'>${price}</p>
          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}
        </div>
      </div>
    </div>
  )
}