import {useState} from 'react'

export const useStateCustom = ({initialState = {}}) => {

    const [state, setState] = useState(initialState);

  return [state, setState]
}
