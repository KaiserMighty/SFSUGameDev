# Static React Website for the Game Development Club at SFSU
This project was created in the Fall 2024 semester, my final semester at SFSU. Recognizing that I will be departing SFSU, I wanted to leave enough documentation such that someone else can fork this repo and continue maintaining it for the club. At the time of writing, the website is built on React, the domain is from PorkBun, and the remote instance is from Digital Ocean. The documentation assumes these are still the same, you may have to look up additional material if this changes. In the interest of time, I have not explained every trivial detail of the website, some level of web development experience is expected.

## React Development

### Replacing the Cover Images
Replacing the images on the front page is fairly straightforward.

**For the header image:**  
Head into the src folder to find all the sources files.  
Open the components directory to find all the reusable react components.
Open `Hero.jsx` and locate the `<img>` tag.  
Replace the link inside the `src` field of the tag to a different image.

**For the smaller tile images:**  
Head into the src folder to find all the sources files.  
Open the components directory to find all the reusable react components.
Open `Activities.jsx` and locate the `<img>` tag.  
Replace the link inside the `src` field of the tag to a different image.

### Extending the FAQ
To extend the FAQ section of the home page, open up `FAQ.jsx` inside the `components` folder of the `src` directory.  
Reading through the existing code should give you an idea of how to modify the FAQ.  
To add a new question, duplicate the `<Accordian>` tag and change the `question` and `answer` with the format being:
```
<Accordion 
    question='Type in a question here' 
    answer='Type in the answer here' 
/>
```

### Extending the Projects/Archive page
If you view `Projects.jsx`, you'll notice the design pattern that was used to make extension easy. To add a new item, simply duplicate an existing "item" indicated by the square braces and change out the contents. The format is:
```
[
    'image_url',
    'title',
    'authors',
    'game_url'
],
```
`Archive.jsx` follows the same design principle, but has an added level of categorization. Extend the `CategoryContainer` by duplicating a `Category` item. The format is:
```
<Category
    title='category_title'
    content=
    {[
        [
            'image_url1',
            'title1',
            'authors1',
            'game_url1'
        ],
        [
            'image_url2',
            'title2',
            'authors2',
            'game_url2'
        ],
        [
            'image_url3',
            'title3',
            'authors3',
            'game_url3'
        ],
    ]}
/>
``` 

### Tool Assisted Archive Extension
In the `tools` folder, there is a Python script intended to drastically speed up the process of adding a new itch.io Game Jam to the website called `itchScraper.py`.  

To use this tool, ensure you have Python, Selenium, and Chromedriver installed:  
You can install selenium with Pip by running the code below on a terminal.
```pip install selenium```

