import React from 'react';
import {Navbar, NavbarBrand,Card} from 'reactstrap'
class Quangquy extends React.Component {
    render() {
        return(
        <React.Fragment>
          <Navbar dark>
            <div className="container">
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <Card>
               <div className="container">
                   <div className="row row-header">
                       <div className="col-12 col-sm-6">
                           <h1>Ristorante con Fusion</h1>
                           <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                       </div>
                   </div>
               </div>
           </Card>
        </React.Fragment>
        );
      }
}
export default Quangquy