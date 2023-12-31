interface ModalProps {
  // Add your prop types here
  ModalVisible : boolean;
  updateModalVisible : Function;
  indexOfColl:number;
}

const Modal: React.FC<ModalProps> = ({ModalVisible,updateModalVisible,indexOfColl}) => {

  
  const imgPaths:string[] = ["./images/example-sites/web (1)/","./images/example-sites/web (2)/","./images/example-sites/web (3)/","./images/example-sites/web (4)/","./images/example-sites/web (5)/","./images/example-sites/web (6)/"];
  const imgCounts:number[] = [5,5,9,7,6,8];
  let imgs:any[] = [];
  let collOfImgs:any[] = [];
    for (let j = 0; j < imgPaths.length; j++) {
      // Loop to generate image tags
    for (let i = 1; i <= imgCounts[j]; i++) {
      const imgSrc = `${imgPaths[j]}${i}.png`; // Adjust the file extension if needed
      imgs.push(<img key={i} src={imgSrc} alt={`Image ${i}`} data-bs-attribute = {j}/>);
    }
      collOfImgs.push(imgs);
      imgs = [];
    }
  
  

  return (
    <div id="extralarge-modal" tabIndex={-1} className={`${ModalVisible ? "animate__fadeIn" : "hidden"} animate__animated fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full`}>
  <div className="relative w-full max-w-7xl max-h-full">
    {/* Modal content */}
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
      {/* Modal header */}
      <div className="flex items-center justify-between p-2 md:p-2 border-b dark:border-gray-300 fixed w-full bg-white dark:bg-gray-900 border-gray-900">
        <h3 className="font-bg text-sm md:text-xl font-medium text-grey-900 dark:text-white">
          Example Website
        </h3>
        <button type="button" onClick={() => {updateModalVisible(false)}} className="me-5  text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-full text-sm p-3" data-modal-hide="extralarge-modal">
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      {/* Modal body */}
      <div className="bg-white dark:bg-gray-900 pt-10 md:pt-6">
        {collOfImgs[indexOfColl]}
      </div>
      {/* Modal footer */}
      {/* <div className="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
        <button data-modal-hide="extralarge-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
        <button data-modal-hide="extralarge-modal" type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
      </div> */}
    </div>
  </div>
</div>
  )
}

export default Modal