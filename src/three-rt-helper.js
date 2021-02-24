
function RenderTargetHelper( renderer, renderTarget ) {

	const container = document.createElement('DIV');

	container.style.display = 'flex';
	container.justifyContent = 'center';
	container.alignItems = 'center';
	container.style.position = 'fixed';
	container.style.bottom = '0px';
	container.style.right = '0px';
	container.style.resize = "both";
	container.style.overflow = "hidden";
	container.style.backgroundColor = 'white';
	container.style.padding = '7px';
	container.style.border = '2px solid white';
	container.style.boxShadow = '0 5px 10px 0 rgba(0,0,0,0.2), 0 5px 20px 0 rgba(0,0,0,0.2);';
	container.style.transform = 'scale( -1, -1 )';

	const domCanvas = document.createElement('CANVAS');

	domCanvas.style.width = '200px';
	domCanvas.style.height = '200px';
	domCanvas.style.transform = 'scale( -1, 1 )';

	container.append( domCanvas );

	//

	let width = renderTarget.width;
	let height =renderTarget.height;

	domCanvas.width = width;
	domCanvas.height = height;

	const context = domCanvas.getContext('2d');

	const pixels = new Uint8ClampedArray( 4 * width * height );

	//

	container.update = function update() {

		renderer.readRenderTargetPixels(
			renderTarget,
			0,
			0,
			width,
			height,
			pixels
		);

		const imageData = new ImageData( pixels, width, height );

		context.putImageData( imageData, 0, 0 );

	}

	function handleResize() {

		width = renderTarget.width;
		height = renderTarget.height;

		domCanvas.width = width;
		domCanvas.height = height;

		const newCanvasWidth = container.clientWidth - 14;
		const newCanvasHeight = container.clientHeight - 14;

		domCanvas.style.width = newCanvasWidth + 'px';
		domCanvas.style.height = newCanvasHeight + 'px';

	}

	container.addEventListener( 'pointerdown', () => {

		window.addEventListener( 'pointermove', handleResize );

	} );

	window.addEventListener( 'pointerup', () => {

		window.removeEventListener( 'pointermove', handleResize );

	} );

	window.addEventListener( 'resize', handleResize );

	//

	return container

}

if ( window ) window.RenderTargetHelper = RenderTargetHelper;

export default RenderTargetHelper
