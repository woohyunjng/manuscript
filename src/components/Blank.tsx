import { StyledBlank } from "./styled";

interface BlankProps {
    focus: boolean;
    value: string;
    set: (val: any) => void;
}

const Blank = ({ focus, value, set }: BlankProps) => {
    return (
        <StyledBlank
            min={1}
            max={9}
            value={value}
            onChange={set}
            status={focus ? "warning" : undefined}
        />
    );
};

export default Blank;
