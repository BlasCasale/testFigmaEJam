import TopHeader from '../TopHeader/TopHeader'
import BottonHeader from '../BottonHeader/BottonHeader'
import './Header.css'

const Header = () => {
  return (
    <header>
      <TopHeader />
      <div className='boxBottonHeader'>
        <BottonHeader />
      </div>
    </header>
  )
}

export default Header