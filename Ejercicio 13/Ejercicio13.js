const users = [
    {username: 'ppc90', age: 30, premium: false}, 
    {username: 'lu65', age: 24, premium: true},   
    {username: 'maria3', age: 36, premium: false},    
    {username: 'abc123', age: 30, premium: false},    
    {username: 'sergio58', age: 30, premium: true},    
];

const membresiat = users.filter(function(miembrot){
    if (miembrot.premium===true){
        console.log ('El usuario '+ miembrot.username + ' tiene membresia premium');
    }
}
);

const membresiaf = users.filter(function(miembrof){
    return miembrof.premium===false;
    }
);
console.log (membresiaf);