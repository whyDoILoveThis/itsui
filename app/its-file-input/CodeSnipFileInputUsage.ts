export const CodeSnipFileInputUsage = `
 const [image, setImage] = useState<File | null>(null);
 const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      // Use FileReader to read and display the image
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImageUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };


<div className="flex flex-col items-center gap-2">
        <ItsFileInput handleFileChange={handleFileChange} />
        {imageUrl && (
        <Image width={280} height={100} src={imageUrl} alt={imageUrl} />
        )}
</div>
`