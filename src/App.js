import React from 'react';
import './App.css';
import _ from 'lodash';

function App() {

  const _list = [
    'Kadir',
    'Nevres',
    'Caner',
    'Özcan',
    'Emre',
    'Gökhan',
    'Alkan',
    'Enes',
    'Omid',
    'Arek',
    'Medet'
  ]

  const [list, setList] = React.useState(_list);

  React.useEffect(() => {
    setList(_.shuffle(list))
  });


  return (
    <div className="App">
      {
        list.map((v, i) => {
          return <p>{`${i}) ${v}`}</p>
        })
      }
    </div>
  );
}

export default App;
