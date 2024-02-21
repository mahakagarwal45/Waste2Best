import React from 'react';
import './PlasticDetails.css';
import ReactPlayer from 'react-player';
import { Card, CardDeck } from 'react-bootstrap';

const videos = [
  {
    title: 'Cute Bunny Pen-Pencil Stand | DIY Empty Tin Can Desk Organizer ',
    url: 'https://youtu.be/JY6F-htaUXs?feature=shared',
  },

  {
    title:'18 Genius Ways to Upcycle Tin Cans and Transform Trash into Treasure',
    url:'https://youtu.be/7gAQzBSqNkA?feature=shared', 
  },

  {
    title:'DIY 6 Amazing Tin Can Decoration Ideas | Tin can crafts | Recycled Tin Can Craft Ideas |',
    url:'https://youtu.be/VpL0GWSGAtg?feature=shared', 
  },

  {
    title:'2 Simple & Easy Ideas with Tin Cans || DIY || Recycle',
    url:'https://youtu.be/HSP_o3ak2VQ?feature=shared', 
  },

  {
    title:'Adorable and easy DIY tin can lanterns ',
    url:'https://youtu.be/J-tM5sCKnPI?feature=shared', 
  },

  {
    title:'Upcycled Tin Cans / DIY craft / How to make AMAZING Planters',
    url:'https://youtu.be/8-iRsHeXE_k?feature=shared', 
  }
];

