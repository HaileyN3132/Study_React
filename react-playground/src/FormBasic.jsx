export default function FormBasic() {
  function signup(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const radio = formData.get("employmentStatus");
    console.log(email);
    console.log(password);
    console.log(radio);
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signup}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          defaultValue={"h@gmail.com"}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          defaultValue={123456}
        />
        <br />
        <label htmlFor="discription"></label> Discription
        <textarea
          name="discription"
          id="discription"
          defaultValue={"This is description"}
        ></textarea>
        <br />
        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="full-time" />
            Full-time
          </label>
        </fieldset>
        <br />
        <button>Submit</button>
      </form>
    </section>
  );
}
