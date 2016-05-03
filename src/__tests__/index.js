import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
var PureRenderMixin = require('react-addons-pure-render-mixin');

import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';

import pureComponent from '../components/pureComponent';

let renderingCount = 0

const FooComponent = (props) => {

    renderingCount++;

    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                {props.items.map(item => (
                    <li key={item.title}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

class FooComponentWithPureMixin extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        renderingCount++;

        return (
            <div>
                <h1>{this.props.title}</h1>
                <ul>
                    {this.props.items.map(item => (
                        <li key={item.get('title')}>{item.get('title')}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

FooComponent.propTypes = {
    title: React.PropTypes.string.isRequired,
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
        title: React.PropTypes.string.isRequired
    }))
}

const PureFooComponent = pureComponent(FooComponent);

describe('FooComponent', () => {

    it('renders as many li as item in props.items', () => {
        renderingCount = 0;
        const wrapper = shallow(<FooComponent title={'Foo Title'} items={[{title: 'item 1'},{title: 'item 2'}]}/>)
        const listItems = wrapper.find('li');
        expect(listItems).to.have.length(2);
        expect(listItems.at(0).text()).to.equal('item 1');
        expect(listItems.at(1).text()).to.equal('item 2');
    })

    it('rerenders if props change', () => {
        renderingCount = 0;
        const title = "Foo Title";
        let items = [{title: 'item 1'},{title: 'item 2'}];
        let wrapper = shallow(<FooComponent title={title} items={items}/>)
        let listItems = wrapper.find('li');

        expect(listItems).to.have.length(2);
        expect(listItems.at(0).text()).to.equal('item 1');
        expect(listItems.at(1).text()).to.equal('item 2');
        expect(wrapper.find('li')).to.have.length(2);

        items = [{title: 'item 1'},{title: 'item 3'}];
        wrapper = shallow(<FooComponent title={title} items={items}/>);
        listItems = wrapper.find('li');
        expect(listItems).to.have.length(2);
        expect(listItems.at(0).text()).to.equal('item 1');
        expect(listItems.at(1).text()).to.equal('item 3');

        expect(renderingCount).to.equal(2)
    })

    it('rerenders if props do not change', () => {
        renderingCount = 0;
        const title = "Foo Title";
        let items = [{title: 'item 1'},{title: 'item 2'}];
        let wrapper = shallow(<FooComponent title={title} items={items}/>)
        let listItems = wrapper.find('li');

        expect(listItems).to.have.length(2);
        expect(listItems.at(0).text()).to.equal('item 1');
        expect(listItems.at(1).text()).to.equal('item 2');
        expect(wrapper.find('li')).to.have.length(2);

        wrapper = shallow(<FooComponent title={title} items={items}/>);
        listItems = wrapper.find('li');
        expect(listItems).to.have.length(2);
        expect(listItems.at(0).text()).to.equal('item 1');
        expect(listItems.at(1).text()).to.equal('item 2');

        expect(renderingCount).to.equal(2)
    })

})

/*describe('PureFooComponent', () => {
    it('renders as many li as item in props.items', () => {
        renderingCount = 0;
        const wrapper = mount(<PureFooComponent title={'Foo Title'} items={[{title: 'item 1'},{title: 'item 2'}]}/>)
        const listItems = wrapper.find('li');
        expect(listItems).to.have.length(2);
        expect(listItems.at(0).text()).to.equal('item 1');
        expect(listItems.at(1).text()).to.equal('item 2');
    })

    it('rerenders if props change', () => {
        renderingCount = 0;
        const title = "Foo Title";
        const container = document.createElement('div');
        let items = [{title: 'item 1'},{title: 'item 2'}];
        let component = ReactDOM.render(
            <PureFooComponent title={title} items={items}/>,
            container
        );

        items = [{title: 'item 1'},{title: 'item 3'}];
        component = ReactDOM.render(
            <PureFooComponent title={title} items={items}/>,
            container
        );

        expect(renderingCount).to.equal(2)
    })

    it('does not rerenders if props do not change', () => {
        renderingCount = 0;
        const title = "Foo Title";
        const container = document.createElement('div');
        let items = [{title: 'item 1'},{title: 'item 2'}];
        let component = ReactDOM.render(
            <PureFooComponent title={title} items={items}/>,
            container
        );

        items = [{title: 'item 1'},{title: 'item 2'}];
        component = ReactDOM.render(
            <PureFooComponent title={title} items={items}/>,
            container
        );

        expect(renderingCount).to.equal(1)
    })
})*/

describe('FooComponentWithPureMixin', () => {
    it('renders as many li as item in props.items', () => {
        renderingCount = 0;
        const wrapper = mount(<FooComponentWithPureMixin title={'Foo Title'} items={Immutable.fromJS([{title: 'item 1'},{title: 'item 2'}])}/>)
        const listItems = wrapper.find('li');
        expect(listItems).to.have.length(2);
        expect(listItems.at(0).text()).to.equal('item 1');
        expect(listItems.at(1).text()).to.equal('item 2');
    })

    it('rerenders if props change', () => {
        renderingCount = 0;
        const title = "Foo Title";
        const container = document.createElement('div');
        let items = Immutable.fromJS([{title: 'item 1'},{title: 'item 2'}]);
        let component = ReactDOM.render(
            <FooComponentWithPureMixin title={title} items={items}/>,
            container
        );

        items = items.updateIn([1,'title'], () => 'item 3')
        console.log(items);
        component = ReactDOM.render(
            <FooComponentWithPureMixin title={title} items={items}/>,
            container
        );

        expect(renderingCount).to.equal(2)
    })

    it('does not rerenders if props do not change', () => {
        renderingCount = 0;
        const title = "Foo Title";
        const container = document.createElement('div');
        let items = Immutable.fromJS([{title: 'item 1'},{title: 'item 2'}]);
        let component = ReactDOM.render(
            <FooComponentWithPureMixin title={title} items={items}/>,
            container
        );

        component = ReactDOM.render(
            <FooComponentWithPureMixin title={title} items={items}/>,
            container
        );

        expect(renderingCount).to.equal(1)
    })
})


/*describe('pureComponent', () => {

    it('renders composed component as a pureComponent', () => {
        const container = document.createElement('div');


        let component = ReactDom
    })
})

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Shallow Rendering', () => {

    it('to have three `.icon-test`s', () => {
        const wrapper = shallow(<MyComponent />);
        expect(wrapper.find('.icon-test')).to.have.length(3);
    });

    it('simulates click events', () => {
        const buttonClick = sinon.spy();
        const wrapper = shallow(
          <MyComponent handleClick={buttonClick} />
        );
        wrapper.find('button').simulate('click');
        expect(buttonClick.calledOnce).to.equal(true);
    });

});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('Full DOM Rendering', () => {

    it('allows us to set props', () => {
        const wrapper = mount(<MyComponent bar='baz' />);
        expect(wrapper.props().bar).to.equal('baz');
        wrapper.setProps({ bar: 'foo' });
        expect(wrapper.props().bar).to.equal('foo');
    });

    it('calls componentDidMount', () => {
        sinon.spy(MyComponent.prototype, 'componentDidMount');
        const wrapper = mount(<MyComponent />);
        expect(MyComponent.prototype.componentDidMount.calledOnce).to.be.true;
        MyComponent.prototype.componentDidMount.restore();
    });

});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('Static Rendered Markup', () => {

    it('renders three `.icon-test`s', () => {
        const wrapper = render(<MyComponent />);
        expect(wrapper.find('.icon-test').length).to.equal(3);
    });

});*/