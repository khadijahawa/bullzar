import React from 'react'
import { Button } from 'react-bootstrap'
import {ChoiceSelection, AmountSelection, Extras2, } from '../../components'
import { BearToken, logo3, rps } from '../../assets'
import { Link } from 'react-router-dom'
import {
  useAddress,
  useContract,
  useTokenBalance,
} from "@thirdweb-dev/react";
import { Trans } from "@lingui/macro";
import {BULLFlip, tokenContractAddress} from "../../constants/contractAddresses"


// connectBackend functions from github





const BullFlip = () => {
  const [showGame, setShowGame] = React.useState(true)
  //fix//
  const [choice, setChoice] = React.useState('')
  const [betAmount, setBetAmount] = React.useState('')
  const [result, setResult] = React.useState()
  const [showResult, setShowResult] = React.useState(false)
  const [winOrLose, setWinOrLose] = React.useState()
  const [balanceChange, setBalanceChange] = React.useState()
  const [balance, setBalance] = React.useState()
  const [spinning, setShowSpinning] = React.useState()
  const address = useAddress();
  const { contract: tokenContract } = useContract(tokenContractAddress, // Use the ABI here
    "token"
  );
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);



    
  async function playGame() { 




  }


  function playAgain() {




    setShowResult(false)
    setShowGame(true)
  }

  
  


function SpinAnimation() {
    return (
      <div style={{position: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between'}}>
        <div id="coin" class={result}>
          <div className="side-a"><img style={{height: '18em', width: '18em'}} src={BearToken}/></div>
          <div className="side-b"><img style={{height: '15em', width: '15em'}} src={logo3}/></div>
        </div>
        <h3 id="fadeIn" style={{color: (winOrLose == 'Won') ? '#e69a10' : 'red'}}>
        </h3>
        <h2 id="fadeIn" className='playbutton' onClick={playAgain}><Trans>Flip again!</Trans></h2>
      </div>
    )
  }








  return (
    <div className="container bg-white dark:bg-black p-4">
    <div style={{display: 'flex', width: '100%', justifyContent: 'space-between' }}>
      <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', textAlign: 'center'}}>
     
      </div> 
    </div>
    <main className="token-card2 bg-white dark:bg-black text-black dark:text-white flex flex-col  items-center sm:justify-between p-4 md:p-8 lg:p-12">
      {showResult && (
        <>
          <SpinAnimation/>
        </>
      )}


      {showGame && (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
          <h2 className="text-3xl" style={{marginTop: '0.05em', marginBottom: '1em'}}>@2025</h2>
          
            <h2 style={{marginTop: '0.05em', marginBottom: '1em'}}><Trans>BULL OR BEAR </Trans></h2>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
            <ChoiceSelection passChoice={setChoice} style={{display: 'flex', marginBottom: '1em'}}/>
            <AmountSelection passAmount={setBetAmount} style={{display: 'flex', flexDirection: 'row'}}/>
          </div>
          {choice && betAmount && (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '0.25em'}}>
              <p>
                {'Betting on ' }{(choice == '0') ? 'BULLS' : 'BEARS'}{' for '}{betAmount}{' BULL'}
              </p>
              <h2 className='playbutton' onClick={ async () => { await playGame() }}><Trans>Flip!</Trans></h2>
            </div>
          )}
        </div>
      )}
    </main>
    <Extras2 />

    <div className="token-card2 bg-white dark:bg-black text-black dark:text-white flex flex-col  items-center sm:justify-between p-4 md:p-8 lg:p-12" style={{ margin: '5px' }}>
  <a href='https://base.blockscout.com/address/0xD7876392e4339d9789C438DdACD6d94396F5ED4e' target='blank'><Trans>Game Contract</Trans></a>
  <div>
  <Trans> Balance :</Trans>
   <p>
                <b className="heading text-blue dark:text-white">
                  {tokenBalance?.value
                    ? (parseFloat(tokenBalance.value) / 1e18).toFixed(3)
                    : ""}
                </b>{" "}
                {tokenBalance?.symbol}
              </p>
   </div>
    </div>
  </div>
  )
}

export default BullFlip
