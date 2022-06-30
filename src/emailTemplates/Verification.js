const verification = (url, code, deleteUrl) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    
    <head style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
      <meta charset="utf-8" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
      <meta name="viewport" content="width=device-width" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
      <meta http-equiv="X-UA-Compatible" content="IE=edge" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
      <meta name="x-apple-disable-message-reformatting" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
      <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no"
        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
      <title style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">email_Verificación de email</title>
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
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
    </head>
    
    <body width="100%"
      style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;margin:0;mso-line-height-rule:exactly;padding:0!important">
      <style>
        @media only screen and (min-device-width:320px) and (max-device-width:374px) {
          u~div .email-container {
            min-width: 320px !important
          }
        }
    
        @media only screen and (min-device-width:375px) and (max-device-width:413px) {
          u~div .email-container {
            min-width: 375px !important
          }
        }
    
        @media only screen and (min-device-width:414px) {
          u~div .email-container {
            min-width: 414px !important
          }
        }
    
        @media only screen and (max-device-width:599px),
        only screen and (max-width:599px) {
          .eh {
            height: auto !important
          }
    
          .desktop {
            display: none !important;
            height: 0 !important;
            margin: 0 !important;
            max-height: 0 !important;
            overflow: hidden !important;
            padding: 0 !important;
            visibility: hidden !important;
            width: 0 !important
          }
    
          .mobile {
            display: block !important;
            width: auto !important;
            height: auto !important;
            float: none !important
          }
    
          .email-container {
            width: 100% !important;
            margin: auto !important
          }
    
          .stack-column,
          .stack-column-center {
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            direction: ltr !important
          }
    
          .stack-column-center {
            text-align: center !important
          }
    
          .center-on-narrow {
            text-align: center !important;
            display: block !important;
            margin-left: auto !important;
            margin-right: auto !important;
            float: none !important
          }
    
          table.center-on-narrow {
            display: inline-block !important
          }
        }
      </style>
      <div style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;background-color:#f2f2f2">
        <!--[if gte mso 9]>
                                    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                                    <v:fill type="tile" color="#f2f2f2"/>
                                    </v:background>
                                    <![endif]-->
        <table width="100%" cellpadding="0" cellspacing="0" border="0"
          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
          <tbody>
            <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
              <td
                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;background-color:#f2f2f2;border-collapse:separate!important;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top"
                valign="top" align="center">
                <table bgcolor="#ffffff" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;margin:0 auto"
                  align="center" id="brick_container" cellspacing="0" cellpadding="0" border="0" width="600"
                  class="email-container">
                  <tbody>
                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                      <td width="115"
                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                        <div
                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:43px;height:43px;line-height:43px">
                           </div>
                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                          <tbody>
                            <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                              <td
                                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                <table align="left" cellspacing="0" cellpadding="0" border="0"
                                  style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                  <tbody>
                                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                      <td
                                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;padding-left:243px;vertical-align:top">
                                        <img src="${process.env.IMAGES_BUCKET}logoTachCabecera.png" width="115" alt="" border="0"
                                          style="-ms-interpolation-mode:bicubic;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;display:block;height:auto;margin:auto;max-width:115px">
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
                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                      <td width="233"
                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                        <div
                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:37px;height:37px;line-height:37px">
                           </div>
                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                          <tbody>
                            <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                              <td
                                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                <table align="left" cellspacing="0" cellpadding="0" border="0"
                                  style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                  <tbody>
                                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                      <td
                                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;padding-left:183px;vertical-align:top">
                                        <img src="${process.env.IMAGES_BUCKET}verificationEmail.png" width="233" alt="" border="0"
                                          style="-ms-interpolation-mode:bicubic;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;display:block;height:auto;margin:auto;max-width:233px">
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
                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                      <td
                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                        <div
                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:42px;height:42px;line-height:42px">
                           </div>
                      </td>
                    </tr>
                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                      <td
                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                        <table align="center" cellspacing="0" cellpadding="0" border="0"
                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                          <tbody>
                            <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                              <td
                                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;border-collapse:separate!important;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                <table cellspacing="0" cellpadding="0" border="0" width="100%"
                                  style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                  <tbody>
                                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                      <td
                                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                        <table cellspacing="0" cellpadding="0" border="0" width="100%"
                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                          <tbody>
                                            <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                              <td
                                                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;text-align:center;vertical-align:top">
                                                <div
                                                  style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:normal">
                                                  <span
                                                    style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#025ed7;font-family:Work Sans,Helvetica,Arial,sans-serif;font-size:34px;font-weight:700;text-align:center">Verificá
                                                    tu correo electrónico ingresando éste código</span></div>
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
                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                      <td
                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                        <div
                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:36px;height:36px;line-height:36px">
                           </div>
                      </td>
                    </tr>
                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                      <td
                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                        <table align="center" cellspacing="0" cellpadding="0" border="0"
                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                          <tbody>
                            <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                              <td
                                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;border-collapse:separate!important;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                <table cellspacing="0" cellpadding="0" border="0" width="100%"
                                  style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                  <tbody>
                                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                      <td
                                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                        <table cellspacing="0" cellpadding="0" border="0" width="100%"
                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                          <tbody>
                                            <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                              <td
                                                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;text-align:center;vertical-align:top">
                                                <div
                                                  style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:normal">
                                                  <span
                                                    style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#38475d;font-family:Work Sans,Helvetica,Arial,sans-serif;font-size:34px;font-weight:700;text-align:center">${code}</span></div>
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
                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                      <td
                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                        <div
                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:39px;height:39px;line-height:39px">
                           </div>
                      </td>
                    </tr>
                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                      <td
                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                        <table align="center" cellspacing="0" cellpadding="0" border="0"
                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                          <tbody>
                            <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                              <td
                                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;border-collapse:separate!important;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                <table cellspacing="0" cellpadding="0" border="0" width="100%"
                                  style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                  <tbody>
                                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                      <td
                                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                        <table cellspacing="0" cellpadding="0" border="0" width="100%"
                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                          <tbody>
                                            <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                              <td
                                                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;text-align:center;vertical-align:top">
                                                <div
                                                  style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:normal">
                                                  <span
                                                    style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#000;font-family:Work Sans,Helvetica,Arial,sans-serif;font-size:13px;text-align:center">El
                                                    código de verificación estará activo durante 50 segundos<br
                                                      style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">Por
                                                    favor, evitá compartirlo con otras personas.</span></div>
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
                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                      <td
                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                        <div
                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:16px;height:16px;line-height:16px">
                           </div>
                      </td>
                    </tr>
                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                      <td
                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;padding-left:127px;padding-right:126px;vertical-align:top">
                        <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%"
                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                          <tbody>
                            <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                              <td
                                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                <div style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                  <!--[if mso]>
                                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${url}" style="height:51px;v-text-anchor:middle;width:347px;" fillcolor="#006cff"  stroke="f" arcsize="20%">
                                                    <w:anchorlock/>
                                                    <center style="white-space: nowrap; display:inline-block;color:#ffffff;font-family:Lato, Helvetica, Arial, sans-serif; font-size:16px;text-align:center;font-weight: 700;">Ingresar código</center>
                                                    </v:roundrect>
                                                    <![endif]--> <a href="${url}"
                                    style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:none;background-color:#006cff;border-radius:10px;color:#fff;display:inline-block;font-family:Lato,Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;line-height:51px;mso-hide:all;text-align:center;text-decoration:none;white-space:nowrap;width:100%">Ingresar
                                    código</a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                      <td
                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                        <div
                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:24px;height:24px;line-height:24px">
                           </div>
                        <table cellspacing="0" cellpadding="0" border="0" width="100%"
                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                          <tbody>
                            <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                              <td
                                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;padding-left:90px;padding-right:90px;text-align:center;vertical-align:top">
                                <div style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:normal">
                                  <span
                                    style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#000;font-family:Work Sans,Helvetica,Arial,sans-serif;font-size:13px;text-align:center">Si
                                    estás recibiendo este mail, pero no iniciaste registro en nuestra plataforma, hace
                                  </span><span
                                    style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#006cff;font-family:Work Sans,Helvetica,Arial,sans-serif;font-size:13px;text-align:center"><a
                                      style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#006cff;font-family:Work Sans,Helvetica,Arial,sans-serif;font-size:13px;text-align:center;text-decoration:none"
                                      href="${deleteUrl}">click aquí</a></span><span
                                    style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#000;font-family:Work Sans,Helvetica,Arial,sans-serif;font-size:13px;text-align:center">
                                    , para que te eliminemos de nuestras bases de usuarios.</span></div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                      <td
                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                        <div
                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:37px;height:37px;line-height:37px">
                           </div>
                      </td>
                    </tr>
                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                      <td
                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                        <table width="100%" align="center" cellspacing="0" cellpadding="0" border="0"
                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                          <tbody>
                            <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                              <td width="600" bgcolor="#38475d"
                                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                <table cellspacing="0" cellpadding="0" border="0" width="100%"
                                  style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                  <tbody>
                                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                      <td
                                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                        <div
                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:21px;height:21px;line-height:21px">
                                           </div>
                                        <table cellspacing="0" cellpadding="0" border="0" width="100%"
                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                          <tbody>
                                            <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                              <td
                                                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;padding-left:268px;padding-right:276px;text-align:center;vertical-align:top">
                                                <div
                                                  style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:normal">
                                                  <span
                                                    style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#e9f0fe;font-family:Work Sans,Helvetica,Arial,sans-serif;font-size:10px;text-align:center">${process.env.DOMAIN}</span>
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                      <td
                                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                        <div
                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:8px;height:8px;line-height:8px">
                                           </div>
                                      </td>
                                    </tr>
                                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                      <td
                                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;padding-left:183px;vertical-align:top;width:234px">
                                        <table align="left" cellspacing="0" cellpadding="0" border="0"
                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                          <tbody>
                                            <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                              <td width="234"
                                                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;border-collapse:separate!important;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                                <table cellspacing="0" cellpadding="0" border="0" width="100%"
                                                  style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                                  <tbody>
                                                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                                      <td width="79"
                                                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                                        <div class=""
                                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:6px;height:6px;line-height:6px">
                                                           </div>
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                                          <tbody>
                                                            <tr
                                                              style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                                              <td
                                                                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                                                <table align="left" cellspacing="0" cellpadding="0"
                                                                  border="0"
                                                                  style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                                                  <tbody>
                                                                    <tr
                                                                      style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                                                      <td
                                                                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;padding-left:16px;vertical-align:top">
                                                                        <img src="${process.env.IMAGES_BUCKET}logoTachFooter.png"
                                                                          width="79" alt="" border="0"
                                                                          style="-ms-interpolation-mode:bicubic;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;display:block;height:auto;margin:auto;max-width:79px">
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                      <td width="24"
                                                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                                        <div class=""
                                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:9px;height:9px;line-height:9px">
                                                           </div>
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                                          <tbody>
                                                            <tr
                                                              style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                                              <td
                                                                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                                                <table align="left" cellspacing="0" cellpadding="0"
                                                                  border="0"
                                                                  style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                                                  <tbody>
                                                                    <tr
                                                                      style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                                                      <td
                                                                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;padding-left:69px;vertical-align:top">
                                                                        <a href="${process.env.FACEBOOK}"
                                                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;text-decoration:none"><img
                                                                            src="${process.env.IMAGES_BUCKET}facebook.png"
                                                                            width="24" alt="" border="0"
                                                                            style="-ms-interpolation-mode:bicubic;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;display:block;height:auto;margin:auto;max-width:24px"></a>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                      <td width="25"
                                                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                                        <div class=""
                                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:9px;height:9px;line-height:9px">
                                                           </div>
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                                          <tbody>
                                                            <tr
                                                              style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                                              <td
                                                                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                                                <table align="left" cellspacing="0" cellpadding="0"
                                                                  border="0"
                                                                  style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                                                  <tbody>
                                                                    <tr
                                                                      style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                                                      <td
                                                                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;padding-left:7px;vertical-align:top">
                                                                        <a href="${process.env.INSTAGRAM}"
                                                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;text-decoration:none"><img
                                                                            src="${process.env.IMAGES_BUCKET}instagram.png"
                                                                            width="25" alt="" border="0"
                                                                            style="-ms-interpolation-mode:bicubic;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;display:block;height:auto;margin:auto;max-width:25px"></a>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <div class=""
                                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:4px;height:4px;line-height:4px;max-width:25px">
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
                                    <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                      <td
                                        style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;vertical-align:top">
                                        <div
                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:18px;height:18px;line-height:18px">
                                           </div>
                                        <table cellspacing="0" cellpadding="0" border="0" width="100%"
                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                          <tbody>
                                            <tr style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                              <td
                                                style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0!important;mso-table-rspace:0!important;padding-left:179px;padding-right:179px;text-align:center;vertical-align:top">
                                                <div
                                                  style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:normal">
                                                  <span
                                                    style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#e9f0fe;font-family:Work Sans,Helvetica,Arial,sans-serif;font-size:10px;text-align:center">tach
                                                    2021 - Todos los derechos reservados. </span></div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <div
                                          style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:10px;height:10px;line-height:10px">
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
      </div>
    </body>
    
    </html>`;

module.exports = {
  verification,
};
