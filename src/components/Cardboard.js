
import React from 'react';
import './PlasticDetails.css';
import ReactPlayer from 'react-player';
import { Card, CardDeck } from 'react-bootstrap';

const videos = [
  {
    title: '12 CARDBOARD BOXES IDEAS / 12 Cardboard Box Organizer Ideas/12 cardboard box craft ideas for storage',
    url: 'https://youtu.be/emoUIO98pws?si=rIbmiOecJzotvLSt',
  },

  {
    title:'DIY Funny Trash Bin Toy from Cardboard Craft Ideas with FNAF Monty-like😅',
    url:'https://youtu.be/j9GcS_Ov1v4?si=IJBudvSOk_fja5EE', 
  },

  {
    title:'6 SIMPLE DIY ORGANIZERS FOR STORAGE FROM CARDBOARD BOXES| HANDMADE CRAFT FROM CARDBOARD BOXES',
    url:'https://youtu.be/tMgOoIDJz3A?si=cDDsyEjeGMw1Evd1', 
  },

  {
    title:'How to reuse Shoe Boxes at home | 3 Amazing Ideas | Best out of waste',
    url:'https://youtu.be/y1r0c-V7GIk?si=agjvq4mQ0tMevKwP', 
  },

  {
    title:'Photo Frame | Photo frame making step by step | Cardboard photo frame making ideas',
    url:'https://youtu.be/LN5OtTiQQ1g?si=yQT7rD53XtTb5Sn8', 
  },

  {
    title:'REALISTIC MINI BASKET FROM CARDBOARD | DIY Handmade Cardboard Craft | Best Display Ideas',
    url:'https://youtu.be/-WPRaZ_SO9E?si=1V0rB5flAnmTt9fm', 
  }
];


