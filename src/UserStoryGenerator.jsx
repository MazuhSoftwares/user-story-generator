import { useEffect, useReducer, useRef, useState } from "react";

export default function UserStoryGenerator() {
  const [state, dispatch] = useReducer(reducer, {
    persona: "pessoa",
    intent: "fazer algo",
    goal: "alcance meu objetivo",
  });

  const handleUserChange = (persona) =>
    dispatch({ type: "update_persona", persona });

  const handleTaskChange = (intent) =>
    dispatch({ type: "update_intent", intent });

  const handleGoalChange = (goal) => dispatch({ type: "update_goal", goal });

  const [isClipboardMessageVisible, setClipboardMessageVisible] =
    useState(false);

  useEffect(() => {
    if (!isClipboardMessageVisible) {
      return () => {};
    }

    const timer = setTimeout(() => setClipboardMessageVisible(false), 5000);
    return () => clearTimeout(timer);
  }, [isClipboardMessageVisible]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(
      `Como ${state.persona}, devo poder ${state.intent}, para que ${state.goal}.`
    );
    setClipboardMessageVisible(true);
  };

  return (
    <div>
      <p>
        Clique nos espaços tracejados para editá-los e preencher a história:
      </p>
      <p className="user-story-paragraph">
        Como{" "}
        <EditableStoryDetail onChange={handleUserChange}>
          {state.persona}
        </EditableStoryDetail>
        , devo poder{" "}
        <EditableStoryDetail onChange={handleTaskChange}>
          {state.intent}
        </EditableStoryDetail>{" "}
        , para que{" "}
        <EditableStoryDetail onChange={handleGoalChange}>
          {state.goal}
        </EditableStoryDetail>
        .
      </p>
      <p>
        <button type="button" onClick={handleCopyClick}>
          📋 Copiar
        </button>
      </p>
      <p
        className={isClipboardMessageVisible ? "" : "no-visibility"}
        aria-hidden={!isClipboardMessageVisible}
      >
        <small>Pronto. Copiado para sua área de transferência!</small>
      </p>
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "update_persona":
      return { ...state, persona: action.persona };
    case "update_intent":
      return { ...state, intent: action.intent };
    case "update_goal":
      return { ...state, goal: action.goal };
    default:
      return state;
  }
}

function EditableStoryDetail(props) {
  const elementRef = useRef(null);

  const setValue = (typedValue) => {
    const updatingValue = typedValue.trim() || props.children;
    elementRef.current.textContent = updatingValue;

    if (props.onChange) {
      props.onChange(updatingValue);
    }
  };

  const handleKeyDown = (event) => {
    if (["Enter", "Esc"].includes(event.key)) {
      event.preventDefault();
      elementRef.current.blur();
    }
  };

  const handleFocus = (event) => {
    const element = event.target;

    const range = document.createRange();
    range.selectNodeContents(element);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const handleBlur = (event) => {
    const value = event.target.textContent;
    setValue(value);
  };

  return (
    <strong
      {...props}
      ref={(element) => (elementRef.current = element)}
      className="editable-story-detail"
      contentEditable={true}
      suppressContentEditableWarning={true}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}
