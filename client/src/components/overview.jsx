import { NavLink } from "react-router-dom"

function Overview() {
  return (
    <div className="overview">
      <h3 className="overview_title">Moderator Role Overview</h3>
      <div>
        <p className="overview_text">Moderator and admin roles are volunteer roles. There is no pay. There is no minimum time requirement, but if an moderator or admin is inactive for more than 3 weeks of the busy season (active winter weather), they will be replaced. This is not a “punishment.” It is just to ensure that active moderators and admin are not taking on too much of a workload. </p>
        <p className="overview_text">PURPOSE of moderators and admin is to maintain a safe and efficient group environment for members to post and seek road relevant conditions.</p>
      </div>


      <p className="overview_text">This is accomplished by the Mod-min team performing the following duties:</p>
      <p className="overview_text" id="spaced_line">APPROVING legitimate new member requests:</p>
      <ul>
        <li id="list_title">These are requests that:</li>
        <li>- Answer all of the membership questions</li>
        <li>- —OR—From someone you have mutual friends</li>
        <li>- You can verify that they are a real account from the relevant area</li>
      </ul>
      <p className="overview_text">DECLINING spam new member requests:</p>
      <p className="overview_text">These are requests that:</p>
      <ul>
        <li>Have not answered all of the membership questions</li>
        <li>—OR—Do not appear to be a real person (new account, no profile pic, no other activity, etc)</li>
        <li>Are not from the relevant area</li>
      </ul>
      <p className="overview_text"><em>There is room for discretion here, but moderators and admin should not feel the need to spend a lot of time investigating. That is what the questions are for.</em></p>
      <p className="overview_text" id="spaced_line">REMOVING outdated posts (generally 12 hours, but during rapidly changing conditions, this could even be as often as hourly)</p>
      <p className="overview_text" id="spaced_line">RESPONDING to moderation alerts and reports objectively.</p>
      <p className="overview_text">Not every alert or report merits any action. Take time to decide if it is a disruption or violates any of the rules.</p>
      <p className="overview_text">If it the reported content is a violation, remove it AND check the violated rule(s), so that the member is aware of why the content was removed. If it is not, then the report can be ignored.</p>
      <p className="overview_text">Furthermore, a member repeatedly and over a long period of time reports content that is not in violation of any rules, alert a group admin, so that we can help that member review the rules.</p>
      <p className="overview_text">Moderators and admin are not expected to continually police the group (spending time going through each bit of content), but if you see something in passing that violates a rule but has not been reported, you are empowered to remove the content at your discretion.</p>
      <p className="overview_text" id="spaced_line">If a member direct messages you, you are empowered to respond at your discretion, but you can also refer them to an admin. If anyone harasses you or threatens you via Messenger, please disengage and report the conversation to law enforcement as soon as possible.</p>
      <p className="overview_text">BANNING members. The goal of this page is to be a helpful resource, and banning should never be the first response. It is good practice to start with the benefit of the doubt first and only ban a member if the issue persists. It is not a power move to be used flippantly, but it sometimes becomes necessary to protect the overall quality of the group. As with anything, if you are unsure what the right decision is, please feel free to confer with other moderators or admin.</p>
      <div className="link_button"><NavLink to={'/apply'}>Apply</NavLink></div>
    </div>
  )
}

export default Overview