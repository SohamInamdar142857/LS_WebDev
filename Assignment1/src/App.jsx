import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <body>
        <header>
          <h1>
            Sigma PG, Bangalore
          </h1>
        </header>

        <nav>
          <ul>
            <li><a href="#">Music</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Tech</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>

        <div class="box">
          Subscribe to our newsletter
          <hr color="red"></hr>
        
          
          <form>
           <table>
              <tr>
                <td>
                  <label for= "uname">Name:</label>
                </td>
                <td>
                  <input type= "text" id="uname" name="uname"></input>
                </td>
              
              </tr>
              <tr>
                <td>
                  <label for= "email">Email Address:</label>
                </td>
                <td>
                  <input type= "email" id="email" name="email"></input>
                </td>
              </tr>
              
              <br></br>
              <tr>
                <td>
                  Select Room Number:
                </td>
              
                <td>
                  <select name = "dropdown">
                    <option value = "001" selected>001</option>
                    <option value = "002">002</option>
                    <option value = "003">003</option>
                    <option value = "004">004</option>
                    <option value = "005">005</option>
                    <option value = "006">006</option>
                    <option value = "007">007</option>
                  </select>
                </td>
              </tr> 
            </table> 

            <input type="submit" value="Submit"></input>   
          </form> 
        </div>

        <div class="text">Top Reviews:</div>
        <div class="reviewbox_1">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
           -Arun Kumar 
          </p>
        </div>

        <div class="reviewbox_2">
          <p>
          Never gonna give you up
          </p>

          <p>
           -Rick Astley
          </p>
        </div>

        <div class="reviewbox_3">
          <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>

          <p>
           -Don
          </p>
        </div>

        <div class="reviewbox_4">
          <p>
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
          </p>

          <p>
           -User 
          </p>
        </div>

      
      </body>
    </div>
    
  )
}

export default App
