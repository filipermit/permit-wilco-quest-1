const { Permit } = require("permitio");

const express = require("express");
const app = express();
const port = 4000;

// This line initializes the SDK and connects your Node.js app
// to the Permit.io PDP container you've set up in the previous step.
const permit = new Permit({
	// in production, you might need to change this url to fit your deployment
	pdp: "http://localhost:7766",
	// your api key
	token: "<YOUR_API_KEY>",
});

// You can open http://localhost:4000 to invoke this http
// endpoint, and see the outcome of the permission check.
app.get("/", async (req, res) => {
	// COMPLETE EMPTY PERMIT.CHECK() FUNCTION
	const permitted = await permit.check("user_emails", "create", "document");
	if (permitted) {
		res
			.status(200)
			.send(
				`${user.firstName} ${user.lastName} is PERMITTED to example action ( add actions to your resource to see here real data ) example resource ( add resources to your env to see here real data )!`
			);
	} else {
		res
			.status(403)
			.send(
				`${user.firstName} ${user.lastName} is NOT PERMITTED to example action ( add actions to your resource to see here real data ) example resource ( add resources to your env to see here real data )!`
			);
	}
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
