import * as React from "react"

function BobaAvaxIcon({ selected = false }) {


  if (!selected) {
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="30" rx="8" fill="#272B30" />
      <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="white" strokeOpacity="0.06" />
      <path d="M15.5055 9.84905C14.0813 9.84358 12.686 10.251 11.4886 11.0221L11.7912 12.8618C12.834 11.9937 14.1486 11.5195 15.5055 11.522C17.0491 11.5232 18.5292 12.1369 19.6206 13.2284C20.7121 14.3199 21.3258 15.7999 21.327 17.3435C21.3264 18.8877 20.713 20.3686 19.6216 21.4609C18.5301 22.5532 17.0497 23.1677 15.5055 23.1694C13.9605 23.1683 12.479 22.5546 11.3857 21.4629C10.2924 20.3713 9.67655 18.8907 9.67307 17.3457C9.6735 16.5713 9.82933 15.8048 10.1313 15.0917L9.71691 12.5833C8.60028 13.9226 7.99229 15.613 8.00007 17.3567C8.00414 19.3442 8.79682 21.2488 10.204 22.6524C11.6113 24.0559 13.518 24.8436 15.5055 24.8424C17.4932 24.8412 19.3991 24.051 20.8044 22.6453C22.2097 21.2396 22.9994 19.3334 23 17.3457C23.0006 16.3613 22.8071 15.3864 22.4307 14.4767C22.0543 13.567 21.5023 12.7405 20.8063 12.0443C20.1103 11.3481 19.2839 10.7958 18.3744 10.4192C17.4648 10.0425 16.49 9.84877 15.5055 9.84905Z" fill="white" fillOpacity="0.65" />
      <path d="M10.4363 15.9534C10.4684 16.149 10.5689 16.3268 10.7199 16.4553C10.8708 16.5838 11.0625 16.6545 11.2607 16.655C11.3066 16.6594 11.3529 16.6594 11.3988 16.655C11.508 16.6375 11.6125 16.5985 11.7065 16.5403C11.8004 16.482 11.8818 16.4057 11.9461 16.3158C12.0103 16.2258 12.0561 16.1241 12.0807 16.0163C12.1053 15.9086 12.1083 15.797 12.0895 15.6881L10.4472 5.70274C10.4305 5.59389 10.3922 5.48946 10.3346 5.39556C10.2771 5.30166 10.2014 5.22018 10.112 5.15588C10.0225 5.09157 9.92121 5.04574 9.81388 5.02104C9.70654 4.99635 9.59536 4.99329 9.48684 5.01205C9.37828 5.02989 9.27429 5.06894 9.18083 5.12697C9.08736 5.185 9.00624 5.26088 8.9421 5.35026C8.87796 5.43965 8.83206 5.5408 8.80701 5.64793C8.78197 5.75506 8.77829 5.86607 8.79616 5.97463L10.4363 15.9534Z" fill="white" fillOpacity="0.65" />
      <g filter="url(#filter0_b_3662_41488)">
        <circle cx="15.4563" cy="17.4982" r="5.92016" fill="black" fillOpacity="0.2" />
      </g>
      <g clipPath="url(#clip0_3662_41488)">
        <path fillRule="evenodd" clipRule="evenodd" d="M19.1826 20.2666C19.1801 20.3165 19.1656 20.3652 19.1405 20.4085C19.1153 20.4519 19.0801 20.4886 19.0379 20.5158C18.9585 20.5678 18.8252 20.5678 18.5602 20.5678H16.7644C16.4994 20.5678 16.3661 20.5678 16.2883 20.5173C16.2463 20.4899 16.2114 20.4531 16.1863 20.4098C16.1613 20.3665 16.1467 20.318 16.1439 20.2681C16.1392 20.1758 16.2048 20.0629 16.3361 19.838L16.3391 19.8327L17.2356 18.3022C17.3674 18.0767 17.4339 17.9646 17.5165 17.9221C17.561 17.8995 17.6102 17.8878 17.6601 17.8878C17.71 17.8878 17.7592 17.8995 17.8037 17.9221C17.8856 17.9635 17.9494 18.0709 18.0759 18.2834L18.0861 18.3005L18.9858 19.831C18.9902 19.8385 18.9944 19.846 18.9988 19.8532C19.1239 20.0673 19.1872 20.1765 19.1826 20.2666Z" fill="white" fillOpacity="0.65" />
        <path fillRule="evenodd" clipRule="evenodd" d="M16.7523 16.4643C16.7206 16.5969 16.6491 16.7231 16.5047 16.9738L14.8792 19.8309L14.875 19.8383C14.7319 20.0874 14.6593 20.2137 14.5588 20.3086C14.4498 20.4121 14.3176 20.4884 14.1731 20.5309C14.0414 20.5671 13.8938 20.5671 13.5988 20.5671H12.3452C12.0818 20.5671 11.9517 20.5671 11.8722 20.5167C11.8302 20.4895 11.7953 20.4529 11.7702 20.4099C11.7451 20.3668 11.7306 20.3184 11.7278 20.2687C11.723 20.1757 11.788 20.0621 11.9182 19.835L15.0133 14.4112C15.145 14.181 15.2116 14.0658 15.2957 14.0232C15.3405 14.0006 15.39 13.9889 15.4402 13.9889C15.4903 13.9889 15.5398 14.0006 15.5846 14.0232C15.6687 14.066 15.7353 14.181 15.867 14.4112L16.5034 15.5155L16.5067 15.5211C16.649 15.7682 16.721 15.8935 16.7526 16.025C16.7875 16.1694 16.7874 16.32 16.7523 16.4643Z" fill="white" fillOpacity="0.65" />
      </g>
      <defs>
        <filter id="filter0_b_3662_41488" x="6.45345" y="8.49532" width="18.0057" height="18.0057" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.54134" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3662_41488" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3662_41488" result="shape" />
        </filter>
        <clipPath id="clip0_3662_41488">
          <rect width="7.45502" height="6.57796" fill="white" transform="translate(11.7275 13.9897)" />
        </clipPath>
      </defs>
    </svg>
  }

  return (<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" fill="#272B30" stroke="#E84142" />
    <path d="M15.5055 9.84905C14.0813 9.84358 12.686 10.251 11.4886 11.0221L11.7912 12.8618C12.834 11.9937 14.1486 11.5195 15.5055 11.522C17.0491 11.5232 18.5292 12.1369 19.6206 13.2284C20.7121 14.3199 21.3258 15.7999 21.327 17.3435C21.3264 18.8877 20.713 20.3686 19.6216 21.4609C18.5301 22.5532 17.0497 23.1677 15.5055 23.1694C13.9605 23.1683 12.479 22.5546 11.3857 21.4629C10.2924 20.3713 9.67655 18.8907 9.67307 17.3457C9.6735 16.5713 9.82933 15.8048 10.1313 15.0917V15.0917L9.71691 12.5833C8.60028 13.9226 7.99229 15.613 8.00007 17.3567C8.00414 19.3442 8.79682 21.2488 10.204 22.6524C11.6113 24.0559 13.518 24.8436 15.5055 24.8424C17.4932 24.8412 19.3991 24.051 20.8044 22.6453C22.2097 21.2396 22.9994 19.3334 23 17.3457C23.0006 16.3613 22.8071 15.3864 22.4307 14.4767C22.0543 13.567 21.5023 12.7405 20.8063 12.0443C20.1103 11.3481 19.2839 10.7958 18.3744 10.4192C17.4648 10.0425 16.49 9.84877 15.5055 9.84905V9.84905Z" fill="#F3BA2F" />
    <path d="M10.4361 15.9534C10.4683 16.149 10.5688 16.3268 10.7198 16.4553C10.8707 16.5838 11.0624 16.6546 11.2606 16.655C11.3065 16.6594 11.3528 16.6594 11.3987 16.655C11.5078 16.6375 11.6124 16.5985 11.7063 16.5403C11.8003 16.482 11.8817 16.4057 11.946 16.3158C12.0102 16.2258 12.056 16.1241 12.0806 16.0163C12.1052 15.9086 12.1082 15.797 12.0894 15.6881L10.4471 5.70274C10.4304 5.59389 10.3921 5.48946 10.3345 5.39556C10.277 5.30166 10.2012 5.22018 10.1118 5.15588C10.0224 5.09157 9.92109 5.04574 9.81375 5.02104C9.70642 4.99635 9.59524 4.99329 9.48672 5.01205C9.37815 5.02989 9.27417 5.06894 9.1807 5.12697C9.08723 5.185 9.00612 5.26088 8.94198 5.35026C8.87784 5.43965 8.83193 5.5408 8.80689 5.64793C8.78185 5.75506 8.77817 5.86607 8.79604 5.97463L10.4361 15.9534Z" fill="#F3BA2F" />
    <g filter="url(#filter0_b_3806_40148)">
      <circle cx="15.4563" cy="17.4982" r="5.92016" fill="black" fillOpacity="0.2" />
    </g>
    <g clipPath="url(#clip0_3806_40148)">
      <path fillRule="evenodd" clipRule="evenodd" d="M19.1825 20.2666C19.1799 20.3165 19.1655 20.3652 19.1403 20.4085C19.1152 20.4519 19.08 20.4886 19.0377 20.5158C18.9583 20.5678 18.825 20.5678 18.5601 20.5678H16.7642C16.4993 20.5678 16.3659 20.5678 16.2882 20.5173C16.2462 20.4899 16.2113 20.4531 16.1862 20.4098C16.1611 20.3665 16.1466 20.318 16.1438 20.2681C16.1391 20.1758 16.2047 20.0629 16.3359 19.838L16.339 19.8327L17.2355 18.3022C17.3672 18.0767 17.4338 17.9646 17.5164 17.9221C17.5608 17.8995 17.61 17.8878 17.66 17.8878C17.7099 17.8878 17.7591 17.8995 17.8035 17.9221C17.8855 17.9635 17.9493 18.0709 18.0757 18.2834L18.086 18.3005L18.9857 19.831C18.9901 19.8385 18.9943 19.846 18.9987 19.8532C19.1237 20.0673 19.187 20.1765 19.1825 20.2666Z" fill="#E84142" />
      <path fillRule="evenodd" clipRule="evenodd" d="M16.7523 16.4643C16.7206 16.5969 16.6491 16.7231 16.5047 16.9738L14.8792 19.8309L14.875 19.8383C14.7319 20.0874 14.6593 20.2137 14.5588 20.3086C14.4498 20.4121 14.3176 20.4884 14.1731 20.5309C14.0414 20.5671 13.8938 20.5671 13.5988 20.5671H12.3452C12.0818 20.5671 11.9517 20.5671 11.8722 20.5167C11.8302 20.4895 11.7953 20.4529 11.7702 20.4099C11.7451 20.3668 11.7306 20.3184 11.7278 20.2687C11.723 20.1757 11.788 20.0621 11.9182 19.835L15.0133 14.4112C15.145 14.181 15.2116 14.0658 15.2957 14.0232C15.3405 14.0006 15.39 13.9889 15.4402 13.9889C15.4903 13.9889 15.5398 14.0006 15.5846 14.0232C15.6687 14.066 15.7353 14.181 15.867 14.4112L16.5034 15.5155L16.5067 15.5211C16.649 15.7682 16.721 15.8935 16.7526 16.025C16.7875 16.1694 16.7874 16.32 16.7523 16.4643V16.4643Z" fill="#E84142" />
    </g>
    <defs>
      <filter id="filter0_b_3806_40148" x="6.45345" y="8.49532" width="18.0057" height="18.0057" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.54134" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3806_40148" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3806_40148" result="shape" />
      </filter>
      <clipPath id="clip0_3806_40148">
        <rect width="7.45502" height="6.57796" fill="white" transform="translate(11.7275 13.9897)" />
      </clipPath>
    </defs>
  </svg>
  )
}

export default BobaAvaxIcon