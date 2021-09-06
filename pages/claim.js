import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/router';

function Claim() {
  const router = useRouter();
  return (
    <>
      <div className="claim">
        <div className="notice">
          <h1 className="notice__title">Important Notice</h1>
          <ul>
            <li className="notice_list_item">
              Item rewards are shown in [vault] tab in game lobby; Golds or
              diamonds will add in account wallet automatically.
            </li>
            <li className="notice_list_item">
              Please contact customer service if you encountered any issue.
            </li>
            <li className="notice_list_item">
              Reminder: you will not be able to redeem your rewards with guest
              accounts. You may bind your account to Facebook or VK in order to
              receive the rewards
            </li>
          </ul>
          <div className="login">
            <div className="page">
              <FcGoogle />
            </div>
            <div className="page p1" onClick={() => router.push('/login')}>
              <svg viewBox="0 0 36 36" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4" fill="url(#jsc_c_3)" height="30" width="30">
                <defs>
                <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_c_3"><stop offset="0%" stop-color="#0062E0"></stop>
                  <stop offset="100%" stop-color="#19AFFF"></stop></linearGradient></defs><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path><path class="p361ku9c" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z" style="
    fill: white;
"></path></svg>
  </div>
            <div className="page">
              <svg
                width="15"
                fill="rgb(100,100,255)"
                height="15"
                viewBox="0 0 24 24"
              >
                <path
                  className="st0"
                  d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Claim;
