function ImageShow({ image }) {
  return (
    <div>
      <img
        className='w-full'
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}
export default ImageShow;
