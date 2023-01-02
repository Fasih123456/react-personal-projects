function ProfileCard({ title, handle, image, description }) {
  return (
    <div>
      <div class="card" style={{ width: "18rem", border: "0px", alignItems: "center" }}>
        <img style={{ maxWidth: "8rem" }} src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{handle}</h6>
          <p class="card-text">{description}</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
