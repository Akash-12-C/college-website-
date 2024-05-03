function getInputValue() {
    const studentDetails = {
        1: { name: "Abu Bakar", fees: 10000 },
        2: { name: "No Records Found", fees: 0 },
        3: { name: "Mohammad Zubair", fees: 10000 },
        4: { name: "Swetha", fees: 10000 },
        5: { name: "Vikram", fees: 20000 },
        6: { name: "Trupti", fees: 10000 },
        7: { name: "Nirav", fees: 20000 },
        8: { name: "Mohsin", fees: 0 },
        9: { name: "ZAIDALI", fees: 10000 },
        10: { name: "Ayesha Khan", fees: 7500 },
        11: { name: "Jahangir", fees: 0 },
        12: { name: "Gukesh", fees: 20000 },
        13: { name: "TAUHID", fees: 7500 },
        14: { name: "Mahmud Khan", fees: 10000 },
        15: { name: "ADA KHAN", fees: 2500 },
        16: { name: "Rehman Ali", fees: 10000 },
        17: { name: "Mujahid", fees: 10000 },
        18: { name: "Akash", fees: 20000 },
        19: { name: "Zeeshan Ahmad", fees: 0 },
        20: { name: "Atiullah", fees: 2500 },
        21: { name: "Aiyaz Khan", fees: 1000 },
        22: { name: "Sahil", fees: 20000 },
        23: { name: "Usman Sardar Khan", fees: 10000 },
        24: { name: "Mohammad Taha", fees: 0 },
        25: { name: "Abdullah", fees: 7500 },
        26: { name: "Riya", fees: 10000 },
        27: { name: "Meher Khan", fees: 10000 },
        28: { name: "Robin", fees: 10000 },
        29: { name: "Sagar", fees: 0 },
        30: { name: "Danish", fees: 0 },
        31: { name: "Abu Zafar", fees: 2500 },
        32: { name: "Khusboo", fees: 10000 },
        33: { name: "Sufiyan khan", fees: 7500 },
        34: { name: "Aditya kumar", fees: 22500 },
        35: { name: "Ayman khan", fees: 10000 }
    };

    const inputVal = document.getElementById("uid").value;
    const student = studentDetails[inputVal];

    if (student) {
        document.getElementById("demo").innerHTML = student.name;
        document.getElementById("demo1").innerHTML = student.fees;
    } else {
        document.getElementById("demo").innerHTML = "No Records Found";
        document.getElementById("demo1").innerHTML = "0";
    }
}

