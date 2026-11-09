import Lesson from "./Lesson";
import ModuleControlButtons from "./ModuleControlButtons";

import {
  useModulesStore,
  type CourseModule,
} from "../../../store/modulesStore";

export default function Module({
  module,
}: {
  module: CourseModule;
}) {
  const updateModule = useModulesStore(
    (state) => state.updateModule
  );

  return (
    <li className="wd-module mb-4 list-none border border-neutral-300">
      <div className="flex items-center justify-between border-l-4 border-green-600 bg-neutral-200 px-3 py-2 font-semibold">
        <div className="min-w-0 flex-1">
          {module.editing ? (
            <input
              className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
              defaultValue={module.name}
              onChange={(e) =>
                updateModule({
                  ...module,
                  name: e.target.value,
                })
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  updateModule({
                    ...module,
                    editing: false,
                  });
                }
              }}
            />
          ) : (
            module.name
          )}
        </div>

        <ModuleControlButtons
          moduleId={module._id}
        />
      </div>

      <ul className="m-0 list-none p-0">
        {module.lessons?.map((lesson) => (
          <Lesson
            key={lesson._id}
            title={lesson.name}
          />
        ))}
      </ul>
    </li>
  );
}