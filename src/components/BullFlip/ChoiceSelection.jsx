import React from 'react';
import { BearToken, logo3} from '../../assets'


//i need to fix this //




export default function ChoiceSelection(props) {
  const [selected, setSelected] = React.useState('');

  const handleSelection = (value) => {
    setSelected(value)
    props.passChoice(value)
  }




  return (
    <div style={props.style}>
      {selected == '0' ? (
        <>
          <div className='bet' value='BULLS' style={{textAlign: 'center', opacity: '0.5', marginRight: '2em'}} onClick={() => handleSelection('0')}>
            <img style={{height: '17em', width: '17em'}} src={logo3} alt='bullsclub logo'/>
          </div>
          <div className='bet' value='BEARS' style={{textAlign: 'center'}} onClick={() => handleSelection('1')}>
          <img className={`button ${selected === '1' ? 'shake-animation' : ''}`} style={{height: '15em', width: '15em'}} src={BearToken} alt='bears'/>

          </div>
        </> 
      ):
      selected == '1' ? (
        <>
          <div className='bet' value='BULLS' style={{textAlign: 'center', marginRight: '2em'}} onClick={() => handleSelection('0')}>
            <img  style={{height: '17em', width: '17em'}} src={logo3} alt='logo'/>
          </div>
          <div className='bet' value='BEARS' style={{textAlign: 'center', opacity: '0.5'}} onClick={() => handleSelection('1')}>
            <img style={{height: '15em', width: '15em'}} src={BearToken} alt='bear'/>
          </div>
        </>
      ):
      <>
        <div className='bet' value='BULLS' style={{textAlign: 'center', marginRight: '2em'}} onClick={() => handleSelection('0')}>
          <img style={{height: '17em', width: '17em'}} src={logo3} alt='bulls'/>
        </div>
        <div className='bet' value='BEARS' style={{textAlign: 'center'}} onClick={() => handleSelection('1')}>
          <img style={{height: '15em', width: '15em'}} src={BearToken} alt='bears'/>
        </div>
      </>
      }
    </div>
  )
}

















