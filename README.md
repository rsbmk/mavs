[mavs.png](https://postimg.cc/2qBXfQjs)
# Mavs

Mavs is a website where you can find all the marvel characters. The objective and the fun of this website is that you can find your favorite characters, leave a like and make a comment if you are. Of course, for all this you need to have a user account.

[home.png](https://postimg.cc/ct0MKYR5)

[detail.png](https://postimg.cc/5XTrX767)

## Table of Contents
1. List of new feactures
2. Guide to developers
3. How is the project built?
4. Get the proyect
5. Collaborations

## All this is just the beginning, the next features that I would like to integrate are:

* Be able to see the amount of likes and comments that each character has.

* Have a page where you can see all the characters that you have liked.

* Have the option to delete your account.

# Guide to developers

## How is the project built?
Este proyecto está construido con react, intentando usar las mejores precticas posibles (asi que si vez una mala practica no dudes en corregirme). 

The routes I am managing with the library of [wouter] (https://github.com/molefrog/wouter), and so far I have been super good.

I'm using [react-helmet] (https://www.npmjs.com/package/react-helmet) to make the titles and short descriptions of the pages

For global states I am using react contexts for storage. Although in the future I will do it with Redux.

And last but not least, I extract the data of the characters from the marvel api. But I keep the user data in my own Backend. [link-to-backend] (https://github.com/rsbmk/api-mavs)
## Get the proyect

To get the project you first have to clone the repository, then go to the Mavs folder (which is the project folder) and then install all the dependencies. You can do all this with the following commands:

```
git clone https://github.com/rsbmk/mavs.git
cd mavs
npm i
```
## Collaborations

If you want to collaborate in this project, you are totally welcome! I'm going to leave you a list of some bugs, or things to do that I will be working on. If you want you can start with these:

* How to handle when the jwt expired.
* Optimization on the home page. When entering the detail of a character and navigating back (to home), do not use the API call if the gifs exist in the context gifs.
* When you open the menu, you have to hit the menu button again to close it