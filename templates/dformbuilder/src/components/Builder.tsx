import { DynamicFormDragBuilder } from "qyb-react-easyui";
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import React, { Component } from 'react'

export default class Builder extends Component<any> {
    render() {
        return (
            <DndProvider backend={HTML5Backend}>
                <DynamicFormDragBuilder></DynamicFormDragBuilder>
            </DndProvider>
        )
    }
}

