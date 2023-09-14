// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import DetailHistory from './Component/DetailHistory';
// import MainHistory from './Component/MainHistory';

// function History(props) {
// 	return (
// 		<Switch>
// 			<Route exact path='/history' component={MainHistory} />

// 			<Route path='/history/:id' component={DetailHistory} />
// 		</Switch>
// 	);
// }

// export default History;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailHistory from './Component/DetailHistory';
import MainHistory from './Component/MainHistory';

function History(props) {
  return (
    <Routes>
      <Route path="/" element={<MainHistory />} />
      <Route path="/:id" element={<DetailHistory />} />
    </Routes>
  );
}

export default History;
