const express = require ('express'); 
const app = express(); 
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const cors = require('cors');
const port = 8888;

const corsOptions = {
  origin: 'http://localhost:5174' // allow requests only from this domain
};

app.use(cors(corsOptions));

// MongoDB Configuration
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/new-chinaDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
	console.log('Connected to MongoDB!');
})
.catch((err) => {
	console.error(err);
});

let { History, Order } = require('./models/schemas');


// API Routes
app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

app.get ("/", function (req,res) {
  console.log(req);
	res.status(200).send("NEW CHINA POS API ROUTES");
});



app.post("/addOrder", (req, res) => {
	// const item2find = new Object();
	// item2find.code=req.body.code;
	Order = new Order({
		orderNumber: 1,
		items: [{
			itemNumber: "1a",
			itemName:"egg roll",
			quantity: 2,
			price: 5
		}],
		status: 'pending'
	});
	
	Order.save()
		.then(() => {
			console.log('Task saved');
			res.send('Task saved')
		})
		.catch((err) => {
			console.error(err);
		});
	
    Order.find(item2find, '', function (err, data) 
    {
		if (err) return console.log(err);
		if(data=="")
		{
			const item = new Object();
			item.code=req.body.code;
			item.name=req.body.name;
			item.quantity=req.body.quantity;
			item.price=req.body.price;
			console.log(getJSONString(item));
			var x = new Cart(item);
			x.save(function (err) 
			{
				if (err) return handleError(err);
			});
		}
		else
		{
			const item2update = new Object();
			item2update.code=req.body.code;
			const update=new Object();
			update.quantity=parseInt(data[0].quantity)+1;
			Cart.updateOne(item2update, update,function(err,result)
			{
				if(err) console.log("ERROR="+err);
				else console.log("RECORD UPDATED"); 
			});
		}
		res.render ( "products.ejs",{message:""});
	});

	
});

app.listen(port, () => {
  console.log ("app listening on http://localhost:" + port);
});