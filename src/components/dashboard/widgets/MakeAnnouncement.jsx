import { useState } from "react";
// import API from "../../services/api";

function MakeAnnouncement({ onPosted }){

  const [title,setTitle] = useState("");
  const [message,setMessage] = useState("");
  const [loading,setLoading] = useState(false);
  const [success,setSuccess] = useState(false);


  const handleSubmit = async(e)=>{

    e.preventDefault();

    try{

      setLoading(true);
      setSuccess(false);

      // await API.post("/announcements",{

      //   title,
      //   message

      // });

      setTitle("");
      setMessage("");

      setSuccess(true);

      // refresh announcement list
      if(onPosted){
        onPosted();
      }

    }
    catch(err){

      console.error(err);

      alert("Error posting announcement");

    }
    finally{

      setLoading(false);

    }

  };


  return(

    <div className="
      bg-bgCard
      text-textMain
      border border-borderColor
      rounded-xl
      p-5
      space-y-4
      shadow-sm
    ">

      <h2 className="text-lg font-semibold">

        Make Announcement

      </h2>



      <form
        onSubmit={handleSubmit}
        className="space-y-3"
      >

        <input
          type="text"
          placeholder="Announcement title"
          className="
            w-full
            p-2
            rounded-lg
            border border-borderColor
            bg-bgMain
            focus:outline-none
          "
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          required
        />


        <textarea
          placeholder="Write message..."
          className="
            w-full
            p-2
            rounded-lg
            border border-borderColor
            bg-bgMain
            focus:outline-none
          "
          rows={3}
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          required
        />


        <button
          type="submit"
          disabled={loading}
          className="
            bg-primaryGradient
            text-white
            px-4
            py-2
            rounded-lg
            hover:bg-primaryHover
            transition
          "
        >

          {loading ? "Posting..." : "Post"}

        </button>


        {

          success && (

            <p className="text-sm opacity-70">

              Announcement posted successfully

            </p>

          )

        }

      </form>

    </div>

  );

}

export default MakeAnnouncement;