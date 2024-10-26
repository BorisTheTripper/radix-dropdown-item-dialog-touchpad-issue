import { useState } from 'react';
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
  const [reportReason, setReportReason] = useState<string | null>(null);

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
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>report post</DropdownMenuSubTrigger>

              <DropdownMenuSubContent>
                <DialogTrigger asChild>
                  <DropdownMenuItem
                    onSelect={(e) => {
                      e.preventDefault();
                      setReportReason('spam');
                    }}
                  >
                    Spam
                  </DropdownMenuItem>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <DropdownMenuItem
                    onSelect={(e) => {
                      e.preventDefault();
                      setReportReason('toxicity');
                    }}
                  >
                    Toxicity
                  </DropdownMenuItem>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <DropdownMenuItem
                    onSelect={(e) => {
                      e.preventDefault();
                      setReportReason(null);
                    }}
                  >
                    Other
                  </DropdownMenuItem>
                </DialogTrigger>

                <DialogContent>
                  <DialogTitle>Report post</DialogTitle>
                  <DialogDescription>
                    Cited reason: <strong>{reportReason}</strong>
                  </DialogDescription>
                </DialogContent>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </Dialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default App;
