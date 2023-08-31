import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { take, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

export const patientAuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    take(1),
    map(user => {
      if (!user) {
        router.navigate(['login']);
      }

      if (user?.role === 'doctor') {
        router.navigate(['']);
      }

      return user?.role === 'patient' || user?.role === 'admin';
    })
  );
};

export const patientAuthGuardChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
  patientAuthGuard(route, state);

export const doctorAuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    take(1),
    map(user => {
      if (!user) {
        router.navigate(['login']);
      }

      if (user?.role === 'patient') {
        router.navigate(['homepage']);
      }

      return user?.role === 'doctor' || user?.role === 'admin';
    })
  );
};

export const doctorAuthGuardChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
  doctorAuthGuard(route, state);

export const adminAuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    take(1),
    map(user => {
      if (!user) {
        router.navigate(['login']);
      }

      if (user?.role === 'doctor' || user?.role === 'patient') {
        router.navigate(['homepage']);
      }

      return user?.role === 'admin';
    })
  );
};

export const adminAuthGuardChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
  adminAuthGuard(route, state);
