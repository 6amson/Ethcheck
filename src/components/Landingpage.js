import '../css/index.css'



/*

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { InputGroup } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'bootstrap';
import { Form } from 'react-bootstrap';

const styledLink = {
    textDecoration: 'none'
}

const styledLink1 = {
    textDecoration: 'none',
    color: 'black'
}*/


const Landingpage = () => {
    return (
        <div className='container'>
            <div className='navDiv'>
                <nav>
                    <div className='navDiv_logoDiv'><i className="fa-brands fa-ethereum"></i><span>ETHEXPLORER</span></div>
                    <div className='navDiv_HomeDiv'><span>Home</span><div className='homeBorderBottom'></div></div>
                    <div className='navDiv_optionsDiv'>
                        <ul>
                            <li>Blockchain <i class="fa-solid fa-angle-down"></i></li>
                            <li>About Us <i class="fa-solid fa-angle-down"></i></li>
                            <li>More <i class="fa-solid fa-angle-down"></i></li>
                        </ul>
                    </div>
                    <div className='navDiv_buttonDiv'>
                        <button>Connect Wallet</button>
                    </div>
                </nav>
            </div>


            <div className='bodyDiv'>
                <div className='bodyDivSub'>
                    <div className='bodyDiv_h1Text'><h1>Ethereum Blockchain Explorer</h1></div>
                    <div className='bodyDiv_paraText'><h3>Get access to all transactions that occur on the ethereum blockchain.</h3>
                    </div>
                    <div className='bodyDiv_input' ><div className='ethlogoSearch'><i className="fa-brands fa-ethereum"></i><span>ETH</span></div>
                        <i class="fa-solid fa-magnifying-glass"></i><input placeholder="Search by Address, Transaction, or Block"></input></div>
                    <div className='bodyDiv_inputText'>
                        <div><i class="fa-solid fa-wallet"></i><span className='bodyDiv_searchText' id='bodyDiv_searchTextAdd'>Address</span></div>
                        <div><i class="fa-solid fa-cube"></i><span className='bodyDiv_searchText' id='bodyDiv_searchTextBlo'>Block Number</span></div>
                        <div><i class="fa-solid fa-arrow-right-arrow-left"></i><span className='bodyDiv_searchText' id='bodyDiv_searchTextTra'>Transaction Hash</span></div>
                    </div>
                </div>
            </div>

            <div className='infoDis'>
            <div className='infoDisplayDiv'>
                <div className='infoDisplayFirstDiv'>
                    <i className="fa-brands fa-ethereum"></i><div className='infoDisplayPriceDiv'><span>ETHER PRICE</span></div>
                    <div className='infoDisplayValueDiv'>
                        <div className='infoDisplayValueDiv1'>
                            <span>$ 1, 182.32</span>
                        </div>
                        <div className='infoDisplayValueDiv2'>
                            <span>2.58</span><i class="fa-solid fa-angle-down"></i>
                        </div>

                    </div>
                    <div className='vh'></div>
                    <div className='vl'></div>
                </div>

                <div className='infoDisplayFirstDiv'>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i><div className='infoDisplayPriceDiv'><span>TRANSACTIONS</span></div>
                    <div className='infoDisplayValueDiv'>
                        <div className='infoDisplayValueDiv1'>
                            <span>$ 1, 182.32</span>
                        </div>
                        <div className='infoDisplayValueDiv2'>
                            <span>2.58</span><i class="fa-solid fa-angle-down"></i>
                        </div>
                        <div className='vh2'></div>
                        <div className='vl2'></div>
                    </div>
                </div>

                <div className='infoDisplayFirstDiv infoDisplayFirstDivBlock'>
                    <i class="fa-solid fa-cube"></i><div className='infoDisplayPriceDiv'><span>BLOCKS</span></div>
                    <div className='infoDisplayValueDiv'>
                        <div className='infoDisplayValueDiv1'>
                            <span>$ 1, 182.32</span>
                        </div>
                        <div className='infoDisplayValueDiv2'>
                            <span>2.58</span><i class="fa-solid fa-angle-down"></i>
                        </div>
                        <div className='vh3'></div>
                    </div>
                </div>

                <div className='infoDisplayFirstDiv'>
                    <i class="fa-solid fa-earth-oceania"></i><div className='infoDisplayPriceDiv'><span>MARKET CAP</span></div>
                    <div className='infoDisplayValueDiv'>
                        <div className='infoDisplayValueDiv1'>
                            <span>$ 1, 182.32</span>
                        </div>
                        <div className='infoDisplayValueDiv2'>
                            <span>2.58</span><i class="fa-solid fa-angle-down"></i>
                        </div>

                    </div>
                </div>

                <div className='infoDisplayFirstDiv'>
                    <i class="fa-solid fa-clock"></i><div className='infoDisplayPriceDiv'><span>TRANSACTIONS PER SEC</span></div>
                    <div className='infoDisplayValueDiv'>
                        <div className='infoDisplayValueDiv1'>
                            <span>$ 1, 182.32</span>
                        </div>
                        <div className='infoDisplayValueDiv2'>
                            <span>2.58</span><i class="fa-solid fa-angle-down"></i>
                        </div>

                    </div>
                </div>

                <div className='infoDisplayFirstDiv infoDisplayFirstDivMGP'>
                    <i class="fa-solid fa-dollar-sign"></i><div className='infoDisplayPriceDiv'><span>MED. GAS PRICE</span></div>
                    <div className='infoDisplayValueDiv'>
                        <div className='infoDisplayValueDiv1'>
                            <span>$ 1, 182.32</span>
                        </div>
                        <div className='infoDisplayValueDiv2'>
                            <span>2.58</span><i class="fa-solid fa-angle-down"></i>
                        </div>

                    </div>
                </div>


            </div>
            </div>
            <section>
                <div><p>Ronan</p></div>
            </section>
        </div>
        

    );
}


export default Landingpage;