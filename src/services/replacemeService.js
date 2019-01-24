const logging = require('../logging')
/* FIXME Replace this service with your own, real service
 They are marked as async assuming that this will be replaced with some sort of database logic.
 This is just some garbage data you can replace */
let nextEmployeeId = 0
let nextTaskid = 0

const initialTaskList = [
  {
    'name': 'Send Welcome Email',
    'description': 'Send an email to the candidate with the following information...',
    'completed': false
  },
  {
    'name': 'Get them a computer',
    'description': '',
    'completed': false
  },
  {
    'name': 'Give them a key',
    'description': '',
    'completed': false
  },
  {
    'name': 'Give them some swag',
    'description': 'Stickers, socks, slippers (!)',
    'completed': false
  }
]

let createNewTaskList = () => {
  let newList = [...initialTaskList].map((task) => {
    let newTask = { ...task }
    newTask.id = nextTaskid++
    return newTask
  })
  return newList
}

let employees = [
  {
    id: nextEmployeeId++,
    firstName: 'Gary',
    lastName: 'Dellabate',
    primaryLocation: 'Newburyport',
    tasks: createNewTaskList()
  },
  {
    id: nextEmployeeId++,
    firstName: 'Jeffrey',
    lastName: 'Lebowski',
    primaryLocation: 'Boston',
    tasks: createNewTaskList()
  },
  {
    id: nextEmployeeId++,
    firstName: 'Don',
    lastName: 'Draper',
    primaryLocation: 'Boston',
    tasks: createNewTaskList()
  }
]

let getModelItems = async () => {
  return employees
}

let addModelItem = async (item) => {
  logging.log('debug', 'Adding item %o', item)
  item.id = nextEmployeeId++
  item.tasks = createNewTaskList()
  employees.push(item)
  return item
}

let updateModelItem = async (item) => {
  logging.log('debug', 'Updating item %o', item)
  employees.forEach((employee, i) => {
    if (parseInt(item.id) === parseInt(employee.id)) {
      employees[i] = item
    }
  })
  return item
}
module.exports = {
  getModelItems,
  addModelItem,
  updateModelItem
}
