import React from "react";

import { ZoomMtg } from "@zoom/meetingsdk";
import { Button, Heading, Stack, VStack } from "@chakra-ui/react";

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();

function Test() {
  var authEndpoint = "http://localhost:8080/zoom/generate-signature";
  var sdkKey = "ipIZALKmSm2d4F_Vh_K3cw";
  var meetingNumber = "81484554160";
  var passWord = "B422L5";
  var role = 0;
  var userName = "React";
  var userEmail = "";
  var registrantToken = "";
  var zakToken = "";
  var leaveUrl = "http://localhost:3000/test";

  function getSignature(e) {
    e.preventDefault();

    fetch(authEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        meetingNumber: meetingNumber,
        role: role,
        expirationSeconds: 3000,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response.signature);
        startMeeting(response.signature);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function startMeeting(signature) {
    document.getElementById("zmmtg-root").style.display = "block";

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      patchJsMedia: true,
      leaveOnPageUnload: true,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature: signature,
          sdkKey: sdkKey,
          meetingNumber: meetingNumber,
          passWord: passWord,
          userName: userName,
          userEmail: userEmail,
          tk: registrantToken,
          zak: zakToken,
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  return (
    <VStack p={16}>
      <Heading>Zoom Meeting SDK Sample React</Heading>
      <Button onClick={getSignature}>Join Meeting</Button>
    </VStack>
  );
}

export default Test;
