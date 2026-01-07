const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <>
      <Part content={props.content1} />
      <Part content={props.content2} />
      <Part content={props.content3} />
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.content[0]} {props.content[1]}
    </p>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises_total}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";

  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        content1={[part1, exercises1]}
        content2={[part2, exercises2]}
        content3={[part3, exercises3]}
      />
      <Total exercises_total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
