const calculate=()=>{
    const inputTemp=document.getElementById('temp').value;
    const tempSelected=document.getElementById('unit');
    const convertSelected=document.getElementById('cunit');
    const valueTemp= unit.options[tempSelected.selectedIndex].value;
    const convertTemp= cunit.options[convertSelected.selectedIndex].value;
    const cTf=(ce)=>{
        let farenheit=((ce*9/5)+32).toFixed(2);
        return farenheit;
    }
    const fTc=(fa)=>{
        let celcius=((fa-32)*5/9).toFixed(2);
        return celcius;
    }
    const kTc=(ke)=>{
        let cel=(ke*1-273.15).toFixed(2);
        return cel;
    }
    const kTf=(ke)=>{
        let fah=(((ke-273.15)*9/5)+32).toFixed(2);
        return fah;
    }
    const fTk=(fa)=>{
        let kelvin=(((fa-32)*5/9)+ 273.15).toFixed(2);
        return kelvin;
    }
    const cTk=(ce)=>{
        let kel=(ce*1 + 273.15).toFixed(2);
        return kel;
    }

    if(valueTemp=='ce' && convertTemp=='fa'){
        document.getElementById("result").innerHTML=cTf(inputTemp)+ "&#176;F";    }
        else if(valueTemp=='fa' && convertTemp=='ce')
        {
            document.getElementById("result").innerHTML=fTc(inputTemp)+ "&#176;C";    
        }
        else if(valueTemp=='ke' && convertTemp=='ce')
        {
            document.getElementById("result").innerHTML=kTc(inputTemp)+ "&#176;C";    
        }
        else if(valueTemp=='ke' && convertTemp=='fa')
        {
            document.getElementById("result").innerHTML=kTf(inputTemp)+ "&#176;F";    
        }
        else if(valueTemp=='fa' && convertTemp=='ke')
        {
            document.getElementById("result").innerHTML=fTk(inputTemp)+ "Kelvin";    
        }
        else  if(valueTemp=='ce' && convertTemp=='ke'){
            document.getElementById("result").innerHTML=cTk(inputTemp)+ " Kelvin";    }
}