export default function RightSidebar() {
    const files = [
      { filename: 'Henry_George.jpg', caption: 'Henry George, portrait' },
      { filename: 'Henry_George_Birthplace.JPG', caption: 'Henry George Birthplace' },
      {
        filename: 'Henry_George_Historical_Marker_413_S_10th_St_Philadelphia_PA_(DSC_3388).jpg',
        caption: 'Historical marker in Philadelphia',
      },
    ];
  
    return (
      <div className="h-full overflow-y-auto space-y-4 px-2 py-2">
        {files.map(({ filename, caption }, i) => {
          const src = `https://en.wikipedia.org/wiki/Special:FilePath/${filename}`;
  
          return (
            <div
              key={i}
              className="bg-white/90 dark:bg-white/10 rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={src}
                alt={caption}
                className="block w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                }}
              />
              <p className="text-center text-black dark:text-white text-sm py-2 px-2">
                {caption}
              </p>
            </div>
          );
        })}
  
        {/* MP3 Player Card */}
        <div className="bg-white/90 dark:bg-white/10 rounded-2xl shadow-md p-4">
          <h4 className="font-semibold mb-2 text-center text-black dark:text-white">Favorite Music</h4>
          <audio controls className="w-full">
            <source
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    );
  }
  