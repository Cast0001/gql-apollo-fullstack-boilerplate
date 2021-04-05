import { useContext } from 'react'

import { Context } from './Provider'


const useDevice = () => useContext<DeviceContext>(Context)


export default useDevice
