
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import '../components/form-style.css'

function Form() {
  const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    county: '',
    availability: '',
    conflict: '',
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    event.preventDefault()
    setFormState({ ...formState, [event.target.id]: event.target.value })
    if (event.target.value === '') {
      setFormState({ ...formState, [event.target.id]: 0 })
    }
  }

  const handleMessage = (e) => {
    e.preventDefault()
    emailjs
      .send(
        'service_sputs35',
        'template_x2tmj8c',
        formState,
        '-g6CgSoAgcOI1wfb6'
      )
      .then(
        function (response) {
          alert(
            `Thank you for reaching out, ${formState.business_name}! Someone will respond shortly!`
          )
        },
        function (error) {
          alert('Sorry:', error)
        }
      )
    setFormState(initialState)
  }

  return (
    <div className="contact_card">
      <div className='contact_form'>
      <div id="contact-form">
      <form onSubmit={handleMessage} method="post" action="/">
        <div className='row'>
        <div>
          <label for="first_name">
            <span class="required" id='name_span'>First Name:</span> 
            <input onChange={handleChange} type="text" id="first_name" name="first_name" value={formState.first_name} placeholder="First Name" required="required" tabindex="1" />
          </label> 
      </div>
      <div>
          <label for="last_name">
            <span class="required" id='name_span'>Last Name:</span> 
            <input onChange={handleChange} type="text" id="last_name" name="last_name" value={formState.last_name} placeholder="Last Name" required="required" tabindex="2" />
          </label> 
      </div>
      <div>
          <label for="email">
            <span class="required">email:</span> 
            <input onChange={handleChange} type="text" id="email" name="business_name" value={formState.email} placeholder="Email Address" required="required" tabindex="3" />
          </label> 
      </div>
        </div>
      <div>             
          <label for="county">
          <span class="required">Which Northwest Iowa County do you live in?</span><br/>
            <select onChange={handleChange} id="county" name="county" tabindex="4">  
              <option value="none selected">Select One</option>     
              <option value="Buena Vista">Buena Vista</option> 
              <option value="Calhoun">Calhoun</option>
              <option value="Cherokee">Cherokee</option>
              <option value="Clay">Clay</option>
              <option value="Dickinson">Dickinson</option>
              <option value="Emmet">Emmet</option>
              <option value="Humboldt">Humboldt</option>
              <option value="Ida">Ida</option>
              <option value="Kossuth">Kossuth</option>
              <option value="Lyon">Lyon</option>
              <option value="O'Brien">O'Brien</option>
              <option value="Osceola">Osceola</option>
              <option value="Palo Alto">Palo Alto</option>
              <option value="Plymouth">Plymouth</option>
              <option value="Pocahontas">Pocahontas</option>
              <option value="Sac">Sac</option>
              <option value="Sioux">Sioux</option>
              <option value="Webster">Webster</option>
              <option value="Woodbury">Woodbury</option>
            </select>
          </label>
          <div>            
          <label for="rule_1">
          <h3 className='rule_intro'>Do you understand why the following rules are important to the group?</h3><br/>
          <h3 className='rule_intro2'>Do you agree to uphold and enforce them to the best of your ability?</h3>
          <div className='rule'>
            <h3 className='rule_title'>1.) Follow All driving Laws</h3>
            <p>"While gathering photos, videos and data to share with the group, make sure you are following all traffic laws and maintaining safe driving practices."</p>          
          </div>
            <select onChange={handleChange} id="rule_1" name="rule_1" tabindex="5">  
              <option value="None selected">Select One</option>     
              <option value="YES">Yes</option> 
              <option value="NO">No</option>
            </select>
          </label>
      </div>
      <div>             
          <label for="rule_2">
          <div className='rule'>
            <h3 className='rule_title'>2.) Do not post photos of videos of traffic accidents</h3>
            <p>"Out of respect for the individuals involved, please do not post pictures or videos of traffic accidents. This is also a traffic hazard and potentially interferes with emergency services."</p>          
          </div>
            <select onChange={handleChange} id="rule_2" name="rule_2" tabindex="6">  
              <option value="None selected">Select One</option>     
              <option value="YES">Yes</option> 
              <option value="NO">No</option>
            </select>
          </label>
      </div>
      <div>             
          <label for="rule_3">
          <div className='rule'>
            <h3 className='rule_title'>3.) Maintain Respect within the community</h3>
            <p>"Please be respectful and courteous of others. Scolding, bashing, or name calling is prohibited. Report. Don't post inflammatory responses. Threatening anyone within the group will result in immediate expulsion from the group, and law enforcement will be contacted."</p>          
          </div>
            <select onChange={handleChange} id="rule_3" name="rule_3" tabindex="7">  
              <option value="None selected">Select One</option>     
              <option value="YES">Yes</option> 
              <option value="NO">No</option>
            </select>
          </label>
      </div>
      <div>             
          <label for="rule_4">
          <div className='rule'>
            <h3 className='rule_title'>4.) Share Experiences. Do not recommend</h3>
            <p>"The purpose of this group is to provide real life/real time experiences. Do not make recommendations for travel. Each individual is solely responsible for making their own travel decisions."</p>          
          </div>
            <select onChange={handleChange} id="rule_4" name="rule_4" tabindex="8">  
              <option value="None selected">Select One</option>     
              <option value="YES">Yes</option> 
              <option value="NO">No</option>
            </select>
          </label>
      </div>
      <div>             
          <label for="rule_5">
          <div className='rule'>
            <h3 className='rule_title'>5.) Keep it relevant</h3>
            <p>"To keep information relevant, road conditions outside of NW IA and posts unrelated to weather/road conditions will be removed. *Travel to nearby airports & major cities is relevant*"</p>
            <p>"IA 511 posts and comments are considered irrelevant. Repeated comments recommending IA511 will result in the loss of commenting abilities."</p>
          </div>
            <select onChange={handleChange} id="rule_5" name="rule_5" tabindex="9">  
              <option value="None selected">Select One</option>     
              <option value="YES">Yes</option> 
              <option value="NO">No</option>
            </select>
          </label>
      </div>
      <div>             
          <label for="rule_6">
          <div className='rule'>
            <h3 className='rule_title'>6.) Selling anything is prohibited</h3>
            <p>"Please keep personal or business promotion out of this group. When a spam/sales post is made in the group, it will be deleted. Admin will assume the account is fake & remove it from the group."</p>
            <p>"There will occasionally be "promo threads" where specific things can be advertised/promoted within the comments section."</p>          
          </div>
            <select onChange={handleChange} id="county" name="county" tabindex="10">  
              <option value="None selected">Select One</option>     
              <option value="YES">Yes</option> 
              <option value="NO">No</option>
            </select>
          </label>
      </div>
      <div>             
          <label for="rule_7">
          <div className='rule'>
            <h3 className='rule_title'>7.) "'Why was my post deleted?' posts are prohibited."</h3>
            <p>"
