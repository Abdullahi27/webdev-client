export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h4>Student Profile</h4>

      <h5>Text Fields</h5>
      <label htmlFor="wd-your-first-name">First name:</label>
      <input
        id="wd-your-first-name"
        type="text"
        defaultValue="Abdullahi"
      />
      <br />

      <label htmlFor="wd-your-last-name">Last name:</label>
      <input
        id="wd-your-last-name"
        type="text"
        defaultValue="Abdirahman"
      />
      <br />

      <label htmlFor="wd-your-password">Password:</label>
      <input
        id="wd-your-password"
        type="password"
        defaultValue="liverpool08"
      />

      <h5>Biography</h5>
      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={5}
        defaultValue="I am studying computer science and want to improve my web development skills and become more comfortable building full web applications."
      />

      <h5>Class Standing</h5>
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-your-freshman"
      />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-your-sophomore"
      />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-your-junior"
      />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-your-senior"
      />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-your-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>

      <h5>Enrollment Status</h5>
      <input
        type="radio"
        name="wd-your-enrollment"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />
      <input
        type="radio"
        name="wd-your-enrollment"
        id="wd-your-part-time"
      />
      <label htmlFor="wd-your-part-time">Part-time</label>

      <h5>Interests</h5>
      <input
        type="checkbox"
        id="wd-your-web-development"
        defaultChecked
      />
      <label htmlFor="wd-your-web-development">Web Development</label>
      <br />
      <input
        type="checkbox"
        id="wd-your-databases"
        defaultChecked
      />
      <label htmlFor="wd-your-databases">Databases</label>
      <br />
      <input
        type="checkbox"
        id="wd-your-cybersecurity"
        defaultChecked
      />
      <label htmlFor="wd-your-cybersecurity">Cybersecurity</label>

      <h5>Major</h5>
      <label htmlFor="wd-your-major">Major:</label>
      <br />
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="CYBER">Cybersecurity</option>
        <option value="IS">Information Systems</option>
      </select>

      <h5>Topics I Want to Learn More About</h5>
      <select
        id="wd-your-topics"
        multiple
        defaultValue={["REACT", "NEXT"]}
      >
        <option value="REACT">React</option>
        <option value="NEXT">Next.js</option>
        <option value="DATABASES">Databases</option>
        <option value="SECURITY">Web Security</option>
        <option value="APIS">APIs</option>
      </select>

      <h5>Other Information</h5>
      <label htmlFor="wd-your-email">School email:</label>
      <input
        id="wd-your-email"
        type="email"
        defaultValue="abdirahman.a@northeastern.edu"
      />
      <br />

      <label htmlFor="wd-your-graduation-year">
        Expected graduation year:
      </label>
      <input
        id="wd-your-graduation-year"
        type="number"
        defaultValue="2027"
        min={2026}
        max={2035}
      />
      <br />

      <label htmlFor="wd-your-program-start">
        Program start date:
      </label>
      <input
        id="wd-your-program-start"
        type="date"
        defaultValue="2024-09-04"
      />
      <br />

      <label htmlFor="wd-your-excitement">
        Excitement about this course:
      </label>
      <input
        id="wd-your-excitement"
        type="range"
        min="0"
        max="10"
        defaultValue="10"
      />
      <br />

      <button id="wd-your-save" type="submit">
        Save
      </button>
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}