import React from 'react';
import './Paper.css';
import ReactPlayer from 'react-player';
import { Card, CardDeck } from 'react-bootstrap';

const videos = [
  {
    title: 'DIY | How to make handmade paper from recycled materials - PAPER MAKING',
    url: 'https://youtu.be/Ow5LeG-zzyg?si=2_NAvkR-7xlO2ufU',
  },

  {
    title:'How to Make Paper Scale // Back to School // Origami craft with paper // DIY Paper craft',
    url:'https://youtu.be/PxBbzQha9Jo?si=ezLNMLKkaf_6NjWH', 
  },

  {
    title:'How to make bowl from waste paper without blender | DIY Paper Mache Bowl | paper recycling DIY',
    url:'https://youtu.be/9QqXzyllnS4?si=dcSe5rHVlwCk2xQv', 
  },

  {
    title:'3 Ideas to Recycle Beautiful Decorations from Glass Bottles | EP.1 | DIY Channel',
    url:'https://youtu.be/nHsex8cf2fs?si=264jAg3QOZcjXV_p', 
  },

  {
    title:'DIY PAPER MACHE CLAY - Modern Decor Sculptures',
    url:'https://youtu.be/Nr62IZMzooY?si=MX6RBAPTrvdn4BPz', 
  },

  {
    title:'DIY - Water Well with Waste Paper - Craft home decoration ideas - decorative water well',
    url:'https://youtu.be/2kdXjBwehxo?si=wUEaK8e16GL7LsI0', 
  }
];


