
import React from 'react';
import './PlasticDetails.css';
import ReactPlayer from 'react-player';
import { Card, CardDeck } from 'react-bootstrap';

const videos = [
  {
    title: 'DIY Glass Bottle Decoration Ideas - DIY Room Decor Projects',
    url: 'https://youtu.be/kdwEWpWYAAk?si=OfYN7KKZWjqu1MMU',
  },

  {
    title:'17 JAR AND GLASS CRAFTS AND HACKS YOU WOULD LIKE TO TRY',
    url:'https://youtu.be/HZDeAFpi-lo?si=7EZQEBrvHZoIx4qn', 
  },

  {
    title:'15 Unique Glass Jar decoration ideas | Home decorating ideas handmade',
    url:'https://youtu.be/dxi4XuwF7Bc?si=1kp20mcbnKqWTs3L', 
  },

  {
    title:'3 Ideas to Recycle Beautiful Decorations from Glass Bottles | EP.1 | DIY Channel',
    url:'https://youtu.be/nHsex8cf2fs?si=264jAg3QOZcjXV_p', 
  },

  {
    title:'Easy Mason Jar Crafts',
    url:'https://youtu.be/SSUkMAD7TNs?si=Hfg1OX8dHpMSXSas', 
  },

  {
    title:'DIY - 7 EASY IDEAS with DRINKING GLASSES 💕 HOME DECORATION 😍 Crafts and Recycling',
    url:'https://youtu.be/I5ULadGZwv0?si=I-lZrbpMosf-ONCh', 
  }
];


