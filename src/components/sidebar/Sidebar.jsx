import React from "react";
import { HouseDoor } from 'react-bootstrap-icons';
import { Banner } from "@/components/widgets";
import { SubmenuAccordion } from "@/components/reactdash-ui";

export default function Sidebar(props) {
  // Data sidebar menu (props.data)
  const sideitems = [
    { id: 1, title: 'Dashboards', url: '/home/', icon: <HouseDoor />,
      submenu: [
        { id: 101, title: 'CMS', url: '/dashboard/home/cms', },
        { id: 102, title: 'Analytics', url: '/dashboard/home/analytics', },
        { id: 103, title: 'Ecommerce', url: '/dashboard/home/ecommerce', },
        { id: 104, title: 'Projects', url: '/dashboard/home/projects', },
        { id: 105, title: 'CRM', url: '/dashboard/home/crm', },
        { id: 106, title: 'Hosting', url: '/dashboard/home/hosting', },
        { id: 107, title: 'Saas', url: '/dashboard/home/saas', },
        { id: 108, title: 'Sales', url: '/dashboard/home/sales', },
        { id: 109, title: 'Marketing', url: '/dashboard/home/marketing', },
      ], 
    },
  ]

  
  // logo (props.logo)
  const logo = {img: '/img/logo.png', text: 'Reactdash'}
  const models = {
    "compact": "sidebar-compact w-0 md:w-20",
    "default": "sidebar-area w-64"
  }
  const colors = {
    "dark": "dark",
    "light": "light"
  }
  const addmodel = props.model ? models[props.model] : 'sidebar-area w-64';
  const addcolor = props.color ? colors[props.color] : '';
  const addClass = props.className ?  `${props.className} ` : '';

  return (
    <nav id="sidebar-menu" className={`${addClass}fixed ${addmodel} ${addcolor} transition-all duration-500 ease-in-out h-screen shadow-sm`}>
      <div className="h-full bg-white dark:bg-gray-800 overflow-y-auto scrollbars">
        {/* logo */}
        {logo ?
        <div className="mh-18 text-center py-5">
          <h2 className="text-2xl font-semibold text-gray-200 px-4 max-h-9 overflow-hidden hidden-compact">
            <img className="inline-block w-8 h-8 ltr:mr-2 rtl:ml-2 -mt-1" src={logo.img} />
            <span className="text-gray-700 dark:text-gray-200">{logo.text}</span>
          </h2>
          <h2 className="text-3xl font-semibold mx-auto logo-compact hidden">
            <img className="inline-block w-8 h-8 -mt-1" src={logo.img} />
          </h2>
        </div>
        : '' }
        
        {/* sidebar menu */}
        <ul id="side-menu" className="w-full float-none flex flex-col font-medium ltr:pl-1.5 rtl:pr-1.5">
          <SubmenuAccordion data={sideitems} />
        </ul>

        {/* Banner */}
        <div className="px-4">
          <Banner />
        </div>
      </div>
    </nav>
  )
}