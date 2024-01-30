import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import useStyles from "./styles";
import { useGetCrytosQuery } from "../../services/cryptoApi";

const Homepage = () => {
    const { data, isLoading } = useGetCrytosQuery();
    console.log(data);
    return ( 
        <Typography marginTop="20px" variant="h1">Homepage</Typography>
    );
}
 
export default Homepage;