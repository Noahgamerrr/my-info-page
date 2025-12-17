import { useEffect, useRef } from "react";
import Two from "two.js";
import TechnologiesData from "@/public/data/technologies.json";
import Matter, { Engine } from "matter-js";
import { Group } from "two.js/src/group";
import { Text } from "two.js/src/text";
import { Circle } from "two.js/src/shapes/circle";
import MatterAttractors from "matter-attractors";
import { Rectangle } from "two.js/src/shapes/rectangle";
import { Shape } from "two.js/src/shape";

// eslint-disable-next-line react-hooks/rules-of-hooks
Matter.use(MatterAttractors);

const technologyEntries = TechnologiesData as string[];

interface Body extends Matter.Body {
    object: Group
}

interface MyGroup extends Group {
    isWord: boolean,
    text: Text,
    circle: Circle,
    entity: Body
}

function isMyGroup(object: any): object is MyGroup {
    return 'isWord' in object;
}

interface MyRectangle extends Rectangle {
    entity: Matter.Body
}

interface Boundaries {
    top: MyRectangle,
    left: MyRectangle,
    right: MyRectangle,
    bottom: MyRectangle
}

export default function Technologies() {
    const canvas = useRef<HTMLDivElement | null>(null);
    const two = useRef<Two | null>(null);
    const entities = useRef<Body[]>([]);
    const solver = useRef<Engine | null>(null);
    const boundsVector = useRef(new Two.Vector());
    const mouse = useRef<Matter.MouseConstraint | undefined>(undefined);

    const bounds = useRef({
        length: 5000,
        thickness: 50,
        properties: {
            isStatic: true
        },
        boundaries: null as Boundaries | null
    });

    function createBoundary(width: number, height: number) {
        if (!two.current) return null;
        const rectangle = two.current.makeRectangle(0, 0, width, height) as MyRectangle;
        rectangle.visible = false;

        rectangle.entity = Matter.Bodies.rectangle(
            0,
            0,
            width,
            height,
            bounds.current.properties
        );
        rectangle.entity.position = rectangle.position;

        return rectangle;
    }

    function createBoundaries(height: number, width: number) {
        const boundaries = {} as Boundaries

        const boundaryTop = createBoundary(height, width);
        const boundaryLeft = createBoundary(width, height);
        const boundaryRight = createBoundary(width, height);
        const boundaryBottom = createBoundary(height, width);

        if (!boundaryTop || ! boundaryBottom || !boundaryLeft || !boundaryRight) return null;

        boundaries.top = boundaryTop;
        boundaries.left = boundaryLeft;
        boundaries.right = boundaryRight;
        boundaries.bottom = boundaryBottom;

        return boundaries;
    }

    function resize() {
        if (!bounds.current.boundaries || !two.current) return;
        const length = bounds.current.length;
        const thickness = bounds.current.thickness;

        boundsVector.current.x = two.current.width / 2;
        boundsVector.current.y = - thickness / 2;
        Matter.Body.setPosition(bounds.current.boundaries.top.entity, boundsVector.current);

        boundsVector.current.x = -thickness / 2;
        boundsVector.current.y = two.current.height / 2;
        Matter.Body.setPosition(bounds.current.boundaries.left.entity, boundsVector.current);

        boundsVector.current.x = two.current.width + thickness / 2;
        boundsVector.current.y = two.current.height / 2;
        Matter.Body.setPosition(bounds.current.boundaries.right.entity, boundsVector.current);

        boundsVector.current.x = two.current.width / 2;
        boundsVector.current.y = two.current.height + thickness / 2;
        Matter.Body.setPosition(bounds.current.boundaries.bottom.entity, boundsVector.current);

        let size;

        if (two.current.width < 480) {
            size = two.current.width * 0.04;
        } else if (two.current.width > 1080 && two.current.width < 1600) {
            size = two.current.width * 0.01;
        } else if (two.current.width > 1600) {
            size = two.current.width * 0.02;
        } else {
            size = two.current.width * 0.02;
        }

        const leading = size * 0.8;

        for (let i = 0; i < two.current.scene.children.length; i++) {
            const child = two.current.scene.children[i] as Shape | MyGroup;

            if (!isMyGroup(child)) {
                continue;
            }

            const text = child.text;
            const circle = child.circle;
            const entity = child.entity;

            text.size = size;
            text.leading = leading;

            const rect = text.getBoundingClientRect(true);
            const newRadius = rect.width + 5;

            Matter.Body.scale(entity, 1 / circle.radius, 1 / circle.radius);
            Matter.Body.scale(entity, newRadius, newRadius);
            entity.circleRadius = newRadius;
            circle.radius = newRadius;
            console.log(entity.position)
            console.log(child.position)
        }
    }

    function initTwo() {
        if (!canvas.current) return;
        const params = {
            type: Two.Types.canvas,
            fitted: true,
            autostart: true
        }
        two.current = new Two(params).appendTo(canvas.current);
        two.current.bind("resize", resize).bind("update", update);
        solver.current = Matter.Engine.create();

        const attractor = Matter.Bodies.circle(two.current.width / 2, two.current.height / 2, 10, {
            plugin: {
                attractors: [
                    function (bodyA: Body, bodyB: Body) {
                        return {
                            x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                            y: (bodyA.position.y - bodyB.position.y) * 1e-6,
                        }
                    }
                ]
            },
            isStatic: true
        });

        solver.current.gravity.scale = 0;
        Matter.World.add(solver.current.world, attractor);

        bounds.current.boundaries = createBoundaries(bounds.current.length, bounds.current.thickness);

        if (!bounds.current.boundaries) return;

        Matter.World.add(solver.current.world, [
            bounds.current.boundaries.top.entity,
            bounds.current.boundaries.left.entity,
            bounds.current.boundaries.right.entity,
            bounds.current.boundaries.bottom.entity
        ])
    }

    function addMouseInteraction() {
        // add mouse control
        if (!solver.current || !canvas.current) return;
        const mouse = Matter.Mouse.create(canvas.current);
        const mouseConstraint = Matter.MouseConstraint.create(solver.current, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2
            }
        });

        mouseConstraint.mouse.element.removeEventListener("wheel", mouseConstraint.mouse.mousewheel);

        Matter.World.add(solver.current.world, mouseConstraint);

        return mouseConstraint;
    }

    function createTechnologyElements() {
        if (!two.current || !solver.current) return;

        const defaultStyles = {
            size: two.current.width * 0.01,
            weight: 400,
            fill: "white",
            leading: two.current.width * 0.08 * 0.8,
            family: "Angus, Arial, sans-serif",
            alignment: "center",
            baseline: "baseline",
            margin: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }
        };

        const radius = 45;
        const x = two.current.width * 0.5;
        const y = two.current.height * 0.5;

        for (const tech of technologyEntries) {
            const word = tech;
            const group = new Two.Group() as MyGroup;
            const text = new Two.Text(word, 0, 0, defaultStyles);


            group.isWord = true;
            group.translation.x = x;
            group.translation.y = y;
            text.translation.y = 5;

            const circle = new Two.Circle(0, 0, radius);
            circle.fill = '#ed9e5e';
            circle.noStroke()
            circle.visible = true;

            const entity = Matter.Bodies.circle(x, y, radius) as Body;
            entity.object = group;
            entities.current.push(entity);

            group.text = text;
            group.circle = circle;
            group.entity = entity;

            group.add(circle, text);
            two.current.add(group);
        }
        Matter.World.add(solver.current.world, entities.current);
    }

    function update(frameCount: number, timeDelta: number) {
        if (!mouse.current) return;
        if (!solver.current) return;
        const allBodies = Matter.Composite.allBodies(solver.current.world);
        Matter.MouseConstraint.update(mouse.current, allBodies);
        Matter.MouseConstraint._triggerEvents(mouse.current);

        Matter.Engine.update(solver.current);

        for (let i = 0; i < entities.current.length; i++) {
            const entity = entities.current[i];
            entity.object.position.copy(entity.position);
        }
    }

    useEffect(() => {
        initTwo();
        createTechnologyElements();
        resize();
        mouse.current = addMouseInteraction();
    }, []);

    return (
        <div className="h-screen w-full" ref={canvas}>
            <p className="font-bold text-6xl sticky top-1/8">Technologies</p>
        </div>
    )
}