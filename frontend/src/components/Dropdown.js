import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { CgProfile } from 'react-icons/cg';
import { BsCaretDownFill } from 'react-icons/bs';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const Dropdown = ({ signOutHandler, userInfo }) => {
	const [ anchorEl, setAnchorEl ] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				color="secondary"
				variant="text"
				id="basic-button"
				aria-controls="basic-menu"
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				{userInfo.name}
				<BsCaretDownFill />
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button'
				}}
			>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<CgProfile />
					</ListItemIcon>{' '}
					<ListItemText>My Account</ListItemText>
				</MenuItem>
				<MenuItem onClick={signOutHandler}>
					<ListItemIcon>
						<RiLogoutCircleRLine />
					</ListItemIcon>
					<ListItemText>Sign Out</ListItemText>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default Dropdown;
