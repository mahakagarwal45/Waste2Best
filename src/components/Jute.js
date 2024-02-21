//Jute.js
import React from 'react';
import './PlasticDetails.css';
import ReactPlayer from 'react-player';
import { Card, CardDeck } from 'react-bootstrap';

const videos = [
  {
    title: '10 Best Out Of Waste Ideas for Plant Pots | Jute Recycling Craft Ideas',
    url: 'https://youtu.be/SWTLGynjJDU?si=Pd8ulu4QPiR0R8EA',
  },

  {
    title:'6 Jute wall hanging craft ideas | Home decorating ideas handmade',
    url:'https://youtu.be/QspQdPCKNKk?si=5pkbdl2L4fp1gVyW', 
  },

  {
    title:'3 DIY Jute Bag - How to Make Handmade Jute Bag | DIY Purse Making | Ladies HandBag with Jute Rope',
    url:'https://youtu.be/VSc-B9D6XnA?si=Qm06QMxUdcwtKW3y', 
  },

  {
    title:'4 Best Creative Jute Wall Hangings Room Decoration Ideas | Best out of waste Jute Craft Designs',
    url:'https://youtu.be/kpyNL_7qRhU?si=1NGYbwq24vbPh2zn', 
  },

  {
    title:'10 Jute Wall Hanging Craft Ideas For Storage, Space optimization',
    url:'https://youtu.be/EJDG9MLsOTQ?si=xk7j0OL12omQYm7y', 
  },

  {
    title:'5 Jute bags making at home | Bag designs from jute and old things',
    url:'https://youtu.be/DZ5u7T-H8q4?si=q4VucNREzmWNbuHz', 
  }
];


