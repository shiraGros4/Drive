import React, { useContext } from 'react'
import FileContext from '../../context/fileContext'
import AddButtons from '../AddButtons/index'
import NavBar from '../NavBar'
import PlayFiles from '../PlayFiles/index'
import PopupInfo from '../PopupInfo/index'
import style from './style.module.css'


function Layout() {
  const { popupInfoDisplay, setPopupInfoDisplay } = useContext(FileContext)
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
          {popupInfoDisplay && <PopupInfo/>}
        </div>
    </div>
  )
}

export default Layout