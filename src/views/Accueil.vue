<template>
    <header>
        <div>
            <h1>Ligue eSport</h1>
            <P>Le jeu à un autre niveau</P>
        </div>
    </header>
    <main>
        <div class="bloc">
            <div class="carte-jeu">
                <div class="top">
                    League of Legends
                </div>
                <div class="body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt non velit voluptatem voluptatibus vel, obcaecati rerum a cumque quam.
                </div>
            </div>
            <div class="carte-jeu">
                <div class="top">
                    Fortnite
                </div>
                <div class="body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt non velit voluptatem voluptatibus vel, obcaecati rerum a cumque quam.
                </div>
            </div>           
            <div class="carte-jeu">
                <div class="top">
                    Valorant
                </div>
                <div class="body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt non velit voluptatem voluptatibus vel, obcaecati rerum a cumque quam.
                </div>
            </div>
        </div>
    </main>
</template>

<style>

    header{
        width: 100%;
        height: 400px;
        background-color: rgb(1, 61, 61);
        background-image: url('https://images.unsplash.com/photo-1532339142463-fd0a8979791a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        background-repeat: repeat;
        background-position: center;
        background-size: cover;
        color: white;
        display: flex;
        justify-content: end;
        align-items: end;
        font-size: 45px;
        font-weight: bold;
        padding: 30px;
        box-sizing: border-box;
    }

    

    header h1, header p{
        margin: 0;
        text-align: end;
    }

    .bloc{
        /* width: 100%; */
        margin: 30px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .blanc{
        background-color: white;
    }

    .text-bloc{
        font-size: 50px;

    }

    img{
        border-radius: 10px;
        /* height: 300px; */
        /* width: 50%; */
    }

    .texte{
        padding: 30px;
        width: 50%;
    }

    .texte p{
        font-size: 25px;
        text-align: justify;
    }

    .carte-jeu{
        width: 600px;
        text-align: center;
        border-radius: 10px;
        margin: 15px;
        padding: 5px;
    }

    .carte-jeu .top{
        font-weight: bold;
        background-color: #0e481e;
        color: white;
        padding: 20px;
        font-size: 35px;
    }

    .carte-jeu .body{
        padding: 20px;
        font-size: 25px;
        background-color: #32323A;
        color: white;
    }


</style>