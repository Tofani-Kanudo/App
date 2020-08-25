import React from 'react';
import first from '../img/orig-1.svg';
import second from '../img/orig-2.svg';
import third from '../img/orig-3.svg';
import fourth from '../img/orig-4.svg';
import fifth from '../img/orig-5.svg';
import sixth from '../img/orig-7.svg';
import seventh from '../img/orig-8.svg';
import eighth from '../img/orig-9.svg';
import ninth from '../img/orig-10.svg';
import ten from '../img/orig-11.svg';
import eleven from '../img/orig-12.svg';
import twelve from '../img/orig-13.svg';
import thirteen from '../img/orig-6.svg';
import fourteen from '../img/orig-14.svg';
import fifteen from '../img/orig-16.svg';
import sixteen from '../img/orig-15.svg';

const Logo = () => {
	var x = [
		first,
		second,
		third,
		fourth,
		fifth,
		sixth,
		seventh,
		eighth,
		ninth,
		ten,
		eleven,
		twelve,
		thirteen,
		fourteen,
		fifteen,
		sixteen
	];
	var y = [ first, second, third, fourth, fifth, sixth, seventh, eighth ];
	var count = 0; //9
	var change = 0;
	var s = y.length;
	var change_s = y.length;
	const fadeOut = () => {
		let interval = setInterval(function() {
			let img = document.getElementById(`${count}`);
			let opacity = Number(window.getComputedStyle(img).getPropertyValue('opacity'));

			document.getElementById(`${count}`).style.opacity = opacity - 1;

			if (opacity <= 0) {
				clearInterval(interval);
				document.getElementById(`${count}`).src = `${x[s]}`;
				fadeIn();
			}
		}, 0);
	};
	const fadeIn = () => {
		var interval = setInterval(function() {
			var img = document.getElementById(`${count}`);

			var opacity = Number(window.getComputedStyle(img).getPropertyValue('opacity'));

			document.getElementById(`${count}`).style.opacity = opacity + 1;

			if (opacity >= 0) {
				clearInterval(interval);

				if (change >= y.length && change_s <= x.length) {
					change = 0;
					change_s += 0.1;
					count = Math.floor(change); //0
					s = Math.floor(change_s); //7

					fadeOut();
				} else if (change_s >= x.length && change <= y.length) {
					change_s = 0;
					change += 0.1;
					count = Math.floor(change);
					s = Math.floor(change_s);

					fadeOut();
				} else if (change_s >= x.length && change > y.length) {
					change_s = 0;
					change = 0;
					s = Math.floor(change_s);
					count = Math.floor(change);
					console.log('thr ' + count, s);
					fadeOut();
				} else {
					count = Math.floor(change);
					s = Math.floor(change_s);
					change += 0.1;
					change_s += 0.1;
					console.log('four ' + count, s);
					fadeOut();
				}
			}
		}, 0);
	};
	const renderImage = () => {
		fadeOut();
		return y.map((img, index) => {
			console.log(index);
			return <img className="texta1__img" src={img} id={index} key={index} />;
		});
	};

	return renderImage();
};

export default Logo;
