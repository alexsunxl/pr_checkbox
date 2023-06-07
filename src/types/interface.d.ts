

interface CheckboxState {
    name: string;
    checked: boolean;
}

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type CheckboxTableProps = {
    data: CheckboxState[];
    // rows: number;
    cols: number;
    onChange: (checks: CheckboxState[]) => void;
};

