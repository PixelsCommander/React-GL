var ReactGL = React.createClass({

    componentDidMount: function () {
        var node = React.findDOMNode(this);
        var self = this;

        if (!node.renderer) {
            setTimeout(function () {
                self.glNode = HTMLGL.GLElement.createFromNode(node);
            }, 0);
        }
    },

    render: function () {
        return <div>{this.props.children}</div>;
    }
});

if (typeof module !== 'undefined') {
    module.exports = ReactGL
}

window.ReactGL = ReactGL;