import React from 'react';
import './Clothes.css';
import ReactPlayer from 'react-player';
import { Card, CardDeck } from 'react-bootstrap';

const videos = [
  {
    title: '10 Easy Crafts With Old Clothes',
    url: 'https://youtu.be/dxNto3xgadw?si=-mkOFoid5NFwiHbr',
  },

  {
    title:'17 Marvelous DIY Ideas For Upcycling Old Clothes ✂️👖👚🤩',
    url:'https://youtu.be/yLZgrSpCAVs?si=hxQNyvC7od_ofQvE', 
  },

  {
    title:'DIY Scrunchies | DIY Ruffle Hair Bands with old clothes | How to make Scrunchies',
    url:'https://youtu.be/3ghGkYQjib8?si=wkhAUp1KYAD-ghhA', 
  },

  {
    title:'REUSE YOUR OLD JEANS || 30 WAYS TO REUSE OLD CLOTHES',
    url:'https://youtu.be/6M5lL_zvtmc?si=nW4Pua10nyJQsBWo', 
  },

  {
    title:'Old cloth reuse ideas / best out of waste / diy / अब से कपड़े रखने का झंझट खत्म',
    url:'https://youtu.be/r9iYUhD8x8c?si=YG4xErgk4_0qaUjk', 
  },

  {
    title:'12 DIY Doormat Making Ideas || Recycling Old Clothes Craft',
    url:'https://youtu.be/zhwqaft8RoM?si=gGDWkpQvUPZljTAP', 
  }
];


