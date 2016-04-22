import React from 'react'
import Immutable from 'immutable';

const pureComponent = (Component, propsToRemove = []) => {

    class PureComponent extends React.Component {
        constructor(props) {
            super(props);
            this.displayName = 'PureComponent';
        }
        comparator(props, nextProps, state, nextState) {
            return (
                !Immutable.is(Immutable.fromJS(props), Immutable.fromJS(nextProps)) ||
                !Immutable.is(Immutable.fromJS(state), Immutable.fromJS(nextState))
            )
        }
        removeKeysFromObject(obj, keys) {
            var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target;
        }
        shouldComponentUpdate(nextProps, nextState) {
            let propsToCompare = this.removeKeysFromObject(this.props, propsToRemove),
                nextPropsToCompare = this.removeKeysFromObject(nextProps, propsToRemove);

            return this.comparator(propsToCompare, nextPropsToCompare, this.state, nextState)
        }
        render() {
            return <Component {...this.props} {...this.state} />
        }
    }

    return PureComponent;

}

export default pureComponent;