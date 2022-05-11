import React from 'react';
import { useState, useEffect, createRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {gsap} from 'gsap';
import { showAllProspect } from '../redux/actions/action';
import { upperCaseFirstLatter } from '../utils/upperCaseFirstLatter';
import ProspectArray from '../component/ProspectArray';
import AddPropsectInAdminPage from '../component/AddPropsectInAdminPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus } from '@fortawesome/free-solid-svg-icons';

/**
 * It's a function that returns a div that contains a NavLink to the home page, a h1 that contains a
 * greeting to the admin and a ProspectArray component
 */
const AdminPage = () => {

    /* It's a hook that allows us to access the state of the store. */
    const state = useSelector(state => state )

    /* It's a hook that allows us to dispatch an action to the store. */
    const dispatch = useDispatch()

    /* It's a hook that allows us to create a reference to a DOM element. */
    const title = createRef()

    /* It's a hook that allows us to navigate to a specific page. */
    const navigate = useNavigate()

    /* It's a hook that allows us to create a state variable. */
    const [showAddProspectInAdminPage, setShowAddProspectInAdminPage] = useState(false)

    /* It's a hook that allows us to perform side effects in a functional component. */
    useEffect(()=>{ 
        document.title = `TeraBois | Tableau de bord`;
        whatDoIDo()
        gsap.from(title.current, {
            opacity: 0,
            x: 120,
            duration: 1,
            ease: 'power4.inOut',
        })
    },[])

    /**
     * If the user is not logged in, he is redirected to the home page, otherwise, the function
     * showAllProspect is called
     */
    const whatDoIDo = () => {
        if(!state.isLogin){
            navigate("/accueil")
        }else{
            dispatch(showAllProspect())
        }
    }

    /**
     * It sets the state of the showAddProspectInAdminPage to true
     */
    const showAddProspectModal = ()=>{
        setShowAddProspectInAdminPage(true);
    }

    /* It's a function that returns a div that contains a NavLink to the home page, a h1 that contains
    a
    greeting to the admin and a ProspectArray component */
    return (
        <div style={{minHeight:"100vh"}}>
            {showAddProspectInAdminPage ? <AddPropsectInAdminPage callBack={setShowAddProspectInAdminPage}/>:null}
            <div className='topContainer'>
                <NavLink to="/accueil" >
                    <h1 ref={title}>Bonjour {upperCaseFirstLatter(state.admin.username)} !</h1>
                </NavLink>
                <div className='addPropsectImg'>
                    <FontAwesomeIcon icon={faPlus} onClick={()=>showAddProspectModal()}/> 
                </div>
            </div>
            <ProspectArray />
        </div>
    );
};

export default AdminPage;