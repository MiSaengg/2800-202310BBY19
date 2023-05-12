"use client";
// import { getMainThreadById } from "@/lib/prisma/mainThreads";
import React, { useEffect, useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import Modal from "@/app/components/modal/Modal";
import SimpleProfileCardInfo from "@/app/components/card/SimpleProfileCard";
import ProfileCardInfo from "@/app/components/card/profileCardInfo";

import ConnectorLine from "@/app/components/box/ConnectorLine";
import MainThreadBox from "@/app/components/box/mainTreadBox";
import LReadTextBox from "@/app/components/box/LReadTextBox";
import RReadTextBox from "@/app/components/box/RReadTextBox";
import UbranchTreadBox from "@/app/components/box/UbranchTreadBox";

// async function getMainThreadByIds(threadId){
//   const { thread } = await getMainThreadById(threadId)
//   if(!thread){
//     throw new Error('failed to fetch data')
//   }
//   return thread
// }

export default function Page({ params }) {
  const [branchThread, setBranchThread] = useState([]);
  const [mainThread, setMainThread] = useState({});
  const [userId, setUserId] = useState("");
  const [branchThreadNo, setBranchThreadNo] = useState(0);
  const [bodies, setBodies] = useState([]);

  let arrayThing = [
    {
      targetId: "element0",
      sourceAnchor: "bottom",
      targetAnchor: "top",
      style: { strokeDasharray: "5,5" },
    },
    {
      targetId: "element1",
      sourceAnchor: "bottom",
      targetAnchor: "top",
      style: { strokeDasharray: "5,5" },
    },
    {
      targetId: "element2",
      sourceAnchor: "bottom",
      targetAnchor: "top",
      style: { strokeDasharray: "5,5" },
    },
  ];

  useEffect(() => {
    const endpoint = `/api/threads/${params.threadId}`;

    fetch(endpoint, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ mainThread }) => {
        const data = mainThread.phaseStage;
        const content = mainThread.content;
        var values = Object.values(data);
        setBranchThread(values);
        setMainThread(mainThread);
        setUserId(mainThread.userId);
        setBranchThreadNo(Object.keys(mainThread.phaseStage).length);
        const bodies = Object.values(content).map((item) => item.body);
        setBodies(bodies);
        console.log(bodies);
        console.log(mainThread.pilot);
      });
  }, []);

  return (
    <>
      {mainThread.phase === 5 || mainThread.tag === "Complete" ? (
        <>
          <RReadTextBox body={mainThread.pilot} />
          {bodies.map((body, index) => (
            <React.Fragment key={index}>
              <ConnectorLine />
              {index % 2 === 0 ? (
                <LReadTextBox body={body} />
              ) : (
                <RReadTextBox body={body} />
              )}
            </React.Fragment>
          ))}
          {/* <UbranchTreadBox body={body} /> */}
        </>
      ) : (
        <>
          <h3 style={{ textAlign: "center" }}>{mainThread.title}</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              textAlign: "center",
              alignItems: "center",
              padding: "4px",
            }}
          >
            <ArcherContainer strokeColor="black">
              <ArcherElement id="root" relations={arrayThing}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      border: "grey solid 2px",
                      borderRadius: "10px",
                      padding: "5px",
                      width: "60%",
                    }}
                  >
                    {mainThread.contentBody}
                  </div>
                  {userId ? (
                    <ProfileCardInfo
                      genre={mainThread.genre}
                      userId={userId}
                      mainCharacter={mainThread.mainCharacter}
                    />
                  ) : null}
                </div>
              </ArcherElement>

              <div
                style={{
                  backgroundColor: "black",
                  color: "white",
                  marginTop: 4,
                  position: "relative",
                  zIndex: 10,
                }}
              >
                <h2>phase {mainThread.phase}</h2>
              </div>
              <Modal
                branchThread={branchThread}
                mainThreadId={params}
                phaseStage={branchThreadNo}
              />

              <div
                style={{
                  display: "flex",
                  height: "150px",
                  justifyContent: "space-evenly",
                  textAlign: "center",
                }}
              >
                {branchThread.map((a, i) => (
                  <ArcherElement id={"element" + i} key={i}>
                    <div>
                      <SimpleProfileCardInfo
                        userId={a.userId}
                        branchText={a.body}
                        branchThreadIdParam={a.id}
                        mainThreadIdParam={a.mainThreadId}
                        ownerUserId={userId}
                      />
                    </div>
                  </ArcherElement>
                ))}
              </div>
            </ArcherContainer>
          </div>
        </>
      )}
    </>
  );
}
