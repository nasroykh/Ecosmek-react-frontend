import React from 'react'
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const layout = (props: any) => (
    <Aux>
{/*         <div>Toolbar</div>
        <div>SD Toggle</div> */}
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;