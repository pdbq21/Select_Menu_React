/**
 * Created by ruslan on 17.08.16.
 */

var divUpAndDown = React.createClass({
   render: function(){
       return (
           <div className="col-md-12 col-sm-12 col-xs-12 test">
           </div>
       );
   }
});

var SelectMenu = React.createClass({

   render: function(){


       return (
           <div className="col-md-12 col-sm-12 col-xs-12" id="forPhone">
               <form action="" className="inputForm">
                   <input type="text" className="form-control" placeholder="City" />
               </form>
           </div>
       );
   }

});

var SelectMenuApp = React.createClass({



    render: function(){
var HtmldivUpAndDown = (<divUpAndDown />),
    HtmlSelectMenu = (<SelectMenu />);
        return (

            <div className="container">
                <div className="row">
                    {HtmldivUpAndDown}
                        {HtmlSelectMenu}
                    {HtmldivUpAndDown}
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


ReactDOM.render(<SelectMenuApp />, document.getElementById('selectMenu'));
