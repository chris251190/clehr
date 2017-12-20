import React from 'react';
import AppBar from 'material-ui/AppBar';
import HeaderMenu from './HeaderMenu';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    toggleMenu = () => {
        let visible = this.state.visible;
        this.setState({visible: !visible});
        console.log(visible);
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Welcome!"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={this.toggleMenu}
                />
                <HeaderMenu visible={this.state.visible}/>
            </div>
        );
    }
}


export default Header;