import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {

	render() {
		
		const classes = (this.props.classes || "" ) + (this.props.animate ? " logo animate" : " logo ");
		const viewLeft = this.props.viewLeft || "0"
		
		var color = "#233237";
		if(this.props.color) {
			color = this.props.color;
		}

		return (
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" className={classes} fill={color} viewBox={viewLeft + " 0 1024 1024"}>
				<g>
					<g>
						<path d="M411,557.4c-1.7,0-3.1-0.6-4.3-1.8c-1.2-1.2-1.8-2.7-1.8-4.4v-43.6c0-0.7-0.3-1.1-1-1.2h-0.4
							c-0.5,0-0.9,0.2-1.1,0.7l-8.5,19.1c-0.5,1.1-1.2,2-2.2,2.6c-1,0.7-2.1,1-3.4,1c-1.2,0-2.3-0.3-3.3-1c-1-0.7-1.8-1.5-2.3-2.6
							l-8.4-19.1c-0.2-0.7-0.7-0.9-1.5-0.7c-0.7,0.2-1,0.6-1,1.2v43.6c0,1.7-0.6,3.2-1.9,4.4c-1.2,1.2-2.7,1.8-4.4,1.8
							c-1.7,0-3.1-0.6-4.3-1.8c-1.2-1.2-1.8-2.7-1.8-4.4v-78.9c0-1.5,0.5-2.8,1.4-3.9c0.9-1.1,2.1-1.8,3.5-2.1c0.2-0.1,0.7-0.1,1.2-0.1
							c2.7,0,4.5,1.2,5.6,3.6l16,35.9c0.1,0.5,0.5,0.7,1.1,0.7c0.6,0,1-0.2,1.2-0.7l15.8-35.9c0.5-1.2,1.3-2.1,2.3-2.7
							c1-0.6,2.1-0.9,3.3-0.9c0.6,0,1,0,1.2,0.1c1.4,0.3,2.6,1,3.6,2.1c1,1.1,1.4,2.4,1.4,3.9v78.9c0,1.7-0.6,3.2-1.9,4.4
							C414.2,556.8,412.7,557.4,411,557.4z"/>
						<path d="M476.4,480.7c1.3,3.2,2,6.3,2,9.4v61.2c0,1.7-0.6,3.1-1.8,4.3c-1.2,1.2-2.7,1.8-4.4,1.8
							c-1.7,0-3.1-0.6-4.3-1.8c-1.2-1.2-1.8-2.6-1.8-4.3v-25.2c0-0.7-0.2-1.2-0.6-1.6c-0.4-0.4-1-0.6-1.6-0.6h-19
							c-0.7,0-1.2,0.2-1.6,0.6c-0.4,0.4-0.6,1-0.6,1.6v25.2c0,1.7-0.6,3.1-1.8,4.3c-1.2,1.2-2.7,1.8-4.4,1.8c-1.7,0-3.1-0.6-4.3-1.8
							c-1.2-1.2-1.8-2.6-1.8-4.3V490c0-2.4,0.4-4.8,1.1-7c0.7-2.3,1.7-4.4,3.1-6.3c2.7-4.1,6.2-7,10.6-8.7c3-1.2,6.1-1.9,9.4-1.9
							c5,0,9.5,1.4,13.5,4.1C471.8,472.9,474.6,476.4,476.4,480.7z M463.8,511.5c0.7,0,1.2-0.2,1.6-0.6c0.4-0.4,0.6-0.9,0.6-1.6V490
							c0-2.5-0.7-4.7-2-6.5c-1.2-1.9-3-3.3-5.1-4.2c-1.6-0.7-3.1-1-4.6-1c-2.2,0-4.4,0.7-6.6,2c-1.9,1.2-3.3,3-4.2,5.2
							c-0.3,0.7-0.6,1.4-0.7,2.2c-0.1,0.8-0.2,1.6-0.2,2.3v19.3c0,0.7,0.2,1.2,0.6,1.6c0.4,0.4,1,0.6,1.6,0.6H463.8z"/>
						<path d="M503.1,484.3c-0.6,1.1-0.9,2.3-0.9,3.7v47.4c0,1.9,0.6,3.7,1.7,5.4c1.1,1.6,2.5,2.7,4.2,3.5
							c1.1,0.5,2.3,0.7,3.7,0.7c2,0,3.8-0.5,5.4-1.6c1.5-0.9,2.7-2.3,3.5-4.2c0.5-1.2,0.7-2.5,0.7-3.7c0-1.7,0.6-3.1,1.8-4.3
							c1.2-1.2,2.7-1.8,4.4-1.8c1.7,0,3.1,0.6,4.3,1.8c1.2,1.2,1.8,2.6,1.8,4.3c0,2.2-0.3,4.3-1,6.4c-0.7,2.1-1.6,4-2.7,5.9
							c-2.4,3.7-5.7,6.3-9.7,8c-2.7,1.2-5.6,1.7-8.5,1.7c-4.3,0-8.4-1.2-12.3-3.7c-3.6-2.4-6.2-5.7-7.9-9.7c-1.2-2.7-1.7-5.6-1.7-8.5
							v-47.4c0-4.6,1.2-8.7,3.7-12.3c2.4-3.6,5.6-6.2,9.6-7.9c2.6-1.2,5.4-1.7,8.6-1.7c4.5,0,8.6,1.2,12.2,3.7c3.7,2.4,6.3,5.6,8,9.6
							c1.2,2.8,1.7,5.7,1.7,8.6c0,1.7-0.6,3.1-1.8,4.3c-1.2,1.2-2.6,1.8-4.3,1.8c-1.7,0-3.2-0.6-4.4-1.8c-1.2-1.2-1.8-2.6-1.8-4.3
							c0-2.1-0.5-3.9-1.6-5.5c-1.1-1.6-2.5-2.7-4.2-3.5c-1.2-0.5-2.4-0.7-3.7-0.7c-1.8,0-3.6,0.5-5.4,1.6
							C504.8,481.1,503.6,482.6,503.1,484.3z"/>
						<path d="M549.7,466c1.7,0,3.1,0.6,4.3,1.8c1.2,1.2,1.8,2.6,1.8,4.3v31c0,0.7,0.2,1.2,0.6,1.6c0.4,0.4,0.9,0.6,1.5,0.6
							h17.8c0.6,0,1.1-0.2,1.5-0.6c0.4-0.4,0.6-1,0.6-1.6v-31c0-1.7,0.6-3.1,1.8-4.3c1.2-1.2,2.6-1.8,4.3-1.8c1.7,0,3.2,0.6,4.4,1.8
							c1.2,1.2,1.8,2.6,1.8,4.3V551c0,1.7-0.6,3.2-1.8,4.4c-1.2,1.2-2.7,1.8-4.4,1.8c-1.7,0-3.1-0.6-4.3-1.8c-1.2-1.2-1.8-2.7-1.8-4.4
							v-31.2c0-0.7-0.2-1.2-0.6-1.6c-0.4-0.4-0.9-0.6-1.5-0.6h-17.8c-0.6,0-1.1,0.2-1.5,0.6c-0.4,0.4-0.6,1-0.6,1.6V551
							c0,1.7-0.6,3.2-1.8,4.4c-1.2,1.2-2.6,1.8-4.3,1.8c-1.7,0-3.2-0.6-4.4-1.8c-1.2-1.2-1.8-2.7-1.8-4.4v-78.9c0-1.7,0.6-3.1,1.8-4.3
							C546.5,466.6,547.9,466,549.7,466z"/>
						<path d="M614.2,555.6c-1.2,1.2-2.6,1.8-4.3,1.8c-1.7,0-3.1-0.6-4.3-1.8c-1.2-1.2-1.8-2.7-1.8-4.4v-78.9
							c0-1.7,0.6-3.1,1.8-4.3c1.2-1.2,2.6-1.8,4.3-1.8c1.7,0,3.1,0.6,4.3,1.8c1.2,1.2,1.8,2.6,1.8,4.3v78.9
							C616,552.9,615.4,554.4,614.2,555.6z"/>
						<path d="M674.4,480.6c1.3,3.2,2,6.3,2,9.4v61.3c0,1.7-0.6,3.1-1.8,4.3c-1.2,1.2-2.6,1.8-4.3,1.8
							c-1.7,0-3.1-0.6-4.4-1.8c-1.2-1.2-1.9-2.6-1.9-4.3v-61.3c0-2.5-0.7-4.7-2-6.5c-1.2-1.9-3-3.3-5.1-4.2c-1.6-0.7-3.1-1-4.6-1
							c-2.2,0-4.4,0.7-6.6,2c-1.9,1.2-3.3,3-4.2,5.2c-0.3,0.7-0.6,1.4-0.7,2.2c-0.1,0.8-0.2,1.6-0.2,2.3v61.3c0,1.7-0.6,3.1-1.8,4.3
							c-1.2,1.2-2.7,1.8-4.4,1.8c-1.7,0-3.1-0.6-4.3-1.8c-1.2-1.2-1.8-2.6-1.8-4.3v-61.3c0-2.4,0.4-4.8,1.1-7c0.7-2.3,1.7-4.4,3.1-6.3
							c2.7-4.1,6.2-7,10.6-8.7c3-1.2,6.1-1.9,9.4-1.9c5,0,9.5,1.4,13.5,4.1C669.7,472.8,672.6,476.3,674.4,480.6z"/>
						<path d="M734.7,480.7c1.3,3.2,2,6.3,2,9.4v61.2c0,1.7-0.6,3.1-1.8,4.3c-1.2,1.2-2.7,1.8-4.4,1.8
							c-1.7,0-3.1-0.6-4.3-1.8c-1.2-1.2-1.8-2.6-1.8-4.3v-25.2c0-0.7-0.2-1.2-0.6-1.6c-0.4-0.4-1-0.6-1.6-0.6h-19
							c-0.7,0-1.2,0.2-1.6,0.6c-0.4,0.4-0.6,1-0.6,1.6v25.2c0,1.7-0.6,3.1-1.8,4.3c-1.2,1.2-2.7,1.8-4.4,1.8c-1.7,0-3.1-0.6-4.3-1.8
							c-1.2-1.2-1.8-2.6-1.8-4.3V490c0-2.4,0.4-4.8,1.1-7c0.7-2.3,1.7-4.4,3.1-6.3c2.7-4.1,6.2-7,10.6-8.7c3-1.2,6.1-1.9,9.4-1.9
							c5,0,9.5,1.4,13.5,4.1C730.1,472.9,733,476.4,734.7,480.7z M722.1,511.5c0.7,0,1.2-0.2,1.6-0.6c0.4-0.4,0.6-0.9,0.6-1.6V490
							c0-2.5-0.7-4.7-2-6.5c-1.2-1.9-3-3.3-5.1-4.2c-1.6-0.7-3.1-1-4.6-1c-2.2,0-4.4,0.7-6.6,2c-1.9,1.2-3.3,3-4.2,5.2
							c-0.3,0.7-0.6,1.4-0.7,2.2c-0.1,0.8-0.2,1.6-0.2,2.3v19.3c0,0.7,0.2,1.2,0.6,1.6c0.4,0.4,1,0.6,1.6,0.6H722.1z"/>
						<path d="M793.6,506.4c-0.4,0.7-0.9,1.3-1.4,1.9c-0.5,0.6-1.1,1.2-1.7,1.8c-0.4,0.4-0.6,0.9-0.6,1.6
							c0,0.6,0.2,1.1,0.6,1.6c2.4,2.4,4.2,5.1,5.5,8.1c1.3,3.2,2,6.5,2,10.1c0,5.3-1.5,10.1-4.4,14.5c-3,4.4-6.8,7.5-11.5,9.4
							c-3.2,1.4-6.6,2.1-10,2.1h-17c-1.8,0-3.3-0.6-4.4-1.9c-1.2-1.2-1.9-2.7-1.9-4.4v-78.9c0-1.7,0.6-3.1,1.9-4.4
							c1.2-1.2,2.6-1.7,4.4-1.7h17c5.2,0,10.1,1.5,14.5,4.4c4.2,3,7.4,6.8,9.4,11.3c1.3,3.2,2,6.5,2,10.1
							C797.9,497.2,796.5,502.1,793.6,506.4z M784.6,497.3c0.7-1.7,1.1-3.5,1.1-5.4c0-2.6-0.8-5.1-2.4-7.6c-1.6-2.3-3.6-3.9-6-4.9
							c-1.7-0.7-3.4-1.1-5.2-1.1h-8.6c-0.7,0-1.2,0.2-1.6,0.6c-0.4,0.4-0.6,1-0.6,1.6v22.8c0,0.7,0.2,1.2,0.6,1.6c0.4,0.4,1,0.6,1.6,0.6
							h8.6c2.7,0,5.2-0.7,7.6-2.2C782,501.7,783.6,499.7,784.6,497.3z M784.6,536.8c0.7-1.7,1.1-3.5,1.1-5.4c0-2.7-0.8-5.2-2.4-7.6
							c-1.5-2.2-3.5-3.9-6-4.9c-1.7-0.7-3.4-1.1-5.2-1.1h-8.6c-0.7,0-1.2,0.2-1.6,0.6c-0.4,0.4-0.6,1-0.6,1.6v22.8
							c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,1,0.6,1.6,0.6h8.6c2.7,0,5.2-0.7,7.6-2.2C782,541.2,783.6,539.2,784.6,536.8z"/>
						<path d="M814.7,466.1c1.7,0,3.1,0.6,4.3,1.8c1.2,1.2,1.8,2.6,1.8,4.3v70.7c0,0.6,0.2,1.1,0.6,1.5
							c0.4,0.4,1,0.6,1.6,0.6h15.5c1.7,0,3.1,0.6,4.3,1.8c1.2,1.2,1.8,2.6,1.8,4.3c0,1.7-0.6,3.2-1.8,4.4c-1.2,1.2-2.6,1.8-4.3,1.8
							h-23.8c-1.7,0-3.1-0.6-4.4-1.8c-1.2-1.2-1.9-2.7-1.9-4.4v-78.9c0-1.7,0.6-3.1,1.9-4.3C811.6,466.7,813.1,466.1,814.7,466.1z"/>
						<path d="M865.4,478.8c-0.4,0.4-0.6,1-0.6,1.6v22.8c0,0.7,0.2,1.2,0.6,1.6c0.4,0.4,1,0.6,1.6,0.6h16.3
							c1.7,0,3.1,0.6,4.3,1.8c1.2,1.2,1.8,2.7,1.8,4.4c0,1.7-0.6,3.1-1.8,4.3c-1.2,1.2-2.6,1.8-4.3,1.8H867c-0.7,0-1.2,0.2-1.6,0.6
							c-0.4,0.4-0.6,1-0.6,1.6v22.8c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,1,0.6,1.6,0.6h22.6c1.7,0,3.1,0.6,4.3,1.8c1.2,1.2,1.8,2.6,1.8,4.3
							c0,1.7-0.6,3.2-1.8,4.4c-1.2,1.2-2.6,1.8-4.3,1.8h-30.9c-1.7,0-3.1-0.6-4.3-1.8c-1.2-1.2-1.8-2.7-1.8-4.4v-78.9
							c0-1.7,0.6-3.1,1.8-4.3c1.2-1.2,2.6-1.8,4.3-1.8h30.9c1.7,0,3.1,0.6,4.3,1.8c1.2,1.2,1.8,2.6,1.8,4.3c0,1.7-0.6,3.1-1.8,4.3
							c-1.2,1.2-2.6,1.8-4.3,1.8H867C866.3,478.2,865.8,478.4,865.4,478.8z"/>
					</g>
					<path d="M290.6,558.4c23.3,0,42.2-18.8,42.2-41.9c0-20.6-14.9-37.7-34.6-41.2c-6.1-15.6-21.4-26.7-39.3-26.7
						c-5.2,0-10.1,0.9-14.7,2.6c-8.5-7-19.4-11.1-31.3-11.1c-22,0-40.7,14.4-47,34.2c-21.2,2.4-37.7,20.2-37.7,41.9
						c0,23.3,19,42.2,42.5,42.2h22.4v9c0,3.5-2.9,6.4-6.4,6.4h-11v9.6h11c8.8,0,16-7.2,16-15.9v-38.9c0-8.3-6.5-15.1-14.6-15.8
						c-1.6-7.2-8-12.7-15.8-12.7c-8.9,0-16.2,7.2-16.2,16c0,8.9,7.2,16,16.2,16c6.7,0,12.5-4.1,14.9-9.9c3.3,0.3,5.9,3,5.9,6.3v20.3
						h-22.4c-18.2,0-32.9-14.6-32.9-32.7c0-16.6,12.5-30.6,29.1-32.4l6.2-0.7l1.9-5.9c5.2-16.4,20.5-27.6,37.8-27.6
						c9.2,0,18,3.1,25.1,8.9l4.3,3.5l5.2-1.9c3.6-1.3,7.5-2,11.3-2c13.5,0,25.5,8.2,30.4,20.6l1.9,5l5.3,1c15.4,2.8,26.7,16.2,26.7,31.8
						c0,17.9-14.6,32.4-32.6,32.4h-17.8V529c0-2.6,1.6-4.9,3.9-5.8c2.8,4.7,8,7.8,13.8,7.8c8.9,0,16.2-7.2,16.2-16c0-8.9-7.2-16-16.2-16
						c-8.5,0-15.5,6.6-16.1,14.9c-6.5,2-11.3,8.1-11.3,15.2v38.4c0,8.8,7.2,15.9,16,15.9h12.6v-9.6h-12.6c-3.5,0-6.4-2.9-6.4-6.4v-9
						H290.6z M172.4,522.6c-3.6,0-6.5-2.9-6.5-6.5c0-3.6,2.9-6.5,6.5-6.5c3.6,0,6.5,2.9,6.5,6.5C179,519.7,176,522.6,172.4,522.6
						L172.4,522.6z M290.6,508.5c3.6,0,6.5,2.9,6.5,6.5c0,3.6-2.9,6.5-6.5,6.5c-3.6,0-6.5-2.9-6.5-6.5
						C284.1,511.4,287,508.5,290.6,508.5"/>
					<path d="M258.1,471.1c-9,0-16.4,7.3-16.4,16.2c0,3.7,1.2,7,3.3,9.7c-3.7,3-6.1,7.5-6.1,12.6V584h9.7v-74.3
						c0-3.4,2.7-6.2,6-6.4c1.1,0.2,2.2,0.4,3.4,0.4c9,0,16.4-7.3,16.4-16.2C274.5,478.3,267.1,471.1,258.1,471.1L258.1,471.1z
						M258.1,493.9c-0.8,0-1.5-0.1-2.2-0.4h0c-2.6-0.9-4.4-3.3-4.4-6.2c0-3.6,3-6.6,6.6-6.6c3.7,0,6.6,2.9,6.6,6.6
						C264.7,490.9,261.8,493.9,258.1,493.9"/>
					<path d="M228.6,482.1c0-9-7.3-16.2-16.3-16.2c-9,0-16.3,7.3-16.3,16.2c0,8,5.9,14.7,13.6,16v0h0.2
						c0.7,0.1,1.4,0.2,2.2,0.2c2.8,0.7,4.9,3.2,4.9,6.2v79.4h9.7v-79.4c0-3.8-1.4-7.3-3.6-10.1C226.4,491.4,228.6,487,228.6,482.1
						L228.6,482.1z M205.6,482.1c0-3.6,3-6.6,6.6-6.6c3.6,0,6.6,2.9,6.6,6.6c0,3.5-2.7,6.3-6.2,6.5c-0.7-0.1-1.3-0.2-2-0.2
						C207.8,487.7,205.6,485.2,205.6,482.1"/>
				</g>
			</svg>
		  );
	}
}

export default Logo;