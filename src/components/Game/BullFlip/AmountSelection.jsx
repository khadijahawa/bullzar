import React from 'react'
import { lol, m, x, z, n,y,k,l, q} from '../../../assets'







//need to fix  //
export default function AmountSelection(props) {
  const [selected, setSelected] = React.useState('');

  const handleSelection = (value) => {
    setSelected(value)
    props.passAmount(value)
  }




  return (
    <div style={props.style}>
        <div className='bet' value='1' style={{margin: '1em', opacity: selected=='1' ? '5' : null}} onClick={() => handleSelection('1')}>
          <img style={{height: '75px', width: '75px'}} src={m} alt='bet 1'/>
        </div>
        <div className='bet' value='5' style={{margin: '1em', opacity: selected=='5' ? '10' : null}} onClick={() => handleSelection('5')}>
          <img style={{height: '75px', width: '75px'}} src={x} alt='bet 5'/>
        </div>
        <div className='bet' value='10' style={{margin: '1em', opacity: selected=='10' ? '25' : null}} onClick={() => handleSelection('10')}>
          <img style={{height: '75px', width: '75px'}} src={z} alt='bet 10'/>
        </div>
        <div className='bet' value='25' style={{margin: '1em', opacity: selected=='25' ? '100' : null}} onClick={() => handleSelection('25')}>
          <img style={{height: '75px', width: '75px'}} src={n} alt='bet 25'/>
        </div>
        <div className='bet' value='100' style={{margin: '1em', opacity: selected=='100' ? '500' : null}} onClick={() => handleSelection('100')}>
          <img style={{height: '75px', width: '75px'}} src={y} alt='bet 100'/>
        </div>
        <div className='bet' value='500' style={{margin: '1em', opacity: selected=='500' ? '1000' : null}} onClick={() => handleSelection('500')}>
          <img style={{height: '75px', width: '75px'}} src={k} alt='bet 500'/>
        </div>
        <div className='bet' value='1000' style={{margin: '1em', opacity: selected=='1000' ? '500' : null}} onClick={() => handleSelection('1000')}>
          <img style={{height: '75px', width: '75px'}} src={l} alt='bet 1000'/>
        </div>
        <div className='bet' value='10000' style={{margin: '1em', opacity: selected=='10000' ? '1000' : null}} onClick={() => handleSelection('10000')}>
          <img style={{height: '75px', width: '75px'}} src={q} alt='bet 10000'/>
        </div>
        <div className='bet' value='25000' style={{margin: '1em', opacity: selected=='25000' ? '10000' : null}} onClick={() => handleSelection('25000')}>
          <img style={{height: '75px', width: '75px'}} src={lol} alt='bet 25000'/>
        </div>
    </div>
  )
}