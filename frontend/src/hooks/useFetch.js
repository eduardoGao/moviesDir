import { useState, useEffect } from 'react'

function useFetch(url) {
  const [state, setState] = useState()

  async function fetchReq() {
    const req = await fetch(url)
    const data = await req.json()
    await setState(data)
  }

  useEffect(() => {
    fetchReq()
    // eslint-disable-next-line
  }, [])

  return state
}

export default useFetch