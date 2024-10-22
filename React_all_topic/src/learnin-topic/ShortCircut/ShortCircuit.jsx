const ShortCircuit = () => {
  return (
    <div className="flex flex-col gap-6 capitalize">
      <div>
        {/* the output will be render the first condition  for both is tur */}
        <p>
          {10 < 20 || 20 < 30
            ? "its the first condition for both are true"
            : "its the second condition for both are false"}
        </p>

        {/* the output will be render for second condition is true so overall is true */}
        <p>
          {false || 20 < 30
            ? "it will render the first conditon for second conditon  are true"
            : "its the second condition for both are false"}
        </p>
        {/* conditon will be check  both are true if is not it will rander second conditon */}
        <p>
          {10 > 20 || 20 > 30
            ? "it will render the first conditon "
            : "its the second condition for both are false"}
        </p>
      </div>
      <div>
        {/* logical and (&&) */}

        {/* in logical and condition will check if left is true then check right if both are true it will render first condition either one is false it will render second condition */}

        <p>
          {10 < 20 && 20 > 10
            ? "true will be rander because both are true"
            : "false will be rander because one of are false "}
        </p>

        <p>
          {10 < 20 && false
            ? "true will be rander because both are true"
            : "false will be rander because one of are false "}
        </p>

        <p>
          {false && false
            ? "true will be rander because both are true"
            : "false will be rander because both of are false "}
        </p>
      </div>
      {/* nullish coalescing operator (??) */}
      <div>
        {/* nullis coalescing is takes false value only [null, undefined] and "'",0 it dont take it false */}
        <p>
          {null ?? "i am a value insert in string the first conditon is null "}
        </p>
        <p>
          {undefined ??
            "i am a value insert in string the first conditon is undefined "}
        </p>
      </div>
    </div>
  );
};

export default ShortCircuit;

{
  /*Short-circuit evaluation in React (and JavaScript in general) refers to the concept where logical operators (&& and ||) are used to conditionally render JSX components or execute expressions without needing an explicit if statement. */
}

{
  /*1. Logical AND (&&) Operator:
In React, the && operator is often used to conditionally render elements. If the left-hand expression is true, the right-hand expression will be evaluated and rendered; if the left-hand expression is false, the right-hand expression will not be evaluated. */
}

{
  /* 2. Logical OR (||) Operator:
The || operator can be used to provide a fallback value. It evaluates the left-hand expression and returns it if it's "truthy"; otherwise, it evaluates and returns the right-hand expression. */
}
