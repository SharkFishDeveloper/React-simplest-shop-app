import React from 'react'
import person from "../assests/person.webp"
import {AiFillGithub,AiFillGoogleCircle,AiFillYoutube} from 'react-icons/ai'
const Home = () => {
  return (
    <>
    <div className="home" id='home'>
        <main>
            <h1>Lion king</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, doloremque!</p>
        </main>
    </div>
    <div className="home2" id='contact'>
    <img src={person}  className='change'/>
        <div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque eveniet perspiciatis facere molestiae totam beatae aspernatur, iusto temporibus suscipit omnis magnam minus nihil aperiam ratione sed non magni vero quasi repudiandae voluptatum excepturi dolores. Dolorum praesentium nobis fuga laboriosam deleniti?</p>
        </div>
    </div>
    <div className="home3" id='about'>
      <div>
      <h1>What we are?</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis accusantium officiis iusto quisquam velit. Numquam sapiente velit quas perferendis temporibus natus eum iste voluptates error est expedita, exercitationem perspiciatis aliquid itaque dolorem corrupti assumenda tempora nam minima aspernatur quos accusamus enim rerum. Ipsam eum, porro, dolores consectetur suscipit, quasi dolore qui nostrum fuga pariatur optio autem itaque? Voluptates quisquam cum voluptatum animi saepe qui, optio non inventore eos, iure itaque earum voluptatibus provident autem sunt error libero, dolore ipsam tempora dolor eaque quo neque. Enim aliquam illo odio harum molestiae vel accusantium accusamus corrupti, numquam, natus earum iste laborum itaque! Voluptas tempore odio ut quod ad saepe blanditiis? Exercitationem modi in ad ab corporis aspernatur quod quidem fuga. Culpa, nihil praesentium facilis quaerat ipsa qui temporibus exercitationem beatae. Consequuntur asperiores temporibus nisi, necessitatibus laborum repellendus dolorem optio provident eaque enim eligendi possimus ipsam? Maxime temporibus sed repellat, veniam laborum natus voluptate vero quia illo libero blanditiis laudantium quod, minus consequatur laboriosam eligendi ipsam eum dolorum labore ad nisi voluptas ipsum doloribus. Labore totam ipsam suscipit ducimus ea laboriosam vero architecto dolore numquam nulla neque iure officia provident, reprehenderit quia libero voluptas tenetur amet. Pariatur fugiat asperiores ex, in magnam facere reprehenderit quam debitis, libero omnis dolorem velit. Magnam necessitatibus labore repellendus? Cum ab ut qui voluptatem. Tenetur quam laudantium tempore modi sunt, minima ipsa sed provident incidunt recusandae dignissimos ducimus quidem non impedit vero accusamus architecto? Asperiores numquam error explicabo, soluta consectetur ducimus dolores libero quae neque ullam nostrum facilis eaque! Nam cupiditate error voluptates ad velit ut harum necessitatibus delectus voluptatem, assumenda accusantium aperiam tempora. Quas obcaecati illo non veniam labore magni ducimus ex ipsa voluptatibus mollitia natus numquam, quae velit omnis consequatur debitis nemo accusantium eveniet voluptates necessitatibus quam earum? Quis nemo consequuntur vero facilis facere ex natus.</p>
      </div>
    </div>
    <div className="home4" id='brands'>
      <div id='editDiv'>
        <h1>Brands</h1>
        
          <div  style={
  {animationDelay:'0.3s'}
}>
          <AiFillGithub/>
          <p>Github</p>
          </div>
          <div style={
  {animationDelay:'0.7s'}
}>
          <AiFillGoogleCircle/>
          <p>Google</p>
          </div>
          <div style={
  {animationDelay:'1s'}
}>
          <AiFillYoutube/>
          <p>Youtube</p>
          </div>
        

      </div>
    </div>
    
    </>
  )
}

export default Home

