   window.onload = () =>{
        document.querySelector('#btn').addEventListener("click", () =>{
            document.querySelector('#the-excuse').innerHTML = generateExcuse();
        });
        
         console.log('Hello Moni from the console!');
    };

        let generateExcuse = () => {

            let pronoum = ['A', 'The'];
            let subject = ['the cat','my granma','his turtle','my bird'];
            let action = ['eat','pissed','crushed','broked'];
            let possetion = ['Homework', 'car', 'lipstick', 'shoe']
            let where = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

            let pronoumIndex = pronoum[Math.floor(Math.random() * pronoum.length)];
            let subjectIndex = subject[Math.floor(Math.random() * subject.length)];
            let actionIndex = action[Math.floor(Math.random() * action.length)];
            let possetionIndex = possetion[Math.floor(Math.random() * possetion.length)];
            let whereIndex = where[Math.floor(Math.random() * where.length)];
            

            return pronoumIndex + ' ' + subjectIndex + ' ' + actionIndex + ' ' + possetionIndex + ' ' + whereIndex;
        };

         

        