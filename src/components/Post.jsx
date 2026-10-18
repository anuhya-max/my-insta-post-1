import { useState } from 'react'

function Post({ username, location, image, likesCount, caption }) {
  const [likes, setLikes] = useState(likesCount)
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [comments, setComments] = useState([
    { user: "amazing.photo", text: " adorable!! 😍" },
    { user: "nature", text: "Beautiful! ❤️" }
  ])
  const [newComment, setNewComment] = useState("")

  const addComment = () => {
    if (newComment.trim() === "") return
    setComments([...comments, { user: "you", text: newComment }])
    setNewComment("")
  }

  return (
    <div style={{ maxWidth: '470px', margin: '0 auto 20px', background: 'white', border: '1px solid #dbdbdb', borderRadius: '8px', fontFamily: 'Arial' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '12px', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)', padding: '2px' }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>🐰</div>
          </div>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{username}</div>
            <div style={{ fontSize: '12px', color: '#737373' }}>📍 {location}</div>
          </div>
        </div>
        <div style={{ fontWeight: 'bold' }}>⋯</div>
      </div>

      {/* Image */}
      <img src={image} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }} />

      {/* ALL 4 BUTTONS - LIKE, COMMENT, SHARE, SAVE */}
      <div style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '16px', fontSize: '24px' }}>
        <span onClick={() => { setLiked(!liked); setLikes(liked ? likes-1 : likes+1) }} style={{ cursor: 'pointer' }}>{liked ? '❤️' : '🤍'}</span>
        <span style={{ cursor: 'pointer' }}>💬</span>
        <span style={{ cursor: 'pointer' }}>📤</span>
        <span onClick={() => setSaved(!saved)} style={{ cursor: 'pointer', marginLeft: 'auto' }}>{saved ? '📌' : '🔖'}</span>
      </div>

      {/* Likes + Caption + ALL Comments */}
      <div style={{ padding: '0 12px 12px', fontSize: '14px' }}>
        <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>{likes.toLocaleString()} likes</div>
        <div style={{ marginBottom: '8px' }}><span style={{ fontWeight: 'bold' }}>{username}</span> {caption}</div>
        
        {comments.map((c, i) => (
          <div key={i} style={{ marginTop: '4px' }}>
            <span style={{ fontWeight: 'bold' }}>{c.user}</span> {c.text}
          </div>
        ))}
      </div>

      {/* Add Comment - WORKING */}
      <div style={{ borderTop: '1px solid #efefef', padding: '12px', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <span>😊</span>
        <input 
          type="text" 
          placeholder="Add a comment..." 
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addComment()}
          style={{ flex: 1, border: 'none', outline: 'none', fontSize: '14px' }}
        />
        <span onClick={addComment} style={{ color: '#0095f6', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>Post</span>
      </div>
    </div>
  )
}

export default Post