const MetalDetails = () => {
  return (
    <div className="plastic-details-container">
      {/* Use the external image with the provided URL */}
      <img
        className="plastic-image"
        src="https://homebnc.com/homeimg/2019/05/diy-tin-can-projects-ideas-featured-homebnc.jpg"
        alt="Description of the image"
      />  <br/><br/>
      
      <p id='title'>The Eco-Friendly Revolution Through Tin and Stainless Reuse</p>
      <br />
      <div className='one'>
        <p className="paragraph1">Reusing metals and stainless steel cans, containers, boxes, and other items is not only environmentally friendly but also economically beneficial. Additionally, repurposing metal cans and containers as organizational tools helps declutter spaces and promotes efficient use of resources.Here are several ways to reuse these items.<br/></p>
        <p id='why'> <b><u>5 Creative ways</u></b></p>
        <br></br>
        <p className="paragraph"><b>Pencil Holders</b><br/><br/></p> 
        <img
        className="plastic-details-image"
        src="https://i.ytimg.com/vi/32FmD8kpldQ/maxresdefault.jpg"
        alt="Description of the image"
      />
         <p className='paragraph1'>Here's a quick guide to kickstart your project:<br/><br/></p>
         <p className='paragraph1' ><b>Materials Needed</b>:<br/> 1. Metal cans (empty and cleaned)<br/>
     
     2. Decorative paper, fabric, or washi tape<br/>
     3. Craft glue or double-sided tape<br/>
     4. Scissors<br/>
     5. Optional: Paint, markers, stickers, ribbon, buttons, or any other embellishments you'd like to use for decoration<br/>
     <br/>
     <b>Steps:</b><br/>
     <b>1.</b>Prepare Cans: Clean and dry the metal cans thoroughly.<br/><br/>
     <b>2.</b>Cut Material: Measure and cut the decorative paper, fabric, or washi tape to fit around the cans, leaving some extra length to overlap.<br/><br/>
     <b>3.</b>Attach Material: Use craft glue or double-sided tape to adhere the decorative material to the outside surface of the cans, smoothing out any wrinkles or air bubbles as you go.<br/><br/>
     <b>4.</b>Add Embellishments: Get creative and personalize your pencil holders by adding embellishments such as stickers, ribbon, buttons, or hand-drawn designs with markers or paint.<br/><br/>
     <b>5.</b>Allow to Dry: If you used craft glue, allow the pencil holders to dry completely to ensure the decorative material is securely attached.<br/><br/>
     <b>6.</b>Arrange Pencils: Once dry, arrange your pencils, pens, markers, or other desk supplies in the newly decorated pencil holders.<br/>
         
     </p><br/>
 <p className="paragraph"><b>Gift Cintainers</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://m.media-amazon.com/images/I/71-PkHFMJ2L._AC_UF1000,1000_QL80_.jpg"
        alt="Description of the image"
      />
     <p className='paragraph1'>Creating a Gift Container out of metal cans is a creative and sustainable way to reuse it.  <br/><br/></p>
     <p className='paragraph1' ><b>Materials Needed</b>:<br/> 1. Clean metal cans
<br/>
     2. Decorative paper, fabric, or wrapping paper<br/>
     3. Craft glue or double-sided tape<br/>
     4. Scissors and Ribbon or twine<br/>
     5. Optional: Paint, markers, stickers, ribbon, tissue paper, buttons, etc<br/>
     <br/>
     <b>Steps:</b><br/>
     <b>1.</b>Gather plastic bottles of different sizes. Ensure they are clean and free of any labels or residue.<br/><br/>
     <b>2.</b>Measure and Cut Decorative Material: Measure the height and circumference of the cans. Cut the decorative paper, fabric, or wrapping paper to fit around the cans, leaving some extra length to overlap.<br/><br/>
     <b>3.</b>Attach Decorative Material: Use craft glue or double-sided tape to adhere the decorative material to the outside of the cans. Smooth out any wrinkles or air bubbles as you wrap the material around the cans.<br/><br/>
     <b>4.</b>Add Embellishments: Get creative and decorate the gift containers with paint, markers, stickers, or other embellishments to suit the occasion or recipient's preferences.<br/><br/>
     <b>5.</b>Fill with Gifts: Once the containers are decorated and dry, fill them with your chosen gifts. This could be anything from homemade treats to small items like jewelry, candles, or skincare products.<br/><br/>
     <b>6.</b>Cover the Top: If desired, cover the top of the cans with a piece of decorative paper or fabric and secure it with ribbon or twine to create a finished look.<br/><br/>
     <b>7.</b>Optional: Add Tissue Paper: Line the inside of the containers with tissue paper to cushion the gifts and add an extra decorative touch.<br/>
         
     </p><br/>
     <p className="paragraph"><b>Tin Can Votive Candles with Letters</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://abeautifulmess.com/wp-content/uploads/typekit/.a/6a00d8358081ff69e201b7c70bf75b970b-800wi"
        alt="Description of the image"
      />
     <p className='paragraph1' ><b>Materials Needed:</b><br/><br/>
     <b>1.</b>Clean tin cans<br/>
     <b>2.</b>Decorative paper or fabric<br/>
     <b>3.</b>Tea light candles or votive candles<br/>
     <b>4.</b>Craft knife or scissors<br/>
     <b>5.</b>Optional: Letter stencils or stickers, ribbon or twine<br/>
     <b>5.</b>Paint or markers and Pencil, Craft glue or double-sided tape<br/><br/>
     <b>Steps:</b><br/>

     <b>1.</b>Prepare the Cans: Ensure the tin cans are clean and dry. Remove any labels or residue from the surface.<br/><br/>
     <b>2.</b>Measure and Cut Decorative Material: Measure the height and circumference of the cans. Cut decorative paper or fabric to fit around the cans, leaving some extra length to overlap.<br/><br/>
      <b>3.</b>Attach Decorative Material: Use craft glue or double-sided tape to adhere the decorative material to the outside of the cans. Smooth out any wrinkles or air bubbles as you wrap the material around the cans.<br/><br/>
      <b>4.</b>Design and Trace Letters: Decide on the letters or words you want to feature on the cans. You can use stencils or freehand draw the letters onto the paper or fabric covering the cans.<br/><br/>
      <b>5.</b>Cut Out Letters: Carefully cut out the traced letters using a craft knife or scissors. Take your time to ensure clean edges.<br/><br/>
      <b>6.</b>Apply Letters: Once the letters are cut out, position them onto the cans in your desired arrangement. Secure them in place using craft glue or double-sided tape.<br/><br/>
      <b>7.</b>Decorate Further (Optional): Get creative and add additional embellishments such as paint, markers, stickers, or ribbon to enhance the design of the cans.<br/><br/>
      <b>8.</b>Insert Candles: Place tea light candles or votive candles inside the cans. Ensure they are positioned securely and upright.<br/><br/>
      <b>9.</b>Light the Candles: Light the candles to illuminate the letters and create a warm, inviting glow.<br/><br/>
</p><br/>

<p className="paragraph"><b>Candle Holder</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://t2.uc.ltmcdn.com/en/posts/7/8/4/how_to_make_a_candle_holder_out_of_a_tin_can_5_diy_tutorials_9487_600.jpg"
        alt="Description of the image"
      />
     <p className='paragraph1' ><b>Materials Needed:</b><br/><br/>
     <b>1.</b> Clean tin can<br/>
     <b>2.</b> Pencil, Craft knife or tin snips<br/>
     <b>3.</b> Decorative paper or fabric (optional)<br/>
     <b>4.</b> Tea light candle or small votive candle<br/>
     <b>5.</b> Hammer and nail or drill (optional)<br/><br/>
     <b>6.</b> Paint or markers,Sandpaper (if needed)<br/><br/>
     <b>Steps:</b><br/>

     <b>1.</b> Prepare the Tin Can: Ensure the tin can is clean and dry. Remove any labels or residue.<br/><br/>
     <b>2.</b> Design the Heart Shape: Using a pencil, draw a heart shape onto the surface of the tin can. You can either freehand draw the heart shape or use a stencil for precision.<br/><br/>
     <b>3.</b> Cut Out the Heart Shape: Carefully cut along the outline of the heart shape using a craft knife or tin snips. Take your time to ensure smooth and even edges.<br/><br/>
     <b>4.</b> Optional: Decorate the Tin Can: If desired, you can decorate the tin can further with paint, markers, or decorative paper/fabric. Allow any paint or glue to dry completely before proceeding.<br/><br/>
     <b>5.</b> Create Ventilation Holes (Optional): To ensure proper airflow for the candle, you can create small ventilation holes around the top rim of the tin can. Use a hammer and nail to punch holes or a drill with a small bit.<br/><br/>
     <b>6.</b> Smooth Edges (Optional): If the edges of the heart shape are sharp, you can use sandpaper to smooth them down for safety.<br/><br/>
     <b>7.</b> Insert Candle: Place a tea light candle or small votive candle inside the tin can. Ensure it is positioned securely and sits level.<br/><br/>
     <b>8.</b> Light the Candle: Light the candle to illuminate the heart shape cutout and create a warm, inviting glow.<br/><br/>
     <b>9.</b> Display Your Creation: Arrange the tin candle holder on a tabletop, mantle, or shelf to enjoy its charming ambiance.<br/><br/>
</p><br/>

<p className="paragraph"><b>Colorful Wind Chimes with Tin Cans, Beads and Utensils</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://i.pinimg.com/originals/3c/71/6a/3c716a75596c7cf0a3de3f766694a3d3.jpg"
        alt="Description of the image"
      />
     <p className='paragraph1' ><b>Materials Needed:</b><br/><br/>
     <b>1.</b> Clean tin cans (various sizes)<br/>
     <b>2.</b> Assorted beads (plastic or glass)<br/>
     <b>3.</b> Old utensils (spoons, forks).<br/>
     <b>4.</b> Fishing line or sturdy thread, Craft paint or spray paint, Paintbrushes (if using craft paint)<br/>
     <b>5.</b> Drill with a small drill bit, Hammer and nail (or awl), Scissors, Optional: Ribbons, bells, decorative charms.  <br/><br/>
     <b>Steps:</b><br/>

     <b>1.</b> Prepare the Tin Cans: Ensure the tin cans are clean and dry. Remove any labels or residue. If desired, paint the cans with colorful designs or patterns using craft paint or spray paint. Allow the paint to dry completely.<br/><br/>
     <b>2.</b> Drill Holes in the Tin Cans: Use a drill with a small drill bit to create holes near the rim of each tin can. These holes will be used to hang the cans from the wind chime. <br/><br/>
     <b>3.</b> String Beads onto Fishing Line: Cut lengths of fishing line or sturdy thread to your desired lengths for the wind chime. Thread colorful beads onto each piece of fishing line, alternating colors and sizes as desired. Tie knots at the ends of the fishing line to secure the beads in place.<br/><br/>
     <b>4.</b> Attach Utensils to Fishing Line: Thread additional beads onto the fishing line, followed by old utensils such as spoons or forks. You can drill holes in the utensils if needed to attach them securely to the fishing line. Tie knots above and below each utensil to keep it in place.<br/><br/>
     <b>5.</b> Attach Fishing Line to Tin Cans: Thread the ends of the fishing line through the holes drilled in the tin cans. Tie knots inside the cans to secure the fishing line in place. Ensure that the beads and utensils hang freely from the cans.<br/><br/>
     <b>6.</b> Create Hanging Mechanism: Cut a long piece of fishing line and tie it securely to the top of a stick or wooden dowel. Use additional fishing line to attach the tin cans to the stick at varying lengths, creating a tiered effect.<br/><br/>
     <b>7.</b> Add Decorative Touches (Optional): Embellish the wind chime with ribbons, bells, or decorative charms tied to the stick or hanging from the tin cans.<br/><br/>
     <b>8.</b> Find a suitable location outdoors to hang your colorful wind chime. <br/><br/>
      </p><br/>
     </div>



     <div>
    <div>
      <p className='videocontent'> <b><i>Unlock the world of innovation with our curated selection of YouTube videos, unveiling groundbreaking ideas on recycling plastics. Discover ingenious ways to give a second life to plastic materials, transforming waste into wonders.</i></b></p>
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




      </div>
  );
};

export default MetalDetails;
