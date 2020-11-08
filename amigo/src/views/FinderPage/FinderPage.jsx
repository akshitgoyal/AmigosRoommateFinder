import React, { Component } from 'react'
import './FinderPage.css'
import { Filter, Posts } from '../../components/finderPageComponents/index.js'
import { MapFinder } from '../../components/mapComponents/MapFinder/MapFinder'

export class FinderPage extends Component {
    constructor() {
        super()
        this.state = {
            view: 'list'
        }
    }

    changeView() {
        let { view } = this.state
        if (view === 'list') {
            this.setState({ view: 'map' })
        } else {
            this.setState({ view: 'list'})
        }
    }

    render() {
        const { view } = this.state
        return (
            <div className='finder'>
                <button onClick={()=> this.changeView()} />
                <Filter />
                {view==='map' && <MapFinder />}
                {view==='list' && <Posts />}
            </div>
        )
    }
}

export default FinderPage