const JuteDetails = () => {
  return (
    <div className="plastic-details-container">
      {/* Use the external image with the provided URL */}
      <img
        className="plastic-image"
        src="https://i.ytimg.com/vi/f5OQqlGT8Qc/sddefault.jpg"
        alt="Description of the image"
      />
      
      <p id='title'>
      Transforming discarded jute sacks into sustainable, eco-friendly products fosters a circular economy and promotes environmental stewardship</p>
      <br />
      <div className='one'>
        <p className="paragraph1">Jute sacks, also known as burlap bags, are versatile and durable packaging materials made from natural jute fibers. Renowned for their strength and biodegradability, jute sacks are commonly used for storing and transporting a variety of goods such as grains, coffee beans, and potatoes. Their eco-friendly nature makes them an ideal choice for sustainable packaging solutions, offering breathability and moisture resistance while reducing reliance on synthetic materials. Additionally, jute sacks are often repurposed into reusable shopping bags, home decor items, and compostable planters, further extending their lifespan and minimizing waste. With their renewable source and minimal environmental impact, jute sacks play a crucial role in promoting environmentally conscious practices across industries and households alike.<br/></p>
        <p id='why'> <b><u><br/>5 Creative ways</u></b></p>
        <br></br>
        <p className="paragraph"><b> Shopping Bags</b><br/><br/></p>
        <img
        className="plastic-details-image"
        src="https://image.made-in-china.com/202f0j00UpmkjbQgAMcs/Eco-Friendly-Jute-Bag-Custom-Coated-Linen-Shopping-Bag-GIF-Bag-Gunny-Burlap-Bag-Jute-Bag.webp"
        alt="Description of the image"
      />
        <p className='paragraph1'>
        For this, repurpose jute sacks into durable, eco-friendly shopping companions, reducing waste and promoting sustainability.</p>
        <p className='paragraph1'>Here's a quick guide which helps in home decor:<br/><br/></p>
        <p className='paragraph1'>1. Gather jute sacks and scissors.<br/>
        2. Cut the jute sacks into rectangular pieces, depending on the desired size of your shopping bag.<br/>
 3.Fold the edges of the pieces inward and sew them to create a neat hem. Fold the top edge of the piece down to create a casing for the handles.<br/>
 4.Cut strips of jute sack for the handles and sew them onto the bag. Decorate the bag if desired, and your reusable shopping bag is ready to use!</p><br/>

 <p className="paragraph"><b>Plant Holders</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://thepurplewings.com/cdn/shop/products/product-image-1542179070_1400x_c3a3268f-f000-44f3-91fa-0c009d325e53.jpg?v=1667410935"
        alt="Description of the image"
      />
     <p className='paragraph1'>Crafting plant holders from recycled jute sacks not only adds a rustic touch to your space but also promotes sustainability by repurposing materials and reducing environmental impact. Here's a step-by-step guide to help you with the process:<br/><br/></p>
     <p className='paragraph1' >

     <b>Steps:</b><br/>
     1.Cut jute sacks into long strips.<br/>
     2. Braid or weave the strips together to form a sturdy holder. Tie knots at the ends of the holder to secure it.<br/>
     3.Place a potted plant inside the holder, adjusting the size as needed.<br/>
     4.Hang the plant holder from a hook or nail, and enjoy your DIY plant hanger!<br/>

     </p><br/>
     <p className="paragraph"><b> Decorative Pillows</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://images.meesho.com/images/products/114928561/popgz_512.webp"
        alt="Description of the image"
      />
     <p className='paragraph1' >

     <b>1.</b>Cut jute sacks into squares or rectangles, depending on the desired size of your pillow.<br/><br/>
     <b>2.</b>Sew two pieces of jute sack together, leaving one side open.<br/><br/>
      <b>3.</b>Fill the pillow with stuffing or old fabric scraps.<br/><br/>
      <b>4.</b>Sew the open side of the pillow closed.<br/><br/>
      <b>5.</b> Optionally, stencil or paint designs onto the pillow for added decoration.<br/><br/>
</p><br/>

<p className="paragraph"><b>Wall Hanging </b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://i.pinimg.com/564x/68/fa/8d/68fa8df75513c5c91d7a6cb7cc2bff98.jpg"
        alt="Description of the image"
      />
      <p className='paragraph1'>
      Transform recycled jute sacks into a stunning wall hanging, adding texture and sustainability to your home decor. </p><br/>
     
     <p className='paragraph1' >
     <b>Steps:</b><br/><br/>

     <b>1.</b>Prepare materials: Gather recycled jute sacks, scissors, needle, thread, and optional decorative elements.<br/><br/>
     <b>2.</b>Cut and arrange: Cut jute sacks into desired shapes, arrange them into a pleasing design, and stitch or glue together.<br/><br/>
      <b>3.</b>Add embellishments: Optionally incorporate decorative elements like beads or shells.<br/><br/>
      <b>4.</b>Attach hanging mechanism: Secure a rod or dowel to the top edge for hanging.<br/><br/>
      <b>5.</b>Hang: Use hooks or nails to hang your creation on the wall.<br/><br/>
     </p><br/>

<p className="paragraph"><b>Jute Bookmarks:</b><br/><br/></p>
 <img
        className="plastic-details-image"
        src="https://i0.wp.com/heartfeltstamping.com/wp-content/uploads/2021/04/Stampin-Up-Forever-Fern-Friendship-Bookmark-Idea-Rosanne-Mulhern-stampinup-1.jpg?resize=640%2C502&ssl=1"
        alt="Description of the image"
      />
     <p className='paragraph1' >
     <b>Steps:</b><br/>

     <b>1.</b>Measure and mark rectangles on the jute sacks using the ruler and pencil or pen. A typical bookmark size is around 2 inches by 6 inches (5 cm by 15 cm), but you can adjust based on your preference.<br/><br/>
     <b>2.</b>Carefully cut out the rectangles along the marked lines using scissors. If desired, decorate the jute rectangles with beads, buttons, or other decorative elements. You can sew them on or attach them with fabric glue. <br/><br/>
      <b>3.</b>Fold the jute rectangle in half lengthwise, with the decorated side facing inward. Trim the corners of the folded end to create a neat tapered edge.<br/><br/>
      <b>4.</b>You can hand-sew the edges using a needle and thread.<br/><br/>
      <b>5.</b>Once the glue is dry or the edges are sewn, your jute bookmark is ready to use!
Optionally, you can further personalize the bookmark by adding embroidery, stamping, or painting designs on it.<br/><br/>
      <b>6.</b>If using electrical components, test the lights to ensure they are working properly before finalizing the structure.<br/><br/>
      <b>7.</b>If you used fabric glue, allow the bookmark to dry completely before using it to avoid any sticking.<br/><br/>
      <b>8.</b>Use your handmade jute bookmark to mark your place in books, journals, or planners, and feel good about repurposing materials in a sustainable way.<br/><br/>
      </p><br/>
      </div>

      <div>
    <div>
      <p className='videocontent'> <b><i>
      Unlock the creative potential of jute sacks with captivating DIY tutorials on YouTube, transforming humble fibers into eco-friendly masterpieces!" 🌿🎥</i></b></p>
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

export default JuteDetails;