import config from '../../config';
import KanBanBoard from './schema';

export default {
  Query:{
    getTaskBoard: () => {
      return KanBanBoard.find({}, (err, data) => {
        if(err) {
          console.log(`There is an error ${err}`);
        }
        return data;
      });
    }
  }
}