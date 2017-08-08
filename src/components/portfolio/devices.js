import React from 'react';
import SVGInline from 'react-svg-inline';
import styled from 'styled-components';

const DevicesDiv = styled.div`
	width: 320px;
	position: relative;
	display: inline-block;
`;

const DevicesImage = styled.img`
	position: absolute;
	top: 21px;
	left: 42px;
	z-index: 2;
	width: 236px;
`;

const Devices = props => {
	return (
		<DevicesDiv>
			<DevicesImage src={props.imagepath} />

			<SVGInline svg={'<svg xmlns="http://www.w3.org/2000/svg" width="320.667" height="200" viewBox="109.833 0 320.667 200"><g fill="#FFF" id="Layer_1"><g id="devices-large"><path d="M113.825 180.47v4.903c0 .13 0 .47.284.69.105.085.224.172.347.257 2.154 1.48 7.552 3.68 13.603 3.68h283.88c6.052 0 11.45-2.2 13.6-3.68.1-.07.192-.136.276-.198.36-.264.36-.664.36-.816v-4.84c0-.27-.222-.487-.493-.487h-28.915c.33-.966.518-2 .518-3.08V19.478c0-5.226-4.25-9.477-9.475-9.477H152.15c-5.223 0-9.475 4.252-9.475 9.477V176.9c0 1.077.185 2.112.52 3.077h-28.873c-.265 0-.497.233-.497.493zm282.243-.492H371.03l-.032-.144-.773-3.428h22.245c1.814 0 3.286-1.473 3.286-3.29V19.365c0-4.32-3.514-7.834-7.833-7.834H152.037c-4.317 0-7.83 3.512-7.83 7.834v153.753c0 1.814 1.47 3.29 3.283 3.29h23.002l-.772 3.427-.03.144H143.89c-.357-.958-.558-1.996-.558-3.077V19.478c0-4.86 3.956-8.818 8.816-8.818h235.66c4.862 0 8.818 3.956 8.818 8.817V176.9c0 1.083-.197 2.12-.56 3.078zm-148.165 0h-77.54l.803-3.554h198.39l.802 3.554H247.903zm-100.412-4.232c-1.446 0-2.627-1.178-2.627-2.63V19.364c0-3.958 3.22-7.177 7.178-7.177h235.886c3.955 0 7.174 3.22 7.174 7.177v153.752c0 1.452-1.18 2.63-2.628 2.63H147.49zm144.585 4.89h133.447v4.67c0 .186-.032.24-.096.286l-.17.126H114.747c-.08-.06-.162-.116-.235-.176-.03-.023-.03-.108-.03-.17v-4.74h133.443m-132.11 5.74h308.365c-2.495 1.363-7.12 2.97-12.242 2.97H128.063c-5.12 0-9.746-1.608-12.24-2.97h-.006z"/><path d="M150.535 20.946V169.34c0 .454.368.818.82.818h237.3c.453 0 .82-.364.82-.817V20.946c0-.454-.368-.82-.82-.82h-237.3c-.45 0-.82.367-.82.82zm.82 0h237.3V169.34h-237.3V20.947z"/><path opacity=".1" d="M151.356 20.946h237.3V169.34h-237.3V20.947z"/></g></g></svg>'} />
		</DevicesDiv>
	);
}

export default Devices;
