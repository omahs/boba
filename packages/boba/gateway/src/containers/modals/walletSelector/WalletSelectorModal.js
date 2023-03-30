
import React from 'react'
import { useDispatch } from 'react-redux'

import { closeModal } from 'actions/uiAction'
import { setConnectBOBA, setConnectETH, setWalletConnected } from 'actions/setupAction.js'

import Modal from 'components/modal/Modal'

import { Box } from '@mui/material'
import { Content, BoxCenter } from 'components/modal/Modal.styles'

import networkService from 'services/networkService'

import metaMaskLogo from 'images/metamask.svg'
import walletConnectLogo from 'images/walletconnect.svg'
import Button from 'components/button/Button'

function WalletSelectorModal ({ open }) {

  const dispatch = useDispatch()

  const connectToWallet = async (type) => {
    function resetConnectChain() {
      dispatch(setConnectETH(false))
      dispatch(setConnectBOBA(false))
    }

    try {
      if (await networkService.walletService.connectWallet(type)) {
        dispatch(closeModal('walletSelectorModal'))
        dispatch(setWalletConnected(true))
      } else {
        resetConnectChain()
      }
    } catch (error) {
      console.log(`Error connecting wallet: ${error}`)
      resetConnectChain()
    }
  }

  function handleClose () {
    dispatch(closeModal('walletSelectorModal'))
    dispatch(setConnectETH(false))
    dispatch(setConnectBOBA(false))
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      newStyle={true}
      maxWidth="450px"
      minHeight="200px"
      title="Connect to Wallet"
    >
      <Box>
        <Content>
          <BoxCenter onClick={() => connectToWallet('metamask')}>
            <img src={metaMaskLogo} alt='metamask' height="100" />
            <Button
              onClick={() => connectToWallet('metamask')}
              color="primary"
              variant="contained"
            >
              Connect to MetaMask
            </Button>
          </BoxCenter>
          <BoxCenter onClick={() => connectToWallet('walletconnect')}>
            <img src={walletConnectLogo} alt='walletconnect' height="100" />
            <Button
              onClick={() => connectToWallet('metamask')}
              color="primary"
              variant="contained"
            >
              Connect to WalletConnect
            </Button>
          </BoxCenter>
        </Content>
      </Box>
    </Modal>
  )
}

export default React.memo(WalletSelectorModal)
