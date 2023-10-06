import React from "react";
import { PlusLg } from 'react-bootstrap-icons';
// components
import { Preloader, Row, Column, Card, Button, AvatarGroup } from "@/components/reactdash-ui";

export default function Kanban() {
  const kanban_text = { add: "Add new task", urgent: "Urgency", low:"Low", medium:"Medium", high: "High",
    backlog: "Backlog", list: "List", doing: "Doing", done: "Done", more: "More", due: "Due"}
  const kanban = {
    backlog: [
        {
          category: "Development", urgent: "low", description: "This is the description of the task for the thing that needs to be done.", due: "Aug 12, 1023", urgency: "low",
          team: [
            {name:"Rodrigo", img: "/img/avatar/avatar.png", url: "/"},
            {name:"Garcia", img: "/img/avatar/avatar2.png", url: "/"},
            {name:"Fernandes", img: "/img/avatar/avatar3.png", url: "/"},
            {name:"Jarvis", img: "/img/avatar/avatar4.png", url: "/"},
            {name:"Raynand", img: "/img/avatar/avatar5.png", url: "/"}
          ] 
        },
        {
          category: "Front End", urgent: "medium", description: "This is the description of the task for the thing that needs to be done.", due: "Aug 12, 1023", urgency: "medium",
          team: [
            {name:"Rodrigo", img: "/img/avatar/avatar.png", url: "/"},
            {name:"Garcia", img: "/img/avatar/avatar2.png", url: "/"},
            {name:"Fernandes", img: "/img/avatar/avatar3.png", url: "/"},
            {name:"Jarvis", img: "/img/avatar/avatar4.png", url: "/"},
            {name:"Raynand", img: "/img/avatar/avatar5.png", url: "/"}
          ] 
        },
        {
          category: "Back End", urgent: "high", description: "This is the description of the task for the thing that needs to be done.", due: "Aug 12, 1023", urgency: "hight",
          team: [
            {name:"Rodrigo", img: "/img/avatar/avatar.png", url: "/"},
            {name:"Garcia", img: "/img/avatar/avatar2.png", url: "/"},
            {name:"Fernandes", img: "/img/avatar/avatar3.png", url: "/"},
            {name:"Jarvis", img: "/img/avatar/avatar4.png", url: "/"},
            {name:"Raynand", img: "/img/avatar/avatar5.png", url: "/"}
          ] 
        },
    ],
    list: [
        {
          category: "Development", urgent: "medium", description: "This is the description of the task for the thing that needs to be done.", due: "Aug 12, 1023", urgency: "low",
          team: [
            {name:"Rodrigo", img: "/img/avatar/avatar.png", url: "/"},
            {name:"Garcia", img: "/img/avatar/avatar2.png", url: "/"},
            {name:"Fernandes", img: "/img/avatar/avatar3.png", url: "/"},
            {name:"Jarvis", img: "/img/avatar/avatar4.png", url: "/"},
            {name:"Raynand", img: "/img/avatar/avatar5.png", url: "/"}
          ] 
        },
        {
          category: "Front End", urgent: "low", description: "This is the description of the task for the thing that needs to be done.", due: "Aug 12, 1023", urgency: "medium",
          team: [
            {name:"Rodrigo", img: "/img/avatar/avatar.png", url: "/"},
            {name:"Garcia", img: "/img/avatar/avatar2.png", url: "/"},
            {name:"Fernandes", img: "/img/avatar/avatar3.png", url: "/"},
            {name:"Jarvis", img: "/img/avatar/avatar4.png", url: "/"},
            {name:"Raynand", img: "/img/avatar/avatar5.png", url: "/"}
          ] 
        },
        {
          category: "Back End", urgent: "high", description: "This is the description of the task for the thing that needs to be done.", due: "Aug 12, 1023", urgency: "hight",
          team: [
            {name:"Rodrigo", img: "/img/avatar/avatar.png", url: "/"},
            {name:"Garcia", img: "/img/avatar/avatar2.png", url: "/"},
            {name:"Fernandes", img: "/img/avatar/avatar3.png", url: "/"},
            {name:"Jarvis", img: "/img/avatar/avatar4.png", url: "/"},
            {name:"Raynand", img: "/img/avatar/avatar5.png", url: "/"}
          ] 
        },
    ],
    doing: [
        {
          category: "Development", urgent: "low", description: "This is the description of the task for the thing that needs to be done.", due: "Aug 12, 1023", urgency: "low",
          team: [
            {name:"Rodrigo", img: "/img/avatar/avatar.png", url: "/"},
            {name:"Garcia", img: "/img/avatar/avatar2.png", url: "/"},
            {name:"Fernandes", img: "/img/avatar/avatar3.png", url: "/"},
            {name:"Jarvis", img: "/img/avatar/avatar4.png", url: "/"},
            {name:"Raynand", img: "/img/avatar/avatar5.png", url: "/"}
          ] 
        },
        {
          category: "Front End", urgent: "medium", description: "This is the description of the task for the thing that needs to be done.", due: "Aug 12, 1023", urgency: "medium",
          team: [
            {name:"Rodrigo", img: "/img/avatar/avatar.png", url: "/"},
            {name:"Garcia", img: "/img/avatar/avatar2.png", url: "/"},
            {name:"Fernandes", img: "/img/avatar/avatar3.png", url: "/"},
            {name:"Jarvis", img: "/img/avatar/avatar4.png", url: "/"},
            {name:"Raynand", img: "/img/avatar/avatar5.png", url: "/"}
          ] 
        },
        {
          category: "Back End", urgent: "high", description: "This is the description of the task for the thing that needs to be done.", due: "Aug 12, 1023", urgency: "hight",
          team: [
            {name:"Rodrigo", img: "/img/avatar/avatar.png", url: "/"},
            {name:"Garcia", img: "/img/avatar/avatar2.png", url: "/"},
            {name:"Fernandes", img: "/img/avatar/avatar3.png", url: "/"},
            {name:"Jarvis", img: "/img/avatar/avatar4.png", url: "/"},
            {name:"Raynand", img: "/img/avatar/avatar5.png", url: "/"}
          ] 
        },
    ],
    done: [
        {
          category: "Development", urgent: "low", description: "This is the description of the task for the thing that needs to be done.", due: "Aug 12, 1023", urgency: "low",
          team: [
            {name:"Rodrigo", img: "/img/avatar/avatar.png", url: "/"},
            {name:"Garcia", img: "/img/avatar/avatar2.png", url: "/"},
            {name:"Fernandes", img: "/img/avatar/avatar3.png", url: "/"},
            {name:"Jarvis", img: "/img/avatar/avatar4.png", url: "/"},
            {name:"Raynand", img: "/img/avatar/avatar5.png", url: "/"}
          ] 
        },
        {
          category: "Front End", urgent: "high", description: "This is the description of the task for the thing that needs to be done.", due: "Aug 12, 1023", urgency: "medium",
          team: [
            {name:"Rodrigo", img: "/img/avatar/avatar.png", url: "/"},
            {name:"Garcia", img: "/img/avatar/avatar2.png", url: "/"},
            {name:"Fernandes", img: "/img/avatar/avatar3.png", url: "/"},
            {name:"Jarvis", img: "/img/avatar/avatar4.png", url: "/"},
            {name:"Raynand", img: "/img/avatar/avatar5.png", url: "/"}
          ] 
        },
        {
          category: "Back End", urgent: "medium", description: "This is the description of the task for the thing that needs to be done.", due: "Aug 12, 1023", urgency: "hight",
          team: [
            {name:"Rodrigo", img: "/img/avatar/avatar.png", url: "/"},
            {name:"Garcia", img: "/img/avatar/avatar2.png", url: "/"},
            {name:"Fernandes", img: "/img/avatar/avatar3.png", url: "/"},
            {name:"Jarvis", img: "/img/avatar/avatar4.png", url: "/"},
            {name:"Raynand", img: "/img/avatar/avatar5.png", url: "/"}
          ] 
        },
    ]
  }
  const backlogs = kanban.backlog;
  const lists = kanban.list;
  const doings = kanban.doing;
  const dones = kanban.done;

  return (
    <Preloader>
      {/* page title  */}
      <Row>
        <Column className="w-full md:w-1/2 px-4">   
          <p className="text-xl font-bold mt-3 mb-5">Kanban</p>
        </Column>
      </Row>

      {/* content  */}
      <Row>
        <Column className="w-full px-4">
          <Card className="relative p-6">
            <div className="flex flex-col justify-center md:flex-row md:justify-between mb-3">
              <div>
                <Button>
                  <PlusLg className="inline-block ltr:ml-1 rtl:mr-1" /> {kanban_text.add}
                </Button>
              </div>

              <div className="p-3">
                <div className="inline-block ltr:mr-2 rtl:ml-2">
                  {kanban_text.urgent}: 
                </div>
                <div className="inline-block ltr:mr-2 rtl:ml-2">
                  <span className="inline-block w-3 h-3 mr-1 rounded-full bg-green-200"></span> {kanban_text.low} 
                </div>
                <div className="inline-block ltr:mr-2 rtl:ml-2">
                  <span className="inline-block w-3 h-3 mr-1 rounded-full bg-yellow-200"></span> {kanban_text.medium} 
                </div>
                <div className="inline-block ltr:mr-2 rtl:ml-2">
                  <span className="inline-block w-3 h-3 mr-1 rounded-full bg-pink-200"></span> {kanban_text.high} 
                </div>
              </div>
            </div>

            <div className="dragula flex flex-grow space-x-6 overflow-y-hidden overflow-auto">
              <div className="flex flex-col flex-shrink-0 w-72 overflow-y-auto">
                <div className="flex flex-col py-2 px-4 bg-gray-200 text-gray-700 dark:bg-gray-900 dark:bg-opacity-40 dark:text-gray-300">
                  <h3 className="text-base font-semibold">{kanban_text.backlog}</h3>
                </div>
                <div id="backlog" className="flex flex-col pt-4 pb-6 px-4 bg-gray-50 dark:bg-gray-900 dark:bg-opacity-20 overflow-auto">

                  {backlogs.map((list, index)=> {
                  const team = list.team;
                  const bg_card = list.urgent === "low" ? "bg-green-200 text-green-900" : list.urgent === "medium" ? "bg-yellow-200 text-yellow-900" : list.urgent === "high" ? "bg-red-200 text-red-900" : "bg-pink-200 text-pink-900";
                  return(
                  <div key={index} className={`drop-item cursor-grab hover:bg-opacity-90 relative flex flex-col items-start p-4 mb-4 rounded-lg ${bg_card}`} draggable="true">
                    <span className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">{list.category}</span>
                    <h4 className="mt-3 text-sm font-medium">{list.description}</h4>
                    <div className="flex justify-between items-center w-full mt-3 text-xs font-medium">
                      <span className="px-2 py-1 flex items-center font-semibold text-xs rounded text-pink-400 border border-pink-400 bg-white">{kanban_text.due}: {list.due}</span>
                      <div className="relative mr-4">
                        <AvatarGroup data={team} shape="circle" count={4} size="x-small" />
                      </div>
                    </div>
                  </div>
                  )})}

                </div>
              </div>
              
              <div className="flex flex-col flex-shrink-0 w-72 overflow-y-auto">
                <div className="flex flex-col py-2 px-4 bg-gray-200 text-gray-700 dark:bg-gray-900 dark:bg-opacity-40 dark:text-gray-300">
                  <h3 className="text-base font-semibold">{kanban_text.list}</h3>
                </div>
                <div id="list" className="flex flex-col pt-4 pb-6 px-4 bg-gray-50 dark:bg-gray-900 dark:bg-opacity-20 overflow-auto">

                  {lists.map((list, index)=> {
                  const team = list.team;
                  const bg_card = list.urgent === "low" ? "bg-green-200 text-green-900" : list.urgent === "medium" ? "bg-yellow-200 text-yellow-900" : list.urgent === "high" ? "bg-red-200 text-red-900" : "bg-pink-200 text-pink-900";
                  return(
                  <div key={index} className={`drop-item cursor-grab hover:bg-opacity-90 relative flex flex-col items-start p-4 mb-4 rounded-lg ${bg_card}`} draggable="true">
                    <span className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">{list.category}</span>
                    <h4 className="mt-3 text-sm font-medium">{list.description}</h4>
                    <div className="flex justify-between items-center w-full mt-3 text-xs font-medium">
                      <span className="px-2 py-1 flex items-center font-semibold text-xs rounded text-pink-400 border border-pink-400 bg-white">{kanban_text.due}: {list.due}</span>
                      <div className="relative mr-4">
                        <AvatarGroup data={team} shape="circle" count={4} size="x-small" />
                      </div>
                    </div>
                  </div>
                  )})}

                </div>
              </div>

              <div className="flex flex-col flex-shrink-0 w-72 overflow-y-auto">
                <div className="flex flex-col py-2 px-4 bg-gray-200 text-gray-700 dark:bg-gray-900 dark:bg-opacity-40 dark:text-gray-300">
                  <h3 className="text-base font-semibold">{kanban_text.doing}</h3>
                </div>
                <div id="doing" className="flex flex-col pt-4 pb-6 px-4 bg-gray-50 dark:bg-gray-900 dark:bg-opacity-20 overflow-auto">

                  {doings.map((list, index)=> {
                  const team = list.team;
                  const bg_card = list.urgent === "low" ? "bg-green-200 text-green-900" : list.urgent === "medium" ? "bg-yellow-200 text-yellow-900" : list.urgent === "high" ? "bg-red-200 text-red-900" : "bg-pink-200 text-pink-900";
                  return(
                  <div key={index} className={`drop-item cursor-grab hover:bg-opacity-90 relative flex flex-col items-start p-4 mb-4 rounded-lg ${bg_card}`} draggable="true">
                    <span className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">{list.category}</span>
                    <h4 className="mt-3 text-sm font-medium">{list.description}</h4>
                    <div className="flex justify-between items-center w-full mt-3 text-xs font-medium">
                      <span className="px-2 py-1 flex items-center font-semibold text-xs rounded text-pink-400 border border-pink-400 bg-white">{kanban_text.due}: {list.due}</span>
                      <div className="relative mr-4">
                        <AvatarGroup data={team} shape="circle" count={4} size="x-small" />
                      </div>
                    </div>
                  </div>
                  )})}

                </div>
              </div>

              <div className="flex flex-col flex-shrink-0 w-72 overflow-y-auto">
                <div className="flex flex-col py-2 px-4 bg-gray-200 text-gray-700 dark:bg-gray-900 dark:bg-opacity-40 dark:text-gray-300">
                  <h3 className="text-base font-semibold">{kanban_text.done}</h3>
                </div>
                <div id="done" className="flex flex-col pt-4 pb-6 px-4 bg-gray-50 dark:bg-gray-900 dark:bg-opacity-20 overflow-auto">

                  {dones.map((list, index)=> {
                  const team = list.team;
                  const bg_card = list.urgent === "low" ? "bg-green-200 text-green-900" : list.urgent === "medium" ? "bg-yellow-200 text-yellow-900" : list.urgent === "high" ? "bg-red-200 text-red-900" : "bg-pink-200 text-pink-900";
                  return(
                  <div key={index} className={`drop-item cursor-grab hover:bg-opacity-90 relative flex flex-col items-start p-4 mb-4 rounded-lg ${bg_card}`} draggable="true">
                    <span className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">{list.category}</span>
                    <h4 className="mt-3 text-sm font-medium">{list.description}</h4>
                    <div className="flex justify-between items-center w-full mt-3 text-xs font-medium">
                      <span className="px-2 py-1 flex items-center font-semibold text-xs rounded text-pink-400 border border-pink-400 bg-white">{kanban_text.due}: {list.due}</span>
                      <div className="relative mr-4">
                        <AvatarGroup data={team} shape="circle" count={4} size="x-small" />
                      </div>
                    </div>
                  </div>
                  )})}

                </div>
              </div>
            </div>
          </Card>
        </Column>
      </Row>
    </Preloader>
  );
}