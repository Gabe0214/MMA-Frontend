import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './FilterModal.scss'

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      justifyContent: 'flex-start',
    
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: 'none',
      boxShadow: theme.shadows[5],
      width: '260px',
      paddingLeft: '4%'
    },
  }));



  
    export const FilterModal = ({modal, setModal, brands, filter}) => {
        const classes = useStyles();
  
        const handleClose = () => {
        setModal(false);
        };
        

        const itemClicked = (brand) => {
            setModal(false)
            filter(brand)
        }
        return (
        <div>
          {/* <button type="button" onClick={handleOpen}>
            react-spring
          </button> */}
          <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={modal}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            >
            <Fade in={modal}>
                <div className={classes.paper}>
                    <h5 id="modal-title">Brands:</h5>
                    <ul className="brands-container">
                        {brands && brands.map((brand, i) => (
                            <li key ={i} onClick={()=>itemClicked(brand)}>{brand.toUpperCase()}</li>
                        ))}
                        <div className='under-line'></div>
                    </ul>
                </div>
            </Fade>
          </Modal>
        </div>
        );
  }