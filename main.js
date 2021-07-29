var image = [ 
    "https://i1.wp.com/i.pinimg.com/originals/bb/91/89/bb9189bfb42d54fd26ad27587447910d.jpg",
    "https://i.pinimg.com/originals/31/80/45/31804508835edf5a91d03da688950f50.png",
    "https://64.media.tumblr.com/tumblr_m5rrk6b3Hs1qhy6c9o1_400.gifv",
     "https://media3.giphy.com/media/82kXCTHlCZKb6ro4CA/source.gif",
    "http://pa1.narvii.com/6429/740b91b6da6fb00c8a19dec89487f9c2ef347b1b_00.gif",
    "https://i.pinimg.com/originals/bb/1a/24/bb1a245e07e69809494c299b4f404d86.jpg"
    ]
    var names=[
    "This is Pusheen's Family Tree",
    "This is her Mum, Sunflower",
    "This is her Dad, Biscuit",
    "This is her brother, Pip",
    "This is her sister, Stormy",
    "This is her husband, Tommy"
    ]
    var i = 0
    function change(){
    document.getElementById("images").src = image[i];
    document.getElementById("names").innerHTML = names[i]; i++;
    if(i>5){i=0;}
    }