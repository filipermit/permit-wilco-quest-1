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
	token:
		"This key needs to be replaced programatically BY the Key the user provided",
});

// You can open http://localhost:4000 to invoke this http
// endpoint, and see the outcome of the permission check.
app.get("/", async (req, res) => {
	// After we created this user in the previous step, we also synced the user's identifier
	// to permit.io servers with permit.write(permit.api.syncUser(user)). The user identifier
	// can be anything (email, db id, etc) but must be unique for each user. Now that the
	// user is synced, we can use its identifier to check permissions with `permit.check()`.
	const permitted = await permit.check(
		"CURRENT_USER_NEEDS_TO_BE_REPLACED",
		"create",
		"document"
	);
	if (permitted) {
		res
			.status(200)
			.send(
				`${user.firstName} ${user.lastName} is PERMITTED to create document!`
			);
	} else {
		res
			.status(403)
			.send(
				`${user.firstName} ${user.lastName} is NOT PERMITTED to create document!`
			);
	}
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
