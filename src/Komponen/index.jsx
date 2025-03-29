import React from 'react';
import ClassComponent from './pembahasan/ClassComponent';
import FunctionalComponent from './pembahasan/FunctionalComponent';
import Counter from './pembahasan/Counter';
import App from './pembahasan/props';

export default class Komponen extends React.Component {

    render() {
         return (
            <div>
              <ClassComponent nama="Bambang" />
              <FunctionalComponent nama="agus" />
              <Counter />
              <App />

            </div>
         )
    }
}

