import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: 'red',
        padding: '24px',
    },

    icons: {
        marginRight: '20px',
    },

    buttons: {
        marginTop: '40px',
    },

    logo: {
        height: '200px',
    },

    toolbar: {
        justifyContent: 'space-between',
    },

    navtabs: {
        display: 'flex',
        justifyContent: 'space-around',
        gap: '10px',
    }

}));

export default useStyles;