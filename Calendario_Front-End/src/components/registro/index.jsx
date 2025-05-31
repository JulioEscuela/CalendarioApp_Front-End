import { useState } from "react";
import { useFetchCountries } from "./hooks/useFetchcountries";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import { Visibility,VisibilityOff } from '@mui/icons-material';

export function Registro(){

    const [name,setName] = useState('');
    const [lastname,setLastName] = useState('');
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [countryid,setCountryId] = useState('');
    const [showPassword,setShowPassword] = useState(false);
    const {countries,isLoading} = useFetchCountries();

    if (isLoading) return <h1>Loading...</h1>;

    const handleChangeName = (e) => { 
        setName(e.target.value);
    };

    const handleChangeLastName = (e) => { 
        setLastName(e.target.value);
    };

    const handleChangeUser = (e) => { 
        setUserName(e.target.value);
    };

    const handleChangePassword = (e) => { 
        setPassword(e.target.value);
    };

    const handleChangeEmail = (e) => { 
        setEmail(e.target.value);
    };

    const handleChangeCountry = (event) => {
        setCountryId(event.target.value);
    };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async () => {
        const body = {
            country_id:countryid,
            name,
            lastname,
            username,
            password,
            email
        }

        try {
            const response = await fetch('http://localhost:8080/api/users',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!response.ok){
                throw new Error('Error al registrar usuario');
            }
            
            const data = await response.json();
            alert('Usuario registrado',data);

        } catch (error) {
            console.error('Error en el registro:',error);
        }
    };

    return (
       <Box sx={{width:"800px",height:"550px",mt:"100px",mx:"25%",backgroundColor:"#0000000c",borderRadius:"10px"}}>
            <Box sx={{width:"100%",display:"flex",justifyContent:"center"}}>
                <Typography variant="h1" sx={{mt:"50px",fontSize:"4rem"}}>Registro</Typography>
            </Box>
            <Box sx={{mt:"50px",display:"flex",justifyContent:"space-evenly"}}>
                <TextField variant="outlined" label="Nombre" onChange={handleChangeName} sx={{width:"350px"}}/>
                <TextField variant="outlined" label="Apellido" onChange={handleChangeLastName} sx={{width:"350px"}}/>
            </Box>
            <Box sx={{mt:"50px",display:"flex",justifyContent:"space-evenly"}}>
                <TextField variant="outlined" label="Usuario" onChange={handleChangeUser} sx={{width:"350px"}}/>
                <FormControl variant="outlined" onChange={handleChangePassword} sx={{width:"350px"}}>
                    <InputLabel>Contraseña</InputLabel>
                    <OutlinedInput
                        type={showPassword ? 'text':'password'}
                        endAdornment = {
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Contraseña"
                    />
                </FormControl>
            </Box>
            <Box sx={{mt:"50px",display:"flex",justifyContent:"space-evenly"}}>
                <TextField variant="outlined" label="Correo" onChange={handleChangeEmail} sx={{width:"350px"}}/>
                <Box >
                    <FormControl sx={{width:"350px"}}>
                        <InputLabel>País</InputLabel>
                        <Select 
                            value={countryid} 
                            label="País" 
                            onChange={handleChangeCountry}
                        >
                            {
                                countries.map((country,index)=>(
                                    <MenuItem 
                                        key={index} 
                                        value={country.country_id}
                                    >
                                        {country.name}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Box sx={{mt:"50px",display:"flex",justifyContent:"center"}}>
                <Button variant="contained" onClick={handleSubmit}>Registrar</Button>
            </Box>
       </Box>
    )
}
