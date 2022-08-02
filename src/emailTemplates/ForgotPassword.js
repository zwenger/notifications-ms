const {
  FACEBOOK,
  INSTAGRAM,
  TIKTOK,
  SUPPORT,
} = require('../constants/emailConfigs');

const forgotPassword = (
  url
) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%">
    <meta
      charset="utf-8"
      style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%"
    />
    <meta
      name="viewport"
      content="width=device-width"
      style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%"
    />
    <meta
      http-equiv="X-UA-Compatible"
      content="IE=edge"
      style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%"
    />
    <meta
      name="x-apple-disable-message-reformatting"
      style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%"
    />
    <meta
      name="format-detection"
      content="telephone=no,address=no,email=no,date=no,url=no"
      style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%"
    />
    <title style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%">
      Recuperacion de contraseña
    </title>
    <!--[if mso]>
      <style>
        * {
          font-family: sans-serif !important;
        }
      </style>
    <![endif]-->
    <!--[if !mso]><!-->
    <!-- <![endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
  </head>
  <body
    width="100%"
    style="
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      margin: 0;
      mso-line-height-rule: exactly;
      padding: 0 !important;
    "
  >
    <style>
      @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
        u ~ div .email-container {
          min-width: 320px !important;
        }
      }
      @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
        u ~ div .email-container {
          min-width: 375px !important;
        }
      }
      @media only screen and (min-device-width: 414px) {
        u ~ div .email-container {
          min-width: 414px !important;
        }
      }
      @media only screen and (max-device-width: 599px),
        only screen and (max-width: 599px) {
        .eh {
          height: auto !important;
        }
        .desktop {
          display: none !important;
          height: 0 !important;
          margin: 0 !important;
          max-height: 0 !important;
          overflow: hidden !important;
          padding: 0 !important;
          visibility: hidden !important;
          width: 0 !important;
        }
        .mobile {
          display: block !important;
          width: auto !important;
          height: auto !important;
          float: none !important;
        }
        .email-container {
          width: 100% !important;
          margin: auto !important;
        }
        .stack-column,
        .stack-column-center {
          display: block !important;
          width: 100% !important;
          max-width: 100% !important;
          direction: ltr !important;
        }
        .stack-column-center {
          text-align: center !important;
        }
        .center-on-narrow {
          text-align: center !important;
          display: block !important;
          margin-left: auto !important;
          margin-right: auto !important;
          float: none !important;
        }
        table.center-on-narrow {
          display: inline-block !important;
        }
      }
    </style>
    <div style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#000000" />
        </v:background>
      <![endif]-->
      <table
        width="100%"
        cellpadding="0"
        cellspacing="0"
        border="0"
        style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%"
      >
        <tbody>
          <tr
            style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%"
          >
            <td
              valign="top"
              align="center"
              style="
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
                mso-table-lspace: 0 !important;
                mso-table-rspace: 0 !important;
                vertical-align: top;
              "
            >
              <table
                bgcolor="#ffffff"
                style="
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                  margin: 0 auto;
                "
                align="center"
                id="brick_container"
                cellspacing="0"
                cellpadding="0"
                border="0"
                width="600"
                class="email-container"
              >
                <tbody>
                  <tr
                    style="
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                    "
                  >
                    <td
                      width="118"
                      style="
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%;
                        mso-table-lspace: 0 !important;
                        mso-table-rspace: 0 !important;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                          font-size: 23px;
                          height: 23px;
                          line-height: 23px;
                        "
                      >
                      </div>
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                        "
                      >
                        <tbody>
                          <tr
                            style="
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                          >
                            <td
                              style="
                                -ms-text-size-adjust: 100%;
                                -webkit-text-size-adjust: 100%;
                                mso-table-lspace: 0 !important;
                                mso-table-rspace: 0 !important;
                                vertical-align: top;
                              "
                            >
                              <table
                                align="left"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                                style="
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                "
                              >
                                <tbody>
                                  <tr
                                    style="
                                      -ms-text-size-adjust: 100%;
                                      -webkit-text-size-adjust: 100%;
                                    "
                                  >
                                    <td
                                      style="
                                        -ms-text-size-adjust: 100%;
                                        -webkit-text-size-adjust: 100%;
                                        mso-table-lspace: 0 !important;
                                        mso-table-rspace: 0 !important;
                                        padding-left: 241px;
                                        vertical-align: top;
                                      "
                                    >
                                      <img
                                        src="${process.env.IMAGES_BUCKET}notnini-logo-color.png"
                                        width="118"
                                        alt=""
                                        border="0"
                                        style="
                                          -ms-interpolation-mode: bicubic;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                          border-radius: 0;
                                          display: block;
                                          height: auto;
                                          margin: auto;
                                          max-width: 118px;
                                        "
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr
                    style="
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                    "
                  >
                    <td
                      style="
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%;
                        mso-table-lspace: 0 !important;
                        mso-table-rspace: 0 !important;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                          font-size: 254px;
                          height: 254px;
                          line-height: 254px;
                        "
                      >
                      </div>
                      <table
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        width="100%"
                        style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                        "
                      >
                        <tbody>
                          <tr
                            style="
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                          >
                            <td
                              style="
                                -ms-text-size-adjust: 100%;
                                -webkit-text-size-adjust: 100%;
                                mso-table-lspace: 0 !important;
                                mso-table-rspace: 0 !important;
                                padding-left: 111px;
                                padding-right: 111px;
                                text-align: center;
                                vertical-align: top;
                              "
                            >
                              <div
                                style="
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  line-height: normal;
                                "
                              >
                                <span
                                  style="
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    color: #3c22d2;
                                    font-family: Inter, Helvetica, Arial,
                                      sans-serif;
                                    font-size: 34px;
                                    font-weight: 700;
                                    text-align: center;
                                  "
                                  >Usuario Desbloqueado</span
                                >
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr
                    style="
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                    "
                  >
                    <td
                      style="
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%;
                        mso-table-lspace: 0 !important;
                        mso-table-rspace: 0 !important;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                          font-size: 29px;
                          height: 29px;
                          line-height: 29px;
                        "
                      >
                      </div>
                      <table
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        width="100%"
                        style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                        "
                      >
                        <tbody>
                          <tr
                            style="
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                          >
                            <td
                              style="
                                -ms-text-size-adjust: 100%;
                                -webkit-text-size-adjust: 100%;
                                mso-table-lspace: 0 !important;
                                mso-table-rspace: 0 !important;
                                padding-left: 35px;
                                padding-right: 36px;
                                text-align: center;
                                vertical-align: top;
                              "
                            >
                              <div
                                style="
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  line-height: normal;
                                "
                              >
                                <span
                                  style="
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    color: #000;
                                    font-family: Inter, Helvetica, Arial,
                                      sans-serif;
                                    font-size: 16px;
                                    text-align: center;
                                  "
                                  >Hola, te informamos que tu usuario ha sido
                                  desbloqueado.<br
                                    style="
                                      -ms-text-size-adjust: 100%;
                                      -webkit-text-size-adjust: 100%;
                                    "
                                  />Para volver a ingresar te pedimos que
                                  generes una nueva contraseña.</span
                                >
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr
                    style="
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                    "
                  >
                    <td
                      style="
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%;
                        mso-table-lspace: 0 !important;
                        mso-table-rspace: 0 !important;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                          font-size: 29px;
                          height: 29px;
                          line-height: 29px;
                        "
                      >
                      </div>
                    </td>
                  </tr>
                  <tr
                    style="
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                    "
                  >
                    <td
                      style="
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%;
                        mso-table-lspace: 0 !important;
                        mso-table-rspace: 0 !important;
                        padding-left: 150px;
                        padding-right: 150px;
                        vertical-align: top;
                      "
                    >
                      <table
                        align="center"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        width="100%"
                        style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                        "
                      >
                        <tbody>
                          <tr
                            style="
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                          >
                            <td
                              style="
                                -ms-text-size-adjust: 100%;
                                -webkit-text-size-adjust: 100%;
                                mso-table-lspace: 0 !important;
                                mso-table-rspace: 0 !important;
                                vertical-align: top;
                              "
                            >
                              <div
                                style="
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                "
                              >
                                <!--[if mso]>
                                  <v:roundrect
                                    xmlns:v="urn:schemas-microsoft-com:vml"
                                    xmlns:w="urn:schemas-microsoft-com:office:word"
                                    href="${url}"
                                    style="
                                      height: 50px;
                                      v-text-anchor: middle;
                                      width: 300px;
                                    "
                                    fillcolor="#5ebfc1"
                                    stroke="f"
                                    arcsize="18%"
                                  >
                                    <w:anchorlock />
                                    <center
                                      style="
                                        white-space: nowrap;
                                        display: inline-block;
                                        color: #ffffff;
                                        font-family: Inter, Helvetica, Arial,
                                          sans-serif;
                                        font-size: 16px;
                                        text-align: center;
                                        font-weight: 700;
                                      "
                                    >
                                      Generar contraseña
                                    </center>
                                  </v:roundrect>
                                <![endif]-->
                                <a
                                  href="${url}"
                                  style="
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: none;
                                    background-color: #5ebfc1;
                                    border-radius: 9px;
                                    color: #fff;
                                    display: inline-block;
                                    font-family: Inter, Helvetica, Arial,
                                      sans-serif;
                                    font-size: 16px;
                                    font-weight: 700;
                                    line-height: 50px;
                                    mso-hide: all;
                                    text-align: center;
                                    text-decoration: none;
                                    white-space: nowrap;
                                    width: 100%;
                                  "
                                  >Generar contraseña</a
                                >
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr
                    style="
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                    "
                  >
                    <td
                      style="
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%;
                        mso-table-lspace: 0 !important;
                        mso-table-rspace: 0 !important;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                          font-size: 9px;
                          height: 9px;
                          line-height: 9px;
                        "
                      >
                      </div>
                      <table
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        width="100%"
                        style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                        "
                      >
                        <tbody>
                          <tr
                            style="
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                          >
                            <td
                              style="
                                -ms-text-size-adjust: 100%;
                                -webkit-text-size-adjust: 100%;
                                mso-table-lspace: 0 !important;
                                mso-table-rspace: 0 !important;
                                padding-left: 222px;
                                padding-right: 207px;
                                text-align: center;
                                vertical-align: top;
                              "
                            >
                              <div
                                style="
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  line-height: normal;
                                "
                              >
                                <a
                                  href="${url}"
                                  style="
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    text-decoration: none;
                                  "
                                  ><span
                                    style="
                                      -ms-text-size-adjust: 100%;
                                      -webkit-text-size-adjust: 100%;
                                      color: #000;
                                      font-family: Work Sans, Helvetica, Arial,
                                        sans-serif;
                                      font-size: 13px;
                                      text-align: center;
                                      text-decoration: underline;
                                    "
                                    >${url}</span
                                  ></a
                                >
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr
                    style="
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                    "
                  >
                    <td
                      style="
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%;
                        mso-table-lspace: 0 !important;
                        mso-table-rspace: 0 !important;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                          font-size: 46px;
                          height: 46px;
                          line-height: 46px;
                        "
                      >
                      </div>
                      <table
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        width="100%"
                        style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                        "
                      >
                        <tbody>
                          <tr
                            style="
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                          >
                            <td
                              style="
                                -ms-text-size-adjust: 100%;
                                -webkit-text-size-adjust: 100%;
                                mso-table-lspace: 0 !important;
                                mso-table-rspace: 0 !important;
                                padding-left: 35px;
                                padding-right: 36px;
                                text-align: center;
                                vertical-align: top;
                              "
                            >
                              <div
                                style="
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  line-height: normal;
                                "
                              >
                                <span
                                  style="
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    color: #000;
                                    font-family: Inter, Helvetica, Arial,
                                      sans-serif;
                                    font-size: 16px;
                                    text-align: center;
                                  "
                                  >Si tenes dudas sobre el contenido de este
                                  mail,<br
                                    style="
                                      -ms-text-size-adjust: 100%;
                                      -webkit-text-size-adjust: 100%;
                                    "
                                  />contactanos para que podamos ayudarte,
                                  haciendo </span
                                ><span
                                style="
                                  font-family: Inter, Helvetica, Arial, sans-serif;
                                  font-size: 16px;
                                  text-align: center;
                                "
                                >click aqui<br />(${SUPPORT})
                              </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr
                    style="
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                    "
                  >
                    <td
                      style="
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%;
                        mso-table-lspace: 0 !important;
                        mso-table-rspace: 0 !important;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                          font-size: 29px;
                          height: 29px;
                          line-height: 29px;
                        "
                      >
                      </div>
                    </td>
                  </tr>
                  <tr
                    style="
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                    "
                  >
                    <td
                      style="
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%;
                        mso-table-lspace: 0 !important;
                        mso-table-rspace: 0 !important;
                        vertical-align: top;
                      "
                    >
                      <table
                        width="100%"
                        align="center"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                        "
                      >
                        <tbody>
                          <tr
                            style="
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                          >
                            <td
                              width="600"
                              bgcolor="#716390"
                              style="
                                -ms-text-size-adjust: 100%;
                                -webkit-text-size-adjust: 100%;
                                mso-table-lspace: 0 !important;
                                mso-table-rspace: 0 !important;
                                vertical-align: top;
                              "
                            >
                              <table
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                                width="100%"
                                style="
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                "
                              >
                                <tbody>
                                  <tr
                                    style="
                                      -ms-text-size-adjust: 100%;
                                      -webkit-text-size-adjust: 100%;
                                    "
                                  >
                                    <td
                                      style="
                                        -ms-text-size-adjust: 100%;
                                        -webkit-text-size-adjust: 100%;
                                        mso-table-lspace: 0 !important;
                                        mso-table-rspace: 0 !important;
                                        vertical-align: top;
                                      "
                                    >
                                      <div
                                        style="
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                          font-size: 12px;
                                          height: 12px;
                                          line-height: 12px;
                                        "
                                      >
                                      </div>
                                      <table
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                        width="100%"
                                        style="
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <tbody>
                                          <tr
                                            style="
                                              -ms-text-size-adjust: 100%;
                                              -webkit-text-size-adjust: 100%;
                                            "
                                          >
                                            <td
                                              style="
                                                -ms-text-size-adjust: 100%;
                                                -webkit-text-size-adjust: 100%;
                                                mso-table-lspace: 0 !important;
                                                mso-table-rspace: 0 !important;
                                                padding-left: 273px;
                                                text-align: left;
                                                vertical-align: top;
                                              "
                                            >
                                              <div
                                                style="
                                                  -ms-text-size-adjust: 100%;
                                                  -webkit-text-size-adjust: 100%;
                                                  line-height: normal;
                                                "
                                              >
                                                <span
                                                  style="
                                                    -ms-text-size-adjust: 100%;
                                                    -webkit-text-size-adjust: 100%;
                                                    color: #fff;
                                                    font-family: Inter,
                                                      Helvetica, Arial,
                                                      sans-serif;
                                                    font-size: 10px;
                                                    text-align: left;
                                                  "
                                                  >notnini.com</span
                                                >
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      -ms-text-size-adjust: 100%;
                                      -webkit-text-size-adjust: 100%;
                                    "
                                  >
                                    <td
                                      style="
                                        -ms-text-size-adjust: 100%;
                                        -webkit-text-size-adjust: 100%;
                                        mso-table-lspace: 0 !important;
                                        mso-table-rspace: 0 !important;
                                        padding-left: 171px;
                                        vertical-align: top;
                                        width: 258px;
                                      "
                                    >
                                      <table
                                        align="left"
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                        style="
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <tbody>
                                          <tr
                                            style="
                                              -ms-text-size-adjust: 100%;
                                              -webkit-text-size-adjust: 100%;
                                            "
                                          >
                                            <td
                                              width="258"
                                              style="
                                                -ms-text-size-adjust: 100%;
                                                -webkit-text-size-adjust: 100%;
                                                mso-table-lspace: 0 !important;
                                                mso-table-rspace: 0 !important;
                                                vertical-align: top;
                                              "
                                            >
                                              <table
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                width="100%"
                                                style="
                                                  -ms-text-size-adjust: 100%;
                                                  -webkit-text-size-adjust: 100%;
                                                "
                                              >
                                                <tbody>
                                                  <tr
                                                    style="
                                                      -ms-text-size-adjust: 100%;
                                                      -webkit-text-size-adjust: 100%;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        -ms-text-size-adjust: 100%;
                                                        -webkit-text-size-adjust: 100%;
                                                        mso-table-lspace: 0 !important;
                                                        mso-table-rspace: 0 !important;
                                                        vertical-align: top;
                                                      "
                                                    >
                                                      <div
                                                        style="
                                                          -ms-text-size-adjust: 100%;
                                                          -webkit-text-size-adjust: 100%;
                                                          font-size: 26px;
                                                          height: 26px;
                                                          line-height: 26px;
                                                        "
                                                      >
                                                      </div>
                                                    </td>
                                                  </tr>
                                                  <tr
                                                    style="
                                                      -ms-text-size-adjust: 100%;
                                                      -webkit-text-size-adjust: 100%;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        -ms-text-size-adjust: 100%;
                                                        -webkit-text-size-adjust: 100%;
                                                        mso-table-lspace: 0 !important;
                                                        mso-table-rspace: 0 !important;
                                                        vertical-align: top;
                                                        width: 255px;
                                                      "
                                                    >
                                                      <table
                                                        align="left"
                                                        cellspacing="0"
                                                        cellpadding="0"
                                                        border="0"
                                                        style="
                                                          -ms-text-size-adjust: 100%;
                                                          -webkit-text-size-adjust: 100%;
                                                        "
                                                      >
                                                        <tbody>
                                                          <tr
                                                            style="
                                                              -ms-text-size-adjust: 100%;
                                                              -webkit-text-size-adjust: 100%;
                                                            "
                                                          >
                                                            <td
                                                              width="255"
                                                              style="
                                                                -ms-text-size-adjust: 100%;
                                                                -webkit-text-size-adjust: 100%;
                                                                mso-table-lspace: 0 !important;
                                                                mso-table-rspace: 0 !important;
                                                                vertical-align: top;
                                                              "
                                                            >
                                                              <table
                                                                cellspacing="0"
                                                                cellpadding="0"
                                                                border="0"
                                                                width="100%"
                                                                style="
                                                                  -ms-text-size-adjust: 100%;
                                                                  -webkit-text-size-adjust: 100%;
                                                                "
                                                              >
                                                                <tbody>
                                                                  <tr
                                                                    style="
                                                                      -ms-text-size-adjust: 100%;
                                                                      -webkit-text-size-adjust: 100%;
                                                                    "
                                                                  >
                                                                    <td
                                                                      width="34"
                                                                      style="
                                                                        -ms-text-size-adjust: 100%;
                                                                        -webkit-text-size-adjust: 100%;
                                                                        mso-table-lspace: 0 !important;
                                                                        mso-table-rspace: 0 !important;
                                                                        vertical-align: top;
                                                                      "
                                                                    >
                                                                      <table
                                                                        width="100%"
                                                                        cellspacing="0"
                                                                        cellpadding="0"
                                                                        border="0"
                                                                        style="
                                                                          -ms-text-size-adjust: 100%;
                                                                          -webkit-text-size-adjust: 100%;
                                                                        "
                                                                      >
                                                                        <tbody>
                                                                          <tr
                                                                            style="
                                                                              -ms-text-size-adjust: 100%;
                                                                              -webkit-text-size-adjust: 100%;
                                                                            "
                                                                          >
                                                                            <td
                                                                              style="
                                                                                -ms-text-size-adjust: 100%;
                                                                                -webkit-text-size-adjust: 100%;
                                                                                mso-table-lspace: 0 !important;
                                                                                mso-table-rspace: 0 !important;
                                                                                vertical-align: top;
                                                                              "
                                                                            >
                                                                              <table
                                                                                align="left"
                                                                                cellspacing="0"
                                                                                cellpadding="0"
                                                                                border="0"
                                                                                style="
                                                                                  -ms-text-size-adjust: 100%;
                                                                                  -webkit-text-size-adjust: 100%;
                                                                                "
                                                                              >
                                                                                <tbody>
                                                                                  <tr
                                                                                    style="
                                                                                      -ms-text-size-adjust: 100%;
                                                                                      -webkit-text-size-adjust: 100%;
                                                                                    "
                                                                                  >
                                                                                    <td
                                                                                      style="
                                                                                        -ms-text-size-adjust: 100%;
                                                                                        -webkit-text-size-adjust: 100%;
                                                                                        mso-table-lspace: 0 !important;
                                                                                        mso-table-rspace: 0 !important;
                                                                                        padding-left: 26px;
                                                                                        vertical-align: top;
                                                                                      "
                                                                                    >
                                                                                      <img
                                                                                        src="${process.env.IMAGES_BUCKET}notnini-logo-bw.png"
                                                                                        width="34"
                                                                                        alt=""
                                                                                        border="0"
                                                                                        style="
                                                                                          -ms-interpolation-mode: bicubic;
                                                                                          -ms-text-size-adjust: 100%;
                                                                                          -webkit-text-size-adjust: 100%;
                                                                                          border-radius: 15px;
                                                                                          display: block;
                                                                                          height: auto;
                                                                                          margin: auto;
                                                                                          max-width: 34px;
                                                                                        "
                                                                                      />
                                                                                    </td>
                                                                                  </tr>
                                                                                </tbody>
                                                                              </table>
                                                                            </td>
                                                                          </tr>
                                                                        </tbody>
                                                                      </table>
                                                                    </td>
                                                                    <td
                                                                      style="
                                                                        -ms-text-size-adjust: 100%;
                                                                        -webkit-text-size-adjust: 100%;
                                                                        mso-table-lspace: 0 !important;
                                                                        mso-table-rspace: 0 !important;
                                                                        padding-right: 4px;
                                                                        vertical-align: top;
                                                                        width: 72px;
                                                                      "
                                                                    >
                                                                      <table
                                                                        align="right"
                                                                        cellspacing="0"
                                                                        cellpadding="0"
                                                                        border="0"
                                                                        style="
                                                                          -ms-text-size-adjust: 100%;
                                                                          -webkit-text-size-adjust: 100%;
                                                                        "
                                                                      >
                                                                        <tbody>
                                                                          <tr
                                                                            style="
                                                                              -ms-text-size-adjust: 100%;
                                                                              -webkit-text-size-adjust: 100%;
                                                                            "
                                                                          >
                                                                            <td
                                                                              width="72"
                                                                              style="
                                                                                -ms-text-size-adjust: 100%;
                                                                                -webkit-text-size-adjust: 100%;
                                                                                mso-table-lspace: 0 !important;
                                                                                mso-table-rspace: 0 !important;
                                                                                vertical-align: top;
                                                                              "
                                                                            >
                                                                              <table
                                                                                cellspacing="0"
                                                                                cellpadding="0"
                                                                                border="0"
                                                                                width="100%"
                                                                                style="
                                                                                  -ms-text-size-adjust: 100%;
                                                                                  -webkit-text-size-adjust: 100%;
                                                                                "
                                                                              >
                                                                                <tbody>
                                                                                  <tr
                                                                                    style="
                                                                                      -ms-text-size-adjust: 100%;
                                                                                      -webkit-text-size-adjust: 100%;
                                                                                    "
                                                                                  >
                                                                                    <td
                                                                                      width="15"
                                                                                      style="
                                                                                        -ms-text-size-adjust: 100%;
                                                                                        -webkit-text-size-adjust: 100%;
                                                                                        mso-table-lspace: 0 !important;
                                                                                        mso-table-rspace: 0 !important;
                                                                                        vertical-align: top;
                                                                                      "
                                                                                    >
                                                                                      <div
                                                                                        class=""
                                                                                        style="
                                                                                          -ms-text-size-adjust: 100%;
                                                                                          -webkit-text-size-adjust: 100%;
                                                                                          font-size: 2px;
                                                                                          height: 2px;
                                                                                          line-height: 2px;
                                                                                        "
                                                                                      >
                                                                                      </div>
                                                                                      <table
                                                                                        width="100%"
                                                                                        cellspacing="0"
                                                                                        cellpadding="0"
                                                                                        border="0"
                                                                                        style="
                                                                                          -ms-text-size-adjust: 100%;
                                                                                          -webkit-text-size-adjust: 100%;
                                                                                        "
                                                                                      >
                                                                                        <tbody>
                                                                                          <tr
                                                                                            style="
                                                                                              -ms-text-size-adjust: 100%;
                                                                                              -webkit-text-size-adjust: 100%;
                                                                                            "
                                                                                          >
                                                                                            <td
                                                                                              style="
                                                                                                -ms-text-size-adjust: 100%;
                                                                                                -webkit-text-size-adjust: 100%;
                                                                                                mso-table-lspace: 0 !important;
                                                                                                mso-table-rspace: 0 !important;
                                                                                                vertical-align: top;
                                                                                              "
                                                                                            >
                                                                                              <table
                                                                                                align="left"
                                                                                                cellspacing="0"
                                                                                                cellpadding="0"
                                                                                                border="0"
                                                                                                style="
                                                                                                  -ms-text-size-adjust: 100%;
                                                                                                  -webkit-text-size-adjust: 100%;
                                                                                                "
                                                                                              >
                                                                                                <tbody>
                                                                                                  <tr
                                                                                                    style="
                                                                                                      -ms-text-size-adjust: 100%;
                                                                                                      -webkit-text-size-adjust: 100%;
                                                                                                    "
                                                                                                  >
                                                                                                    <td
                                                                                                      style="
                                                                                                        -ms-text-size-adjust: 100%;
                                                                                                        -webkit-text-size-adjust: 100%;
                                                                                                        mso-table-lspace: 0 !important;
                                                                                                        mso-table-rspace: 0 !important;
                                                                                                        vertical-align: top;
                                                                                                      "
                                                                                                    >
                                                                                                      <a
                                                                                                        href="${INSTAGRAM}"
                                                                                                        style="
                                                                                                          -ms-text-size-adjust: 100%;
                                                                                                          -webkit-text-size-adjust: 100%;
                                                                                                          text-decoration: none;
                                                                                                        "
                                                                                                        ><img
                                                                                                          src="${process.env.IMAGES_BUCKET}instagram-logo.png"
                                                                                                          width="15"
                                                                                                          alt=""
                                                                                                          border="0"
                                                                                                          style="
                                                                                                            -ms-interpolation-mode: bicubic;
                                                                                                            -ms-text-size-adjust: 100%;
                                                                                                            -webkit-text-size-adjust: 100%;
                                                                                                            display: block;
                                                                                                            height: auto;
                                                                                                            margin: auto;
                                                                                                            max-width: 15px;
                                                                                                          "
                                                                                                      /></a>
                                                                                                    </td>
                                                                                                  </tr>
                                                                                                </tbody>
                                                                                              </table>
                                                                                            </td>
                                                                                          </tr>
                                                                                        </tbody>
                                                                                      </table>
                                                                                      <div
                                                                                        class=""
                                                                                        style="
                                                                                          -ms-text-size-adjust: 100%;
                                                                                          -webkit-text-size-adjust: 100%;
                                                                                          font-size: 3px;
                                                                                          height: 3px;
                                                                                          line-height: 3px;
                                                                                          max-width: 15px;
                                                                                        "
                                                                                      >
                                                                                      </div>
                                                                                    </td>
                                                                                    <td
                                                                                      width="15"
                                                                                      style="
                                                                                        -ms-text-size-adjust: 100%;
                                                                                        -webkit-text-size-adjust: 100%;
                                                                                        mso-table-lspace: 0 !important;
                                                                                        mso-table-rspace: 0 !important;
                                                                                        vertical-align: top;
                                                                                      "
                                                                                    >
                                                                                      <div
                                                                                        class=""
                                                                                        style="
                                                                                          -ms-text-size-adjust: 100%;
                                                                                          -webkit-text-size-adjust: 100%;
                                                                                          font-size: 2px;
                                                                                          height: 2px;
                                                                                          line-height: 2px;
                                                                                        "
                                                                                      >
                                                                                      </div>
                                                                                      <table
                                                                                        width="100%"
                                                                                        cellspacing="0"
                                                                                        cellpadding="0"
                                                                                        border="0"
                                                                                        style="
                                                                                          -ms-text-size-adjust: 100%;
                                                                                          -webkit-text-size-adjust: 100%;
                                                                                        "
                                                                                      >
                                                                                        <tbody>
                                                                                          <tr
                                                                                            style="
                                                                                              -ms-text-size-adjust: 100%;
                                                                                              -webkit-text-size-adjust: 100%;
                                                                                            "
                                                                                          >
                                                                                            <td
                                                                                              style="
                                                                                                -ms-text-size-adjust: 100%;
                                                                                                -webkit-text-size-adjust: 100%;
                                                                                                mso-table-lspace: 0 !important;
                                                                                                mso-table-rspace: 0 !important;
                                                                                                vertical-align: top;
                                                                                              "
                                                                                            >
                                                                                              <table
                                                                                                align="left"
                                                                                                cellspacing="0"
                                                                                                cellpadding="0"
                                                                                                border="0"
                                                                                                style="
                                                                                                  -ms-text-size-adjust: 100%;
                                                                                                  -webkit-text-size-adjust: 100%;
                                                                                                "
                                                                                              >
                                                                                                <tbody>
                                                                                                  <tr
                                                                                                    style="
                                                                                                      -ms-text-size-adjust: 100%;
                                                                                                      -webkit-text-size-adjust: 100%;
                                                                                                    "
                                                                                                  >
                                                                                                    <td
                                                                                                      style="
                                                                                                        -ms-text-size-adjust: 100%;
                                                                                                        -webkit-text-size-adjust: 100%;
                                                                                                        mso-table-lspace: 0 !important;
                                                                                                        mso-table-rspace: 0 !important;
                                                                                                        padding-left: 14px;
                                                                                                        vertical-align: top;
                                                                                                      "
                                                                                                    >
                                                                                                      <a
                                                                                                        href="${TIKTOK}"
                                                                                                        style="
                                                                                                          -ms-text-size-adjust: 100%;
                                                                                                          -webkit-text-size-adjust: 100%;
                                                                                                          text-decoration: none;
                                                                                                        "
                                                                                                        ><img
                                                                                                          src="${process.env.IMAGES_BUCKET}tiktok-logo.png"
                                                                                                          width="15"
                                                                                                          alt=""
                                                                                                          border="0"
                                                                                                          style="
                                                                                                            -ms-interpolation-mode: bicubic;
                                                                                                            -ms-text-size-adjust: 100%;
                                                                                                            -webkit-text-size-adjust: 100%;
                                                                                                            display: block;
                                                                                                            height: auto;
                                                                                                            margin: auto;
                                                                                                            max-width: 15px;
                                                                                                          "
                                                                                                      /></a>
                                                                                                    </td>
                                                                                                  </tr>
                                                                                                </tbody>
                                                                                              </table>
                                                                                            </td>
                                                                                          </tr>
                                                                                        </tbody>
                                                                                      </table>
                                                                                      <div
                                                                                        class=""
                                                                                        style="
                                                                                          -ms-text-size-adjust: 100%;
                                                                                          -webkit-text-size-adjust: 100%;
                                                                                          font-size: 3px;
                                                                                          height: 3px;
                                                                                          line-height: 3px;
                                                                                          max-width: 15px;
                                                                                        "
                                                                                      >
                                                                                      </div>
                                                                                    </td>
                                                                                    <td
                                                                                      style="
                                                                                        -ms-text-size-adjust: 100%;
                                                                                        -webkit-text-size-adjust: 100%;
                                                                                        mso-table-lspace: 0 !important;
                                                                                        mso-table-rspace: 0 !important;
                                                                                        vertical-align: top;
                                                                                      "
                                                                                    >
                                                                                      <div
                                                                                        class=""
                                                                                        style="
                                                                                          -ms-text-size-adjust: 100%;
                                                                                          -webkit-text-size-adjust: 100%;
                                                                                          font-size: 2px;
                                                                                          height: 2px;
                                                                                          line-height: 2px;
                                                                                        "
                                                                                      >
                                                                                      </div>
                                                                                      <table
                                                                                        width="100%"
                                                                                        cellspacing="0"
                                                                                        cellpadding="0"
                                                                                        border="0"
                                                                                        style="
                                                                                          -ms-text-size-adjust: 100%;
                                                                                          -webkit-text-size-adjust: 100%;
                                                                                        "
                                                                                      >
                                                                                        <tbody>
                                                                                          <tr
                                                                                            style="
                                                                                              -ms-text-size-adjust: 100%;
                                                                                              -webkit-text-size-adjust: 100%;
                                                                                            "
                                                                                          >
                                                                                            <td
                                                                                              style="
                                                                                                -ms-text-size-adjust: 100%;
                                                                                                -webkit-text-size-adjust: 100%;
                                                                                                mso-table-lspace: 0 !important;
                                                                                                mso-table-rspace: 0 !important;
                                                                                                vertical-align: top;
                                                                                              "
                                                                                            >
                                                                                              <table
                                                                                                align="center"
                                                                                                cellspacing="0"
                                                                                                cellpadding="0"
                                                                                                border="0"
                                                                                                style="
                                                                                                  -ms-text-size-adjust: 100%;
                                                                                                  -webkit-text-size-adjust: 100%;
                                                                                                "
                                                                                              >
                                                                                                <tbody>
                                                                                                  <tr
                                                                                                    style="
                                                                                                      -ms-text-size-adjust: 100%;
                                                                                                      -webkit-text-size-adjust: 100%;
                                                                                                    "
                                                                                                  >
                                                                                                    <td
                                                                                                      style="
                                                                                                        -ms-text-size-adjust: 100%;
                                                                                                        -webkit-text-size-adjust: 100%;
                                                                                                        mso-table-lspace: 0 !important;
                                                                                                        mso-table-rspace: 0 !important;
                                                                                                        padding-left: 13px;
                                                                                                        vertical-align: top;
                                                                                                      "
                                                                                                    >
                                                                                                      <a
                                                                                                        href="${FACEBOOK}"
                                                                                                        style="
                                                                                                          -ms-text-size-adjust: 100%;
                                                                                                          -webkit-text-size-adjust: 100%;
                                                                                                          text-decoration: none;
                                                                                                        "
                                                                                                        ><img
                                                                                                          src="${process.env.IMAGES_BUCKET}facebook-logo.png"
                                                                                                          width="15"
                                                                                                          alt=""
                                                                                                          border="0"
                                                                                                          style="
                                                                                                            -ms-interpolation-mode: bicubic;
                                                                                                            -ms-text-size-adjust: 100%;
                                                                                                            -webkit-text-size-adjust: 100%;
                                                                                                            display: block;
                                                                                                            height: auto;
                                                                                                            margin: auto;
                                                                                                            width: 100%;
                                                                                                          "
                                                                                                      /></a>
                                                                                                    </td>
                                                                                                  </tr>
                                                                                                </tbody>
                                                                                              </table>
                                                                                            </td>
                                                                                          </tr>
                                                                                        </tbody>
                                                                                      </table>
                                                                                      <div
                                                                                        class=""
                                                                                        style="
                                                                                          -ms-text-size-adjust: 100%;
                                                                                          -webkit-text-size-adjust: 100%;
                                                                                          font-size: 3px;
                                                                                          height: 3px;
                                                                                          line-height: 3px;
                                                                                          max-width: 15px;
                                                                                        "
                                                                                      >
                                                                                      </div>
                                                                                    </td>
                                                                                  </tr>
                                                                                </tbody>
                                                                              </table>
                                                                            </td>
                                                                          </tr>
                                                                        </tbody>
                                                                      </table>
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                  <tr
                                                    style="
                                                      -ms-text-size-adjust: 100%;
                                                      -webkit-text-size-adjust: 100%;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        -ms-text-size-adjust: 100%;
                                                        -webkit-text-size-adjust: 100%;
                                                        mso-table-lspace: 0 !important;
                                                        mso-table-rspace: 0 !important;
                                                        vertical-align: top;
                                                      "
                                                    >
                                                      <div
                                                        style="
                                                          -ms-text-size-adjust: 100%;
                                                          -webkit-text-size-adjust: 100%;
                                                          font-size: 25px;
                                                          height: 25px;
                                                          line-height: 25px;
                                                        "
                                                      >
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      -ms-text-size-adjust: 100%;
                                      -webkit-text-size-adjust: 100%;
                                    "
                                  >
                                    <td
                                      style="
                                        -ms-text-size-adjust: 100%;
                                        -webkit-text-size-adjust: 100%;
                                        mso-table-lspace: 0 !important;
                                        mso-table-rspace: 0 !important;
                                        vertical-align: top;
                                      "
                                    >
                                      <table
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                        width="100%"
                                        style="
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <tbody>
                                          <tr
                                            style="
                                              -ms-text-size-adjust: 100%;
                                              -webkit-text-size-adjust: 100%;
                                            "
                                          >
                                            <td
                                              style="
                                                -ms-text-size-adjust: 100%;
                                                -webkit-text-size-adjust: 100%;
                                                mso-table-lspace: 0 !important;
                                                mso-table-rspace: 0 !important;
                                                padding-left: 188px;
                                                text-align: left;
                                                vertical-align: top;
                                              "
                                            >
                                              <div
                                                style="
                                                  -ms-text-size-adjust: 100%;
                                                  -webkit-text-size-adjust: 100%;
                                                  line-height: normal;
                                                "
                                              >
                                                <span
                                                  style="
                                                    -ms-text-size-adjust: 100%;
                                                    -webkit-text-size-adjust: 100%;
                                                    color: #fff;
                                                    font-family: Inter,
                                                      Helvetica, Arial,
                                                      sans-serif;
                                                    font-size: 10px;
                                                    text-align: left;
                                                  "
                                                  >Not Nini 2022 - Todos los
                                                  derechos reservados</span
                                                >
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <div
                                        style="
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                          font-size: 9px;
                                          height: 9px;
                                          line-height: 9px;
                                        "
                                      >
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr
                    style="
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                    "
                  >
                    <td
                      style="
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%;
                        mso-table-lspace: 0 !important;
                        mso-table-rspace: 0 !important;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                          font-size: 1px;
                          height: 1px;
                          line-height: 1px;
                        "
                      >
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
`;

module.exports = {
  forgotPassword,
};
