import Ember from 'ember';
/* global d3 */

export default Ember.Component.extend({
	// https://color.adobe.com/Salmon-on-Ice-color-theme-2291686
	// palette: ['#3E454C', '#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'],

	// http://flatuicolors.com/
	palette: ['#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50', '#f39c12', '#d35400', '#c0392b', '#bdc3c7', '#7f8c8d'],

	height: 350,
	width: 350,
	radius: 175,

	piedata: Ember.computed('data', function() {
		var data = this.get('data');
		var piedata = [];
		data.forEach(function(ingredient) {
			var amount = ingredient.get('amount');
			var measurement = ingredient.get('measurement');
			if (measurement === 'oz') {

			} else if (measurement === 'dash') {
				amount = amount * 0.020833333;
			} else { return; }
			piedata.push({ label: ingredient.id, value: amount });
		});
		return piedata;
	}),

	didInsertElement: function() {
		var colors = d3.scale.ordinal().range(this.get('palette'));
		var height = this.get('height');
		var width = this.get('width');
		var radius = this.get('radius');
		var piedata = this.get('piedata');
		
		var pie = d3.layout.pie()
			.value(function(d) {
				return d.value;
			});

		var arc = d3.svg.arc().outerRadius(radius);

		var myChart = d3.select('#pie-chart').append('svg')
			.attr('width', width)
			.attr('height', height)
			.append('g')
				.attr('transform', 'translate(' + (width-radius) + ',' + (height-radius) + ')')
				.selectAll('path').data(pie(piedata))
				.enter().append('g')
					.attr('class', 'slice');

		var slices = d3.selectAll('g.slice')
			.append('path')
				.attr('fill', function(d, i) {
					return colors(i);
				})
				.attr('d', arc);

		var text = d3.selectAll('g.slice').append('text')
			.text(function(d, i) {
				return d.data.label;
			})
			.attr('text-anchor', 'middle')
			.attr('fill', 'white')
			.attr('transform', function(d) {
				d.innerRadius = 0;
				d.outerRadius = radius;
				return 'translate(' + arc.centroid(d) + ')'; 
			});
	}
});
