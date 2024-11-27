// import React from 'react'

// function UserCard({ user }) {
//     return (
//         <div className="container">
//             <div className='m-1'>
//                 <div className="card text-center">
//                     <div className="card-header fs-3 text-uppercase">
//                         {user.name}
//                     </div>
//                     <div className="card-body d-flex">
//                         <div>
//                             <img src={user.photo} alt="" style={{ height: "300px", width: "300px", margin: "15px" }} />
//                         </div>
//                         <div>
//                             <h5 className="card-title">{user.role}</h5>
//                             <p>{user.experience}</p>
//                             <p className="card-text">{user.description}</p>
//                             <p className='fs-3'>Skills</p>
//                             <div className='d-flex '>
//                                 <div className='column text-start'>
//                                     <ul>
//                                         {/* Dynamically render skills */}
//                                         {user.skills.split(',').map((skill, index) => (
//                                             <li key={index}>{skill}</li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                             <a href="#" className="btn btn-primary m-3">Hire</a>
//                             <a href="#" className="btn btn-primary m-3">View</a>
//                         </div>
//                     </div>
//                     <div className="card-footer text-body-secondary text-end ">
//                         <div className='d-flex'>
//                             <div className='column '>
//                                 <div>
//                                     Ratings
//                                 </div>
//                                 <br />
//                                 <div>comments</div>
//                             </div>
//                         </div>
//                         <div>2 days</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default UserCard

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UserCard({ user }) {
    const [reviews, setReviews] = useState([]); // State to store reviews
    const [rating, setRating] = useState(0); // Rating state for new review
    const [comment, setComment] = useState(""); // Comment state for new review
    const [userType, setUserType] = useState(""); // Store the current user's type (employer or candidate)
    const navigate = useNavigate();
    const { id } = useParams

    // Check if the current user is a candidate or an employer
    useEffect(() => {
        const currentUserType = localStorage.getItem("userType"); // Assuming userType is stored in localStorage
        setUserType(currentUserType);
    }, []);

    // Fetch reviews for the user (freelancer) on component mount
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/freelancers/${user._id}/reviews`); // Fetch reviews for this freelancer
                setReviews(response.data.reviews || []); // Set the fetched reviews
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchReviews();
    }, [id]);

    // Handle review submission by candidate
    const handleSubmitReview = async () => {
        if (rating === 0 || comment === "") {
            alert("Please provide a rating and a comment.");
            return;
        }

        try {
            const reviewData = {
                freelancerId: user._id,
                clientId: localStorage.getItem("userId"), // Assuming the logged-in user's ID is stored in localStorage
                rating,
                comment,
            };

            const response = await axios.post("http://localhost:3000/reviews", reviewData); // POST the new review

            if (response.data) {
                // Update the reviews list with the new review
                setReviews((prevReviews) => [response.data.review, ...prevReviews]);
                setRating(0);
                setComment("");
                alert("Review submitted successfully.");
            } else {
                alert("Failed to submit review.");
            }
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };

    return (
        <div className="container">
            <div className="m-1">
                <div className="card text-center">
                    <div className="card-header fs-3 text-uppercase">{user.name}</div>
                    <div className="card-body d-flex">
                        <div>
                            <img
                                src={user.photo}
                                alt=""
                                style={{ height: "300px", width: "300px", margin: "15px" }}
                            />
                        </div>
                        <div>
                            <h5 className="card-title">{user.role}</h5>
                            <p>{user.experience}</p>
                            <p className="card-text">{user.description}</p>
                            <p className="fs-3">Skills</p>
                            <div className="d-flex">
                                <div className="column text-start">
                                    <ul>
                                        {/* Dynamically render skills */}
                                        {user.skills.split(",").map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <a href="#" className="btn btn-primary m-3">
                                Hire
                            </a>
                            {/* <button className="btn btn-primary m-3" onClick={navigate(`/Profile/${user._id}`)} >
                                View
                            </button> */}
                        </div>
                    </div>

                    {/* Display reviews and ratings */}
                    <div className="card-footer text-body-secondary text-start">
                        <h5 className="mt-3">Reviews and Ratings:</h5>
                        {reviews.length > 0 ? (
                            reviews.map((review) => (
                                <div key={review._id} className="border-bottom mb-2">
                                    <strong>Rating:</strong> {review.rating} ⭐<br />
                                    <strong>Comment:</strong> {review.comment}
                                    <br />
                                    {review.response && (
                                        <div>
                                            <strong>Response:</strong> {review.response}
                                        </div>
                                    )}
                                    <div className="text-end text-muted">
                                        <small>{new Date(review.createdAt).toLocaleDateString()}</small>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No reviews available yet.</p>
                        )}

                        {/* Display review form for candidates only */}
                        {userType === "employer" && (
                            <div className="mt-3">
                                <h5>Submit a Review</h5>
                                <div className="mb-2">
                                    <label>Rating:</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        min="1"
                                        max="5"
                                        value={rating}
                                        onChange={(e) => setRating(Number(e.target.value))}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label>Comment:</label>
                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    ></textarea>
                                </div>
                                <button className="btn btn-primary" onClick={handleSubmitReview}>
                                    Submit Review
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserCard;

