import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import React from "react";

export const CheckboxCompo = React.forwardRef(({ id, label, name }, ref) => {
  return (
    <List className="flex-row">
      <ListItem
        ref={ref}
        className="p-0 inline-flex mx-1 my-1 items-center border ps-4 pe-4 border-gray-200 rounded-full "
        ripple={false}
      >
        <label
          htmlFor={name}
          className="flex  cursor-pointer items-center  py-2"
        >
          <ListItemPrefix className="mr-3">
            <Checkbox
            color="blue"
              id={name}
              ripple={false}
              className="hover:before:opacity-0"
              containerProps={{
                className: "p-0",
              }}
            />
          </ListItemPrefix>
          <Typography color="blue-gray" className="font-medium">
            {name}
          </Typography>
        </label>
      </ListItem>
    </List> 
  );
});
