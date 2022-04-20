import React from "react"
import AppBar from 'material-ui/AppBar';

var styles = {
    appBar: {
        backgroundColor: '#E53935',
        minHeight: 50,
        color: "black"
    },
    tabs: {
        width: '100%',
    },
}

export default class HeaderOuter extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    style={styles.appBar}
                    title="App Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    showMenuIconButton={false}

                />
                <br /><br />
<center>
                                <div className="fb-login-button" data-max-rows="1" data-size="medium" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true"></div>
</center>
                {this.props.children}
            </div>
        )
    }
}

