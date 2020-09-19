import cowData from '../../helpers/data/cowData';

const cowsOnDom = (obj) => {
  $('#pasture').html('');
  Object.keys(obj).forEach((item) => {
    $('#pasture').append(`<h3>${obj[item].name}</h3>`);
  });
};

const buildCows = () => {
  console.warn(cowData.getCows());
  cowData.getCows()
    // .then((resp) => console.warn(resp.data, Object.keys(resp.data)))
    .then((resp) => cowsOnDom(resp.data))
    .catch((error) => console.error('get cows broke', error));
};

export default { buildCows };
