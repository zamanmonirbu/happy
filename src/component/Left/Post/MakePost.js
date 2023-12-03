import React, { useRef, useState } from 'react';
import imgIcon from '../../Utilities/image/uploadIcon/photo.png';
import videoIcon from '../../Utilities/image/uploadIcon/video.png';
import emoji from '../../Utilities/image/uploadIcon/smile.png';
// import EmojiPicker from 'emoji-picker-react';
import axios from 'axios';

const MakePost = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [postInput, setPostInput] = useState('');
  const [headingInput, setHeadingInput] = useState('');
  const [img, setImg] = useState('')
  const [video, setVideo] = useState('')
  const imgRef = useRef(null);
  const videoRef = useRef(null);

  const handleImageClick = () => {
    imgRef.current.click();
  }
  const handleChangeImage = (event) => {
    setImg(event.target.files[0])
  }
  const handleVideoClick = () => {
    videoRef.current.click();
  }
  const handleChangeVideo = (event) => {
    setVideo(event.target.files[0])
  }

  const handleShareButtonClick = () => {
    setShowShareOptions(true);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handlePostInputChange = (e) => {
    setPostInput(e.target.value);
  };
  const handleHeadingInputChange = (e) => {
    setHeadingInput(e.target.value);
  };

  const handlePostSubmit = async () => {
    try {
      const data={
        'title': headingInput,
        'category': selectedOption,
        'text': postInput,
        'img': img,
        'video': video
      };

       await axios.post('http://localhost:3001/api/post', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: localStorage.getItem('token'),
        },
      });
  
    } catch (error) {
      console.error('Post failed:', error.message);
    }
  };
  
  return (
    <div className="flex items-center">
      <div className="w-full ">
        <img
          className="rounded-full h-10 w-10 object-cover fixed "
          src="https://lh3.googleusercontent.com/ogw/AKPQZvyfl5qMTe0lNdbDsWItDanKOEfCoQ99j725iWHDaA=s32-c-mo"
          alt="User Profile"
        />
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full border border-purple-600"
          onClick={handleShareButtonClick}
        >
          I want to share something
        </button>
        {showShareOptions && (
          <div className="mt-4 grid grid-cols-2 gap-4">
            <button
              className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full border border-indigo-600 ${selectedOption === 'Sadness' && 'bg-indigo-700'
                }`}
              onClick={() => handleOptionSelect('Happiness')}
            >
              Happiness
            </button>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full border border-green-600 ${selectedOption === 'Happiness' && 'bg-green-700'
                }`}
              onClick={() => handleOptionSelect('Sadness')}
            >
              Sadness
            </button>
            <button
              className={`bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full border border-yellow-600 ${selectedOption === 'Help' && 'bg-yellow-700'
                }`}
              onClick={() => handleOptionSelect('Help')}
            >
              Help
            </button>
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full border border-blue-600 ${selectedOption === 'News' && 'bg-blue-700'
                }`}
              onClick={() => handleOptionSelect('News')}
            >
              News
            </button>
          </div>
        )}
        <div className="w-full ml-4 mt-4   p-4">
          {showShareOptions && selectedOption && selectedOption === "News" && (
            <div className="mt-4">


              {/* Check Button */}
              <div className="mt-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    onChange={(e) => console.log("Checkbox checked:", e.target.checked)}
                    className="mr-2 text-white font-bold text-md"
                  />
                  If I share fake news, I will be banned from this site.
                </label>
              </div>
            </div>
          )}

          {showShareOptions && selectedOption && (
            <div className="mt-4 grid grid-cols-4 gap-4">
              <label className="col-span-1 text-white font-bold text-md" htmlFor="">
                Post Title:
              </label>
              <textarea
                rows="2"
                className="col-span-3 w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Title of ${selectedOption.toLowerCase()} will be less than 60 characters`}
                value={headingInput}
                onChange={handleHeadingInputChange}
              />
              <label className="col-span-1 text-white font-bold text-md"  htmlFor="">
                Descriptions:
              </label>
              <textarea
                rows="8"
                className="Text-black col-span-3 w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Share your ${selectedOption.toLowerCase()}...`}
                value={postInput}
                onChange={handlePostInputChange}
              />
              <label className="col-span-1 text-white font-bold text-md" htmlFor="">
                Attach File:
              </label>
              <div onClick={handleImageClick} className="col-span-1">
                <img src={imgIcon} alt="" className='h-10 w-10 ' />
                <input type='file' ref={imgRef} style={{ display: "none" }} onChange={handleChangeImage} />
              </div>
              <div onClick={handleVideoClick} className="col-span-1">
                <img src={videoIcon} alt="" className='h-8 w-8 ' />
                <input type='file' ref={videoRef} style={{ display: "none" }} onChange={handleChangeVideo} />
              </div>
              <div className="col-span-1">
                <img src={emoji} alt="" className='h-10 w-10 ' />
                <input type='file' ref={videoRef} style={{ display: "none" }} onChange={handleChangeVideo} />
                </div>

              <button
                className="col-span-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2 border border-blue-600"
                onClick={handlePostSubmit}
              >
                Share Post
              </button>
            </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default MakePost;
