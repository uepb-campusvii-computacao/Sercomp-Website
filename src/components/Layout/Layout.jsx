import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import * as PropTypes from "prop-types";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