const Cardboard = () => {
  return (
    <div className="plastic-details-container">
      {/* Use the external image with the provided URL */}
      <img
        className="plastic-image"
        src="https://packmojo.com/blog/images/2021/08/cardboard-boxes.jpg"
        alt="Description of the image"
      />
      
      <p id='title'> Make a positive impact by embracing the reuse and recycling of cardboard</p>
      <br />
      <div className='one'>
        <p className="paragraph1">Championing the recycling and repurposing of cardboard is a noble endeavor that unfolds a tale of environmental stewardship. Each folded box given a second life not only lessens our ecological footprint but also crafts a narrative of responsible living. By infusing discarded cardboard with purpose, we contribute to a vibrant cycle of sustainability, breathing vitality into our planet. Embracing this mindful approach isn't just an act; it's a celebration of conscientious choices that resonate far beyond our immediate surroundings, fostering a brighter, more harmonious world for generations to come<br/></p>
        <p id='why'> <b><u><br/>5 Creative ways</u></b></p>
        <br></br>
        <p className="paragraph"><b>Spray Paint Can Holder </b><br/><br/></p> 
        <img
        className="plastic-details-image"
        src="https://www.familyhandyman.com/wp-content/uploads/2018/01/spray-paint-2.jpg?fit=700,700"
        alt="Description of the image"
      /> <br/><br/>
        <p className='paragraph1'><b>Steps:</b><br/></p>
        <p className='paragraph1'>

        <b>1. </b>Collect sturdy cardboard, a ruler, a utility knife, and a pencil. Ensure the cardboard is thick enough to provide adequate support.<br/><br/>
        <b>2. </b>Using the ruler, measure and mark the dimensions for the spray paint can holder. Design a rectangle with sides to accommodate the spray paint cans.<br/><br/>
        <b>3. </b>Carefully cut along the marked lines using the utility knife, creating the main structure of the holder. <br/><br/>
        <b>4. </b>If you have multiple spray paint cans, cut additional strips of cardboard to create compartments within the holder.<br/><br/>
        <b>5. </b>Reinforce the holder by adding extra layers of cardboard to the base or sides.<br/><br/>
        <b>6. </b> you can decorate or paint the cardboard holder and smooth any rough edges with the utility knife </p><br/><br/>

 <p className="paragraph"><b>Belted Storage Totes</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://www.brit.co/media-library/image.jpg?id=21967728&width=1200&height=710"
        alt="Description of the image"
      />
     <p className='paragraph1'>You can turn old cardboard boxes into these amazing storage totes with just a little time and a few supplies.

You just cover the boxes with fabric and then add an old belt for a handle. These are great for all sorts of organizing from craft supplies and kids’ toys to magazines and anything else you can think of.

When they’re finished, no one will ever know that they used to be empty cardboard boxes. <br/><br/></p>
     <p className='paragraph1' ><b>Materials Needed</b>:<br/><br/>
     <b>1.</b> 3 square boxes (sizes: 14 inch, 12 inch, and 10 inch)<br/>
     <b>2.</b> 3 colors of fabric (The 10 inch and 12 inch box need 2 yards of fabric each, and the 14 inch box needs 3 yards)<br/>
     <b>3.</b> Spray Adhesive<br/>
     <b>4.</b> 3 Old elts <br/>
     <b>5.</b> Screw Bolts<br/>
     <b>6.</b> Gold Paint Pen <br/><br/>

     <b>Steps:</b><br/>
     <b>1. </b>Measure out a rectangle that is 26 inches x 42 1/2 inches and cut it.<br/><br/>
     <b>2. </b>Now fold over 1 inch of the longer horizontal side that is 42 1/2 inches, and crease by ironing it while folded.<br/><br/>
     <b>3. </b>Now, with the longer side still laid out horizontally, place the box in the middle with the open side facing away from you. Use a ruler to place it 5 inches from the bottom of the fabric.<br/><br/>
     <b>4. </b>Apply spray adhesive to the right side and the top and wrap the fabric fairly tight and smooth out any air bubbles with your hands.<br/><br/>
     <b>5. </b>Roll the box 180 degrees to the left so the side that was facing up is now facing down.<br/><br/>
     <b>6. </b>Spray the left side and what is now the top with the spray adhesive and wrap the fabric around it as well. <br/><br/>
     <b>7. </b>Hold the belt in place where you want it to end up and then cut it <br/><br/>
     <b>8. </b>Mark 1 inch from the top of the open side of the box where you want the belt to be attached <br/><br/>
     <b>9. </b> Use a drill to drill a hole in the box on your mark. Then drill a hole in the belt. Attach the belt using the screw bolts.<br/><br/>
     <b>10. </b> Paint the screw bolts with the gold paint pen. This unifies the design and completes the look.<br/><br/>
     </p><br/>
     <p className="paragraph"><b> Cardboard Photo Frame</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://i.ytimg.com/vi/LMkgBzORAWo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVEhGg71s8hPOQcQZ0w30YgkRmRw"
        alt="Description of the image"
      />
     <p className='paragraph1' ><b>Materials Needed:</b><br/><br/>
     <b>1.</b>Cardboard<br/>
     <b>2.</b>Craft Knife or Scissors<br/>
     <b>3.</b>Decorative items like glitter, stickers etc.<br/>
     <b>4.</b>Paints<br/>
     <b>5.</b>Pens,Markers,Pencils etc.<br/>
     <b>6.</b>Glue<br/><br/>
     <b>Steps:</b><br/>

     <b>1.</b>Measure and cut a rectangular piece of cardboard for the main frame. Consider the size based on your photo dimensions.<br/><br/>
     <b>2.</b>Mark and cut out a smaller rectangle within the cardboard for the photo opening.<br/><br/>
      <b>3.</b>Get creative with decorating the cardboard frame. Use colored paper, fabric, paint, stickers, or markers to add a personalized touch.<br/><br/>
      <b>4.</b>Fold the cardboard along the edges to create a 3D frame shape. Apply glue to secure the folds and reinforce the structure.<br/><br/>
      <b>5.</b>Once the glue is dry, insert your favorite photo into the frame, and your DIY cardboard photo frame is ready for display!<br/><br/>
</p><br/>

<p className="paragraph"><b>Cardboard Planters</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://img.particlenews.com/image.php?type=thumbnail_580x000&url=3u9kOO_0prTyLmV00"
        alt="Description of the image"
      />
      <p className='paragraph1'>
      Believe it or not, cardboard can serve as an excellent planter, its porous nature allows for proper aeration and drainage, creating an ideal environment for plant growth. Although, not all plants thrive in cardboard planters, certain varieties, such as herbs and shallow-rooted vegetables, benefit from the moisture retention and insulation that cardboard provides.
      Here, are a few tips to make these.
      </p><br/>
     
     <p className='paragraph1' >
     {/* <b>1.</b> A transparent glass jar or vase with a lid or cork<br/>
     <b>2.</b> Cotton rope, felt, or other absorbent materials<br/>
     <b>3.</b> Choose plants that thrive in your environment and suit the size of the glass container.<br/>
     <b>4.</b> Another smaller glass container or plastic bottle<br/>
     <br/> */}
     <b>Steps:</b><br/><br/>

     <b>1. </b>Decorate a simple cardboard box with different colors of paints, stickers etc. <br/><br/>
     <b>2. </b>To prevent waterlogging, make small drainage holes at the bottom of the planter. This can be done by punching or cutting small openings.<br/><br/>
      <b>3. </b>Attach a waterproof lining (plastic sheet) inside the cardboard planter to protect it from moisture. Use strong adhesive or tape to secure the lining in place.<br/><br/>
      <b>4. </b> Fold along the cut edges to assemble the planter. Apply adhesive to secure the edges. Fill the planter with soil and plant your favorite flowers or herbs.<br/>
</p><br/>

<p className="paragraph"><b>Magazine Holder</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://theorganisedhousewife.com.au/wp-content/uploads/2018/07/1060514MJC53921.jpg"
        alt="Description of the image"
      />
     <p className='paragraph1' >
     Next time you find yourself polishing off the end of your cereals, hold on to that box! It’s perfect for recycling into a stylish magazine holder for all of your favorite magazines.With just a few simple steps, you can turn a cereal box into a practical and visually appealing magazine holder, contributing to a more eco-friendly lifestyle.
     <br/><br/>
     <b>Steps:</b><br/>

     <b>1.</b> Cut the top flaps off the cereal box and measure and mark the desired height for your magazine holder. <br/><br/>
     <b>2.</b> Carefully cut along the markings, fold the cardboard along the cut edges to create a box shape, and secure the edges with glue. <br/><br/>
      <b>3.</b>Finally, cover the exterior with decorative paper, glitter, handwritten notes to add a beautiful touch  <br/><br/>
      <b>4.</b>Voila! Here you have your very own magazine holder.<br/><br/>
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

export default Cardboard;
