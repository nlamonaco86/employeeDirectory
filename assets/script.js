const getSize = () => {
    document.getElementById("output").innerHTML = "Window size is: " + window.innerHeight + " X " + window.innerWidth + " pixels"
    setInterval(getSize,500);
} 

getSize()

console.warn("This is a warning message!")