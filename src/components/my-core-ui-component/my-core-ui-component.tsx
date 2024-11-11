import React from 'react';
import { CContainer, CHeader, CHeaderNav, CHeaderBrand, CButton, CLink } from '@coreui/react';
import { cilPencil } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import '@coreui/coreui/dist/css/coreui.min.css';

const MyCoreUIComponent = () => {
    return (
        <div>
            <CContainer fluid>
                <CHeader className="mb-4">
                    {/* Left Section: Brand */}
                    <CHeaderBrand href="#">CoreUI Brand</CHeaderBrand>

                    {/* Center Section: Navigation */}

                    {/* Right Section: Button */}
                    <CHeaderNav className="ms-auto">
                        <CButton color="primary" variant="outline">
                            <CIcon icon={cilPencil} className="me-2" />
                            Edit
                        </CButton>
                    </CHeaderNav>
                </CHeader>
                <CHeaderNav className="mx-auto">
                    <CLink href="#" className="text-decoration-none">
                        Home
                    </CLink>
                    <CLink href="#" className="text-decoration-none ms-4">
                        About
                    </CLink>
                    <CLink href="#" className="text-decoration-none ms-4">
                        Contact
                    </CLink>
                </CHeaderNav>
            </CContainer>
        </div>
    );
};

export default MyCoreUIComponent;
