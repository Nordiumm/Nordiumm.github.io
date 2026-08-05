import { useEffect, useState } from "react";

function GithubStats() {

    const [stats, setStats] = useState({

        repos: 0,
        stars: 0

    });


    useEffect(() => {

        async function fetchGithub() {

            const username = "Nordiumm";


            const userResponse = await fetch(
                `https://api.github.com/users/${username}`
            );

            const userData = await userResponse.json();



            const reposResponse = await fetch(
                `https://api.github.com/users/${username}/repos?per_page=100`
            );

            const repos = await reposResponse.json();



            const stars = repos.reduce(

                (total, repo) =>
                    total + repo.stargazers_count,

                0

            );





            setStats({

                repos: userData.public_repos,

                stars: stars,

            });

        }


        fetchGithub();


    }, []);



    return (

        <section className="github-stats">

            <h2>
                GitHub
            </h2>


            <div className="github-stats-container">


                <div className="github-stat-card">

                    <h3>
                        {stats.repos}
                    </h3>

                    <p>
                        Repositories
                    </p>

                </div>



                <div className="github-stat-card">

                    <h3>
                        {stats.stars}
                    </h3>

                    <p>
                        Stars
                    </p>

                </div>


            </div>

        </section>

    );

}

export default GithubStats;