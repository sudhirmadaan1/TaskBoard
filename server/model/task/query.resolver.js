import config from '../../config';

export default {
  Query:{
    getTaskBoard: () => {
      return config.toDoList;
    }
  }
}