"use client";
// import { getMainThreadById } from "@/lib/prisma/mainThreads";
import React, { useEffect, useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import Modal from "@/app/components/modal/Modal";
import SimpleProfileCardInfo from "@/app/components/card/SimpleProfileCard";
import ProfileCardInfo from "@/app/components/card/profileCardInfo";

import ConnectorLine from "@/app/components/box/ConnectorLine";
import LReadTextBox from "@/app/components/box/LReadTextBox";
import RReadTextBox from "@/app/components/box/RReadTextBox";
import Contributors from "@/app/components/ui/Contributors";
import LikesCompleteButton from "@/app/components/button/LikesCompleteButton";

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
  const [users, setUsers] = useState([]);
  const [mainUserImage, setMainUserImage] = useState("");
  const [loginUserId, setLoginUserId] = useState("");

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
    const userIdLogin = localStorage.getItem("userID");
    setLoginUserId(userIdLogin);

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
        const contributors = Object.values(content).map((item) => item.userId);
        setBodies(bodies);

        Promise.all([
          fetch(`/api/users/${mainThread.userId}`).then((res) => res.json()),
          ...contributors.map((userId) =>
            fetch(`/api/users/${userId}`).then((res) => res.json())
          ),
        ])
          .then(([mainUser, ...usersData]) => {
            const mainUserImage = mainUser?.user?.image;
            const users = usersData.map((userData) => userData.user);
            setUsers(users);
            setMainUserImage(mainUserImage);
          })
          .catch((error) => {
            console.log("Error fetching users:", error);
          });
      });
  }, []);

  return (
    <>
      {mainThread.phase === 6 || mainThread.tag === "complete" ? (
        <>
          <div className="flex flex-row justify-between">
            <div className="basis-1/2"></div>
            <div className="basis-1/3 flex justify-center mr-2">
              <Contributors
                mainUserImage={mainUserImage}
                contributorsImg={users}
              />
            </div>
          </div>
          <h4 style={{ textAlign: "center", fontSize: "20px", margin: "20px" }}>
            {"< "}
            {mainThread.title}
            {" >"}
          </h4>
          <RReadTextBox
            body={mainThread.pilot}
            image={mainUserImage}
            phase={"0"}
          />
          {bodies.map((body, index) => (
            <React.Fragment key={index}>
              <ConnectorLine />
              {index % 2 === 0 ? (
                <LReadTextBox
                  body={body}
                  image={users[index]?.image}
                  phase={index + 1}
                />
              ) : (
                <RReadTextBox
                  body={body}
                  image={users[index]?.image}
                  phase={index + 1}
                />
              )}
            </React.Fragment>
          ))}
          <LikesCompleteButton
            mainThreadId={mainThread.id}
            loginUserId={loginUserId}
            mainThread={mainThread}
          />
        </>
      ) : (
        <>
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: "15px",
              }}
            >
              {userId ? (
                <ProfileCardInfo
                  genre={mainThread.genre}
                  userId={userId}
                  mainCharacter={mainThread.mainCharacter}
                  title={mainThread.title}
                  phase={mainThread.phase}
                />
              ) : null}

            </div>

            <ArcherContainer strokeColor="black">
              <ArcherElement id="root" relations={arrayThing}>
                  <div className="mx-10 px-6 py-4 rounded-lg text-base text-neutral-600 bg-white border-b-2 leading-relaxed border-neutral-100 shadow-xl">
                    {mainThread.contentBody}
                  </div>
              </ArcherElement>

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
