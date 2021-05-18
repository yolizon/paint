
import {of, from, Observable, fromEvent} from 'rxjs'
import {scan, map} from 'rxjs/operators'

fromEvent(document.querySelector('canvas'), 'mousemove')
  .pipe(
    map(e => ({
      x: e.offsetX,
      y: e.offsetY,
      ctx: e.target.getContext('2d')
    }))
  )
  .subscribe(pos => {
    pos.ctx.fillRect(pos.x, pos.y, 2, 2)
  })
  const clear$ = fromEvent(document.getElementById('clear'), 'click')
  
  clear$.subscribe(() => {
    const canvas = document.querySelector('canvas')
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
  })
