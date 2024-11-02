import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import {useTranslations} from 'next-intl';

export default function Searchbar(){

    const t = useTranslations('header')
    return(
        <Paper
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 450, height:45 }}
        >
            <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={t("search")}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <SearchIcon />
            </IconButton>
        </Paper>

    );
}