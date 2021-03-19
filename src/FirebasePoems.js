import './App.css';
import Poem from './Poem';
import Facts from './Facts';
import PastLogo from './PastLogo';
import { BrowserRouter as Link } from 'react-router-dom';



function FirebasePoems() {
    return (
        <body className="firebase">
            <main className="firebase-container">
                <div>
                    <Link to="/">
                        <PastLogo />
                    </Link>
                </div>
                <h1 className="firebaseTitle">Past Poems</h1>
                    <section className="past-poems-container">
                        <div className="imageContainer">
                            {/* <img src="./assets/fridge.png" className="fridgeImage" alt="" /> */}
                        </div>
                        <Poem />
                        <Facts />
                    </section>
                
            </main>
        </body>
    )
}

export default FirebasePoems;