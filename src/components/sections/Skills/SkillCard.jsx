import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaPython,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiMongodb,
    SiExpress,
    SiFirebase,
    SiSupabase,
    SiMysql,
    SiTailwindcss,
    SiBootstrap,
    SiAndroid,
} from "react-icons/si";

export default function SkillCard({ skill }) {

    function getSkillIcon(icon) {

        switch (icon.toLowerCase()) {

            case "react":
                return <FaReact />;

            case "nodejs":
                return <FaNodeJs />;

            case "mongodb":
                return <SiMongodb />;

            case "express":
                return <SiExpress />;

            case "firebase":
                return <SiFirebase />;

            case "supabase":
                return <SiSupabase />;

            case "html":
                return <FaHtml5 />;

            case "css":
                return <FaCss3Alt />;

            case "javascript":
                return <FaJs />;

            case "python":
                return <FaPython />;

            case "mysql":
                return <SiMysql />;

            case "tailwind":
                return <SiTailwindcss />;

            case "bootstrap":
                return <SiBootstrap />;

            case "git":
                return <FaGitAlt />;

            case "android":
                return <SiAndroid />;

            default:
                return <FaReact />;

        }

    }

    return (

        <div
            className="skill-card"
            id={`skill-card-${skill.id}`}
        >

            <div
                className="skill-card-glow"
                style={{
                    background: skill.color,
                }}
            ></div>

            <div className="skill-card-header">

                <div
                    className="skill-card-icon"
                    style={{
                        color: skill.color,
                    }}
                >

                    {getSkillIcon(skill.icon)}

                </div>

                <div className="skill-card-info">

                    <h3>

                        {skill.name}

                    </h3>

                    <span>

                        {skill.category}

                    </span>

                </div>

            </div>

            <div className="skill-progress">

                <div className="skill-progress-top">

                    <span>Proficiency</span>

                    <span>

                        {skill.percentage}%

                    </span>

                </div>

                <div className="skill-progress-bar">

                    <div
                        className="skill-progress-fill"
                        style={{
                            width: `${skill.percentage}%`,
                            background: skill.color,
                        }}
                    ></div>

                </div>

            </div>

        </div>

    );

}