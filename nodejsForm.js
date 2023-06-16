async function ShowData() {
    console.log("HI")
    try{
        let respone = await fetch('https://dummyjson.com/quotes');
        if(!respone.ok){
            throw new Error("Failed to get data");
        }
        const Data = await respone.json();
        const Table = document.getElementById("ShowQuote");
        const searchTerm = document.getElementById('Quote').value;
        let arr = Object.values(Data)
        console.log(arr)
        let i = 1;
        arr = arr[0];
        arr = arr.filter(item => item.quote.toLowerCase().includes(searchTerm));
        const ans = arr.map(value =>{
    
        const item = 
        `<tr>
            <td>${i}</td>
            <td>${value.author}</td>
            <td>${value.quote}</td>
        </tr>`
        i++;
        return item;
        })
        Table.innerHTML = ans.join(" ")

    } catch(err){
        console.log(err)
    }

}