import React, { Component } from 'react';



class MakePost extends Component {

    constructor() {
        super()
        this.state = {
            inputTitle: '',
            inputPrice: '',
            inputLocation: '',
            preferences: [],
            inputDescription: ''
        }
    }



    submitHandler = (e) => {
        e.preventDefault();
        let { inputTitle, inputPrice, inputLocation, preferences, inputDescription } = this.state
        // We need to make a server call and add this data to the server.
        alert("Post successfully made.")
    }


    changeHandler = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target.value;
        const name = target.id;
        console.log(name)
        console.log(value)
        this.setState({
            [name]: value 
          });
    }

    checkboxChangeHandler = (e) => {
        // e.preventDefault();
        const { preferences } = this.state
        const target = e.target;
        const value = target.value;
        let updatedPreferences = preferences
        if(target.checked){
            updatedPreferences.push(value)
        }
        else{
            updatedPreferences = preferences.filter((preference)=> preference != value)
        }

        console.log(updatedPreferences)
        console.log(target.checked)
        this.setState({
            preferences: updatedPreferences
          });
    }



    render() { 
        const { inputTitle, inputPrice, inputLocation, inputDescription } = this.state
        return ( 

            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label for="inputTitle">Title</label>
                    <input type="text" className="form-control" id="inputTitle" placeholder="Try something like: Seeking Roomate or 2 bd room place." value={ inputTitle } onChange = { this.changeHandler }/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="inputPrice">Price</label>
                        <select id="inputPrice" className="form-control" value={ inputPrice} onChange = { this.changeHandler } >
                                <option selected>Choose...</option>
                                <option >$0-$300</option>
                                <option >$330-$600</option>
                                <option >$600-$900</option>
                                <option >$900-$1200</option>
                                <option >$1200-$1500</option>
                                <option >$1500-$2000</option>
                                <option >$2000-$3000</option>
                                <option >$3000+</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputLocation">Location</label>
                        <select id="inputLocation" className="form-control" value={ inputLocation} onChange = { this.changeHandler }>
                                <option selected>Choose...</option>
                                <option >Toronto</option>
                                <option >Waterloo</option>
                                <option >London</option>
                                <option >Vancouver</option>
                                <option >Ottawa</option>
                                <option >Montreal</option>
                                <option >Mississauga</option>
                                <option >Scarborough</option>
                        </select>
                    </div>

                   
                </div>
                <div className="form-group row">
                        <div className="col-sm-2">Preferences</div>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"  value="Male" onChange={this.checkboxChangeHandler}/>
                                <label className="form-check-label" >
                                    Male
                                </label>

                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Female" onChange={this.checkboxChangeHandler}/>
                                <label className="form-check-label" >
                                    Female
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="No Smoking" onChange={this.checkboxChangeHandler}/>
                                <label className="form-check-label" >
                                    No Smoking
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="No Drinking" onChange={this.checkboxChangeHandler}/>
                                <label className="form-check-label" >
                                    No Drinking
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="No Partying" onChange={this.checkboxChangeHandler}/>
                                <label className="form-check-label" >
                                    No Partying
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="No Pets" onChange={this.checkboxChangeHandler} />
                                <label className="form-check-label" >
                                    No Pets
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="420 Friendly" onChange={this.checkboxChangeHandler}/>
                                <label className="form-check-label" >
                                    420 Friendly
                                </label>
                            </div>
                        </div>
                </div>
                <div className="form-group">
                        <label for="inputDescription">Description:</label>
                        <textarea class="form-control rounded-0" id="inputDescription" rows="10" 
                        placeholder="Try Something Like:&#13;&#13;Unit: One bedroom for rent in a 2 bedroom basement apartment in Harbord Village, starting November 1, 2020.&#10;Price: $1150 (includes internet + utilities).&#10;First and last month’s rent required.&#10;Rent Control: Unit was used for residential purposes prior to Nov 15 2018.&#10;Location: Bathurst and Harbord&#10;Relationship to unit: Current tenant seeking roommate.&#10;Lease Term: 12 months, preferably" value={ inputDescription } onChange = { this.changeHandler } />

                        
                </div>
                <div class="form-group">
                    <label for="uploadFile">Upload photos</label>
                    <input type="file" className="  form-control-file" id="uploadFile" />
                </div>
                
                <button type="submit" className="btn btn-warning btn-block">Submit</button>
            </form>


         );
    }
}
 
export default MakePost;