There is a version of `chromedriver.exe` in the `tools` folder, but this will likely be out of date by current time.  
To update the version, go to [https://googlechromelabs.github.io/chrome-for-testing/](https://googlechromelabs.github.io/chrome-for-testing/)  
Follow the URL for the chromedriver *Binary* made for your *Platform*. You also need Google Chrome installed for this, which you can grab here as well.  
Replace `chromedriver.exe` in the `tools` directory with the one you downloaded.

To use the script, call it with the link for the submissions page of a Game Jam as an argument:
```
python itchScrapyer.py https://itch.io/jam/fall2024-at-sfsu/entries
```
After completing it's run, the script will create a file called `scraper_output.txt`.  This file contains the code you need to append the `Archive` page. Copy everything in this file.  

In `Archive.jsx`, paste the contents of the output under `<CategoryContainer>` such that it creates a new category just like the existing examples. You may have to make minor edits to the indentation and such, but the script has done all the heavy lifting for you.  

For games that aren't actually on itch.io (like Roblox), make sure you manually edit the link from the output and change it to the roblox game page.  

### Thumbnail Retrieval from itch.io
Manual extension is easy if you have all the data. This is straightforward for fields like `title`, `authors`, and `game_url`. But getting the `image_url` for the thumbnail can be a little less obvious.

**If you are on the submissions page of a Game Jam:**  
With your mouse over the thumbnail for a game, right click and select *Inspect Element*.  
The popup should already be highlighting the item you were looking at (likely starts with `<a href=`).  
Click the *Right Arrow* on the `<a>` tag to show subordinate tags until you locate an `<img>` tag.  
Copy the contents of `src="there_should_be_a_link_here"`, the link inside the quotes is what you are looking for.  
Paste it where needed, this link points to the itch.io game thumbnail.

## Remote Hosting

### Accessing the Server
To access the droplet which will be hosting the website, we need to SSH into it.  
For security purposes, the key is not present in the GitHub repo, but someone should have it.

You can run the following command from a terminal, where the directory is the same as where the key is located, in order to access the droplet:
```
ssh -i ssh_key root@droplet_ip
```
Make sure to change `ssh_key` to the filename of the key if you are in the same directory, or provide a path to the key. Also, change `droplet_ip` to the ip of the digital ocean droplet.

### Updating the Server
Once you are ready to host the project online, run `npm run build`  
This will create an optimized production build that needs to be placed on the server.

This can be achived by running the command below (make sure to replace `droplet_ip` with the correct value):
```
scp -r build/ root@droplet_ip:/var/www/react-app
```
This command needs to be ran from the directory containing the build folder (Alternatively, you can edit `build/` to point towards the react build directory).  
This command will also SSH into the droplet, this means the key needs to be in the same directory you are running the command from.

I had my ssh key in my downloads folder, so I simply copied the build folder from the repo directory and pasted it into my downloads folder before running the command above.

Once uploaded, ssh back into the node with `ssh -i ssh_key root@droplet_ip` and run `sudo systemctl reload nginx` to reload the page contents.  

### Installing the Server (from scratch)
If, for whatever reason, you need to reinstall the droplet from scratch, here are all the steps to do so:

ssh into the droplet or node and run the following commands to install nginx (the web server)
```
sudo apt update
sudo apt install nodejs npm
```
Then, you can follow the steps from "updating" to copy over an optimized production build into the droplet.

Next, set up a configuration file for this server by running `sudo nano /etc/nginx/sites-available/react-app`  
This will open a text editor, paste the contents below making sure to change `domain`
```
server {
    listen 80;
    server_name domain.com www.domain.com;

    root /var/www/react-app;
    index index.html index.htm;

    location / {
        try_files $uri /index.html;
    }

    error_page 404 /index.html;

    location ~ /\.ht {
        deny all;
    }
}
```
Enable this new configuration by running `sudo ln -s /etc/nginx/sites-available/react-app /etc/nginx/sites-enabled/`  
You can also optionally delete the default config with `sudo rm /etc/nginx/sites-enabled/default`

To ensure the system has the correct permissions for these, I had to run the two lines below:
```
sudo chown -R www-data:www-data /var/www/react-app
sudo chmod -R 755 /var/www/react-app
```
Finally, you can test the server by running `sudo nginx -t`. If the test was successful, run `sudo systemctl reload nginx` and the server should be working.

### Digital Ocean Setup
If there is no existing, already configured, Digital Ocean droplet, here are the steps to configure a blank droplet.

**Adding an SSH Key:**  
From the Digital Ocean dashboard, go to *Settings*.  
Click on *Security* at the top.  
Click *Add SSH Key*.  
There are instructions on the right side of the popup to create a new key if needed.  
Paste in your SSH key under *Public Key* and give it a name in *Key Name*.  
Hit *Add SSH Key*.  

**Opening up the Firewall:**  
From the Digital Ocean dashboard, go to *Networking* and click on *Firewalls*.  
Choose an existing Firewall that you are using or hit *Create Firewall*.  
Leave outbound rules as is.  
Ensure *SSH* with the TCP port 22 already exists, create a new rule if it doesn't.  
Click *New rule* and choose HTTP, ensure the *Protocol* is TCP and the *Port Range* is 80.  
Click *New rule* and choose HTTPS, ensure the *Protocol* is TCP and the *Port Range* is 443.  
Make sure this Firewall is applied to the correct droplet.  

**To use a custom domain for the website:**  
From the Digital Ocean dashboard, go to *Networking* and click on *Domains*.  
Enter your domain, select the correct droplet, and hit Add Domain.  
Click the *More* dropdown on the newly created domain and hig *Manage domain*.  
Choose A under *Create a new record*.  
Enter `@` into *Hostname*, select the correct droplet from *Will Direct To*, leave *TTL (Seconds)* at the default value, and hit *Create Record*  
Choose A under *Create a new record*.  
Enter `www` into *Hostname*, select the correct droplet from *Will Direct To*, leave *TTL (Seconds)* at the default value, and hit *Create Record*.  

**Make sure your domain provider is using the digital ocean nameservers:**  
If you are using PorkBun, go to the dashboard, and click details on the domain.  
Click the *Edit Icon* next to *Nameservers*.  
Clear out the text box and paste the following in:
```
ns1.digitalocean.com
ns2.digitalocean.com
ns3.digitalocean.com
```
(This will take a few hours, maybe a day, to kick into effect).
