import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function SecProcessChart(props: BoxProps) {
  return (
    <Box {...props}>
      <svg
        width="303"
        height="200"
        viewBox="0 0 303 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="303" height="200" rx="12" fill="white" />
        <circle cx="72" cy="183" r="4" fill="#2E9BFF" />
        <circle cx="155" cy="183" r="4" fill="#3AD1A9" />
        <path
          d="M89.6484 178.328V177.801H88.6992V178.328C88.6992 179.734 86.8184 180.941 84.9961 181.223L85.3594 181.949C86.9473 181.68 88.5234 180.812 89.1797 179.576C89.8359 180.789 91.4062 181.668 92.9883 181.938L93.3516 181.211C91.541 180.936 89.6426 179.693 89.6484 178.328ZM84.4102 183.602H88.793V185.734H89.707V183.602H93.9492V182.84H84.4102V183.602ZM85.6289 187.727H92.8828V186.953H86.5547V184.715H85.6289V187.727ZM98.3203 180.73V179.371H100.664V178.609H94.9922V179.371H97.418V180.73C97.4062 182.506 96.1172 184.486 94.6172 185.219L95.1797 185.945C96.3457 185.348 97.3887 184 97.8691 182.471C98.3379 183.883 99.3281 185.113 100.5 185.688L101.027 184.961C99.5156 184.24 98.3086 182.4 98.3203 180.73ZM101.941 187.949H102.855V182.535H104.602V181.75H102.855V177.531H101.941V187.949ZM108.668 179.5V178.176H107.766V179.465C107.76 181.082 106.717 182.494 105.129 183.051L105.633 183.789C106.863 183.314 107.807 182.359 108.246 181.117C108.709 182.219 109.629 183.098 110.812 183.531L111.281 182.793C109.746 182.26 108.662 180.936 108.668 179.5ZM106.805 187.727H113.789V186.953H107.742V184.492H106.805V187.727ZM112.395 185.23H113.309V181.516H114.879V180.73H113.309V177.531H112.395V185.23ZM128.039 183.836H118.547V184.609H122.836V187.973H123.738V184.609H128.039V183.836ZM119.145 182.289L119.484 183.027C121.096 182.781 122.637 181.984 123.299 180.842C123.961 181.973 125.479 182.781 127.09 183.027L127.43 182.289C125.566 182.037 123.75 180.895 123.75 179.594V179.582H127.125V178.832H123.738V177.531H122.836V178.832H119.473V179.582H122.836V179.594C122.83 180.9 121.002 182.037 119.145 182.289ZM137.508 177.531H136.582V187.973H137.508V177.531ZM129.305 181.973C129.311 184.193 130.412 185.6 131.965 185.594C133.512 185.6 134.631 184.193 134.625 181.973C134.631 179.758 133.512 178.346 131.965 178.34C130.412 178.346 129.311 179.758 129.305 181.973ZM130.195 181.973C130.195 180.279 130.922 179.166 131.965 179.16C133.014 179.166 133.734 180.279 133.734 181.973C133.734 183.666 133.014 184.779 131.965 184.773C130.922 184.779 130.195 183.666 130.195 181.973Z"
          fill="#ADAFB8"
        />
        <path
          d="M176.199 182.371H173.352V179.277H176.07V178.527H172.426V183.121H176.199V182.371ZM167.422 186.613H176.961V185.852H172.602V183.648H171.699V185.852H167.422V186.613ZM168.254 183.121H168.828C169.865 183.127 170.826 183.098 171.969 182.84L171.887 182.066C170.92 182.289 170.047 182.354 169.168 182.359V179.289H171.793V178.527H168.254V183.121ZM182.047 178.668H178.121V179.441H181.156V181.551H178.145V185.453H178.824C180.137 185.453 181.314 185.406 182.797 185.148L182.715 184.398C181.367 184.627 180.236 184.674 179.035 184.68V182.312H182.047V178.668ZM183.441 187.41H184.285V182.418H185.82V187.949H186.699V177.531H185.82V181.656H184.285V177.766H183.441V187.41ZM194.703 180.73V179.371H197.047V178.609H191.375V179.371H193.801V180.73C193.789 182.506 192.5 184.486 191 185.219L191.562 185.945C192.729 185.348 193.771 184 194.252 182.471C194.721 183.883 195.711 185.113 196.883 185.688L197.41 184.961C195.898 184.24 194.691 182.4 194.703 180.73ZM198.324 187.949H199.238V182.535H200.984V181.75H199.238V177.531H198.324V187.949ZM205.051 179.5V178.176H204.148V179.465C204.143 181.082 203.1 182.494 201.512 183.051L202.016 183.789C203.246 183.314 204.189 182.359 204.629 181.117C205.092 182.219 206.012 183.098 207.195 183.531L207.664 182.793C206.129 182.26 205.045 180.936 205.051 179.5ZM203.188 187.727H210.172V186.953H204.125V184.492H203.188V187.727ZM208.777 185.23H209.691V181.516H211.262V180.73H209.691V177.531H208.777V185.23ZM224.422 183.836H214.93V184.609H219.219V187.973H220.121V184.609H224.422V183.836ZM215.527 182.289L215.867 183.027C217.479 182.781 219.02 181.984 219.682 180.842C220.344 181.973 221.861 182.781 223.473 183.027L223.812 182.289C221.949 182.037 220.133 180.895 220.133 179.594V179.582H223.508V178.832H220.121V177.531H219.219V178.832H215.855V179.582H219.219V179.594C219.213 180.9 217.385 182.037 215.527 182.289ZM233.891 177.531H232.965V187.973H233.891V177.531ZM225.688 181.973C225.693 184.193 226.795 185.6 228.348 185.594C229.895 185.6 231.014 184.193 231.008 181.973C231.014 179.758 229.895 178.346 228.348 178.34C226.795 178.346 225.693 179.758 225.688 181.973ZM226.578 181.973C226.578 180.279 227.305 179.166 228.348 179.16C229.396 179.166 230.117 180.279 230.117 181.973C230.117 183.666 229.396 184.779 228.348 184.773C227.305 184.779 226.578 183.666 226.578 181.973Z"
          fill="#ADAFB8"
        />
        <path d="M14 131.354H289" stroke="#F1F5F9" />
        <path d="M14 103.207H289" stroke="#F1F5F9" />
        <path d="M14 75.0625H289" stroke="#F1F5F9" />
        <path d="M14 46.4141H289" stroke="#F1F5F9" />
        <path d="M14 18L289 18" stroke="#F1F5F9" />
        <path
          d="M15.0703 153H16.1719L20.0508 145.5V144.516H14.4727V145.453H18.9609V145.512L15.0703 153ZM29.6367 143.543H28.7109V148.5H26.6016V149.109H28.7109V149.684H29.6367V143.543ZM21.0117 147.469L21.1172 148.16C21.9609 148.16 22.9102 148.16 23.8945 148.125V149.719H24.7969V148.09C25.834 148.043 26.8945 147.955 27.9141 147.809L27.8555 147.211C25.6055 147.457 23.0273 147.48 21.0117 147.469ZM21.8203 145.312C21.8203 146.285 22.8398 146.865 24.4102 146.871C25.9629 146.865 26.9883 146.285 27 145.312C26.9883 144.346 25.9629 143.742 24.4102 143.742C22.8398 143.742 21.8203 144.346 21.8203 145.312ZM22.6055 150.727H28.7227V151.57H22.6523V153.832H29.9766V153.152H23.5547V152.215H29.6367V150.059H22.6055V150.727ZM22.6875 145.312C22.6816 144.756 23.3613 144.381 24.4102 144.387C25.4473 144.381 26.127 144.756 26.1328 145.312C26.127 145.863 25.4473 146.238 24.4102 146.238C23.3613 146.238 22.6816 145.863 22.6875 145.312Z"
          fill="#B8B9C1"
        />
        <path
          d="M65.8086 153.117C67.5781 153.117 68.8203 152.127 68.832 150.75C68.8203 149.654 68.0586 148.746 67.0977 148.594V148.547C67.9297 148.354 68.4922 147.574 68.5039 146.648C68.4922 145.354 67.3555 144.398 65.8086 144.398C64.2559 144.398 63.1191 145.354 63.125 146.648C63.1191 147.574 63.6758 148.354 64.5195 148.547V148.594C63.5527 148.746 62.791 149.654 62.7969 150.75C62.791 152.127 64.0215 153.117 65.8086 153.117ZM63.8516 150.691C63.834 149.754 64.6719 149.062 65.8086 149.062C66.9512 149.062 67.7773 149.754 67.7773 150.691C67.7773 151.582 67.0215 152.186 65.8086 152.191C64.5898 152.186 63.834 151.582 63.8516 150.691ZM64.1445 146.73C64.1504 145.881 64.8008 145.307 65.8086 145.312C66.7988 145.307 67.4727 145.881 67.4727 146.73C67.4727 147.586 66.7754 148.166 65.8086 148.172C64.8359 148.166 64.1504 147.586 64.1445 146.73ZM78.4648 143.543H77.5391V148.5H75.4297V149.109H77.5391V149.684H78.4648V143.543ZM69.8398 147.469L69.9453 148.16C70.7891 148.16 71.7383 148.16 72.7227 148.125V149.719H73.625V148.09C74.6621 148.043 75.7227 147.955 76.7422 147.809L76.6836 147.211C74.4336 147.457 71.8555 147.48 69.8398 147.469ZM70.6484 145.312C70.6484 146.285 71.668 146.865 73.2383 146.871C74.791 146.865 75.8164 146.285 75.8281 145.312C75.8164 144.346 74.791 143.742 73.2383 143.742C71.668 143.742 70.6484 144.346 70.6484 145.312ZM71.4336 150.727H77.5508V151.57H71.4805V153.832H78.8047V153.152H72.3828V152.215H78.4648V150.059H71.4336V150.727ZM71.5156 145.312C71.5098 144.756 72.1895 144.381 73.2383 144.387C74.2754 144.381 74.9551 144.756 74.9609 145.312C74.9551 145.863 74.2754 146.238 73.2383 146.238C72.1895 146.238 71.5098 145.863 71.5156 145.312Z"
          fill="#B8B9C1"
        />
        <path
          d="M114.756 144.398C112.951 144.381 111.791 145.664 111.791 147.246C111.791 148.881 113.051 150.047 114.568 150.047C115.471 150.047 116.25 149.625 116.736 148.922H116.854C116.842 150.984 115.998 152.18 114.615 152.18C113.672 152.18 113.092 151.617 112.904 150.855H111.861C112.072 152.203 113.121 153.117 114.615 153.117C116.602 153.117 117.838 151.436 117.838 148.418C117.838 145.295 116.215 144.416 114.756 144.398ZM112.822 147.234C112.811 146.186 113.648 145.324 114.756 145.324C115.875 145.324 116.689 146.238 116.689 147.211C116.689 148.207 115.828 149.121 114.721 149.121C113.613 149.121 112.816 148.283 112.822 147.234ZM127.506 143.543H126.58V148.5H124.471V149.109H126.58V149.684H127.506V143.543ZM118.881 147.469L118.986 148.16C119.83 148.16 120.779 148.16 121.764 148.125V149.719H122.666V148.09C123.703 148.043 124.764 147.955 125.783 147.809L125.725 147.211C123.475 147.457 120.896 147.48 118.881 147.469ZM119.689 145.312C119.689 146.285 120.709 146.865 122.279 146.871C123.832 146.865 124.857 146.285 124.869 145.312C124.857 144.346 123.832 143.742 122.279 143.742C120.709 143.742 119.689 144.346 119.689 145.312ZM120.475 150.727H126.592V151.57H120.521V153.832H127.846V153.152H121.424V152.215H127.506V150.059H120.475V150.727ZM120.557 145.312C120.551 144.756 121.23 144.381 122.279 144.387C123.316 144.381 123.996 144.756 124.002 145.312C123.996 145.863 123.316 146.238 122.279 146.238C121.23 146.238 120.551 145.863 120.557 145.312Z"
          fill="#B8B9C1"
        />
        <path
          d="M163.906 144.516H162.84L160.73 145.922V146.988L162.793 145.617H162.84V153H163.906V144.516ZM168.945 153.117C170.826 153.117 171.91 151.535 171.91 148.758C171.91 146.004 170.809 144.398 168.945 144.398C167.076 144.398 165.975 146.004 165.98 148.758C165.975 151.535 167.064 153.117 168.945 153.117ZM167 148.758C167.006 146.561 167.727 145.318 168.945 145.312C170.164 145.318 170.885 146.561 170.879 148.758C170.885 150.955 170.17 152.18 168.945 152.18C167.715 152.18 167.006 150.955 167 148.758ZM181.531 143.543H180.605V148.5H178.496V149.109H180.605V149.684H181.531V143.543ZM172.906 147.469L173.012 148.16C173.855 148.16 174.805 148.16 175.789 148.125V149.719H176.691V148.09C177.729 148.043 178.789 147.955 179.809 147.809L179.75 147.211C177.5 147.457 174.922 147.48 172.906 147.469ZM173.715 145.312C173.715 146.285 174.734 146.865 176.305 146.871C177.857 146.865 178.883 146.285 178.895 145.312C178.883 144.346 177.857 143.742 176.305 143.742C174.734 143.742 173.715 144.346 173.715 145.312ZM174.5 150.727H180.617V151.57H174.547V153.832H181.871V153.152H175.449V152.215H181.531V150.059H174.5V150.727ZM174.582 145.312C174.576 144.756 175.256 144.381 176.305 144.387C177.342 144.381 178.021 144.756 178.027 145.312C178.021 145.863 177.342 146.238 176.305 146.238C175.256 146.238 174.576 145.863 174.582 145.312Z"
          fill="#B8B9C1"
        />
        <path
          d="M217.85 144.516H216.783L214.674 145.922V146.988L216.736 145.617H216.783V153H217.85V144.516ZM223.111 144.516H222.045L219.936 145.922V146.988L221.998 145.617H222.045V153H223.111V144.516ZM233.588 143.543H232.662V148.5H230.553V149.109H232.662V149.684H233.588V143.543ZM224.963 147.469L225.068 148.16C225.912 148.16 226.861 148.16 227.846 148.125V149.719H228.748V148.09C229.785 148.043 230.846 147.955 231.865 147.809L231.807 147.211C229.557 147.457 226.979 147.48 224.963 147.469ZM225.771 145.312C225.771 146.285 226.791 146.865 228.361 146.871C229.914 146.865 230.939 146.285 230.951 145.312C230.939 144.346 229.914 143.742 228.361 143.742C226.791 143.742 225.771 144.346 225.771 145.312ZM226.557 150.727H232.674V151.57H226.604V153.832H233.928V153.152H227.506V152.215H233.588V150.059H226.557V150.727ZM226.639 145.312C226.633 144.756 227.312 144.381 228.361 144.387C229.398 144.381 230.078 144.756 230.084 145.312C230.078 145.863 229.398 146.238 228.361 146.238C227.312 146.238 226.633 145.863 226.639 145.312Z"
          fill="#B8B9C1"
        />
        <path
          d="M269.959 144.516H268.893L266.783 145.922V146.988L268.846 145.617H268.893V153H269.959V144.516ZM272.221 153H277.729V152.062H273.686V151.992L275.631 149.988C277.131 148.441 277.57 147.703 277.576 146.754C277.57 145.436 276.48 144.398 274.939 144.398C273.404 144.398 272.244 145.406 272.256 146.906H273.252C273.258 145.957 273.891 145.318 274.904 145.312C275.859 145.318 276.586 145.881 276.592 146.754C276.586 147.539 276.105 148.113 275.104 149.18L272.209 152.227L272.221 153ZM287.479 143.543H286.553V148.5H284.443V149.109H286.553V149.684H287.479V143.543ZM278.854 147.469L278.959 148.16C279.803 148.16 280.752 148.16 281.736 148.125V149.719H282.639V148.09C283.676 148.043 284.736 147.955 285.756 147.809L285.697 147.211C283.447 147.457 280.869 147.48 278.854 147.469ZM279.662 145.312C279.662 146.285 280.682 146.865 282.252 146.871C283.805 146.865 284.83 146.285 284.842 145.312C284.83 144.346 283.805 143.742 282.252 143.742C280.682 143.742 279.662 144.346 279.662 145.312ZM280.447 150.727H286.564V151.57H280.494V153.832H287.818V153.152H281.396V152.215H287.479V150.059H280.447V150.727ZM280.529 145.312C280.523 144.756 281.203 144.381 282.252 144.387C283.289 144.381 283.969 144.756 283.975 145.312C283.969 145.863 283.289 146.238 282.252 146.238C281.203 146.238 280.523 145.863 280.529 145.312Z"
          fill="#B8B9C1"
        />
        <path
          d="M14 86L68.6 98L123.2 74L177.8 44L231.826 53.5L287 92"
          stroke="#61DABA"
          strokeWidth="3"
        />
        <path
          d="M16 85L70.6 75L125.2 87L179.8 67L234.4 27L289 73"
          stroke="#2E9BFF"
          strokeWidth="3"
        />
        <circle cx="72" cy="183" r="4" fill="#2E9BFF" />
        <circle cx="155" cy="183" r="4" fill="#3AD1A9" />
        <path
          d="M89.6484 178.328V177.801H88.6992V178.328C88.6992 179.734 86.8184 180.941 84.9961 181.223L85.3594 181.949C86.9473 181.68 88.5234 180.812 89.1797 179.576C89.8359 180.789 91.4062 181.668 92.9883 181.938L93.3516 181.211C91.541 180.936 89.6426 179.693 89.6484 178.328ZM84.4102 183.602H88.793V185.734H89.707V183.602H93.9492V182.84H84.4102V183.602ZM85.6289 187.727H92.8828V186.953H86.5547V184.715H85.6289V187.727ZM98.3203 180.73V179.371H100.664V178.609H94.9922V179.371H97.418V180.73C97.4062 182.506 96.1172 184.486 94.6172 185.219L95.1797 185.945C96.3457 185.348 97.3887 184 97.8691 182.471C98.3379 183.883 99.3281 185.113 100.5 185.688L101.027 184.961C99.5156 184.24 98.3086 182.4 98.3203 180.73ZM101.941 187.949H102.855V182.535H104.602V181.75H102.855V177.531H101.941V187.949ZM108.668 179.5V178.176H107.766V179.465C107.76 181.082 106.717 182.494 105.129 183.051L105.633 183.789C106.863 183.314 107.807 182.359 108.246 181.117C108.709 182.219 109.629 183.098 110.812 183.531L111.281 182.793C109.746 182.26 108.662 180.936 108.668 179.5ZM106.805 187.727H113.789V186.953H107.742V184.492H106.805V187.727ZM112.395 185.23H113.309V181.516H114.879V180.73H113.309V177.531H112.395V185.23ZM128.039 183.836H118.547V184.609H122.836V187.973H123.738V184.609H128.039V183.836ZM119.145 182.289L119.484 183.027C121.096 182.781 122.637 181.984 123.299 180.842C123.961 181.973 125.479 182.781 127.09 183.027L127.43 182.289C125.566 182.037 123.75 180.895 123.75 179.594V179.582H127.125V178.832H123.738V177.531H122.836V178.832H119.473V179.582H122.836V179.594C122.83 180.9 121.002 182.037 119.145 182.289ZM137.508 177.531H136.582V187.973H137.508V177.531ZM129.305 181.973C129.311 184.193 130.412 185.6 131.965 185.594C133.512 185.6 134.631 184.193 134.625 181.973C134.631 179.758 133.512 178.346 131.965 178.34C130.412 178.346 129.311 179.758 129.305 181.973ZM130.195 181.973C130.195 180.279 130.922 179.166 131.965 179.16C133.014 179.166 133.734 180.279 133.734 181.973C133.734 183.666 133.014 184.779 131.965 184.773C130.922 184.779 130.195 183.666 130.195 181.973Z"
          fill="#ADAFB8"
        />
        <path
          d="M176.199 182.371H173.352V179.277H176.07V178.527H172.426V183.121H176.199V182.371ZM167.422 186.613H176.961V185.852H172.602V183.648H171.699V185.852H167.422V186.613ZM168.254 183.121H168.828C169.865 183.127 170.826 183.098 171.969 182.84L171.887 182.066C170.92 182.289 170.047 182.354 169.168 182.359V179.289H171.793V178.527H168.254V183.121ZM182.047 178.668H178.121V179.441H181.156V181.551H178.145V185.453H178.824C180.137 185.453 181.314 185.406 182.797 185.148L182.715 184.398C181.367 184.627 180.236 184.674 179.035 184.68V182.312H182.047V178.668ZM183.441 187.41H184.285V182.418H185.82V187.949H186.699V177.531H185.82V181.656H184.285V177.766H183.441V187.41ZM194.703 180.73V179.371H197.047V178.609H191.375V179.371H193.801V180.73C193.789 182.506 192.5 184.486 191 185.219L191.562 185.945C192.729 185.348 193.771 184 194.252 182.471C194.721 183.883 195.711 185.113 196.883 185.688L197.41 184.961C195.898 184.24 194.691 182.4 194.703 180.73ZM198.324 187.949H199.238V182.535H200.984V181.75H199.238V177.531H198.324V187.949ZM205.051 179.5V178.176H204.148V179.465C204.143 181.082 203.1 182.494 201.512 183.051L202.016 183.789C203.246 183.314 204.189 182.359 204.629 181.117C205.092 182.219 206.012 183.098 207.195 183.531L207.664 182.793C206.129 182.26 205.045 180.936 205.051 179.5ZM203.188 187.727H210.172V186.953H204.125V184.492H203.188V187.727ZM208.777 185.23H209.691V181.516H211.262V180.73H209.691V177.531H208.777V185.23ZM224.422 183.836H214.93V184.609H219.219V187.973H220.121V184.609H224.422V183.836ZM215.527 182.289L215.867 183.027C217.479 182.781 219.02 181.984 219.682 180.842C220.344 181.973 221.861 182.781 223.473 183.027L223.812 182.289C221.949 182.037 220.133 180.895 220.133 179.594V179.582H223.508V178.832H220.121V177.531H219.219V178.832H215.855V179.582H219.219V179.594C219.213 180.9 217.385 182.037 215.527 182.289ZM233.891 177.531H232.965V187.973H233.891V177.531ZM225.688 181.973C225.693 184.193 226.795 185.6 228.348 185.594C229.895 185.6 231.014 184.193 231.008 181.973C231.014 179.758 229.895 178.346 228.348 178.34C226.795 178.346 225.693 179.758 225.688 181.973ZM226.578 181.973C226.578 180.279 227.305 179.166 228.348 179.16C229.396 179.166 230.117 180.279 230.117 181.973C230.117 183.666 229.396 184.779 228.348 184.773C227.305 184.779 226.578 183.666 226.578 181.973Z"
          fill="#ADAFB8"
        />
      </svg>
    </Box>
  );
}
