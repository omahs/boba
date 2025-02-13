import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openModal } from 'actions/uiAction';
import { setConnect, setConnectBOBA, setConnectETH } from 'actions/setupAction';
import { selectActiveNetwork, selectActiveNetworkType, selectNetwork, selectNetworkType } from 'selectors/networkSelector';
import { selectBaseEnabled, selectLayer } from 'selectors/setupSelector';
import { LAYER } from 'util/constant';

const useWalletSwitch = () => {

  const dispatch = useDispatch();
  const network = useSelector(selectNetwork());
  const activeNetwork = useSelector(selectActiveNetwork());
  const networkType = useSelector(selectNetworkType());
  const activeNetworkType = useSelector(selectActiveNetworkType());
  const layer = useSelector(selectLayer());
  const baseEnabled = useSelector(selectBaseEnabled());

  const [ reconnect, setReconnect ] = useState(false);

  useEffect(() => {
    if (!!reconnect && !!baseEnabled) {

      if (layer === LAYER.L1) {
        dispatch(setConnectETH(true));
      } else if (layer === LAYER.L2) {
        dispatch(setConnectBOBA(true));
      } else {
        dispatch(setConnect(true));
      }
      // set reconnect to false to avoid retrigger!
      setReconnect(false);
    }
  }, [ layer, reconnect, baseEnabled, dispatch ]);

  useEffect(() => {
    if (activeNetwork !== network || activeNetworkType !== networkType) {
      dispatch(openModal('switchNetworkModal'))
    }
  }, [activeNetwork, activeNetworkType, network, networkType, dispatch])

}

export default useWalletSwitch;
