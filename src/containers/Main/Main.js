import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Images from  '../Images/Images';

const Main = () => (
   <main>
       <Switch>
           <Route exact path='/' component={Images} />
       </Switch>
   </main>
)

export default Main;
