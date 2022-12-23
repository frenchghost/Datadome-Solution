This api will help you avoid getting blocked by Datadome by generating a datadome cookie used to verify the authenticity
of your request.

For Sites such as
www.footlocker.com,
www.courir.com,
www.slamjam.com,
www.starcowparis.com,
www.asus.com,
www.redditinc.com,
and many more

1. Deploy this api somewhere. Localhost is preferrable to reduce latency
2. Make sure you have Node.js installed https://nodejs.org/en/
3. Set the port you would like the api to run on in the config.js file
4. Make sure to install the dependencies by either running "npm i" or running the install.bat file
5. Then you can run the start.bat file and the api will be up and ready
6. you can now request to http://127.0.0.1:${PORT}/datadome with the body having the domain in it example - {"domain":domain}

cookieGen() function can also be pulled from .\src\assets and can be used in any application

PS: Wrote this in 1 hour so not the best Datadome API out there but works great

Any issues contact me @ghosts#6983 on discord or @french#8355
