import React from "react"


export default function Open() {
    const [search, setsearch] = React.useState(null);
    const [data, setdata] = React.useState("Mumbai")


    React.useEffect(() => {

        const fetchapi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=e53bf8a9c0d96a9cea2bcf2277c8bac0`
            const response = await fetch(url)
            const resjson = await response.json()
            setdata(resjson.main)
        };
        fetchapi();
    }, [search])



    function Inputhandle(event) {
        setsearch(event.target.value);
    }



    return (

        <div style={{
            width: "450px", border: "1px solid black", height: "550px", margin: 'auto', background: 'linear-gradient(to left, #2bc0e4, #eaecc6)', color: '#707070',
            display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
            <h1 style={{ marginBottom: '0px', marginTop: '0px' }}>WeatherIn </h1>
            <input
                type="search"
                onChange={Inputhandle}
                style={{
                    style: 'none', width: '80%', height: '50px',
                    borderRadius: '30px', marginTop: '10px', paddingLeft: '20px', fontSize: '25px', fontWeight: '500px',
                    fontFamily: 'Anuphan', fontFamily: 'cursive'

                }}
            />


            <div style={{
                marginTop: '15px', border: '1px solid black',
                borderRadius: '20px', width: '80%', height: '75%', backgroundColor: 'white',
                display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
                <h3 style={{
                    fontSize: '30px', fontFamily: 'Oswald'
                }}
                >{search}</h3>

                {
                    !data ? (
                        <h1 style={{ fontFamily: 'cursive' }}>"NO Data Found"</h1>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >

                            <h2 style={{ fontSize: '30px' }}>{data.temp}°Cel</h2>
                            <p
                                style={{ fontSize: '20px', fontFamily: 'cursive', marginTop: '10px' }}
                            >Min: {data.temp_min}°Cel | Max: {data.temp_max}°Cel</p>
                        </div>
                    )
                }
                <img src="download (1).png" alt="image"
                    style={{ borderRadius: '50%', width: '150px' }}
                />
            </div>


        </div>
    )
}