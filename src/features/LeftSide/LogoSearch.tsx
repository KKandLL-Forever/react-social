import './LogoSearch.scss'
import Logo from '@/assets/img/logo.png'
import { UilSearch } from '@iconscout/react-unicons'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt=""/>
      <div className="search">
        <input type="text" placeholder="explore"/>
        <div className="s-icon">
            <UilSearch/>
        </div>
      </div>
    </div>
  )
}

export default LogoSearch
