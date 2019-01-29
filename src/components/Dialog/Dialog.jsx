import React, { Fragment, Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import './Dialog.scss'

const Dialog = ({ opened, title, onToggle, children }) => {
    return (
        <Fragment>
            <CSSTransition in={opened} unmountOnExit mountOnEnter classNames='pop' timeout={200}>
                <div className='dialog'>
                    <section>
                        <article>
                            {children}
                        </article>
                        <footer>
                            <button onClick={onToggle}>Cancel</button>
                        </footer>
                    </section>
                </div>
            </CSSTransition>
            <CSSTransition in={opened} unmountOnExit mountOnEnter classNames='fade' timeout={200}>
                <div className='overlay' onClick={onToggle}></div>
            </CSSTransition>
        </Fragment>
    )
}

export default Dialog