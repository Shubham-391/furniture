import React from 'react';
import logo from "../assets/images/logo.webp";

function Footer() {
  return (
    <>
      <div className="w-full min-h-[434px] bg-[#243040] relative z-[1]">
        <div className="max-w-[1331px] w-full px-3 mx-auto pt-12 md:pt-[87px] flex pb-6 min-[1200px]:pb-[81px] flex-wrap gap-y-6">
          <div className="w-full min-[900px]:w-[50%] min-[1200px]:w-[61%]">
            <div className="max-w-[338px] w-full">
              <img
                className="w-[244px] h-[61px] mb-[23px]"
                src={logo}
                alt="logo"
              />
              <p className="text-white font-roboto text-sm not-italic font-normal leading-normal mb-[23px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse feugiat nunc in leo vestibulum, at congue erat
                accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                sapien.
              </p>
              <div className="w-[93px] flex justify-between items-center">
                <a
                  className="hover:translate-y-[-3px] duration-300"
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <path
                      d="M11.4513 6.07621C10.3882 6.07621 9.349 6.39145 8.46507 6.98208C7.58113 7.5727 6.89219 8.41218 6.48536 9.39435C6.07853 10.3765 5.97209 11.4573 6.17949 12.4999C6.38689 13.5426 6.89882 14.5004 7.65054 15.2521C8.40226 16.0038 9.36001 16.5157 10.4027 16.7231C11.4454 16.9305 12.5261 16.8241 13.5083 16.4173C14.4905 16.0104 15.3299 15.3215 15.9206 14.4376C16.5112 13.5536 16.8264 12.5144 16.8264 11.4513C16.8248 10.0262 16.258 8.66 15.2503 7.65232C14.2426 6.64464 12.8764 6.07782 11.4513 6.07621ZM11.4513 15.4242C10.6655 15.4242 9.89743 15.1912 9.24409 14.7547C8.59075 14.3181 8.08153 13.6976 7.78083 12.9717C7.48013 12.2457 7.40145 11.4469 7.55475 10.6762C7.70804 9.90557 8.08643 9.19767 8.64205 8.64205C9.19767 8.08643 9.90557 7.70804 10.6762 7.55475C11.4469 7.40145 12.2457 7.48013 12.9717 7.78083C13.6976 8.08153 14.3181 8.59075 14.7547 9.24409C15.1912 9.89743 15.4242 10.6655 15.4242 11.4513C15.423 12.5046 15.0041 13.5144 14.2593 14.2593C13.5144 15.0041 12.5046 15.423 11.4513 15.4242ZM16.5927 0H6.30991C4.63701 0.00191744 3.03317 0.667325 1.85025 1.85025C0.667325 3.03317 0.00191744 4.63701 0 6.30991V16.5927C0.00191744 18.2656 0.667325 19.8695 1.85025 21.0524C3.03317 22.2353 4.63701 22.9007 6.30991 22.9026H16.5927C18.2656 22.9007 19.8695 22.2353 21.0524 21.0524C22.2353 19.8695 22.9007 18.2656 22.9026 16.5927V6.30991C22.9007 4.63701 22.2353 3.03317 21.0524 1.85025C19.8695 0.667325 18.2656 0.00191744 16.5927 0ZM21.5004 16.5927C21.499 17.8939 20.9814 19.1413 20.0614 20.0614C19.1413 20.9814 17.8939 21.499 16.5927 21.5004H6.30991C5.00875 21.499 3.7613 20.9814 2.84124 20.0614C1.92118 19.1413 1.40366 17.8939 1.4022 16.5927V6.30991C1.40366 5.00875 1.92118 3.7613 2.84124 2.84124C3.7613 1.92118 5.00875 1.40366 6.30991 1.4022H16.5927C17.8939 1.40366 19.1413 1.92118 20.0614 2.84124C20.9814 3.7613 21.499 5.00875 21.5004 6.30991V16.5927ZM18.696 5.37511C18.696 5.60622 18.6275 5.83213 18.4991 6.02429C18.3707 6.21645 18.1882 6.36622 17.9747 6.45466C17.7612 6.5431 17.5262 6.56624 17.2996 6.52116C17.0729 6.47607 16.8647 6.36478 16.7013 6.20136C16.5378 6.03794 16.4266 5.82974 16.3815 5.60307C16.3364 5.3764 16.3595 5.14146 16.448 4.92794C16.5364 4.71443 16.6862 4.53193 16.8783 4.40353C17.0705 4.27514 17.2964 4.20661 17.5275 4.20661C17.8373 4.20698 18.1343 4.33021 18.3534 4.54926C18.5724 4.76832 18.6957 5.06532 18.696 5.37511Z"
                      fill="white"
                    />
                  </svg>
                </a>

                <a
                  className="hover:translate-y-[-3px] duration-300"
                  href="https://twitter.com/?lang=en"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12.153 0C5.83881 0 0.700928 5.13645 0.700928 11.4513C0.700928 17.7662 5.83881 22.9026 12.153 22.9026C18.4671 22.9026 23.605 17.7662 23.605 11.4513C23.605 5.13645 18.4671 0 12.153 0ZM12.153 22.1399C6.25946 22.1399 1.46511 17.3448 1.46511 11.4513C1.46511 5.55782 6.25946 0.762754 12.153 0.762754C18.0464 0.762754 22.8408 5.55782 22.8408 11.4513C22.8408 17.3448 18.0464 22.1399 12.153 22.1399Z"
                      fill="white"
                    />
                    <path
                      d="M18.4335 7.91309C18.5128 7.76645 18.578 7.6127 18.6285 7.45386C18.6519 7.38019 18.6524 7.30115 18.6299 7.2272C18.6074 7.15325 18.563 7.08786 18.5026 7.03966C18.4421 6.99146 18.3685 6.96271 18.2914 6.95723C18.2143 6.95174 18.1374 6.96977 18.0707 7.00892C17.7048 7.22633 17.3086 7.3883 16.8952 7.48957C16.3933 7.03662 15.7415 6.78551 15.0654 6.78467C14.6981 6.78495 14.3347 6.8594 13.9968 7.00354C13.659 7.14768 13.3538 7.35856 13.0994 7.62352C12.845 7.88849 12.6468 8.20209 12.5166 8.54552C12.3863 8.88895 12.3268 9.25514 12.3415 9.62214C10.7353 9.41994 9.26858 8.60717 8.24563 7.35245C8.20643 7.30491 8.15634 7.26754 8.09961 7.24351C8.04289 7.21947 7.9812 7.20948 7.91978 7.21439C7.85837 7.2193 7.79905 7.23896 7.74685 7.27169C7.69466 7.30443 7.65114 7.34929 7.62 7.40244C7.38576 7.80448 7.25844 8.25983 7.25019 8.72505C7.24194 9.19027 7.35303 9.64985 7.57286 10.0599C7.51894 10.069 7.46715 10.0879 7.42002 10.1156C7.36228 10.1525 7.31474 10.2032 7.28178 10.2633C7.24883 10.3233 7.23153 10.3907 7.23148 10.4592C7.23148 11.2698 7.59214 12.014 8.17349 12.5196L8.1485 12.5446C8.10461 12.5943 8.07441 12.6545 8.06089 12.7194C8.04736 12.7842 8.05097 12.8515 8.07136 12.9146C8.19259 13.2927 8.395 13.6399 8.66443 13.9316C8.93386 14.2234 9.2638 14.4527 9.63115 14.6036C8.87668 14.9717 8.03234 15.1152 7.19862 15.0171C7.11293 15.0084 7.02675 15.0283 6.9536 15.0738C6.88045 15.1193 6.82445 15.1878 6.79439 15.2685C6.76552 15.3499 6.76498 15.4385 6.79286 15.5202C6.82073 15.6019 6.87538 15.6718 6.94794 15.7185C8.08137 16.4459 9.39994 16.8324 10.7467 16.8319C15.1604 16.8319 17.7986 13.2467 17.7986 9.78069L17.7979 9.66357C18.2257 9.32962 18.5972 8.92938 18.8985 8.47801C18.9441 8.40978 18.9665 8.32866 18.9625 8.24668C18.9584 8.1647 18.928 8.08622 18.8759 8.02284C18.8237 7.95946 18.7525 7.91457 18.6729 7.8948C18.5932 7.87503 18.5093 7.88144 18.4335 7.91309ZM17.1873 9.16649C17.1355 9.20376 17.0938 9.25341 17.0661 9.31093C17.0384 9.36844 17.0256 9.43198 17.0287 9.49573C17.033 9.59 17.0352 9.68571 17.0352 9.77998C17.0352 12.871 14.6833 16.0684 10.7474 16.0684C10.0455 16.0687 9.34844 15.9509 8.68557 15.7199C9.47946 15.5677 10.2252 15.2273 10.8603 14.7272C10.9221 14.6784 10.9673 14.6118 10.9898 14.5364C11.0124 14.4609 11.011 14.3804 10.986 14.3057C10.961 14.2311 10.9135 14.166 10.8501 14.1193C10.7867 14.0727 10.7104 14.0468 10.6317 14.0451C10.3238 14.0392 10.0215 13.9611 9.74937 13.8169C9.47719 13.6728 9.24269 13.4667 9.0648 13.2152C9.24549 13.2031 9.42261 13.1731 9.59473 13.1267C9.67803 13.1044 9.75132 13.0545 9.80263 12.9852C9.85395 12.9159 9.88026 12.8312 9.87728 12.7451C9.87429 12.6589 9.84219 12.5763 9.78621 12.5107C9.73022 12.4451 9.65366 12.4004 9.56902 12.3839C9.22123 12.3132 8.89921 12.1492 8.63742 11.9095C8.37563 11.6699 8.18392 11.3636 8.08279 11.0234C8.27277 11.0712 8.46774 11.0991 8.66271 11.1055C8.83055 11.1048 8.98624 11.002 9.03838 10.8406C9.09051 10.6791 9.02909 10.5013 8.88697 10.407C8.55092 10.1831 8.29218 9.86098 8.14608 9.48453C7.99997 9.10809 7.97363 8.69572 8.07065 8.30375C9.31122 9.57666 10.9864 10.3347 12.7614 10.4263C12.8871 10.427 12.9971 10.382 13.0735 10.2899C13.15 10.1978 13.1792 10.0757 13.1521 9.95853C13.0544 9.53787 13.0981 9.09674 13.2764 8.70342C13.4547 8.31009 13.7577 7.9865 14.1384 7.78271C14.5192 7.57892 14.9565 7.5063 15.3826 7.57609C15.8088 7.64588 16.2001 7.85418 16.4959 8.16877C16.5403 8.21608 16.5959 8.25132 16.6577 8.27119C16.7194 8.29105 16.7851 8.29489 16.8488 8.28232C16.9666 8.25876 17.083 8.23162 17.198 8.20019C17.1462 8.239 17.0923 8.275 17.0366 8.30803C16.9625 8.3534 16.9061 8.42264 16.8767 8.50435C16.8473 8.58606 16.8465 8.67536 16.8746 8.75754C16.9028 8.83971 16.958 8.90986 17.0313 8.95641C17.1047 9.00297 17.1917 9.02316 17.278 9.01365L17.408 8.99723C17.3364 9.05619 17.2628 9.11264 17.1873 9.16649Z"
                      fill="white"
                    />
                  </svg>
                </a>

                <a
                  className="hover:translate-y-[-3px] duration-300"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <path
                      d="M11.548 0C5.23383 0 0.0959473 5.13645 0.0959473 11.4513C0.0959473 17.7662 5.23383 22.9026 11.548 22.9026C17.8621 22.9026 23 17.7662 23 11.4513C23 5.13645 17.8621 0 11.548 0ZM11.548 22.1399C5.65448 22.1399 0.86013 17.3448 0.86013 11.4513C0.86013 5.55782 5.65448 0.762754 11.548 0.762754C17.4415 0.762754 22.2358 5.55782 22.2358 11.4513C22.2358 17.3448 17.4415 22.1399 11.548 22.1399Z"
                      fill="white"
                    />
                    <path
                      d="M14.0477 5.02357H12.1422C9.71538 4.99929 9.40542 6.50123 9.40542 8.12672V9.30871H8.33414C8.28572 9.30224 8.23646 9.30702 8.19018 9.32268C8.14391 9.33834 8.10187 9.36445 8.06733 9.399C8.03279 9.43354 8.00667 9.47558 7.99101 9.52185C7.97535 9.56812 7.97057 9.61738 7.97704 9.6658V11.8084C7.97057 11.8568 7.97535 11.906 7.99101 11.9523C8.00667 11.9986 8.03279 12.0406 8.06733 12.0752C8.10187 12.1097 8.14391 12.1358 8.19018 12.1515C8.23646 12.1672 8.28572 12.1719 8.33414 12.1655H9.40542V17.5219C9.39947 17.5704 9.40468 17.6196 9.42067 17.6658C9.43665 17.712 9.46298 17.7539 9.49764 17.7884C9.5323 17.8228 9.57437 17.8489 9.62065 17.8646C9.66693 17.8803 9.71619 17.8852 9.76466 17.879H11.9465C12.1572 17.9033 12.3279 17.7326 12.2607 17.5219L12.2622 12.1655H14.0477C14.0961 12.1719 14.1453 12.1672 14.1916 12.1515C14.2379 12.1358 14.2799 12.1097 14.3145 12.0752C14.349 12.0406 14.3751 11.9986 14.3908 11.9523C14.4064 11.906 14.4112 11.8568 14.4047 11.8084V9.6658C14.4112 9.61738 14.4064 9.56812 14.3908 9.52185C14.3751 9.47558 14.349 9.43354 14.3145 9.399C14.2799 9.36445 14.2379 9.33834 14.1916 9.32268C14.1453 9.30702 14.0961 9.30224 14.0477 9.30871H12.26L12.2622 8.23742C12.3315 7.78106 12.3315 7.85533 12.755 7.88033H14.0327C14.1319 7.85819 14.2376 7.87033 14.3119 7.7982C14.3862 7.72606 14.429 7.62751 14.404 7.52323V5.38067C14.4106 5.33228 14.406 5.28303 14.3904 5.23675C14.3748 5.19047 14.3488 5.14841 14.3143 5.11385C14.2798 5.07929 14.2378 5.05316 14.1915 5.0375C14.1453 5.02184 14.096 5.01707 14.0477 5.02357ZM13.6656 7.12614L12.77 7.09186C11.6608 7.09186 11.568 7.69393 11.568 8.31027L11.5651 9.66437C11.565 9.71452 11.5748 9.76419 11.594 9.81054C11.6131 9.85689 11.6412 9.89902 11.6766 9.93451C11.712 9.97 11.7541 9.99816 11.8004 10.0174C11.8467 10.0366 11.8964 10.0465 11.9465 10.0465H13.6906V11.4263H11.9479C11.8467 11.4263 11.7496 11.4664 11.678 11.5379C11.6064 11.6094 11.566 11.7064 11.5658 11.8077L11.5651 17.1648H10.1196V11.8084C10.1196 11.5977 9.97606 11.427 9.76466 11.427H8.69123V10.0472H9.76466C9.81477 10.0473 9.8644 10.0375 9.91073 10.0183C9.95705 9.99922 9.99915 9.97116 10.0346 9.93577C10.106 9.86363 10.1189 9.7665 10.1189 9.66509V8.12601C10.1189 6.5248 10.4424 5.76204 12.1415 5.76204H13.6648V7.12614H13.6656Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full min-[900px]:w-[50%] min-[1200px]:w-[39%] flex justify-between flex-wrap gap-4 min-[500px]:gap-0">
            <ul>
              <li className="text-white font-roboto text-sm not-italic font-medium leading-normal mb-[4px]">
                ABOUT STORE
              </li>
              <li className="w-[130px] h-[1px] bg-[#BD7D41] mb-[19px]"></li>
              <li className="mb-[8px]">
                <a
                  className="text-white font-roboto text-sm not-italic font-normal leading-normal relative after:absolute after:w-0 after:h-[1px] after:bg-white after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="mb-[8px]">
                <a
                  className="text-white font-roboto text-sm not-italic font-normal leading-normal relative after:absolute after:w-0 after:h-[1px] after:bg-white after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  href="#"
                >
                  Shop
                </a>
              </li>
              <li className="mb-[8px]">
                <a
                  className="text-white font-roboto text-sm not-italic font-normal leading-normal relative after:absolute after:w-0 after:h-[1px] after:bg-white after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  href="#"
                >
                  Product
                </a>
              </li>
              <li className="mb-[8px]">
                <a
                  className="text-white font-roboto text-sm not-italic font-normal leading-normal relative after:absolute after:w-0 after:h-[1px] after:bg-white after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  href="#"
                >
                  Festival Offer
                </a>
              </li>
              <li>
                <a
                  className="text-white font-roboto text-sm not-italic font-normal leading-normal relative after:absolute after:w-0 after:h-[1px] after:bg-white after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  href="#"
                >
                  Log In
                </a>
              </li>
            </ul>
            <ul>
              <li className="text-white font-roboto text-sm not-italic font-medium leading-normal mb-[4px]">
                BRANDS
              </li>
              <li className="w-[130px] h-[1px] bg-[#BD7D41] mb-[19px]"></li>
              <li className="mb-[8px]">
                <a
                  className="text-white font-roboto text-sm not-italic font-normal leading-normal relative after:absolute after:w-0 after:h-[1px] after:bg-white after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  href="#"
                >
                  Album
                </a>
              </li>
              <li className="mb-[8px]">
                <a
                  className="text-white font-roboto text-sm not-italic font-normal leading-normal relative after:absolute after:w-0 after:h-[1px] after:bg-white after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  href="#"
                >
                  Shop
                </a>
              </li>
              <li className="mb-[8px]">
                <a
                  className="text-white font-roboto text-sm not-italic font-normal leading-normal relative after:absolute after:w-0 after:h-[1px] after:bg-white after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  href="#"
                >
                  Product
                </a>
              </li>
              <li className="mb-[8px]">
                <a
                  className="text-white font-roboto text-sm not-italic font-normal leading-normal relative after:absolute after:w-0 after:h-[1px] after:bg-white after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  href="#"
                >
                  Festival Offer
                </a>
              </li>
              <li>
                <a
                  className="text-white font-roboto text-sm not-italic font-normal leading-normal relative after:absolute after:w-0 after:h-[1px] after:bg-white after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  href="#"
                >
                  Log In
                </a>
              </li>
            </ul>
            <ul>
              <li className="text-white font-roboto text-sm not-italic font-medium leading-normal mb-[4px]">
                CATEGORIES
              </li>
              <li className="w-[130px] h-[1px] bg-[#BD7D41] mb-[19px]"></li>
              <li className="mb-[8px]">
                <a
                  className="text-white font-roboto text-sm not-italic font-normal leading-normal relative after:absolute after:w-0 after:h-[1px] after:bg-white after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  href="#"
                >
                  Single
                </a>
              </li>
              <li className="mb-[8px]">
                <a
                  className="text-white font-roboto text-sm not-italic font-normal leading-normal relative after:absolute after:w-0 after:h-[1px] after:bg-white after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  href="#"
                >
                  Aleeper Sofas
                </a>
              </li>
              <li className="mb-[8px]">
                <a
                  className="text-white font-roboto text-sm not-italic font-normal leading-normal relative after:absolute after:w-0 after:h-[1px] after:bg-white after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  href="#"
                >
                  Accent Chairs
                </a>
              </li>
              <li className="mb-[8px]">
                <a
                  className="text-white font-roboto text-sm not-italic font-normal leading-normal relative after:absolute after:w-0 after:h-[1px] after:bg-white after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  href="#"
                >
                  Festival Offer
                </a>
              </li>
              <li>
                <a
                  className="text-white font-roboto text-sm not-italic font-normal leading-normal relative after:absolute after:w-0 after:h-[1px] after:bg-white after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  href="#"
                >
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[rgba(255,255,255,0.50)]"></div>
        <p className='pt-4 md:pt-[29px] pb-4 md:pb-[27px] text-white font-roboto text-sm not-italic font-normal leading-normal text-center'>@copyright2021</p>
      </div>
    </>
  );
}

export default Footer