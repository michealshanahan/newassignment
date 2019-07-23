const orgChart = {
    name: "Tim",
    position: "supervisor",
    coworkers: 3,
    directReports:[{
        name: "Steven",
        position: "lead",
        coworkers: 3,
        directReports: [{
            name: "Terry",
            position: "Worker",
            coworkers: 9
            },
            {name:"Shireen",
            position: "electrician",
            coworkers: 3
            },
            {name: "Robin",
            position: "carpenter",
            coworkers: 4
            }
        ],
    },{
        name: "Daphne",
        position: "lead",
        coworkers: 3,
        directReports: [{
            name:"Barkley",
            position:"butler",
            coworkers:"none",
        }
        ] 
    },{
        name: "Archer",
        position: "spy",
        coworkers: "none",
        directReports: [{
            name: "Cyrill",
            position: "accountant",
            coworkers: 6,
        },{
            name: "Lana",
            position: "spy",
            coworkers: "none"
        }]
       
    }
] 
}
function timandstevecoworkers(){
    timandstevecoworkers = (orgChart.name.coworkers) + (orgChart.directReports[0].coworkers);
}
