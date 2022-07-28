import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { allData } from '../../data/data'

const Workout = () => {

  const router = useRouter()
  const slug = router.query.workout

  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(allData.filter((user) => {user.id === slug}))
  }, [])

  console.log(allData.filter((user) => {user.id === slug}))
  console.log(users)

  return (
    <div className='text-9xl text-red-500'>
      id: {slug}
      <br />
      {/* username: {users[0].username} */}
    </div>
  )
}

export default Workout