const MEMBERS = [
  {
    "name": "Nguyễn Hải Anh",
    "short": "Hải Anh",
    "role": "Thành viên",
    "tagline": "Technology enthusiast · Aspiring Software Developer",
    "about": "Tôi là sinh viên ngành Công nghệ thông tin tại Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM. Tôi có tính cách hướng nội, yêu thích các sản phẩm công nghệ và luôn quan tâm đến những xu hướng, ứng dụng mới trong lĩnh vực này. Tôi có thế mạnh về công nghệ, đồng thời chủ động học hỏi và trau dồi kiến thức để hoàn thiện bản thân.",
    "team": "Tôi mong muốn được học hỏi, chia sẻ kinh nghiệm và phối hợp cùng các thành viên để xây dựng một môi trường làm việc nhóm tích cực, năng động và hiệu quả.",
    "goal": "Trở thành nhà phát triển phần mềm (Software Developer), không ngừng phát triển kiến thức chuyên môn, nâng cao kỹ năng và tích lũy kinh nghiệm."
  },
  {
    "name": "Tô Minh Cường",
    "short": "Minh Cường",
    "role": "Thành viên",
    "tagline": "Computer · Music · Technology",
    "about": "Tôi là sinh viên ngành Công nghệ thông tin (chương trình tăng cường tiếng Anh) tại Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM. Tôi khá hướng nội, đôi khi rụt rè và hay lo lắng; yêu thích máy tính, âm nhạc và quan tâm đến lĩnh vực công nghệ. Tôi vẫn đang khám phá thế mạnh của bản thân và mong muốn học hỏi, hoàn thiện mình qua những trải nghiệm mới.",
    "team": "Tôi mong muốn được học hỏi, chia sẻ kinh nghiệm và cùng các thành viên xây dựng một môi trường làm việc nhóm tích cực.",
    "goal": "Đạt được thành công về tài chính và trở thành người có chuyên môn vững vàng trong lĩnh vực mình theo đuổi."
  },
  {
    "name": "Trần Đức Dương",
    "short": "Đức Dương",
    "role": "Thành viên",
    "tagline": "Data · AI · Problem solving",
    "about": "Tôi là sinh viên ngành Công nghệ thông tin (chương trình tăng cường tiếng Anh) tại Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM. Tôi cởi mở, năng động, yêu thích công nghệ và đặc biệt quan tâm đến Data và AI. Tôi có thế mạnh về phân tích và giải quyết vấn đề liên quan đến số liệu, đồng thời luôn mong muốn học hỏi và hoàn thiện bản thân.",
    "team": "Tôi mong muốn được học hỏi, chia sẻ kinh nghiệm và cùng các thành viên xây dựng một môi trường làm việc nhóm tích cực.",
    "goal": "Trở thành Data Engineer và không ngừng phát triển bản thân trên con đường học tập cũng như sự nghiệp."
  },
  {
    "name": "Nguyễn Trí Hiếu",
    "short": "Trí Hiếu",
    "role": "Nhóm trưởng",
    "tagline": "Outgoing · Curious · Team leader",
    "about": "Tôi là sinh viên ngành Công nghệ thông tin (chương trình tăng cường tiếng Anh) tại Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM. Tôi hướng ngoại, tự tin và hòa đồng; yêu thích ngủ, khám phá và trải nghiệm những điều mới mẻ. Tôi vẫn đang khám phá thế mạnh của bản thân và mong muốn học hỏi, hoàn thiện mình qua những trải nghiệm mới.",
    "team": "Với vai trò nhóm trưởng, tôi mong muốn được học hỏi, chia sẻ kinh nghiệm và cùng các thành viên xây dựng một môi trường làm việc nhóm tích cực, sáng tạo và hiệu quả.",
    "goal": "Hướng đến mục tiêu giàu có và nổi tiếng, đồng thời không ngừng phát triển bản thân trên con đường học tập cũng như sự nghiệp."
  },
  {
    "name": "Trần Võ Sông Hương",
    "short": "Sông Hương",
    "role": "Thành viên",
    "tagline": "Mathematics · Teaching · Research",
    "about": "Tôi là sinh viên ngành Công nghệ thông tin (chương trình tăng cường tiếng Anh) tại Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM. Tôi khá hướng nội, yêu thích khám phá những điều mới mẻ và quan tâm đến lĩnh vực giảng dạy, nghiên cứu. Tôi có thế mạnh về Toán học và luôn mong muốn mở rộng kiến thức, phát triển năng lực bản thân.",
    "team": "Tôi mong muốn được học hỏi, chia sẻ kinh nghiệm và cùng các thành viên xây dựng một môi trường làm việc nhóm tích cực, nơi mọi người có thể hỗ trợ và phát triển cùng nhau.",
    "goal": "Trở thành giảng viên đại học, đồng thời không ngừng trau dồi kiến thức chuyên môn và hoàn thiện bản thân."
  },
  {
    "name": "Bùi Đỗ Duy Khang",
    "short": "Duy Khang",
    "role": "Thành viên",
    "tagline": "Programming · Software · IT Consulting",
    "about": "Tôi là sinh viên ngành Công nghệ thông tin (chương trình tăng cường tiếng Anh) tại Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM. Tôi khá hướng nội, yêu thích lập trình và quan tâm đến lĩnh vực phát triển phần mềm. Tôi luôn sẵn sàng tiếp thu kiến thức mới, rèn luyện tư duy logic và hoàn thiện bản thân thông qua những trải nghiệm thực tế.",
    "team": "Tôi mong muốn được học hỏi, chia sẻ kinh nghiệm và cùng các thành viên xây dựng một môi trường làm việc nhóm tích cực, nơi mọi người có thể hỗ trợ và phát triển cùng nhau.",
    "goal": "Trở thành IT Consultant, đồng thời trau dồi kiến thức chuyên môn, nâng cao các kỹ năng cần thiết và phát triển bản thân."
  }
];

const grid = document.getElementById("memberGrid");
const modal = document.getElementById("profileModal");
const fields = {
  name: document.getElementById("profileName"),
  role: document.getElementById("profileRole"),
  tagline: document.getElementById("profileTagline"),
  about: document.getElementById("profileAbout"),
  team: document.getElementById("profileTeam"),
  goal: document.getElementById("profileGoal")
};

MEMBERS.forEach((member, index) => {
  const card = document.createElement("article");
  card.className = "member-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Xem hồ sơ ${member.name}`);
  card.innerHTML = `
    <div class="member-photo">
      <span class="member-number">0${index + 1} / 06</span>
      <span class="photo-placeholder">MEMBER<br>PHOTO</span>
    </div>
    <div class="member-info">
      <span class="member-role">${member.role}</span>
      <h3>${member.name}</h3>
      <p>${member.tagline}</p>
      <div class="member-link">Xem hồ sơ <span>↗</span></div>
    </div>`;
  card.addEventListener("click", () => openProfile(index));
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProfile(index);
    }
  });
  grid.appendChild(card);
});

function openProfile(index) {
  const member = MEMBERS[index];
  fields.name.textContent = member.name;
  fields.role.textContent = member.role.toUpperCase();
  fields.tagline.textContent = member.tagline;
  fields.about.textContent = member.about;
  fields.team.textContent = member.team;
  fields.goal.textContent = member.goal;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.querySelector(".close-modal").focus();
}
function closeProfile() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
modal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeProfile));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeProfile();
});