const Clothes = () => {
  return (
    <div className="plastic-details-container">
      {/* Use the external image with the provided URL */}
      <img
        className="plastic-image"
        src="https://images.ctfassets.net/ajjw8wywicb3/4g3FY0Ael90RxCx2mazxcz/3eb4892758a69fef041f25f72784ece9/Dirty-Clean-Color-Shirts-Pile_Tide-Life-Objects_SIDE-ANGLE-296_1440x812.jpg"
        alt="Description of the image"
      />
      <br/>
      
      <p id='title'>
        <br/>
      Revamp, Rewear, and redefine your style – transform old clothes into new trends, embracing sustainable fashion with flair!</p>
      <br />
      <div className='one'>
        <p className="paragraph1">Transforming old clothes into new treasures not only adds a unique touch to your style but also contributes to a greener planet. Dive into the art of upcycling, discovering endless possibilities to breathe new life into forgotten garments. Unleash your creativity, reduce fashion waste, and make a statement with your sustainable fashion choices. Every stitch tells a story of conscious consumerism, where old threads weave a tale of environmental responsibility. Join the revolution – repurpose, revamp, and revel in the sustainable style journey!</p>
        <p id='why'> <b><u><br/>5 Creative ways</u></b></p>
        <br></br>
        <p className="paragraph"><b>Shirt Coin Purse</b><br/><br/></p> 
        <img
        className="plastic-details-image"
        src="https://cfabbridesigns.com/wp-content/uploads/2011/07/IMG_62781-702x1024.jpg"
        alt="Description of the image"
      />
        <p className='paragraph1'>
        For trips to the beach I don’t like packing my heavy leather wallet – filled with extra things I don’t need for an afternoon of swimming. Here’s a small and light coin purse made from the cuff of an old menswear shirt – it’s just big enough to hold some cash and a driver’s license. These are great for kids too – to hold ice cream money and beach or pool passes – or for Dad on Father’s Day to hold his iPod nano.</p>
        <p className='paragraph1'>Here's a quick guide to create these cute pouches:<br/><br/></p>
        <p className='paragraph1'>1. A coin purse is made from the cuff of a menswear shirt.<br/>
 2. Cut off the cuff.<br/>
 3.Fold cuff in half so that the buttonhole side is longer than the side with the button. The longer side should fold over, and the buttonhole and button should meet. Pin in place.<br/>
 4.Arrange the bottles in a cluster or line and use them as vases for flowers or decorative branches.<br/> 
 5. Stitch the sides closed. <br/>
 6. You could also use these as a gift bag for a piece of jewelry or to hold rosary beads. </p><br/>

 <p className="paragraph"><b>Sweater Pillow</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://hallmark.brightspotcdn.com/dims4/default/8e45204/2147483647/strip/true/crop/2500x1667+0+0/resize/960x640!/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F7d%2F0b%2F62e21a2b15ab2e65c3fa67d8c593%2Fhome-family-diy-sweater-pillow.jpg"
        alt="Description of the image"
      />
     <p className='paragraph1'>You can turn pretty much anything into a cushion cover, so this works for old t-shirts just as much as jumpers. Old fluffy jumpers are perfect for making cushion covers that'll make your room look much cosier. <br/><br/></p>
     <p className='paragraph1' ><b>Materials Needed</b>:<br/> 1.
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
     </p><br/>
     <p className="paragraph"><b> Reusable Tote/Shopping Bags</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://onlinefabricstorewordpress.azurewebsites.net/wp-content/uploads/2018/07/shopping-bag-feature.jpg"
        alt="Description of the image"
      />
     <p className='paragraph1' >
        {/* <b>Materials Needed:</b><br/><br/>
     <b>1.</b>Glass Bottle with a lid or cap<br/>
     <b>2.</b>Spray Nozzle<br/>
     <b>3.</b>Drill or Punch<br/>
     <b>4.</b>Markers or googly eyes (optional)<br/>
     <b>5.</b>Hot glue gun (optional)<br/><br/>
     <b>Steps:</b><br/> */}

     <b>1.</b>Gather Materials: Collect old clothes, ensuring they are clean and in good condition. Denim jeans or sturdy cotton shirts work well.<br/><br/>
     <b>2.</b>Prepare Clothes: Cut the fabric into large, flat panels. For jeans, use the pant legs, and for shirts, remove sleeves and stitch openings.<br/><br/>
      <b>3.</b>Design and Dimensions: Decide the size and design of your tote bag. Use existing seams for efficiency. A typical size is around 14x16 inches.<br/><br/>
      <b>4.</b>Stitching Seams: Sew the sides and bottom of the panels together, utilizing the existing hems and seams. Reinforce the handles by folding and stitching.<br/><br/>
      <b>5.</b>Optional Features: Add pockets or embellishments from other sections of the clothes. Be creative with patterns and colors.<br/><br/>
      <b>6.</b>Final Touch: Turn the bag inside out to hide seams. Check for any loose threads or weak spots and reinforce if necessary.<br/><br/>
      <b>7.</b> Reuse with Style: Your unique tote bag is ready! Carry it proudly, knowing you've given old clothes a new life while reducing waste. <br/> <br/>
</p><br/>

<p className="paragraph"><b>Infinity scarf from a T-shirt</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://diycandy.b-cdn.net/wp-content/uploads/2015/03/how-to-make-an-infinity-scarf.jpg.webp"
        alt="Description of the image"
      />
      <p className='paragraph1'>
      Turn your old T-shirt into a trendy infinity scarf by cutting, looping, and styling. Upcycling has never been so chic and eco-friendly! 🌿👕
      </p><br/>
     
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
</p><br/>

<p className="paragraph"><b>Wreath from Flannel Shirt & Old Jeans</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://i.pinimg.com/736x/50/27/87/502787016c9fe0c9a6f0edbecbf01a9a.jpg"
        alt="Description of the image"
      />

      <p className='paragraph1'>
Transform your old flannel shirt and worn-out jeans into a charming wreath with rustic flair. Elevate your home decor with this simple and creative
      </p><br/>

     <p className='paragraph1' ><b>Materials Needed:</b><br/><br/>
     <b>1.</b>Old flannel shirte<br/>
     <b>2.</b>A pair of jeans<br/>
     <b>3.</b>A wire wreath frame<br/>
     <b>Steps:</b><br/>

     <b>1.</b>Slice the shirt and jeans into strips, varying lengths for texture.<br/><br/>
     <b>2.</b>Securely tie the fabric strips onto the wire wreath frame, alternating textures.<br/><br/>
      <b>3.</b>Layer the strips to achieve a full and textured look.<br/><br/>
      <b>4.</b>Attach a bow or other decorations for a personalized touch.<br/><br/>
      <b>5.</b>Hang your unique flannel and denim wreath for a cozy and rustic home decor piece. <br/><br/>
      </p><br/>
      </div>

      <div>
    <div>
      <p className='videocontent'> <b><i>
      Embark on a journey of creativity with clothing on YouTube! Explore videos showcasing the art of recreating and reusing old clothes. Witness the transformation of fabrics into new, stylish pieces with just a click. 🧵✨</i></b></p>
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

export default Clothes;