import { Button } from './components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './components/ui/dropdown-menu';

function App() {
  return (
    <div className="h-full grid place-items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>open dropdown</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>...</DropdownMenuItem>
          <DropdownMenuItem>...</DropdownMenuItem>
          <Dialog>
            <DialogTrigger asChild>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                open dialog
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>dialog title</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                cupiditate, aut expedita dolores sunt doloribus, id facere odit
                a dignissimos non qui autem, delectus repellat odio voluptatum
                eos quas incidunt placeat dolorum minima officia. Tenetur
                deserunt accusantium sunt nostrum accusamus? Totam velit minima
                laboriosam consequatur quam nisi! Veniam, sunt sint!
              </DialogDescription>
            </DialogContent>
          </Dialog>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>trigger submenu</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>...</DropdownMenuItem>
              <DropdownMenuItem>...</DropdownMenuItem>
              <Dialog>
                <DialogTrigger asChild>
                  <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    open dialog
                  </DropdownMenuItem>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>dialog title</DialogTitle>
                  <DialogDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae cupiditate, aut expedita dolores sunt doloribus, id
                    facere odit a dignissimos non qui autem, delectus repellat
                    odio voluptatum eos quas incidunt placeat dolorum minima
                    officia. Tenetur deserunt accusantium sunt nostrum
                    accusamus? Totam velit minima laboriosam consequatur quam
                    nisi! Veniam, sunt sint!
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default App;
