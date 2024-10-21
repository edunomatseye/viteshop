import { createLazyFileRoute } from "@tanstack/react-router";
import { forwardRef, useImperativeHandle, useRef, RefObject } from "react";

export const Route = createLazyFileRoute("/_layout/posts")({
  component: PostsIndexComponent,
});

const AddComment = forwardRef<HTMLInputElement>(function AddComment(_, ref) {
  return (
    <>
      <input type="text" name="title" placeholder="type title" ref={ref} />
    </>
  );
});

interface CommentListRef {
  scrollToBottom: () => void;
}

export const CommentList = forwardRef<CommentListRef>((_, ref) => {
  const commentRef: RefObject<HTMLPreElement> = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      scrollToBottom() {
        if (commentRef.current) {
          commentRef.current.scrollTop = commentRef.current.scrollHeight;
        }
      },
    }),
    [],
  );

  const comments = [];
  for (let i = 0; i < 15; i++) {
    comments.push(<p key={i}>Comments # {i}</p>);
  }

  return (
    <>
      <pre
        ref={commentRef}
        className="bg-slate-200 border-solid border-2 border-green-300 rounded-md"
      >
        {comments}
      </pre>
    </>
  );
});

CommentList.displayName = "CommentList";

interface PostRef {
  scrollDownAndFocus: () => void;
}

const Post = forwardRef<PostRef>((_, ref) => {
  const commentRef = useRef<CommentListRef>(null);
  const addRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(
    ref,
    () => ({
      scrollDownAndFocus() {
        commentRef.current?.scrollToBottom();
        addRef.current?.focus();
      },
    }),
    [],
  );
  return (
    <>
      <CommentList ref={commentRef} />
      <AddComment ref={addRef} />
    </>
  );
});

function PostsIndexComponent() {
  const postRef = useRef<PostRef>(null);
  function handleClick() {
    if (postRef.current) {
      postRef.current.scrollDownAndFocus();
    }
  }
  return (
    <div>
      <button onClick={handleClick}>Write a comment!</button>
      <br />
      <span>Welcome to my blog!</span>
      <Post ref={postRef} />
    </div>
  );
}
