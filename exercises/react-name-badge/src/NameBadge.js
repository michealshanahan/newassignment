import React, {Component} from 'react'



class NameBadge extends Component{
    constructor() {
        super ()
        this.state = {
            fName: '',
            lName: '',
            email: '',
            placeOfBirth: '',
            phone: '',
            favoriteFood: '',
            tellUsAboutYourself: '',
            badges: [{

                fName: 'Marve',
                lName: 'Last',
                email: 'm_stenv@123.com',
                placeOfBirth: 'Utah',
                phone: '4359998888',
                favoriteFood: 'food',
                tellUsAboutYourself: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quod consequuntur ipsum, eligendi consequatur iste officia a, aperiam nesciunt excepturi unde accusantium dolor maiores. Quae tempora ipsum iste consectetur dolorem.'
            
            }]
        }
    }
    handleChange = (event) => {
        const { name, value} = event.target
        this.setState({[name]: value})
    }
    
    mappedBadges = () => {
        let {badges} = this.state
        
        return badges.map((badge, index) => {
            let pNumber = badge.phone
            let areaCode = pNumber.slice(0, 3)
            let prefix = pNumber.slice(3, 6)
            let lastFour = pNumber.slice(6, 10)
            if(index % 2 === 0){
                return (
                    <div key = {index} className = 'badgeContainer' >
                        <div className = 'badgeTitle blueTitle' ><span>Badge:</span></div>
                        <div className = 'input' >{`Name: ${badge.fName} ${badge.lName}`}</div>
                        <div className = 'input'>{`Phone: ${areaCode}-${prefix}-${lastFour}`}</div>
                        <div className = 'input' >{`Place  of Birth: ${badge.placeOfBirth}`}</div>
                        <div className = 'input'>{`Favorite Food: ${badge.favoriteFood}`}</div>
                        <div className = 'input' >{`Email: ${badge.email}`}</div>
                        <div className = 'about-me'>{`${badge.tellUsAboutYourself}`}</div>
                    </div>
                )
            } else {
                return(
                    <div key = {index} className = 'badgeContainer' >
                        <div className = 'badgeTitle redTitle' ><span>Badge:</span></div>
                        <div className = 'input' >{`Name: ${badge.fName} ${badge.lName}`}</div>
                        <div className = 'input'>{`Phone: ${areaCode}-${prefix}-${lastFour}`}</div>
                        <div className = 'input' >{`Place  of Birth: ${badge.placeOfBirth}`}</div>
                        <div className = 'input'>{`Favorite Food: ${badge.favoriteFood}`}</div>
                        <div className = 'input' >{`Email: ${badge.email}`}</div>
                        <div className = 'about-me'>{`${badge.tellUsAboutYourself}`}</div>
                    </div>
                )
            }
        })
    }
   checkLength(what, howLong){
       if(what.value.length > howLong){
           return what.value
       }else{
            alert(`${howLong} Characters Required in ${what.placeholder} Field`)
            return what.value
       }
    }
    

    submitButton = (event) => {
        event.preventDefault()
        let {fName, lName, email, phone, placeOfBirth, favoriteFood, tellUsAboutYourself} = event.target
        
        const badge = {
            fName: this.checkLength(fName, 3),
            lName: this.checkLength(lName, 3),
            email: this.checkLength(email, 3),
            phone: this.checkLength(phone, 9),
            placeOfBirth: this.checkLength(placeOfBirth, 3),
            favoriteFood: this.checkLength(favoriteFood, 3),
            tellUsAboutYourself: this.checkLength(tellUsAboutYourself, 3)
        }
        if((fName.value.length > 2) && (lName.value.length > 2 ) && (phone.value.length > 9) && (email.value.length > 2 ) &&(placeOfBirth.value.length > 2 ) &&(favoriteFood.value.length > 2 ) && (tellUsAboutYourself.value.length > 2 ) ){
            this.setState(prev => {
                return ({badges: [...prev.badges, badge],
                    fName: '',
                    lName: '',
                    email: '',
                    phone: '',
                    placeOfBirth: '',
                    favoriteFood: '',
                    tellUsAboutYourself: ''  
                })
            })
        }else {console.log('failed')}
    }

    

    render(){
        
        return (
            <div>
                <form className = 'badgeForm' name = 'badgeFrom' onSubmit = {this.submitButton}>
                    <input value = {this.state.fName} onChange = {this.handleChange} className = 'input' name = 'fName' placeholder = 'First Name' ></input>
                    <input value = {this.state.lName} onChange = {this.handleChange} className = 'input' name = 'lName' placeholder = 'Last Name' ></input>
                    <input value = {this.state.email} onChange = {this.handleChange} className = 'red input' type = 'email' name = 'email' placeholder = 'Email' ></input>
                    <input value = {this.state.placeOfBirth} onChange = {this.handleChange} className = 'input' name = 'placeOfBirth' placeholder = 'Place of Birth' ></input>
                    <input value = {this.state.phone} onChange = {this.handleChange} className = 'input' type = 'phone' name = 'phone' placeholder = 'Phone' ></input>
                    <input value = {this.state.favoriteFood} onChange = {this.handleChange} className = 'input' name = 'favoriteFood' placeholder = 'Favorite Food' ></input>
                    <textarea value = {this.state.tellUsAboutYourself} onChange = {this.handleChange} className = 'text-area' type = 'textarea' rows = '8' cols = '90' name = 'tellUsAboutYourself' placeholder = 'Tell Us About Yourself' ></textarea>
                    <input className ="button" type = 'submit'/>
                </form>
                {this.mappedBadges()}
            </div>
        )
    }
}

export default NameBadge