const GlassDetails = () => {
  return (
    <div className="plastic-details-container">
      {/* Use the external image with the provided URL */}
      <img
        className="plastic-image"
        src="https://cdn.homehacks.co/wp-content/uploads/2019/02/13143654/40_ways_reuse_glass_bottles_featured.jpg"
        alt="Description of the image"
      />
      
      <p id='title'>
Redefining Sustainability Through Thoughtful Reuse of Glass</p>
      <br />
      <div className='one'>
        <p className="paragraph1">Embracing the Grace of Glass: A Sustainable Journey to Repurpose and Reuse. Recycling glass offers a chic and eco-friendly solution to curb environmental impact. The global challenge of excessive glass production and disposal demands innovative thinking. By creatively reimagining the potential of glass items, we not only reduce our ecological footprint but also contribute to the well-being of our planet. Join the movement towards a more sustainable future – where glass reuse becomes a symbol of elegance and responsible living. Explore, create, and educate; let's make glass recycling a cornerstone of environmental consciousness.<br/></p>
        <p id='why'> <b><u><br/>5 Creative ways</u></b></p>
        <br></br>
        <p className="paragraph"><b>Glass Bottle Vases</b><br/><br/></p> 
        <img
        className="plastic-details-image"
        src="https://i.etsystatic.com/35430831/r/il/c61e71/3831861308/il_570xN.3831861308_ejvp.jpg"
        alt="Description of the image"
      />
        <p className='paragraph1'>
Elevate your home decor sustainably with Glass Bottle Vases. Explore our DIY guides to transform discarded bottles into stylish and eco-friendly decorative pieces. Our DIY guides and tips will inspire you to paint, embellish, and arrange glass bottles, turning them into stylish vases that breathe new life into your living areas!</p>
        <p className='paragraph1'>Here's a quick guide which helps in home decor:<br/><br/></p>
        <p className='paragraph1'>1.Collect various glass bottles in different shapes and sizes.<br/>
 2.Clean them thoroughly and remove any labels.<br/>
 3.Paint the bottles in different colors or patterns using glass paint or spray paint.<br/>
 4.Arrange the bottles in a cluster or line and use them as vases for flowers or decorative branches. </p><br/>

 <p className="paragraph"><b>Glass Bottle Candle Holders</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://m.media-amazon.com/images/I/71-skT17dhL._AC_UF894,1000_QL80_.jpg"
        alt="Description of the image"
      />
     <p className='paragraph1'>Creating candle holders from recycled materials is a fantastic way to add unique and eco-friendly decor to your space. Follow these steps to make your own holders: <br/><br/></p>
     <p className='paragraph1' ><b>Materials Needed</b>:<br/> 1.
     Glass Bottle<br/>
     2. Glass cutter<br/>
     3. Sand<br/>
     4. Candles<br/><br/>

     <b>Steps:</b><br/>
     1.Collect glass bottles of similar size and shape.<br/>
     2.Cut off the bottom of the bottles using a glass cutter.<br/>
     3.Sand the edges for a smooth finish.<br/>
     4.Place candles inside the bottle bottoms to create unique and stylish candle holders.<br/>

     </p><br/>
     <p className="paragraph"><b> Spray bottle</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://www.themakeyourownzone.com/wp-content/uploads/2018/07/glass-spray-bottles-7.jpg"
        alt="Description of the image"
      />
     <p className='paragraph1' ><b>Materials Needed:</b><br/><br/>
     <b>1.</b>Glass Bottle with a lid or cap<br/>
     <b>2.</b>Spray Nozzle<br/>
     <b>3.</b>Drill or Punch<br/>
     <b>4.</b>Markers or googly eyes (optional)<br/>
     <b>5.</b>Hot glue gun (optional)<br/><br/>
     <b>Steps:</b><br/>

     <b>1.</b>Ensure the glass bottle is clean and dry. Remove any labels or residue.<br/><br/>
     <b>2.</b>Remove the cap from the glass bottle. If the cap is solid, use a drill or punch to create a hole in the center.<br/><br/>
      <b>3.</b>Insert the spray nozzle into the hole in the cap. Ensure a snug fit; the nozzle should stay in place.<br/><br/>
      <b>4.</b>Fill the glass bottle with the liquid you want to spray (cleaning solution, water, etc.).<br/><br/>
      <b>5.</b>Screw the cap with the spray nozzle onto the glass bottle securely. Adjust the nozzle if necessary for a finer or wider spray.<br/><br/>
      <b>6.</b>Label the bottle if needed or decorate it for a personalized touch<br/><br/>
</p><br/>

<p className="paragraph"><b>Self-watering glass planters</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://cdn.shopify.com/s/files/1/0579/7924/0580/t/18/assets/How-cool-these-self-watering-Wine-Bottle-Planters-look-in-your-kitchen-window.jpg?v=1661866939"
        alt="Description of the image"
      />
      <p className='paragraph1'>
      If you love indoor plants, you will love this DIY project – using a wine bottle and a glass jar. It’s not only a great way to ensure that your indoor plants are hydrated, but it also looks cool and unique.
      </p><br/>
     
     <p className='paragraph1' ><b>Materials Needed:</b><br/><br/>
     <b>1.</b> A transparent glass jar or vase with a lid or cork<br/>
     <b>2.</b> Cotton rope, felt, or other absorbent materials<br/>
     <b>3.</b> Choose plants that thrive in your environment and suit the size of the glass container.<br/>
     <b>4.</b> Another smaller glass container or plastic bottle<br/>
     <br/>
     <b>Steps:</b><br/><br/>

     <b>1.</b>Clean the glass container thoroughly. Ensure the container has a lid or cork to create a sealed environment.<br/><br/>
     <b>2.</b>Cut a length of cotton rope or other absorbent material, making sure it's long enough to reach from the bottom of the glass container to the top.<br/><br/>
      <b>3.</b>Plant your chosen greenery in the soil inside the glass container. Insert one end of the wick into the soil, ensuring good contact with the roots.<br/><br/>
      <b>4.</b> Fill a smaller glass container or plastic bottle with water. Place the other end of the wick into the water reservoir.<br/><br/>
      <b>5.</b> Insert the water reservoir (with the wick) into the soil of the larger glass container.<br/><br/>
      <b>6.</b> Ensure the wick is long enough to reach the water reservoir without being too taut or too loose.<br/><br/>
      <b>7.</b> Pour water into the water reservoir until the soil is adequately moistened. Monitor the water level and adjust as needed.<br/><br/>
      <b>8.</b> Close the lid or seal the top of the glass container to create a humid environment. Position your self-watering glass planter in an area with indirect sunlight.<br/><br/>
      <b>9.</b> Keep an eye on the water level in the reservoir and refill as needed to maintain a consistent moisture level in the soil.<br/>
</p><br/>

<p className="paragraph"><b>Recycled animal-shaped pencil case</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://i.pinimg.com/736x/23/2f/19/232f19fc39640ceb2d4b2da97f6532d4.jpg"
        alt="Description of the image"
      />
     <p className='paragraph1' ><b>Materials Needed:</b><br/><br/>
     <b>1.</b>Gather items like old metal or wooden frames, wire baskets, or any other suitable materials for the chandelier structure<br/>
     <b>2.</b>LED lights, light sockets, or battery-operated LED candles<br/>
     <b>3.</b>To hang the chandelier from the ceiling.<br/>
     <b>4.</b>For cutting and manipulating wire..<br/>
     <b>5.</b> Customize the chandelier's appearance with paint or sealant.<br/><br/>
     <b>Steps:</b><br/>

     <b>1.</b>Plan the layout and design of your chandelier using recycled materials. Consider symmetry and balance.<br/><br/>
     <b>2.</b> Clean and prep the recycled materials, removing any rust, dirt, or unwanted elements. <br/><br/>
      <b>3.</b>Use pliers and wire to form a sturdy frame for your chandelier. This could be a circular or geometric shape, depending on your design.<br/><br/>
      <b>4.</b>Securely attach the LED lights or light sockets to the frame. Ensure they are evenly distributed for balanced illumination.<br/><br/>
      <b>5.</b>Attach a chain or cord to the chandelier frame for hanging. Ensure it's securely fastened and can support the weight.<br/><br/>
      <b>6.</b>If using electrical components, test the lights to ensure they are working properly before finalizing the structure.<br/><br/>
      <b>7.</b>Hang the chandelier and adjust its height and positioning as needed.<br/><br/>
      <b>8.</b>Turn on the lights and enjoy the unique ambiance created by your recycled chandelier.<br/><br/>
      </p><br/>
      </div>

      <div>
    <div>
      <p className='videocontent'> <b><i>
Discover the magic of glass art on YouTube! Watch videos recreating stunning glass and explore creative ways to reuse it. Dive into the beauty of glass crafting in just a few clicks! 🎨✨</i></b></p>
         </div>
         <div className='video'>

         <div className="yt-cards-container">
        {videos.map((video, index) => (
          <Card key={index} className="card">
            <ReactPlayer url={video.url} width="100%" height="300px" />
            <Card.Body className="card-body">
              <Card.Title className="card-title"> {video.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
         </div>
    </div>



      {/* <div >
          <ReactPlayer url='https://www.youtube.com/watch?app=desktop&v=kdwEWpWYAAk'   />
          //https://youtu.be/HZDeAFpi-lo?si=boevnCZRCmGEszV2
      </div> */}
    </div>
  );
};

export default GlassDetails;
