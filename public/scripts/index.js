/**
 * Created by ruslan on 17.08.16.
 */
(function() {


    var SelectMenu = React.createClass({

        render: function () {


            return (
                <div className="col-md-12 col-sm-12 col-xs-12" id="forPhone">
                    <form action="" className="inputForm">
                        <input type="text" className="form-control" placeholder="City"/>
                    </form>
                </div>
            );
        }

    });

    var SelectMenuApp = React.createClass({
        /*loadCommentsFromServer: function() {
            $.ajax({
                url: this.props.url,
                type: 'GET',
                dataType: 'json',
                cache: false,
                success: function(data) {
                    this.setState({data: data});
                }.bind(this)//,
                error: function(xhr, status, err) {
                 console.error(this.props.url, status, err.toString());
                 }.bind(this)
            });
        },*/

        getInitialState: function(){

          return {
data: []
          };
        },
        /*componentDidMount: function() {
            this.loadCommentsFromServer();
            setInterval(this.loadCommentsFromServer, this.props.pollInterval);
            console.log(this.state.data);
        },*/

        render: function () {

            return (

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 test">{this.state.data}</div>

                        <SelectMenu />

                        <div className="col-md-12 col-sm-12 col-xs-12 test"></div>
                    </div>
                </div>
                /*<div className="container">
                 <div className="row div">
                 <div className="col-md-12 col-sm-12 col-xs-12" id="test" style="height: 1000px">
                 <p id="p"></p>
                 </div>
                 <div className="col-md-12 col-sm-12 col-xs-12" id="forPhone">
                 <form action="" className="inputForm">
                 <input type="text" className="form-control" placeholder="City">
                 </form>
                 </div>
                 </div>
                 <div className="col-md-12 col-sm-12 col-xs-12" style="height: 1000px">
                 </div>
                 </div>*/
            );
        }


    });


    ReactDOM.render(<SelectMenuApp url="http://localhost:8000/json-router/cities/" pollInterval={2000} />,
        document.getElementById('selectMenuApp'));
})();