console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔준다.


const convertToDiscussion = (agoraStatesDiscussions) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper"; // avatar--wrapper 클래스 이름 지정
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";     // discussion__content 클래스 이름 지정
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";   // discussion__answered 클래스 이름 지정

  // 객체 하나에 담긴 정보를 DOM에 적절히 넣어준다.
  // 프로필 사진(이미지) 

  const avatarImg = document.createElement("img");
  avatarImg.className = "discussion__avatar--image";
  avatarImg.src = agoraStatesDiscussions.avatarUrl;
  avatarImg.alt = `avatar of ${agoraStatesDiscussions.author}`;

  avatarWrapper.append(avatarImg);

  // 내용  

  const titleBox = document.createElement("h2");
  titleBox.className = "discussion__title";   

    const titleLink = document.createElement("a");
    titleLink.href = agoraStatesDiscussions.url;
    titleLink.textContent = agoraStatesDiscussions.title;
    titleBox.append(titleLink);

  const information = document.createElement("div");
  information.className = "discussion__information";   
  information.textContent = `${agoraStatesDiscussions.author} / ${agoraStatesDiscussions.createdAt}`

  discussionContent.append(information)
  discussionContent.append(titleBox);

  // 체크박스
  const checkBox = document.createElement("p");
  checkBox.textContent = "☑";
  discussionAnswered.append(checkBox);

  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수이다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링한다.
const ul = document.querySelector("ul.discussions__container");
render(ul);
