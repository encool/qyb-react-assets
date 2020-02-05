import React, { Component } from 'react';
import { connect } from 'dva';
import Builder from './components/Builder';

class BLOCK_NAME_CAMEL_CASE extends Component<any> {

    componentDidMount() {
        this.props.dispatch({
            type: 'BLOCK_NAME/fetch',
            payload: {
                page: 1,
            },
        });
    }

    render() {
        return (
            <div>
                <Builder />
            </div>
        );
    }
}

export default connect()(BLOCK_NAME_CAMEL_CASE);
