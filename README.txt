########### README ###################
**** This README is intented only for P2 Part-B. For Part-C please enter into countmin directory and it has separate README for Part-C

** Note **
Extract the tar file into following directory assuming your storm is installed in home directory
 $ tar -zxf Chat.tar.gz

1. Software that needs to be installed (if any) with download and installation instructions.
-> I have used redis srever to store all the messages of chat. Here are the installation instructions.
		
  0. cd $HOME
  1. Download tar ball: 
	 $ wget http://download.redis.io/releases/redis-3.0.0.tar.gz
  2. $ tar xzf redis-3.0.0.tar.gz
  3. $ cd redis-3.0.0
  4. $ make
  5. $ make test
  6. src/redis-server

2. Environment variable settings (if any).
-> Not needed

3. Instructions on how to run the program.
-> To perform all the installation of node packages.
	$ npm install

   Second step would be to start the server.
	$ node index.js

   Open a browser (Mozilla preferred) and enter http://localhost:3000
   Open 2-3 tabs with same link and enter new nickname for each tab.

4. Instructions on how to interpret the results.
-> Once you write your nickname and type a message into the bottom text area. Once you hit send the user's message comes on the right while rest of the messages come on left pane.


5. Sample input and output files (if applicable).

6. References to any software you may have used (if applicable).
-> 
a. http://redis.io/topics/data-types
b. http://www.sitepoint.com/using-redis-node-js/
c. http://socket.io/get-started/chat/
