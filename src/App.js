import React, { useContext, useState, useEffect } from 'react'
import { Text, Button, HStack, Input } from '@chakra-ui/core'
import { ethers } from 'ethers'
import { Web3Context } from './hooks/useWeb3'
/*import {
  SimpleStorage_address,
  SimpleStorage_abi,
} from './contracts/SimpleStorage'*/
import {tempi_address, tempi_abi} from './contracts/tempi'


function App() {
  const [web3State, login] = useContext(Web3Context)
  // const [simpleStorage, setSimpleStorage] = useState(null)
  const [getValue, setGetValue] = useState(0)
  const [inputValue, setInputValue] = useState(0)
  const [tempi, setTempi] = useState(null)


  const handleOnClickSet = async () => {
   const tx = await tempi.set(inputValue)
  }
  
  const handleOnClickGet = async () => {
   const res = await tempi.get()
    setGetValue(res.toString())
  }




  useEffect(() => {
    if (web3State.signer !== null) {
      setTempi(
        new ethers.Contract(
          tempi_address,
          tempi_abi,
          web3State.signer
        )
      )
    }
  }, [web3State.signer])

  // web3State.is_web3 ??
  // web3State.is_logged ??
  // web3State.chain_id ??
  // web3Sate.account && provider et signer

  return (
    <>
    
        
         
          <HStack>
            <Button onClick={handleOnClickSet}>Set your number</Button>
            <Input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.currentTarget.value)
              }}
            />
          </HStack>
          <HStack>
            <Button onClick={handleOnClickGet}>Get your tempo</Button>
            <Text>{getValue}</Text>
            
          </HStack>
       
    </>
  )
}

export default App