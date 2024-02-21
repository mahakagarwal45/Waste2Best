import React from 'react';
import './Clothes.css';
import ReactPlayer from 'react-player';
import { Card, CardDeck } from 'react-bootstrap';

const videos = [
  {
    title: 'DIY Old Wooden Furniture Makeover || Trash To Treasure - 4 || Best Reuse Idea ||',
    url: 'https://youtu.be/lik5cUurFLk?si=1RIFm82jnJ16M5PZ',
  },

  {
    title:'Old drawers reuse ideas for your home | show of crafts',
    url:'https://youtu.be/kreN5SmmmuY?si=z1YGgxOIO8TnWhGk', 
  },

  {
    title:'Old Wooden Box Decoration Idea | Waste Box Reuse Ideas | DIY Box',
    url:'https://youtu.be/ZJm1NR7MA-s?si=Xl3JivEBwv7bDRK3', 
  },

  {
    title:'Waste Plywood Craft | बेकार लकड़ी के टुकड़ों से बनाए सुंदर होम डेकोर | Best Reuse Idea',
    url:'https://youtu.be/Grhud0e5sbM?si=LqY29MX4piyajn-H', 
  },

  {
    title:'How to Repurpose Clementine Wooden Crates',
    url:'https://youtu.be/I8zhUHuX2sg?si=GbgKZp3AIrmpk6kT', 
  },

  {
    title:'How To Repurpose old Wood and Build a New Deck',
    url:'https://youtu.be/UQuzkqf18xI?si=SymT3Z1X3Arn8-KK', 
  }
];


