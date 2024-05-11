import { useState } from 'react'
/* Esto es un hooks permite dar funcionalidad a un componente 
import { useState } from 'react' 
  */
export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  /* Estados
  const state = useState(isFollowing)
  const isFollowing = [0]valor del estado
  const setIsFollowing = [1] variable para cambiar el estadpo
 es lo mismo que:
 const [isFollowing, setIsFollowing] = useState(initialIsFollowing)*/

 /*Inicializar un valor con una props: initialIsFollowing  
 lo correcto es q comience el nombre con inicial
 *el estado inicial solo se renderiza una vez
  */
  console.log('[TwitterFollowCard] render with userName: ', userName)

  /*Renderizado condicional mediante una ternaria*/
  const text = isFollowing ? 'Siguiendo' : 'Seguir'

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          /* Asi se evalua una expesion[Entre llaves]*/
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
