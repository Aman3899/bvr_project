import Particles from "react-tsparticles";
import { useCallback, useMemo } from "react";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = (props) => {
    const particlesInit = useCallback(async (engine) => {
        // This function initializes the engine
        console.log(engine); // Optional: Debug log
        await loadSlim(engine); // Load slim version for reduced bundle size
    }, []);

    const particlesLoaded = useCallback((container) => {
        console.log(container); // Optional: Debug log for loaded particles
    }, []);

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#415758FF", // Set background color
                },
            },
            fpsLimit: 120, // Limit frames per second
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse", // Repulse particles on click
                    },
                    onHover: {
                        enable: true,
                        mode: "grab", // Grab particles on hover
                    },
                },
                modes: {
                    push: {
                        distance: 200,
                        duration: 15,
                    },
                    grab: {
                        distance: 150,
                    },
                },
            },
            particles: {
                color: {
                    value: "#FFFFFF", // Particle color
                },
                links: {
                    color: "#FFFFFF",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 150, // Number of particles
                },
                opacity: {
                    value: 1.0,
                },
                shape: {
                    type: "circle", // Shape of particles
                },
                size: {
                    value: { min: 1, max: 3 }, // Size range
                },
            },
            detectRetina: true, // Optimize for retina displays
        }),
        [],
    );

    return (
        <Particles
            id={props.id}
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
        />
    );
};

export default ParticlesComponent;