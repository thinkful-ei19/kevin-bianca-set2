function daysInAMonth(month, leapYear) {
    if (month !== 'January' || 'February' || 'March' || 'April' || 'May' || 'June' || 'July' || 'August' || 'September' || 'October' || 'November' || 'December') {
        throw new Error('Put a real month please');
    }
    if (leapYear === false) {
            switch( month )
        {
            case "January":
                console.log('January has 31 days')
            break;

            case "February":
                console.log('February has 28 days')
            break;
            
            case "March":
                console.log('January has 31 days')
            break;
            
            case "April":
                console.log('April has 30 days')
            break;
            
            case "May":
                console.log('May has 31 days')
            break;
            
            case "June":
                console.log('June has 30 days')
            break;
            
            case "July":
                console.log('July has 31 days')
            break;
            
            case "August":
                console.log('August has 31 days')
            break;
            
            case "September":
                console.log('September has 30 days')
            break;
            
            case "October":
                console.log('October has 31 days')
            break;
            
            case "November":
                console.log('November has 30 days')
            break;
            
            case "December":
                console.log('December has 31 days')
            break;
        }
    } else if (leapYear === true) {
        switch( month )
            {
                case "January":
                    console.log('January has 30 days')
                break;
    
                case "February":
                    console.log('February has 29 days')
                break;
                
                case "March":
                    console.log('January has 31 days')
                break;
                
                case "April":
                    console.log('April has 30 days')
                break;
                
                case "May":
                    console.log('May has 31 days')
                break;
                
                case "June":
                    console.log('June has 30 days')
                break;
                
                case "July":
                    console.log('July has 31 days')
                break;
                
                case "August":
                    console.log('August has 31 days')
                break;
                
                case "September":
                    console.log('September has 30 days')
                break;
                
                case "October":
                    console.log('October has 31 days')
                break;
                
                case "November":
                    console.log('November has 30 days')
                break;
                
                case "December":
                    console.log('December has 31 days')
                break;
            }
    }    
}

daysInAMonth('dude', true);