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
                    <div className='col-md-4 col-sm-4 col-xs-4 nameCity' data-reactid={index}>
                        <span onClick={props.onClickCity} data-reactid={index}>{key.name}</span>
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
                            <button type='submit' onClick={this.props.onClickDone} className='btn btn-default'>Done
                            </button>
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

        componentWillReceiveProps: function () {

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

            if (!(this.state.data.length)) {
                this.loadCommentsFromServer();
                this.state.cityList.splice(0);
            }

            this.changePosition(event);

            event.target.parentNode.lastElementChild.style.visibility =
                event.target.parentNode.lastElementChild.hasAttribute("id") && "visible" ===
                event.target.parentNode.lastElementChild.style.visibility ? "hidden" : "visible";


            //event.target.value = this.state.cityList;
           // this.setState({data: this.state.data});
        },

        handleClickCity: function (element) {

            if (element.target.parentNode.className === 'col-md-4 col-sm-4 col-xs-4 nameCity') {
                element.target.parentNode.className += ' active';
                //if (this.state.cityList.length) {
                    this.state.cityList.push(' ' + element.target.textContent);
               /* } else {
                    this.state.cityList.push(element.target.textContent);
                }*/
            } else {
                element.target.parentNode.className = 'col-md-4 col-sm-4 col-xs-4 nameCity';
                for (var i = this.state.cityList.length - 1; i >= 0; i--) {

                    if (this.state.cityList[i].trim() === element.target.textContent) {
                        this.state.cityList.splice(i, 1);
                        break;
                    }
                }
            }
            this.setState({cityList: this.state.cityList});
        },

        changePosition: function (element) {

    if (element.target.getBoundingClientRect().top < 220) { // 220 = height 'selectMenu'
        this.changePosition.style = {'marginTop': 1 + 'em', 'visibility': 'visible'};
    } else {
        this.changePosition.style = {'top': -620 + '%', 'visibility': 'visible'};
    }



        },

        handleClickDone: function (element) {
            this.setState({data: []});
            element.target.parentNode.parentNode.parentNode.parentNode.firstElementChild.focus();
            //this.state.cityList.splice(0);
        },

        render: function () {
            if (this.state.data.length) {
                var listCity = (
                    <HTML_Container_SelectMenu text={this.state.data} onClickCity={this.handleClickCity}
                                               style={this.changePosition.style}
                                               onClickDone={this.handleClickDone}
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
                                       value={this.state.cityList}
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

    ReactDOM.render(<SelectMenuApp url="https://pdbq21.github.io/plugin-select-menu/cities.json"/>,
        document.getElementById('selectMenuApp'));
})();