const Paper = () => {
  return (
    <div className="plastic-details-container">
      {/* Use the external image with the provided URL */}
      <img
        className="plastic-image"
        src="https://i.ytimg.com/vi/K0t3BsDyldc/maxresdefault.jpg"
        alt="Description of the image"
      />
      
      <p id='title'>
       <br/>
      Recycle paper: Preserve forests, mitigate waste</p>
      <br/>
      <div className='one'>
        <p className="paragraph1">Recycling paper is a vital component of environmental conservation efforts. It involves collecting used paper from homes, schools, and offices, sorting it into categories, and removing contaminants like staples. Utilizing local recycling centers or municipal pickup services makes disposal convenient. Supporting the market for recycled paper products by purchasing items made from recycled materials closes the loop, promoting sustainability. This practice conserves resources, reduces energy consumption, and minimizes the carbon footprint of paper production, contributing to a cleaner environment.<br/></p>
        <p id='why'> <b><u><br/>5 Creative ways</u></b></p>
        <br></br>
        <p className="paragraph"><b>Gift Wrap or Cards:</b><br/><br/></p> 
        <img
        className="plastic-details-image"
        src="https://modpodgerocksblog.b-cdn.net/wp-content/uploads/2022/09/30-creative-gift-wrapping-ideas-featured.jpg"
        alt="Description of the image"
      />

        <p className='paragraph1'>
            <br/>
        Transform old paper into eco-friendly gift wrap or cards, promoting sustainability through DIY creativity!</p>
        <p className='paragraph1'><b>Steps:</b><br/></p>
        <p className='paragraph1'>1.Gather old paper such as newspapers, magazines, or decorative paper scraps.<br/>
 2.Cut the paper to the desired size for wrapping or card-making. Fold the paper neatly and securely around the gift or into card shapes.
<br/>
 3.Use adhesive tape or glue to seal the edges and secure the paper in place. Add personal touches like ribbons, bows, or handwritten messages to enhance the presentation.<br/>
 4.You've successfully repurposed old paper into charming gift wrap or cards.</p><br/>

 <p className="paragraph"><b>Paper Mache Paper Bowl</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://images.squarespace-cdn.com/content/v1/5006926f84ae4a665a5c26eb/1670016953489-CW9RP16KZIBE0TNSUG12/3.jpg"
        alt="Description of the image"
      />
     <p className='paragraph1'>
        <br/>Creating candle holders from recycled materials is a fantastic way to add unique and eco-friendly decor to your space. Follow these steps to make your own holders: <br/></p>
     <p className='paragraph1' >
     <b>Steps:</b><br/>
     1.Tear old newspaper into small strips. Prepare a paste by mixing equal parts flour and water until smooth.<br/>
2.Inflate a balloon to the desired size for your bowl. Dip the newspaper strips into the paste, then layer them onto the balloon.<br/>
3. Continue layering until the balloon is fully covered, leaving a small opening at the top.<br/>
4. Allow the paper mache to dry completely, typically overnight. Once dry, pop the balloon and remove it from the inside of the bowl.<br/>
5. Trim any rough edges and paint or decorate the bowl as desired.<br/><br/>




     </p>
     <p className="paragraph"><b> Paper Collage Art: </b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://www.upcyclist.co.uk/wp-content/webpc-passthru.php?src=https://www.upcyclist.co.uk/wp-content/uploads/2018/03/Detail-of-paper-collage-art-by-Dolan-Geiman.jpg&nocache=1"
        alt="Description of the image"
      />
     <p className='paragraph1' ><br/>
     <b>Steps:</b><br/>
     <b>1.</b>Collect old magazines, newspapers, or discarded paper with interesting images or patterns. Cut out desired images, shapes, or text from the paper.<br/><br/>

<b>2.</b>Arrange the cutouts on a canvas, cardboard, or paper base to create a composition. Experiment with different arrangements until you're satisfied with the layout.<br/><br/>
<b>3.</b>Use glue or adhesive to secure the cutouts onto the base. Allow the collage to dry completely.<br/><br/>
<b>4.</b>Optionally, add additional elements like paint, markers, or embellishments to enhance the collage.<br/><br/>
<b>5.</b>Display your paper collage art proudly or give it as a unique and eco-friendly gift.<br/><br/>
</p>

<p className="paragraph"><b>Recycled Paper Bags:</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://image.made-in-china.com/2f0j00WFBiycDIZHrY/Recycled-Biodegradable-Retail-Grocery-Shopping-Packaging-Custom-Made-Fast-Food-Take-Away-Clothes-Packaging-Kraft-Paper-Bag.webp"
        alt="Description of the image"
      />
      <p className='paragraph1'>

      Transform used paper into eco-friendly bags through simple folding and securing techniques, promoting sustainable alternatives to plastic.
     </p>
     <p className='paragraph1' >
     
     <b>Steps:</b><br/><br/>

     <b>1.</b>Start by collecting used paper, such as old newspapers, magazines, or brown paper bags. Flatten and smooth out the paper to remove any wrinkles or creases. <br/><br/>
<b>2.</b>Cut the paper into rectangular shapes, ensuring they are all of similar size. Fold the bottom edge of each rectangle upward to create a crease, forming the base of the bag.<br/><br/>
<b>3.</b>Fold the two side edges inward towards the center, overlapping slightly, to create gussets. Fold the top edge of the paper down to form a neat edge for the bag opening.<br/><br/>
<b>4.</b>Secure the folds with adhesive or glue, ensuring the bag's sides are firmly held together.<br/><br/>
<b>5.</b>Optionally, reinforce the bottom of the bag with additional layers of paper for added strength. Add handles by attaching strips of paper to the top edges of the bag, if desired.<br/><br/>
<b>6.</b>Your recycled paper bag is now ready to be used for shopping, gift-giving, or other purposes, contributing to sustainable practices.<br/><br/>




</p>

<p className="paragraph"><b>Recycled Ice Cream Sticks Bookmarks</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://i0.wp.com/www.ecoideaz.com/wp-content/uploads/2015/10/Ice-Cream-Sticks-Bookmarks.jpg?w=640&ssl=1"
        alt="Description of the image"
      />
     <p className='paragraph1' ><br/>
     <b>Steps:</b><br/>

     <b>1.</b>Gather used ice cream sticks and clean them thoroughly.<br/><br/>
     <b>2.</b>Decorate the sticks with paint, markers, or decorative tape, if desired. Once the decorations are dry, arrange the sticks in a desired pattern or design.<br/><br/>
     <b>3.</b>Apply glue along one side of each stick and press them together to form a solid base. Allow the glue to dry completely.<br/><br/>
     <b>4.</b>Trim any excess or uneven edges to ensure a neat finish.<br/><br/>
     <b>5.</b>Optionally, add embellishments such as ribbons, buttons, or stickers for extra flair.<br/><br/>
     <b>6.</b>Your recycled ice cream stick bookmarks are now ready to be used to mark your place in books or notebooks. </p><br/>
      </div>

      <div>
    <div>
      <p className='videocontent'> <b><i>
      Unveil the enchanting world of paper crafting on YouTube! Explore tutorials crafting intricate paper creations and discover imaginative ways to recycle it. Immerse yourself in the artistry of paper crafting with just a click! 📄✂️✨"</i></b></p>
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

export default Paper;