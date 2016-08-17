/**
 * Created by ruslan on 17.08.16.
 */
(function () {


    /************************ View ************************************/
    var HTML_Container_SelectMenu = React.createClass({

        render: function () {
            var props = this.props;
            var HTML_Li_SelectMenu = props.text.map(function (key, index) {
                return <li data-reactid={index}>
                    <div className='col-md-4 col-sm-4 col-xs-4 nameCity'>
                        <span onClick={props.onClickCity}>{key.name}</span>
                    </div>
                </li>

            });

            return (
                <div className='container' id='selectMenu' style={this.props.style}>
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
                data: [],
                position: 0, // position 0 = Up / 1 = Down of relatively windows
                cityList: [] // here add to selected city
            };
        },

        loadCommentsFromServer: function () {
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                cache: false,
                success: function (data) {
                    this.setState({data: data});
                }.bind(this),
                error: function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        },

        handleClickInput: function (event) {
            this.loadCommentsFromServer();
          this.changePosition(event);

        },

        handleClickCity: function (element) {

            console.log(`click span : add class = 'active'`);

        },




    changePosition: function(element){

            if (element.target.getBoundingClientRect().top < 200 ) { // 200 = height 'selectMenu'

                this.changePosition.style = {'marginTop': 1+'em'};

            }else{
                this.changePosition.style = {'top': -620+'%'};

            }

        },

        render: function () {
            if (this.state.data.length) {
                var listCity = (
                    <HTML_Container_SelectMenu text={this.state.data} onClickCity={this.handleClickCity}
                    style={this.changePosition.style}
                    />
                );
            }
            return (

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 test"></div>

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


    ReactDOM.render(<SelectMenuApp url="http://localhost:8000/json-router/cities/"/>,
        document.getElementById('selectMenuApp'));
})();