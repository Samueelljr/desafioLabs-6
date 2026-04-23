import { useNavigate } from 'react-router-dom'
import { api } from '../api/Client'
import { useFetch } from '../hooks/useFetch'

import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'

import React from 'react'

const Users = () => {
  const navigate = useNavigate()

  const { data: users, loading, error } = useFetch(
    () => api.get("/users"),
    []
  )

  if (loading) return <Loading />
  if (error) return <ErrorMessage />

  return (
    <div className="list">
      <h1>Usuários</h1>
      {users.map(user => (
        <div key={user.id}  className="card">
          <p>{user.name}</p>
          <button onClick={() => navigate(`/users/${user.id}/posts`)}> Ver posts </button>
        </div>
      ))}
    </div>
  )
}

export default Users