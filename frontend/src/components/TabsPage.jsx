import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Rules from './Rules';
import TaskTable from './TaskTable';
import Enemy from './EnemyComp/EnemyCs'

function TabsPage() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="rules" title="Rules">
        <Rules />
      </Tab>
      <Tab eventKey="tasklist" title="Task Board">
        <TaskTable />
      </Tab>
      <Tab eventKey="enemy" title="Enemy">
        <Enemy />
      </Tab>
    </Tabs>

  );
}

export default TabsPage;