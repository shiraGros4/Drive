
import AddButtons from '../AddButtons/index'
import NavBar from '../NavBar'
import PlayFiles from '../PlayFiles/index'

import style from './style.module.css'


function Layout() {

  return (
    <div className={style.layout}>
        <div className={style.navComp}>
          <NavBar/>
        </div>
        <div className={style.addComp}>
            <AddButtons/>
        </div>
        <div>
          <PlayFiles/>
        </div>
    </div>
  )
}

export default Layout