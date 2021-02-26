import React, { Component } from 'react'
import { connect } from 'react-redux'

class itemModel extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item : state.item
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(itemModel)