const Wood = () => {
  return (
    <div className="plastic-details-container">
      {/* Use the external image with the provided URL */}
      <img
        className="plastic-image"
        src="https://5.imimg.com/data5/SELLER/Default/2021/4/SX/RN/PE/126830196/waste-wooden-scrap.jpg"
        alt="Description of the image"
      />
      <br/>
      
      <p id='title'>
        <br/>
        "Unleash your creativity and contribute to a sustainable future by recycling old or damaged wood in your home—transforming what's discarded into unique and wonderful creations, one piece of reclaimed wood at a time."
</p>
      <br />
      <div className='one'>
        <p className="paragraph1">Recycling and reusing old or spoiled wood within your household not only sparks individual creativity but also plays a crucial role in fostering environmental sustainability. Timber recycling significantly reduces the demand for fresh timber, thereby curbing deforestation and preserving our valuable forests. By repurposing discarded wood, you not only contribute to minimizing waste but also showcase the potential for innovation and resourcefulness. This practice not only conserves natural resources but also reduces the environmental impact associated with the production of new wood products. Embracing the art of transforming old wood into wonderful creations not only brings a sense of accomplishment but also serves as a tangible commitment to a greener and more sustainable lifestyle, reminding us that beauty and functionality can arise from the remnants of the past.</p>
        <p id='why'> <b><u><br/>5 Creative ways</u></b></p>
        <br></br>
        <p className="paragraph"><b>Bird Cottage</b><br/><br/></p> 
        <img
        className="plastic-details-image"
        src="https://www.talesbytrees.com/wp-content/uploads/bird-feeder-2344414_1920-768x524.jpg"
        alt="Description of the image"
      />
        <p className='paragraph1'>
        A cute little bird cottage takes very little wood and will only get cuter the more gnarled and jumbled it is. Build a wild little birdhouse or animal inn for the woodland creatures to shelter inside.</p>
        <p className='paragraph1'>Here are few steps to make a little shelter:<br/><br/></p>
        <p className='paragraph1'><b>1. Gather Materials:</b> Reclaim discarded wood pieces and gather essential tools like a saw, hammer, and nails.<br/>
 <b> 2. Design and Cut:</b> Sketch a simple birdhouse design, cut wood pieces accordingly, and assemble using wood glue and nails.<br/>
 <b> 3.Add Features: </b> Include an appropriately sized entrance hole, ventilation, drainage, and optional decorative elements. <br/>
<b>  4.Paint or Seal: </b>Apply outdoor-friendly paint or wood sealant to protect the birdhouse from the elements.<br/> 
<b> 5. Install Hinge and Latch: </b>Attach a hinge for easy cleaning and a latch to secure the roof. <br/>
<b> 6. Mount Securely:</b>Ensure stability when attaching the birdhouse to a pole, tree, or building, providing a cozy and eco-friendly habitat for birds. </p><br/>

 <p className="paragraph"><b>Wooden Planters</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://i.pinimg.com/564x/da/08/9c/da089c0f9ae567222bf4d06436d70043.jpg"
        alt="Description of the image"
      />
     <p className='paragraph1'>Make pretty and functional wooden planters with reclaimed wood beams and planks. It’s simple to put them together, but it’s expensive to buy new ones. It’s a very stylish way to add plants to your home. These would look great in your kitchen, office, or any other room in your home. 
They offers a sustainable and aesthetically pleasing solution for gardening enthusiasts. By repurposing discarded or salvaged wood, these planters contribute to environmental conservation by reducing the demand for new timber. The use of reclaimed beams and planks adds character and a rustic charm to the planters, creating a visually appealing garden feature. The inherent durability of reclaimed wood ensures longevity for the planters, providing a sturdy and reliable structure for plants. <br/><br/></p>
     
     {/* <p className='paragraph1' ><b>Materials Needed</b>:<br/> 1.
     Sweater<br/>
     2. Interfacing<br/>
     3. Pillow or Stuffing<br/>
    <br/>

     <b>Steps:</b><br/>
     1. Line up pillow to sweater, use a fabric marker to draw lines round the shape of the pillow<br/>
     2. Cut along markings. You can leave side seams if they are already there.<br/>
     3. Cut 2 pieces of lightweight fusible interfacing the same size as sweater pieces.<br/>
     4. Fuse the interfacing onto the wrong sides of the sweater with an iron over a damp cloth – both front and back.<br/>
     5. Pin pieces inside out and mark a space to leave open for the filling or pillow form (unless using a sweater with buttons which are a ready made opening). <br/>
     6. Sew around all sides but leave an opening on one side. <br/>
     7. Turn right side out and insert pillow or stuffing. <br/>
    8. Sew up the opening. <br/>
     </p><br/> */}

     
     <p className="paragraph"><b> Rustic Photo Frame </b><br/><br/></p>
 <img 
  className="plastic-details-image"
  src="https://cdn.shopify.com/s/files/1/0383/8610/6499/files/shutterstock_94069036.jpg?v=1668688388" 
  alt="Description of the image" />

     <p className='paragraph1'>The farmhouse accents can have a very high price tag. But why spend an insane amount when you can build a beautiful rustic photo frame with scrap wood? All you have to do is take a few screws, some glue, and wood scraps and assemble them to get a picture-perfect wall hanging that offers lightweight durability and a bucolic charm. We bet you won’t be able to take your eyes off this one. </p>
        {/* <b>Materials Needed:</b><br/><br/>
     <b>1.</b>Glass Bottle with a lid or cap<br/>
     <b>2.</b>Spray Nozzle<br/>
     <b>3.</b>Drill or Punch<br/>
     <b>4.</b>Markers or googly eyes (optional)<br/>
     <b>5.</b>Hot glue gun (optional)<br/><br/>
     <b>Steps:</b><br/> */}
{/* 
     <b>1.</b>Gather Materials: Collect old clothes, ensuring they are clean and in good condition. Denim jeans or sturdy cotton shirts work well.<br/><br/>
     <b>2.</b>Prepare Clothes: Cut the fabric into large, flat panels. For jeans, use the pant legs, and for shirts, remove sleeves and stitch openings.<br/><br/>
      <b>3.</b>Design and Dimensions: Decide the size and design of your tote bag. Use existing seams for efficiency. A typical size is around 14x16 inches.<br/><br/>
      <b>4.</b>Stitching Seams: Sew the sides and bottom of the panels together, utilizing the existing hems and seams. Reinforce the handles by folding and stitching.<br/><br/>
      <b>5.</b>Optional Features: Add pockets or embellishments from other sections of the clothes. Be creative with patterns and colors.<br/><br/>
      <b>6.</b>Final Touch: Turn the bag inside out to hide seams. Check for any loose threads or weak spots and reinforce if necessary.<br/><br/>
      <b>7.</b> Reuse with Style: Your unique tote bag is ready! Carry it proudly, knowing you've given old clothes a new life while reducing waste. <br/> <br/>
</p><br/> */}



<p className="paragraph"><b> Earring Organizer </b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://sawsonskates.com/wp-content/uploads/2022/06/scrap-wood-earring-organizer-1.jpg"
        alt="Description of the image"
      />
      <p className='paragraph1'>
      Can’t find a matching pair of earrings? Then make this easy wood DIY earring holder! This picture frame-style holder uses inexpensive burlap to display earrings.The open weave of the burlap gives the earring stand a rustic feel and makes it easy to organize earrings of different shapes and sizes. It’s perfect for studs, hoops and more.
      This is a simple project to make for yourself or to give as a handmade gift. It’s easy for anyone to build with just a few basic tools.
      </p><br/>
{/*      
     <p className='paragraph1' ><b>Materials Needed:</b><br/><br/>
     <b>1.</b> T-shirt (choose a large size)<br/>
     <b>2.</b> Needle & thread or sewing machine<br/>
     <b>3.</b>Fabric paint<br/>
     <b>4.</b>Pencils<br/>
     <b>5.</b>Scissors<br/>
     <br/>
     <b>Steps:</b><br/><br/>

     <b>1.</b>Take the shirt and fold it in half the long way. Lay it on a flat surface and smooth out any wrinkles.<br/><br/>
      <b>2.</b>Cut across just below the neckline, down the side of the shirt before the sleeves, and right above the bottom hem.<br/><br/>
      <b>3.</b> Now you have two pieces. Separate them, placing a piece of cardboard under each one. Fabric paint can bleed through, so you don’t want the two pieces still touching or ruin your flat surface. <br/><br/>
      <b>4.</b>Squeeze some paint out and dip the eraser end of the pencil. Then dab it on your fabric. Dip each time you make a dot.<br/><br/>
      <b>5.</b>Do this for both pieces of fabric, just on one side. Let the paint dry for about two hours.<br/><br/>
      <b>6.</b>Dip the eraser into the paint after every dot or it will be faded. I allowed some dots to be faded. Do this for both pieces of fabric, just on one side. Let the paint dry for about 2 hours.<br/><br/>
      <b>7.</b> Face the pieces so the pattern is on the inside and line up the ends. Hand stitch or sew about an inch below the edge straight across both ends.
<br/><br/>
      <b>8.</b>Flip the scarf inside out. Then fold in the corners so that the unfinished sides are hidden inside the scarf.<br/>
</p><br/> */}

<p className="paragraph"><b>Robot Emoji DIY Piggy Bank</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://sawsonskates.com/wp-content/uploads/2020/03/diy-piggy-bank-plans-1.jpg"
        alt="Description of the image"
      />

      <p className='paragraph1'>
      This do it yourself piggy bank is made out of wood and shaped like a cute robot emoji. It’s a simple project that can be made entirely with scrap wood.

Make it as a gift for your kids or grandchildren. Or get the kids involved. Ask them to help with gluing, sanding, and painting.

This project is also a great opportunity to teach kids about saving money.
      </p><br/>

     <p className='paragraph1' >
     
     {/* <b>Materials Needed:</b><br/><br/>
     <b>1.</b>Old flannel shirte<br/>
     <b>2.</b>A pair of jeans<br/>
     <b>3.</b>A wire wreath frame<br/> */}

     <b>Steps involved:</b><br/>
    
     <b>1.</b>I used 1×2, 1×3, and 1×4 pine to build this DIY piggy bank. Pine is inexpensive and easy to work with.<br/><br/>
     <b>2. Make the Box: </b>
Cut the wood to length for the front, back, sides and bottom.<br/> Apply glue to parts, clamp, and attach using nails. <br/>
Cut 2 pieces of wood to length for the ears. 
Apply glue to the ears, position on the box, and clamp. Attach using nails.<br/><br/>
      <b>3. Make the Lid: </b>
Cut 1 piece of wood to length for the lid and cut a hole for the coin slot. <br/>
Cut 1 piece of wood to length for the handle.Use sanding block to sand a 45-degree bevel on each end. <br/>
Apply glue to the handle, position on the lid, and clamp. Attach using nails.<br/><br/>
      <b>4. </b>Sand all of the parts and apply a coat of primer. When the primer becomes dry, lightly sand with 220 grit sandpaper.<br/><br/>
      </p><br/>
      </div>

      <div>
    <div>
      <p className='videocontent'> <b><i>
      "Join the green revolution! Embrace the beauty of recycling and reusing wood – transform discarded materials into stunning creations. Explore the endless possibilities on sustainability with inspiring YouTube videos, and let's build a greener, more mindful world together!"</i></b></p>
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

export default Wood;