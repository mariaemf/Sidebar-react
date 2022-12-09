import React from 'react'
import {Container, Content} from './styles'

import { FaChartBar,
   FaEnvelope, 
   FaHome, 
   FaIdCardAlt,
   FaRegCalendarAlt,
   FaRegFileAlt, 
   FaRegSun,
  FaTimes,
  FaUserAlt }
   from 'react-icons/fa'

 import SidebarItem from '../SidebarItem'

 const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return(
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} Text="Home"/>
        <SidebarItem Icon={FaChartBar} Text="Statics"/>
        <SidebarItem Icon={FaUserAlt} Text="User"/>
        <SidebarItem Icon={FaEnvelope} Text="Mail"/>
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendary"/>
        <SidebarItem Icon={FaIdCardAlt} Text="Employees"/>
        <SidebarItem Icon={FaRegFileAlt} Text="Reports"/>
        <SidebarItem Icon={FaRegSun} Text="Setings"/>
       
      </Content>
    </Container>
  )
}

export default Sidebar