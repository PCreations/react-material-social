import React from 'react';

import Tooltip from 'material-ui/lib/tooltip';

import addHoverState from './addHoverState';
import pureComponent from './pureComponent';


const countStyle = {
    lineHeight: '36px',
    color: '#777',
    fontSize: '12px',
    marginRight: 6,
    position: 'relative'
}

const SocialCount = (props) => {

    let countStyleMerged = Object.assign({}, countStyle, props.style)

    countStyleMerged['cursor'] = props.hovered && props.tooltip ? 'pointer' : 'default'

    return (
        <div style={countStyleMerged}>
            {props.count}
            {props.tooltip && (
                <Tooltip
                  label={props.tooltip}
                  show={props.hovered}
                  touch={true}
                  style={{
                    boxSizing: 'border-box',
                    ...props.tooltipStyle
                  }}
                  verticalPosition={props.verticalPosition}
                  horizontalPosition={props.horizontalPosition}/>
            )}
        </div>
    )
}

SocialCount.propTypes = {
    count: React.PropTypes.node,
    style: React.PropTypes.object,
    tooltip: React.PropTypes.string,
    tooltipStyle: React.PropTypes.object,
    verticalPosition: React.PropTypes.oneOf(['bottom','top']),
    horizontalPosition: React.PropTypes.oneOf(['left','center','right'])
}

SocialCount.defaultProps = {
    verticalPosition: 'bottom',
    horizontalPosition: 'center',
    tooltipStyle: {}
}

export default pureComponent(addHoverState(SocialCount))