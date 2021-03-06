import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { UserRejectedRequestError as UserRejectedRequestErrorInjected } from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { connectorLocalStorageKey, ConnectorNames } from '@nguyenphu27/uikit'
import useToast from 'hooks/useToast'
import { connectorsByName } from 'connectors'

const useAuth = () => {
  const { activate, deactivate } = useWeb3React()
  const { toastError } = useToast()

  const login = useCallback((connectorID: ConnectorNames) => {
    const connector = connectorsByName[connectorID]
    if (connector) {
      activate(connector, async (error: Error) => {
        window.localStorage.removeItem(connectorLocalStorageKey)
        if (
          error instanceof UserRejectedRequestErrorInjected ||
          error instanceof UserRejectedRequestErrorWalletConnect
        ) {
          if (connector instanceof WalletConnectConnector) {
            // const walletConnector = connector as WalletConnectConnector
            // walletConnector.walletConnectProvider = null
          }
          toastError('Authorization Error', 'Please authorize to access your account')
        } else {
          toastError(error.name, error.message)
        }
      })
    } else {
      toastError("Can't find connector", 'The connector config is wrong')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { login, logout: deactivate }
}

export default useAuth
