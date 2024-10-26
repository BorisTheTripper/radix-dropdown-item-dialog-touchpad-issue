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
  DropdownMenuTrigger,
} from './components/ui/dropdown-menu';

function App() {
  return (
    <div className="h-[20%] grid place-items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>open dropdown</Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <Dialog>
            <DialogTrigger asChild>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                open dialog
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Dialog</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis iste illum in quaerat delectus, repellendus neque
                non possimus, consectetur dicta saepe corrupti provident culpa.
                Incidunt rerum esse pariatur officia labore.
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default App;
