import PropTypes from 'prop-types'
// Use location helps us to see the route we are currently on
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()
  return (
    <header className='header'>
      {/* <h1>Task Tracker</h1> */}
      <h1>{title}</h1>
     {location.pathname === '/' && <Button
        color={showAdd ? 'orange' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      /> } 
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
