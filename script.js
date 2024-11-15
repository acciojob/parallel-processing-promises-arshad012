//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

const promise1 = new Promise((resolve, reject) => {
	if(images[0]) {
		return resolve(images[0]);
	} else return reject(`Failed to load image's URL: ${images[0].url}`);
})

const promise2 = new Promise((resolve, reject) => {
	if(images[1]) {
		return resolve(images[1]);
	} else return reject(`Failed to load image's URL: ${images[1].url}`);
})

const promise3 = new Promise((resolve, reject) => {
	if(images[2]) {
		return resolve(images[2]);
	} else return reject(`Failed to load image's URL: ${images[2].url}`);
})

function downloadImages() {
	Promise.all([promise1, promise2, promise3])
	.then((res) => {
		// console.log(res);
		res.forEach((imageUrl, index) => {
			console.log(imageUrl);
			const image = document.createElement('img');
			// image.style.width = '200px';
			image.src = imageUrl;
			image.alt = index+1;
			output.append(image);
		})
	})
	.catch((error) => {
		console.log(error);
	})
}






