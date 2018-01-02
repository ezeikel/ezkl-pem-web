import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Images from  '../../components/Images/Images';
import Videos from  '../Videos/Videos';

const Main = () => (
   <main>
       <Switch>
           <Route exact path='/' component={Images} />
           <Route exact path='/videos' component={Videos} />
       </Switch>
   </main>
)

export default Main;
