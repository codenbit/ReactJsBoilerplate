var React = require('react');

var Main = React.createClass({
    render: function(){
        return(
            <div>
                <div>
                    <div>
                        <p>Main.jsx rendered</p>
                         {this.props.children}
                    </div>
                </div>
               
            </div>
        );
    }
});

module.exports = Main;