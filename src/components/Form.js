


import React, { useState } from 'react'

function Form(){

    const[formData,setFormData]=useState({firstName:"",lastName:"",email:"",country:"",address:"",
    state:"",zipcode:"",comment:false,candidate:false,offers:false,notification:""});
    function changeHandler(event)
    {
        const{name,value,checked,type}=event.target;

        setFormData(preData=>{
            return{
                ...preData,
                [name]:type==="checkbox"?checked:value
            }
        });
        console.log(formData);
        console.log(event.target);

    }

function submitHandler(event)
  {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={submitHandler} className='form-tag'>
          <h1>React Form Data Collector</h1>
      <div>
        <label htmlFor="firstName">First Name</label>
        <br/>
        <input placeholder='Blesson' type="text" name="firstName" id="firstName" onChange={changeHandler} value={formData.firstName}/>
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <br/>
        <input placeholder='Sam' type="text" name="lastName" id="lastName" onChange={changeHandler} value={formData.lastName}/>
      </div>

      <div>
        <label htmlFor="email">Email address</label>
        <br/>
        <input placeholder='bs@gmail.com' type="email" name="email" id="email" onChange={changeHandler} value={formData.email}/>
      </div>

      <div>
        <label htmlFor="country">Country</label>
        <br/>
        <select onChange={changeHandler} name='country' id='country' value={formData.country}>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="cananda">Canada</option>
        </select>
      </div>

      <div>
        <label htmlFor="address">Street Address</label>
        <br/>
        <input placeholder='1234 Thiruvala' type="text" name="address" id="address" onChange={changeHandler} value={formData.address}/>
      </div>

      <div>
        <label htmlFor="state">State</label>
        <br/>
        <input placeholder='Kerala' type="text" name="state" id="state" onChange={changeHandler} value={formData.state}/>
      </div>

      <div>
        <label htmlFor="zipcode">Street Address</label>
        <br/>
        <input placeholder='689626' type="text" name="zipcode" id="zipcode" onChange={changeHandler} value={formData.zipcode}/>
      </div>

      <div className='checkbox'>
        <label>By Email</label>
        <br/>
        <input className='box' type="checkbox" name='comment' id='comment' onChange={changeHandler} checked={formData.comment}/>
        <label htmlFor='notification'>Comments</label>
        <p>Get notified when someones post a comment on a posting.</p>
        
        <input className='box' type="checkbox" name='candidate' id='candidate' onChange={changeHandler} checked={formData.candidate}/>
        <label htmlFor='candidate'>Candidates</label>
        <p>Get notified when a candidate applies for a job.</p>

        <input className='box' type="checkbox" name='offers' id='offers' onChange={changeHandler} checked={formData.offers}/>
        <label htmlFor='offers'>Offers</label>
        <p>Get notified when a candidate accepts or reject an offer.</p>
      </div>

      <div className='checkbox'>
        <label>Push Notification</label>
        <p className='bottom-p'>There are delivered via SMS to your mobile phone.</p>
        <br/>
        
        <input className='dot' type='radio' onChange={changeHandler} name="notification" id='everything' value='everything' checked={formData.notification==='everything'}></input>
        <label htmlFor='notification'>Everything</label>

        <br/>

        <input className='dot' type='radio' onChange={changeHandler} name="notification" id='same as email' value='same as email' checked={formData.notification==='same as email'}></input>
        <label htmlFor='notification'>Same as email</label>
        
        <br/>

        <input className='dot' type='radio' onChange={changeHandler} name="notification" id='no push notification' value='no push notification' checked={formData.notification==='no push notification'}></input>
        <label htmlFor='notification'>No push notification</label>
      </div>

        
    </form>
  )
}

export default Form
