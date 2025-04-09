interface AppImageProps {
    src: string;
    alt?: string;
}

const AppImage = ({ src, alt ="", ...rest }: AppImageProps) => {
  return <img src={src} alt={alt} loading="lazy" {...rest} />;
};

export default AppImage;
