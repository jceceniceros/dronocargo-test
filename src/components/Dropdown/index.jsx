import { useState } from 'react'

import { Box, Menu, MenuItem } from '@mui/material'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import Button from 'src/components/Button';

const Dropdown = (props) => {
  const { buttonId, buttonLabel, menuId, menuActions } = props

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const buttonIcon = open ? (
    <KeyboardArrowUpIcon fontSize="inherit" color="inherit" />
  ) : (
    <KeyboardArrowDownIcon fontSize="inherit" color="inherit" />
  );

  return (
    <Box>
      <Button
        id={buttonId}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="white"
        onClick={handleClick}
      >
        {buttonLabel}
        <span>{buttonIcon}</span>
      </Button>

      <Menu
        id={menuId}
        aria-labelledby={buttonId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {menuActions.map((action) => (
          <MenuItem key={`${buttonId}-${action.label}`} onClick={action.onClick}>{action.label}</MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default Dropdown

