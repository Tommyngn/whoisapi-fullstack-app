import React, { useState } from 'react'
import Header from './components/header'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container  from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import { InputPadding, ItemSpacing, TextColorResult, TextBoxPadding } from './styles';
import {FixedSizeList as List} from 'react-window';


const retrieveDomainInfo = async (search, setResult) => {
    let req = search
    req = req.replaceAll(".", "-")

    const response = await fetch(`https://whoisapi-server.herokuapp.com/api/${req}`)
    .then((res) => {
        console.log(res)
        return res.json()
    }).catch((error) => {
        console.log(error)
    })
    
    setResult(JSON.stringify(response, null, 2))

}


const LandingPage = () => {
    const [searchText, setSearchText] = useState("")
    const [apiResult, setApiResult] = useState("")

    const Row = ({style}) => (
        <TextColorResult>
            <Typography style={style}>
                <pre>
                    {apiResult}
                </pre>
            </Typography>
        </TextColorResult>
    )

    return (
        <div>
            <Header />
            <Container>
                <Grid xs={12}>
                    <InputPadding>
                        <Typography>
                            Input domain or IP address. Example: google.com
                        </Typography>
                        <TextField 
                            fullWidth 
                            variant='outlined' 
                            value={searchText} 
                            onChange={(event) => {setSearchText(event.target.value);}} 
                        />
                    </InputPadding> 
                </Grid>
                <Grid xs={4}>
                    <ItemSpacing>
                        <Button variant='contained' onClick={() => {
                            retrieveDomainInfo(searchText, setApiResult)
                        }}>
                            Search
                        </Button>
                    </ItemSpacing>
                </Grid>
                { apiResult !== "" ? 
                    (<TextBoxPadding>
                            <List height={350} width={1000} itemCount={1} itemSize={35} style={{backgroundColor: "grey"}}>
                                {Row}
                            </List>
                    </TextBoxPadding> ) : (<></>)
                }
            </Container>    
        </div>

    )
}

export default LandingPage;