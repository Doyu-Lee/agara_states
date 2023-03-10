console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔준다.
// 샘플 시간 가독성 높이기 
// .toISOString()

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
  information.textContent = `${agoraStatesDiscussions.author} / ${new Date(agoraStatesDiscussions.createdAt).toLocaleString().slice(0, -3)}`


  discussionContent.append(titleBox);
  discussionContent.append(information);

  // 체크박스
  const checkBoxLabel = document.createElement("label");
  checkBoxLabel.className = "container";
  const inputBox = document.createElement("input");
  inputBox.type = "checkbox";
  
  if(agoraStatesDiscussions.answer === null) 
  {  inputBox.checked = "";} else {inputBox.checked = "checked";}
  

  
  
  
  const checkMarkBox = document.createElement("div");
  checkMarkBox.className = "checkmark";

  checkBoxLabel.append(inputBox)
  checkBoxLabel.append(checkMarkBox)


  discussionAnswered.append(checkBoxLabel);

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




console.clear();
const randomX = random(-400, 400);
const randomY = random(-200, 200);
const randomDelay = random(0, 50);
const randomTime = random(6, 12);
const randomTime2 = random(5, 6);
const randomAngle = random(-30, 150);

const blurs = gsap.utils.toArray(".blur");
blurs.forEach((blur) => {
  gsap.set(blur, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1)
  });

  moveX(blur, 1);
  moveY(blur, -1);
  rotate(blur, 1);
});

function rotate(target, direction) {
  gsap.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  gsap.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  gsap.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}


// submit 버튼을 누르면 - 이름, 제목, 질문을 가져온다 - 아바타는 랜덤 - 
// form.addEventListener('submit', createAgoraDiscussion)

const submitBtn = document.querySelector("button")
submitBtn.addEventListener('click', submitContentResult)

function submitContentResult(event) {
  console.log('click')
	event.preventDefault()

  let userName = document.querySelector('#name').value
  let userTitle = document.querySelector('#title').value
  let userStory = document.querySelector('#story').value

	// 객체를 생성해 폼에서 입력받은 값을 넣어 준다. 
  let newOne = {
    id: "new id",
    createdAt: new Date().toISOString(),
    title: userTitle ,
    url: "https://github.com/codestates-seb/agora-states-fe/discussions",
    author: userName,
    bodyHTML: userStory,
    answer: null,
    avatarUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbkDKJe%2Fbtr2ZCJESvs%2FCmmMIpR2tKLJLoqbHuVNn0%2Fimg.png"
  }

  const catUrl = [
    {avatarUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbTMXyl%2Fbtr2ZDIxQrH%2FOkZqBNhDsfoARokCnzl0Vk%2Fimg.png"
    },
    {avatarUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZdFsi%2Fbtr2Riytli6%2FTG76kTmYkZwFWM9f3Njte1%2Fimg.png"
    },
    {avatarUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlLU58%2Fbtr2QK22XA5%2FoS1IhF5MgHA3fqZdlvGM1K%2Fimg.png"
    },
    {avatarUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fzv7J0%2Fbtr2PVjf3yc%2FspnJdzwlWdKxqQ9loNtRIK%2Fimg.png"
    },
    {avatarUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fw8IfD%2Fbtr20ALlACg%2FmoPsKgDaC6Up2oCH6VyKLk%2Fimg.png"
    },
    {avatarUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FuIv3R%2Fbtr2QLgwaio%2FKMyLNydEO1kkLeXeOcBS11%2Fimg.png"
    },
    {avatarUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcL0dAj%2Fbtr2ZymThID%2FbpOBOk1Yv0ChVMTOzfw240%2Fimg.png"
    },
    {avatarUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTANiX%2Fbtr22OChAqw%2F7CQcEqtsV9hIl4tZGoCCH0%2Fimg.png"
    },
    {avatarUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fzv7J0%2Fbtr2PVjf3yc%2FspnJdzwlWdKxqQ9loNtRIK%2Fimg.png"
    },
    {avatarUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlLU58%2Fbtr2QK22XA5%2FoS1IhF5MgHA3fqZdlvGM1K%2Fimg.png"
    },
    
  ]
  const todaysCat = catUrl[Math.floor(Math.random() * catUrl.length)];
  newOne.avatarUrl = todaysCat.avatarUrl

agoraStatesDiscussions.unshift(newOne);
const discussion = convertToDiscussion(newOne);
ul.prepend(discussion);

// **** 초기화되는 방법!!
// title = "";
// userName = "";
// userStory = "";
const form = document.querySelector("form")
form.reset();

// 페이지네이션 구현하기 

// let numOfContent = agoraStatesDiscussions.length
// let countPage = Math.ceil ( totalQuestions / 10)
// let page = 1;

}


// 메뉴바  