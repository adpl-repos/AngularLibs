# Angular Reachability

A lightweight Angular service for monitoring network connectivity and reachability in your Angular applications.

## Features

- Check if a specific URL is reachable
- Monitor online/offline status changes
- Simple and easy to use API
- TypeScript support
- Angular 19 compatible

## Installation

```bash
npm install @adplorg/angular-reachability
```

## Usage

### 1. Import the Service

```typescript
import { AngularReachabilityService } from '@adplorg/angular-reachability';

@Component({
  selector: 'app-root',
  template: '...'
})
export class AppComponent {
  constructor(private reachability: AngularReachabilityService) {}
}
```

### 2. Check URL Reachability

```typescript
async checkConnection() {
  try {
    const isReachable = await this.reachability.isReachable('https://api.example.com');
    if (isReachable) {
      console.log('URL is reachable');
    } else {
      console.log('URL is not reachable');
    }
  } catch (error) {
    console.error('Error checking reachability:', error);
  }
}
```

### 3. Monitor Online Status

```typescript
monitorOnlineStatus() {
  this.reachability.onConnect().subscribe(message => {
    console.log(message); // "you are online"
  });
}
```

### 4. Monitor Offline Status

```typescript
monitorOfflineStatus() {
  this.reachability.onDisconnect().subscribe(message => {
    console.log(message); // "you are offline"
  });
}
```

## API Reference

### `isReachable(url: string): Promise<boolean>`
Checks if a specific URL is reachable.
- **Parameters:**
  - `url`: The URL to check for reachability
- **Returns:** Promise that resolves to `true` if the URL is reachable, `false` otherwise

### `onConnect(): Observable<string>`
Returns an Observable that emits when the device goes online.
- **Returns:** Observable that emits "you are online" when the device connects

### `onDisconnect(): Observable<string>`
Returns an Observable that emits when the device goes offline.
- **Returns:** Observable that emits "you are offline" when the device disconnects

## Requirements

- Angular 19.x
- TypeScript 5.x
- RxJS 7.x

## License

MIT

## Support

For support, please open an issue in the [GitHub repository](https://github.com/adpl-repos/AngularLibs/issues).