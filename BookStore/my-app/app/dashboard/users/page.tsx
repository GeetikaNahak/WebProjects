import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <ul>
        <li>
            <Link href="/dashboard/users/1">U 1</Link>
            <Link href="/dashboard/users/2">U 1</Link>
            <Link href="/dashboard/users/3">U 1</Link>
        </li>
      </ul>
    </div>
  )
}

export default page
