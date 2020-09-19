import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getUser = (userObj) => {
  axios
    .get(`${baseUrl}/farmers.json?orderBy="uid"&equalTo="${userObj.uid}"`)
    .then((resp) => {
      if (Object.values(resp.data).length === 0) {
        // POST OBJECT TO FARMERS
        // {
        //   image:
        //   uid:
        //   displayName:
        //   EvalSourceMapDevToolPlugin;
        //   lastSignInTime:
        // }

        // use axios.post
        // pass it the url ${baseUrl}/farmers.json
        // pass it an object
        axios
          .post(`${baseUrl}/farmers.json`, {
            // image:
            uid: userObj.uid,
            displayName: userObj.displayName,
            email: userObj.email,
            // lastSignInTime:
          })
          .then(console.warn('user added'));
      } else {
        console.warn('User Exists');
      }
    });
};

export default { getUser };
