import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { allData } from '../../data/data'

const Nutrition = () => {
  const router = useRouter()
  const slug = router.query.nutrition
  
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(allData.find(user => user.id === slug))
  }, [])
  

  return (
    <div className='text-9xl text-black'>
      id: {slug}
      {/* username: {users[0].username} */}
    </div>
  )
}

export default Nutrition