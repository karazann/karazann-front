import React from 'react'
import { Motion, spring, presets } from 'react-motion'

import { Wrapper, Dialog, Content, Footer, Button } from './style'

const DialogComponent = ({ opened, onCancel, children }) => {
    return (
        <Motion style={{ opacity: spring(opened ? 1 : 0, presets.stiff), scale: spring(opened ? 1 : .6, presets.wobbly) }}>
            {
                style =>
                <Wrapper>
                    <Dialog opacity={style.opacity} scale={style.scale}>
                        <Content>
                            {children}
                        </Content>
                        <Footer>
                            <Button onClick={onCancel}>Cancel</Button>
                        </Footer>
                    </Dialog>
                </Wrapper>
            }
        </Motion>
    )
}

export default DialogComponent