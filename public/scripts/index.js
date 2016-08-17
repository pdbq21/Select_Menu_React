/**
 * Created by ruslan on 17.08.16.
 */
(function () {

    var cityList = {
        city: [],
        ajax: function () {
            $.ajax({
                url: "http://localhost:8000/json-router/cities/",
                type: 'GET',
                dataType: "json",
                success: function (data) {
                    for (var i = 0, dataLength = data.length; i < dataLength; i++) {
                        cityList.city.push(" " + data[i].name);
                    }
                }
            });
        }
    };

/************************ View ************************************/
    var HTML_Container_SelectMenu = React.createClass({

        render: function(){

            var HTML_Li_SelectMenu = this.props.text.map(function(key, index){
                return <li data-reactid={index}>
                        <div className='col-md-4 col-sm-4 col-xs-4 nameCity'>
                            <span>{key.name}</span>
                        </div>
                    </li>

            });//add props 'city' = {data}

            return (
            <div className='container' id='selectMenu'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-xs-12' id='divUl'>

                        <ul className='list-group' id='cityList'>
                            {HTML_Li_SelectMenu}
                        </ul>

                    </div>
                    <div className='col-md-12 col-sm-12 col-xs-12'>
                        <button type='submit' className='btn btn-default'>Done</button>
                    </div>
                </div>
            </div>
            );
        }
    });


/********************* View end ************************************/

    var SelectMenuApp = React.createClass({

        getInitialState: function () {

            return {
                data: []
            };
        },

    loadCommentsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

        handleClickInput: function () {
            //cityList.ajax();

                this.loadCommentsFromServer();
               // setInterval(this.loadCommentsFromServer, this.props.pollInterval);

            return (
console.log(this.state.data)
            );
        },

        render: function () {
            if (this.state.data.length){
                var listCity = (
                    <HTML_Container_SelectMenu text={this.state.data} />
                );
            }
            return (

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 test"> </div>

                        <div className="col-md-12 col-sm-12 col-xs-12" id="forPhone">
                            <form action="" className="inputForm">
                                <input type="text" className="form-control" placeholder="City"
                                       onClick={this.handleClickInput}/>
                                {listCity}

                            </form>
                        </div>

                        <div className="col-md-12 col-sm-12 col-xs-12 test"></div>
                    </div>
                </div>

            );
        }


    });


    ReactDOM.render(<SelectMenuApp url="http://localhost:8000/json-router/cities/" pollInterval={2000} />,
        document.getElementById('selectMenuApp'));
})();