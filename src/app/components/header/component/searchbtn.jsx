"use client"
import { Box, Divider, IconButton, InputBase, Paper, ClickAwayListener } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function Searchbtn() {
    const t = useTranslations('header');
    
    const [showSearch, setShowSearch] = useState(false);
    const handleClickAway = () => {
        setShowSearch(false);
    };

    return (
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton onClick={() => setShowSearch((prev) => !prev)}>
                <SearchIcon />
            </IconButton>
            {showSearch && (
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Paper
                        component="form"
                        sx={{
                            position: 'fixed',
                            top: 0, // عرض Paper أسفل Header
                            left: 0,
                            width: '100%',
                            height:{xs:55, sm:63},
                            zIndex: 1101,
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0 10px',
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder={t("search")}
                        />
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton color="error" sx={{ p: '10px' }} aria-label="search" onClick={handleClickAway}>
                            <ClearIcon />
                        </IconButton>
                    </Paper>
                </ClickAwayListener>
            )}
        </Box>
    );
}

