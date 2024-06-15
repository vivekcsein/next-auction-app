import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/utils";
import React from "react";

import { EyeIcon, EyeOffIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const disabled =
      props.value === "" || props.value === undefined || props.disabled;
    return (
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className={cn(
            " hide-password-toggle pr-10 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-10 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          autoComplete="true"
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
          disabled={disabled}
        >
          {showPassword && !disabled ? (
            <EyeIcon className="h-4 w-4" aria-hidden="true" />
          ) : (
            <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? "Hide password" : "Show password"}
          </span>
        </Button>
      </div>
    );
  }
);

InputPassword.displayName = "InputPassword";

export { InputPassword };