There are 21,000+ people in this group. If your post or comment was deleted, there was a valid reason. Posting about it is not necessary, creates unnecessary drama, and clutters the feed. Message an admin if you are concerned. These posts will be removed and result in immediate explosion from the group.
."</p>          
          </div>
            <select onChange={handleChange} id="rule_7" name="rule_7" tabindex="11">  
              <option value="None selected">Select One</option>     
              <option value="YES">Yes</option> 
              <option value="NO">No</option>
            </select>
          </label>
      </div>
      <div>             
          <label for="rule_8">
          <div className='rule'>
            <h3 className='rule_title'>8.) Outdated/Duplicate posts will be removed</h3>
            <p>"Once a post becomes irrelevant, it will be removed to keep the group free of clutter.  If your post (location, subject) has already recently been posted by another member, it will be removed."</p>
            <p>"When a post is removed, all comments under the post are removed. THIS IS NOTHING PERSONAL and NO ACTUAL RULE VIOLATION HAPPENED."</p>          
          </div>
            <select onChange={handleChange} id="county" name="county" tabindex="12">  
              <option value="None selected">Select One</option>     
              <option value="YES">Yes</option> 
              <option value="NO">No</option>
            </select>
          </label>
      </div>
    
      </div>
      <div className='questions'>             
          <label for="message">
            <span class="required">Briefly describe why you want to be a moderator:</span> 
            <textarea onChange={handleChange} id="message" name="message" placeholder="Please write your message here." tabindex="5" required="required" value={formState.message}></textarea> 
          </label>  
      </div>
      <div>             
          <label for="message">
            <span class="required">Do you have any skills or experience that would be an asset to the group?</span> 
            <textarea onChange={handleChange} id="message" name="message" placeholder="Please write your message here." tabindex="5" required="required" value={formState.message}></textarea> 
          </label>  
      </div>
      <div>              
        <button onClick='handleMessage()' name="submit" type="submit" id="submit" >SEND</button> 
      </div>
      </form>
  </div> 
      </div>
    </div>
  )
}

export default Form